#!/usr/bin/env python3

BUSINESSCARDS = [
    {"name": "creativepapers",
     "title": "Creative Papers",
     "description": "A clean modern business card, perfect for branding your new project. Ideal for personal / professional branding and more."},
    {"name": "simplyartsy",
     "title": "Simply Artsy",
     "description": "A clean modern business card, perfect for branding your new project. Ideal for personal / professional branding and more."},
    {"name": "watercolourstrokes",
     "title": "Watercolour Strokes",
     "description": "A clean modern watercolour business card, perfect for branding your new project. Ideal for personal / professional branding and more."},
    {"name": "nuderose",
     "title": "Nude Rose",
     "description": "A clean modern floral business card, perfect for branding your new project. Ideal for personal / professional branding and more."},
    {"name": "darktulips",
     "title": "Dark Tulips",
     "description": "A clean modern floral business card, perfect for branding your new project. Ideal for personal / professional branding and more."},
    {"name": "swirly",
     "title": "Swirly",
     "description": "A clean modern abstract business card, perfect for branding your new project. Ideal for personal / professional branding and more."}]

def main():
    with open("templates_businesscard.html") as fp:
        template = fp.read()

    for i in range(len(BUSINESSCARDS)):
        curr = BUSINESSCARDS[i]
        
        # Previous page for navigation
        if i == 0:
            prevpage = "templates_glimpsemagazine.html"
        else:
            prevpage = "templates_%s.html" % BUSINESSCARDS[i-1]["name"]

        # Next page for navigation
        if i + 1 >= len(BUSINESSCARDS):
            nextpage = "templates_citylights.html"
        else:
            nextpage = "templates_%s.html" % BUSINESSCARDS[i+1]["name"]

        # Fill in template parameters
        curr["prev"] = prevpage
        curr["next"] = nextpage
        curr["image"] = curr["name"] + ".png"
        content = template % curr
        page = "../templates_%s.html" % curr["name"]

        with open(page, "w") as fp:
            fp.write(content)

if __name__ == "__main__":
    main()
