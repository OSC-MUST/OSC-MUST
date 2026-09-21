# OSC-MUST — Open Source Community

**Misr University for Science and Technology**

Website: <https://osc-must.github.io/OSC-MUST/>

> We build. We share. We libre.

---

## Who we are

OSC-MUST is a student activity community at Misr University for Science and
Technology (MUST). Our goal is to spread Free/Libre and Open Source Software
(FLOSS) among students from every faculty and every level of experience.

Open source software is built on transparency and collaboration: anyone can
view, modify, and share the code. It grows through community contribution and
peer review rather than behind closed doors. We believe software should respect
the freedom of the people who use it, so we work toward making open, free, and
libre software accessible to everyone.

You do not need to be a programmer to join us. Whether you write code, design
interfaces, write documentation, or are simply curious, you are welcome.

## What we do

- **Workshops**: hands-on sessions where you learn real tools by using them,
  such as the Linux command line, Vim, and Git.
- **Talks**: sessions on the ideas behind free software, including the history
  of computing, licensing, and the ethics of open source.
- **Projects**: Linux-based projects and initiatives that turn what you learn
  into practical experience, including launching your own open source project.
- **Blog**: articles about free software and news from the community.

Topics we care about: FLOSS, Linux, GNU, Open Source, Libre Software.

---

## Guide: how to use the website

The website looks like a Linux terminal. Every page starts with a shell prompt
such as `[user@osc-must ~]$ ls -la ./events/`, and the menu items are written
like commands (`./about`, `./blog`, ...). You don't need to type anything.
Everything is a normal link that you click.

### Navigation bar

The bar at the top of every page:

| Link | What you find there |
| --- | --- |
| `[user@osc-must ~]$` | Back to the home page |
| `./about` | Who we are and what we stand for |
| `./blog` | Articles written by the community |
| `./events` | All workshops and talks |
| `./team` | The people running the community |
| `./join` | Links to join us on social media and GitHub |

### Home page

Scroll down from the logo to see:

1. **Events**: the list of our workshops and talks.
2. **Blog**: the latest articles.
3. **Join Us**: our Facebook, GitHub, and LinkedIn pages.

### Events (`./events`)

Events are shown as a table, like the output of `ls -la`:

| Column | Meaning |
| --- | --- |
| `perms` | Decoration only, part of the terminal style |
| `type` | `workshop` (hands-on), `talk` (presentation), or `Ice-Breaking` (introduction session) |
| `date` | Date of the event (`YYYY-MM-DD`) |
| `filename` | Click it to open the event page |
| `description` | Title of the event |

Each event page shows the date, the type, a short description of what will be
covered, and a `← cd ../events` link back to the list.

Current sessions, in order:

| Date | Type | Session |
| --- | --- | --- |
| 2026-02-28 | Ice-Breaking | Open Source Foundations & Unix-Based System Fundamentals |
| 2026-03-07 | talk | From Vacuum Tubes to Modern Operating Systems |
| 2026-03-14 | workshop | Vim Fundamentals: Efficient Text Editing in the Terminal |
| 2026-03-21 | workshop | Git Fundamentals: Distributed Version Control Explained |
| 2026-04-04 | workshop | Advanced Git: Branching Strategies, Merging, and Conflict Resolution |
| 2026-04-11 | workshop | Collaborative Development with Git & GitHub |
| 2026-04-18 | talk | The Philosophy and Ethics of Open Source Software |
| 2026-04-25 | workshop | Building and Launching Your First Open Source Project |

The sessions build on each other. If you are new, start from the first one.

### Blog (`./blog`)

Posts are listed like files (`launch-statement.md`, `what-is-floss.md`, ...).
Click a filename to read the post. Good first reads:

- **OSC-MUST is live**: our launch statement.
- **Free/Libre Open Source Software**: what FLOSS means.
- **Why we must insist on free software**: why it matters.

### Team (`./team`)

Shows the organizers with their role and GitHub profile. The `handle` column
(`root`, `sudo`, ...) is a playful terminal nickname for each role.

### Join (`./join`)

Follow us to hear about new events:

- Facebook: <https://www.facebook.com/profile.php?id=61587211389685>
- GitHub: <https://github.com/OSC-MUST>
- LinkedIn: <https://www.linkedin.com/company/osc-must/>

---

## Contributing to the website

This website is itself open source, and fixes and improvements are welcome.
It is plain HTML, CSS, and JavaScript with no build step.

```bash
git clone git@github.com:OSC-MUST/OSC-MUST.git
cd OSC-MUST
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

| Path | Contents |
| --- | --- |
| `index.html`, `about.html`, `blog.html`, `events.html`, `team.html`, `join.html` | Main pages |
| `events/` | One page per event |
| `blog/` | One page per blog post |
| `style.css` | All styling |
| `app.js` | Typing effect and scroll animations |
| `assets/` | Logo and images |

To contribute, fork the repository, create a branch, make your change, and
open a pull request. We teach this exact workflow in our Git workshops.
