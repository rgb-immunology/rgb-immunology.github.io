// RGB lab website content. Edit this file to change the website; no other file needs to change.
// Text goes between "quotes". Keep the commas between entries. See README.md for step-by-step help.
window.RGB = window.RGB || {};

// ---------------------------------------------------------------------------------------------
// PUBLICATIONS
// ---------------------------------------------------------------------------------------------
// To ADD a paper: copy a { ... } block in "list", paste it at the right place (newest first) and change it.
// To REMOVE a paper: delete its block.
//   title         Paper title
//   authors       Author list; mark equal contribution with * and corresponding authors with #
//   journal       Full journal name. It must match a name in "journalLogos" to show that logo
//   journalShort  Short name (shown when there is no logo, and on the Home page)
//   year          Year as a number, e.g. 2026 (the year buttons are made from these automatically)
//   url           Link to the paper, ideally "https://doi.org/..."; "" if there is none yet

RGB.publications = {
  // The 3 large "Featured" cards: a piece of each paper's title (enough to find it in the list).
  featured: ["the phase 1/2 CASTLE", "T cell engagers in autoimmune diseases", "BCMA T cell engager therapy in patients"],

  // Journal logos: "Journal name": "path to logo file" (files in images/journal-logos/).
  // Use logos only, never journal cover images (covers are copyrighted artwork).
  journalLogos: {
    "Nature Communications": "images/journal-logos/Nature_Communications.png",
    "New England Journal of Medicine": "images/journal-logos/New_England_Journal_of_Medicine.png",
    bioRxiv: "images/journal-logos/bioRxiv.png",
    "medRxiv (under review)": "images/journal-logos/medRxiv.png",
    "The Lancet": "images/journal-logos/The_Lancet.png",
    "Journal of Clinical Investigation": "images/journal-logos/Journal_of_Clinical_Investigation.png",
    "JCI Insight": "images/journal-logos/JCI_Insight.png",
    "Journal of Rheumatology": "images/journal-logos/Journal_of_Rheumatology.png",
    "The Lancet Rheumatology": "images/journal-logos/The_Lancet_Rheumatology.svg",
    "Nature Medicine": "images/journal-logos/Nature_Medicine.svg",
    "Annals of the Rheumatic Diseases": "images/journal-logos/Annals_of_the_Rheumatic_Diseases.svg",
    "Nature Immunology": "images/journal-logos/Nature_Immunology.svg",
    Blood: "images/journal-logos/Blood.svg",
    "Kidney International": "images/journal-logos/Kidney_International.svg",
    "Arthritis & Rheumatology": "images/journal-logos/Arthritis_and_Rheumatology.png",
    "Cell Reports": "images/journal-logos/Cell_Reports.svg",
    "JAMA Dermatology (in press)": "images/journal-logos/JAMA_Dermatology.svg",
    "Nature Reviews Immunology": "images/journal-logos/Nature_Reviews_Immunology.svg",
    "PLOS Biology": "images/journal-logos/PLOS_Biology.png",
    "Nature Biotechnology": "images/journal-logos/Nature_Biotechnology.svg",
    "Journal of Immunology": "images/journal-logos/Journal_of_Immunology.svg",
    "Nature Reviews Drug Discovery": "images/journal-logos/Nature_Reviews_Drug_Discovery.svg",
    "Journal of Experimental Medicine": "images/journal-logos/Journal_of_Experimental_Medicine.svg",
    SKINdeep: "images/journal-logos/SKINdeep.svg",
    "Rheumatology (Oxford)": "images/journal-logos/Rheumatology.svg",
    Rheumatology: "images/journal-logos/Rheumatology.svg",
    "European Journal of Immunology": "images/journal-logos/European_Journal_of_Immunology.png",
    "Cytometry A": "images/journal-logos/Cytometry_A.png",
    Immunity: "images/journal-logos/Immunity.svg",
    "Blood Advances": "images/journal-logos/Blood_Advances.svg",
    "Journal of Clinical Medicine": "images/journal-logos/Journal_of_Clinical_Medicine.png",
    "Frontiers in Immunology": "images/journal-logos/Frontiers.png"
  },

  list: [
    {
      title: "A feed-forward loop between extrafollicular B cell differentiation and the inflammatory milieu governs remission and relapse in systemic lupus erythematosus",
      authors: "Nöthling DM*, Anoshkin K*, Gavin PG, Rothe T, Bucci L, Iwata F, Garantziotis P, Ferrari N, Clarke SLN, Hagen M, Wirsching A, Bachl J, Tur C, Böltz S, Kretschmann S, Aigner M, Völkl S, Munoz L, Müller F, Mackensen A, Eckstein M, Raimondo MG, Bozec A, Schett G, Grieshaber-Bouyer R",
      journal: "medRxiv (under review)",
      journalShort: "medRxiv",
      year: 2026,
      url: "https://doi.org/10.64898/2026.07.03.26356448"
    },
    {
      title: "BCMA-targeted T cell engager therapy for refractory pemphigus",
      authors: "Ronicke M#, Rothe T, Müller F, Berking C, Schett G, Grieshaber-Bouyer R*#, Sticherling M*",
      journal: "JAMA Dermatology (in press)",
      journalShort: "JAMA Derm",
      year: 2026,
      url: ""
    },
    {
      title: "T cell engagers in autoimmune diseases",
      authors: "Grieshaber-Bouyer R, Wu L, Schett G, Baeuerle PA",
      journal: "Nature Reviews Immunology",
      journalShort: "Nat Rev Immunol",
      year: 2026,
      url: "https://doi.org/10.1038/s41577-026-01318-x"
    },
    {
      title: "The cell cloud: adopting systems biology concepts in the era of single-cell immunology",
      authors: "Shay O, Benoist CB, Grieshaber-Bouyer R",
      journal: "PLOS Biology",
      journalShort: "PLOS Biol",
      year: 2026,
      url: "https://doi.org/10.1371/journal.pbio.3003853"
    },
    {
      title: "Mapping the synovial immune ecosystem in rheumatoid arthritis: cellular cartography and pathotype-guided immune restoration",
      authors: "Du F, Xin W, Li T, Grieshaber-Bouyer R, Ye S",
      journal: "Current Opinion in Immunology",
      journalShort: "Curr Opin Immunol",
      year: 2026,
      url: "https://doi.org/10.1016/j.coi.2026.102811"
    },
    {
      title: "Aligning approaches to rheumatoid arthritis drug development: an expert comparison of FDA and EMA guidance",
      authors: "Ciancio A, Amati A, Gandolfo S, Grieshaber-Bouyer R, Thomas R, Liew R, Valenzuela G, Gossec L, Manara M, Kim TH, Szekanecz Z, Taylor P, Mariette X, Caporali R, Ciccia F",
      journal: "The Lancet Rheumatology",
      journalShort: "Lancet Rheumatol",
      year: 2026,
      url: "https://doi.org/10.1016/s2665-9913(26)00086-x"
    },
    {
      title: "T cell engagers mediate deep cell depletion beyond autoimmunity",
      authors: "Kurzhagen JT, Laqua W, Schiffer M, Grieshaber-Bouyer R",
      journal: "Kidney International",
      journalShort: "Kidney Int",
      year: 2026,
      url: "https://doi.org/10.1016/j.kint.2026.03.010"
    },
    {
      title: "B cell depletion in autoimmune disease: in vivo CAR-T or T cell engagers?",
      authors: "Senior M, Grieshaber-Bouyer R",
      journal: "Nature Biotechnology",
      journalShort: "Nat Biotechnol",
      year: 2026,
      url: "https://doi.org/10.1038/s41587-026-03069-5"
    },
    {
      title: "MorphoMapping identifies redox-dependent control of NETotic states in primed neutrophils",
      authors: "Bauerdick A, Exner T, Jagoditsch G, Habicht J, Nakchbandi I, Konstandin M, Grieshaber-Bouyer R, Wabnitz G",
      journal: "Journal of Immunology",
      journalShort: "J Immunol",
      year: 2026,
      url: "https://doi.org/10.1093/jimmun/vkag061"
    },
    {
      title: "Deep phenotyping of skin tissue remodeling in patients with systemic sclerosis treated with CD19-CAR T cells",
      authors: "Rius Rigau A, Xu M, Liu Z, Chenguiti Fakhouri S, Auth J, Garantziotis P, Zoli A, Kumar M, Raimondo MG, Tur C, Filla T, Gehringer P, Eckstein M, Müller F, Atzinger A, Ronicke M, Ekici A, Schmid R, Wirsching A, Hagen M, Böltz S, Krickau T, Horch RE, Berking C, Grieshaber-Bouyer R, Ramming A, Gupta P, Bozec A, Mackensen A, Distler JHW, Schett G, Li YN, Bergmann C",
      journal: "Nature Communications",
      journalShort: "Nat Commun",
      year: 2026,
      url: "https://doi.org/10.1038/s41467-026-72817-7"
    },
    {
      title: "Tiny warriors, big impact: targeted immunotherapy in kidney diseases",
      authors: "Kurzhagen JT, Laqua W, Schett G, Grieshaber-Bouyer R, Rabb H, Noel S, Schiffer M",
      journal: "Kidney International",
      journalShort: "Kidney Int",
      year: 2026,
      url: "https://doi.org/10.1016/j.kint.2026.01.032"
    },
    {
      title: "Bispecific T cell engagers for the treatment of severe, treatment-refractory autoimmune mediated connective tissue diseases",
      authors: "Düsing C, Györfi AH, Stütz AN, Lahu LM, Deicher FS, Li YN, Bruch PM, Matei AE, Micu A, Filla T, Koziel S, Hölscher AS, Röhrich M, Lorenz HM, Cramer M, Antoch G, Timm J, Abusabha Y, Ruck T, Homey B, Kreuter A, Bühring B, Radujkovic A, Hagen M, Grieshaber-Bouyer R, Schett G, Brunn A, Dietrich S, Merkt W, Distler JHW",
      journal: "Nature Medicine",
      journalShort: "Nat Med",
      year: 2026,
      url: "https://doi.org/10.1038/s41591-026-04238-4"
    },
    {
      title: "CD19 CAR-T cells for treatment-refractory autoimmune diseases: the phase 1/2 CASTLE basket trial",
      authors: "Müller F*, Hagen M*, Wirsching A*, Kharboutli S, Aigner M, Völkl S, Kretschmann S, Tascilar K, Taubmann J, Bucci L, Raimondo MG, Bergmann C, Rothe T, Tur C, Muñoz L, Böltz S, Schuster L, Hartmann F, Garantziotis P, Spörl S, Vasova I, Gerbitz A, Spriewald B, Kiener H, Giannarelli D, Locatelli F, D'Agostino MA, Hanssens L, Miltenyi S, Bozec A, Grieshaber-Bouyer R, Mackensen A*, Schett G*",
      journal: "Nature Medicine",
      journalShort: "Nat Med",
      year: 2026,
      url: "https://doi.org/10.1038/s41591-025-04185-6"
    },
    {
      title: "Roads and detours for CAR T cell therapy in autoimmune diseases",
      authors: "Avouac J*, Barzel A*, Davis R*, Caiati D*, Gottschalk S*, Grieshaber-Bouyer R*, Mao X*, Luning-Prak N*, Radic M*, Scherlinger M*, Suneja Y*, Talleur A*, Thacker A*, Unutmaz D* (*authors in alphabetical order)",
      journal: "Nature Reviews Drug Discovery",
      journalShort: "Nat Rev Drug Discov",
      year: 2026,
      url: "https://doi.org/10.1038/s41573-025-01349-4"
    },
    {
      title: "Multiple recent approvals establish T cell engaging antibodies as a compelling therapeutic modality",
      authors: "Baeuerle P, Sauer K, Grieshaber-Bouyer R, Michaelson J",
      journal: "Journal of Experimental Medicine",
      journalShort: "J Exp Med",
      year: 2026,
      url: "https://doi.org/10.1084/jem.20251652"
    },
    {
      title: "Improvement of skin manifestations of refractory connective tissue diseases by T cell engager treatment",
      authors: "Schett A, Wirsching A, Grieshaber-Bouyer R, Hagen M, Schett G",
      journal: "SKINdeep",
      journalShort: "SKINdeep",
      year: 2026,
      url: "https://doi.org/10.1553/skindeep.2026.188493"
    },
    {
      title: "Local immune effector cell-associated toxicity syndrome in CAR T-cell treated patients with refractory systemic lupus erythematosus — authors' reply",
      authors: "Hagen M, Müller F, Wirsching A, Kharboutli S, Spoerl S, Düsing C, Krickau T, Metzler M, Völkl S, Aigner M, Kretschmann S, Vasova I, Saake M, Schliep S, Kubacki T, Hunzelmann N, Bucci L, Taubmann J, Bergmann C, Györfi AH, Dietrich S, Distler JHW, Grieshaber-Bouyer R, Mackensen A, Schett G",
      journal: "The Lancet Rheumatology",
      journalShort: "Lancet Rheumatol",
      year: 2025,
      url: "https://doi.org/10.1016/S2665-9913(25)00222-X"
    },
    {
      title: "Fcγ-receptor activation by circulating immune complexes in systemic autoimmune diseases and its reduction by CD19-CAR T-cell therapy",
      authors: "Freitag M, Kolb P, Falcone V, Claus M, Schröder P, Andreeva I, Rodon L, Ewald M, Deicher FS, Stütz AN, Distler JHW, Blank N, Grieshaber-Bouyer R, Muñoz LE, Lorenz HM, Schett G, Merkt W",
      journal: "Rheumatology (Oxford)",
      journalShort: "Rheumatology",
      year: 2025,
      url: "https://doi.org/10.1093/rheumatology/keaf627"
    },
    {
      title: "Reprogrammed T cells for the treatment of rheumatoid arthritis",
      authors: "Baeuerle PA, Grieshaber-Bouyer R",
      journal: "rheuma plus",
      journalShort: "rheuma plus",
      year: 2025,
      url: "https://doi.org/10.1007/s12688-025-00910-8"
    },
    {
      title: "Soluble BDCA-2 as a potential biomarker for rheumatoid arthritis and its role in enhancing IFN-α production through nucleic acid binding",
      authors: "Mainieri L, Kaufmann A, Bucci L, Grieshaber-Bouyer R*, Bauer S*, Venegas S*",
      journal: "Rheumatology",
      journalShort: "Rheumatology",
      year: 2025,
      url: "https://doi.org/10.1093/rheumatology/keaf537"
    },
    {
      title: "BCMA T cell engager therapy in patients with refractory autoimmune disease",
      authors: "Bucci L, Böltz S, Hagen M, Tur C, Noethling D, Rothe T, Wirsching A, Auth J, Wacker J, Eckstein M, Alivernini S, Bozec A, Bergmann C, D'Agostino MA, Munoz L, Rech J, Kihm L, Raimondo MG, Schett G, Grieshaber-Bouyer R",
      journal: "New England Journal of Medicine",
      journalShort: "N Engl J Med",
      year: 2025,
      url: "https://doi.org/10.1056/NEJMc2506740"
    },
    {
      title: "Neutrophil heterogeneity identifies an association of LAMP1 with proliferative lupus nephritis",
      authors: "Ostendorf L, Garantziotis P, Huang FY, Schett G, Accelerating Medicines Partnership: RA/SLE Network, Lederer JA, Fava A, Rao DA, Grieshaber-Bouyer R",
      journal: "European Journal of Immunology",
      journalShort: "Eur J Immunol",
      year: 2025,
      url: "https://doi.org/10.1002/eji.70022"
    },
    {
      title: "CytoNormPy enables a fast and scalable removal of batch effects in cytometry datasets",
      authors: "Exner T, Hackert N, Leomazzi L, Van Gassen S, Saeys Y, Lorenz HM, Grieshaber-Bouyer R",
      journal: "Cytometry A",
      journalShort: "Cytometry A",
      year: 2025,
      url: "https://doi.org/10.1002/cyto.a.24953"
    },
    {
      title: "From complexity to consensus: a roadmap for neutrophil classification",
      authors: "Ng LG, Ballesteros I, Cassatella MA, Egeblad M, Fridlender ZG, Gabrilovich D, Gao Q, Granot Z, Grieshaber-Bouyer R, Grimes HL, Hedrick CC, Hidalgo A, Kaplan MJ, Kubes P, Ling GS, Lu L, Luo HR, Mayadas TN, Moutsopoulos NM, Ng M, Nigrovic PA, Ostuni R, Pittet MJ, Quail DF, Silvestre-Roig C, Soehnlein O, Udalova IA, Xue R, Zhang N, Kwok I",
      journal: "Immunity",
      journalShort: "Immunity",
      year: 2025,
      url: "https://doi.org/10.1016/j.immuni.2025.07.011"
    },
    {
      title: "Effects of CD19 CAR T-cell therapy on quality of life and direct health care costs in SLE: a preliminary analysis",
      authors: "Taubmann J, Hagen M, Müller F, Wirsching A, Temiz A, Völkl S, Aigner M, Grieshaber-Bouyer R, Mackensen A, Schett G",
      journal: "Journal of Rheumatology",
      journalShort: "J Rheumatol",
      year: 2025,
      url: "https://doi.org/10.3899/jrheum.2024-1301"
    },
    {
      title: "Long-term follow up of efficiency and safety of CD19-CAR T-cell treatment of systemic lupus erythematosus",
      authors: "Taubmann J, Böltz S, Hagen M, Wirsching A, Müller F, Völkl S, Kharboutli S, Spörl S, Garantziotis P, Aigner M, Grieshaber-Bouyer R, Mackensen A, Schett G",
      journal: "Zeitschrift für Rheumatologie",
      journalShort: "Z Rheumatol",
      year: 2025,
      url: "https://doi.org/10.1007/s00393-025-01705-0"
    },
    {
      title: "Differential molecular signatures in response to CD19-CAR T cell therapy compared with conventional pharmacotherapy in systemic lupus erythematosus",
      authors: "Garantziotis P, Beretta L, Lindblom J, Moysidou GS, Nikolopoulos D, Grieshaber-Bouyer R, Hagen M, Bergmann C, Wirsching A, Bozec A; PRECISESADS Clinical Consortium; Schneider M, Barturen G, Bertsias G, Boumpas DT, Alarcón-Riquelme ME, Mackensen A, Schett G, Parodis I",
      journal: "Annals of the Rheumatic Diseases",
      journalShort: "Ann Rheum Dis",
      year: 2025,
      url: "https://doi.org/10.1016/j.ard.2025.06.2132"
    },
    {
      title: "Effects of different B-cell-depleting strategies on the lymphatic tissue",
      authors: "Tur C, Eckstein M, Bucci L, Auth J, Bergmann C, Rauber S, Hagen M, Nöthling DM, Böltz S, Wirsching A, Tascilar K, Fagni F, Corte G, Rius Rigau A, Qin Y, Garantziotis P, Taubmann J, Wacker J, Ramming A, D'Agostino MA, Rauch S, Hartmann A, Müller F, Mackensen A, Grieshaber-Bouyer R, Schett G, Bozec A, Raimondo MG",
      journal: "Annals of the Rheumatic Diseases",
      journalShort: "Ann Rheum Dis",
      year: 2025,
      url: "https://doi.org/10.1016/j.ard.2025.06.2120"
    },
    {
      title: "Comparison of the safety profiles of CD19-targeting CAR T-cell therapy in patients with SLE and B-cell lymphoma",
      authors: "Müller F, Schwingen NR, Hagen M, Scholz JK, Aigner M, Wirsching A, Taubmann J, Kretschmann S, Kharboutli S, Krickau T, Naumann-Bartsch N, Benintende G, Spoerl S, Rothe T, Bruns H, Grieshaber-Bouyer R, Metzler M, Blumenthal DB, Graw F, Schett G, Mackensen A, Völkl S",
      journal: "Blood",
      journalShort: "Blood",
      year: 2025,
      url: "https://doi.org/10.1182/blood.2025028375"
    },
    {
      title: "Local immune effector cell-associated toxicity syndrome (LICATS) in CAR T-cell treated patients with autoimmune disease — an observational study",
      authors: "Hagen M, Müller F, Wirsching A, Kharboutli S, Spoerl S, Düsing C, Krickau T, Metzler M, Völkl S, Aigner M, Kretschmann S, Vasova I, Saake M, Schliep S, Kubacki T, Hunzelmann N, Bucci L, Taubmann J, Bergmann C, Györfi H, Dietrich S, Distler JHW, Grieshaber-Bouyer R, Mackensen A, Schett G",
      journal: "The Lancet Rheumatology",
      journalShort: "Lancet Rheumatol",
      year: 2025,
      url: "https://doi.org/10.1016/S2665-9913(25)00091-8"
    },
    {
      title: "BCMA-CAR T cells in a patient with relapsing idiopathic inflammatory myositis after CD19-CAR T cells",
      authors: "Müller F, Wirsching A, Hagen M, Völkl S, Tur C, Raimondo MG, Taubmann J, Bucci L, Zhang L, Kretschmann S, Aigner M, Eckstein M, Spörl S, Kharboutli S, Böltz S, Atzinger A, Munoz L, Schett G, Mackensen A, Grieshaber-Bouyer R",
      journal: "Nature Medicine",
      journalShort: "Nat Med",
      year: 2025,
      url: "https://doi.org/10.1038/s41591-025-03718-3"
    },
    {
      title: "CD19-CAR T-cell therapy induces deep tissue depletion of B cells",
      authors: "Tur C, Eckstein M, Velden J, Rauber S, Bergmann C, Auth J, Bucci L, Corte G, Hagen M, Wirsching A, Grieshaber-Bouyer R, Reis P, Kittan N, Wacker J, Rius Rigau A, Ramming A, D'Agostino MA, Hartmann A, Müller F, Mackensen A, Bozec A, Schett G, Raimondo MG",
      journal: "Annals of the Rheumatic Diseases",
      journalShort: "Ann Rheum Dis",
      year: 2025,
      url: "https://doi.org/10.1136/ard-2024-226142"
    },
    {
      title: "CD19-targeting CAR T-cell therapy in patients with diffuse systemic sclerosis: a case series",
      authors: "Auth J, Müller F, Völkl S, Bayerl N, Distler JHW, Tur C, Raimondo MG, Chenguiti Fakhouri S, Atzinger A, Coppers B, Eckstein M, Liphardt AM, Bäuerle T, Tascilar K, Aigner M, Kretschmann S, Wirsching A, Taubmann J, Hagen M, Györfi AH, Kharboutli S, Krickau T, Dees C, Spörl S, Rothe T, Harrer T, Bozec A, Grieshaber-Bouyer R, Fuchs F, Kuwert T, Berking C, Horch RE, Uder M, Mackensen A, Schett G, Bergmann C",
      journal: "The Lancet Rheumatology",
      journalShort: "Lancet Rheumatol",
      year: 2025,
      url: "https://doi.org/10.1016/S2665-9913(24)00282-0"
    },
    {
      title: "BCMA-targeted T-cell-engager therapy for autoimmune disease",
      authors: "Hagen M, Bucci L, Böltz S, Nöthling DM, Rothe T, Anoshkin K, Raimondo MG, Tur C, Wirsching A, Wacker J, Düsing C, Distler JHW, Kuwert T, Bozec A, Ramming A, Schett G, Grieshaber-Bouyer R",
      journal: "New England Journal of Medicine",
      journalShort: "N Engl J Med",
      year: 2024,
      url: "https://doi.org/10.1056/NEJMc2408786"
    },
    {
      title: "Bispecific T cell engager therapy for refractory rheumatoid arthritis",
      authors: "Bucci L, Hagen M, Rothe T, Raimondo MG, Fagni F, Tur C, Wirsching A, Wacker J, Wilhelm A, Auger JP, Pachowsky M, Eckstein M, Alivernini S, Zoli A, Krönke G, Uderhardt S, Bozec A, D'Agostino MA, Schett G, Grieshaber-Bouyer R",
      journal: "Nature Medicine",
      journalShort: "Nat Med",
      year: 2024,
      url: "https://doi.org/10.1038/s41591-024-02964-1"
    },
    {
      title: "Accurate, fast and memory efficient quantification of immune cell phenotypes in cytometry using machine learning",
      authors: "Exner T, Hackert NS, Pohl F, Osmanusta G, Schmitt F, Lorenz HM, Wabnitz G, Schett G, Graw F, Henes J, Grieshaber-Bouyer R",
      journal: "bioRxiv",
      journalShort: "bioRxiv",
      year: 2024,
      url: "https://doi.org/10.1101/2024.07.26.605341"
    },
    {
      title: "CD19 CAR T-cell therapy in autoimmune disease — a case series with follow-up",
      authors: "Müller F, Taubmann J, Bucci L, Wilhelm A, Bergmann C, Völkl S, Aigner M, Rothe T, Minopoulou I, Tur C, Knitza J, Kharboutli S, Kretschmann S, Vasova I, Spoerl S, Reimann H, Munoz L, Gerlach RG, Schäfer S, Grieshaber-Bouyer R, Korganow AS, Farge-Bancel D, Mougiakakos D, Bozec A, Winkler T, Krönke G, Mackensen A, Schett G",
      journal: "New England Journal of Medicine",
      journalShort: "N Engl J Med",
      year: 2024,
      url: "https://doi.org/10.1056/NEJMoa2308917"
    },
    {
      title: "Treatment of CNS systemic lupus erythematosus with CD19 CAR T cells",
      authors: "Hagen M, Müller F, Wirsching A, Kharboutli S, Spörl S, Aigner M, Völkl S, Köhler B, Dörfler A, Grieshaber-Bouyer R, Mackensen A, Schett G",
      journal: "The Lancet",
      journalShort: "Lancet",
      year: 2024,
      url: "https://doi.org/10.1016/S0140-6736(24)02265-7"
    },
    {
      title: "Selective CAR-T cell mediated B cell depletion suppresses interferon signature in SLE",
      authors: "Wilhelm A, Chambers D, Müller F, Bozec A, Grieshaber-Bouyer R, Winkler T, Mougiakakos D, Mackensen A, Schett G, Krönke G",
      journal: "JCI Insight",
      journalShort: "JCI Insight",
      year: 2024,
      url: "https://doi.org/10.1172/jci.insight.179433"
    },
    {
      title: "CAR T-cell therapy in rheumatology — what we know so far?",
      authors: "Hagen M, Wirsching A, Bohr D, Taubmann J, Müller F, Mackensen A, Grieshaber-Bouyer R*, Schett G*",
      journal: "Zeitschrift für Rheumatologie",
      journalShort: "Z Rheumatol",
      year: 2024,
      url: "https://doi.org/10.1007/s00393-024-01514-x"
    },
    {
      title: "Human and mouse neutrophils share core transcriptional programs in both homeostatic and inflamed contexts",
      authors: "Hackert NS*, Radtke FA*, Exner T*, Lorenz HM, Mueller-Tidow C, Nigrovic PA, Wabnitz G, Grieshaber-Bouyer R",
      journal: "Nature Communications",
      journalShort: "Nat Commun",
      year: 2023,
      url: "https://doi.org/10.1038/s41467-023-43573-9"
    },
    {
      title: "CD19 CAR-T cell treatment: unraveling the role of B cells in systemic lupus erythematosus",
      authors: "Taubmann J, Müller F, Mutlu MY, Völkl S, Aigner M, Bozec A, Mackensen A, Grieshaber-Bouyer R*, Schett G*",
      journal: "Arthritis & Rheumatology",
      journalShort: "Arthritis Rheumatol",
      year: 2023,
      url: "https://doi.org/10.1002/art.42784"
    },
    {
      title: "Distinct functional states of neutrophils by actin disassembly and NF-κB/STAT3 signaling",
      authors: "Heineken N, Schumacher JC, Exner T, Neuenfeldt F, Habicht J, Kahlich F, Platzer H, Merle U, Renkawitz T, Samstag Y, Grieshaber-Bouyer R, Autenrieth S, Wabnitz GH",
      journal: "bioRxiv",
      journalShort: "bioRxiv",
      year: 2023,
      url: "https://doi.org/10.1101/2023.07.14.548975"
    },
    {
      title: "Ageing and interferon gamma response drive the phenotype of neutrophils in the inflamed joint",
      authors: "Grieshaber-Bouyer R#, Exner T, Hackert NS, Radtke FA, Jelinsky SA, Halyabar O, Wactor A, Karimizadeh E, Brennan J, Schettini J, Jonsson AH, Rao DA, Henderson LA, Mueller-Tidow C, Lorenz HM, Wabnitz G, Lederer JA, Hadjipanayis A, Nigrovic PA#",
      journal: "Annals of the Rheumatic Diseases",
      journalShort: "Ann Rheum Dis",
      year: 2022,
      url: "https://doi.org/10.1136/annrheumdis-2021-221866"
    },
    {
      title: "Inflammation induces pro-NETotic neutrophils via TNFR2 signaling",
      authors: "Neuenfeldt F*, Schumacher JC*, Grieshaber-Bouyer R, Habicht J, Schröder-Braunstein J, Gauss A, Niesler B, Heineken N, Dalpke A, Gaida MM, Giese T, Meuer S, Samstag Y, Wabnitz G",
      journal: "Cell Reports",
      journalShort: "Cell Rep",
      year: 2022,
      url: "https://doi.org/10.1016/j.celrep.2022.110710"
    },
    {
      title: "Neutrophil transit time and localization within the megakaryocyte define morphologically distinct forms of emperipolesis",
      authors: "Huang FY*, Cunin P*, Radtke FA, Darbousset R, Grieshaber-Bouyer R, Nigrovic PA",
      journal: "Blood Advances",
      journalShort: "Blood Adv",
      year: 2022,
      url: "https://doi.org/10.1182/bloodadvances.2021005097"
    },
    {
      title: "The neutrotime transcriptional signature defines a single continuum of neutrophils across biological compartments",
      authors: "Grieshaber-Bouyer R, Radtke FA, Cunin P, Stifano G, Levescot A, Vijaykumar B, Nelson-Maney N, Blaustein RB, Monach PA, Nigrovic PA; Immunological Genome Project Consortium",
      journal: "Nature Communications",
      journalShort: "Nat Commun",
      year: 2021,
      url: "https://doi.org/10.1038/s41467-021-22973-9"
    },
    {
      title: "JAK inhibition prevents the induction of pro-inflammatory HLA-DR+ CD90+ RA synovial fibroblasts by IFNγ",
      authors: "Zhao S, Grieshaber-Bouyer R, Rao DA, Kolb P, Chen H, Andreeva I, Tretter T, Lorenz HM, Watzl C, Wabnitz G, Tykocinski LO, Merkt W",
      journal: "Arthritis & Rheumatology",
      journalShort: "Arthritis Rheumatol",
      year: 2021,
      url: "https://doi.org/10.1002/art.41958"
    },
    {
      title: "Arthritis flares mediated by tissue-resident memory T cells in the joint",
      authors: "Chang MH*, Levescot A*, Nelson-Maney N, Blaustein RB, Winden KD, Morris A, Wactor A, Balu S, Grieshaber-Bouyer R, Wei K, Henderson LA, Iwakura Y, Clark RA, Rao DA, Fuhlbrigge RC#, Nigrovic PA#",
      journal: "Cell Reports",
      journalShort: "Cell Rep",
      year: 2021,
      url: "https://doi.org/10.1016/j.celrep.2021.109902"
    },
    {
      title: "IL-1β-driven osteoclastogenic Tregs accelerate bone erosion in arthritis",
      authors: "Levescot A, Chang MH, Schnell J, Nelson-Maney N, Yan J, Martínez-Bonet M, Grieshaber-Bouyer R, Lee PY, Wei K, Blaustein RB, Morris A, Wactor A, Iwakura Y, Lederer JA, Rao DA, Charles JF, Nigrovic PA",
      journal: "Journal of Clinical Investigation",
      journalShort: "J Clin Invest",
      year: 2021,
      url: "https://doi.org/10.1172/JCI141008"
    },
    {
      title: "Gut CD4+ T cell phenotypes are a continuum molded by microbes, not by TH archetypes",
      authors: "Kiner E, Willie E, Vijaykumar B, Chowdhary K, Schmutz H, Chandler J, Schnell A, Thakore PI, LeGros G, Mostafavi S, Mathis D, Benoist C; Immunological Genome Project Consortium (including Grieshaber-Bouyer R)",
      journal: "Nature Immunology",
      journalShort: "Nat Immunol",
      year: 2021,
      url: "https://doi.org/10.1038/s41590-020-00836-7"
    },
    {
      title: "A microRNA expression and regulatory element activity atlas of the mouse immune system",
      authors: "Rose SA, Wroblewska A, Dhainaut M, Yoshida H, Shaffer JM, Bektesevic A, Ben-Zvi B, Rhoads A, Kim EY, Yu B, Lavin Y, Merad M, Buenrostro JD, Brown BD; Immunological Genome Consortium (including Grieshaber-Bouyer R)",
      journal: "Nature Immunology",
      journalShort: "Nat Immunol",
      year: 2021,
      url: "https://doi.org/10.1038/s41590-021-00944-y"
    },
    {
      title: "ImmGen at 15",
      authors: "Immunological Genome Project Consortium (including Grieshaber-Bouyer R)",
      journal: "Nature Immunology",
      journalShort: "Nat Immunol",
      year: 2020,
      url: "https://doi.org/10.1038/s41590-020-0687-4"
    },
    {
      title: "Biosimilars — opportunities and risks",
      authors: "Grieshaber-Bouyer R#, Lorenz HM",
      journal: "Der Internist",
      journalShort: "Internist",
      year: 2020,
      url: "https://doi.org/10.1007/s00108-020-00784-2"
    },
    {
      title: "Divergent mononuclear cell participation and cytokine release profiles define hip and knee osteoarthritis",
      authors: "Grieshaber-Bouyer R*, Kämmerer T*, Rosshirt N, Nees T, Koniezke P, Hagmann S, Tripel E, Schiltenwolf M, Kirsch J, Moradi B",
      journal: "Journal of Clinical Medicine",
      journalShort: "J Clin Med",
      year: 2019,
      url: "https://doi.org/10.3390/jcm8101631"
    },
    {
      title: "Neutrophil heterogeneity as therapeutic opportunity in immune-mediated disease",
      authors: "Grieshaber-Bouyer R, Nigrovic PA",
      journal: "Frontiers in Immunology",
      journalShort: "Front Immunol",
      year: 2019,
      url: "https://doi.org/10.3389/fimmu.2019.00346"
    },
    {
      title: "Maestro endothelium conducts the neutrophils",
      authors: "Grieshaber-Bouyer R, Nigrovic PA",
      journal: "Blood",
      journalShort: "Blood",
      year: 2018,
      url: "https://doi.org/10.1182/blood-2018-09-872085"
    },
    {
      title: "CD177 modulates human neutrophil migration through activation-mediated integrin and chemoreceptor regulation",
      authors: "Bai M*, Grieshaber-Bouyer R*, Wang JX, Schmider AB, Wilson ZS, Zeng L, Halyabar O, Godin MD, Nguyen HN, Levescot A, Cunin P, Lefort CT, Soberman RJ, Nigrovic PA",
      journal: "Blood",
      journalShort: "Blood",
      year: 2017,
      url: "https://doi.org/10.1182/blood-2017-03-768507"
    },
    {
      title: "Arthroscopic repair of recurrent posterior shoulder subluxation after total shoulder arthroplasty",
      authors: "Grieshaber-Bouyer R#, Gerber C",
      journal: "JBJS Case Connector",
      journalShort: "JBJS Case Connect",
      year: 2017,
      url: "https://doi.org/10.2106/jbjs.cc.17.00048"
    }
  ]
};
