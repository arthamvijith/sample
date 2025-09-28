# Digital Krishi Officer - AI-Powered Agricultural Advisory System

## Overview

Digital Krishi Officer is an AI-powered agricultural advisory system designed to bridge the gap between farmers and expert agricultural knowledge. The system provides instant, context-aware advice in multiple languages, with special focus on Malayalam, making expert-level farming advice accessible to all farmers.

## Problem Statement

Farmers often face critical questions related to pests, weather, inputs, subsidies, and market trends—but timely expert advice is rarely accessible. Agri officers and helplines are overburdened, and existing services don't scale to support individual needs across diverse regions, languages, and literacy levels.

## Solution

This AI-powered advisory system allows farmers to ask queries in their own language (preferably Malayalam) and receive accurate, context-aware answers instantly.

## Core Features

### 🌐 Natural Language Query Handling
- Farmers can ask questions via voice or text in Malayalam and other regional languages
- Example: "എന്റെ വാഴയിലെ ഇല കറുപ്പ് പുള്ളികൾക്ക് ഏത് കീടനാശിനി ഉപയോഗിക്കണം?"

### 🎤 Multimodal Inputs
- **Text Input**: Direct text queries with Malayalam support
- **Voice Recording**: Voice-to-text functionality for hands-free queries
- **Image Upload**: Upload photos of diseased crops for visual analysis

### 🧠 AI-Powered Knowledge Engine
- Uses advanced LLMs and fine-tuned agricultural datasets
- Provides reliable, tailored answers drawing from:
  - Local crop calendars
  - Pest advisories
  - Weather patterns
  - Scheme guidelines

### 📍 Context Awareness
- Factors in farmer's location, crop type, season, and history
- Provides personalized advice based on local conditions
- Stores farmer context for future queries

### 👨‍🌾 Expert Escalation System
- Complex or unclear queries are escalated to local agri officers
- Full context and suggestions are provided to experts
- Ensures no query goes unanswered

### 📈 Learning Loop
- Continuously improves using real queries and feedback
- Incorporates local expert inputs
- Adapts to regional farming practices

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with responsive design
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)
- **Audio**: Web Audio API for voice recording
- **Storage**: LocalStorage for farmer context
- **Languages**: English, Malayalam, Hindi, Tamil

## File Structure

```
/workspace/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Features Implementation

### 1. Multi-language Support
- Dynamic language switching between English, Malayalam, Hindi, and Tamil
- Translated placeholders and interface elements
- Language-specific AI responses

### 2. Query Interface
- **Text Tab**: Textarea for written queries with Malayalam placeholder
- **Voice Tab**: Voice recording with visual feedback and playback
- **Image Tab**: Drag-and-drop image upload with preview

### 3. Farmer Context System
- Location input (district/village)
- Primary crop selection
- Season selection (Kharif, Rabi, Zaid)
- Persistent storage using localStorage

### 4. AI Response System
- Mock AI responses with realistic agricultural advice
- Context-aware recommendations
- Formatted response display with action buttons

### 5. Feedback & Learning
- Thumbs up/down feedback system
- Expert escalation functionality
- Response copying and text-to-speech

## Usage Instructions

### For Farmers

1. **Set Your Context**: Enter your location, primary crop, and current season
2. **Choose Input Method**:
   - **Text**: Type your question in Malayalam or English
   - **Voice**: Click to record your question
   - **Image**: Upload a photo of your crop problem
3. **Submit Query**: Click the appropriate submit button
4. **Review Response**: Read the AI-generated advice
5. **Provide Feedback**: Rate the response or escalate to an expert

### Example Queries

**Malayalam:**
- "എന്റെ വാഴയിലെ ഇല കറുപ്പ് പുള്ളികൾക്ക് ഏത് കീടനാശിനി ഉപയോഗിക്കണം?"
- "എന്റെ നെല്ലിന് എന്ത് രോഗമാണ് ബാധിച്ചിരിക്കുന്നത്?"

**English:**
- "Which pesticide should I use for black spots on my banana leaves?"
- "What disease is affecting my rice crop?"

## Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Future Enhancements

### Phase 2 Features
- Integration with real AI/ML APIs
- Weather data integration
- Market price information
- Government scheme notifications
- Farmer community features

### Phase 3 Features
- Mobile app development
- Offline functionality
- SMS/WhatsApp integration
- IoT sensor integration
- Advanced analytics dashboard

## Expected Impact

- **Accessibility**: Makes expert-level farming advice instantly accessible to all farmers
- **Scalability**: Bridges the communication gap between farmers and extension systems
- **Support**: Supports Krishibhavans and Agri Departments by automating first-level support
- **Learning**: Creates a continuous learning loop for agricultural knowledge

## Getting Started

1. Open `index.html` in a web browser
2. Navigate through the sections using the navigation menu
3. Try the different query methods (text, voice, image)
4. Set your farming context for personalized responses
5. Experience the AI-powered agricultural advisory system

## Contributing

This is a demonstration project showcasing the concept of a Digital Krishi Officer. For production deployment, consider:

- Integration with real AI/ML services
- Backend API development
- Database implementation
- Security enhancements
- Performance optimization

## License

This project is created for demonstration purposes. Please ensure proper licensing for production use.

---

**Digital Krishi Officer** - Your AI-powered agricultural advisor, always available, always learning, and always farmer-first.