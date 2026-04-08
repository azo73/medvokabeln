const vocabularyData = [
    // --- ALLGEMEIN (Genel) ---
    { id: 1, category: "Allgemein", german: "Krankenhaus", type: "Das Nomen", turkish: "Hastane", example: "Das Krankenhaus ist sehr modern." },
    { id: 2, category: "Allgemein", german: "Notaufnahme", type: "Die Nomen", turkish: "Acil Servis", example: "Bringen Sie ihn in die Notaufnahme!" },
    { id: 3, category: "Allgemein", german: "Station", type: "Die Nomen", turkish: "Servis / Bölüm", example: "Er liegt auf Station 5." },
    { id: 4, category: "Allgemein", german: "Patient", type: "Der Nomen", turkish: "Hasta", example: "Der Patient schläft." },
    { id: 5, category: "Allgemein", german: "Visite", type: "Die Nomen", turkish: "Vizit", example: "Die Visite beginnt um 8 Uhr." },
    { id: 6, category: "Allgemein", german: "Rezept", type: "Das Nomen", turkish: "Reçete", example: "Hier ist Ihr Rezept." },
    
    // --- ANATOMIE (Anatomi) ---
    { id: 7, category: "Anatomie", german: "Herz", type: "Das Nomen", turkish: "Kalp", example: "Das Herz schlägt schnell." },
    { id: 8, category: "Anatomie", german: "Lunge", type: "Die Nomen", turkish: "Akciğer", example: "Atmen Sie tief ein." },
    { id: 9, category: "Anatomie", german: "Magen", type: "Der Nomen", turkish: "Mide", example: "Mein Magen tut weh." },
    { id: 10, category: "Anatomie", german: "Blut", type: "Das Nomen", turkish: "Kan", example: "Wir brauchen eine Blutprobe." },
    { id: 11, category: "Anatomie", german: "Kopf", type: "Der Nomen", turkish: "Baş", example: "Ich habe Kopfschmerzen." },
    
    // --- AKTION (Fiiller) ---
    { id: 12, category: "Aktion", german: "messen", type: "Das Verb", turkish: "Ölçmek", example: "Ich messe das Fieber." },
    { id: 13, category: "Aktion", german: "spritzen", type: "Das Verb", turkish: "İğne yapmak", example: "Ich muss Insulin spritzen." },
    { id: 14, category: "Aktion", german: "waschen", type: "Das Verb", turkish: "Yıkamak", example: "Soll ich Sie waschen?" },
    { id: 15, category: "Aktion", german: "dokumentieren", type: "Das Verb", turkish: "Kaydetmek", example: "Ich muss alles dokumentieren." },
    
    // --- SYMPTOME (Belirtiler) ---
    { id: 16, category: "Symptome", german: "Schmerz", type: "Der Nomen", turkish: "Ağrı", example: "Wo haben Sie Schmerzen?" },
    { id: 17, category: "Symptome", german: "Fieber", type: "Das Nomen", turkish: "Ateş", example: "Sie haben hohes Fieber." },
    { id: 18, category: "Symptome", german: "Husten", type: "Der Nomen", turkish: "Öksürük", example: "Haben Sie Husten?" },
    { id: 19, category: "Symptome", german: "Übelkeit", type: "Die Nomen", turkish: "Bulantı", example: "İst Ihnen übel?" },
    
    // --- MEDIKAMENTE (İlaçlar) ---
    { id: 20, category: "Medikamente", german: "Tablette", type: "Die Nomen", turkish: "Hap", example: "Nehmen Sie diese Tablette." },
    { id: 21, category: "Medikamente", german: "Salbe", type: "Die Nomen", turkish: "Merhem", example: "Cremen Sie die Wunde ein." },
    { id: 22, category: "Medikamente", german: "Infusion", type: "Die Nomen", turkish: "Serum", example: "Die Infusion ist fertig." },
    
    // --- DIALOGE (Cümleler) ---
    { id: 23, category: "Dialoge", german: "Wie geht es Ihnen?", type: "Satz", turkish: "Nasılsınız?", example: "Guten Morgen, wie geht es Ihnen?" },
    { id: 24, category: "Dialoge", german: "Drücken Sie die Klingel.", type: "Satz", turkish: "Zile basın.", example: "Wenn Sie Hilfe brauchen, drücken Sie die Klingel." },
    { id: 25, category: "Dialoge", german: "Gute Besserung!", type: "Satz", turkish: "Geçmiş olsun!", example: "Auf Wiedersehen und Gute Besserung." }
];

// Kanka test etmek için şimdilik 25 kelime koydum. 
// Çalıştığını görünce burayı 1000 kelimeye kadar doldururuz.
