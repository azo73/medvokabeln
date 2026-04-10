// --- FIREBASE BAĞLANTISI ---
const firebaseConfig = {
    apiKey: "AIzaSyClCQ8oQDKfH8lIrEdhwqlHfzvQzW9rAIA",
    authDomain: "medvokabeln.firebaseapp.com",
    projectId: "medvokabeln",
    storageBucket: "medvokabeln.firebasestorage.app",
    messagingSenderId: "983844382469",
    appId: "1:983844382469:web:78737dbc24a869db66f96c"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// ---------------------------

let fullVocabulary = []; 
let currentCards = []; 
let currentIndex = 0;
let learnedIds = JSON.parse(localStorage.getItem('medVokabeln_learned')) || [];
let difficultIds = JSON.parse(localStorage.getItem('medVokabeln_difficult')) || [];
let currentQuizCorrectWord = null; 

window.onload = () => { 
    initTheme(); 
    displayStreak(); 
    loadDatabase(); 
    updateRank(); 
};

function getRank(count) {
    if (count < 20) return { name: "Pflegeschüler/in", emoji: "🐣" };
    if (count < 70) return { name: "Pflegefachkraft", emoji: "💉" };
    if (count < 120) return { name: "Stationsleitung", emoji: "📋" };
    return { name: "Chefarzt/ärztin", emoji: "👑" };
}

function updateRank() {
    const rank = getRank(learnedIds.length);
    const rankEl = document.getElementById("userRank");
    if(rankEl) {
        rankEl.innerHTML = `${rank.emoji} ${rank.name}`;
    }
}

function loadDatabase() {
    if (typeof vocabularyData !== 'undefined' && vocabularyData.length > 0) {
        fullVocabulary = [...vocabularyData];
        currentCards = [...fullVocabulary];
        updateCard();
    } else {
        document.getElementById("germanWord").innerText = "Veri Bulunamadı 🚨";
    }
}

function addToDifficult(wordId) {
    if (!difficultIds.includes(wordId)) {
        difficultIds.push(wordId);
        localStorage.setItem('medVokabeln_difficult', JSON.stringify(difficultIds));
    }
}

function removeFromDifficult(wordId) {
    difficultIds = difficultIds.filter(id => id !== wordId);
    localStorage.setItem('medVokabeln_difficult', JSON.stringify(difficultIds));
}

function initTheme() {
    if (localStorage.getItem('medVokabeln_theme') === 'dark') {
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
    
    let basePool;
    if (selectedCategory === "Zorlandiklarim") {
        basePool = fullVocabulary.filter(w => difficultIds.includes(w.id));
    } else if (selectedCategory === "Alle") {
        basePool = fullVocabulary;
    } else {
        basePool = fullVocabulary.filter(w => w.category === selectedCategory || (w.type && w.type.includes("🌍 Topluluk")));
    }
    
    if (query === "") { 
        currentCards = basePool; 
    } else { 
        currentCards = basePool.filter(word => word.german.toLowerCase().includes(query) || word.turkish.toLowerCase().includes(query)); 
    }
    
    currentIndex = 0;
    if(currentCards.length === 0) {
        document.getElementById("germanWord").innerText = selectedCategory === "Zorlandiklarim" ? "Harika! 🎉" : "Yok 😔";
        document.getElementById("turkishWord").innerText = selectedCategory === "Zorlandiklarim" ? "Zorlandığın kelime kalmadı!" : "Sonuç bulunamadı.";
        document.getElementById("wordType").innerText = "";
        document.getElementById("exampleSentence").innerText = "";
    } else { updateCard(); }
}

function changeCategory() {
    document.getElementById("searchInput").value = ""; 
    searchWord();
}

function speakWord(event) {
    event.stopPropagation(); 
    if(currentCards.length === 0) return; 
    const utterance = new SpeechSynthesisUtterance(currentCards[currentIndex].german);
    utterance.lang = 'de-DE'; utterance.rate = 0.9; 
    window.speechSynthesis.speak(utterance);
}

function flipCard() { document.getElementById("myCard").classList.toggle("is-flipped"); }
function nextWord() { currentIndex++; if (currentIndex >= currentCards.length) currentIndex = 0; updateCard(); }
function prevWord() { currentIndex--; if (currentIndex < 0) currentIndex = currentCards.length - 1; updateCard(); }

function updateCard() {
    if(currentCards.length === 0) return; 
    document.getElementById("myCard").classList.remove("is-flipped");
    const currentWord = currentCards[currentIndex];
    document.getElementById("germanWord").innerText = currentWord.german;
    document.getElementById("wordType").innerText = currentWord.type || "";
    document.getElementById("turkishWord").innerText = currentWord.turkish;
    document.getElementById("exampleSentence").innerText = currentWord.example || "";
    checkLearnedStatus(currentWord.id);
}

function checkLearnedStatus(wordId) {
    const isLearned = learnedIds.includes(wordId);
    const learnBtn = document.getElementById("learnBtn");
    if (isLearned) { 
        learnBtn.innerText = "❌ Geri Al"; 
        learnBtn.classList.add("active"); 
        document.getElementById("frontBadge").style.display = "block"; 
        document.getElementById("backBadge").style.display = "block"; 
    } else { 
        learnBtn.innerText = "✅ Öğrendim"; 
        learnBtn.classList.remove("active"); 
        document.getElementById("frontBadge").style.display = "none"; 
        document.getElementById("backBadge").style.display = "none"; 
    }
    const learnedInCurrentView = currentCards.filter(card => learnedIds.includes(card.id)).length;
    document.getElementById("progressText").innerText = `${learnedInCurrentView} / ${currentCards.length}`;
}

function toggleLearned() {
    if(currentCards.length === 0) return;
    const currentWordId = currentCards[currentIndex].id;
    if (learnedIds.includes(currentWordId)) { 
        learnedIds = learnedIds.filter(id => id !== currentWordId); 
    } else { 
        learnedIds.push(currentWordId); 
        updateStreak(); 
        removeFromDifficult(currentWordId);
    }
    localStorage.setItem('medVokabeln_learned', JSON.stringify(learnedIds));
    checkLearnedStatus(currentWordId);
    updateRank(); 
}

function displayStreak() { document.getElementById('streakText').innerText = `🔥 ${localStorage.getItem('medVokabeln_streak') || 0}`; }
function updateStreak() {
    let streakCount = parseInt(localStorage.getItem('medVokabeln_streak')) || 0;
    const today = new Date().toISOString().split('T')[0];
    if (localStorage.getItem('medVokabeln_lastActive') === today) return; 
    streakCount++;
    localStorage.setItem('medVokabeln_streak', streakCount);
    localStorage.setItem('medVokabeln_lastActive', today);
    displayStreak();
}

function switchMode(mode) {
    if(mode === 'flashcard') {
        document.getElementById("flashcardSection").style.display = "flex"; document.getElementById("quizSection").style.display = "none";
        document.getElementById("btnFlashcard").classList.add("active"); document.getElementById("btnQuiz").classList.remove("active");
    } else {
        document.getElementById("flashcardSection").style.display = "none"; document.getElementById("quizSection").style.display = "flex";
        document.getElementById("btnQuiz").classList.add("active"); document.getElementById("btnFlashcard").classList.remove("active");
        generateQuizQuestion(); 
    }
}

function generateQuizQuestion() {
    document.getElementById("quizFeedback").innerText = ""; document.getElementById("nextQuizBtn").style.display = "none";
    
    let pool = fullVocabulary;
    const selectedCategory = document.getElementById("categorySelect").value;
    if(selectedCategory === "Zorlandiklarim") pool = fullVocabulary.filter(w => difficultIds.includes(w.id));
    else if(selectedCategory !== "Alle") pool = fullVocabulary.filter(w => w.category === selectedCategory);
    
    if(pool.length === 0) {
        document.getElementById("quizWord").innerText = "Kelime yok!";
        document.getElementById("quizOptionsContainer").innerHTML = "";
        return;
    }

    currentQuizCorrectWord = pool[Math.floor(Math.random() * pool.length)];
    document.getElementById("quizWord").innerText = currentQuizCorrectWord.german;
    
    let distractors = fullVocabulary.filter(word => word.id !== currentQuizCorrectWord.id).sort(() => 0.5 - Math.random()).slice(0, 3);
    let options = [currentQuizCorrectWord, ...distractors].sort(() => 0.5 - Math.random());
    
    const optionsContainer = document.getElementById("quizOptionsContainer");
    optionsContainer.innerHTML = ""; 
    options.forEach(option => {
        const btn = document.createElement("button"); btn.className = "quiz-option"; btn.innerText = option.turkish;
        btn.onclick = () => checkAnswer(btn, option.id); optionsContainer.appendChild(btn);
    });
}

function checkAnswer(clickedButton, selectedId) {
    document.querySelectorAll(".quiz-option").forEach(btn => btn.disabled = true);
    if (selectedId === currentQuizCorrectWord.id) { 
        clickedButton.classList.add("correct"); 
        document.getElementById("quizFeedback").innerText = "Richtig! 🎉"; 
        updateStreak(); 
        removeFromDifficult(currentQuizCorrectWord.id);
    } else { 
        clickedButton.classList.add("wrong"); 
        document.getElementById("quizFeedback").innerText = "Falsch! ❌"; 
        document.querySelectorAll(".quiz-option").forEach(btn => { if(btn.innerText === currentQuizCorrectWord.turkish) btn.classList.add("correct"); }); 
        addToDifficult(currentQuizCorrectWord.id);
    }
    document.getElementById("nextQuizBtn").style.display = "block";
}

function openShareModal() {
    const streak = localStorage.getItem('medVokabeln_streak') || 0;
    const learned = (JSON.parse(localStorage.getItem('medVokabeln_learned')) || []).length;
    const diff = (JSON.parse(localStorage.getItem('medVokabeln_difficult')) || []).length;
    const rank = getRank(learned);

    document.getElementById('modalStreak').innerText = streak + " Gün";
    document.getElementById('modalLearned').innerText = learned + " Kelime";
    document.getElementById('modalDiff').innerText = diff + " Kelime";
    
    document.getElementById('modalRankEmoji').innerText = rank.emoji;
    document.getElementById('modalRankName').innerText = rank.name;

    document.getElementById('shareModal').style.display = 'flex';
}

function closeShareModal() {
    document.getElementById('shareModal').style.display = 'none';
}

function generateShareText() {
    const streak = localStorage.getItem('medVokabeln_streak') || 0;
    const learned = (JSON.parse(localStorage.getItem('medVokabeln_learned')) || []).length;
    const rank = getRank(learned);
    
    return `${rank.emoji} PflegeDeutsch'ta "${rank.name}" rütbesine ulaştım! Tam ${learned} kelime öğrendim ve ${streak} günlük serim var. 🩺 Sen de bana katıl: https://med-vokabeln.com`;
}

function shareOnWhatsApp() {
    const text = encodeURIComponent(generateShareText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
}

function shareGeneral() {
    const shareData = {
        title: 'PflegeDeutsch Başarım',
        text: generateShareText(),
        url: 'https://med-vokabeln.com'
    };

    if (navigator.share) {
        navigator.share(shareData).catch((err) => console.log('Paylaşım iptal:', err));
    } else {
        navigator.clipboard.writeText(generateShareText());
        alert("Mesaj kopyalandı! İstediğin yere yapıştırıp hava atabilirsin. 😎");
    }
}

// ---------------------------------------------------
// 🌍 KÜRESEL TOPLULUK SÖZLÜĞÜNÜ HAVUZA EKLEME
// ---------------------------------------------------
db.collection("communityWords").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            const data = change.doc.data();
            const newCard = {
                id: change.doc.id,
                german: data.german,
                turkish: data.turkish,
                type: `🌍 Topluluk (${data.author})`, 
                category: "Alle",
                example: "Topluluk tarafından eklendi."
            };
            
            if (typeof fullVocabulary !== 'undefined' && !fullVocabulary.find(w => w.id === newCard.id)) {
                fullVocabulary.push(newCard);
                currentCards.push(newCard);
                
                if(currentCards.length === 1) updateCard();
            }
        }
    });
});
