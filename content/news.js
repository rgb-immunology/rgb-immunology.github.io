// RGB lab website content. Edit this file to change the website; no other file needs to change.
// Text goes between "quotes". Keep the commas between entries. See README.md for step-by-step help.
window.RGB = window.RGB || {};

// ---------------------------------------------------------------------------------------------
// PRESS & MEDIA (the first 4 news items also appear on the Home page)
// ---------------------------------------------------------------------------------------------
// To ADD a news item or video: copy a { ... } block, paste it (newest first) and change it.
// To REMOVE one: delete its block.

RGB.news = {
  // News articles: title, outlet (must match a name in "outletLogos" to show a logo), date, url.
  press: [
    { title: "Lifelong drugs for autoimmune diseases don't work well. Now scientists are trying something new", outlet: "Times Free Press", date: "Nov 2025", url: "https://www.timesfreepress.com/news/2025/nov/15/lifelong-drugs-for-autoimmune-diseases-dont-work-well-now-scientists-are-trying-something-new/" },
    { title: "Myeloma drug performs well in autoimmune diseases", outlet: "MedPage Today", date: "Oct 2025", url: "https://www.medpagetoday.com/rheumatology/generalrheumatology/117966" },
    { title: "A cup with the President — Episode 28: Prof. Dr. Grieshaber-Bouyer", outlet: "FAU", date: "Aug 2025", url: "https://www.fau.eu/2025/08/news/a-cup-with-the-president-episode-28-prof-dr-grieshaber-bouyer/" },
    { title: "FAU professor among Forbes' 30 Under 30", outlet: "FAU", date: "Apr 2025", url: "https://www.fau.eu/2025/04/news/fau-professor-among-forbes-30-under-30/" },
    { title: "Forbes 30 Under 30", outlet: "Forbes", date: "2025", url: "https://www.forbes.com/profile/ricardo-grieshaber-bouyer/" },
    { title: "Ein Rheumawirkstoff aus der Krebsmedizin", outlet: "Frankfurter Allgemeine Zeitung", date: "May 2024", url: "https://www.faz.net/aktuell/wissen/medizin-ernaehrung/rheumabehandlung-wie-ein-krebsmedikament-helfen-koennte-19717102.html" },
    { title: "Mit T-Zell-Engagern gegen Rheuma", outlet: "Tagesschau", date: "May 2024", url: "https://www.tagesschau.de/wissen/gesundheit/rheuma-t-cell-engager-100.html" },
    { title: "How a \"date\" between immune cells makes rheumatism disappear", outlet: "Bionity", date: "May 2024", url: "https://www.bionity.com/en/news/1183376/how-a-date-between-immune-cells-makes-rheumatism-disappear.html" },
    { title: "Artrite reumatoide, l'impiego di anticorpi monoclonali rivoluziona la terapia dei casi gravi", outlet: "Insalute News", date: "May 2024", url: "https://www.insalutenews.it/in-salute/artrite-reumatoide-limpiego-di-anticorpi-monoclonali-rivoluziona-la-terapia-dei-casi-gravi/" },
    { title: "FAU team develops new approach for treating autoimmune diseases", outlet: "FAU Erlangen-Nürnberg", date: "May 2024", url: "https://www.fau.eu/2024/05/02/news/fau-team-develops-new-approach-for-treating-autoimmune-diseases/" },
    { title: "Clinical report: academic trials signal autoimmune opportunities for T cell engagers", outlet: "BioCentury", date: "May 2024", url: "https://www.biocentury.com/article/652286/clinical-report-academic-trials-signal-autoimmune-opportunities-for-t-cell-engagers" },
    { title: "Rheuma: T- trifft B-Zelle", outlet: "MT im Dialog", date: "Apr 2024", url: "https://www.mtdialog.de/news/artikel/rheuma-t-gegen-b-zelle" },
    { title: "Wie ein „Date\" von Immunzellen Rheuma verschwinden lässt", outlet: "Informationsdienst Wissenschaft", date: "Apr 2024", url: "https://idw-online.de/de/news832692" },
    { title: "Rheuma schon vor dem Ausbruch verhindern?", outlet: "Tagesschau", date: "Mar 2024", url: "https://www.tagesschau.de/wissen/gesundheit/rheuma-forschung-100.html" },
    { title: "Studie: Rheuma kann schon vor dem Ausbruch verhindert werden", outlet: "Bayerischer Rundfunk", date: "Mar 2024", url: "https://web.archive.org/web/20260114095454/https://www.br.de/nachrichten/wissen/studie-rheuma-kann-schon-vor-dem-ausbruch-verhindert-werden,U5nSoUu" },
    { title: "Super code cracked: central inflammation system discovered", outlet: "FAU Erlangen-Nürnberg", date: "Jan 2024", url: "https://www.fau.eu/2024/01/31/news/research/super-code-cracked-central-inflammation-system-discovered/" },
    { title: "Neu an der Uni: Prof. Dr. med. Ricardo Grieshaber-Bouyer", outlet: "FAU Erlangen-Nürnberg", date: "Oct 2023", url: "https://www.fau.de/2023/10/news/neu-an-der-uni-prof-dr-med-ricardo-grieshaber-bouyer-rodrigues/" },
    { title: "Tracking neutrophil development along a continuous spectrum with single cell analysis", outlet: "10x Genomics", date: "Jul 2021", url: "https://www.10xgenomics.com/blog/tracking-neutrophil-development-along-a-continuous-spectrum-with-single-cell-analysis" },
    { title: "Innate immunity in the focus of Heidelberg's rheumatology — research award of the German Society for Rheumatology", outlet: "Heidelberg University Hospital", date: "Oct 2020", url: "https://www.klinikum.uni-heidelberg.de/newsroom/angeborene-immunitaet-im-fokus-der-heidelberger-rheumatologie/" }
  ],

  // Outlet logos: "Outlet name": "path to logo file" (files in images/press-logos/).
  outletLogos: { "Times Free Press": "images/press-logos/Times_Free_Press.svg", "MedPage Today": "images/press-logos/MedPage_Today.svg", Forbes: "images/press-logos/Forbes.svg", "Frankfurter Allgemeine Zeitung": "images/press-logos/FAZ.svg", Tagesschau: "images/press-logos/Tagesschau.svg", Bionity: "images/press-logos/Bionity.png", "Insalute News": "images/press-logos/Insalute_News.png", BioCentury: "images/press-logos/BioCentury.svg", "MT im Dialog": "images/press-logos/MT_im_Dialog.svg", "Informationsdienst Wissenschaft": "images/press-logos/idw.png", "Bayerischer Rundfunk": "images/press-logos/Bayerischer_Rundfunk.svg", "10x Genomics": "images/press-logos/10x_Genomics.svg", "Heidelberg University Hospital": "images/press-logos/Heidelberg_University_Hospital.svg", FAU: "logo/fau-logo.png", "FAU Erlangen-Nürnberg": "logo/fau-logo.png" },

  // Videos & talks: title, source (channel · date), url (YouTube link), thumbnail (image file in images/video-thumbs/).
  videos: [
    { title: "Lupus and T cell engagers: what you should know", source: "Lupus Research Alliance · Apr 2026", url: "https://www.youtube.com/watch?v=qrnhsuXBZuc", thumbnail: "images/video-thumbs/qrnhsuXBZuc.jpg" },
    { title: "BioVerse #28 — China's early-stage clinical development is rewriting the R&D playbook", source: "BioVerse · Feb 2026", url: "https://www.youtube.com/watch?v=yAShMQt-kAk", thumbnail: "images/video-thumbs/yAShMQt-kAk.jpg" },
    { title: "Inside the science — understanding T cell engagers and CLN-978 for autoimmune diseases", source: "CreakyJoints · Feb 2026", url: "https://www.youtube.com/watch?v=mKEdlICC-o4", thumbnail: "images/video-thumbs/mKEdlICC-o4.jpg" },
    { title: "Practical questions about clinical trials with T cell engagers", source: "CreakyJoints · Jan 2026", url: "https://www.youtube.com/watch?v=PrSVRgavxJ0", thumbnail: "images/video-thumbs/PrSVRgavxJ0.jpg" },
    { title: "Redefining autoimmune treatment with CLN-978", source: "CreakyJoints · Oct 2025", url: "https://www.youtube.com/watch?v=J-Uq8RCLdpU", thumbnail: "images/video-thumbs/J-Uq8RCLdpU.jpg" },
    { title: "Sweet and Sour, Ep. 77 — CAR-T cells in autoimmunity", source: "European Society for Dermatological Research · Jul 2025", url: "https://www.youtube.com/watch?v=4cCO_QpLKHI", thumbnail: "images/video-thumbs/4cCO_QpLKHI.jpg" }
  ]
};
