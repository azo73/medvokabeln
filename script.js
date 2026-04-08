// --- DEV VERİTABANI (75 KELİME VE DİYALOG) ---
const fullVocabulary = [
    // Allgemein (Genel Hastane)
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
    { id: 11, category: "Allgemein", german: "Überweisung", type: "Die Nomen", turkish: "Sevk", example: "Sie brauchen eine Überweisung zum Facharzt." },
    { id: 12, category: "Allgemein", german: "Entlassung", type: "Die Nomen", turkish: "Taburcu olma", example: "Die Entlassung ist für morgen geplant." },

    // Anatomie (Anatomi)
    { id: 13, category: "Anatomie", german: "Herz", type: "Das Nomen", turkish: "Kalp", example: "Das Herz schlägt schnell." },
    { id: 14, category: "Anatomie", german: "Lunge", type: "Die Nomen", turkish: "Akciğer", example: "Atmen Sie tief in die Lunge ein." },
    { id: 15, category: "Anatomie", german: "Gehirn", type: "Das Nomen", turkish: "Beyin", example: "Das Gehirn ist ein komplexes Organ." },
    { id: 16, category: "Anatomie", german: "Magen", type: "Der Nomen", turkish: "Mide", example: "Ich habe Schmerzen im Magen." },
    { id: 17, category: "Anatomie", german: "Leber", type: "Die Nomen", turkish: "Karaciğer", example: "Alkohol ist schlecht für die Leber." },
    { id: 18, category: "Anatomie", german: "Niere", type: "Die Nomen", turkish: "Böbrek", example: "Er hat Probleme mit der rechten Niere." },
    { id: 19, category: "Anatomie", german: "Blut", type: "Das Nomen", turkish: "Kan", example: "Wir müssen Ihr Blut untersuchen." },
    { id: 20, category: "Anatomie", german: "Knochen", type: "Der Nomen", turkish: "Kemik", example: "Der Knochen ist gebrochen." },
    { id: 21, category: "Anatomie", german: "Haut", type: "Die Nomen", turkish: "Cilt / Deri", example: "Ihre Haut ist sehr trocken." },
    { id: 22, category: "Anatomie", german: "Bauch", type: "Der Nomen", turkish: "Karın", example: "Der Patient hat Bauchschmerzen." },
    { id: 23, category: "Anatomie", german: "Ader / Vene", type: "Die Nomen", turkish: "Damar", example: "Ich kann die Vene gut sehen." },

    // Aktion (Fiiller / Eylemler)
    { id: 24, category: "Aktion", german: "Blut abnehmen", type: "Das Verb", turkish: "Kan almak", example: "Ich werde Ihnen jetzt etwas Blut abnehmen." },
    { id: 25, category: "Aktion", german: "Verbinden", type: "Das Verb", turkish: "Sarmak / Bandajlamak", example: "Ich muss die Wunde verbinden." },
    { id: 26, category: "Aktion", german: "Messen", type: "Das Verb", turkish: "Ölçmek", example: "Wir müssen den Blutdruck messen." },
    { id: 27, category: "Aktion", german: "Spritzen", type: "Das Verb", turkish: "İğne yapmak", example: "Ich werde Ihnen ein Schmerzmittel spritzen." },
    { id: 28, category: "Aktion", german: "Operieren", type: "Das Verb", turkish: "Ameliyat etmek", example: "Er muss morgen operiert werden." },
    { id: 29, category: "Aktion", german: "Pflegen", type: "Das Verb", turkish: "Bakım yapmak", example: "Wir pflegen den Patienten nach der OP." },
    { id: 30, category: "Aktion", german: "Einatmen", type: "Das Verb", turkish: "Nefes almak", example: "Bitte tief einatmen." },
    { id: 31, category: "Aktion", german: "Ausatmen", type: "Das Verb", turkish: "Nefes vermek", example: "Und jetzt langsam ausatmen." },
    { id: 32, category: "Aktion", german: "Verschreiben", type: "Das Verb", turkish: "Reçete yazmak", example: "Der Arzt wird Ihnen Medikamente verschreiben." },
    { id: 33, category: "Aktion", german: "Wiegen", type: "Das Verb", turkish: "Tartmak", example: "Wir müssen den Patienten wiegen." },
    { id: 34, category: "Aktion", german: "Desinfizieren", type: "Das Verb", turkish: "Dezenfekte etmek", example: "Ich muss zuerst die Haut desinfizieren." },

    // Symptome (Belirtiler)
    { id: 35, category: "Symptome", german: "Schmerz", type: "Der Nomen", turkish: "Ağrı / Sızı", example: "Haben Sie starke Schmerzen?" },
    { id: 36, category: "Symptome", german: "Fieber", type: "Das Nomen", turkish: "Ateş", example: "Der Patient hat hohes Fieber." },
    { id: 37, category: "Symptome", german: "Husten", type: "Der Nomen", turkish: "Öksürük", example: "Der Husten ist nachts schlimmer." },
    { id: 38, category: "Symptome", german: "Übelkeit", type: "Die Nomen", turkish: "Mide Bulantısı", example: "Haben Sie Übelkeit nach dem Essen?" },
    { id: 39, category: "Symptome", german: "Schwindel", type: "Der Nomen", turkish: "Baş dönmesi", example: "Mir ist plötzlich schwindelig geworden." },
    { id: 40, category: "Symptome", german: "Durchfall", type: "Der Nomen", turkish: "İshal", example: "Er hat seit zwei Tagen Durchfall." },
    { id: 41, category: "Symptome", german: "Erbrechen", type: "Das Nomen", turkish: "Kusma", example: "Das Erbrechen hat aufgehört." },
    { id: 42, category: "Symptome", german: "Atemnot", type: "Die Nomen", turkish: "Nefes darlığı", example: "Der Patient klagt über Atemnot." },
    { id: 43, category: "Symptome", german: "Blutung", type: "Die Nomen", turkish: "Kanama", example: "Wir müssen die Blutung sofort stoppen." },
    { id: 44, category: "Symptome", german: "Schwellung", type: "Die Nomen", turkish: "Şişlik", example: "Die Schwellung am Bein ist zurückgegangen." },
    { id: 45, category: "Symptome", german: "Schüttelfrost", type: "Der Nomen", turkish: "Titreme / Üşüme", example: "Hatten Sie in der Nacht Schüttelfrost?" },
    { id: 46, category: "Symptome", german: "Verstopfung", type: "Die Nomen", turkish: "Kabızlık", example: "Gegen die Verstopfung bekommen Sie ein Mittel." },

    // Ausrüstung (Ekipman)
    { id: 47, category: "Ausrüstung", german: "Blutdruckmessgerät", type: "Das Nomen", turkish: "Tansiyon Aleti", example: "Ich brauche das Blutdruckmessgerät." },
    { id: 48, category: "Ausrüstung", german: "Spritze", type: "Die Nomen", turkish: "Şırınga", example: "Wir brauchen eine neue Spritze." },
    { id: 49, category: "Ausrüstung", german: "Rollstuhl", type: "Der Nomen", turkish: "Tekerlekli Sandalye", example: "Bitte bringen Sie einen Rollstuhl." },
    { id: 50, category: "Ausrüstung", german: "Verband", type: "Der Nomen", turkish: "Sargı Bezi", example: "Der Verband muss gewechselt werden." },
    { id: 51, category: "Ausrüstung", german: "Thermometer", type: "Das Nomen", turkish: "Ateşölçer", example: "Wo ist das Thermometer?" },
    { id: 52, category: "Ausrüstung", german: "Stethoskop", type: "Das Nomen", turkish: "Stetoskop", example: "Der Arzt hat sein Stethoskop vergessen." },
    { id: 53, category: "Ausrüstung", german: "Infusion", type: "Die Nomen", turkish: "Serum / İnfüzyon", example: "Die Infusion läuft langsam." },
    { id: 54, category: "Ausrüstung", german: "Handschuhe", type: "Die Nomen (Pl)", turkish: "Eldiven", example: "Ziehen Sie bitte sterile Handschuhe an." },
    { id: 55, category: "Ausrüstung", german: "Pflaster", type: "Das Nomen", turkish: "Yara Bandı", example: "Wir kleben ein kleines Pflaster auf die Stelle." },
    { id: 56, category: "Ausrüstung", german: "Krücken", type: "Die Nomen (Pl)", turkish: "Koltuk Değneği", example: "Sie müssen sechs Wochen mit Krücken laufen." },
    { id: 57, category: "Ausrüstung", german: "Defibrillator", type: "Der Nomen", turkish: "Defibrilatör", example: "Holen Sie sofort den Defibrillator!" },

    // Personal (Personel)
    { id: 58, category: "Personal", german: "Pflegefachkraft", type: "Die Nomen", turkish: "Hemşire", example: "Die Pflegefachkraft kommt sofort." },
    { id: 59, category: "Personal", german: "Chefarzt", type: "Der Nomen", turkish: "Başhekim", example: "Der Chefarzt operiert heute selbst." },
    { id: 60, category: "Personal", german: "Hebamme", type: "Die Nomen", turkish: "Ebe", example: "Die Hebamme hilft bei der Geburt." },
    { id: 61, category: "Personal", german: "Physiotherapeut", type: "Der Nomen", turkish: "Fizyoterapist", example: "Der Physiotherapeut kommt am Nachmittag." },
    { id: 62, category: "Personal", german: "Oberarzt", type: "Der Nomen", turkish: "Uzman Doktor", example: "Der Oberarzt macht die Visite." },
    { id: 63, category: "Personal", german: "Stationsleitung", type: "Die Nomen", turkish: "Sorumlu Hemşire", example: "Bitte sprechen Sie mit der Stationsleitung." },
    { id: 64, category: "Personal", german: "Rettungssanitäter", type: "Der Nomen", turkish: "Paramedik", example: "Die Rettungssanitäter bringen den Patienten." },

    // Dialoge / Senaryolar (YENİ EKLENDİ)
    { id: 65, category: "Dialoge", german: "Wie geht es Ihnen heute?", type: "Der Satz (Cümle)", turkish: "Bugün nasılsınız?", example: "Guten Morgen Frau Müller, wie geht es Ihnen heute?" },
    { id: 66, category: "Dialoge", german: "Haben Sie Schmerzen auf einer Skala von 1 bis 10?", type: "Der Satz", turkish: "1'den 10'a kadar bir ölçekte ağrınız var mı?", example: "1 bedeutet kein Schmerz, 10 ist sehr stark." },
    { id: 67, category: "Dialoge", german: "Ich werde jetzt Ihren Blutdruck messen.", type: "Der Satz", turkish: "Şimdi tansiyonunuzu ölçeceğim.", example: "Bitte entspannen Sie sich, ich werde jetzt Ihren Blutdruck messen." },
    { id: 68, category: "Dialoge", german: "Bitte machen Sie den Arm frei.", type: "Der Satz", turkish: "Lütfen kolunuzu açın/sıvayın.", example: "Für die Blutabnahme, bitte machen Sie den Arm frei." },
    { id: 69, category: "Dialoge", german: "Drücken Sie die Klingel, wenn Sie Hilfe brauchen.", type: "Der Satz", turkish: "Yardıma ihtiyacınız olursa zile basın.", example: "Die Klingel ist direkt hier an Ihrem Bett." },
    { id: 70, category: "Dialoge", german: "Haben Sie Allergien gegen bestimmte Medikamente?", type: "Der Satz", turkish: "Belirli ilaçlara alerjiniz var mı?", example: "Bevor wir anfangen: Haben Sie Allergien?" },
    { id: 71, category: "Dialoge", german: "Wann haben Sie das letzte Mal etwas gegessen?", type: "Der Satz", turkish: "En son ne zaman bir şey yediniz?", example: "Vor der OP: Wann haben Sie das letzte Mal etwas gegessen?" },
    { id: 72, category: "Dialoge", german: "Ich bringe Ihnen gleich Ihre Medikamente.", type: "Der Satz", turkish: "İlaçlarınızı hemen getiriyorum.", example: "Warten Sie einen Moment, ich bringe Ihnen gleich Ihre Medikamente." },
    { id: 73, category: "Dialoge", german: "Der Arzt kommt gleich zu Ihnen.", type: "Der Satz", turkish: "Doktor birazdan yanınıza gelecek.", example: "Machen Sie sich keine Sorgen, der Arzt kommt gleich." },
    { id: 74, category: "Dialoge", german: "Haben Sie Stuhlgang gehabt?", type: "Der Satz", turkish: "Tuvalete (Büyük abdest) çıktınız mı?", example: "Das ist wichtig für die Visite: Haben Sie Stuhlgang gehabt?" },
    { id: 75, category: "Dialoge", german: "Darf ich Fieber messen?", type: "Der Satz", turkish: "Ateşinizi ölçebilir miyim?", example: "Sie fühlen sich warm an, darf ich Fieber messen?" }
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
    if (learnedIds.includes(currentWordId)) { 
        learnedIds = learnedIds.filter(id => id !== currentWordId); 
    } else { 
        learnedIds.push(currentWordId); 
        checkAndUpdateStreak(); 
    }
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
        feedbackEl.innerText = "Richtig! (Doğru!) 🎉";
        feedbackEl.style.color = "var(--success)";
        checkAndUpdateStreak();
    } else {
        clickedButton.classList.add("wrong");
        feedbackEl.innerText = "Falsch! (Yanlış!) ❌";
        feedbackEl.style.color = "var(--danger)";
        allButtons.forEach(btn => { if(btn.innerText === currentQuizCorrectWord.turkish) btn.classList.add("correct"); });
    }
    document.getElementById("nextQuizBtn").style.display = "block";
}
