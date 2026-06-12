import re

with open(r'e:\DnD AI\main_page.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove strings
no_strings = re.sub(r'"[^"]*"', '', content)
no_strings = re.sub(r"'[^']*'", '', no_strings)
no_strings = re.sub(r'`[^`]*`', '', no_strings)

opens = no_strings.count('{')
closes = no_strings.count('}')
opens_p = no_strings.count('(')
closes_p = no_strings.count(')')
opens_b = no_strings.count('[')
closes_b = no_strings.count(']')

print(f'Curly braces: {{ {opens} }} {closes} diff={opens-closes}')
print(f'Parentheses: ( {opens_p} ) {closes_p} diff={opens_p-closes_p}')
print(f'Square brackets: [ {opens_b} ] {closes_b} diff={opens_b-closes_b}')

if opens == closes and opens_p == closes_p and opens_b == closes_b:
    print('All brackets matched!')
else:
    print('MISMATCH!')
