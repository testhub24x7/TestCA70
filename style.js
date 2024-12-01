const questions = [
    {
        eng: {
            question: "1. Which Indian company signed an agreement with Kuwait’s leading commercial bank Bergen Bank to modernize banking technology?",
            options: [
                { text: "Infosys", isCorrect: false },
                { text: "TCS", isCorrect: true },
                { text: "Wipro", isCorrect: false },
                { text: "HCL", isCorrect: false }
            ]
        },
        hin: {
            question: "1. किस भारतीय कंपनी ने कुवैत के प्रमुख वाणिज्यिक बैंक बर्गन बैंक के साथ बैंकिंग तकनीक को आधुनिक बनाने के लिए समझौता किया?",
            options: [
                { text: "इन्फोसिस", isCorrect: false },
                { text: "टीसीएस", isCorrect: true },
                { text: "विप्रो", isCorrect: false },
                { text: "एचसीएल", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "2. The Indian Coast Guard signed an agreement with which company to promote indigenous content in shipbuilding?",
            options: [
                { text: "Tata Steel", isCorrect: false },
                { text: "Jindal Steel", isCorrect: true },
                { text: "Bhilai Steel Plant", isCorrect: false },
                { text: "Larsen & Toubro", isCorrect: false }
            ]
        },
        hin: {
            question: "2. भारतीय तटरक्षक बल ने जहाज निर्माण में स्वदेशी सामग्री को बढ़ावा देने के लिए किस कंपनी के साथ समझौता किया?",
            options: [
                { text: "टाटा स्टील", isCorrect: false },
                { text: "जिंदल स्टील", isCorrect: true },
                { text: "भिलाई स्टील प्लांट", isCorrect: false },
                { text: "लार्सन एंड टूब्रो", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "3. Where will Chhattisgarh’s first floating solar project be set up?",
            options: [
                { text: "Bhilai Reservoir", isCorrect: false },
                { text: "Maroda-1 Reservoir", isCorrect: true },
                { text: "Durg Lake", isCorrect: false },
                { text: "Hasdeo River", isCorrect: false }
            ]
        },
        hin: {
            question: "3. छत्तीसगढ़ का पहला तैरता सौर परियोजना कहाँ स्थापित की जाएगी?",
            options: [
                { text: "भिलाई जलाशय", isCorrect: false },
                { text: "मरोदा-1 जलाशय", isCorrect: true },
                { text: "दुर्ग झील", isCorrect: false },
                { text: "हसदेव नदी", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "4. What is the capacity of Chhattisgarh’s first floating solar project?",
            options: [
                { text: "10 MW", isCorrect: false },
                { text: "12 MW", isCorrect: false },
                { text: "15 MW", isCorrect: true },
                { text: "20 MW", isCorrect: false }
            ]
        },
        hin: {
            question: "4. छत्तीसगढ़ की पहली तैरती सौर परियोजना की क्षमता क्या है?",
            options: [
                { text: "10 मेगावाट", isCorrect: false },
                { text: "12 मेगावाट", isCorrect: false },
                { text: "15 मेगावाट", isCorrect: true },
                { text: "20 मेगावाट", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "5. The Central Government approved the renaming of eight railway stations in which district of Uttar Pradesh?",
            options: [
                { text: "Ayodhya", isCorrect: false },
                { text: "Amethi", isCorrect: true },
                { text: "Varanasi", isCorrect: false },
                { text: "Gorakhpur", isCorrect: false }
            ]
        },
        hin: {
            question: "5. केंद्र सरकार ने उत्तर प्रदेश के किस जिले के आठ रेलवे स्टेशनों के नाम बदलने की मंजूरी दी?",
            options: [
                { text: "अयोध्या", isCorrect: false },
                { text: "अमेठी", isCorrect: true },
                { text: "वाराणसी", isCorrect: false },
                { text: "गोरखपुर", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "6. Why did the Uttarakhand government suspend the license of Patanjali Ayurveda?",
            options: [
                { text: "Due to non-payment of taxes", isCorrect: false },
                { text: "Due to misleading advertisements", isCorrect: true },
                { text: "Due to product contamination", isCorrect: false },
                { text: "Due to lack of licenses for manufacturing", isCorrect: false }
            ]
        },
        hin: {
            question: "6. उत्तराखंड सरकार ने पतंजलि आयुर्वेद का लाइसेंस क्यों निलंबित किया?",
            options: [
                { text: "करों का भुगतान न करने के कारण", isCorrect: false },
                { text: "भ्रामक विज्ञापनों के कारण", isCorrect: true },
                { text: "उत्पाद संदूषण के कारण", isCorrect: false },
                { text: "निर्माण के लिए लाइसेंस की कमी के कारण", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "7. How many products of Patanjali Ayurveda had their licenses suspended by the Uttarakhand government?",
            options: [
                { text: "10", isCorrect: false },
                { text: "12", isCorrect: false },
                { text: "14", isCorrect: true },
                { text: "15", isCorrect: false }
            ]
        },
        hin: {
            question: "7. उत्तराखंड सरकार ने पतंजलि आयुर्वेद के कितने उत्पादों के लाइसेंस निलंबित किए?",
            options: [
                { text: "10", isCorrect: false },
                { text: "12", isCorrect: false },
                { text: "14", isCorrect: true },
                { text: "15", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "8. Where was the conference titled 'India's Progressive Path in the Administration of Criminal Justice System' held?",
            options: [
                { text: "Mumbai, Maharashtra", isCorrect: false },
                { text: "Guwahati, Assam", isCorrect: true },
                { text: "New Delhi", isCorrect: false },
                { text: "Bengaluru, Karnataka", isCorrect: false }
            ]
        },
        hin: {
            question: "8. ‘भारत की आपराधिक न्याय प्रणाली प्रशासन में प्रगतिशील पथ’ शीर्षक वाली सम्मेलन कहाँ आयोजित की गई?",
            options: [
                { text: "मुंबई, महाराष्ट्र", isCorrect: false },
                { text: "गुवाहाटी, असम", isCorrect: true },
                { text: "नई दिल्ली", isCorrect: false },
                { text: "बेंगलुरु, कर्नाटक", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "9. What is the name of HDFC Life's campaign launched to simplify life insurance purchases through online platforms?",
            options: [
                { text: "Instant Insurance", isCorrect: false },
                { text: "Quick Life", isCorrect: false },
                { text: "No Hassle Life Insurance Fatafat", isCorrect: true },
                { text: "Fast Secure Insurance", isCorrect: false }
            ]
        },
        hin: {
            question: "9. ऑनलाइन प्लेटफार्मों के माध्यम से जीवन बीमा खरीद को सरल बनाने के लिए एचडीएफसी लाइफ के अभियान का नाम क्या है?",
            options: [
                { text: "इंस्टेंट इंश्योरेंस", isCorrect: false },
                { text: "क्विक लाइफ", isCorrect: false },
                { text: "नो हैसल लाइफ इंश्योरेंस फटाफट", isCorrect: true },
                { text: "फास्ट सिक्योर इंश्योरेंस", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "10. Which company signed an agreement with Russia's Rosneft to purchase crude oil and make payments in rubles?",
            options: [
                { text: "Tata Group", isCorrect: false },
                { text: "Reliance Industries", isCorrect: true },
                { text: "Adani Enterprises", isCorrect: false },
                { text: "Indian Oil Corporation", isCorrect: false }
            ]
        },
        hin: {
            question: "10. किस कंपनी ने रूस की रोज़नेफ्ट के साथ कच्चे तेल की खरीद और रूबल में भुगतान के लिए समझौता किया?",
            options: [
                { text: "टाटा ग्रुप", isCorrect: false },
                { text: "रिलायंस इंडस्ट्रीज", isCorrect: true },
                { text: "अदानी एंटरप्राइजेज", isCorrect: false },
                { text: "इंडियन ऑयल कॉर्पोरेशन", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "11. What is the name of the project under which the Indian Air Force tested a portable hospital for airdrop?",
            options: [
                { text: "Project Parivartan", isCorrect: false },
                { text: "Project Bhishma", isCorrect: true },
                { text: "Project Lifeline", isCorrect: false },
                { text: "Project Raksha", isCorrect: false }
            ]
        },
        hin: {
            question: "11. भारतीय वायु सेना ने किस परियोजना के तहत हवाई ड्रॉप के लिए एक पोर्टेबल अस्पताल का परीक्षण किया?",
            options: [
                { text: "प्रोजेक्ट परिवर्तन", isCorrect: false },
                { text: "प्रोजेक्ट भीष्म", isCorrect: true },
                { text: "प्रोजेक्ट लाइफलाइन", isCorrect: false },
                { text: "प्रोजेक्ट रक्षा", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "12. In which city was the first evidence of rock art discovered near the Babbu Swamy temple?",
            options: [
                { text: "Bengaluru", isCorrect: false },
                { text: "Mysuru", isCorrect: false },
                { text: "Mangaluru", isCorrect: true },
                { text: "Hubballi", isCorrect: false }
            ]
        },
        hin: {
            question: "12. बब्बू स्वामी मंदिर के पास किस शहर में शैल कला का पहला साक्ष्य खोजा गया?",
            options: [
                { text: "बेंगलुरु", isCorrect: false },
                { text: "मैसूरु", isCorrect: false },
                { text: "मैंगलुरु", isCorrect: true },
                { text: "हुबली", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "13. Which state government announced 33% reservation in government contract jobs for women?",
            options: [
                { text: "Tamil Nadu", isCorrect: false },
                { text: "Karnataka", isCorrect: true },
                { text: "Kerala", isCorrect: false },
                { text: "Andhra Pradesh", isCorrect: false }
            ]
        },
        hin: {
            question: "13. किस राज्य सरकार ने महिलाओं के लिए सरकारी अनुबंध नौकरियों में 33% आरक्षण की घोषणा की?",
            options: [
                { text: "तमिलनाडु", isCorrect: false },
                { text: "कर्नाटक", isCorrect: true },
                { text: "केरल", isCorrect: false },
                { text: "आंध्र प्रदेश", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "14. Which bank became the first to become a trading and clearing member of the India International Bullion Exchange?",
            options: [
                { text: "Punjab National Bank", isCorrect: false },
                { text: "HDFC Bank", isCorrect: false },
                { text: "State Bank of India", isCorrect: true },
                { text: "ICICI Bank", isCorrect: false }
            ]
        },
        hin: {
            question: "14. भारत अंतर्राष्ट्रीय बुलियन एक्सचेंज का ट्रेडिंग और क्लीयरिंग सदस्य बनने वाला पहला बैंक कौन सा है?",
            options: [
                { text: "पंजाब नेशनल बैंक", isCorrect: false },
                { text: "एचडीएफसी बैंक", isCorrect: false },
                { text: "भारतीय स्टेट बैंक", isCorrect: true },
                { text: "आईसीआईसीआई बैंक", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "15. Which organization did the Department of Animal Husbandry and Dairying sign an agreement with for digitization of animal vaccine cold chain management?",
            options: [
                { text: "United Nations Environment Programme (UNEP)", isCorrect: false },
                { text: "United Nations Development Programme (UNDP)", isCorrect: true },
                { text: "Food and Agriculture Organization (FAO)", isCorrect: false },
                { text: "International Labour Organization (ILO)", isCorrect: false }
            ]
        },
        hin: {
            question: "15. पशुपालन और डेयरी विभाग ने पशु वैक्सीन कोल्ड चेन प्रबंधन के डिजिटलीकरण के लिए किस संगठन के साथ समझौता किया?",
            options: [
                { text: "संयुक्त राष्ट्र पर्यावरण कार्यक्रम (UNEP)", isCorrect: false },
                { text: "संयुक्त राष्ट्र विकास कार्यक्रम (UNDP)", isCorrect: true },
                { text: "खाद्य और कृषि संगठन (FAO)", isCorrect: false },
                { text: "अंतर्राष्ट्रीय श्रम संगठन (ILO)", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "16. Which two Indian literary works were included in UNESCO's Memory of the World Asia-Pacific Register?",
            options: [
                { text: "Panchatantra and Ramacharitmanas", isCorrect: false },
                { text: "Ramacharitmanas and Sahri Dayalok-Lokan", isCorrect: true },
                { text: "Arthashastra and Panchatantra", isCorrect: false },
                { text: "Mahabharata and Ramayana", isCorrect: false }
            ]
        },
        hin: {
            question: "16. कौन से दो भारतीय साहित्यिक कार्यों को यूनेस्को की मेमोरी ऑफ़ द वर्ल्ड एशिया-पैसिफ़िक रजिस्टर में शामिल किया गया?",
            options: [
                { text: "पंचतंत्र और रामचरितमानस", isCorrect: false },
                { text: "रामचरितमानस और सहरी दयालोक-लोकन", isCorrect: true },
                { text: "अर्थशास्त्र और पंचतंत्र", isCorrect: false },
                { text: "महाभारत और रामायण", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "17. What digital platform did the Government of Assam launch to enhance disaster management capabilities?",
            options: [
                { text: "ARMS", isCorrect: false },
                { text: "DRIMS", isCorrect: true },
                { text: "NDRF Portal", isCorrect: false },
                { text: "AADRM", isCorrect: false }
            ]
        },
        hin: {
            question: "17. आपदाओं के प्रबंधन की क्षमताओं को बढ़ाने के लिए असम सरकार ने कौन सा डिजिटल प्लेटफ़ॉर्म लॉन्च किया?",
            options: [
                { text: "ARMS", isCorrect: false },
                { text: "DRIMS", isCorrect: true },
                { text: "NDRF पोर्टल", isCorrect: false },
                { text: "AADRM", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "18. What percentage increase in Scheduled Caste (SC) enrollment was reported by the National Commission for Backward Classes between 2014 and 2022?",
            options: [
                { text: "30%", isCorrect: false },
                { text: "44%", isCorrect: true },
                { text: "50%", isCorrect: false },
                { text: "60%", isCorrect: false }
            ]
        },
        hin: {
            question: "18. 2014 और 2022 के बीच अनुसूचित जाति (SC) नामांकन में कितनी प्रतिशत वृद्धि दर्ज की गई?",
            options: [
                { text: "30%", isCorrect: false },
                { text: "44%", isCorrect: true },
                { text: "50%", isCorrect: false },
                { text: "60%", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "19. Where was the 16th Joint Working Group meeting between India and the UK on counter-terrorism held?",
            options: [
                { text: "London", isCorrect: false },
                { text: "Manchester", isCorrect: false },
                { text: "New Delhi", isCorrect: true },
                { text: "Birmingham", isCorrect: false }
            ]
        },
        hin: {
            question: "19. भारत और यूके के बीच आतंकवाद विरोध पर 16वीं संयुक्त कार्य समूह बैठक कहाँ आयोजित हुई?",
            options: [
                { text: "लंदन", isCorrect: false },
                { text: "मैनचेस्टर", isCorrect: false },
                { text: "नई दिल्ली", isCorrect: true },
                { text: "बर्मिंघम", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "20. What is the name of the project launched by the Central Council for Research in Ayurvedic Sciences to promote Ayurveda?",
            options: [
                { text: "Ayurveda-2024", isCorrect: false },
                { text: "Pragati-2024", isCorrect: true },
                { text: "Vikas-2024", isCorrect: false },
                { text: "Sanjeevani-2024", isCorrect: false }
            ]
        },
        hin: {
            question: "20. आयुर्वेद को बढ़ावा देने के लिए सेंट्रल काउंसिल फॉर रिसर्च इन आयुर्वेदिक साइंसेज द्वारा शुरू की गई परियोजना का नाम क्या है?",
            options: [
                { text: "आयुर्वेद-2024", isCorrect: false },
                { text: "प्रगति-2024", isCorrect: true },
                { text: "विकास-2024", isCorrect: false },
                { text: "संजीवनी-2024", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "21. Where was the Chola-period statue of Kaliya Kalki (Dancing Krishna) stolen from, which was decided to be brought back to India?",
            options: [
                { text: "Kerala", isCorrect: false },
                { text: "Tamil Nadu", isCorrect: true },
                { text: "Karnataka", isCorrect: false },
                { text: "Odisha", isCorrect: false }
            ]
        },
        hin: {
            question: "21. चोल युग की कालीया कल्कि (नृत्य करते कृष्ण) की मूर्ति, जिसे भारत वापस लाने का निर्णय लिया गया, कहाँ से चोरी हुई थी?",
            options: [
                { text: "केरल", isCorrect: false },
                { text: "तमिलनाडु", isCorrect: true },
                { text: "कर्नाटक", isCorrect: false },
                { text: "ओडिशा", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "22. Where was India’s first green hydrogen plant commissioned under the National Green Hydrogen Mission?",
            options: [
                { text: "Gujarat", isCorrect: false },
                { text: "Madhya Pradesh", isCorrect: true },
                { text: "Uttar Pradesh", isCorrect: false },
                { text: "Maharashtra", isCorrect: false }
            ]
        },
        hin: {
            question: "22. नेशनल ग्रीन हाइड्रोजन मिशन के तहत भारत का पहला ग्रीन हाइड्रोजन संयंत्र कहाँ चालू किया गया?",
            options: [
                { text: "गुजरात", isCorrect: false },
                { text: "मध्य प्रदेश", isCorrect: true },
                { text: "उत्तर प्रदेश", isCorrect: false },
                { text: "महाराष्ट्र", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "23. What regional consultation process for migrant worker origin countries was India entrusted with for the chairmanship from 2024-2026?",
            options: [
                { text: "Colombo Process", isCorrect: true },
                { text: "Dhaka Process", isCorrect: false },
                { text: "Manila Conference", isCorrect: false },
                { text: "Bangkok Declaration", isCorrect: false }
            ]
        },
        hin: {
            question: "23. प्रवासी श्रमिक मूल देशों के लिए किस क्षेत्रीय परामर्श प्रक्रिया की अध्यक्षता भारत को 2024-2026 के लिए सौंपी गई?",
            options: [
                { text: "कोलंबो प्रक्रिया", isCorrect: true },
                { text: "ढाका प्रक्रिया", isCorrect: false },
                { text: "मनीला सम्मेलन", isCorrect: false },
                { text: "बैंकॉक घोषणा", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "24. What is the name of the event launched by the Ministry of Education from 29 May to 28 June 2024?",
            options: [
                { text: "National Summer Camp 2024", isCorrect: false },
                { text: "Summer Fiesta 2024", isCorrect: true },
                { text: "Learning Festival 2024", isCorrect: false },
                { text: "Knowledge Festival 2024", isCorrect: false }
            ]
        },
        hin: {
            question: "24. 29 मई से 28 जून 2024 तक शिक्षा मंत्रालय द्वारा शुरू किए गए कार्यक्रम का नाम क्या है?",
            options: [
                { text: "नेशनल समर कैंप 2024", isCorrect: false },
                { text: "समर फिएस्टा 2024", isCorrect: true },
                { text: "लर्निंग फेस्टिवल 2024", isCorrect: false },
                { text: "नॉलेज फेस्टिवल 2024", isCorrect: false }
            ]
        }
    },
    {
        eng: {
            question: "25. Where was the Summer Fiesta 2024 held?",
            options: [
                { text: "National Bal Bhavan, New Delhi", isCorrect: true },
                { text: "Rashtrapati Bhavan, New Delhi", isCorrect: false },
                { text: "Vigyan Bhavan, New Delhi", isCorrect: false },
                { text: "India Gate, New Delhi", isCorrect: false }
            ]
        },
        hin: {
            question: "25. समर फिएस्टा 2024 कहाँ आयोजित किया गया था?",
            options: [
                { text: "नेशनल बाल भवन, नई दिल्ली", isCorrect: true },
                { text: "राष्ट्रपति भवन, नई दिल्ली", isCorrect: false },
                { text: "विज्ञान भवन, नई दिल्ली", isCorrect: false },
                { text: "इंडिया गेट, नई दिल्ली", isCorrect: false }
            ]
        }
    }
    
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
