// RGB lab website content. Edit this file to change the website; no other file needs to change.
// Text goes between "quotes". Keep the commas between entries. See README.md for step-by-step help.
window.RGB = window.RGB || {};

// ---------------------------------------------------------------------------------------------
// TEAM: current lab members and alumni
// ---------------------------------------------------------------------------------------------
// To ADD a person: copy one { ... } line inside "members", paste it, and change the text.
// To REMOVE a person: delete their { ... } line (and the comma after it).
// To move someone to ALUMNI: delete them from "members" and add a line to "alumni" below.
//
//   name   Full name without titles (Prof., Dr., MD, PhD), e.g. "Jane Doe"
//   role   Job title. "\n" starts a new line, e.g. "Rheumatologist,\npostdoctoral fellow"
//   area   Small label under the role: "Dry lab", "Wet lab", "Clinical" or "Administration"
//   photo  Path to a photo, e.g. "images/people/jane-doe.jpg" (square photos look best).
//          Leave "" to show the blue silhouette.
//   positions  (optional) list of positions shown on the person's profile page, under the photo.
//   profile    (optional) the person's profile page: affiliation, email, linkedin, scholar,
//              twitter (use null to never show the button), bio (separate paragraphs with \n\n),
//              interests (list), education (list of { degree, year, school }).
//              People without "profile" still get a page with "to be added" notes.
//
// Members and alumni are sorted automatically by family name (last word of the name, ignoring titles),
// so the order written here does not matter.

RGB.team = {
  members: [
    {
      name: "Ricardo Grieshaber-Bouyer",
      role: "Principal investigator,\nProfessor of Clinical Systems Immunology",
      area: "Principal investigator",
      photo: "images/people/ricardo-grieshaber-bouyer.jpg",
      profile: {
        affiliation: "Universitätsklinikum Erlangen",
        linkedin: "https://www.linkedin.com/in/ricardogrieshaber",
        scholar: "https://scholar.google.com/citations?user=LG2M3UwAAAAJ",
        twitter: "https://x.com/grieshaber",
        bio: "Ricardo Grieshaber-Bouyer is a physician-scientist and Professor of Clinical Systems Immunology at Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU), and leads the RGB lab at Universitätsklinikum Erlangen. Board certified in internal medicine, rheumatology and immunology, Ricardo is also Director of the Center of Systems Immunology (CSI) Erlangen and a member of the FAU Profile Centers for Medical Engineering and for Immunomedicine.\n\nRicardo's team pioneered the first-in-patient applications of T-cell redirecting therapies for autoimmune diseases, with studies published in the New England Journal of Medicine and Nature Medicine. As a Global Principal Investigator for early-phase trials, Ricardo manages a portfolio of immunology studies focused on precision cell depletion. The research group develops new precision cell-depleting therapies and investigates the immunological hallmarks of therapy response and relapse.\n\nWith a dual background in medicine and business, Ricardo serves on Scientific Advisory Boards and advises on preclinical benchmarking, asset acquisition and clinical strategy.",
        interests: ["T-cell redirecting therapies", "Precision cell depletion", "Autoimmune diseases", "Early-phase clinical trials", "Clinical systems immunology", "Immunological hallmarks of therapy response and relapse"],
        education: [
          { degree: "Master of Health Business Administration (MHBA)", year: "", school: "FAU Erlangen-Nürnberg, Germany" },
          { degree: "Doctor of Medicine (MD)", year: "2019", school: "Heidelberg University, Germany" },
          { degree: "Doctor of Philosophy (PhD), Immunology", year: "", school: "Heidelberg University, Germany" },
          { degree: "Doctoral research in Immunology", year: "2019", school: "Brigham and Women's Hospital and Harvard Medical School, Boston, USA" }
        ]
      }
    },
    { 
    	name: "Kirill Anoshkin", 
    	role: "Postdoctoral fellow", 
    	area: "Dry lab", 
    	photo: "images/people/kirill-anoshkin.jpg",
    	profile: {
    	affiliation: "Universitätsklinikum Erlangen",
        email: "",
        linkedin: "https://www.linkedin.com/in/kirill-anoshkin-9b5b6171/",
        scholar: "https://scholar.google.com/citations?user=lb-80gIAAAAJ",
        twitter: null,
        bio: "Kirill Anoshkin is a postdoctoral researcher in the Grieshaber-Bouyer lab at Friedrich-Alexander-Universität Erlangen-Nürnberg (FAU) and Universitätsklinikum Erlangen (UKER). He studies neutrophil heterogeneity in healthy state and autoimmune disease, and investigates how different therapies, including CAR T cells and T-cell engagers, reshape immune cell populations in patients.\n\nKirill earned his PhD in genetics at the Research Centre for Medical Genetics in Moscow, where he worked as a researcher from 2015 to 2022 on hereditary disease diagnostics and tumor genomics. In his last position in Moscow, he headed the molecular genetics department at Hadassah Medical Moscow. Before joining FAU in 2024, he was a postdoctoral fellow in Michael Sherman’s lab at Ariel University, Israel, where he studied the impact of environmental change on the Drosophila genome, transgenerational epigenetic effects of predator odor in mice, and genomic instability and drug resistance in cancer cells.\n\nHis broader interests include immunology, molecular genetics, and the translation of genomic data into new therapies for autoimmune disease and cancer.",
        interests: ["Molecular genetics", "Systems immunology", "Autoimmune disease", "Cancer genomics", "Bioinformatics", "Aging"],
        education: [
          { degree: "PhD in Genetics", year: "2020", school: "Research Centre for Medical Genetics, Moscow" },
          { degree: "Medical Biophysics", year: "2012", school: "Pirogov Russian National Research Medical University" }
        ]
      }
    },
    { name: "Sebastian Böltz", role: "Physician scientist", area: "Clinical", photo: "" },
    { name: "Futoshi Iwata", role: "Rheumatologist,\npostdoctoral fellow", area: "Clinical", photo: "" },
    {
      name: "Zahra Moslehi",
      role: "Postdoctoral fellow",
      area: "Dry lab",
      photo: "images/people/zahra-moslehi.jpg",
      profile: {
    	affiliation: "Universitätsklinikum Erlangen",
        email: "",
        linkedin: "https://www.linkedin.com/in/zahra-moslehi-72017876/",
        scholar: "https://scholar.google.com/citations?user=YWgf_mwAAAAJ&hl=en&oi=ao",
        twitter: null,
        bio: "Zahra Moslehi is a postdoctoral researcher and computational scientist at Universitätsklinikum Erlangen (UKER), Germany, specializing in biomedical data science, machine learning, and computational immunology. Her current research focuses on developing computational methods for high-dimensional biomedical data, particularly flow cytometry analysis and automated cell population identification.\n\nShe received her Ph.D. in Artificial Intelligence from Isfahan University of Technology, Iran, under the supervision of Prof. Abdolreza Mirzaei. During her doctoral studies, she completed research visits at the University of Geneva under the supervision of Prof. Alexandros Kalousis and at the University of Sheffield under the supervision of Prof. Neil D. Lawrence. She subsequently held research and teaching positions at several Iranian universities before joining Prof. Gioele La Manno’s laboratory at EPFL as a postdoctoral researcher, where she developed computational pipelines for integrating single-cell RNA sequencing and single-cell ATAC sequencing data. She later worked with Prof. Florian Buettner on various projects involving machine learning, multi-omics analysis, and computational approaches for biomedical research.\n\nHer research interests include probabilistic modeling, Gaussian processes, representation learning, and interpretable machine learning methods for biological data, with the broader goal of advancing computational approaches to complex cellular and molecular systems.",
        interests: ["Machine learning", "Bioinformatics", "Probabilistic modeling", "Metric learning", "Omics data analysis"],
        education: [
          { degree: "PhD in Artificial Intelligence", year: "2019", school: "Isfahan University of Technology, Iran" },
          { degree: "MSc in Software Engineering", year: "2012", school: "Amirkabir University of Technology, Iran" },
          { degree: "BSc in Computer Engineering", year: "2008", school: "Yazd University, Iran" }
        ]
      }
    },
    { name: "Danae-Mona Nöthling", role: "Physician scientist", area: "Clinical", photo: "" },
    { name: "Giang Vu", role: "Postdoctoral fellow", area: "Wet lab", photo: "" },
    { 
    	name: "Liang Zhang", 
    	role: "Postdoctoral fellow", 
    	area: "Wet lab", 
    	photo: "images/people/liang-zhang.jpg",
    	profile: {
        	affiliation: "Universitätsklinikum Erlangen",
        	email: "",
        	linkedin: "",
        	scholar: "",
        	twitter: null,
        	bio: "Liang Zhang's research focuses on the roles of neutrophils in autoimmune diseases, with particular interest in their contributions to both disease pathogenesis and therapeutic responses. Liang is interested in how neutrophils interact with other immune cells and how their phenotypes and functions change under different inflammatory conditions. By investigating the mechanisms underlying neutrophil activation and immune regulation, Liang aims to gain a deeper understanding of their diverse roles in autoimmune disorders.\n\nThis research seeks to identify potential therapeutic targets and to explore new strategies for modulating neutrophil function, with the goal of improving disease outcomes and reducing the burden of disease for patients.",
        	interests: ["Flow cytometry", "Autoimmune Diseases", "CAR-T therapy", "Neutrophils"],
        	education: [
        	  { degree: "PhD in Immunology", year: "2024", school: "Research Center Borstel, Leibniz Lung Center, University of Lübeck, Germany" },
        	  { degree: "MSc in Microbiology", year: "2020", school: "Huazhong Agricultural University, China" },
        	  { degree: "BSc in Biological Science", year: "2018", school: "Huazhong Agricultural University, China" }
        	]
      }
    },
    { name: "Elaine Degen", role: "Dr. med. candidate", area: "Wet lab", photo: "" },
    { name: "Sonia Dresel", role: "Dr. med. candidate", area: "Wet lab", photo: "" },
    { 
    	name: "Ann-Kathrin Götz",
    	role: "Dr. med. candidate,\nvisiting scholar", 
    	area: "Wet lab", 
    	photo: "images/people/ann-kathrin-goetz.jpg",
    	profile: {
        	affiliation: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
        	email: "",
        	linkedin: "https://www.linkedin.com/in/ann-kathrin-goetz-6a48b6386/",
        	scholar: "https://scholar.google.de/citations?user=QOOsiBAAAAAJ",
        	twitter: null,
        	bio: "Ann-Kathrin Götz is a sixth-year medical student and doctoral candidate at Friedrich-Alexander-Universität. Her research in the Grieshaber-Bouyer Lab focuses on the mechanism of action of T cell engager (TCE) therapy in autoimmune disease with a special focus on the role of T lymphocytes.\n\nAlongside her medical studies, Ann-Kathrin completed a Bachelor of Science in Molecular Medicine. In recognition of her academic achievements, she received the Sofie Wallner-Award for Cancer Research, which enabled her to undertake a research stay at the University of Oxford in the spring of 2025. From September 2025 to October 2026, she conducted research in the laboratory of Professor Deepak Rao at Brigham and Women’s Hospital and Harvard Medical School in Boston. There, she deepened her knowledge in T cell biology and further investigated the impact of the preexisting T cell phenotype on TCE-mediated B cell depletion as part of her doctoral thesis.\n\nAnn-Kathrin’s doctoral research is funded by the Peter Scriba Doctoral Fellowship of the German Society of Internal Medicine. In addition, her medical studies are supported by the German Academic Scholarship Foundation and the Max Weber-Program. For the 2026/2027 term, she serves as the elected doctoral researchers’ representative of the Faculty of Medicine. After completing her medical degree, Ann-Kathrin aims to continue pursuing translational immunological research as a clinician scientist.",
        	interests: ["T cell engager therapy", "T and B lymphocyte biology", "Flow Cytometry"],
        	education: [
        	  { degree: "Doctoral studies (Dr. med)", year: "expected 2028", school: "Friedrich-Alexander-Universität Erlangen-Nürnberg, Germany" },
        	  { degree: "Medical school", year: "expected 2028", school: "Friedrich-Alexander-Universität Erlangen-Nürnberg, Germany" },
        	  { degree: "BSc in Molecular Medicine", year: "2025", school: "Friedrich-Alexander-Universität Erlangen-Nürnberg, Germany" }
        	]
      }
    },
    { 
    	name: "Sanjukta Gubbi Praveen", 
    	role: "Dr. rer. nat. candidate", 
    	area: "Wet lab", 
    	photo: "images/people/sanjukta-gubbi-praveen.jpg",
    	profile: {
        	affiliation: "Universitätsklinikum Erlangen",
        	email: "",
        	linkedin: "",
        	scholar: null,
        	twitter: null,
        	bio: "Sanjukta is a doctoral candidate interested in elucidating molecular and cellular mechanisms underlying autoimmune disease pathogenesis and development of therapeutic resistance. She is particularly interested in investigating functional heterogeneity of neutrophils, their contribution to disease progression and treatment response.",
        	interests: ["Diagnostic and prognostic biomarkers of diseases", "High dimensional flow cytometry"],
        	education: [
        		{ degree: "MSc. Integrated Immunology", year: "2024", school: "Friedrich-Alexander-Universität Erlangen-Nürnberg, Germany" },
        	]
      }
    },
    { name: "Lisa Fischer", role: "Lab coordinator", area: "Administration", photo: "images/people/lisa-fischer.jpg" },
    { 
    	name: "Silke Johann", 
    	role: "Research technician", 
    	area: "Wet lab", 
    	photo: "",
    	profile: {
        	affiliation: "Universitätsklinikum Erlangen",
        	email: "",
        	linkedin: "",
        	scholar: null,
        	twitter: null,
        	bio: "",
        	interests: ["Microbiology", "Cell Biology", "Immunology"],
        	education: []
      }
    },
    { 
    	name: "Emir Ucgan", 
    	role: "Master's student", 
    	area: "Wet lab", 
    	photo: "images/people/emir-ucgan.jpg",
    	profile: {
        	affiliation: "Friedrich-Alexander University Erlangen-Nürnberg",
        	email: "",
        	linkedin: "https://www.linkedin.com/in/emir-ucgan-61b01b299/",
        	scholar: null,
        	twitter: null,
        	bio: "Emir Ucgan is a Master’s student in the lab, where he works on T cell engagers and investigates the biology of T cells, B cells, and neutrophils. His research focuses on how these immune cell populations interact and how they can be directed to mount effective responses, with a particular interest in T cell engager-based approaches.\n\nEmir holds a Bachelor’s degree in Biology and is currently completing his Master’s degree in Integrated Immunology. Throughout his studies, he has built a strong foundation in cellular and molecular immunology, which he now applies in his laboratory work. More broadly, Emir is interested in understanding how innate and adaptive immune cells cooperate, and in translating this knowledge into immunotherapeutic strategies.",
        	interests: ["T cell engager therapy", "T and B lymphocyte biology", "Flow Cytometry"],
        	education: [
        	  { degree: "MSc Integrated Immunology", year: "2027", school: "Friedrich-Alexander University Erlangen-Nürnberg" },
        	  { degree: "Bsc Biology", year: "2024", school: "Friedrich-Alexander University Erlangen-Nürnberg" }
        	]
      }
    },
    { 
    	name: "Shrutika Suhas Wadkar", 
    	role: "Research technician", 
    	area: "Wet lab", 
    	photo: "images/people/shrutika-suhas-wadkar.jpg",
    	profile: {
        	affiliation: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
        	email: "",
        	linkedin: null,
        	scholar: null,
        	twitter: null,
        	bio: "Shrutika is a research technician at University Hospital Erlangen (UKER), where she contributes to biomedical research focusing on immune cell populations and their roles in disease. Her work involves experimental laboratory techniques, data analysis, and scientific documentation, supporting research aimed at advancing the understanding of biological and immunological processes.\n\nShe holds a Master’s degree in Biology, with an academic background encompassing medical biology, immunology, and biostatistics. During her Master’s research, she investigated neutrophil phenotypes in bronchiectasis, a chronic lung disease, focusing on the characterization of distinct neutrophil subsets across different disease stages. This work provided her with experience in flow cytometry and the phenotypic analysis of neutrophils and lymphoid cells.\n\nHer broader research interests include immunology, immune responses, cellular heterogeneity, and the relationship between immune cell characteristics and disease processes. She is particularly interested in applying advanced cellular analysis techniques and integrating laboratory findings with clinical data to improve the understanding of disease mechanisms and support translational biomedical research.",
        	interests: ["Flow Cytometry, Immunology", "Immune cell heterogeneity", "Neutrophil Phenotyping", "Translational Biomedical research"],
        	education: [
        	  { degree: "MSc in Biology", year: "2026", school: "Technical University of Munich, Germany" },
        	  { degree: "BSc in Biotechnology", year: "2022", school: "Savitribai Phule Pune University, India" }
        	]
      }
    }
  ],

  // Alumni: name, role (when in the lab), now (current position), photo, and optional
  // bio / scholar / linkedin shown when a visitor clicks their row.
  alumni: [
    { name: "Cassian M. Afting", role: "Rotation student", now: "HBIGS fellow in Prof. Joachim Wittbrodt's lab, Heidelberg", photo: "", bio: "Cassian Afting was a rotation student in the lab. Cassian then joined Prof. Joachim Wittbrodt's lab at Heidelberg University as an HBIGS fellow, working on retinal organoids, including a deep-learning pipeline that predicts organoid development and DNA microbeads for controlled morphogen release." },
    { name: "Selina Belghalem", role: "Research technician", now: "", photo: "", bio: "" },
    { name: "Nicole Brosch", role: "Research technician", now: "", photo: "", bio: "" },
    { name: "Laura Bucci", role: "Physician scientist", now: "Physician scientist, Department of Medicine 3 – Rheumatology and Immunology, Universitätsklinikum Erlangen", photo: "images/people/laura-bucci.jpg", bio: "Laura Bucci was a physician scientist in the lab at the Department of Medicine 3 – Rheumatology and Immunology, Universitätsklinikum Erlangen, working on T cell engager and CAR T-cell therapies for autoimmune disease. Laura is first author of the first report of bispecific T cell engager therapy for refractory rheumatoid arthritis (Nature Medicine, 2024), which received the IZKF Erlangen Publication Award 2025, and of the study of BCMA T cell engager therapy in refractory autoimmune disease (New England Journal of Medicine, 2025)." },
    { name: "Tarik Exner", role: "MD/PhD candidate, HBIGS", now: "Rheumatology fellow and group leader, Heidelberg University Hospital", photo: "images/people/tarik-exner.jpg", bio: "Tarik Exner was an MD/PhD candidate in the lab within the Heidelberg Biosciences International Graduate School (HBIGS), working at the interface of neutrophil biology and computational cytometry. Tarik is first author of CytoNormPy, a fast tool for removing batch effects from cytometry data (Cytometry A, 2025), and co-first author of the study showing that human and mouse neutrophils share core transcriptional programs (Nature Communications, 2023)." },
    { name: "Panagiotis Garantziotis", role: "Physician scientist", now: "Department of Medicine 3, Universitätsklinikum Erlangen, and Deutsches Zentrum Immuntherapie (DZI)", photo: "", bio: "Panagiotis Garantziotis was a physician scientist in the lab at the Department of Medicine 3 – Rheumatology and Immunology, Universitätsklinikum Erlangen, and the Deutsches Zentrum Immuntherapie (DZI). Panagiotis studies the molecular profiles of systemic lupus erythematosus and its treatment, and is first author of a study of molecular signatures in response to CD19 CAR T-cell therapy (Annals of the Rheumatic Diseases, 2025)." },
    { name: "Frank Y. Huang", role: "Dr. med. candidate, Boehringer Ingelheim Fonds fellow", now: "HBIGS fellow in Prof. Andreas Trumpp's lab, HI-STEM", photo: "", bio: "Frank Huang was a Dr. med. candidate in the lab and a Boehringer Ingelheim Fonds fellow. The doctoral thesis (Heidelberg University, 2022) investigated emperipolesis, a cell-in-cell interaction between neutrophils and megakaryocytes, and Frank is co-first author of the related study (Blood Advances, 2022)." },
    { name: "Mareike de Groot", role: "Dr. med. candidate, Peter-Scriba fellow", now: "Internal medicine resident", photo: "", bio: "Mareike de Groot was a Dr. med. candidate in the lab, supported by a Peter-Scriba doctoral fellowship of the German Society of Internal Medicine (DGIM)." },
    { name: "Nicolaj S. Hackert", role: "Dr. med. candidate, Boehringer Ingelheim Fonds fellow", now: "Medical student, Heidelberg University", photo: "", bio: "Nicolaj Hackert was a Dr. med. candidate in the lab and a Boehringer Ingelheim Fonds fellow, working on neutrophil biology and computational immunology. Nicolaj is co-first author of the study showing that human and mouse neutrophils share core transcriptional programs in health and inflammation (Nature Communications, 2023) and contributed to the lab's computational cytometry tools. Nicolaj also gained research experience as an associated researcher at the Broad Institute of MIT and Harvard and a visiting student at Boston Children's Hospital (2022–2023), and as a visiting student at MD Anderson Cancer Center in Houston (2025–2026)." },
    { name: "Niklas R. Junker", role: "Dr. med. candidate", now: "", photo: "", bio: "" },
    { name: "Sophie E. Leonhardt", role: "Research technician", now: "Medical student, Saarland University", photo: "", bio: "" },
    { name: "Jara Leta", role: "M.Sc. student", now: "PhD student, Institute of Microbiology, Erlangen University Hospital", photo: "images/people/jara-leta.jpg", bio: "" },
    { name: "Nicolas J. Nitsche", role: "M.Sc. student", now: "PhD student in cellular immunology, Federica Sallusto's lab, IRB Bellinzona", photo: "", bio: "" },
    { name: "Görkem Osmanusta", role: "Dr. med. candidate", now: "", photo: "", bio: "Görkem Osmanusta was a Dr. med. candidate in the lab and contributed to a method for fast, memory-efficient quantification of immune cell phenotypes in cytometry data (bioRxiv, 2024)." },
    { name: "Frederic S. Pohl", role: "Dr. med. candidate", now: "", photo: "", bio: "Frederic Pohl was a Dr. med. candidate in the lab and contributed to a method for fast, memory-efficient quantification of immune cell phenotypes in cytometry data (bioRxiv, 2024)." },
    { name: "Felix A. Radtke", role: "Dr. med. candidate, Boehringer Ingelheim Fonds fellow", now: "DPhil student in Prof. Paresh Vyas' group, University of Oxford", photo: "", bio: "Felix Radtke was a Dr. med. candidate in the lab and a Boehringer Ingelheim Fonds fellow, contributing to the lab's neutrophil studies, including the neutrotime transcriptional signature (Nature Communications, 2021) and the cross-species analysis of neutrophil transcriptional programs (Nature Communications, 2023, co-first author)." },
    { name: "Tobias Rothe", role: "Postdoctoral fellow", now: "Postdoctoral researcher, Department of Medicine 3, Universitätsklinikum Erlangen", photo: "", bio: "Tobias Rothe was a postdoctoral fellow in the lab at the Department of Medicine 3 – Rheumatology and Immunology, Universitätsklinikum Erlangen. Tobias contributed to the lab's clinical studies of B cell-depleting therapies, including T cell engagers in rheumatoid arthritis and other autoimmune diseases (Nature Medicine, 2024; New England Journal of Medicine, 2024 and 2025) and the CASTLE trial of CD19 CAR T cells (Nature Medicine, 2026)." },
    { name: "Peter Scheuerlein", role: "Research technician", now: "", photo: "", bio: "" },
    { name: "Julia T. Schnell", role: "Dr. med. candidate, PROMOS fellow", now: "", photo: "", bio: "Julia Schnell was a Dr. med. candidate in the lab and a PROMOS fellow of the German Academic Exchange Service (DAAD), and contributed to the study of IL-1β-driven osteoclastogenic regulatory T cells in arthritis (Journal of Clinical Investigation, 2021)." },
    { name: "Jana Ullmann", role: "Research technician", now: "", photo: "", bio: "" }
  ]
};
