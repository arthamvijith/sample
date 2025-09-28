# KrishiMitra AI - Agricultural Advisory System

![KrishiMitra AI](https://img.shields.io/badge/KrishiMitra-AI%20Powered-green?style=for-the-badge&logo=agriculture)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

**KrishiMitra AI** is an AI-powered agricultural advisory system designed to bridge the gap between farmers and agricultural experts. It provides instant, accurate, and context-aware farming advice in regional languages, making expert-level agricultural knowledge accessible to every farmer.

## 🌾 Problem Statement

Farmers often face critical questions related to:
- **Pests & Diseases** - Crop protection and treatment
- **Weather Patterns** - Seasonal planning and risk management  
- **Input Management** - Fertilizers, seeds, and resources
- **Government Subsidies** - Schemes and financial support
- **Market Trends** - Pricing and demand insights

However, timely expert advice is rarely accessible. Agricultural officers and helplines are overburdened, and existing services don't scale to support individual needs across diverse regions, languages, and literacy levels.

## 🚀 Solution: Digital Krishi Officer

KrishiMitra AI acts as a **"Digital Krishi Officer"** - always available, always learning, and always farmer-first. It leverages advanced AI technology to provide:

### ✨ Core Features

- **🗣️ Natural Language Processing** - Ask questions in Malayalam or English
- **📸 Computer Vision** - Upload crop images for disease identification
- **🎤 Voice Interface** - Speak your queries naturally
- **🌍 Context Awareness** - Location, weather, and season-specific advice
- **🔄 Expert Escalation** - Complex queries forwarded to agricultural experts
- **📚 Continuous Learning** - Improves through farmer feedback and expert inputs

### 🎯 Expected Impact

- **Universal Access** - Makes expert farming advice instantly accessible
- **Bridge Communication** - Connects farmers with extension systems
- **Support Krishibhavans** - Automates first-level agricultural support
- **Multilingual Support** - Serves farmers in their native language
- **24/7 Availability** - No more waiting for office hours

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and suspense
- **TypeScript** - Type safety and better developer experience
- **TanStack Router** - Type-safe routing with code splitting
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Beautiful and accessible component library
- **Lucide React** - Comprehensive icon library

### AI & Backend (Planned)
- **OpenAI GPT** - Natural language processing
- **TensorFlow** - Computer vision for crop analysis
- **FastAPI** - High-performance backend API
- **PostgreSQL** - Agricultural knowledge database
- **Redis** - Caching and session management

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/krishimitra-ai.git
   cd krishimitra-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📱 Features Demo

### 🏠 Homepage
- Problem statement and solution overview
- Feature highlights with visual icons
- Impact metrics and testimonials
- Call-to-action for immediate engagement

### 💬 Query Interface (`/query`)
- **Text Input** - Type questions in Malayalam/English
- **Voice Recording** - Speak your farming questions
- **Image Upload** - Analyze crop photos for diseases
- **Context Settings** - Location, crop type, language preferences
- **Quick Questions** - Pre-defined common queries
- **Real-time Chat** - Interactive conversation with AI

### ℹ️ About Page (`/about`)
- Mission and vision statements
- Detailed technology explanation
- AI capabilities and features
- Future roadmap and development plans

### 📞 Contact Page (`/contact`)
- Multi-channel support options
- Regional support centers
- FAQ section with common questions
- Expert network information

## 🌐 Language Support

### Currently Supported
- **മലയാളം (Malayalam)** - Primary focus for Kerala farmers
- **English** - For broader accessibility

### Planned Languages
- हिंदी (Hindi)
- தமிழ் (Tamil)  
- తెలుగు (Telugu)
- ಕನ್ನಡ (Kannada)
- ગુજરાતી (Gujarati)

## 🎨 UI/UX Design

### Design Principles
- **Farmer-First** - Simple, intuitive interface
- **Accessibility** - Works across devices and literacy levels
- **Visual Clarity** - Clear iconography and typography
- **Responsive** - Mobile-first design approach
- **Performance** - Fast loading and smooth interactions

### Color Scheme
- **Primary Green** - Represents agriculture and growth
- **Accent Colors** - Blue (technology), Orange (alerts), Purple (premium)
- **Neutral Tones** - Gray scale for content and backgrounds

## 🔧 Project Structure

```
src/
├── components/
│   └── ui/              # ShadCN UI components
│       ├── button.tsx   # Reusable button component
│       ├── card.tsx     # Card layout component
│       ├── input.tsx    # Form input components
│       └── ...          # Other UI components
├── hooks/
│   └── use-toast.ts     # Toast notification hook
├── lib/
│   └── utils.ts         # Utility functions
├── routes/              # Page components
│   ├── __root.tsx       # Root layout with navigation
│   ├── index.tsx        # Homepage with features
│   ├── query.tsx        # AI query interface
│   ├── about.tsx        # About page
│   └── contact.tsx      # Contact page
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Deployment
npm run deploy       # Deploy to production (configured for your hosting)
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **Vercel** - Recommended for React applications
- **Netlify** - Easy static site deployment
- **AWS S3 + CloudFront** - Scalable cloud deployment
- **GitHub Pages** - Free hosting for open source projects

### Environment Variables
Create a `.env.local` file for environment-specific configuration:
```env
VITE_API_BASE_URL=https://api.krishimitra.ai
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key
```

## 🤝 Contributing

We welcome contributions from developers, agricultural experts, and farmers! Here's how you can help:

### Development Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Agricultural Expertise
- Review AI responses for accuracy
- Provide regional farming knowledge
- Suggest improvements for local contexts
- Validate pest and disease identifications

### Translation & Localization
- Translate interface to regional languages
- Provide agricultural terminology in local languages
- Cultural adaptation of farming advice

## 📊 Roadmap

### Phase 1: Foundation (Current)
- ✅ Basic web interface
- ✅ Malayalam language support
- ✅ Demo AI responses
- ✅ Responsive design

### Phase 2: AI Integration (Next 3 months)
- 🔄 OpenAI GPT integration
- 🔄 Image recognition for crop diseases
- 🔄 Voice input/output capabilities
- 🔄 Weather API integration

### Phase 3: Expert Network (6 months)
- 📋 Expert escalation system
- 📋 Video consultation features
- 📋 Regional expert onboarding
- 📋 Feedback and rating system

### Phase 4: Advanced Features (12 months)
- 📋 IoT sensor integration
- 📋 Predictive analytics
- 📋 Market price forecasting
- 📋 Supply chain optimization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Farmers of Kerala** - For inspiring this solution
- **Agricultural Scientists** - For domain expertise
- **Open Source Community** - For amazing tools and libraries
- **Government of India** - For digital agriculture initiatives

## 📞 Support

- **Email**: support@krishimitra.ai
- **Helpline**: 1800-180-1551 (Toll Free)
- **Website**: [https://krishimitra.ai](https://krishimitra.ai)
- **GitHub Issues**: [Report bugs and feature requests](https://github.com/yourusername/krishimitra-ai/issues)

---

**Made with ❤️ for farmers by developers who care about agriculture**

*"Technology should serve humanity, and agriculture feeds humanity. KrishiMitra AI bridges this gap."*