const fullVocabulary = [
    // --- ALLGEMEIN (Genel Hastane - 15 Kelime) ---
    { id: 1, category: "Allgemein", german: "Krankenhaus", type: "Das Nomen", turkish: "Hastane", example: "Das Krankenhaus ist in der Nähe." },
    { id: 2, category: "Allgemein", german: "Notaufnahme", type: "Die Nomen", turkish: "Acil Servis", example: "Bringen Sie ihn sofort in die Notaufnahme!" },
    { id: 3, category: "Allgemein", german: "Station", type: "Die Nomen", turkish: "Servis / Bölüm", example: "Er liegt auf der kardiologischen Station." },
    { id: 4, category: "Allgemein", german: "Patient", type: "Der Nomen", turkish: "Hasta", example: "Der Patient schläft noch." },
    { id: 5, category: "Allgemein", german: "Arzt", type: "Der Nomen", turkish: "Doktor", example: "Der Arzt kommt gleich zur Visite." },
    { id: 6, category: "Allgemein", german: "Visite", type: "Die Nomen", turkish: "Doktor Viziti", example: "Die Visite beginnt um 8 Uhr." },
    { id: 7, category: "Allgemein", german: "Diagnose", type: "Die Nomen", turkish: "Teşhis", example: "Die Diagnose ist noch nicht sicher." },
    { id: 8, category: "Allgemein", german: "Rezept", type: "Das Nomen", turkish: "Reçete", example: "Ich schreibe Ihnen ein Rezept auf." },
    { id: 9, category: "Allgemein", german: "Behandlung", type: "Die Nomen", turkish: "Tedavi", example: "Die Behandlung dauert zwei Wochen." },
    { id: 10, category: "Allgemein", german: "Untersuchung", type: "Die Nomen", turkish: "Muayene", example: "Die Untersuchung war schmerzlos." },
    { id: 11, category: "Allgemein", german: "Überweisung", type: "Die Nomen", turkish: "Sevk", example: "Sie brauchen eine Überweisung." },
    { id: 12, category: "Allgemein", german: "Entlassung", type: "Die Nomen", turkish: "Taburcu olma", example: "Die Entlassung ist für morgen geplant." },
    { id: 13, category: "Allgemein", german: "Aufnahme", type: "Die Nomen", turkish: "Kayıt / Kabul", example: "Bitte gehen Sie zuerst zur Aufnahme." },
    { id: 14, category: "Allgemein", german: "Labor", type: "Das Nomen", turkish: "Laboratuvar", example: "Die Proben sind bereits im Labor." },
    { id: 15, category: "Allgemein", german: "Apotheke", type: "Die Nomen", turkish: "Eczane", example: "Holen Sie das Medikament in der Apotheke." },

    // --- ANATOMIE (Anatomi - 20 Kelime) ---
    { id: 16, category: "Anatomie", german: "Herz", type: "Das Nomen", turkish: "Kalp", example: "Das Herz schlägt schnell." },
    { id: 17, category: "Anatomie", german: "Lunge", type: "Die Nomen", turkish: "Akciğer", example: "Atmen Sie tief in die Lunge ein." },
    { id: 18, category: "Anatomie", german: "Gehirn", type: "Das Nomen", turkish: "Beyin", example: "Das Gehirn ist sehr komplex." },
    { id: 19, category: "Anatomie", german: "Magen", type: "Der Nomen", turkish: "Mide", example: "Ich habe Schmerzen im Magen." },
    { id: 20, category: "Anatomie", german: "Leber", type: "Die Nomen", turkish: "Karaciğer", example: "Alkohol schadet der Leber." },
    { id: 21, category: "Anatomie", german: "Niere", type: "Die Nomen", turkish: "Böbrek", example: "Der Patient hat Nierenschmerzen." },
    { id: 22, category: "Anatomie", german: "Blut", type: "Das Nomen", turkish: "Kan", example: "Wir brauchen eine Blutprobe." },
    { id: 23, category: "Anatomie", german: "Knochen", type: "Der Nomen", turkish: "Kemik", example: "Der Knochen ist gebrochen." },
    { id: 24, category: "Anatomie", german: "Haut", type: "Die Nomen", turkish: "Cilt", example: "Die Haut ist gerötet." },
    { id: 25, category: "Anatomie", german: "Ader", type: "Die Nomen", turkish: "Damar", example: "Ich finde keine gute Ader." },
    { id: 26, category: "Anatomie", german: "Wirbelsäule", type: "Die Nomen", turkish: "Omurga", example: "Er hat Probleme mit der Wirbelsäule." },
    { id: 27, category: "Anatomie", german: "Gelenk", type: "Das Nomen", turkish: "Eklem", example: "Das Kniegelenk ist geschwollen." },
    { id: 28, category: "Anatomie", german: "Muskel", type: "Der Nomen", turkish: "Kas", example: "Ich habe einen Muskelkater." },
    { id: 29, category: "Anatomie", german: "Nerv", type: "Der Nomen", turkish: "Sinir", example: "Ein Nerv ist eingeklemmt." },
    { id: 30, category: "Anatomie", german: "Bauch", type: "Der Nomen", turkish: "Karın", example: "Der Bauch ist hart." },
    { id: 31, category: "Anatomie", german: "Hals", type: "Der Nomen", turkish: "Boyun / Boğaz", example: "Ich habe Halsschmerzen." },
    { id: 32, category: "Anatomie", german: "Rücken", type: "Der Nomen", turkish: "Sırt", example: "Mein Rücken tut weh." },
    { id: 33, category: "Anatomie", german: "Darm", type: "Der Nomen", turkish: "Bağırsak", example: "Der Darm muss gereinigt werden." },
    { id: 34, category: "Anatomie", german: "Blase", type: "Die Nomen", turkish: "Mesane / İdrar Kesesi", example: "Die Blase ist voll." },
    { id: 35, category: "Anatomie", german: "Auge", type: "Das Nomen", turkish: "Göz", example: "Das linke Auge tränt." },

    // --- AKTION (Eylemler - 15 Kelime) ---
    { id: 36, category: "Aktion", german: "Messen", type: "Das Verb", turkish: "Ölçmek", example: "Ich messe jetzt das Fieber." },
    { id: 37, category: "Aktion", german: "Spritzen", type: "Das Verb", turkish: "İğne yapmak", example: "Soll ich das Insulin spritzen?" },
    { id: 38, category: "Aktion", german: "Verbinden", type: "Das Verb", turkish: "Sarmak / Pansuman", example: "Ich muss die Wunde neu verbinden." },
    { id: 39, category: "Aktion", german: "Waschen", type: "Das Verb", turkish: "Yıkamak", example: "Soll ich Ihnen beim Waschen helfen?" },
    { id: 40, category: "Aktion", german: "Füttern", type: "Das Verb", turkish: "Beslemek", example: "Ich muss den Patienten füttern." },
    { id: 41, category: "Aktion", german: "Lagerung", type: "Die Nomen", turkish: "Pozisyon verme", example: "Wir müssen eine 30-Grad-Lagerung machen." },
    { id: 42, category: "Aktion", german: "Mobilisieren", type: "Das Verb", turkish: "Hareket ettirmek", example: "Wir wollen den Patienten heute mobilisieren." },
    { id: 43, category: "Aktion", german: "Dokumentieren", type: "Das Verb", turkish: "Kaydetmek", example: "Ich muss die Werte dokumentieren." },
    { id: 44, category: "Aktion", german: "Desinfizieren", type: "Das Verb", turkish: "Dezenfekte etmek", example: "Bitte die Hände desinfizieren." },
    { id: 45, category: "Aktion", german: "Absaugen", type: "Das Verb", turkish: "Aspire etmek", example: "Ich muss den Schleim absaugen." },
    { id: 46, category: "Aktion", german: "Inhalieren", type: "Das Verb", turkish: "Buhar vermek / Solumak", example: "Der Patient muss dreimal täglich inhalieren." },
    { id: 47, category: "Aktion", german: "Vorbereiten", type: "Das Verb", turkish: "Hazırlamak", example: "Ich bereite die OP vor." },
    { id: 48, category: "Aktion", german: "Beruhigen", type: "Das Verb", turkish: "Sakinleştirmek", example: "Versuchen Sie, den Patienten zu beruhigen." },
    { id: 49, category: "Aktion", german: "Beobachten", type: "Das Verb", turkish: "Gözlemlemek", example: "Wir müssen die Atmung beobachten." },
    { id: 50, category: "Aktion", german: "Begleiten", type: "Das Verb", turkish: "Eşlik etmek", example: "Ich begleite Sie zur Toilette." },

    // --- SYMPTOME (Belirtiler - 15 Kelime) ---
    { id: 51, category: "Symptome", german: "Schmerz", type: "Der Nomen", turkish: "Ağrı", example: "Wo genau haben Sie Schmerzen?" },
    { id: 52, category: "Symptome", german: "Fieber", type: "Das Nomen", turkish: "Ateş", example: "Das Fieber sinkt langsam." },
    { id: 53, category: "Symptome", german: "Husten", type: "Der Nomen", turkish: "Öksürük", example: "Haben Sie trockenen Husten?" },
    { id: 54, category: "Symptome", german: "Übelkeit", type: "Die Nomen", turkish: "Bulantı", example: "Ist Ihnen übel?" },
    { id: 55, category: "Symptome", german: "Schwindel", type: "Der Nomen", turkish: "Baş dönmesi", example: "Ich habe Schwindelgefühle." },
    { id: 56, category: "Symptome", german: "Atemnot", type: "Die Nomen", turkish: "Nefes darlığı", example: "Haben Sie Atemnot beim Gehen?" },
    { id: 57, category: "Symptome", german: "Erbrechen", type: "Das Nomen", turkish: "Kusma", example: "Der Patient leidet unter Erbrechen." },
    { id: 58, category: "Symptome", german: "Durchfall", type: "Der Nomen", turkish: "İshal", example: "Seit wann haben Sie Durchfall?" },
    { id: 59, category: "Symptome", german: "Verstopfung", type: "Die Nomen", turkish: "Kabızlık", example: "Leiden Sie unter Verstopfung?" },
    { id: 60, category: "Symptome", german: "Blutung", type: "Die Nomen", turkish: "Kanama", example: "Die Blutung ist gestoppt." },
    { id: 61, category: "Symptome", german: "Schwellung", type: "Die Nomen", turkish: "Şişlik", example: "Ist die Schwellung neu?" },
    { id: 62, category: "Symptome", german: "Juckreiz", type: "Der Nomen", turkish: "Kaşıntı", example: "Haben Sie Juckreiz am Rücken?" },
    { id: 63, category: "Symptome", german: "Krampf", type: "Der Nomen", turkish: "Kramp", example: "Ich habe einen Wadenkrampf." },
    { id: 64, category: "Symptome", german: "Zittern", type: "Das Nomen", turkish: "Titreme", example: "Warum zittern Sie so?" },
    { id: 65, category: "Symptome", german: "Taubheitsgefühl", type: "Das Nomen", turkish: "Uyuşma", example: "Haben Sie ein Taubheitsgefühl im Arm?" },

    // --- AUSRÜSTUNG (Ekipman - 15 Kelime) ---
    { id: 66, category: "Ausrüstung", german: "Blutdruckmessgerät", type: "Das Nomen", turkish: "Tansiyon aleti", example: "Das Blutdruckmessgerät ist kaputt." },
    { id: 67, category: "Ausrüstung", german: "Stethoskop", type: "Das Nomen", turkish: "Stetoskop", example: "Ich brauche ein Stethoskop." },
    { id: 68, category: "Ausrüstung", german: "Spritze", type: "Die Nomen", turkish: "Şırınga", example: "Geben Sie mir eine 5ml Spritze." },
    { id: 69, category: "Ausrüstung", german: "Rollstuhl", type: "Der Nomen", turkish: "Tekerlekli sandalye", example: "Holen Sie bitte einen Rollstuhl." },
    { id: 70, category: "Ausrüstung", german: "Gehstützen", type: "Die Nomen (Pl)", turkish: "Koltuk değneği", example: "Er braucht Gehstützen." },
    { id: 71, category: "Ausrüstung", german: "Infusionsständer", type: "Der Nomen", turkish: "Serum askısı", example: "Der Infusionsständer wackelt." },
    { id: 72, category: "Ausrüstung", german: "Thermometer", type: "Das Nomen", turkish: "Ateşölçer", example: "Haben Sie ein Thermometer?" },
    { id: 73, category: "Ausrüstung", german: "Verband", type: "Der Nomen", turkish: "Sargı", example: "Der Verband ist nass." },
    { id: 74, category: "Ausrüstung", german: "Handschuhe", type: "Die Nomen (Pl)", turkish: "Eldiven", example: "Ich trage Einmalhandschuhe." },
    { id: 75, category: "Ausrüstung", german: "Pflaster", type: "Das Nomen", turkish: "Yara bandı", example: "Ein kleines Pflaster reicht." },
    { id: 76, category: "Ausrüstung", german: "Bettpfanne", type: "Die Nomen", turkish: "Sürgü / Ördek", example: "Der Patient braucht die Bettpfanne." },
    { id: 77, category: "Ausrüstung", german: "Katheter", type: "Der Nomen", turkish: "Kateter", example: "Der Katheter muss geleert werden." },
    { id: 78, category: "Ausrüstung", german: "EKG-Gerät", type: "Das Nomen", turkish: "EKG cihazı", example: "Schließen Sie das EKG-Gerät an." },
    { id: 79, category: "Ausrüstung", german: "Absauggerät", type: "Das Nomen", turkish: "Aspirasyon cihazı", example: "Das Absauggerät ist bereit." },
    { id: 80, category: "Ausrüstung", german: "Rollator", type: "Der Nomen", turkish: "Yürüteç", example: "Nutzen Sie bitte Ihren Rollator." },

    // --- PERSONAL (Personel - 10 Kelime) ---
    { id: 81, category: "Personal", german: "Pflegefachkraft", type: "Die Nomen", turkish: "Hemşire / Bakım personeli", example: "Ich bin Ihre Pflegefachkraft heute." },
    { id: 82, category: "Personal", german: "Oberarzt", type: "Der Nomen", turkish: "Uzman doktor", example: "Der Oberarzt macht heute Dienst." },
    { id: 83, category: "Personal", german: "Chefarzt", type: "Der Nomen", turkish: "Başhekim", example: "Der Chefarzt ist im Urlaub." },
    { id: 84, category: "Personal", german: "Stationsleitung", type: "Die Nomen", turkish: "Servis sorumlusu", example: "Sprechen Sie mit der Stationsleitung." },
    { id: 85, category: "Personal", german: "Physiotherapeut", type: "Der Nomen", turkish: "Fizyoterapist", example: "Der Physiotherapeut kommt um 10." },
    { id: 86, category: "Personal", german: "Logopäde", type: "Der Nomen", turkish: "Konuşma terapisti", example: "Der Logopäde hilft beim Schlucken." },
    { id: 87, category: "Personal", german: "Hebamme", type: "Die Nomen", turkish: "Ebe", example: "Die Hebamme ist im Kreißsaal." },
    { id: 88, category: "Personal", german: "Auszubildende", type: "Der/Die Nomen", turkish: "Stajyer", example: "Unsere Auszubildende hilft Ihnen." },
    { id: 89, category: "Personal", german: "Reinigungskraft", type: "Die Nomen", turkish: "Temizlik görevlisi", example: "Die Reinigungskraft kommt gleich." },
    { id: 90, category: "Personal", german: "Seelsorger", type: "Der Nomen", turkish: "Manevi destek görevlisi", example: "Möchten Sie mit einem Seelsorger sprechen?" },

    // --- DIALOGE (Senaryolar - 15 Cümle) ---
    { id: 91, category: "Dialoge", german: "Wie geht es Ihnen?", type: "Satz", turkish: "Nasılsınız?", example: "Guten Morgen, wie geht es Ihnen?" },
    { id: 92, category: "Dialoge", german: "Haben Sie Schmerzen?", type: "Satz", turkish: "Ağrınız var mı?", example: "Sagen Sie mir, haben Sie Schmerzen?" },
    { id: 93, category: "Dialoge", german: "Ich bringe Ihnen die Medikamente.", type: "Satz", turkish: "Size ilaçları getiriyorum.", example: "Hier sind Ihre Tabletten." },
    { id: 94, category: "Dialoge", german: "Können Sie mich verstehen?", type: "Satz", turkish: "Beni anlayabiliyor musunuz?", example: "Hallo, können Sie mich verstehen?" },
    { id: 95, category: "Dialoge", german: "Drücken Sie die Klingel.", type: "Satz", turkish: "Zile basın.", example: "Wenn etwas ist, drücken Sie die Klingel." },
    { id: 96, category: "Dialoge", german: "Haben Sie gut geschlafen?", type: "Satz", turkish: "İyi uyudunuz mu?", example: "Guten Tag, haben Sie gut geschlafen?" },
    { id: 97, category: "Dialoge", german: "Ich helfe Ihnen beim Aufstehen.", type: "Satz", turkish: "Ayağa kalkmanıza yardım edeyim.", example: "Ganz vorsichtig, ich helfe Ihnen." },
    { id: 98, category: "Dialoge", german: "Möchten Sie etwas trinken?", type: "Satz", turkish: "Bir şey içmek ister misiniz?", example: "Hier ist Wasser, möchten Sie etwas trinken?" },
    { id: 99, category: "Dialoge", german: "Ich messe jetzt Ihren Blutdruck.", type: "Satz", turkish: "Şimdi tansiyonunuzu ölçeceğim.", example: "Halten Sie den Arm ruhig." },
    { id: 100, category: "Dialoge", german: "Warten Sie einen Moment.", type: "Satz", turkish: "Bir dakika bekleyin.", example: "Ich bin gleich wieder da." },
    { id: 101, category: "Dialoge", german: "Der Arzt kommt gleich.", type: "Satz", turkish: "Doktor birazdan gelecek.", example: "Bitte gedulden Sie sich kurz." },
    { id: 102, category: "Dialoge", german: "Haben Sie Allergien?", type: "Satz", turkish: "Alerjiniz var mı?", example: "Haben Sie Allergien gegen Penicillin?" },
    { id: 103, category: "Dialoge", german: "Gute Besserung!", type: "Satz", turkish: "Geçmiş olsun!", example: "Auf Wiedersehen und gute Besserung!" },
    { id: 104, category: "Dialoge", german: "Soll ich das Fenster schließen?", type: "Satz", turkish: "Pencereyi kapatayım mı?", example: "Ist es Ihnen zu kalt?" },
    { id: 105, category: "Dialoge", german: "Was kann ich für Sie tun?", type: "Satz", turkish: "Sizin için ne yapabilirim?", example: "Brauchen Sie noch etwas?" }
];

let currentCards = [...fullVocabulary]; 
let currentIndex = 0;
let learnedIds = JSON.parse(localStorage.getItem('medVokabeln_learned')) || [];
let currentQuizCorrectWord = null; 

window.onload = () => { 
    initTheme(); 
    updateCard(); 
    displayStreak(); 
};

function initTheme() {
    const savedTheme = localStorage.getItem('medVokabeln_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').innerText = '☀️';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('themeToggle').innerText = isDark ? '☀️' : '🌙';
    localStorage.setItem('medVokabeln_theme', isDark ? 'dark' : 'light');
}

function searchWord() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const selectedCategory = document.getElementById("categorySelect").value;
    let basePool = selectedCategory === "Alle" ? fullVocabulary : fullVocabulary.filter(w => w.category === selectedCategory);
    
    if (query === "") {
        currentCards = basePool;
    } else {
        currentCards = basePool.filter(word => 
            word.german.toLowerCase().includes(query) || 
            word.turkish.toLowerCase().includes(query)
        );
    }
    currentIndex = 0;
    if(currentCards.length === 0) {
        document.getElementById("germanWord").innerText = "Bulunamadı 😔";
        document.getElementById("turkishWord").innerText = "Sonuç yok.";
        document.getElementById("wordType").innerText = "...";
        document.getElementById("exampleSentence").innerText = "...";
        document.getElementById("frontBadge").style.display = "none";
        document.getElementById("backBadge").style.display = "none";
        document.getElementById("progressText").innerText = "0 / 0";
    } else {
        document.getElementById("myCard").classList.remove("is-flipped");
        updateCard();
    }
}

function displayStreak() {
    let streakCount = parseInt(localStorage.getItem('medVokabeln_streak')) || 0;
    document.getElementById('streakText').innerText = `🔥 ${streakCount}`;
}

function checkAndUpdateStreak() {
    let streakCount = parseInt(localStorage.getItem('medVokabeln_streak')) || 0;
    let lastActiveDate = localStorage.getItem('medVokabeln_lastActive') || "";
    const today = new Date().toISOString().split('T')[0];
    if (lastActiveDate === today) return; 
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toISOString().split('T')[0];
    if (lastActiveDate === yesterday) { streakCount++; } 
    else { streakCount = 1; }
    localStorage.setItem('medVokabeln_streak', streakCount);
    localStorage.setItem('medVokabeln_lastActive', today);
    displayStreak();
}

function speakWord(event) {
    event.stopPropagation(); 
    if(currentCards.length === 0) return; 
    const wordToSpeak = currentCards[currentIndex].german;
    const utterance = new SpeechSynthesisUtterance(wordToSpeak);
    utterance.lang = 'de-DE'; 
    utterance.rate = 0.9; 
    window.speechSynthesis.speak(utterance);
}

function switchMode(mode) {
    const flashcardSec = document.getElementById("flashcardSection");
    const quizSec = document.getElementById("quizSection");
    const btnFlashcard = document.getElementById("btnFlashcard");
    const btnQuiz = document.getElementById("btnQuiz");
    if(mode === 'flashcard') {
        flashcardSec.style.display = "flex"; quizSec.style.display = "none";
        btnFlashcard.classList.add("active"); btnQuiz.classList.remove("active");
        updateCard();
    } else {
        flashcardSec.style.display = "none"; quizSec.style.display = "flex";
        btnQuiz.classList.add("active"); btnFlashcard.classList.remove("active");
        generateQuizQuestion(); 
    }
}

function changeCategory() {
    document.getElementById("searchInput").value = ""; 
    const selectedCategory = document.getElementById("categorySelect").value;
    if (selectedCategory === "Alle") { currentCards = [...fullVocabulary]; } 
    else { currentCards = fullVocabulary.filter(word => word.category === selectedCategory); }
    currentIndex = 0; 
    document.getElementById("myCard").classList.remove("is-flipped");
    setTimeout(updateCard, 200);
    if(document.getElementById("quizSection").style.display === "flex") { generateQuizQuestion(); }
}

function flipCard() { 
    if(currentCards.length === 0) return; 
    document.getElementById("myCard").classList.toggle("is-flipped"); 
}
function nextWord() { 
    if(currentCards.length === 0) return;
    currentIndex++; if (currentIndex >= currentCards.length) currentIndex = 0; updateCard(); 
}
function prevWord() { 
    if(currentCards.length === 0) return;
    currentIndex--; if (currentIndex < 0) currentIndex = currentCards.length - 1; updateCard(); 
}

function updateCard() {
    if(currentCards.length === 0) return; 
    document.getElementById("myCard").classList.remove("is-flipped");
    setTimeout(() => {
        const currentWord = currentCards[currentIndex];
        document.getElementById("germanWord").innerText = currentWord.german;
        document.getElementById("wordType").innerText = currentWord.type;
        document.getElementById("turkishWord").innerText = currentWord.turkish;
        document.getElementById("exampleSentence").innerText = currentWord.example;
        checkLearnedStatus(currentWord.id);
    }, 200);
}

function checkLearnedStatus(wordId) {
    const isLearned = learnedIds.includes(wordId);
    const learnBtn = document.getElementById("learnBtn");
    const frontBadge = document.getElementById("frontBadge");
    const backBadge = document.getElementById("backBadge");
    if (isLearned) {
        learnBtn.innerText = "❌ Öğrenmedim (Geri Al)"; learnBtn.classList.add("active");
        frontBadge.style.display = "block"; backBadge.style.display = "block";
    } else {
        learnBtn.innerText = "✅ Öğrendim"; learnBtn.classList.remove("active");
        frontBadge.style.display = "none"; backBadge.style.display = "none";
    }
    const learnedInCurrentView = currentCards.filter(card => learnedIds.includes(card.id)).length;
    document.getElementById("progressText").innerText = `${learnedInCurrentView} / ${currentCards.length} Öğrenildi`;
}

function toggleLearned() {
    if(currentCards.length === 0) return;
    const currentWordId = currentCards[currentIndex].id;
    if (learnedIds.includes(currentWordId)) { learnedIds = learnedIds.filter(id => id !== currentWordId); } 
    else { learnedIds.push(currentWordId); checkAndUpdateStreak(); }
    localStorage.setItem('medVokabeln_learned', JSON.stringify(learnedIds));
    checkLearnedStatus(currentWordId);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateQuizQuestion() {
    document.getElementById("quizFeedback").innerText = "";
    document.getElementById("nextQuizBtn").style.display = "none";
    if(currentCards.length === 0) return;
    currentQuizCorrectWord = currentCards[Math.floor(Math.random() * currentCards.length)];
    document.getElementById("quizWord").innerText = currentQuizCorrectWord.german;
    let distractors = fullVocabulary.filter(word => word.id !== currentQuizCorrectWord.id);
    distractors = shuffleArray(distractors).slice(0, 3); 
    let options = shuffleArray([currentQuizCorrectWord, ...distractors]);
    const optionsContainer = document.getElementById("quizOptionsContainer");
    optionsContainer.innerHTML = ""; 
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "quiz-option";
        btn.innerText = option.turkish;
        btn.onclick = () => checkAnswer(btn, option.id, currentQuizCorrectWord.id);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(clickedButton, selectedId, correctId) {
    const allButtons = document.querySelectorAll(".quiz-option");
    allButtons.forEach(btn => btn.disabled = true);
    const feedbackEl = document.getElementById("quizFeedback");
    if (selectedId === correctId) {
        clickedButton.classList.add("correct");
        feedbackEl.innerText = "Richtig! 🎉"; feedbackEl.style.color = "var(--success)";
        checkAndUpdateStreak();
    } else {
        clickedButton.classList.add("wrong");
        feedbackEl.innerText = "Falsch! ❌"; feedbackEl.style.color = "var(--danger)";
        allButtons.forEach(btn => { if(btn.innerText === currentQuizCorrectWord.turkish) btn.classList.add("correct"); });
    }
    document.getElementById("nextQuizBtn").style.display = "block";
}
