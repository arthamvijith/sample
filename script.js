// Global variables
let mediaRecorder;
let audioChunks = [];
let isRecording = false;
let currentLanguage = 'en';

// Language translations
const translations = {
    en: {
        'Ask Your Question': 'Ask Your Question',
        'Text': 'Text',
        'Voice': 'Voice',
        'Image': 'Image',
        'Ask Question': 'Ask Question',
        'Start Recording': 'Start Recording',
        'Stop Recording': 'Stop Recording',
        'Play': 'Play',
        'Submit': 'Submit',
        'Analyze Image': 'Analyze Image',
        'Your Farming Context': 'Your Farming Context',
        'Location': 'Location',
        'Primary Crop': 'Primary Crop',
        'Season': 'Season',
        'Enter your district/village': 'Enter your district/village',
        'Select crop': 'Select crop',
        'Select season': 'Select season',
        'AI Response': 'AI Response',
        'Digital Krishi Officer': 'Digital Krishi Officer',
        'Was this helpful?': 'Was this helpful?',
        'Escalate to Expert': 'Escalate to Expert'
    },
    ml: {
        'Ask Your Question': 'നിങ്ങളുടെ കാർഷിക ചോദ്യം ചോദിക്കുക',
        'Text': 'വാചകം',
        'Voice': 'ശബ്ദം',
        'Image': 'ചിത്രം',
        'Ask Question': 'ചോദ്യം ചോദിക്കുക',
        'Start Recording': 'റെക്കോർഡിംഗ് ആരംഭിക്കുക',
        'Stop Recording': 'റെക്കോർഡിംഗ് നിർത്തുക',
        'Play': 'പ്ലേ ചെയ്യുക',
        'Submit': 'സമർപ്പിക്കുക',
        'Analyze Image': 'ചിത്രം വിശകലനം ചെയ്യുക',
        'Your Farming Context': 'നിങ്ങളുടെ കാർഷിക സന്ദർഭം',
        'Location': 'സ്ഥലം',
        'Primary Crop': 'പ്രാഥമിക വിള',
        'Season': 'സീസൺ',
        'Enter your district/village': 'നിങ്ങളുടെ ജില്ല/ഗ്രാമം നൽകുക',
        'Select crop': 'വിള തിരഞ്ഞെടുക്കുക',
        'Select season': 'സീസൺ തിരഞ്ഞെടുക്കുക',
        'AI Response': 'AI പ്രതികരണം',
        'Digital Krishi Officer': 'ഡിജിറ്റൽ കൃഷി ഉദ്യോഗസ്ഥൻ',
        'Was this helpful?': 'ഇത് സഹായകരമായിരുന്നോ?',
        'Escalate to Expert': 'വിദഗ്ധനിലേക്ക് എസ്കലേറ്റ് ചെയ്യുക'
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    setupTabSwitching();
    setupLanguageSelector();
});

function initializeApp() {
    // Set initial language
    updateLanguage('en');
    
    // Initialize farmer context from localStorage
    loadFarmerContext();
    
    // Setup smooth scrolling for navigation links
    setupSmoothScrolling();
}

function setupEventListeners() {
    // Save farmer context on input change
    const contextInputs = ['farmerLocation', 'primaryCrop', 'season'];
    contextInputs.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('change', saveFarmerContext);
        }
    });
}

function setupTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            button.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

function setupLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }
}

function updateLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    updatePlaceholders(lang);
}

function updatePlaceholders(lang) {
    const placeholders = {
        en: {
            textQuery: "Which pesticide should I use for black spots on my banana leaves?",
            imageQuery: "Describe the problem you're seeing in the image...",
            farmerLocation: "Enter your district/village"
        },
        ml: {
            textQuery: "എന്റെ വാഴയിലെ ഇല കറുപ്പ് പുള്ളികൾക്ക് ഏത് കീടനാശിനി ഉപയോഗിക്കണം?",
            imageQuery: "ചിത്രത്തിൽ നിങ്ങൾ കാണുന്ന പ്രശ്നം വിവരിക്കുക...",
            farmerLocation: "നിങ്ങളുടെ ജില്ല/ഗ്രാമം നൽകുക"
        }
    };
    
    const textQuery = document.getElementById('textQuery');
    const imageQuery = document.getElementById('imageQuery');
    const farmerLocation = document.getElementById('farmerLocation');
    
    if (textQuery && placeholders[lang]) {
        textQuery.placeholder = placeholders[lang].textQuery;
    }
    if (imageQuery && placeholders[lang]) {
        imageQuery.placeholder = placeholders[lang].imageQuery;
    }
    if (farmerLocation && placeholders[lang]) {
        farmerLocation.placeholder = placeholders[lang].farmerLocation;
    }
}

function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navigation functions
function scrollToQuery() {
    document.getElementById('query').scrollIntoView({ behavior: 'smooth' });
}

function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// Query submission functions
function submitTextQuery() {
    const query = document.getElementById('textQuery').value.trim();
    if (!query) {
        showNotification('Please enter your question', 'error');
        return;
    }
    
    const context = getFarmerContext();
    processQuery(query, 'text', null, context);
}

function submitVoiceQuery() {
    if (!audioChunks.length) {
        showNotification('Please record your question first', 'error');
        return;
    }
    
    const context = getFarmerContext();
    processQuery('Voice query', 'voice', audioChunks, context);
}

function submitImageQuery() {
    const imageInput = document.getElementById('imageInput');
    const imageQuery = document.getElementById('imageQuery').value.trim();
    
    if (!imageInput.files[0]) {
        showNotification('Please upload an image first', 'error');
        return;
    }
    
    if (!imageQuery) {
        showNotification('Please describe the problem in the image', 'error');
        return;
    }
    
    const context = getFarmerContext();
    processQuery(imageQuery, 'image', imageInput.files[0], context);
}

// Voice recording functions
async function toggleRecording() {
    if (!isRecording) {
        await startRecording();
    } else {
        stopRecording();
    }
}

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        
        mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };
        
        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            audioChunks = [audioBlob];
            document.getElementById('playBtn').disabled = false;
            document.getElementById('submitVoiceBtn').disabled = false;
        };
        
        mediaRecorder.start();
        isRecording = true;
        
        const voiceBtn = document.getElementById('voiceBtn');
        const recordingIndicator = document.getElementById('recordingIndicator');
        
        voiceBtn.textContent = 'Stop Recording';
        voiceBtn.classList.add('recording');
        recordingIndicator.classList.add('active');
        
    } catch (error) {
        console.error('Error accessing microphone:', error);
        showNotification('Microphone access denied. Please allow microphone access.', 'error');
    }
}

function stopRecording() {
    if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        isRecording = false;
        
        const voiceBtn = document.getElementById('voiceBtn');
        const recordingIndicator = document.getElementById('recordingIndicator');
        
        voiceBtn.textContent = 'Start Recording';
        voiceBtn.classList.remove('recording');
        recordingIndicator.classList.remove('active');
        
        // Stop all tracks
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
}

function playRecording() {
    if (audioChunks.length > 0) {
        const audioBlob = audioChunks[0];
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
    }
}

// Image handling functions
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const previewImg = document.getElementById('previewImg');
            const imagePreview = document.getElementById('imagePreview');
            const uploadArea = document.getElementById('uploadArea');
            const submitImageBtn = document.getElementById('submitImageBtn');
            
            previewImg.src = e.target.result;
            imagePreview.style.display = 'block';
            uploadArea.style.display = 'none';
            submitImageBtn.disabled = false;
        };
        reader.readAsDataURL(file);
    }
}

function removeImage() {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const uploadArea = document.getElementById('uploadArea');
    const submitImageBtn = document.getElementById('submitImageBtn');
    
    imageInput.value = '';
    imagePreview.style.display = 'none';
    uploadArea.style.display = 'block';
    submitImageBtn.disabled = true;
}

// Farmer context functions
function getFarmerContext() {
    return {
        location: document.getElementById('farmerLocation').value,
        primaryCrop: document.getElementById('primaryCrop').value,
        season: document.getElementById('season').value,
        language: currentLanguage
    };
}

function saveFarmerContext() {
    const context = getFarmerContext();
    localStorage.setItem('farmerContext', JSON.stringify(context));
}

function loadFarmerContext() {
    const savedContext = localStorage.getItem('farmerContext');
    if (savedContext) {
        const context = JSON.parse(savedContext);
        document.getElementById('farmerLocation').value = context.location || '';
        document.getElementById('primaryCrop').value = context.primaryCrop || '';
        document.getElementById('season').value = context.season || '';
    }
}

// AI Response functions
function processQuery(query, type, data, context) {
    showLoadingOverlay();
    
    // Simulate AI processing delay
    setTimeout(() => {
        hideLoadingOverlay();
        showAIResponse(generateAIResponse(query, type, context));
    }, 2000);
}

function generateAIResponse(query, type, context) {
    // This is a mock response - in a real application, this would call an AI API
    const responses = {
        text: {
            en: `Based on your question about "${query}", here's my recommendation:

**Immediate Action:**
- For black spots on banana leaves, I recommend using Copper Oxychloride (3g/liter) or Mancozeb (2g/liter)
- Apply as a foliar spray every 10-15 days
- Ensure proper drainage to prevent waterlogging

**Prevention:**
- Maintain proper spacing between plants (2-3 meters)
- Remove and destroy infected leaves
- Apply organic mulch to improve soil health

**Additional Tips:**
- Monitor weather conditions - high humidity increases disease risk
- Consider using resistant varieties for future planting
- Maintain balanced nutrition with proper NPK ratios

Would you like more specific information about any of these recommendations?`,
            ml: `"${query}" എന്ന ചോദ്യത്തിന് അടിസ്ഥാനമാക്കി, എന്റെ ശുപാർശ:

**തൽക്ഷണ പ്രവർത്തനം:**
- വാഴയിലെ കറുപ്പ് പുള്ളികൾക്ക് കോപ്പർ ഓക്സിക്ലോറൈഡ് (3g/liter) അല്ലെങ്കിൽ മാൻകോസെബ് (2g/liter) ഉപയോഗിക്കുക
- 10-15 ദിവസത്തിലൊരിക്കൽ ഇലയിൽ തളിക്കുക
- വെള്ളം കെട്ടിനിൽക്കാതിരിക്കാൻ ശരിയായ ഡ്രെയിനേജ് ഉറപ്പാക്കുക

**തടയൽ:**
- സസ്യങ്ങൾക്കിടയിൽ ശരിയായ ഇടവേള (2-3 മീറ്റർ) നിലനിർത്തുക
- അണുബാധിത ഇലകൾ നീക്കം ചെയ്ത് നശിപ്പിക്കുക
- മണ്ണിന്റെ ആരോഗ്യം മെച്ചപ്പെടുത്താൻ ജൈവ മൾച്ച് ഉപയോഗിക്കുക

**കൂടുതൽ നുറുങ്ങുകൾ:**
- കാലാവസ്ഥ നിരീക്ഷിക്കുക - ഉയർന്ന ആർദ്രത രോഗ അപകടസാധ്യത വർദ്ധിപ്പിക്കുന്നു
- ഭാവിയിലെ നടീൽക്ക് പ്രതിരോധ ഇനങ്ങൾ പരിഗണിക്കുക
- ശരിയായ NPK അനുപാതങ്ങളുള്ള സന്തുലിത പോഷകാഹാരം നിലനിർത്തുക

ഈ ശുപാർശകളിൽ ഏതെങ്കിലും കുറിച്ച് കൂടുതൽ വിശദാംശങ്ങൾ വേണമെങ്കിൽ?`
        },
        voice: {
            en: "I've analyzed your voice query. Based on your question, I recommend consulting with a local agricultural officer for detailed guidance. Your query has been recorded and will be processed for better assistance.",
            ml: "നിങ്ങളുടെ ശബ്ദ ചോദ്യം വിശകലനം ചെയ്തു. നിങ്ങളുടെ ചോദ്യത്തിന് അടിസ്ഥാനമാക്കി, വിശദമായ മാർഗദർശനത്തിന് പ്രാദേശിക കാർഷിക ഉദ്യോഗസ്ഥനുമായി കൂടിയാലോചിക്കാൻ ഞാൻ ശുപാർശ ചെയ്യുന്നു."
        },
        image: {
            en: "I've analyzed the image you uploaded. Based on the visual symptoms, this appears to be a fungal infection. I recommend immediate treatment with appropriate fungicides and cultural practices to prevent further spread.",
            ml: "നിങ്ങൾ അപ്ലോഡ് ചെയ്ത ചിത്രം വിശകലനം ചെയ്തു. ദൃശ്യ ലക്ഷണങ്ങളെ അടിസ്ഥാനമാക്കി, ഇത് ഒരു ഫംഗൽ അണുബാധയാണെന്ന് തോന്നുന്നു. കൂടുതൽ വ്യാപനം തടയാൻ ഉചിതമായ ഫംഗിസൈഡുകളും സാംസ്കാരിക പരിശീലനങ്ങളും ഉപയോഗിച്ച് ഉടനടി ചികിത്സ ശുപാർശ ചെയ്യുന്നു."
        }
    };
    
    return responses[type] ? responses[type][context.language] || responses[type].en : "I'm sorry, I couldn't process your query. Please try again.";
}

function showAIResponse(response) {
    const responseSection = document.getElementById('response');
    const responseContent = document.getElementById('responseContent');
    const responseTime = document.getElementById('responseTime');
    
    responseContent.innerHTML = formatResponse(response);
    responseTime.textContent = new Date().toLocaleTimeString();
    
    responseSection.style.display = 'block';
    responseSection.scrollIntoView({ behavior: 'smooth' });
}

function formatResponse(response) {
    // Convert line breaks and format the response
    return response.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// Utility functions
function showLoadingOverlay() {
    document.getElementById('loadingOverlay').style.display = 'flex';
}

function hideLoadingOverlay() {
    document.getElementById('loadingOverlay').style.display = 'none';
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#e53e3e' : '#2d7d32'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Response actions
function copyResponse() {
    const responseContent = document.getElementById('responseContent');
    const text = responseContent.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Response copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy response', 'error');
    });
}

function speakResponse() {
    const responseContent = document.getElementById('responseContent');
    const text = responseContent.textContent;
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = currentLanguage === 'ml' ? 'ml-IN' : 'en-US';
        speechSynthesis.speak(utterance);
    } else {
        showNotification('Text-to-speech not supported in this browser', 'error');
    }
}

function submitFeedback(type) {
    showNotification(`Thank you for your feedback! (${type})`, 'success');
    
    // In a real application, this would send feedback to the server
    console.log(`Feedback submitted: ${type}`);
}

function escalateToExpert() {
    const context = getFarmerContext();
    const query = document.getElementById('textQuery').value || 'Voice/Image query';
    
    showNotification('Your query has been escalated to a local agricultural officer. You will be contacted within 24 hours.', 'success');
    
    // In a real application, this would send the escalation request to the server
    console.log('Escalation request:', { query, context });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);