// RGB lab website content. Edit this file to change the website; no other file needs to change.
// Text goes between "quotes". Keep the commas between entries. See README.md for step-by-step help.
window.RGB = window.RGB || {};

// ---------------------------------------------------------------------------------------------
// SITE: logo, main (Home) picture, team photo and Lab Life photos
// ---------------------------------------------------------------------------------------------
// To change a picture: put the new file in the images/ (or logo/) folder and write its path here.

RGB.site = {
  // Lab logo in the top bar (SVG or PNG, ideally light on dark) and the small browser-tab icon.
  logo: "logo/rgb-lab-mark.svg",
  favicon: "logo/rgb-lab-icon.svg",
  // true = show the words "RGB lab" next to the logo; false if your logo image already contains the name.
  showLabName: true,

  // Home page: the headline and text at the top. Optionally a big picture behind them (a wide image, about 5:2,
  // cropped to fill the band; the text then sits in a blue box) and its description for screen readers.
  // Leave heroImage "" for no picture: the text then sits on the page background.
  heroImage: "",
  heroImageAlt: "",
  heroTitle: "We decode how therapies work, or fail.",
  // Under the Home text: "Recent work published in" with these journal names, and a short note under them.
  // Use an empty list [] / "" to hide them.
  heroJournals: ["New England Journal of Medicine", "Nature Medicine", "The Lancet", "Nature Reviews Immunology"],
  heroNote: "Forbes 30 Under 30 · 2025",
  heroText: "We combine high-dimensional profiling, computational biology and focused mechanistic experiments to understand fundamental principles of immune‑mediated disease and to identify new opportunities for more precise intervention.",

  // Team page: the group photo at the top, its description and the caption under it.
  teamPhoto: "images/team/team-photo.jpg",
  teamPhotoAlt: "The RGB lab team",
  teamPhotoCaption: "The group at Universitätsklinikum Erlangen",

  // Profile pages: true hides social buttons (LinkedIn, Scholar, X) that have no link yet.
  hideEmptyLinks: true,

  // Lab Life page photos. To ADD one: copy a { ... } block and change it. To REMOVE one: delete its block.
  // width/height: the photo's size in pixels (only the ratio matters). date is optional.
  labLife: [
    {
      photo: "images/lab-life/christmas-party.jpg",
      caption: "Christmas party",
      date: "",
      alt: "The RGB lab team gathered in a living room in front of a Christmas tree",
      width: 1280,
      height: 960
    },
    {
      photo: "images/lab-life/summer-evening.jpg",
      caption: "Summer evening together",
      date: "",
      alt: "Lab members smiling around an outdoor dinner table under string lights",
      width: 1280,
      height: 960
    }
  ]
};
