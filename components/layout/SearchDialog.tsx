"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, X, CornerDownLeft } from "lucide-react";
import {
  KIND_LABEL,
  KIND_ORDER,
  highlight,
  search,
  type ResultKind,
  type SearchEntry,
} from "@/lib/search-index";
import { translator } from "@/lib/messages";

/** Marks the words that matched, so a hit in a long title is obvious. */
function Marked({ text, query }: { text: string; query: string }) {
  return (
    <>
      {highlight(text, query).map((part, i) =>
        part.hit ? (
          <mark key={i} className="bg-transparent font-bold text-[#10E784]">
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </>
  );
}

/**
 * Site search. Opens on Ctrl/Cmd-K or from the header, matches in the browser
 * against an index built from the site's own data, and is driven entirely from
 * the keyboard: arrows move, Enter opens, Escape closes.
 *
 * Deliberately no search library. The index is a few dozen entries, so ranking
 * is a scoring loop rather than another dependency on a page we just put on a
 * JavaScript diet.
 */
export function SearchDialog({ onClose }: { onClose: () => void }) {
  const t = translator();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [kind, setKind] = useState<ResultKind | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => search(query, kind ? 12 : 8, kind ?? undefined), [query, kind]);

  // Which filters would actually return something for this query — a chip that
  // leads to an empty list is worse than no chip.
  const availableKinds = useMemo(() => {
    if (!query.trim()) return [];
    return KIND_ORDER.filter((k) => search(query, 1, k).length > 0);
  }, [query]);

  // Grouped for display, but kept in one flat order for the keyboard.
  const groups = useMemo(() => {
    const byKind = new Map<ResultKind, SearchEntry[]>();
    for (const r of results) {
      const list = byKind.get(r.kind) ?? [];
      list.push(r);
      byKind.set(r.kind, list);
    }
    return [...byKind.entries()];
  }, [results]);

  const flat = useMemo(() => groups.flatMap(([, entries]) => entries), [groups]);

  useEffect(() => {
    // Focus immediately and again next frame. The first covers the normal case;
    // the second covers a slow mount, where a keystroke typed before the field
    // is ready would otherwise go nowhere.
    inputRef.current?.focus();
    const raf = requestAnimationFrame(() => inputRef.current?.focus());
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = previous;
    };
  }, []);

  // Keep the highlighted row in view when arrowing past the fold.
  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (entry: SearchEntry) => {
    onClose();
    router.push(entry.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (flat.length ? (i + 1) % flat.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (flat.length ? (i - 1 + flat.length) % flat.length : 0));
    } else if (e.key === "Enter" && flat[active]) {
      e.preventDefault();
      go(flat[active]);
    }
  };

  let index = -1;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center p-4 pt-[12vh] sm:p-6 sm:pt-[14vh]">
      <div
        className="anim-fade-in fixed inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={t("search.label")}
        onKeyDown={onKeyDown}
        className="anim-scale-in relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-white/15 bg-[#0E1211] shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-5">
          <Search className="h-4 w-4 shrink-0 text-[#10E784]" aria-hidden="true" />
          <input
            ref={inputRef}
            autoFocus
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
              setKind(null);
            }}
            placeholder={t("search.placeholder")}
            aria-label={t("search.label")}
            aria-controls="search-results"
            aria-expanded={flat.length > 0}
            role="combobox"
            aria-autocomplete="list"
            aria-activedescendant={flat[active] ? `search-option-${flat[active].id}` : undefined}
            className="min-h-[56px] w-full bg-transparent text-base text-white placeholder:text-[#76839A] focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="rounded-full p-2 text-[#94A3B8] transition-colors hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {availableKinds.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto border-b border-white/10 px-4 py-2">
            {[null, ...availableKinds].map((k) => {
              const selected = kind === k;
              return (
                <button
                  key={k ?? "all"}
                  onClick={() => {
                    setKind(k);
                    setActive(0);
                  }}
                  aria-pressed={selected}
                  className={`min-h-[36px] shrink-0 rounded-full px-3 text-xs font-semibold transition-colors ${
                    selected
                      ? "bg-[#10E784] text-[#0A0D0C]"
                      : "border border-white/10 text-[#94A3B8] hover:border-[#10E784]/50 hover:text-white"
                  }`}
                >
                  {k ? KIND_LABEL[k] : "Everything"}
                </button>
              );
            })}
            <span className="ms-auto shrink-0 ps-2 text-xs text-[#76839A]" aria-live="polite">
              {flat.length} result{flat.length === 1 ? "" : "s"}
            </span>
          </div>
        )}

        <ul
          ref={listRef}
          id="search-results"
          role="listbox"
          aria-label="Search results"
          className="max-h-[52vh] overflow-y-auto p-2"
        >
          {query.trim() === "" ? (
            <li className="px-4 py-6 text-sm text-[#94A3B8]">
              Try a service, a city, a document — &ldquo;MISA&rdquo;, &ldquo;Jeddah&rdquo;, &ldquo;residency&rdquo;.
            </li>
          ) : flat.length === 0 ? (
            <li className="px-4 py-6 text-sm text-[#94A3B8]" aria-live="polite">
              Nothing matches &ldquo;{query}&rdquo;. The team answers questions the site does not:{" "}
              <a href="/contact" className="text-[#10E784] underline underline-offset-2">
                ask them directly
              </a>
              .
            </li>
          ) : (
            groups.map(([kind, entries]) => (
              <li key={kind}>
                <p className="px-4 pb-1 pt-3 text-xs font-bold uppercase tracking-wider text-[#76839A]">
                  {KIND_LABEL[kind]}
                </p>
                <ul>
                  {entries.map((entry) => {
                    index += 1;
                    const isActive = index === active;
                    const position = index;
                    return (
                      <li key={entry.id}>
                        <button
                          id={`search-option-${entry.id}`}
                          role="option"
                          aria-selected={isActive}
                          data-active={isActive}
                          onMouseEnter={() => setActive(position)}
                          onClick={() => go(entry)}
                          className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-start transition-colors ${
                            isActive ? "bg-[#10E784]/12" : "hover:bg-white/[0.04]"
                          }`}
                        >
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-semibold text-white">
                              <Marked text={entry.title} query={query} />
                            </span>
                            <span className="block truncate text-xs text-[#94A3B8]">
                              <Marked text={entry.detail} query={query} />
                            </span>
                          </span>
                          {isActive && (
                            <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-[#10E784]" aria-hidden="true" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))
          )}
        </ul>

        <p className="hidden items-center gap-4 border-t border-white/10 px-5 py-3 text-xs text-[#76839A] sm:flex">
          <span>
            <kbd className="rounded border border-white/15 px-1.5 py-0.5 font-mono">↑</kbd>{" "}
            <kbd className="rounded border border-white/15 px-1.5 py-0.5 font-mono">↓</kbd> to move
          </span>
          <span>
            <kbd className="rounded border border-white/15 px-1.5 py-0.5 font-mono">Enter</kbd> to open
          </span>
          <span>
            <kbd className="rounded border border-white/15 px-1.5 py-0.5 font-mono">Esc</kbd> to close
          </span>
        </p>
      </div>
    </div>
  );
}
