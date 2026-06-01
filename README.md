<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

# 🖥️ Kairo Vex — Portfolio

A dark, editorial-style personal portfolio for a full stack developer & system architect. Built with pure HTML, CSS, and JavaScript. No frameworks, no installs — just open and impress.

[Features](#-features) · [Getting Started](#-getting-started) · [File Structure](#-file-structure) · [Customization](#-customization)

</div>

---

## ✨ Features

* 🌑 **Dark Editorial Design** — Deep ink-black aesthetic with sharp green accents and anime-inspired visuals
* 🖱️ **Custom Cursor** — Smooth lagging ring cursor with hover states on all interactive elements
* 🎬 **Hero Section** — Full-viewport background with zoom animation, staggered text reveals, and scroll indicator
* 👤 **About Section** — Profile image with angled clip-path frame, bio text, and stat counters
* 📊 **Skills Section** — Animated progress bars triggered on scroll for Front End and Back End skills
* 🃏 **Services Grid** — Hover-reveal cards with top-border sweep animation and arrow indicators
* 📬 **Contact Section** — Split layout with social links and a fully styled contact form
* 📱 **Fully Responsive** — Adapts cleanly from desktop down to mobile with a hamburger nav
* ✨ **Scroll Reveal** — Every section fades and slides in via `IntersectionObserver`

---

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/Zeddy-Forreal/kairo-portfolio.git
cd kairo-portfolio
```

**2. Open in browser**

No build step, no installs. Just open `index.html` directly:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

**3. Make it yours**

Swap out the name, bio text, skill values, and images. Everything is clearly labeled in the HTML.

---

## 📁 File Structure

```
kairo-portfolio/
├── index.html              Full app — markup, styles, and logic in one file
└── media/
    ├── pfp.png             Profile image
    └── wallpaper.png       Hero background image
```

> The app is intentionally single-file for simplicity. All CSS and JavaScript are embedded inline.

---

## 🎨 Customization

All colors are CSS custom properties at the top of the `<style>` block. Edit these to retheme the whole app:

```css
:root {
  --ink:        #080b0a;              /* Page background          */
  --ink2:       #0c110e;              /* Section alt background   */
  --ink3:       #131a15;              /* Card / input background  */
  --rim:        #243028;              /* Borders and dividers     */
  --green:      #2dca72;              /* Primary accent color     */
  --green-lt:   #58e898;              /* Accent hover / highlight */
  --muted:      #7a9080;              /* Secondary / dim text     */
  --txt:        #ccd8cc;              /* Body text                */
  --white:      #edf5ef;              /* Primary text             */
}
```

Skill bar values are controlled via `data-value` attributes on each `.skill-bar` element:

```html
<div class="skill-bar" data-value="93"></div>  <!-- 93% -->
```

---

<div align="center">

Made with 🖤 by [Zeddy-Forreal](https://github.com/Zeddy-Forreal)

</div>
