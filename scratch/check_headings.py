import glob
import re

files = glob.glob('app/**/*.tsx', recursive=True) + glob.glob('components/**/*.tsx', recursive=True)
headings = {}

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
        h_matches = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', content, re.DOTALL)
        for h in h_matches:
            clean_h = ' '.join(re.sub(r'<[^>]+>', ' ', h).split())
            if len(clean_h) > 5:
                headings.setdefault(clean_h, []).append(f)

print('=== ALL HEADINGS CHECK ===')
dups = 0
for h, locs in headings.items():
    unique_locs = list(set(locs))
    if len(unique_locs) > 1:
        dups += 1
        print(f'\nDuplicate Heading ({len(unique_locs)} files): "{h}"')
        for l in unique_locs:
            print(f'  -> {l}')

if dups == 0:
    print('No duplicate headings found across active pages!')
