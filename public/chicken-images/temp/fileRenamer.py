import os

for i, x in enumerate(os.listdir()):
    for exclusion in ['.py']:
        if exclusion in x:
            continue
    os.rename(x, f"{i}.jpeg")
