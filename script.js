// Global variables
let currentLanguage = 'en';
let isRecording = false;
let mediaRecorder;
let audioChunks = [];

// Language data
const translations = {
    en: {
        'Ask Question': 'Ask Question',
        'Learn More': 'Learn More',
        'Your Digital Agricultural Advisor': 'Your Digital Agricultural Advisor',
        'Get instant, expert farming advice in your language. Ask questions about pests, weather, crops, and more.': 'Get instant, expert farming advice in your language. Ask questions about pests, weather, crops, and more.'
    },
    ml: {
        'Ask Question': 'ചോദ്യം ചോദിക്കുക',
        'Learn More': 'കൂടുതൽ അറിയുക',
        'Your Digital Agricultural Advisor': 'നിങ്ങളുടെ ഡിജിറ്റൽ കാർഷിക ഉപദേശകൻ',
        'Get instant, expert farming advice in your language. Ask questions about pests, weather, crops, and more.': 'നിങ്ങളുടെ ഭാഷയിൽ തൽക്ഷണം, വിദഗ്ദ്ധ കാർഷിക ഉപദേശം നേടുക. കീടങ്ങൾ, കാലാവസ്ഥ, വിളകൾ എന്നിവയെക്കുറിച്ച് ചോദ്യങ്ങൾ ചോദിക്കുക.'
    },
    hi: {
        'Ask Question': 'प्रश्न पूछें',
        'Learn More': 'और जानें',
        'Your Digital Agricultural Advisor': 'आपका डिजिटल कृषि सलाहकार',
        'Get instant, expert farming advice in your language. Ask questions about pests, weather, crops, and more.': 'अपनी भाषा में तत्काल, विशेषज्ञ कृषि सलाह प्राप्त करें। कीटों, मौसम, फसलों आदि के बारे में प्रश्न पूछें।'
    },
    ta: {
        'Ask Question': 'கேள்வி கேளுங்கள்',
        'Learn More': 'மேலும் அறிய',
        'Your Digital Agricultural Advisor': 'உங்கள் டிஜிட்டல் விவசாய ஆலோசகர்',
        'Get instant, expert farming advice in your language. Ask questions about pests, weather, crops, and more.': 'உங்கள் மொழியில் உடனடியாக, நிபுணர் விவசாய ஆலோசனையைப் பெறுங்கள். பூச்சிகள், வானிலை, பயிர்கள் மற்றும் பலவற்றைப் பற்றி கேள்விகள் கேளுங்கள்.'
    }
};

// AI Knowledge Base (simplified for demo)
const knowledgeBase = {
    'leaf spot banana': {
        en: 'For leaf spot in banana, use copper-based fungicides like Bordeaux mixture (1%) or copper oxychloride (0.3%). Apply every 15 days during wet weather. Remove infected leaves and ensure proper drainage.',
        ml: 'വാഴയിലെ ഇല പുള്ളി രോഗത്തിന്, ബോർഡോ മിശ്രിതം (1%) അല്ലെങ്കിൽ കോപ്പർ ഓക്സിക്ലോറൈഡ് (0.3%) പോലുള്ള ചെമ്പ് അടിസ്ഥാന ഫംഗിസൈഡുകൾ ഉപയോഗിക്കുക. നനഞ്ഞ കാലാവസ്ഥയിൽ 15 ദിവസത്തിലൊരിക്കൽ പ്രയോഗിക്കുക. അണുബാധിത ഇലകൾ നീക്കം ചെയ്യുകയും ഉചിതമായ ഡ്രെയിനേജ് ഉറപ്പാക്കുകയും ചെയ്യുക.',
        hi: 'केले में पत्ती के धब्बे के लिए, बोर्डो मिश्रण (1%) या कॉपर ऑक्सीक्लोराइड (0.3%) जैसे तांबे आधारित फफूंदनाशक का उपयोग करें। गीले मौसम के दौरान हर 15 दिन में लगाएं। संक्रमित पत्तियों को हटाएं और उचित जल निकासी सुनिश्चित करें।',
        ta: 'வாழை இலை புள்ளிக்கு, பார்டோ கலவை (1%) அல்லது காப்பர் ஆக்ஸிக்ளோரைடு (0.3%) போன்ற செப்பு அடிப்படை பூஞ்சை கொல்லிகள் பயன்படுத்தவும். ஈரமான வானிலையில் 15 நாட்களுக்கு ஒரு முறை பயன்படுத்தவும். பாதிக்கப்பட்ட இலைகளை அகற்றி சரியான வடிகால் உறுதிப்படுத்தவும்.'
    },
    'pest control rice': {
        en: 'For rice pest control, use integrated pest management. Apply neem oil (2ml/liter) for organic control. For severe infestations, use recommended insecticides like chlorpyriphos or quinalphos as per local agricultural officer guidance.',
        ml: 'അരി കീടനിയന്ത്രണത്തിന്, സംയോജിത കീടനിയന്ത്രണം ഉപയോഗിക്കുക. ജൈവ നിയന്ത്രണത്തിന് വേപ്പെണ്ണ (2ml/ലിറ്റർ) പ്രയോഗിക്കുക. കടുത്ത അണുബാധയ്ക്ക്, പ്രാദേശിക കാർഷിക ഉദ്യോഗസ്ഥന്റെ മാർഗദർശനപ്രകാരം ക്ലോർപൈറിഫോസ് അല്ലെങ്കിൽ ക്വിനാൽഫോസ് പോലുള്ള ശുപാർശ ചെയ്യപ്പെട്ട കീടനാശിനികൾ ഉപയോഗിക്കുക.',
        hi: 'चावल कीट नियंत्रण के लिए, एकीकृत कीट प्रबंधन का उपयोग करें। जैविक नियंत्रण के लिए नीम का तेल (2ml/लीटर) लगाएं। गंभीर संक्रमण के लिए, स्थानीय कृषि अधिकारी के मार्गदर्शन के अनुसार क्लोरपाइरिफोस या क्विनालफोस जैसे अनुशंसित कीटनाशकों का उपयोग करें।',
        ta: 'அரிசி பூச்சி கட்டுப்பாட்டிற்கு, ஒருங்கிணைந்த பூச்சி மேலாண்மையைப் பயன்படுத்தவும். கரிம கட்டுப்பாட்டிற்கு வேப்பெண்ணெய் (2ml/லிட்டர்) பயன்படுத்தவும். கடுமையான தொற்றுக்கு, உள்ளூர் விவசாய அதிகாரியின் வழிகாட்டுதலின்படி குளோர்பைரிஃபோஸ் அல்லது குயினால்ஃபோஸ் போன்ற பரிந்துரைக்கப்பட்ட பூச்சிக்கொல்லிகளைப் பயன்படுத்தவும்.'
    },
    'weather advice': {
        en: 'Monitor weather forecasts regularly. During heavy rains, ensure proper drainage. In drought conditions, use water conservation techniques like mulching and drip irrigation. Protect crops from extreme weather with appropriate covers.',
        ml: 'കാലാവസ്ഥാ പ്രവചനങ്ങൾ നിരന്തരം നിരീക്ഷിക്കുക. കനത്ത മഴയ്ക്കിടെ, ഉചിതമായ ഡ്രെയിനേജ് ഉറപ്പാക്കുക. വരൾച്ചാ സാഹചര്യങ്ങളിൽ, മൾച്ചിംഗ്, ഡ്രിപ്പ് നീരാവി പോലുള്ള ജല സംരക്ഷണ സാങ്കേതികവിദ്യകൾ ഉപയോഗിക്കുക. ഉചിതമായ കവറുകൾ ഉപയോഗിച്ച് അതിരുകടന്ന കാലാവസ്ഥയിൽ നിന്ന് വിളകളെ സംരക്ഷിക്കുക.',
        hi: 'मौसम पूर्वानुमान की नियमित निगरानी करें। भारी बारिश के दौरान, उचित जल निकासी सुनिश्चित करें। सूखे की स्थिति में, मल्चिंग और ड्रिप सिंचाई जैसी जल संरक्षण तकनीकों का उपयोग करें। उपयुक्त कवर के साथ चरम मौसम से फसलों की सुरक्षा करें।',
        ta: 'வானிலை முன்னறிவிப்புகளை தவறாமல் கண்காணிக்கவும். கடுமையான மழையின் போது, சரியான வடிகால் உறுதிப்படுத்தவும். வறட்சி நிலைகளில், மல்ச்சிங் மற்றும் சொட்டு நீர்ப்பாசனம் போன்ற நீர் பாதுகாப்பு நுட்பங்களைப் பயன்படுத்தவும். பொருத்தமான மூடிகளுடன் தீவிர வானிலையிலிருந்து பயிர்களை பாதுகாக்கவும்.'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupLanguageSelector();
    setupInputMethods();
    setupQuerySubmission();
    setupVoiceRecording();
    setupImageUpload();
    updateLanguage();
}

// Language functionality
function setupLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            updateLanguage();
        });
    }
}

function updateLanguage() {
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(element => {
        const key = element.getAttribute('data-en');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

// Input method switching
function setupInputMethods() {
    const inputMethods = document.querySelectorAll('.input-method');
    const textInput = document.getElementById('textInput');
    const voiceRecordBtn = document.getElementById('voiceRecordBtn');
    const imageUploadBtn = document.getElementById('imageUploadBtn');

    inputMethods.forEach(method => {
        method.addEventListener('click', function() {
            // Remove active class from all methods
            inputMethods.forEach(m => m.classList.remove('active'));
            // Add active class to clicked method
            this.classList.add('active');
            
            const methodType = this.getAttribute('data-method');
            
            // Show/hide relevant inputs
            if (methodType === 'text') {
                textInput.style.display = 'block';
                voiceRecordBtn.style.display = 'none';
                imageUploadBtn.style.display = 'none';
            } else if (methodType === 'voice') {
                textInput.style.display = 'none';
                voiceRecordBtn.style.display = 'inline-flex';
                imageUploadBtn.style.display = 'none';
            } else if (methodType === 'image') {
                textInput.style.display = 'none';
                voiceRecordBtn.style.display = 'none';
                imageUploadBtn.style.display = 'inline-flex';
            }
        });
    });
}

// Voice recording functionality
function setupVoiceRecording() {
    const voiceRecordBtn = document.getElementById('voiceRecordBtn');
    
    if (voiceRecordBtn) {
        voiceRecordBtn.addEventListener('click', toggleRecording);
    }
}

async function toggleRecording() {
    if (!isRecording) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];
            
            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };
            
            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                processVoiceInput(audioBlob);
                stream.getTracks().forEach(track => track.stop());
            };
            
            mediaRecorder.start();
            isRecording = true;
            updateVoiceButton();
            
        } catch (error) {
            console.error('Error accessing microphone:', error);
            showNotification('Microphone access denied. Please allow microphone access to use voice input.', 'error');
        }
    } else {
        mediaRecorder.stop();
        isRecording = false;
        updateVoiceButton();
    }
}

function updateVoiceButton() {
    const voiceRecordBtn = document.getElementById('voiceRecordBtn');
    const icon = voiceRecordBtn.querySelector('i');
    const text = voiceRecordBtn.querySelector('span');
    
    if (isRecording) {
        icon.className = 'fas fa-stop';
        text.textContent = 'Stop Recording';
        voiceRecordBtn.style.background = '#dc3545';
    } else {
        icon.className = 'fas fa-microphone';
        text.textContent = 'Start Recording';
        voiceRecordBtn.style.background = '#2d7d32';
    }
}

function processVoiceInput(audioBlob) {
    // In a real implementation, this would send the audio to a speech-to-text service
    // For demo purposes, we'll simulate voice input processing
    showNotification('Voice input received! Processing...', 'info');
    
    setTimeout(() => {
        // Simulate voice-to-text conversion
        const simulatedText = "Which pesticide for leaf spot in banana?";
        document.getElementById('textInput').value = simulatedText;
        showNotification('Voice converted to text successfully!', 'success');
    }, 2000);
}

// Image upload functionality
function setupImageUpload() {
    const imageInput = document.getElementById('imageInput');
    const imageUploadBtn = document.getElementById('imageUploadBtn');
    
    if (imageUploadBtn) {
        imageUploadBtn.addEventListener('click', () => {
            imageInput.click();
        });
    }
    
    if (imageInput) {
        imageInput.addEventListener('change', handleImageUpload);
    }
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        // In a real implementation, this would send the image to an AI service for analysis
        showNotification('Image uploaded! Analyzing...', 'info');
        
        setTimeout(() => {
            // Simulate image analysis
            const analysisResult = "Based on the image analysis, this appears to be leaf spot disease in banana. Recommended treatment: Apply copper-based fungicide every 15 days.";
            displayResponse(analysisResult, 'image');
            showNotification('Image analysis completed!', 'success');
        }, 3000);
    }
}

// Query submission
function setupQuerySubmission() {
    const submitBtn = document.getElementById('submitQuery');
    
    if (submitBtn) {
        submitBtn.addEventListener('click', handleQuerySubmission);
    }
    
    // Allow Enter key to submit
    const textInput = document.getElementById('textInput');
    if (textInput) {
        textInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && e.ctrlKey) {
                handleQuerySubmission();
            }
        });
    }
}

function handleQuerySubmission() {
    const textInput = document.getElementById('textInput');
    const query = textInput.value.trim();
    
    if (!query) {
        showNotification('Please enter a question before submitting.', 'error');
        return;
    }
    
    // Get context information
    const location = document.getElementById('locationInput').value;
    const crop = document.getElementById('cropSelect').value;
    const season = document.getElementById('seasonSelect').value;
    
    // Show loading state
    showLoadingState();
    
    // Simulate AI processing
    setTimeout(() => {
        const response = generateAIResponse(query, location, crop, season);
        displayResponse(response, 'text');
    }, 2000);
}

function generateAIResponse(query, location, crop, season) {
    const queryLower = query.toLowerCase();
    
    // Simple keyword matching for demo
    if (queryLower.includes('leaf spot') && queryLower.includes('banana')) {
        return knowledgeBase['leaf spot banana'][currentLanguage] || knowledgeBase['leaf spot banana']['en'];
    } else if (queryLower.includes('pest') && queryLower.includes('rice')) {
        return knowledgeBase['pest control rice'][currentLanguage] || knowledgeBase['pest control rice']['en'];
    } else if (queryLower.includes('weather') || queryLower.includes('rain') || queryLower.includes('drought')) {
        return knowledgeBase['weather advice'][currentLanguage] || knowledgeBase['weather advice']['en'];
    } else {
        // Generic response
        return `Thank you for your question: "${query}". Based on your query${location ? ` from ${location}` : ''}${crop ? ` about ${crop}` : ''}${season ? ` during ${season} season` : ''}, I recommend consulting with your local agricultural officer for specific guidance. For immediate assistance, you can also contact the agricultural helpline at 1800-180-1551.`;
    }
}

function displayResponse(response, inputType) {
    const responseArea = document.getElementById('responseArea');
    
    responseArea.innerHTML = `
        <div class="response-content">
            <div class="response-header">
                <i class="fas fa-robot"></i>
                <h3>AI Agricultural Advisor</h3>
                <span class="response-type">${inputType.toUpperCase()}</span>
            </div>
            <div class="response-text">
                ${response}
            </div>
            <div class="response-actions">
                <button class="btn btn-secondary" onclick="escalateToExpert()">
                    <i class="fas fa-user-tie"></i>
                    Escalate to Expert
                </button>
                <button class="btn btn-primary" onclick="provideFeedback()">
                    <i class="fas fa-thumbs-up"></i>
                    Provide Feedback
                </button>
            </div>
        </div>
    `;
    
    // Scroll to response
    responseArea.scrollIntoView({ behavior: 'smooth' });
}

function showLoadingState() {
    const responseArea = document.getElementById('responseArea');
    
    responseArea.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
            <h3>Processing your query...</h3>
            <p>Our AI is analyzing your question and preparing the best response.</p>
        </div>
    `;
}

function escalateToExpert() {
    showNotification('Your query has been escalated to a local agricultural officer. You will receive a response within 24 hours.', 'success');
}

function provideFeedback() {
    const feedback = prompt('Please provide your feedback on this response:');
    if (feedback) {
        showNotification('Thank you for your feedback! It helps us improve our service.', 'success');
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-circle' : type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Navigation functions
function scrollToQuery() {
    document.getElementById('query').scrollIntoView({ behavior: 'smooth' });
}

function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// Add CSS for notifications and loading states
const additionalStyles = `
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        border-left: 4px solid #4caf50;
    }
    
    .notification-error {
        border-left: 4px solid #f44336;
    }
    
    .notification-info {
        border-left: 4px solid #2196f3;
    }
    
    .loading-state {
        text-align: center;
        padding: 40px;
    }
    
    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #2d7d32;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .response-content {
        background: #f8fafc;
        border-radius: 8px;
        padding: 30px;
    }
    
    .response-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #e2e8f0;
    }
    
    .response-header i {
        color: #2d7d32;
        font-size: 1.5rem;
    }
    
    .response-header h3 {
        margin: 0;
        color: #2d7d32;
    }
    
    .response-type {
        background: #2d7d32;
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
    }
    
    .response-text {
        font-size: 1.1rem;
        line-height: 1.6;
        color: #333;
        margin-bottom: 25px;
    }
    
    .response-actions {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }
    
    .response-actions .btn {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
`;

// Add the additional styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);