import glob
import re

files = glob.glob('**/*.tsx', recursive=True)
texts = {}

for f in files:
    if 'node_modules' in f or '.next' in f:
        continue
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
        # Find raw text inside JSX elements
        matches = re.findall(r'>\s*([^<{}\n][^<{}\n]{15,})\s*<', content)
        for m in matches:
            clean = ' '.join(m.split())
            if len(clean) > 25 and not clean.startswith('import') and not clean.startswith('export'):
                texts.setdefault(clean, []).append(f)

print('=== DUPLICATE JSX TEXT IDENTIFIED ===')
count = 0
for text, locs in texts.items():
    unique_files = list(set(locs))
    if len(unique_files) > 1:
        count += 1
        print(f'\n{count}. Duplicate ({len(unique_files)} files):')
        print(f'   "{text}"')
        for u in unique_files:
            print(f'   -> {u}')

if count == 0:
    print('No duplicate text strings found across different files.')
