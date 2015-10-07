css = ""

for n in range(3, 100):
    css += """
.ffs-{size} {{
    font-size: {size}px;
}}
""".format(size=n)
print(css)
