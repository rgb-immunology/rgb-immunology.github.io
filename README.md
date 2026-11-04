# RGB lab website

Website of the RGB lab (Clinical Systems Immunology, Universitätsklinikum Erlangen / FAU).

The site is plain HTML: no build step and no installation. **All content you would normally change lives in the
`content/` folder**, in six small text files. You do not need to touch `index.html`.

| File | What it controls |
|---|---|
| `content/site.js` | Logo, browser-tab icon, Home picture with its headline and text, Team group photo, Lab Life photos |
| `content/team.js` | Lab members (with optional profile pages) and alumni |
| `content/contacts.js` | The people shown under "Get in touch" (Funding page), "Write to us" (Team page, when hiring) and "How to apply" (Open positions) |
| `content/publications.js` | Papers, the 3 Featured papers, journal logos |
| `content/news.js` | Press articles, outlet logos, videos & talks |
| `content/positions.js` | Open positions (the "Open positions" tab appears only when there are positions) |

Pictures go in these folders:

| Folder | What goes there |
|---|---|
| `images/people/` | Photos of lab members and alumni |
| `images/team/` | The group photo on the Team page |
| `images/lab-life/` | Lab Life photos |
| `images/` | An optional Home picture (none at the moment) |
| `logo/` | Lab logo (`rgb-lab-mark.svg`), browser-tab icon (`rgb-lab-icon.svg`), FAU and UKER logos |
| `images/journal-logos/`, `images/press-logos/`, `images/video-thumbs/` | Logos and thumbnails for Publications and Press & Media |
| `images/funders/`, `images/teaching-logos/` | Funder logos (Home, Funding) and programme/fellowship logos (Teaching & Mentorship) |
| `files/positions/` | Optional PDF announcements for open positions (create the folder when needed) |

---

## View the site

- **On your computer:** download or clone the repository and double-click `index.html`.
  Keep the folders next to it; the page loads its pictures from them.
- **Online with GitHub Pages (only after the repository is made public at launch; while it's private, use "On your computer" above):** in the repository go to **Settings → Pages**, choose
  **Deploy from a branch**, branch **main**, folder **/ (root)**, and save. After a minute the site is live at
  `https://<github-user-or-organisation>.github.io/<repository-name>/`. Every change you commit appears there
  automatically within a minute or two.

## Edit on github.com (no software needed)

1. Open the file (for example `content/team.js`) and click the **pencil icon** (Edit).
2. Make the change, then click **Commit changes…** and write a short note such as "Add Jane Doe".
3. To add a picture: open the folder (for example `images/people`), click **Add file → Upload files**,
   drag the picture in and commit. Then write its path in the content file (see below).

**Rules that keep the site working**

- Text goes between "double quotes". If the text itself needs a quote, write `\"`.
- Entries in a list are separated by commas. A comma after the last entry is fine.
- File names: use lowercase letters, numbers and dashes, no spaces (for example `jane-doe.jpg`).
  Paths are case-sensitive on GitHub Pages: `Jane-Doe.JPG` and `jane-doe.jpg` are different files.
- If the page turns blank after an edit, a quote or comma is missing. Open the file's **History** on GitHub,
  compare with the previous version, or revert the last commit.

---

## Common tasks

### Add a lab member

In `content/team.js`, copy a line inside `members` and change it:

```js
{ name: "Jane Doe", role: "Postdoctoral fellow", area: "Wet lab", photo: "" },
```

- `positions` (optional) is a list of positions shown on the person's profile page, under the photo.
- `area` is the small label under the role: `"Dry lab"`, `"Wet lab"`, `"Clinical"`, `"Administration"`.
- Members and alumni are sorted automatically by family name (the last word of the name, ignoring titles),
  so the order in the file does not matter.
- A role can have a line break: `role: "Rheumatologist,\npostdoctoral fellow"`.
- In a `bio`, `\n\n` inside the quotes starts a new paragraph (no spaces around it).

Every member automatically gets a profile page. To fill it, add a `profile` (see Zahra Moslehi's entry):

```js
{ name: "Jane Doe", role: "Postdoctoral fellow", area: "Wet lab", photo: "",
  profile: {
    affiliation: "Universitätsklinikum Erlangen", email: "", linkedin: "https://…", scholar: "https://…", twitter: null,
    bio: "First paragraph.\n\nSecond paragraph.",
    interests: ["Single-cell genomics", "Autoimmunity"],
    education: [{ degree: "PhD in Immunology", year: "2020", school: "University of …" }]
  } },
```

### Remove a lab member, or move them to the alumni

Delete their line from `members`. To keep them as alumni, add a line to `alumni` in the same file:

```js
{ name: "Jane Doe", role: "Postdoctoral fellow", now: "Group leader, University of …", photo: "", bio: "" },
```

`bio` is a short text shown when a visitor clicks the alumnus' row (no LinkedIn / Scholar buttons for alumni).

### Add or change a person's photo

1. Upload the photo to `images/people/` (square, about 800 × 800 px and under 300 KB, e.g. `jane-doe.jpg`).
   Crop and shrink camera photos first: a full-size photo looks blurry on the site and loads slowly.
2. In `content/team.js`, set `photo: "images/people/jane-doe.jpg"` on that person.
   Leave `photo: ""` to show the blue silhouette.

Only publish photos of people who have agreed to it in writing.

### Change the logo

Upload the new logo to `logo/`, then in `content/site.js` change `logo` (top bar) and `favicon` (browser tab).
An SVG or PNG that looks good on the dark blue bar works best.
If the new logo already contains the words "RGB lab", set `showLabName: false`.

### Change the main (Home) picture and its text

`heroTitle` and `heroText` in `content/site.js` are the headline and paragraph at the top of Home, which fills
the first screen. Below them, `heroJournals` lists the journals after "Recent work published in" and `heroNote` is
the short line under them (currently "Forbes 30 Under 30 · 2025"); use `[]` / `""` to hide them. The soft
blurred circles on the right are the logo's three circles, drawn by the page itself (no image file).
At the moment there is no picture (`heroImage: ""`). To add a picture behind the text instead, upload a wide
picture (about 5:2, at least 1600 px wide) to `images/` and set `heroImage` and `heroImageAlt` (a short
description for screen readers); the text then sits in a blue box.

### Change the Team group photo

Upload it to `images/team/` and change `teamPhoto`, `teamPhotoAlt` and `teamPhotoCaption` in `content/site.js`.

### Add or remove a contact ("Write to us" / "Get in touch")

In `content/contacts.js`, copy a line to add a contact, or delete a line to remove one:

```js
{ name: "Lisa Fischer", role: "Lab coordinator", email: "lisa.fischer@uk-erlangen.de" },
```

### Add a paper

In `content/publications.js`, copy a block in `list` (newest first) and fill it in. The year buttons are
created automatically from the years. To show a journal logo, the `journal` name must match a name in
`journalLogos` (add the logo file to `images/journal-logos/` and a line to `journalLogos` if needed).
Use journal **logos** only, never cover images (covers are copyrighted).
To change the 3 large Featured cards, put a piece of each paper's title in `featured`.

### Add a news article or video

In `content/news.js`, copy a block in `press` or `videos` (newest first). The first 4 press items also
appear on the Home page. For a logo, the `outlet` must match a name in `outletLogos`.

### Announce an open position

Open positions live in `content/positions.js`. While its `list` is empty, the website shows nothing about open
positions. As soon as the list has a position, the site shows it automatically:

- an **Open positions** tab appears in the menu (after Team), with one card per position;
- the Team page shows a **"We are hiring – 1 open position"** panel with **See open positions →** and
  **Write to us →** buttons;
- the Open positions page ends with **How to apply** (the `howToApply` text) and the contacts from
  `content/contacts.js`.

**To add a position**

1. Open `content/positions.js` (on GitHub: click the file, then the pencil icon).
2. Find the empty list near the end of the file:

   ```js
     list: [
     ]
   ```

3. Put the position between the two brackets. A complete example:

   ```js
     list: [
       {
         title: "PhD student in computational immunology",
         type: "PhD position",
         area: "Dry lab",
         start: "As soon as possible",
         deadline: "Applications until 30 November 2026",
         summary: "You will develop machine-learning methods for high-dimensional single-cell and cytometry data from our clinical trials of T cell engager and CAR T-cell therapies, working closely with clinicians and wet-lab scientists.",
         requirements: [
           "Master's degree in bioinformatics, computer science, statistics or a related field",
           "Programming experience in Python or R",
           "Interest in immunology and clinical translation",
           "Good command of English"
         ],
         link: ""
       }
     ]
   ```

4. Commit (or save and reload `index.html` on your computer). The tab and the Team panel appear immediately.

| Field | What to write |
|---|---|
| `title` | Title of the position |
| `type` | Short label shown as a dark tag: `"PhD position"`, `"Postdoc"`, `"Dr. med. thesis"`, `"Master's thesis"`, `"Technician"`, … |
| `area` | Light tag: `"Dry lab"`, `"Wet lab"`, `"Clinical"`, `"Administration"`, or `""` for none |
| `start` | Shown as "Start: …", e.g. `"As soon as possible"`; `""` to leave out |
| `deadline` | Shown after the start, e.g. `"Applications until 30 November 2026"`; `""` to leave out |
| `summary` | A few sentences about the project and the role |
| `requirements` | List shown under "What we are looking for"; `[]` to leave out |
| `link` | Optional "Full announcement ↗" link: a web address, or a PDF uploaded to `files/positions/` (e.g. `"files/positions/phd-2026.pdf"`); `""` for none |

**More than one position:** put a comma after the closing `}` of the first one and add the next `{ … }` below it.
The Team panel then says "2 open positions".

**To remove a position** when it is filled: delete its `{ … }` block (including the comma between blocks, if
there is one). When the list is empty again (`list: [ ]`), the tab and the Team panel disappear.

The texts `intro` (top of the Open positions page) and `howToApply` (the How to apply box) are at the top of the
same file. The page address is `…/#/positions`.

### Add a Lab Life photo

Upload it to `images/lab-life/` and copy a block in `labLife` in `content/site.js`.

### Hide empty social buttons on profile pages

Profile pages show LinkedIn / Google Scholar / X buttons; without a link they appear faded. Set
`hideEmptyLinks: true` in `content/site.js` to hide them. In a profile, `twitter: null` (etc.) never shows that button.

---

## What is not in the content files

The texts of the Funding and Teaching & Mentorship pages, the page intros and the footer are in `index.html`
(search for the text you want to change). Ask before restructuring `index.html`; the content files are the
safe place for everyday updates.

## Pages and addresses

Every page has its own address, so links can be shared and the browser's Back button works:
Home `/`, Team `#/team`, Open positions `#/positions`, Publications `#/publications`, Funding `#/funding`,
Teaching & Mentorship `#/teaching`, Lab Life `#/lab-life`, Press & Media `#/press`, and a profile page for every
member at `#/people/<name>` (e.g. `#/people/zahra-moslehi`, made automatically from the name).

## Privacy and rights

- **No third-party requests.** The site loads its font, scripts and pictures from this repository and contacts no
  other website (no Google Fonts, no YouTube embeds, no trackers). Keep it that way: embedding Google Fonts, Google
  Maps or YouTube videos sends visitors' IP addresses to those services and must then be covered in the privacy
  policy. Link to videos instead of embedding them, as the Press & Media page does.
- **Photos and profiles:** only publish photos, bios, education and links of people who have agreed to it
  (in writing for photos). This also applies to alumni bios.
- **Logos** of journals, news outlets, funders, programmes and FAU/UKER are trademarks of their owners and are
  used to identify them. Use logos only, never journal cover images (covers are copyrighted artwork).
- **YouTube thumbnails** in `images/video-thumbs/` belong to the channels that published the videos.

## Design reference

Keep new content consistent with the existing look.

- **Font:** Source Sans 3 (the typeface of fau.de), included in `assets/fonts/`.
- **Colours:** page background light cream `#FFFDF9`; navy `#071D3F` (top bar); section headings dark grey
  `#333333` (Alumni and Fellowships in FAU blue `#04316A`); FAU blue `#04316A` for labels and small headings;
  link blue `#0A4C95` (hover `#2F7BD6`); panels cream `#F6F0E5`, light blue `#EEF3FA` (Fellowships, area tags)
  or white (Support our research); buttons light blue `#EEF3FA` with FAU-blue text; thin lines `#EEEAE3`;
  logo colours red `#E53935`, green `#43A047`, blue `#1E88E5` (R, G, B; used for the logo and the blurred circles on Home). Names are written without titles.
- **Pictures:** member photos square (about 800 × 800 px); optional Home picture wide (about 5:2, at least 1600 px);
  Lab Life photos 4:3; logos as SVG or PNG with a transparent or white background.

## How it works (for whoever maintains the code)

- `index.html` contains the page layout, styles and logic. It reads the content files in `content/`, which are
  loaded as plain scripts (`window.RGB.… = {…}`) so the site also works when opened from disk (browsers block
  loading JSON files from disk).
- `assets/js/` holds the small page runtime (`dc-runtime.js`) and React / React DOM. Nothing is loaded from the
  internet.
- No build step: what is in the repository is exactly what is served.

## Authors and credits

- **Concept, content direction and supervision:** Prof. Dr. med. Ricardo Grieshaber-Bouyer,
  Principal Investigator, RGB lab (Universitätsklinikum Erlangen / FAU)
- **Design and development:** Zahra Moslehi, RGB lab (Universitätsklinikum Erlangen / FAU),
  [GitHub](https://github.com/zamoslehi) 
- **Content:** members of the RGB lab
- Font: Source Sans 3 © Adobe, SIL Open Font License 1.1 (`assets/fonts/`)
- React and React DOM, MIT licence (`assets/js/`)
- The RGB lab logo was made for this site.

## How to cite

> Moslehi, Z., & Grieshaber-Bouyer, R. (2026). *RGB lab website* (Version 1.0) [Computer software].
> RGB lab, Universitätsklinikum Erlangen. https://github.com/rgb-lab/rgb-lab-website
