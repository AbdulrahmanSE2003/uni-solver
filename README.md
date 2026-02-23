# 🎓 UniSolver - AI Assignment Helper

UniSolver is a modern, high-performance web application built with **Next.js 15** and **React 19** that helps university students tackle their assignments instantly. By leveraging the advanced multimodal capabilities of **Google Gemini 1.5 Flash**, UniSolver can directly read PDF assignment files, extract questions, and generate concise, human-like solutions.

## ✨ Key Features

- **🚀 Direct PDF Vision:** Upload PDF assignments (up to 10MB) directly to Gemini for instant, accurate analysis without intermediate text parsing.
- **🧠 Expert AI Solvers:** Powered by Google's Gemini 1.5 Flash preview model, fine-tuned with custom prompts to answer True/False, MCQs, and Essay questions just like a high-achieving student.
- **📄 Professional Export:** Instantly generate and download beautifully formatted `.docx` files containing your solutions, complete with a structured cover page (Student Name, Subject, ID).
- **🔒 Secure API Key Management:** Bring Your Own Key (BYOK) architecture. Users securely input their own Gemini API key to process assignments. A custom NextAuth integration allows admin-level overrides.
- **🎨 Stunning UI/UX:** Built with **Tailwind CSS v4** and **Framer Motion** for smooth, intelligent loading states and beautiful interactive micro-animations.
- **🌓 Dark Mode Ready:** Fully responsive design with native dark/light theme switching.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** Tailwind CSS v4, shadcn/ui
- **Animations:** Framer Motion
- **AI Integration:** `@google/generative-ai` (Gemini SDK)
- **Document Processing:** `docx`, `file-saver`
- **Authentication:** `next-auth` (v5 beta)
- **State Management:** React Context API (`SolveCTX`)
- **Icons & Toasts:** Lucide React, Sonner

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- pnpm (recommended), npm, or yarn
- A Google Gemini API Key from Google AI Studio.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbdulrahmanSE2003/uni-solver.git
   cd uni-solver
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add:
   ```env
   AUTH_SECRET="your-nextauth-secret" # Run `npx auth secret` to generate one
   GEMINI_API_KEY="your-gemini-api-key" # Optional (For admin fallback)
   ```

4. **Run the development server:**
   ```bash
   pnpm dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 📂 Project Structure

```text
uni-solver/
├── app/
│   ├── _components/   # Reusable UI components (Hero, Uploader, Navbar, etc.)
│   ├── _context/      # React Context providers
│   ├── api/           # Next.js API Routes (auth, Gemini AI integration)
│   ├── settings/      # Application settings and API Key management
│   └── solve/         # Main workspace for uploading and solving assignments
├── lib/               # Utility functions and encryption helpers
├── public/            # Static assets
└── ...config files    # Tailwind, ESLint, Next.js configs
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute to the project.

## 📝 License

This project is open-source and available under the MIT License.

---
*Built with ❤️ for students who want to study smarter, not harder.*
