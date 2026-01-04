<div align="center">
  <img src="public/images/logo.svg" alt="CV Align Logo" width="80" height="80">
  
  <h1>CV Align</h1>
  <p><strong>AI-Powered Resume Analyzer for Job Seekers</strong></p>
  
  <p>
    <a href="https://cvalign.onrender.com">
      <img src="https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-4c84f3?style=for-the-badge" alt="Live Demo">
    </a>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/React_Router-7.5-CA4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router">
    <img src="https://img.shields.io/badge/Puter.js-Cloud-181758?style=flat-square" alt="Puter.js">
  </p>
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**CV Align** is an intelligent resume analyzer that helps job seekers optimize their resumes for specific job positions. Using advanced AI, it provides:

- **ATS (Applicant Tracking System) Score** - See how well your resume matches the job description
- **Personalized Feedback** - Get actionable suggestions to improve your resume
- **Skill Gap Analysis** - Identify missing keywords and skills
- **Formatting Recommendations** - Ensure your resume is ATS-friendly

Simply upload your resume, provide the job details, and receive instant AI-powered insights to land your dream job!

---

## 🌐 Live Demo

**Experience CV Align in action:**

<p align="center">
  <a href="https://cvalign.onrender.com">
    <img src="https://img.shields.io/badge/🔗_https://cvalign.onrender.com-Visit_Now-success?style=for-the-badge" alt="Live Demo">
  </a>
</p>

---

## ✨ Features

| Feature                        | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
| 🔐 **Seamless Authentication** | Browser-based auth with Puter.js - no passwords to remember |
| 📄 **Resume Upload**           | Support for PDF resumes with automatic processing           |
| 🤖 **AI Analysis**             | Powered by Claude AI for intelligent resume evaluation      |
| 📊 **ATS Scoring**             | Get a compatibility score for any job listing               |
| 💡 **Smart Feedback**          | Receive detailed suggestions for improvement                |
| 🎨 **Modern UI**               | Clean, responsive design that works on all devices          |
| ☁️ **Cloud Storage**           | Your resumes are securely stored in the cloud               |
| 🚀 **Fast & Lightweight**      | Built with Vite for blazing-fast performance                |

---

## 🛠️ Tech Stack

### Frontend

- **[React 19](https://react.dev/)** - UI library with the latest features
- **[React Router 7](https://reactrouter.com/)** - Modern routing with nested routes & SSR support
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better DX
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management

### Backend Services (via Puter.js)

- **[Puter.js](https://puter.com/)** - Serverless cloud platform providing:
  - 🔑 Authentication
  - 📁 File Storage
  - 🗄️ Key-Value Database
  - 🤖 AI Integration (Claude, GPT, etc.)

### Build Tools

- **[Vite](https://vite.dev/)** - Next-generation frontend tooling
- **[pdfjs-dist](https://mozilla.github.io/pdf.js/)** - PDF to image conversion

---

## 📁 Project Structure

```
cv-align/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Navigation bar with auth
│   │   ├── FileUploader.tsx # Drag & drop file upload
│   │   ├── Details.tsx      # Resume analysis display
│   │   └── ...
│   ├── lib/
│   │   ├── puter.ts         # Puter.js SDK integration
│   │   ├── pdf2img.ts       # PDF conversion utility
│   │   └── utils.ts         # Helper functions
│   ├── routes/
│   │   ├── home.tsx         # Landing page
│   │   ├── auth.tsx         # Authentication page
│   │   ├── upload.tsx       # Resume upload & analysis
│   │   └── resume.tsx       # Analysis results page
│   ├── app.css              # Global styles
│   └── root.tsx             # App entry point
├── constants/               # App constants & prompts
├── public/                  # Static assets
├── types/                   # TypeScript type definitions
├── Dockerfile               # Container configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v18 or higher)
- **[npm](https://www.npmjs.com/)** or **[yarn](https://yarnpkg.com/)**
- **[Git](https://git-scm.com/)**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/cv-align.git
   cd cv-align
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:5173](http://localhost:5173)

---

## 📖 Usage

### Step 1: Sign In

Click "Upload Resume" and sign in with your Puter account. No additional registration required!

### Step 2: Enter Job Details

- **Company Name** - The company you're applying to
- **Job Title** - The position you're targeting
- **Job Description** - Paste the full job listing

### Step 3: Upload Resume

Drag and drop your PDF resume or click to browse files.

### Step 4: Get Analysis

Click "Analyze Resume" and wait for the AI to process your resume. You'll receive:

- Overall ATS compatibility score
- Section-by-section feedback
- Keyword suggestions
- Improvement recommendations

---

## 🐳 Deployment

### Using Docker

```bash
# Build the image
docker build -t cv-align .

# Run the container
docker run -p 3000:3000 cv-align
```

### Using Render

1. Connect your GitHub repository to [Render](https://render.com)
2. Select "Web Service"
3. Configure build command: `npm run build`
4. Configure start command: `npm run start`
5. Deploy!

### Manual Deployment

```bash
# Build for production
npm run build

# Start the production server
npm run start
```

---

## 📸 Screenshots

<div align="center">
  <table>
    <tr>
      <td align="center">
        <strong>Home Page</strong><br>
        <em>Modern landing page with call-to-action</em>
      </td>
      <td align="center">
        <strong>Upload Page</strong><br>
        <em>Simple form with drag & drop upload</em>
      </td>
    </tr>
    <tr>
      <td align="center">
        <strong>Analysis Results</strong><br>
        <em>Detailed AI-powered feedback</em>
      </td>
      <td align="center">
        <strong>Mobile View</strong><br>
        <em>Fully responsive design</em>
      </td>
    </tr>
  </table>
</div>

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commit messages
- Ensure all code is properly formatted
- Test your changes before submitting

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Puter.js](https://puter.com/) for the amazing serverless platform
- [Anthropic](https://anthropic.com/) for Claude AI
- [Tailwind CSS](https://tailwindcss.com/) for the beautiful styling utilities
- [React Team](https://react.dev/) for the fantastic UI library

---

<div align="center">
  <p>
    <strong>Made with ❤️ for Job Seekers</strong>
  </p>
  <p>
    <a href="https://cvalign.onrender.com">Live Demo</a> •
    <a href="#-getting-started">Get Started</a> •
    <a href="#-contributing">Contribute</a>
  </p>
  
  <br>
  
  ⭐ Star this repo if you found it helpful!
</div>
