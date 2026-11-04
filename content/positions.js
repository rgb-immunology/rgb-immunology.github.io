// RGB lab website content. Edit this file to change the website; no other file needs to change.
// Text goes between "quotes". Keep the commas between entries. See README.md for step-by-step help.
window.RGB = window.RGB || {};

// ---------------------------------------------------------------------------------------------
// OPEN POSITIONS
// ---------------------------------------------------------------------------------------------
// When "list" contains at least one position, an "Open positions" tab appears in the menu, the
// positions are shown on that page, and the Team page says "We are hiring".
// When "list" is empty ( list: [] ), the tab disappears automatically.
//
// To ADD a position: copy the example below (without the // at the start of each line) into "list".
// To REMOVE a position: delete its { ... } block.
//
//   title         Title of the position
//   type          Short label, e.g. "PhD position", "Postdoc", "Dr. med. thesis", "Master's thesis", "Technician"
//   area          Optional label: "Dry lab", "Wet lab", "Clinical", "Administration" ("" for none)
//   start         Optional, e.g. "As soon as possible" or "1 January 2027"
//   deadline      Optional, e.g. "Applications until 30 November 2026"
//   summary       A few sentences about the project and the role
//   requirements  Optional list of short points ("What we are looking for")
//   link          Optional link to the full announcement: a web address, or a PDF you upload to
//                 files/positions/ (e.g. "files/positions/phd-2026.pdf"). "" for none.
//
// Example:
//   {
//     title: "PhD student in computational immunology",
//     type: "PhD position",
//     area: "Dry lab",
//     start: "As soon as possible",
//     deadline: "Applications until 30 November 2026",
//     summary: "You will develop machine-learning methods for single-cell and cytometry data from our clinical trials of T cell engager and CAR T-cell therapies.",
//     requirements: ["Master's degree in bioinformatics, computer science or a related field", "Experience with Python or R", "Interest in immunology"],
//     link: ""
//   },

RGB.positions = {
  // Text at the top of the Open positions page.
  intro: "We welcome applications by creative, entrepreneurially-minded candidates across wet and dry immunology, bioinformatics and data science.",

  // Text in the "How to apply" box; the contacts from content/contacts.js are shown under it.
  howToApply: "Send a short letter with your concrete area of interest, your CV and the names of two references to one of the contacts below.",

  list: [
  ]
};
