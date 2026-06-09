<div align="center">

```
     _ _____       _____ _  ___
    | |_   _|    | ____/ |/ _ \
    | | | |______| |__ | | (_) |
 _  | | | |______|___ \| |\__, |
| |_| | | |       ___) |_|  / /
 \___/  |_|      |____/   /_/
```

**https://jt-519.github.io**

</div>

---

### About

Personal developer homepage. Static site, no frameworks, no build step.

### Tech

| Layer | Stack |
|-------|-------|
| Markup | Semantic HTML5 |
| Style | CSS custom properties, responsive, dark-only |
| Script | Vanilla JS (nav, scroll reveal, typewriter) |
| Font | JetBrains Mono + Noto Sans SC (Google Fonts) |
| Icons | Hand-crafted inline SVG |
| Deploy | GitHub Pages |

### Structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── nav.js
│   ├── scroll.js
│   └── terminal.js
└── assets/
    └── icons/
        ├── chromium.svg
        ├── android.svg
        ├── performance.svg
        ├── ai.svg
        ├── github.svg
        ├── email.svg
        └── twitter.svg
```

### Local Preview

```bash
# Any static server works
python3 -m http.server 8080
# open http://localhost:8080
```

### Deploy

Push to `main` branch. GitHub Pages serves from root automatically.

---

<div align="center">

<sub>Built with vim + coffee. No dependencies.</sub>

</div>
