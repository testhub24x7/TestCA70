const questions = [
    {
        eng: {
            question: "Parvati valley, recently seen in the news, is located in which state?",
            options: [
                { text: "Arunachal Pradesh", isCorrect: false },
                { text: "Sikkim", isCorrect: false },
                { text: "Himachal Pradesh", isCorrect: true },
                { text: "Kerala", isCorrect: false }
            ],
            note: "A tourist from Haryana drowned in the Parvati River near Manikaran, Himachal Pradesh, while taking photos. The Parvati River, a major tributary of the Beas River, rises from the Man Talai Glacier at 5200 meters. It flows 150 km through the Parvati Valley, passing Malana and Manikaran, collecting water from glacial streams and monsoons. It merges with the Beas River at Bhuntar. The river also has geothermal springs."
        },
        hin: {
            question: "पार्वती घाटी, हाल ही में समाचार में देखी गई, किस राज्य में स्थित है?",
            options: [
                { text: "अरुणाचल प्रदेश", isCorrect: false },
                { text: "सिक्किम", isCorrect: false },
                { text: "हिमाचल प्रदेश", isCorrect: true },
                { text: "केरल", isCorrect: false }
            ],
            note: "हरियाणा से एक पर्यटक हिमाचल प्रदेश के मणिकरण के पास पार्वती नदी में डूब गया था जब वह तस्वीरें ले रहा था। पार्वती नदी, ब्यास नदी की एक प्रमुख सहायक नदी, मण तालई ग्लेशियर से 5200 मीटर की ऊँचाई से निकलती है। यह पार्वती घाटी से 150 किमी बहती है, मलाना और मणिकरण से गुजरती है, ग्लेशियल नदियों और मानसून से पानी एकत्र करती है। यह नदी भुंतर में ब्यास नदी में मिल जाती है। नदी में भू-तापीय झरने भी हैं।"
        }
    },
    {
        eng: {
            question: "Nirman Shramik Mrtyu Evam Divyaang Sahaayata Yojana, recently seen in the news, is associated with which state?",
            options: [
                { text: "Jharkhand", isCorrect: false },
                { text: "Haryana", isCorrect: false },
                { text: "Chhattisgarh", isCorrect: true },
                { text: "Bihar", isCorrect: false }
            ],
            note: "Labor Minister Lakhan Lal Devangan launched the Mukhyamantri Nirman Shramikon Ke Bachon Hetu Nihshulk Coaching Sahaayata Yojana in Chhattisgarh. This scheme provides free coaching to economically weaker children of registered construction workers across 10 districts. It covers exams like PSC, CG Professional Examination Board, SSC, and banking and railway recruitments. Children of deceased workers since June 9, 2020, and beneficiaries of Nirman Shramik Mrtyu Evam Divyaang Sahaayata Yojana are eligible. Coaching is available in hybrid mode for flexibility."
        },
        hin: {
            question: "निर्माण श्रमिक मृत्यु एवं दिव्यांग सहायता योजना, हाल ही में समाचार में देखी गई, किस राज्य से संबंधित है?",
            options: [
                { text: "झारखंड", isCorrect: false },
                { text: "हरियाणा", isCorrect: false },
                { text: "छत्तीसगढ़", isCorrect: true },
                { text: "बिहार", isCorrect: false }
            ],
            note: "श्रम मंत्री लखनलाल देवांगन ने छत्तीसगढ़ में मुख्यमंत्री निर्माण श्रमिकों के बच्चों हेतु नि:शुल्क कोचिंग सहायता योजना का शुभारंभ किया। यह योजना 10 जिलों में पंजीकृत निर्माण श्रमिकों के आर्थिक रूप से कमजोर बच्चों को नि:शुल्क कोचिंग प्रदान करती है। यह योजना PSC, CG प्रोफेशनल एग्जामिनेशन बोर्ड, SSC, बैंकिंग और रेलवे भर्ती जैसी परीक्षाओं को कवर करती है। 9 जून 2020 से मृत श्रमिकों के बच्चे और निर्माण श्रमिक मृत्यु एवं दिव्यांग सहायता योजना के लाभार्थी पात्र हैं। कोचिंग हाइब्रिड मोड में उपलब्ध है ताकि लचीलापन बढ़ सके।"
        }
    },
    {
        eng: {
            question: "Indian army recently conducted joint military exercise ‘Maitree’ with which country’s army?",
            options: [
                { text: "Indonesia", isCorrect: false },
                { text: "Egypt", isCorrect: false },
                { text: "Thailand", isCorrect: true },
                { text: "Vietnam", isCorrect: false }
            ],
            note: "The Indian Army commenced the Maitree exercise with the Royal Thai Army at Fort Vachiraprakan, Thailand, from 1 to 15 July 2024. Initiated in 2006, this bilateral exercise enhances defense cooperation. Seventy-six personnel from both armies, including the Ladakh Scouts, participate. The exercise focuses on counter-insurgency and counter-terrorism operations in urban and jungle environments, joint planning, tactical drills, and physical fitness."
        },
        hin: {
            question: "भारतीय सेना ने हाल ही में ‘मैत्री’ संयुक्त सैन्य अभ्यास किस देश की सेना के साथ किया?",
            options: [
                { text: "इंडोनेशिया", isCorrect: false },
                { text: "मिस्र", isCorrect: false },
                { text: "थाईलैंड", isCorrect: true },
                { text: "वियतनाम", isCorrect: false }
            ],
            note: "भारतीय सेना ने 1 से 15 जुलाई 2024 तक थाईलैंड के फोर्ट वाचिराप्राकान में रॉयल थाई सेना के साथ मैत्री अभ्यास की शुरुआत की। 2006 में शुरू हुआ यह द्विपक्षीय अभ्यास रक्षा सहयोग को बढ़ाता है। दोनों सेनाओं के 76 कर्मी, जिनमें लद्दाख स्काउट्स शामिल हैं, इसमें भाग लेते हैं। यह अभ्यास शहरी और जंगल क्षेत्रों में काउंटर-इंसर्जेंसी और काउंटर-टेररिज्म ऑपरेशंस, संयुक्त योजना, सामरिक अभ्यास और शारीरिक फिटनेस पर केंद्रित है।"
        }
    }
    // Add more questions as needed...
];


let currentQuestionIndex = 0;
let language = "eng";

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const noteEl = document.getElementById("note");
const languageSwitch = document.getElementById("languageSwitch");
const languageLabel = document.getElementById("language-label");

languageSwitch.addEventListener("change", () => {
    language = languageSwitch.checked ? "hin" : "eng";
    languageLabel.textContent = languageSwitch.checked ? "Hin" : "Eng"; // Update the label to show selected language
    loadQuestion();
});

function loadQuestion() {
    const question = questions[currentQuestionIndex][language];
    questionEl.textContent = question.question;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    noteEl.textContent = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("div");
        button.classList.add("option");
        button.textContent = `[${String.fromCharCode(97 + index)}] ${option.text}`; // Show [a], [b], [c], [d] format
        button.addEventListener("click", () => selectOption(option, button));
        optionsEl.appendChild(button);
    });

}

function selectOption(option, button) {
    const correctOption = questions[currentQuestionIndex][language].options.find(o => o.isCorrect);

    document.querySelectorAll(".option").forEach((btn) => {
        btn.classList.remove("correct", "wrong");
    });

    if (option.isCorrect) {
        button.classList.add("correct");
    } else {
        button.classList.add("wrong");
        const correctBtn = Array.from(document.querySelectorAll(".option")).find((btn) => btn.textContent.includes(correctOption.text));
        if (correctBtn) {
            correctBtn.classList.add("correct");
        }
    }

    feedbackEl.textContent = `Correct: [${String.fromCharCode(97 + questions[currentQuestionIndex][language].options.indexOf(correctOption))}] ${correctOption.text}`;
    noteEl.textContent = `Note: ${questions[currentQuestionIndex][language].note}`;
}

function showAnswer() {
    const correctOption = questions[currentQuestionIndex][language].options.find(o => o.isCorrect);
    document.querySelectorAll(".option").forEach((btn) => {
        if (btn.textContent.includes(correctOption.text)) {
            btn.classList.add("correct");
        }
    });
    feedbackEl.textContent = `Correct: [${String.fromCharCode(97 + questions[currentQuestionIndex][language].options.indexOf(correctOption))}] ${correctOption.text}`;
    noteEl.textContent = `Note: ${questions[currentQuestionIndex][language].note}`;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

loadQuestion();
