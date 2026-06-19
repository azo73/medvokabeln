const vocabularyData = [
    // --- ALLGEMEIN ---
    { "id": 1, "category": "Allgemein", "german": "Krankenhaus", "type": "Nomen", "turkish": "Hastane", "english": "Hospital", "example": "Das Krankenhaus ist in der Nähe." },
    { "id": 2, "category": "Allgemein", "german": "Notaufnahme", "type": "Nomen", "turkish": "Acil Servis", "english": "Emergency Room (ER)", "example": "Bringen Sie ihn sofort in die Notaufnahme!" },
    { "id": 3, "category": "Allgemein", "german": "Station", "type": "Nomen", "turkish": "Servis / Bölüm", "english": "Ward", "example": "Er liegt auf der kardiologischen Station." },
    { "id": 4, "category": "Allgemein", "german": "Patient", "type": "Nomen", "turkish": "Hasta", "english": "Patient", "example": "Der Patient schläft noch." },
    { "id": 5, "category": "Allgemein", "german": "Arzt", "type": "Nomen", "turkish": "Doktor", "english": "Doctor / Physician", "example": "Der Arzt kommt gleich zur Visite." },
    { "id": 6, "category": "Allgemein", "german": "Visite", "type": "Nomen", "turkish": "Doktor Viziti", "english": "Ward Round", "example": "Die Visite beginnt um 8 Uhr." },
    { "id": 7, "category": "Allgemein", "german": "Diagnose", "type": "Nomen", "turkish": "Teşhis", "english": "Diagnosis", "example": "Die Diagnose ist noch nicht sicher." },
    { "id": 8, "category": "Allgemein", "german": "Rezept", "type": "Nomen", "turkish": "Reçete", "english": "Prescription", "example": "Ich schreibe Ihnen ein Rezept auf." },
    { "id": 9, "category": "Allgemein", "german": "Behandlung", "type": "Nomen", "turkish": "Tedavi", "english": "Treatment", "example": "Die Behandlung dauert zwei Wochen." },
    { "id": 10, "category": "Allgemein", "german": "Untersuchung", "type": "Nomen", "turkish": "Muayene", "english": "Examination", "example": "Die Untersuchung war schmerzlos." },
    { "id": 11, "category": "Allgemein", "german": "Überweisung", "type": "Nomen", "turkish": "Sevk", "english": "Referral", "example": "Sie brauchen eine Überweisung." },
    { "id": 12, "category": "Allgemein", "german": "Entlassung", "type": "Nomen", "turkish": "Taburcu olma", "english": "Discharge", "example": "Die Entlassung ist für morgen geplant." },
    { "id": 13, "category": "Allgemein", "german": "Aufnahme", "type": "Nomen", "turkish": "Kayıt / Kabul", "english": "Admission", "example": "Bitte gehen Sie zuerst zur Aufnahme." },
    { "id": 14, "category": "Allgemein", "german": "Labor", "type": "Nomen", "turkish": "Laboratuvar", "english": "Laboratory", "example": "Die Proben sind bereits im Labor." },
    { "id": 15, "category": "Allgemein", "german": "Krankenkasse", "type": "Nomen", "turkish": "Sağlık Sigortası", "english": "Health Insurance", "example": "Haben Sie Ihre Krankenkassenkarte dabei?" },
    
    // --- ANATOMIE ---
    { "id": 16, "category": "Anatomie", "german": "Herz", "type": "Nomen", "turkish": "Kalp", "english": "Heart", "example": "Das Herz schlägt schnell." },
    { "id": 17, "category": "Anatomie", "german": "Lunge", "type": "Nomen", "turkish": "Akciğer", "english": "Lungs", "example": "Atmen Sie tief in die Lunge ein." },
    { "id": 18, "category": "Anatomie", "german": "Gehirn", "type": "Nomen", "turkish": "Beyin", "english": "Brain", "example": "Das Gehirn ist sehr komplex." },
    { "id": 19, "category": "Anatomie", "german": "Magen", "type": "Nomen", "turkish": "Mide", "english": "Stomach", "example": "Ich habe Schmerzen im Magen." },
    { "id": 20, "category": "Anatomie", "german": "Leber", "type": "Nomen", "turkish": "Karaciğer", "english": "Liver", "example": "Alkohol schadet der Leber." },
    { "id": 21, "category": "Anatomie", "german": "Niere", "type": "Nomen", "turkish": "Böbrek", "english": "Kidney", "example": "Der Patient hat Nierenschmerzen." },
    { "id": 22, "category": "Anatomie", "german": "Blut", "type": "Nomen", "turkish": "Kan", "english": "Blood", "example": "Wir brauchen eine Blutprobe." },
    { "id": 23, "category": "Anatomie", "german": "Knochen", "type": "Nomen", "turkish": "Kemik", "english": "Bone", "example": "Der Knochen ist gebrochen." },
    { "id": 24, "category": "Anatomie", "german": "Haut", "type": "Nomen", "turkish": "Cilt", "english": "Skin", "example": "Die Haut ist gerötet." },
    { "id": 25, "category": "Anatomie", "german": "Ader", "type": "Nomen", "turkish": "Damar / Ven", "english": "Vein / Blood vessel", "example": "Ich finde keine gute Ader." },
    { "id": 26, "category": "Anatomie", "german": "Wirbelsäule", "type": "Nomen", "turkish": "Omurga", "english": "Spine", "example": "Er hat Probleme mit der Wirbelsäule." },
    { "id": 27, "category": "Anatomie", "german": "Gelenk", "type": "Nomen", "turkish": "Eklem", "english": "Joint", "example": "Das Kniegelenk ist geschwollen." },
    { "id": 28, "category": "Anatomie", "german": "Muskel", "type": "Nomen", "turkish": "Kas", "english": "Muscle", "example": "Ich habe einen Muskelkater." },
    { "id": 29, "category": "Anatomie", "german": "Nerv", "type": "Nomen", "turkish": "Sinir", "english": "Nerve", "example": "Ein Nerv ist eingeklemmt." },
    { "id": 30, "category": "Anatomie", "german": "Bauch", "type": "Nomen", "turkish": "Karın", "english": "Abdomen", "example": "Der Bauch ist weich." },

    // --- AKTION ---
    { "id": 31, "category": "Aktion", "german": "Messen", "type": "Verb", "turkish": "Ölçmek", "english": "To measure", "example": "Ich messe jetzt das Fieber." },
    { "id": 32, "category": "Aktion", "german": "Spritzen", "type": "Verb", "turkish": "İğne yapmak", "english": "To inject", "example": "Soll ich das Insulin spritzen?" },
    { "id": 33, "category": "Aktion", "german": "Verbinden", "type": "Verb", "turkish": "Sarmak / Pansuman", "english": "To bandage / dress", "example": "Ich muss die Wunde neu verbinden." },
    { "id": 34, "category": "Aktion", "german": "Waschen", "type": "Verb", "turkish": "Yıkamak", "english": "To wash", "example": "Soll ich Ihnen beim Waschen helfen?" },
    { "id": 35, "category": "Aktion", "german": "Füttern", "type": "Verb", "turkish": "Beslemek", "english": "To feed", "example": "Ich muss den Patienten füttern." },
    { "id": 36, "category": "Aktion", "german": "Lagern", "type": "Verb", "turkish": "Pozisyon vermek", "english": "To position", "example": "Wir müssen den Patienten lagern." },
    { "id": 37, "category": "Aktion", "german": "Mobilisieren", "type": "Verb", "turkish": "Hareket ettirmek", "english": "To mobilize", "example": "Wir wollen den Patienten heute mobilisieren." },
    { "id": 38, "category": "Aktion", "german": "Dokumentieren", "type": "Verb", "turkish": "Kaydetmek", "english": "To document", "example": "Ich muss die Werte dokumentieren." },
    { "id": 39, "category": "Aktion", "german": "Desinfizieren", "type": "Verb", "turkish": "Dezenfekte etmek", "english": "To disinfect", "example": "Bitte die Hände desinfizieren." },
    { "id": 40, "category": "Aktion", "german": "Absaugen", "type": "Verb", "turkish": "Aspire etmek", "english": "To suction", "example": "Ich muss den Schleim absaugen." },

    // --- SYMPTOME ---
    { "id": 41, "category": "Symptome", "german": "Schmerz", "type": "Nomen", "turkish": "Ağrı", "english": "Pain", "example": "Wo genau haben Sie Schmerzen?" },
    { "id": 42, "category": "Symptome", "german": "Fieber", "type": "Nomen", "turkish": "Ateş", "english": "Fever", "example": "Das Fieber sinkt langsam." },
    { "id": 43, "category": "Symptome", "german": "Husten", "type": "Nomen", "turkish": "Öksürük", "english": "Cough", "example": "Haben Sie trockenen Husten?" },
    { "id": 44, "category": "Symptome", "german": "Übelkeit", "type": "Nomen", "turkish": "Bulantı", "english": "Nausea", "example": "Ist Ihnen übel?" },
    { "id": 45, "category": "Symptome", "german": "Schwindel", "type": "Nomen", "turkish": "Baş dönmesi", "english": "Dizziness", "example": "Ich habe Schwindelgefühle." },
    { "id": 46, "category": "Symptome", "german": "Atemnot", "type": "Nomen", "turkish": "Nefes darlığı", "english": "Shortness of breath", "example": "Haben Sie Atemnot beim Gehen?" },
    { "id": 47, "category": "Symptome", "german": "Erbrechen", "type": "Nomen", "turkish": "Kusma", "english": "Vomiting", "example": "Der Patient leidet unter Erbrechen." },
    { "id": 48, "category": "Symptome", "german": "Durchfall", "type": "Nomen", "turkish": "İshal", "english": "Diarrhea", "example": "Seit wann haben Sie Durchfall?" },
    { "id": 49, "category": "Symptome", "german": "Verstopfung", "type": "Nomen", "turkish": "Kabızlık", "english": "Constipation", "example": "Leiden Sie unter Verstopfung?" },
    { "id": 50, "category": "Symptome", "german": "Blutung", "type": "Nomen", "turkish": "Kanama", "english": "Bleeding", "example": "Die Blutung hat aufgehört." },

    // --- AUSRÜSTUNG ---
    { "id": 51, "category": "Ausrüstung", "german": "Blutdruckmessgerät", "type": "Nomen", "turkish": "Tansiyon aleti", "english": "Blood pressure monitor", "example": "Das Blutdruckmessgerät ist kaputt." },
    { "id": 52, "category": "Ausrüstung", "german": "Stethoskop", "type": "Nomen", "turkish": "Stetoskop", "english": "Stethoscope", "example": "Ich brauche ein Stethoskop." },
    { "id": 53, "category": "Ausrüstung", "german": "Spritze", "type": "Nomen", "turkish": "Şırınga", "english": "Syringe", "example": "Geben Sie mir eine 5ml Spritze." },
    { "id": 54, "category": "Ausrüstung", "german": "Rollstuhl", "type": "Nomen", "turkish": "Tekerlekli sandalye", "english": "Wheelchair", "example": "Bitte bringen Sie einen Rollstuhl." },
    { "id": 55, "category": "Ausrüstung", "german": "Gehstützen", "type": "Nomen", "turkish": "Koltuk değneği", "english": "Crutches", "example": "Er braucht Gehstützen." },
    { "id": 56, "category": "Ausrüstung", "german": "Infusionsständer", "type": "Nomen", "turkish": "Serum askısı", "english": "IV pole", "example": "Der Infusionsständer wackelt." },
    { "id": 57, "category": "Ausrüstung", "german": "Thermometer", "type": "Nomen", "turkish": "Ateşölçer", "english": "Thermometer", "example": "Haben Sie ein Thermometer?" },
    { "id": 58, "category": "Ausrüstung", "german": "Verband", "type": "Nomen", "turkish": "Sargı", "english": "Bandage", "example": "Der Verband ist nass." },
    { "id": 59, "category": "Ausrüstung", "german": "Handschuhe", "type": "Nomen", "turkish": "Eldiven", "english": "Gloves", "example": "Ich trage Einmalhandschuhe." },
    { "id": 60, "category": "Ausrüstung", "german": "Pflaster", "type": "Nomen", "turkish": "Yara bandı", "english": "Band-aid / Plaster", "example": "Ein kleines Pflaster reicht." },
    { "id": 61, "category": "Ausrüstung", "german": "Bettpfanne", "type": "Nomen", "turkish": "Sürgü / Ördek", "english": "Bedpan", "example": "Der Patient braucht die Bettpfanne." },
    { "id": 62, "category": "Ausrüstung", "german": "Katheter", "type": "Nomen", "turkish": "Kateter", "english": "Catheter", "example": "Der Katheter muss geleert werden." },
    { "id": 63, "category": "Ausrüstung", "german": "EKG-Gerät", "type": "Nomen", "turkish": "EKG cihazı", "english": "ECG machine", "example": "Schließen Sie das EKG-Gerät an." },
    { "id": 64, "category": "Ausrüstung", "german": "Sauerstoffmaske", "type": "Nomen", "turkish": "Oksijen Maskesi", "english": "Oxygen mask", "example": "Wir legen die Sauerstoffmaske an." },
    { "id": 65, "category": "Ausrüstung", "german": "Defibrillator", "type": "Nomen", "turkish": "Defibrilatör", "english": "Defibrillator", "example": "Bringt den Defibrillator mit!" },

    // --- PERSONAL ---
    { "id": 66, "category": "Personal", "german": "Pflegefachkraft", "type": "Nomen", "turkish": "Hemşire", "english": "Nurse / Nursing professional", "example": "Ich bin heute Ihre Pflegefachkraft." },
    { "id": 67, "category": "Personal", "german": "Oberarzt", "type": "Nomen", "turkish": "Uzman doktor", "english": "Senior physician / Attending", "example": "Der Oberarzt macht heute Dienst." },
    { "id": 68, "category": "Personal", "german": "Chefarzt", "type": "Nomen", "turkish": "Başhekim", "english": "Chief physician", "example": "Der Chefarzt ist im Operationssaal." },
    { "id": 69, "category": "Personal", "german": "Stationsleitung", "type": "Nomen", "turkish": "Servis sorumlusu", "english": "Ward manager", "example": "Sprechen Sie mit der Stationsleitung." },
    { "id": 70, "category": "Personal", "german": "Physiotherapeut", "type": "Nomen", "turkish": "Fizyoterapist", "english": "Physiotherapist", "example": "Der Physiotherapeut kommt um 10 Uhr." },
    { "id": 71, "category": "Personal", "german": "Logopäde", "type": "Nomen", "turkish": "Konuşma terapisti", "english": "Speech therapist", "example": "Der Logopäde hilft beim Schlucken." },
    { "id": 72, "category": "Personal", "german": "Hebamme", "type": "Nomen", "turkish": "Ebe", "english": "Midwife", "example": "Die Hebamme ist im Kreißsaal." },
    { "id": 73, "category": "Personal", "german": "Auszubildende", "type": "Nomen", "turkish": "Stajyer", "english": "Trainee / Student nurse", "example": "Unsere Auszubildende hilft Ihnen." },
    { "id": 74, "category": "Personal", "german": "Reinigungskraft", "type": "Nomen", "turkish": "Temizlik görevlisi", "english": "Cleaner / Janitor", "example": "Die Reinigungskraft kommt in Kürze." },
    { "id": 75, "category": "Personal", "german": "Rettungssanitäter", "type": "Nomen", "turkish": "Paramedik", "english": "Paramedic", "example": "Die Rettungssanitäter sind da." },

    // --- MEDIKAMENTE ---
    { "id": 76, "category": "Medikamente", "german": "Schmerzmittel", "type": "Nomen", "turkish": "Ağrı kesici", "english": "Painkiller", "example": "Brauchen Sie noch ein Schmerzmittel?" },
    { "id": 77, "category": "Medikamente", "german": "Antibiotikum", "type": "Nomen", "turkish": "Antibiyotik", "english": "Antibiotic", "example": "Sie müssen das Antibiotikum zu Ende nehmen." },
    { "id": 78, "category": "Medikamente", "german": "Schlaftablette", "type": "Nomen", "turkish": "Uyku ilacı", "english": "Sleeping pill", "example": "Hier ist Ihre Schlaftablette." },
    { "id": 79, "category": "Medikamente", "german": "Salbe", "type": "Nomen", "turkish": "Merhem", "english": "Ointment", "example": "Tragen Sie diese Salbe zweimal täglich auf." },
    { "id": 80, "category": "Medikamente", "german": "Tropfen", "type": "Nomen", "turkish": "Damla", "english": "Drops", "example": "Nehmen Sie 20 Tropfen vor dem Essen." },
    { "id": 81, "category": "Medikamente", "german": "Zäpfchen", "type": "Nomen", "turkish": "Fitil", "english": "Suppository", "example": "Das Zäpfchen ist gegen das Fieber." },
    { "id": 82, "category": "Medikamente", "german": "Infusion", "type": "Nomen", "turkish": "Serum", "english": "IV / Infusion", "example": "Die Infusion läuft noch." },
    { "id": 83, "category": "Medikamente", "german": "Nebenwirkung", "type": "Nomen", "turkish": "Yan etki", "english": "Side effect", "example": "Haben Sie Nebenwirkungen bemerkt?" },
    { "id": 84, "category": "Medikamente", "german": "Dosierung", "type": "Nomen", "turkish": "Doz", "english": "Dosage", "example": "Die Dosierung wurde geändert." },
    { "id": 85, "category": "Medikamente", "german": "Beruhigungsmittel", "type": "Nomen", "turkish": "Sakinleştirici", "english": "Sedative", "example": "Er hat ein Beruhigungsmittel genommen." },

    // --- NOTFALL ---
    { "id": 86, "category": "Notfall", "german": "Bewusstlos", "type": "Adjektiv", "turkish": "Bilinci kapalı", "english": "Unconscious", "example": "Der Patient ist bewusstlos." },
    { "id": 87, "category": "Notfall", "german": "Wiederbelebung", "type": "Nomen", "turkish": "Kalp masajı / CPR", "english": "CPR / Resuscitation", "example": "Wir beginnen mit der Wiederbelebung." },
    { "id": 88, "category": "Notfall", "german": "Koma", "type": "Nomen", "turkish": "Koma", "english": "Coma", "example": "Er liegt im künstlichen Koma." },
    { "id": 89, "category": "Notfall", "german": "Erste Hilfe", "type": "Nomen", "turkish": "İlk Yardım", "english": "First Aid", "example": "Erste Hilfe ist hier sehr wichtig." },
    { "id": 90, "category": "Notfall", "german": "Herzstillstand", "type": "Nomen", "turkish": "Kalp durması", "english": "Cardiac arrest", "example": "Er hatte einen Herzstillstand." },
    { "id": 91, "category": "Notfall", "german": "Schock", "type": "Nomen", "turkish": "Şok", "english": "Shock", "example": "Der Patient steht unter Schock." },
    { "id": 92, "category": "Notfall", "german": "Verletzung", "type": "Nomen", "turkish": "Yaralanma", "english": "Injury", "example": "Die Verletzung ist schwer." },
    { "id": 93, "category": "Notfall", "german": "Wunde", "type": "Nomen", "turkish": "Yara", "english": "Wound", "example": "Die Wunde blutet stark." },
    { "id": 94, "category": "Notfall", "german": "Verbrennung", "type": "Nomen", "turkish": "Yanık", "english": "Burn", "example": "Er hat eine Verbrennung dritten Grades." },
    { "id": 95, "category": "Notfall", "german": "Notarzt", "type": "Nomen", "turkish": "Acil Doktoru", "english": "Emergency doctor", "example": "Rufen Sie sofort den Notarzt!" },

    // --- KRANKHEITEN ---
    { "id": 96, "category": "Krankheiten", "german": "Krebs", "type": "Nomen", "turkish": "Kanser", "english": "Cancer", "example": "Er wird wegen Krebs behandelt." },
    { "id": 97, "category": "Krankheiten", "german": "Diabetes", "type": "Nomen", "turkish": "Şeker Hastalığı", "english": "Diabetes", "example": "Sie hat Diabetes Typ 2." },
    { "id": 98, "category": "Krankheiten", "german": "Asthma", "type": "Nomen", "turkish": "Astım", "english": "Asthma", "example": "Er benutzt sein Asthma-Spray." },
    { "id": 99, "category": "Krankheiten", "german": "Bluthochdruck", "type": "Nomen", "turkish": "Yüksek Tansiyon", "english": "High blood pressure", "example": "Bluthochdruck ist gefährlich." },
    { "id": 100, "category": "Krankheiten", "german": "Schlaganfall", "type": "Nomen", "turkish": "İnme / Felç", "english": "Stroke", "example": "Verdacht auf Schlaganfall." },
    { "id": 101, "category": "Krankheiten", "german": "Herzinfarkt", "type": "Nomen", "turkish": "Kalp Krizi", "english": "Heart attack", "example": "Er hatte einen leichten Herzinfarkt." },
    { "id": 102, "category": "Krankheiten", "german": "Grippe", "type": "Nomen", "turkish": "Grip", "english": "Flu", "example": "Die Grippe ist dieses Jahr sehr stark." },
    { "id": 103, "category": "Krankheiten", "german": "Entzündung", "type": "Nomen", "turkish": "İltihap / Enfeksiyon", "english": "Inflammation / Infection", "example": "Das ist eine bakterielle Entzündung." },
    { "id": 104, "category": "Krankheiten", "german": "Allergie", "type": "Nomen", "turkish": "Alerji", "english": "Allergy", "example": "Haben Sie eine Allergie gegen Nüsse?" },
    { "id": 105, "category": "Krankheiten", "german": "Demenz", "type": "Nomen", "turkish": "Demans / Bunama", "english": "Dementia", "example": "Der Patient leidet an Demenz." },

    // --- DIALOGE ---
    { "id": 106, "category": "Dialoge", "german": "Wie geht es Ihnen?", "type": "Satz", "turkish": "Nasılsınız?", "english": "How are you?", "example": "Guten Morgen, wie geht es Ihnen?" },
    { "id": 107, "category": "Dialoge", "german": "Haben Sie Schmerzen?", "type": "Satz", "turkish": "Ağrınız var mı?", "english": "Do you have pain?", "example": "Sagen Sie mir, haben Sie Schmerzen?" },
    { "id": 108, "category": "Dialoge", "german": "Ich bringe Ihnen die Medikamente.", "type": "Satz", "turkish": "Size ilaçları getiriyorum.", "english": "I'm bringing your medication.", "example": "Hier sind Ihre Tabletten." },
    { "id": 109, "category": "Dialoge", "german": "Können Sie mich verstehen?", "type": "Satz", "turkish": "Beni anlayabiliyor musunuz?", "english": "Can you understand me?", "example": "Hallo, können Sie mich verstehen?" },
    { "id": 110, "category": "Dialoge", "german": "Drücken Sie die Klingel.", "type": "Satz", "turkish": "Zile basın.", "english": "Press the bell.", "example": "Wenn etwas passiert, klingeln Sie bitte." },
    { "id": 111, "category": "Dialoge", "german": "Haben Sie gut geschlafen?", "type": "Satz", "turkish": "İyi uyudunuz mu?", "english": "Did you sleep well?", "example": "Guten Tag, haben Sie gut geschlafen?" },
    { "id": 112, "category": "Dialoge", "german": "Ich helfe Ihnen beim Aufstehen.", "type": "Satz", "turkish": "Ayağa kalkmanıza yardım edeyim.", "english": "I'll help you get up.", "example": "Ich helfe Ihnen." },
    { "id": 113, "category": "Dialoge", "german": "Möchten Sie etwas trinken?", "type": "Satz", "turkish": "Bir şey içmek ister misiniz?", "english": "Would you like something to drink?", "example": "Hier ist Wasser, möchten Sie etwas trinken?" },
    { "id": 114, "category": "Dialoge", "german": "Ich werde jetzt Ihren Blutdruck messen.", "type": "Satz", "turkish": "Şimdi tansiyonunuzu ölçeceğim.", "english": "I will measure your blood pressure now.", "example": "Halten Sie Ihren Arm ruhig." },
    { "id": 115, "category": "Dialoge", "german": "Warten Sie einen Moment.", "type": "Satz", "turkish": "Bir dakika bekleyin.", "english": "Wait a moment.", "example": "Ich bin gleich wieder da." },
    { "id": 116, "category": "Dialoge", "german": "Der Arzt kommt gleich.", "type": "Satz", "turkish": "Doktor birazdan geliyor.", "english": "The doctor will come soon.", "example": "Bitte gedulden Sie sich einen Moment." },
    { "id": 117, "category": "Dialoge", "german": "Haben Sie Allergien?", "type": "Satz", "turkish": "Alerjiniz var mı?", "english": "Do you have allergies?", "example": "Haben Sie Allergien gegen Penicillin?" },
    { "id": 118, "category": "Dialoge", "german": "Gute Besserung!", "type": "Satz", "turkish": "Geçmiş olsun!", "english": "Get well soon!", "example": "Auf Wiedersehen und gute Besserung!" },
    { "id": 119, "category": "Dialoge", "german": "Soll ich das Fenster schließen?", "type": "Satz", "turkish": "Pencereyi kapatayım mı?", "english": "Should I close the window?", "example": "Ist es Ihnen zu kalt?" },
    { "id": 120, "category": "Dialoge", "german": "Was kann ich für Sie tun?", "type": "Satz", "turkish": "Sizin için ne yapabilirim?", "english": "What can I do for you?", "example": "Brauchen Sie noch etwas?" },
    { "id": 121, "category": "Dialoge", "german": "Haben Sie Stuhlgang gehabt?", "type": "Satz", "turkish": "Tuvalete çıktınız mı?", "english": "Have you had a bowel movement?", "example": "Haben Sie heute schon Stuhlgang gehabt?" },
    { "id": 122, "category": "Dialoge", "german": "Darf ich Fieber messen?", "type": "Satz", "turkish": "Ateşinizi ölçebilir miyim?", "english": "May I take your temperature?", "example": "Darf ich bei Ihnen Fieber messen?" },
    { "id": 123, "category": "Dialoge", "german": "Bitte machen Sie den Arm frei.", "type": "Satz", "turkish": "Lütfen kolunuzu açın.", "english": "Please bare your arm.", "example": "Bitte machen Sie den Arm frei für die Blutabnahme." },
    { "id": 124, "category": "Dialoge", "german": "Wann haben Sie das letzte Mal gegessen?", "type": "Satz", "turkish": "En son ne zaman yemek yediniz?", "english": "When was the last time you ate?", "example": "Wann haben Sie vor der OP das letzte Mal gegessen?" },
    { "id": 125, "category": "Dialoge", "german": "Atmen Sie ganz normal weiter.", "type": "Satz", "turkish": "Normal nefes almaya devam edin.", "english": "Keep breathing normally.", "example": "Entspannen Sie sich und atmen Sie ganz normal weiter." },
    { "id": 126, "category": "Dialoge", "german": "Haben Sie heute schon Wasser gelassen?", "type": "Satz", "turkish": "İdrara çıktınız mı?", "english": "Have you passed urine today?", "example": "Haben Sie heute schon Wasser gelassen?" },
    { "id": 127, "category": "Dialoge", "german": "Ich wechsle jetzt Ihren Verband.", "type": "Satz", "turkish": "Şimdi pansumanınızı değiştireceğim.", "english": "I am changing your bandage now.", "example": "Es tut nicht weh, ich wechsle jetzt Ihren Verband." },
    { "id": 128, "category": "Dialoge", "german": "Haben Sie Begleitpersonen dabei?", "type": "Satz", "turkish": "Yanınızda refakatçi var mı?", "english": "Do you have a companion with you?", "example": "Haben Sie Angehörige oder Begleitpersonen dabei?" },
    { "id": 129, "category": "Dialoge", "german": "Wo genau tut es weh?", "type": "Satz", "turkish": "Tam olarak neresi ağrıyor?", "english": "Where exactly does it hurt?", "example": "Zeigen Sie mir: Wo genau tut es weh?" },
    { "id": 130, "category": "Dialoge", "german": "Bitte drehen Sie sich auf die Seite.", "type": "Satz", "turkish": "Lütfen yan dönün.", "english": "Please turn on your side.", "example": "Bitte drehen Sie sich auf die Seite für die Spritze." },
    { "id": 131, "category": "Dialoge", "german": "Wir fahren Sie jetzt in den OP.", "type": "Satz", "turkish": "Sizi şimdi ameliyathaneye götürüyoruz.", "english": "We are taking you to the OR now.", "example": "Alles ist bereit, wir fahren Sie jetzt in den OP." },
    { "id": 132, "category": "Dialoge", "german": "Ist Ihnen schwindelig?", "type": "Satz", "turkish": "Başınız dönüyor mu?", "english": "Do you feel dizzy?", "example": "Setzen Sie sich bitte, ist Ihnen schwindelig?" },
    { "id": 133, "category": "Dialoge", "german": "Bitte bleiben Sie nüchtern.", "type": "Satz", "turkish": "Lütfen aç kalın.", "english": "Please stay fasting.", "example": "Bitte bleiben Sie ab Mitternacht nüchtern." },
    { "id": 134, "category": "Dialoge", "german": "Ziehen Sie bitte den Oberkörper aus.", "type": "Satz", "turkish": "Lütfen üstünüzü soyunun.", "english": "Please take off your top.", "example": "Ziehen Sie bitte den Oberkörper aus für das EKG." },
    { "id": 135, "category": "Dialoge", "german": "Das Bett ist frisch bezogen.", "type": "Satz", "turkish": "Yatak yeni yapıldı.", "english": "The bed is freshly made.", "example": "Legen Sie sich gerne hin, das Bett ist frisch bezogen." },
    { "id": 136, "category": "Dialoge", "german": "Haben Sie eine Patientenverfügung?", "type": "Satz", "turkish": "Hasta vasiyetnameniz var mı?", "english": "Do you have a living will?", "example": "Für die Unterlagen: Haben Sie eine Patientenverfügung?" },
    { "id": 137, "category": "Dialoge", "german": "Brauchen Sie ein Schmerzmittel?", "type": "Satz", "turkish": "Ağrı kesiciye ihtiyacınız var mı?", "english": "Do you need a painkiller?", "example": "Wenn die Schmerzen stark sind, brauchen Sie ein Schmerzmittel?" },
    { "id": 138, "category": "Dialoge", "german": "Wir müssen Sie wiegen.", "type": "Satz", "turkish": "Sizi tartmamız gerekiyor.", "english": "We need to weigh you.", "example": "Kommen Sie bitte mit, wir müssen Sie wiegen." },
    { "id": 139, "category": "Dialoge", "german": "Die Infusion ist fertig.", "type": "Satz", "turkish": "Serum bitti.", "english": "The IV is finished.", "example": "Ich sehe, die Infusion ist fertig. Ich werde sie jetzt entfernen." },
    { "id": 140, "category": "Dialoge", "german": "Öffnen Sie den Mund ganz weit.", "type": "Satz", "turkish": "Ağzınızı kocaman açın.", "english": "Open your mouth wide.", "example": "Sagen Sie 'Aaa', öffnen Sie den Mund ganz weit." },
    { "id": 141, "category": "Dialoge", "german": "Nehmen Sie die Tabletten nach dem Essen ein.", "type": "Satz", "turkish": "Hapları yemekten sonra alın.", "english": "Take the pills after eating.", "example": "Sehr wichtig: Nehmen Sie die Tabletten nach dem Essen ein." },
    { "id": 142, "category": "Dialoge", "german": "Ich helfe Ihnen beim Waschen.", "type": "Satz", "turkish": "Yıkanmanıza yardım edeceğim.", "english": "I'll help you wash.", "example": "Guten Morgen, ich helfe Ihnen beim Waschen." },
    { "id": 143, "category": "Dialoge", "german": "Haben Sie Schluckbeschwerden?", "type": "Satz", "turkish": "Yutkunma zorluğu çekiyor musunuz?", "english": "Do you have difficulty swallowing?", "example": "Haben Sie beim Essen Schluckbeschwerden?" },
    { "id": 144, "category": "Dialoge", "german": "Können Sie Ihre Beine bewegen?", "type": "Satz", "turkish": "Bacaklarınızı hareket ettirebiliyor musunuz?", "english": "Can you move your legs?", "example": "Sagen Sie mir: Können Sie Ihre Beine bewegen?" },
    { "id": 145, "category": "Dialoge", "german": "Das ist nur ein kleiner Piks.", "type": "Satz", "turkish": "Bu sadece minicik bir iğne acısı.", "english": "It's just a little pinch.", "example": "Haben Sie keine Angst, das ist nur ein kleiner Piks." },
    { "id": 146, "category": "Dialoge", "german": "Ihre Werte sind stabil.", "type": "Satz", "turkish": "Değerleriniz normal.", "english": "Your vitals are stable.", "example": "Gute Nachrichten, Ihre Werte sind stabil." },
    { "id": 147, "category": "Dialoge", "german": "Sie können heute aufstehen.", "type": "Satz", "turkish": "Bugün ayağa kalkabilirsiniz.", "english": "You can get up today.", "example": "Der Arzt sagt: Sie können heute aufstehen." },
    { "id": 148, "category": "Dialoge", "german": "Die Besuchszeiten sind von 14:00 bis 20:00 Uhr.", "type": "Satz", "turkish": "Ziyaret saatleri 14:00 ile 20:00 arasındadır.", "english": "Visiting hours are from 2pm to 8pm.", "example": "Sagen Sie Ihren Verwandten: Die Besuchszeiten sind von 14:00 bis 20:00 Uhr." },
    { "id": 149, "category": "Dialoge", "german": "Ich hole die Bettpfanne.", "type": "Satz", "turkish": "Sürgüyü getiriyorum.", "english": "I'll get the bedpan.", "example": "Einen Moment, ich hole die Bettpfanne." },
    { "id": 150, "category": "Dialoge", "german": "Wir machen jetzt Übergabe.", "type": "Satz", "turkish": "Şimdi nöbet teslimi yapıyoruz.", "english": "We are doing the handover now.", "example": "Die Schicht ist zu Ende, wir machen jetzt Übergabe." },

    // --- NEUE HEMŞİRELİK KELİMELERİ (151-165) ---
    { "id": 151, "category": "Allgemein", "german": "Fachabteilung", "type": "Nomen", "turkish": "Uzmanlık alanı / Bölüm", "english": "Specialized department", "example": "In welche Fachabteilung wird der Patient verlegt?" },
    { "id": 152, "category": "Ausrüstung", "german": "Braunüle", "type": "Nomen", "turkish": "Branül / Damar yolu kanülü", "english": "IV cannula", "example": "Ich muss eine neue Braunüle legen." },
    { "id": 153, "category": "Aktion", "german": "Umlagern", "type": "Verb", "turkish": "Pozisyonunu değiştirmek", "english": "To reposition", "example": "Wir müssen den Patienten alle zwei Stunden umlagern." },
    { "id": 154, "category": "Symptome", "german": "Juckreiz", "type": "Nomen", "turkish": "Kaşıntı", "english": "Itching", "example": "Hat der Patient Juckreiz nach der Infusion?" },
    { "id": 155, "category": "Ausrüstung", "german": "Infusionspumpe / Perfusor", "type": "Nomen", "turkish": "İnfüzyon pompası", "english": "Syringe pump / IV pump", "example": "Der Perfusor gibt Alarm." },
    { "id": 156, "category": "Aktion", "german": "Überwachen", "type": "Verb", "turkish": "Gözlemlemek / Monitorize etmek", "english": "To monitor", "example": "Wir müssen die Vitalwerte kontinuierlich überwachen." },
    { "id": 157, "category": "Medikamente", "german": "Bedarfsmedikation", "type": "Nomen", "turkish": "Gerektiğinde kullanılan ilaç", "english": "PRN medication (as needed)", "example": "Hat der Patient eine Bedarfsmedikation gegen Schmerzen?" },
    { "id": 158, "category": "Notfall", "german": "Stabil", "type": "Adjektiv", "turkish": "Stabil / Durumu sabit", "english": "Stable", "example": "Der Zustand des Patienten ist jetzt stabil." },
    { "id": 159, "category": "Personal", "german": "Nachtschicht", "type": "Nomen", "turkish": "Gece vardiyası", "english": "Night shift", "example": "Wer hat heute Nachtschicht?" },
    { "id": 160, "category": "Ausrüstung", "german": "Patientenklingel", "type": "Nomen", "turkish": "Hasta çağrı zili", "english": "Patient bell / Call button", "example": "Der Patient drückt ständig die Klingel." },
    { "id": 161, "category": "Allgemein", "german": "Befund", "type": "Nomen", "turkish": "Bulgu / Sonuç", "english": "Medical report / Result", "example": "Der Laborbefund ist noch nicht da." },
    { "id": 162, "category": "Aktion", "german": "Dokumentieren", "type": "Verb", "turkish": "Kaydetmek / Dokümantasyon", "english": "To document", "example": "Bitte dokumentieren Sie den Vorfall im System." },
    { "id": 163, "category": "Symptome", "german": "Taubheitsgefühl", "type": "Nomen", "turkish": "Uyuşma hissi", "english": "Numbness", "example": "Haben Sie ein Taubheitsgefühl in den Fingern?" },
    { "id": 164, "category": "Ausrüstung", "german": "Magensonde", "type": "Nomen", "turkish": "Mide sondası", "english": "Gastric tube", "example": "Die Magensonde muss überprüft werden." },
    { "id": 165, "category": "Medikamente", "german": "Nüchtern", "type": "Adjektiv", "turkish": "Aç karnına", "english": "Fasting", "example": "Der Patient muss für die OP nüchtern bleiben." },

    // --- NEUE DIALOGE (166-185) ---
    { "id": 166, "category": "Dialoge", "german": "Auf einer Skala von 1 bis 10, wie stark sind Ihre Schmerzen?", "type": "Satz", "turkish": "1'den 10'a kadar bir skalada ağrınız ne kadar güçlü?", "english": "On a scale of 1 to 10, how severe is your pain?", "example": "Sagen Sie mir bitte: Auf einer Skala von 1 bis 10, wie stark sind Ihre Schmerzen?" },
    { "id": 167, "category": "Dialoge", "german": "Haben Sie heute schon Wasser gelassen?", "type": "Satz", "turkish": "Bugün idrarınızı yaptınız mı?", "english": "Have you passed urine today?", "example": "Das ist wichtig für die Kontrolle: Haben Sie heute schon Wasser gelassen?" },
    { "id": 168, "category": "Dialoge", "german": "Ich muss Ihnen Blut abnehmen.", "type": "Satz", "turkish": "Sizden kan almam gerekiyor.", "english": "I need to draw your blood.", "example": "Setzen Sie sich bitte hin, ich muss Ihnen Blut abnehmen." },
    { "id": 169, "category": "Dialoge", "german": "Darf ich Ihren Verband kontrollieren?", "type": "Satz", "turkish": "Pansumanınızı kontrol edebilir miyim?", "english": "May I check your bandage?", "example": "Guten Morgen, darf ich kurz Ihren Verband kontrollieren?" },
    { "id": 170, "category": "Dialoge", "german": "Sind Sie gegen irgendwelche Medikamente allergisch?", "type": "Satz", "turkish": "Herhangi bir ilaca karşı alerjiniz var mı?", "english": "Are you allergic to any medications?", "example": "Bevor wir anfangen: Sind Sie gegen irgendwelche Medikamente allergisch?" },
    { "id": 171, "category": "Dialoge", "german": "Bitte bleiben Sie im Bett liegen.", "type": "Satz", "turkish": "Lütfen yatakta kalın.", "english": "Please stay in bed.", "example": "Es ist zu gefährlich, bitte bleiben Sie im Bett liegen." },
    { "id": 172, "category": "Dialoge", "german": "Brauchen Sie Hilfe beim Gang zur Toilette?", "type": "Satz", "turkish": "Tuvalete giderken yardıma ihtiyacınız var mı?", "english": "Do you need help going to the toilet?", "example": "Klingeln Sie bitte, wenn Sie Hilfe beim Gang zur Toilette brauchen." },
    { "id": 173, "category": "Dialoge", "german": "Der Arzt wird Sie gleich untersuchen.", "type": "Satz", "turkish": "Doktor sizi birazdan muayene edecek.", "english": "The doctor will examine you shortly.", "example": "Haben Sie ein wenig Geduld, der Arzt wird Sie gleich untersuchen." },
    { "id": 174, "category": "Dialoge", "german": "Ich stelle Ihnen jetzt den Perfusor ein.", "type": "Satz", "turkish": "Şimdi infüzyon pompasını ayarlıyorum.", "english": "I'll set up the IV pump for you now.", "example": "Einen Moment bitte, ich stelle Ihnen jetzt den Perfusor ein." },
    { "id": 175, "category": "Dialoge", "german": "Wie war Ihre Nacht?", "type": "Satz", "turkish": "Geceniz nasıl geçti?", "english": "How was your night?", "example": "Guten Morgen Herr Müller, wie war Ihre Nacht?" },
    { "id": 176, "category": "Dialoge", "german": "Ich muss Ihren Blutzucker messen.", "type": "Satz", "turkish": "Kan şekerinizi ölçmem gerekiyor.", "english": "I need to measure your blood sugar.", "example": "Geben Sie mir bitte Ihren Finger, ich muss Ihren Blutzucker messen." },
    { "id": 177, "category": "Dialoge", "german": "Bitte atmen Sie tief ein und aus.", "type": "Satz", "turkish": "Lütfen derin nefes alın ve verin.", "english": "Please take a deep breath in and out.", "example": "Beim Abhören der Lunge: Bitte atmen Sie tief ein und aus." },
    { "id": 178, "category": "Dialoge", "german": "Ist der Schmerz stechend oder ziehend?", "type": "Satz", "turkish": "Ağrı saplanır gibi mi yoksa çekilir gibi mi?", "english": "Is the pain stabbing or pulling?", "example": "Beschreiben Sie den Schmerz: Ist er stechend oder ziehend?" },
    { "id": 179, "category": "Dialoge", "german": "Machen Sie sich keine Sorgen, alles wird gut.", "type": "Satz", "turkish": "Endişelenmeyin, her şey iyi olacak.", "english": "Don't worry, everything will be fine.", "example": "Wir sind bei Ihnen, machen Sie sich keine Sorgen." },
    { "id": 180, "category": "Dialoge", "german": "Haben Sie heute schon gefrühstückt?", "type": "Satz", "turkish": "Bugün kahvaltı yaptınız mı?", "english": "Have you had breakfast today?", "example": "Vor der Medikamentengabe: Haben Sie heute schon gefrühstückt?" },
    { "id": 181, "category": "Dialoge", "german": "Ich muss jetzt die Wunde reinigen.", "type": "Satz", "turkish": "Şimdi yarayı temizlemem gerekiyor.", "english": "I need to clean the wound now.", "example": "Halten Sie still, ich muss jetzt die Wunde reinigen." },
    { "id": 182, "category": "Dialoge", "german": "Wann treten die Schmerzen meistens auf?", "type": "Satz", "turkish": "Ağrılar çoğunlukla ne zaman ortaya çıkıyor?", "english": "When does the pain usually occur?", "example": "Morgens oder abends? Wann treten die Schmerzen auf?" },
    { "id": 183, "category": "Dialoge", "german": "Haben Sie Schwierigkeiten beim Atmen?", "type": "Satz", "turkish": "Nefes alırken zorluk çekiyor musunuz?", "english": "Do you have trouble breathing?", "example": "Sagen Sie mir: Haben Sie Schwierigkeiten beim Atmen?" },
    { "id": 184, "category": "Dialoge", "german": "Ich werde jetzt Ihre Vitalwerte kontrollieren.", "type": "Satz", "turkish": "Şimdi yaşam bulgularınızı kontrol edeceğim.", "english": "I will check your vitals now.", "example": "Einen Moment Geduld, ich werde Ihre Vitalwerte kontrollieren." },
    { "id": 185, "category": "Dialoge", "german": "Haben Sie jemanden, der Sie heute abholt?", "type": "Satz", "turkish": "Bugün sizi alacak birisi var mı?", "english": "Do you have someone to pick you up today?", "example": "Bei der Entlassung: Haben Sie jemanden, der Sie abholt?" },

    // --- YENİ ANATOMİ (İÇ ORGANLAR & SİSTEMLER) ---
    { "id": 186, "category": "Anatomie", "german": "Darm", "type": "Nomen", "turkish": "Bağırsak", "english": "Intestine / Bowel", "example": "Der Patient hat Probleme mit dem Darm." },
    { "id": 187, "category": "Anatomie", "german": "Bauchspeicheldrüse", "type": "Nomen", "turkish": "Pankreas", "english": "Pancreas", "example": "Die Bauchspeicheldrüse produziert Insulin." },
    { "id": 188, "category": "Anatomie", "german": "Gallenblase", "type": "Nomen", "turkish": "Safra kesesi", "english": "Gallbladder", "example": "Die Gallenblase wurde operativ entfernt." },
    { "id": 189, "category": "Anatomie", "german": "Schilddrüse", "type": "Nomen", "turkish": "Tiroid bezi", "english": "Thyroid gland", "example": "Ihre Schilddrüse funktioniert normal." },
    { "id": 190, "category": "Anatomie", "german": "Becken", "type": "Nomen", "turkish": "Leğen kemiği / Pelvis", "english": "Pelvis", "example": "Er hat eine Fraktur im Becken." },

    // --- YENİ HASTALIKLAR & SEMPTOMLAR ---
    { "id": 191, "category": "Krankheiten", "german": "Lungenentzündung", "type": "Nomen", "turkish": "Zatürre", "english": "Pneumonia", "example": "Verdacht auf eine schwere Lungenentzündung." },
    { "id": 192, "category": "Krankheiten", "german": "Thrombose", "type": "Nomen", "turkish": "Tromboz / Pıhtı", "english": "Thrombosis", "example": "Wir müssen eine Thrombose verhindern." },
    { "id": 193, "category": "Krankheiten", "german": "Herzinsuffizienz", "type": "Nomen", "turkish": "Kalp yetmezliği", "english": "Heart failure", "example": "Der Patient leidet an chronischer Herzinsuffizienz." },
    { "id": 194, "category": "Symptome", "german": "Schüttelfrost", "type": "Nomen", "turkish": "Titreme / Üşüme nöbeti", "english": "Chills", "example": "Haben Sie Fieber und Schüttelfrost?" },
    { "id": 195, "category": "Symptome", "german": "Herzrasen", "type": "Nomen", "turkish": "Çarpıntı", "english": "Palpitations / Tachycardia", "example": "Sie klagt über plötzliches Herzrasen." },
    { "id": 196, "category": "Symptome", "german": "Erschöpfung", "type": "Nomen", "turkish": "Tükenmişlik / Aşırı yorgunluk", "english": "Exhaustion", "example": "Chronische Erschöpfung ist ein Symptom." },

    // --- YENİ EYLEMLER (HEMŞİRELİK İŞLEMLERİ) ---
    { "id": 197, "category": "Aktion", "german": "Blut abnehmen", "type": "Verb", "turkish": "Kan almak", "english": "To draw blood", "example": "Ich werde Ihnen jetzt Blut abnehmen." },
    { "id": 198, "category": "Aktion", "german": "Beobachten", "type": "Verb", "turkish": "Gözlemlemek", "english": "To observe", "example": "Wir müssen den Patienten über Nacht beobachten." },
    { "id": 199, "category": "Aktion", "german": "Inhalieren", "type": "Verb", "turkish": "İnhale etmek / Buhar almak", "english": "To inhale", "example": "Der Patient muss dreimal täglich inhalieren." },
    { "id": 200, "category": "Aktion", "german": "Beruhigen", "type": "Verb", "turkish": "Sakinleştirmek / Teselli etmek", "english": "To calm down", "example": "Wir müssen den weinenden Patienten beruhigen." },

    // --- YENİ EKİPMANLAR & TERİMLER ---
    { "id": 201, "category": "Ausrüstung", "german": "Stauschlauch", "type": "Nomen", "turkish": "Turnike lastiği", "english": "Tourniquet", "example": "Ich lege jetzt den Stauschlauch an." },
    { "id": 202, "category": "Ausrüstung", "german": "Kompresse", "type": "Nomen", "turkish": "Kompres / Gazlı bez", "english": "Compress / Gauze", "example": "Geben Sie mir bitte eine sterile Kompresse." },
    { "id": 203, "category": "Ausrüstung", "german": "Trage", "type": "Nomen", "turkish": "Sedye", "english": "Stretcher", "example": "Legen Sie den Patienten auf die Trage." },
    { "id": 204, "category": "Ausrüstung", "german": "Rollator", "type": "Nomen", "turkish": "Yürüteç", "english": "Rollator / Walker", "example": "Bitte benutzen Sie Ihren Rollator." },
    { "id": 205, "category": "Allgemein", "german": "Patientenakte", "type": "Nomen", "turkish": "Hasta dosyası", "english": "Patient file", "example": "Die Befunde stehen in der Patientenakte." },
    { "id": 206, "category": "Allgemein", "german": "Entlassungsbrief", "type": "Nomen", "turkish": "Taburcu mektubu / Epikriz", "english": "Discharge letter", "example": "Ihr Entlassungsbrief ist fertig." },
    { "id": 207, "category": "Allgemein", "german": "Angehörige", "type": "Nomen", "turkish": "Hasta yakınları", "english": "Relatives / Family members", "example": "Die Angehörigen warten draußen." },
    { "id": 208, "category": "Allgemein", "german": "Dienstübergabe", "type": "Nomen", "turkish": "Nöbet teslimi", "english": "Shift handover", "example": "Wir sind gerade in der Dienstübergabe." }
];

// --- FAVORİ MANTIĞI (ORTAK KOD) ---
function toggleFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem('medVokabeln_favs')) || [];
    const index = favorites.indexOf(id);

    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }

    localStorage.setItem('medVokabeln_favs', JSON.stringify(favorites));
    
    if (typeof initAnatomy === 'function') initAnatomy();
}

function isFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem('medVokabeln_favs')) || [];
    return favorites.includes(id);
}
