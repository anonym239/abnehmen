/* ============================================================
   NutriCore – script.js
   ============================================================ */

// ===================================================================
// DATA – alle Werte pro 100g (bzw. 100ml bei Getränken)
// serving = typische Portion in g/ml
// ===================================================================

const FOODS = {
  green: [
    // === GEMÜSE ===
    { name: "Gurke",          emoji: "🥒", brand: "Bio-Gurke",                    sub: "Gemüse",         serving: 150, kcal: 14,  protein: 0.6,  carbs: 2.2,  fat: 0.1,  fiber: 0.6 },
    { name: "Tomate",         emoji: "🍅", brand: "Rispentomaten",                 sub: "Gemüse",         serving: 120, kcal: 18,  protein: 0.9,  carbs: 3.1,  fat: 0.2,  fiber: 1.2 },
    { name: "Brokkoli",       emoji: "🥦", brand: "Frisch oder TK",               sub: "Gemüse",         serving: 200, kcal: 34,  protein: 2.8,  carbs: 4.4,  fat: 0.4,  fiber: 2.6 },
    { name: "Spinat",         emoji: "🌿", brand: "Frischer Blattspinat",         sub: "Gemüse",         serving: 100, kcal: 23,  protein: 2.9,  carbs: 0.4,  fat: 0.4,  fiber: 2.2 },
    { name: "Karotte",        emoji: "🥕", brand: "Bundkarotten",                  sub: "Gemüse",         serving: 120, kcal: 41,  protein: 0.9,  carbs: 9.6,  fat: 0.2,  fiber: 2.8 },
    { name: "Paprika Rot",    emoji: "🫑", brand: "Rote Spitzpaprika",            sub: "Gemüse",         serving: 150, kcal: 31,  protein: 1.0,  carbs: 5.4,  fat: 0.3,  fiber: 2.1 },
    { name: "Paprika Grün",   emoji: "🫑", brand: "Grüne Paprika",               sub: "Gemüse",         serving: 150, kcal: 20,  protein: 0.9,  carbs: 2.9,  fat: 0.3,  fiber: 1.6 },
    { name: "Blumenkohl",     emoji: "🧄", brand: "Frisch oder TK",              sub: "Gemüse",         serving: 200, kcal: 25,  protein: 1.9,  carbs: 3.0,  fat: 0.3,  fiber: 2.0 },
    { name: "Eisbergsalat",   emoji: "🥬", brand: "Salatkopf",                   sub: "Gemüse",         serving: 100, kcal: 14,  protein: 1.2,  carbs: 1.4,  fat: 0.2,  fiber: 0.9 },
    { name: "Römersalat",     emoji: "🥬", brand: "Romana-Salat",                sub: "Gemüse",         serving: 100, kcal: 15,  protein: 1.4,  carbs: 1.2,  fat: 0.2,  fiber: 1.3 },
    { name: "Zucchini",       emoji: "🌽", brand: "Grüne Zucchini",              sub: "Gemüse",         serving: 200, kcal: 17,  protein: 1.2,  carbs: 2.1,  fat: 0.4,  fiber: 1.1 },
    { name: "Aubergine",      emoji: "🍆", brand: "Aubergine natur",             sub: "Gemüse",         serving: 200, kcal: 25,  protein: 1.0,  carbs: 3.5,  fat: 0.2,  fiber: 3.0 },
    { name: "Champignons",    emoji: "🍄", brand: "Braune/Weiße Champignons",    sub: "Gemüse",         serving: 150, kcal: 22,  protein: 3.1,  carbs: 0.5,  fat: 0.3,  fiber: 1.0 },
    { name: "Feldsalat",      emoji: "🥗", brand: "Valerianella / Rewe Bio",     sub: "Gemüse",         serving: 80,  kcal: 20,  protein: 2.0,  carbs: 0.4,  fat: 0.4,  fiber: 1.5 },
    { name: "Rucola",         emoji: "🥗", brand: "Rucola-Salat (Roquette)",     sub: "Gemüse",         serving: 60,  kcal: 25,  protein: 2.6,  carbs: 1.4,  fat: 0.7,  fiber: 1.6 },
    { name: "Radieschen",     emoji: "🌱", brand: "Bund Radieschen",             sub: "Gemüse",         serving: 100, kcal: 16,  protein: 1.1,  carbs: 1.8,  fat: 0.1,  fiber: 1.6 },
    { name: "Lauch (Porree)", emoji: "🧅", brand: "Lauchstange frisch",          sub: "Gemüse",         serving: 100, kcal: 30,  protein: 2.0,  carbs: 4.2,  fat: 0.3,  fiber: 2.6 },
    { name: "Zwiebel",        emoji: "🧅", brand: "Gemüsezwiebel",               sub: "Gemüse",         serving: 80,  kcal: 40,  protein: 1.1,  carbs: 7.9,  fat: 0.1,  fiber: 1.4 },
    { name: "Erbsen (TK)",    emoji: "🫛", brand: "Bonduelle / Iglo TK",         sub: "Gemüse",         serving: 100, kcal: 77,  protein: 5.4,  carbs: 9.7,  fat: 0.4,  fiber: 5.5 },
    { name: "Edamame (gar)",  emoji: "🫘", brand: "TK Edamame gegart",           sub: "Gemüse",         serving: 150, kcal: 122, protein: 11.9, carbs: 5.2,  fat: 5.2,  fiber: 5.0 },
    // === OBST ===
    { name: "Apfel",          emoji: "🍎", brand: "Gala / Fuji / Elstar",        sub: "Obst",           serving: 180, kcal: 52,  protein: 0.3,  carbs: 12.8, fat: 0.2,  fiber: 2.4 },
    { name: "Banane",         emoji: "🍌", brand: "Chiquita / Dole (reif)",      sub: "Obst",           serving: 120, kcal: 89,  protein: 1.1,  carbs: 20.0, fat: 0.3,  fiber: 2.6 },
    { name: "Erdbeeren",      emoji: "🍓", brand: "Frische Erdbeeren",           sub: "Obst",           serving: 150, kcal: 32,  protein: 0.7,  carbs: 6.0,  fat: 0.3,  fiber: 2.0 },
    { name: "Blaubeeren",     emoji: "🫐", brand: "Frisch oder TK",             sub: "Obst",           serving: 125, kcal: 57,  protein: 0.7,  carbs: 11.4, fat: 0.3,  fiber: 2.4 },
    { name: "Orange",         emoji: "🍊", brand: "Navelorange / Sanguinello",  sub: "Obst",           serving: 150, kcal: 47,  protein: 0.9,  carbs: 9.4,  fat: 0.1,  fiber: 2.2 },
    { name: "Trauben",        emoji: "🍇", brand: "Kernlose Tafeltrauben",      sub: "Obst",           serving: 150, kcal: 67,  protein: 0.6,  carbs: 16.1, fat: 0.2,  fiber: 0.9 },
    { name: "Mango",          emoji: "🥭", brand: "Alphonso / Tommy Atkins",    sub: "Obst",           serving: 200, kcal: 60,  protein: 0.8,  carbs: 13.4, fat: 0.4,  fiber: 1.6 },
    { name: "Wassermelone",   emoji: "🍉", brand: "Seedless Watermelon",        sub: "Obst",           serving: 300, kcal: 30,  protein: 0.6,  carbs: 6.2,  fat: 0.2,  fiber: 0.4 },
    { name: "Pfirsich",       emoji: "🍑", brand: "Frischer Pfirsich",          sub: "Obst",           serving: 150, kcal: 39,  protein: 0.9,  carbs: 8.0,  fat: 0.3,  fiber: 1.5 },
    { name: "Birne",          emoji: "🍐", brand: "Williams / Conference",      sub: "Obst",           serving: 180, kcal: 57,  protein: 0.4,  carbs: 13.1, fat: 0.1,  fiber: 3.1 },
    { name: "Zitrone",        emoji: "🍋", brand: "Naturland Bio-Zitrone",      sub: "Obst",           serving: 60,  kcal: 29,  protein: 1.1,  carbs: 5.1,  fat: 0.3,  fiber: 2.8 },
    { name: "Kiwi",           emoji: "🥝", brand: "Zespri Green / Gold",        sub: "Obst",           serving: 100, kcal: 61,  protein: 1.1,  carbs: 11.7, fat: 0.5,  fiber: 3.0 },
    { name: "Kirschen",       emoji: "🍒", brand: "Süßkirschen frisch",         sub: "Obst",           serving: 150, kcal: 63,  protein: 1.1,  carbs: 14.3, fat: 0.2,  fiber: 1.6 },
    // === MAGERES PROTEIN ===
    { name: "Hähnchenbrust",  emoji: "🍗", brand: "Natur, gegart, ohne Haut",  sub: "Protein",        serving: 150, kcal: 165, protein: 31.0, carbs: 0.0,  fat: 3.6,  fiber: 0.0 },
    { name: "Putenbrust",     emoji: "🦃", brand: "Natur, gegart, ohne Haut",  sub: "Protein",        serving: 150, kcal: 135, protein: 29.0, carbs: 0.0,  fat: 1.7,  fiber: 0.0 },
    { name: "Thunfisch n.S.", emoji: "🐟", brand: "Nixe / Saupiquet (Wasser)", sub: "Protein",        serving: 150, kcal: 116, protein: 26.0, carbs: 0.0,  fat: 1.0,  fiber: 0.0 },
    { name: "Lachs (gegart)", emoji: "🐟", brand: "Atlantischer Lachs, gegart",sub: "Protein",        serving: 150, kcal: 208, protein: 20.1, carbs: 0.0,  fat: 13.4, fiber: 0.0 },
    { name: "Garnelen (gar)", emoji: "🦐", brand: "TK Garnelen, gegart",       sub: "Protein",        serving: 150, kcal: 71,  protein: 13.6, carbs: 0.9,  fat: 1.0,  fiber: 0.0 },
    { name: "Kabeljau",       emoji: "🐟", brand: "Frisch oder TK, gegart",    sub: "Protein",        serving: 150, kcal: 82,  protein: 18.0, carbs: 0.0,  fat: 0.7,  fiber: 0.0 },
    { name: "Forelle (gegart)",emoji: "🐟",brand: "Regenbogenforelle, gegart", sub: "Protein",        serving: 150, kcal: 119, protein: 20.5, carbs: 0.0,  fat: 3.9,  fiber: 0.0 },
    { name: "Eiweiß (Ei)",    emoji: "🥚", brand: "Hühnereiweiß",              sub: "Protein",        serving: 33,  kcal: 52,  protein: 10.9, carbs: 0.7,  fat: 0.2,  fiber: 0.0 },
    { name: "Vollei",         emoji: "🥚", brand: "Freiland-Ei Gr. M (60g)",  sub: "Protein",        serving: 60,  kcal: 143, protein: 12.4, carbs: 0.7,  fat: 9.9,  fiber: 0.0 },
    // === MILCHPRODUKTE (mager) ===
    { name: "Magerquark",     emoji: "🥛", brand: "Müller / Rewe Bio (0,2%)",  sub: "Milchprodukte",  serving: 200, kcal: 67,  protein: 12.0, carbs: 4.1,  fat: 0.2,  fiber: 0.0 },
    { name: "Hüttenkäse",     emoji: "🧀", brand: "Arla / Rewe (4% Fett)",     sub: "Milchprodukte",  serving: 200, kcal: 98,  protein: 11.1, carbs: 3.4,  fat: 4.3,  fiber: 0.0 },
    { name: "Skyr Natur",     emoji: "🥛", brand: "Arla Skyr / Lidl Milbona",  sub: "Milchprodukte",  serving: 200, kcal: 63,  protein: 11.0, carbs: 4.0,  fat: 0.2,  fiber: 0.0 },
    { name: "Griech. Joghurt 0%",emoji:"🥛",brand:"Fage 0% / Chobani Plain",  sub: "Milchprodukte",  serving: 200, kcal: 59,  protein: 9.9,  carbs: 3.8,  fat: 0.4,  fiber: 0.0 },
    // === KOMPLEXE KOHLENHYDRATE ===
    { name: "Haferflocken",   emoji: "🌾", brand: "Kölln Zartblatt / Ja! Hafer",sub:"Kohlenhydrate",  serving: 60,  kcal: 372, protein: 13.2, carbs: 58.7, fat: 7.1,  fiber: 10.6 },
    { name: "Vollkornbrot",   emoji: "🍞", brand: "Mestemacher / Bauck",        sub:"Kohlenhydrate",  serving: 60,  kcal: 247, protein: 8.5,  carbs: 41.0, fat: 3.5,  fiber: 6.5 },
    { name: "Quinoa (gegart)",emoji: "🌾", brand: "Bio Quinoa (gegart)",        sub:"Kohlenhydrate",  serving: 180, kcal: 120, protein: 4.4,  carbs: 21.3, fat: 1.9,  fiber: 2.8 },
    { name: "Linsen (gegart)",emoji: "🌰", brand: "TK-Linsen / Dose",           sub:"Kohlenhydrate",  serving: 200, kcal: 116, protein: 9.0,  carbs: 16.0, fat: 0.4,  fiber: 7.9 },
  ],

  yellow: [
    // === KOHLENHYDRATE ===
    { name: "Pasta (gegart)",      emoji: "🍝", brand: "Barilla / De Cecco (gar)",    sub: "Kohlenhydrate", serving: 200, kcal: 158, protein: 5.8, carbs: 30.6, fat: 0.9, fiber: 1.8 },
    { name: "Weißer Reis (gegart)",emoji: "🍚", brand: "Uncle Ben's / Oryza (gar)",   sub: "Kohlenhydrate", serving: 200, kcal: 130, protein: 2.7, carbs: 28.6, fat: 0.3, fiber: 0.3 },
    { name: "Basmati Reis (gegart)",emoji:"🍚", brand: "Tilda / Aldi Basmati (gar)",  sub: "Kohlenhydrate", serving: 200, kcal: 130, protein: 2.8, carbs: 28.0, fat: 0.3, fiber: 0.5 },
    { name: "Kartoffel (gegart)",  emoji: "🥔", brand: "Festkochend / mehligkochend", sub: "Kohlenhydrate", serving: 200, kcal: 93,  protein: 2.5, carbs: 17.0, fat: 0.1, fiber: 1.8 },
    { name: "Süßkartoffel (gar)",  emoji: "🥔", brand: "Orangefleischige Süßkartoffel",sub:"Kohlenhydrate", serving: 200, kcal: 90,  protein: 2.0, carbs: 20.7, fat: 0.1, fiber: 3.0 },
    { name: "Toastbrot",           emoji: "🫓", brand: "Harry's / Lieken (Weizen)",   sub: "Kohlenhydrate", serving: 50,  kcal: 265, protein: 8.4, carbs: 47.4, fat: 3.2, fiber: 2.5 },
    { name: "Helles Brötchen",     emoji: "🍞", brand: "Bäckerei / Supermarkt",       sub: "Kohlenhydrate", serving: 60,  kcal: 272, protein: 9.1, carbs: 53.2, fat: 2.1, fiber: 2.0 },
    { name: "Wrap (Weizen, 25cm)", emoji: "🌯", brand: "Old El Paso / Mission",       sub: "Kohlenhydrate", serving: 50,  kcal: 300, protein: 8.5, carbs: 52.0, fat: 5.5, fiber: 2.8 },
    { name: "Couscous (gegart)",   emoji: "🌾", brand: "Tipiak / Blumenfeld (gar)",   sub: "Kohlenhydrate", serving: 180, kcal: 112, protein: 3.8, carbs: 21.9, fat: 0.2, fiber: 1.4 },
    { name: "Polenta (gegart)",    emoji: "🌾", brand: "Gut&Günstig / Barilla (gar)", sub: "Kohlenhydrate", serving: 200, kcal: 70,  protein: 1.7, carbs: 14.9, fat: 0.2, fiber: 0.8 },
    { name: "Kidneybohnen (gar)",  emoji: "🫘", brand: "Bonduelle Dose / TK",         sub: "Kohlenhydrate", serving: 150, kcal: 127, protein: 8.7, carbs: 17.8, fat: 0.5, fiber: 6.4 },
    // === GESUNDE FETTE ===
    { name: "Avocado (reif)",      emoji: "🥑", brand: "Hass Avocado",                sub: "Gesunde Fette", serving: 100, kcal: 160, protein: 2.0, carbs: 0.9, fat: 14.7, fiber: 6.7 },
    { name: "Erdnussbutter (nat.)",emoji: "🥜", brand: "Whole Earth / Naturata",      sub: "Gesunde Fette", serving: 20,  kcal: 588, protein: 25.1,carbs: 20.1, fat: 49.9, fiber: 6.0 },
    // === MILCHPRODUKTE ===
    { name: "Gouda (jung, 45%)",   emoji: "🧀", brand: "Leerdammer / Aldi (45% i.Tr.)",sub:"Milchprodukte", serving: 30, kcal: 356, protein: 25.1,carbs: 0.0,  fat: 27.4, fiber: 0.0 },
    { name: "Vollmilch (3,5%)",    emoji: "🥛", brand: "Weihenstephan / Bauer",       sub: "Milchprodukte", serving: 200, kcal: 61,  protein: 3.2, carbs: 4.7,  fat: 3.3,  fiber: 0.0 },
    // === SAUCEN & AUFSTRICHE ===
    { name: "Honig",               emoji: "🍯", brand: "Imkerei-Honig rein",           sub: "Saucen",        serving: 15,  kcal: 304, protein: 0.3, carbs: 80.0, fat: 0.0,  fiber: 0.0 },
    { name: "Ketchup",             emoji: "🫙", brand: "Heinz / Werder",               sub: "Saucen",        serving: 30,  kcal: 101, protein: 1.3, carbs: 21.0, fat: 0.5,  fiber: 0.5 },
    { name: "Mayonnaise (80%)",    emoji: "🫙", brand: "Hellmann's Real Mayo",         sub: "Saucen",        serving: 15,  kcal: 680, protein: 1.1, carbs: 2.7,  fat: 74.1, fiber: 0.0 },
    { name: "Tomatensauce",        emoji: "🍕", brand: "Mutti / Barilla Passata",      sub: "Saucen",        serving: 100, kcal: 29,  protein: 1.5, carbs: 4.1,  fat: 0.5,  fiber: 1.2 },
    // === SNACKS ===
    { name: "Popcorn (natur, gegart)",emoji:"🌽",brand:"Luftgepoppt, kein Öl/Zucker", sub: "Snacks",        serving: 30,  kcal: 381, protein: 9.4, carbs: 73.6, fat: 4.5,  fiber: 14.4 },
  ],

  red: [
    // === SOFTDRINKS ===
    { name: "Coca-Cola",            emoji: "🥤", brand: "Coca-Cola (0,33l Dose = 139 kcal)",    sub: "Softdrinks",     serving: 330, kcal: 42,  protein: 0.0, carbs: 10.6, fat: 0.0, fiber: 0.0 },
    { name: "Fanta Orange",         emoji: "🥤", brand: "Fanta Orange (0,33l = 138 kcal)",      sub: "Softdrinks",     serving: 330, kcal: 42,  protein: 0.0, carbs: 10.5, fat: 0.0, fiber: 0.0 },
    { name: "Sprite",               emoji: "🥤", brand: "Sprite (0,33l = 138 kcal)",            sub: "Softdrinks",     serving: 330, kcal: 42,  protein: 0.0, carbs: 10.5, fat: 0.0, fiber: 0.0 },
    { name: "Eistee Pfirsich",      emoji: "🧃", brand: "Fuzetea Pfirsich / Nestea (0,5l)",     sub: "Softdrinks",     serving: 500, kcal: 39,  protein: 0.0, carbs: 9.8,  fat: 0.0, fiber: 0.0 },
    { name: "Red Bull Energy",      emoji: "🧃", brand: "Red Bull Original (0,25l Dose)",       sub: "Softdrinks",     serving: 250, kcal: 45,  protein: 0.0, carbs: 11.0, fat: 0.0, fiber: 0.0 },
    // === CHIPS & SNACKS ===
    { name: "Lay's Paprika",        emoji: "🥔", brand: "Lay's Paprika (Beutel 150g)",          sub: "Chips & Snacks", serving: 30,  kcal: 527, protein: 6.3, carbs: 52.0, fat: 32.0, fiber: 4.0 },
    { name: "Lay's Classic Salted", emoji: "🥔", brand: "Lay's Gesalzen (Beutel 150g)",        sub: "Chips & Snacks", serving: 30,  kcal: 536, protein: 6.5, carbs: 51.0, fat: 34.0, fiber: 3.8 },
    { name: "Pringles Original",    emoji: "🥔", brand: "Pringles Original (Dose 165g)",       sub: "Chips & Snacks", serving: 30,  kcal: 517, protein: 4.5, carbs: 57.0, fat: 29.0, fiber: 3.5 },
    { name: "Funny-frisch Ungarisch",emoji:"🥔", brand: "Funny-frisch Chipsfrisch Ungarisch",  sub: "Chips & Snacks", serving: 30,  kcal: 520, protein: 7.0, carbs: 53.0, fat: 30.0, fiber: 4.0 },
    { name: "Doritos Nacho Cheese", emoji: "🌽", brand: "Doritos Nacho Cheese (Beutel)",       sub: "Chips & Snacks", serving: 28,  kcal: 484, protein: 7.3, carbs: 61.0, fat: 23.0, fiber: 3.5 },
    { name: "Erdnuss-Flips",        emoji: "🌽", brand: "Erdnuss-Flips (Aldi / Rewe)",         sub: "Chips & Snacks", serving: 30,  kcal: 530, protein: 5.0, carbs: 60.0, fat: 29.0, fiber: 1.5 },
    { name: "Salzstangen",          emoji: "🧂", brand: "Ültje / Gut&Günstig",                 sub: "Chips & Snacks", serving: 30,  kcal: 395, protein: 10.5,carbs: 77.2, fat: 3.2,  fiber: 2.5 },
    // === SÜSSIGKEITEN ===
    { name: "Milchschokolade",      emoji: "🍫", brand: "Milka / Ritter Sport Vollmilch",      sub: "Süßigkeiten",    serving: 40,  kcal: 535, protein: 7.7, carbs: 59.2, fat: 29.7, fiber: 1.8 },
    { name: "Nutella",              emoji: "🍫", brand: "Ferrero Nutella",                      sub: "Süßigkeiten",    serving: 20,  kcal: 539, protein: 6.3, carbs: 57.5, fat: 30.9, fiber: 3.0 },
    { name: "Haribo Goldbären",     emoji: "🍬", brand: "Haribo Goldbären (100g Beutel)",      sub: "Süßigkeiten",    serving: 40,  kcal: 343, protein: 6.9, carbs: 76.5, fat: 0.1,  fiber: 0.0 },
    { name: "Chupa Chups Lutscher", emoji: "🍭", brand: "Chupa Chups (1 Stk. = ca. 11g)",     sub: "Süßigkeiten",    serving: 12,  kcal: 390, protein: 0.0, carbs: 97.5, fat: 0.0,  fiber: 0.0 },
    // === GEBÄCK ===
    { name: "Leibniz Butterkekse",  emoji: "🍪", brand: "Bahlsen Leibniz Butter",              sub: "Gebäck",         serving: 30,  kcal: 502, protein: 5.4, carbs: 63.6, fat: 25.0, fiber: 1.5 },
    { name: "Sahnetorte",           emoji: "🎂", brand: "Bäckerei-Sahnetorte (1 Stück)",       sub: "Gebäck",         serving: 100, kcal: 320, protein: 3.8, carbs: 33.0, fat: 19.5, fiber: 0.5 },
    { name: "Schoko-Muffin",        emoji: "🧁", brand: "Mcennedy / Bäckerei",                 sub: "Gebäck",         serving: 80,  kcal: 406, protein: 5.0, carbs: 52.0, fat: 20.0, fiber: 1.8 },
    { name: "Donut (Berliner)",     emoji: "🍩", brand: "Dunkin' / Bäckerei-Donut",            sub: "Gebäck",         serving: 75,  kcal: 452, protein: 4.9, carbs: 51.6, fat: 25.2, fiber: 1.0 },
    { name: "Croissant (Butter)",   emoji: "🥐", brand: "Bäckerei / Edeka",                    sub: "Gebäck",         serving: 60,  kcal: 406, protein: 8.2, carbs: 45.8, fat: 21.2, fiber: 2.0 },
    { name: "Blätterteig",          emoji: "🥐", brand: "Jus-Rol / Rewe (roh)",                sub: "Gebäck",         serving: 50,  kcal: 411, protein: 7.9, carbs: 42.0, fat: 23.4, fiber: 1.8 },
    { name: "Fertig-Waffeln",       emoji: "🧇", brand: "Liège-Waffeln / Bofrost",             sub: "Gebäck",         serving: 60,  kcal: 380, protein: 6.8, carbs: 58.0, fat: 13.7, fiber: 1.5 },
    // === FAST FOOD ===
    { name: "Pommes Frites",        emoji: "🍟", brand: "McDonald's / Burger King",            sub: "Fast Food",      serving: 150, kcal: 312, protein: 3.4, carbs: 38.7, fat: 15.5, fiber: 3.0 },
    { name: "Pizza Margherita TK",  emoji: "🍕", brand: "Dr. Oetker Ristorante / Wagner",     sub: "Fast Food",      serving: 350, kcal: 260, protein: 9.5, carbs: 31.0, fat: 10.5, fiber: 2.2 },
    { name: "Döner Kebab",          emoji: "🥙", brand: "Klassischer Döner m. Fladenbrot",    sub: "Fast Food",      serving: 350, kcal: 280, protein: 14.0,carbs: 27.0, fat: 12.0, fiber: 2.0 },
    { name: "Hamburger",            emoji: "🍔", brand: "McDonald's Big Mac (ca. 200g)",      sub: "Fast Food",      serving: 200, kcal: 295, protein: 16.0,carbs: 25.0, fat: 13.5, fiber: 2.0 },
    { name: "Chicken Nuggets (6 St.)",emoji:"🧆",brand:"McDonald's Chicken McNuggets",        sub: "Fast Food",      serving: 100, kcal: 297, protein: 16.0,carbs: 16.5, fat: 18.0, fiber: 0.8 },
    // === EIS ===
    { name: "Magnum Classic",       emoji: "🍦", brand: "Langnese Magnum Classic (1 Stk.)",   sub: "Eis",            serving: 86,  kcal: 286, protein: 3.5, carbs: 27.0, fat: 19.0, fiber: 0.5 },
    { name: "Calippo Orange",       emoji: "🧊", brand: "Langnese Calippo Orange (1 Stk.)",  sub: "Eis",            serving: 105, kcal: 79,  protein: 0.0, carbs: 19.5, fat: 0.0,  fiber: 0.0 },
  ]
};

// ===================================================================
const RECIPES = [
  {
    emoji: "🥞", name: "Protein-Pancakes",
    kcal: 380, protein: 35, carbs: 38, fat: 8,
    time: "15 Min.", difficulty: "Einfach",
    steps: [
      "50 g Haferflocken fein mahlen (Mixer oder Tüte + Nudelholz).",
      "2 Eier, 150 g Magerquark und 1 Prise Salz dazu – alles gut verrühren.",
      "Pfanne mit etwas Öl auf mittlere Hitze erwärmen.",
      "Je 1 Kelle Teig in die Pfanne geben, ca. 2 Min. backen bis Blasen entstehen.",
      "Wenden und weitere 1–2 Min. goldbraun backen.",
      "Mit frischen Beeren oder etwas Honig servieren."
    ]
  },
  {
    emoji: "🍝", name: "Fitness-Bolognese",
    kcal: 520, protein: 45, carbs: 42, fat: 14,
    time: "30 Min.", difficulty: "Einfach",
    steps: [
      "1 Zwiebel und 2 Knoblauchzehen fein würfeln.",
      "300 g mageres Hackfleisch (Rind oder Pute) in Öl krümelig braten.",
      "Zwiebeln & Knoblauch dazu, 3–4 Min. mitbraten.",
      "1 Paprika und 2 Karotten klein schneiden – alles in die Pfanne.",
      "1 Dose (400 g) Tomaten und Oregano/Basilikum zufügen.",
      "20 Min. auf niedriger Hitze köcheln lassen.",
      "Mit 80 g Vollkornnudeln (gar) servieren."
    ]
  },
  {
    emoji: "🍳", name: "Hähnchen-Reis-Pfanne",
    kcal: 480, protein: 48, carbs: 44, fat: 9,
    time: "20 Min.", difficulty: "Einfach",
    steps: [
      "150 g Hähnchenbrust in Streifen schneiden, salzen und pfeffern.",
      "In etwas Öl bei hoher Hitze 5–6 Min. goldbraun anbraten – herausnehmen.",
      "Paprika, Brokkoli und Zucchini grob schneiden, ins selbe Öl geben.",
      "Gemüse 4–5 Min. pfannenrühren (ruhig bissfest lassen).",
      "Hähnchen zurück in die Pfanne, 100 g gegarten Reis dazugeben.",
      "Mit Sojasoße und Knoblauchpulver abschmecken."
    ]
  },
  {
    emoji: "🍓", name: "Quark-Beeren-Bowl",
    kcal: 220, protein: 22, carbs: 24, fat: 2,
    time: "3 Min.", difficulty: "Sehr einfach",
    steps: [
      "250 g Magerquark in eine Bowl geben.",
      "1 TL Honig und etwas Vanilleextrakt einrühren.",
      "150 g gemischte Beeren (frisch oder aufgetaut) draufgeben.",
      "2 EL Haferflocken oder Granola drüber streuen.",
      "Sofort genießen – fertig in 3 Minuten!"
    ]
  },
  {
    emoji: "🥗", name: "Thunfisch-Salat",
    kcal: 290, protein: 36, carbs: 14, fat: 7,
    time: "10 Min.", difficulty: "Einfach",
    steps: [
      "1 Dose Thunfisch (in Wasser) gut abtropfen lassen.",
      "Römersalat und Cherrytomaten klein schneiden.",
      "Mais (aus der Dose) und rote Zwiebeln dazugeben.",
      "Dressing: 1 EL Olivenöl, Zitronensaft, Salz und Pfeffer.",
      "Alles mischen, Thunfisch drauf – fertig!"
    ]
  },
  {
    emoji: "🍳", name: "Gemüse-Omelette",
    kcal: 260, protein: 22, carbs: 6, fat: 16,
    time: "12 Min.", difficulty: "Einfach",
    steps: [
      "3 Eier mit einer Prise Salz verquirlen.",
      "Paprika, Spinat und Champignons klein würfeln.",
      "Gemüse 2 Min. in Öl anschwitzen.",
      "Ei-Masse drüber gießen, Hitze auf mittel reduzieren.",
      "Deckel drauf, 3–4 Min. stocken lassen.",
      "Halbieren, zusammenklappen und genießen."
    ]
  },
  {
    emoji: "🍲", name: "Linsensuppe (schnell)",
    kcal: 340, protein: 18, carbs: 48, fat: 5,
    time: "25 Min.", difficulty: "Einfach",
    steps: [
      "1 Zwiebel und 2 Karotten würfeln.",
      "In Öl 3 Min. anbraten, 1 TL Kreuzkümmel dazu.",
      "150 g rote Linsen (ungegart) und 600 ml Gemüsebrühe zugeben.",
      "20 Min. köcheln bis Linsen weich sind.",
      "Pürieren oder stückig lassen – mit Zitronensaft abschmecken."
    ]
  },
  {
    emoji: "🌯", name: "Hähnchen-Wrap",
    kcal: 420, protein: 38, carbs: 38, fat: 9,
    time: "10 Min.", difficulty: "Sehr einfach",
    steps: [
      "120 g gegarte Hähnchenbrust in Scheiben schneiden.",
      "1 Vollkorn-Wrap kurz in der Pfanne erwärmen.",
      "Wrap mit 2 EL Magerquark bestreichen (statt Soße).",
      "Salat, Tomaten, Gurke und Hähnchen belegen.",
      "Fest einrollen, diagonal halbieren."
    ]
  },
];

// ===================================================================
const CHEAT_ITEMS = [
  { emoji: "🍫", name: "Milchschokolade (Milka)", brand: "Milka Vollmilch",      unit: "g",    baseKcal: 5.35, baseProtein: 0.077, baseCarbs: 0.592, baseFat: 0.297, min: 5,   max: 100, step: 5,   default: 20 },
  { emoji: "🍬", name: "Haribo Goldbären",         brand: "Haribo Goldbären",     unit: "g",    baseKcal: 3.43, baseProtein: 0.069, baseCarbs: 0.765, baseFat: 0.001, min: 5,   max: 200, step: 5,   default: 40 },
  { emoji: "🥤", name: "Coca-Cola",                brand: "Coca-Cola Original",   unit: "ml",   baseKcal: 0.42, baseProtein: 0.0,   baseCarbs: 0.106, baseFat: 0.0,   min: 100, max: 500, step: 50,  default: 330 },
  { emoji: "🍟", name: "Pommes frites",            brand: "McD / Burger King",    unit: "g",    baseKcal: 3.12, baseProtein: 0.034, baseCarbs: 0.387, baseFat: 0.155, min: 50,  max: 400, step: 25,  default: 150 },
  { emoji: "🍪", name: "Leibniz Butterkeks",       brand: "Bahlsen Leibniz",      unit: "Stk.", baseKcal: 45,   baseProtein: 0.7,   baseCarbs: 7.0,   baseFat: 1.8,   min: 1,   max: 10,  step: 1,   default: 3, perUnit: true },
  { emoji: "🍩", name: "Donut (Berliner)",         brand: "Bäckerei / Dunkin'",   unit: "Stk.", baseKcal: 340,  baseProtein: 4.0,   baseCarbs: 38.7,  baseFat: 18.9,  min: 1,   max: 3,   step: 1,   default: 1, perUnit: true },
  { emoji: "🧃", name: "Eistee Pfirsich",          brand: "Fuzetea / Nestea",     unit: "ml",   baseKcal: 0.39, baseProtein: 0.0,   baseCarbs: 0.098, baseFat: 0.0,   min: 100, max: 500, step: 100, default: 500 },
  { emoji: "🥔", name: "Lay's Chips (Paprika)",    brand: "Lay's Paprika",        unit: "g",    baseKcal: 5.27, baseProtein: 0.063, baseCarbs: 0.52,  baseFat: 0.32,  min: 10,  max: 150, step: 10,  default: 30 },
  { emoji: "🍫", name: "Nutella",                  brand: "Ferrero Nutella",      unit: "g",    baseKcal: 5.39, baseProtein: 0.063, baseCarbs: 0.575, baseFat: 0.309, min: 5,   max: 50,  step: 5,   default: 20 },
  { emoji: "🍦", name: "Magnum Classic",           brand: "Langnese Magnum",      unit: "Stk.", baseKcal: 246,  baseProtein: 3.0,   baseCarbs: 23.2,  baseFat: 16.3,  min: 1,   max: 3,   step: 1,   default: 1, perUnit: true },
];

// ===================================================================
const SPORT_ITEMS = [
  { emoji: "🏋️", name: "Gym-Training",       duration: 90, met: 6.0,  effect: "Kräftigt alle großen Muskelgruppen. Erhöht den Grundumsatz langfristig, weil Muskelmasse mehr Energie verbraucht – auch in Ruhe." },
  { emoji: "🏃", name: "Joggen",             duration: 20, met: 9.0,  effect: "Sehr effektiv für Herz-Kreislauf und Ausdauer. Einer der höchsten Kalorienverbrauche pro Minute." },
  { emoji: "🚴", name: "Fahrrad fahren",     duration: 45, met: 7.5,  effect: "Hervorragend für Ausdauer und Beine. Gelenkschonend – ideal für einen entspannten Fettabbau." },
  { emoji: "🏊", name: "Schwimmen",          duration: 30, met: 8.0,  effect: "Trainiert den ganzen Körper bei minimalem Gelenkdruck. Besonders gut für Rücken und Schultern." },
  { emoji: "⭐", name: "Hampelmänner",       duration: 10, met: 8.0,  effect: "Kurze, intensive Einheit für den Kreislauf. Erhöht den Herzschlag schnell und verbrennt überraschend viele Kalorien pro Minute." },
  { emoji: "💃", name: "Tanzen",             duration: 15, met: 5.5,  effect: "Verbessert Koordination, Gleichgewicht und Ausdauer gleichzeitig. Macht Spaß und fühlt sich weniger nach Training an." },
  { emoji: "⚽", name: "Fußball spielen",    duration: 60, met: 7.0,  effect: "Kombiniert Sprint, Ausdauer und Teamwork. Sehr hoher Kalorienverbrauch durch die vielen Richtungswechsel." },
  { emoji: "🧘", name: "Yoga / Stretching",  duration: 30, met: 2.5,  effect: "Verbessert Beweglichkeit und Körperhaltung. Reduziert Stress, was indirekt beim gesunden Gewicht hilft." },
  { emoji: "🚶", name: "Spazieren gehen",    duration: 30, met: 3.5,  effect: "Einsteigerfreundlich und entspannend. Ideal nach dem Essen, um den Blutzucker zu regulieren." },
  { emoji: "🎮", name: "Stehend Zocken",     duration: 60, met: 1.8,  effect: "Schont die Wirbelsäule mehr als Sitzen. Verbrennt kaum Kalorien, ist aber besser als langes Sitzen." },
];


// ===================================================================
// INIT
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  buildFoodGrids();
  buildRecipes();
  buildCheatDay();
  buildSport();
  initSearch();
  initTabs();
  initModal();
  initFoodModal();
  initIntersectionAnimations();
});

// ===================================================================
// FOOD GRIDS
// ===================================================================

function macroBarHTML(item) {
  const totalCal = (item.protein * 4) + (item.carbs * 4) + (item.fat * 9);
  if (totalCal === 0) return "";
  const pct = {
    p: Math.round((item.protein * 4 / totalCal) * 100),
    kh: Math.round((item.carbs * 4 / totalCal) * 100),
    f: Math.round((item.fat * 9 / totalCal) * 100),
  };
  return `
    <div class="macro-bar-wrap">
      <div class="macro-bar">
        <div class="mb-p" style="width:${pct.p}%" title="Protein ${pct.p}%"></div>
        <div class="mb-kh" style="width:${pct.kh}%" title="Kohlenhydrate ${pct.kh}%"></div>
        <div class="mb-f" style="width:${pct.f}%" title="Fett ${pct.f}%"></div>
      </div>
      <div class="macro-legend">
        <span class="ml-p">P ${item.protein}g</span>
        <span class="ml-kh">KH ${item.carbs}g</span>
        <span class="ml-f">F ${item.fat}g</span>
      </div>
    </div>`;
}

function portionKcal(item) {
  return Math.round(item.kcal * item.serving / 100);
}

function foodCard(item, category) {
  const div = document.createElement("div");
  div.className = `food-card ${category}-card reveal-card`;
  div.dataset.sub = item.sub;
  div.dataset.name = (item.name + " " + item.brand).toLowerCase();

  const isLiquid = item.sub === "Softdrinks";
  const unit = isLiquid ? "ml" : "g";
  const pKcal = portionKcal(item);

  div.innerHTML = `
    <div class="food-card-top">
      <span class="food-em">${item.emoji}</span>
      <div class="food-info">
        <div class="food-name">${item.name}</div>
        <div class="food-brand">${item.brand}</div>
      </div>
    </div>
    <div class="food-kcal-line">
      <span class="food-kcal-val">${item.kcal}</span>
      <span class="food-kcal-unit">kcal / 100${unit}</span>
    </div>
    ${macroBarHTML(item)}
    <div class="food-portion-badge">
      ↳ Portion: ${item.serving}${unit} = <strong>${pKcal} kcal</strong>
    </div>
  `;

  div.addEventListener("click", () => openFoodModal(item, category));
  return div;
}

function buildFoodGrids() {
  ["green", "yellow", "red"].forEach(cat => {
    const grid = document.getElementById(`grid-${cat}`);
    const count = document.getElementById(`count-${cat}`);
    const filterRow = document.getElementById(`filter-${cat}`);

    const subs = [...new Set(FOODS[cat].map(f => f.sub))];

    // Build filter pills
    const allPill = document.createElement("button");
    allPill.className = "sub-pill active";
    allPill.textContent = "Alle";
    allPill.dataset.filter = "all";
    filterRow.appendChild(allPill);

    subs.forEach(sub => {
      const pill = document.createElement("button");
      pill.className = "sub-pill";
      pill.textContent = sub;
      pill.dataset.filter = sub;
      filterRow.appendChild(pill);
    });

    filterRow.addEventListener("click", e => {
      const pill = e.target.closest(".sub-pill");
      if (!pill) return;
      filterRow.querySelectorAll(".sub-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.dataset.filter;
      grid.querySelectorAll(".food-card").forEach(card => {
        const match = filter === "all" || card.dataset.sub === filter;
        card.style.display = match ? "" : "none";
      });
    });

    FOODS[cat].forEach(item => grid.appendChild(foodCard(item, cat)));
    count.textContent = `${FOODS[cat].length} Einträge`;
  });
}

// ===================================================================
// FOOD DETAIL MODAL
// ===================================================================

function initFoodModal() {
  document.getElementById("foodModalClose").addEventListener("click", closeFoodModal);
  document.getElementById("foodModal").addEventListener("click", e => {
    if (e.target === document.getElementById("foodModal")) closeFoodModal();
  });
}

function openFoodModal(item, category) {
  const isLiquid = item.sub === "Softdrinks";
  const unit = isLiquid ? "ml" : "g";
  const pKcal = portionKcal(item);
  const pProtein = (item.protein * item.serving / 100).toFixed(1);
  const pCarbs = (item.carbs * item.serving / 100).toFixed(1);
  const pFat = (item.fat * item.serving / 100).toFixed(1);
  const pFiber = item.fiber ? (item.fiber * item.serving / 100).toFixed(1) : null;

  const totalCal = (item.protein * 4) + (item.carbs * 4) + (item.fat * 9);
  const pctP  = totalCal > 0 ? Math.round((item.protein * 4 / totalCal) * 100) : 0;
  const pctKH = totalCal > 0 ? Math.round((item.carbs * 4 / totalCal) * 100) : 0;
  const pctF  = totalCal > 0 ? Math.round((item.fat * 9 / totalCal) * 100) : 0;

  const catColor = { green: "var(--neon-green)", yellow: "var(--neon-yellow)", red: "var(--neon-red)" }[category];
  const catLabel = { green: "GRÜN – Viel essen", yellow: "GELB – Normale Portionen", red: "ROT – Lieber vermeiden" }[category];

  document.getElementById("foodModalContent").innerHTML = `
    <div class="fmodal-header">
      <span class="fmodal-emoji">${item.emoji}</span>
      <div>
        <div class="fmodal-name">${item.name}</div>
        <div class="fmodal-brand">${item.brand}</div>
        <span class="fmodal-cat-badge" style="--cat-color:${catColor}">${catLabel}</span>
      </div>
    </div>

    <div class="fmodal-section-title">Pro 100${unit}</div>
    <div class="fmodal-macro-grid">
      <div class="fmodal-macro-box kcal-box">
        <span class="fmb-val">${item.kcal}</span>
        <span class="fmb-label">kcal</span>
      </div>
      <div class="fmodal-macro-box">
        <span class="fmb-val protein-col">${item.protein}g</span>
        <span class="fmb-label">Protein</span>
      </div>
      <div class="fmodal-macro-box">
        <span class="fmb-val carbs-col">${item.carbs}g</span>
        <span class="fmb-label">Kohlenhydrate</span>
      </div>
      <div class="fmodal-macro-box">
        <span class="fmb-val fat-col">${item.fat}g</span>
        <span class="fmb-label">Fett</span>
      </div>
      ${item.fiber ? `<div class="fmodal-macro-box"><span class="fmb-val fiber-col">${item.fiber}g</span><span class="fmb-label">Ballaststoffe</span></div>` : ""}
    </div>

    <div class="fmodal-bar-section">
      <div class="fmodal-bar">
        <div class="fmb-p-bar" style="width:${pctP}%"></div>
        <div class="fmb-kh-bar" style="width:${pctKH}%"></div>
        <div class="fmb-f-bar" style="width:${pctF}%"></div>
      </div>
      <div class="fmodal-bar-legend">
        <span class="fbl-p">🟦 Protein ${pctP}%</span>
        <span class="fbl-kh">🟨 Kohlenhydrate ${pctKH}%</span>
        <span class="fbl-f">🟥 Fett ${pctF}%</span>
      </div>
    </div>

    <div class="fmodal-section-title">Typische Portion: ${item.serving}${unit}</div>
    <div class="fmodal-portion-grid">
      <div class="fmodal-portion-box highlight-box">
        <span class="fpb-val">${pKcal}</span>
        <span class="fpb-label">kcal</span>
      </div>
      <div class="fmodal-portion-box">
        <span class="fpb-val protein-col">${pProtein}g</span>
        <span class="fpb-label">Protein</span>
      </div>
      <div class="fmodal-portion-box">
        <span class="fpb-val carbs-col">${pCarbs}g</span>
        <span class="fpb-label">Kohlenhydrate</span>
      </div>
      <div class="fmodal-portion-box">
        <span class="fpb-val fat-col">${pFat}g</span>
        <span class="fpb-label">Fett</span>
      </div>
      ${pFiber ? `<div class="fmodal-portion-box"><span class="fpb-val fiber-col">${pFiber}g</span><span class="fpb-label">Ballaststoffe</span></div>` : ""}
    </div>
  `;

  document.getElementById("foodModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeFoodModal() {
  document.getElementById("foodModal").classList.add("hidden");
  document.body.style.overflow = "";
}

// ===================================================================
// SEARCH
// ===================================================================

function initSearch() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClear");
  const resultsBox = document.getElementById("searchResultsBox");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    clearBtn.style.opacity = q ? "1" : "0";

    if (!q) {
      resultsBox.classList.add("hidden");
      resultsBox.innerHTML = "";
      showAllCategories(true);
      return;
    }

    showAllCategories(false);
    resultsBox.classList.remove("hidden");
    resultsBox.innerHTML = "";

    const allItems = [
      ...FOODS.green.map(f => ({ ...f, cat: "green" })),
      ...FOODS.yellow.map(f => ({ ...f, cat: "yellow" })),
      ...FOODS.red.map(f => ({ ...f, cat: "red" })),
    ];

    const matches = allItems.filter(f =>
      (f.name + " " + f.brand + " " + f.sub).toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      resultsBox.innerHTML = `<p class="no-results">Kein Lebensmittel gefunden für „${input.value}"</p>`;
      return;
    }

    const countEl = document.createElement("div");
    countEl.className = "search-count";
    countEl.textContent = `${matches.length} Ergebnis${matches.length !== 1 ? "se" : ""}`;
    resultsBox.appendChild(countEl);

    const grid = document.createElement("div");
    grid.className = "food-grid";
    matches.forEach(item => grid.appendChild(foodCard(item, item.cat)));
    resultsBox.appendChild(grid);
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    clearBtn.style.opacity = "0";
    resultsBox.classList.add("hidden");
    resultsBox.innerHTML = "";
    showAllCategories(true);
    input.focus();
  });
}

function showAllCategories(visible) {
  ["cat-green", "cat-yellow", "cat-red"].forEach(id => {
    document.getElementById(id).style.display = visible ? "" : "none";
  });
}

// ===================================================================
// INTERSECTION OBSERVER (staggered card animations)
// ===================================================================

function initIntersectionAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal-card").forEach((card, i) => {
    card.style.animationDelay = `${(i % 12) * 40}ms`;
    observer.observe(card);
  });
}

// ===================================================================
// RECIPES
// ===================================================================

function buildRecipes() {
  const grid = document.getElementById("recipeGrid");
  RECIPES.forEach((r, i) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.dataset.index = i;
    card.innerHTML = `
      <div class="recipe-emoji">${r.emoji}</div>
      <div class="recipe-info">
        <div class="recipe-name">${r.name}</div>
        <div class="recipe-meta">
          <span class="recipe-meta-item">⏱ ${r.time}</span>
          <span class="recipe-meta-item">📊 ${r.difficulty}</span>
        </div>
        <div class="recipe-macros">
          <span class="macro-pill kcal">⚡ ${r.kcal} kcal</span>
          <span class="macro-pill protein">🥩 ${r.protein}g P</span>
          <span class="macro-pill carbs">🌾 ${r.carbs}g KH</span>
          <span class="macro-pill fat">🫙 ${r.fat}g F</span>
        </div>
        <div class="recipe-tap-hint">Tippen für Zubereitung ›</div>
      </div>
    `;
    card.addEventListener("click", () => openRecipeModal(i));
    grid.appendChild(card);
  });
}

// ===================================================================
// MODAL
// ===================================================================

function initModal() {
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("recipeModal").addEventListener("click", e => {
    if (e.target === document.getElementById("recipeModal")) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeModal(); closeFoodModal(); }
  });
}

function openRecipeModal(index) {
  const r = RECIPES[index];
  const content = document.getElementById("modalContent");
  const stepsHTML = r.steps.map((s, i) => `
    <div class="modal-step">
      <div class="step-num">${i + 1}</div>
      <div class="step-text">${s}</div>
    </div>
  `).join("");

  content.innerHTML = `
    <div class="modal-emoji">${r.emoji}</div>
    <div class="modal-title">${r.name}</div>
    <div class="modal-meta-row">
      <span class="recipe-meta-item">⏱ ${r.time}</span>
      <span class="recipe-meta-item">📊 ${r.difficulty}</span>
    </div>
    <div class="modal-macros">
      <span class="macro-pill kcal">⚡ ${r.kcal} kcal</span>
      <span class="macro-pill protein">🥩 ${r.protein}g Protein</span>
      <span class="macro-pill carbs">🌾 ${r.carbs}g KH</span>
      <span class="macro-pill fat">🫙 ${r.fat}g Fett</span>
    </div>
    <div class="modal-steps-title">Zubereitung</div>
    ${stepsHTML}
  `;

  document.getElementById("recipeModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("recipeModal").classList.add("hidden");
  document.body.style.overflow = "";
}

// ===================================================================
// CHEAT DAY
// ===================================================================

function buildCheatDay() {
  const grid = document.getElementById("cheatGrid");
  CHEAT_ITEMS.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "cheat-card";

    const sliderId  = `cheat-slider-${i}`;
    const portionId = `cheat-portion-${i}`;
    const kcalId    = `cheat-kcal-${i}`;
    const detailId  = `cheat-detail-${i}`;
    const barId     = `cheat-bar-${i}`;

    card.innerHTML = `
      <div class="cheat-header">
        <span class="cheat-emoji">${item.emoji}</span>
        <div>
          <div class="cheat-name">${item.name}</div>
          <div class="cheat-brand">${item.brand}</div>
          <div class="cheat-base">Angabe pro ${item.perUnit ? "Stück" : "100 " + item.unit}</div>
        </div>
      </div>
      <div class="cheat-slider-row">
        <input type="range" class="cheat-slider" id="${sliderId}"
          min="${item.min}" max="${item.max}" step="${item.step}" value="${item.default}" />
        <span class="cheat-portion-val" id="${portionId}">${item.default} ${item.unit}</span>
      </div>
      <div class="cheat-result">
        <div class="cheat-result-left">
          <div class="cheat-kcal-val" id="${kcalId}">– kcal</div>
          <div class="cheat-detail" id="${detailId}"></div>
        </div>
        <div class="cheat-bar-wrap">
          <div class="cheat-fill-bar" id="${barId}" style="width:0%"></div>
        </div>
      </div>
    `;

    grid.appendChild(card);

    const slider = card.querySelector(`#${sliderId}`);
    const MAX_KCAL = 1000;

    function updateCheat() {
      const val = parseFloat(slider.value);
      let kcal, protein, carbs, fat;
      if (item.perUnit) {
        kcal    = val * item.baseKcal;
        protein = val * item.baseProtein;
        carbs   = val * item.baseCarbs;
        fat     = val * item.baseFat;
      } else {
        kcal    = val * item.baseKcal;
        protein = val * item.baseProtein;
        carbs   = val * item.baseCarbs;
        fat     = val * item.baseFat;
      }
      card.querySelector(`#${portionId}`).textContent = `${val} ${item.unit}`;
      card.querySelector(`#${kcalId}`).textContent = `${Math.round(kcal)} kcal`;
      card.querySelector(`#${detailId}`).textContent =
        `P: ${protein.toFixed(1)}g · KH: ${carbs.toFixed(1)}g · Fett: ${fat.toFixed(1)}g`;
      const pct = Math.min(100, (kcal / MAX_KCAL) * 100);
      card.querySelector(`#${barId}`).style.width = pct + "%";
    }

    slider.addEventListener("input", updateCheat);
    updateCheat();
  });
}

// ===================================================================
// SPORT
// ===================================================================

let userWeight = 65;

function buildSport() {
  document.getElementById("weightDisplay").textContent = `${userWeight} kg`;
  document.getElementById("weightMinus").addEventListener("click", () => changeWeight(-1));
  document.getElementById("weightPlus").addEventListener("click",  () => changeWeight(+1));

  const grid = document.getElementById("sportGrid");
  SPORT_ITEMS.forEach((s, i) => {
    const card = document.createElement("div");
    card.className = "sport-card";
    const kcalEst = Math.round(s.met * userWeight * (s.duration / 60));
    card.innerHTML = `
      <div class="sport-card-emoji">${s.emoji}</div>
      <div class="sport-card-name">${s.name}</div>
      <div class="sport-card-dur">${s.duration} Min.</div>
      <div class="sport-card-kcal-hint" id="sport-hint-${i}">~${kcalEst} kcal</div>
    `;
    card.addEventListener("click", () => showSportResult(i, card));
    grid.appendChild(card);
  });
}

function changeWeight(delta) {
  userWeight = Math.max(20, Math.min(200, userWeight + delta));
  document.getElementById("weightDisplay").textContent = `${userWeight} kg`;
  // Update all kcal hints
  SPORT_ITEMS.forEach((s, i) => {
    const hint = document.getElementById(`sport-hint-${i}`);
    if (hint) hint.textContent = `~${Math.round(s.met * userWeight * (s.duration / 60))} kcal`;
  });
  const active = document.querySelector(".sport-card.active");
  if (active) {
    const idx = [...document.querySelectorAll(".sport-card")].indexOf(active);
    showSportResult(idx, active);
  }
}

function showSportResult(index, card) {
  document.querySelectorAll(".sport-card").forEach(c => c.classList.remove("active"));
  card.classList.add("active");

  const s = SPORT_ITEMS[index];
  const kcal = Math.round(s.met * userWeight * (s.duration / 60));

  const result = document.getElementById("sportResult");
  document.getElementById("resultTitle").textContent = `${s.emoji} ${s.name}`;
  document.getElementById("resultKcal").textContent = kcal;
  document.getElementById("resultMin").textContent = s.duration;
  document.getElementById("resultMet").textContent = s.met.toFixed(1);
  document.getElementById("resultEffect").textContent = s.effect;

  result.classList.remove("hidden");
  setTimeout(() => result.scrollIntoView({ behavior: "smooth", block: "nearest" }), 50);
}

// ===================================================================
// TABS
// ===================================================================

function initTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels  = document.querySelectorAll(".tab-panel");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      buttons.forEach(b => b.classList.toggle("active", b === btn));
      panels.forEach(p => {
        p.classList.toggle("active", p.id === `tab-${target}`);
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}
