import type { Route } from "./+types/landing";
import LandingNavbar from "~/components/LandingNavbar";
import Footer from "~/components/Footer";
import { Link, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export function meta({}: Route.MetaArgs) {
  const siteUrl = "https://jobwinner.vercel.app";
  const title =
    "Job Winner - Free AI Resume Analyzer & ATS Score Checker | Resume Builder";
  const description =
    "Free AI-powered resume analyzer and ATS score checker. Get instant feedback on your resume, optimize for Applicant Tracking Systems, match with job descriptions, and improve your resume score. Best online resume scanner and CV analyzer tool.";
  const keywords =
    // Brand & Core Keywords
    "job winner, jobwinner, jobwinner ai, ai resume analyzer, job winner app, job winner resume, " +
    // Resume Analysis Keywords
    "resume analyzer, AI resume analyzer, free resume analyzer, online resume analyzer, best resume analyzer, resume analysis tool, resume checker, resume scanner, resume reviewer, resume evaluator, resume grader, resume tester, resume validator, instant resume analyzer, professional resume analyzer, smart resume analyzer, " +
    // ATS Keywords
    "ATS score checker, ATS resume checker, ATS optimization, ATS friendly resume, ATS compatible resume, applicant tracking system, ATS scanner, ATS test, check ATS score, improve ATS score, ATS resume score, beat ATS, pass ATS, ATS resume optimization, ATS keyword scanner, ATS resume parser, " +
    // CV Keywords
    "CV analyzer, CV checker, CV scanner, CV optimizer, CV builder, CV maker, CV review, CV feedback, CV grader, CV score, CV analysis, professional CV, CV improvement, CV tips, " +
    // Resume Building Keywords
    "resume builder, resume maker, resume creator, resume generator, resume designer, resume template, resume format, resume layout, resume structure, professional resume, modern resume, creative resume, " +
    // Job Search Keywords
    "job application, job search, job hunting, career search, employment search, job seeker, job finder, career tools, job tools, employment tools, career development, job interview, interview preparation, " +
    // Resume Optimization Keywords
    "resume optimization, optimize resume, resume improvement, improve resume, resume enhancement, resume tips, resume advice, resume suggestions, resume feedback, resume recommendations, resume help, resume guide, resume writing, resume writing tips, resume writing service, " +
    // Keyword & Matching Keywords
    "resume keywords, keyword optimization, keyword scanner, keyword matcher, job description match, job match, resume match, skills match, qualifications match, experience match, " +
    // Scoring & Rating Keywords
    "resume score, resume rating, resume ranking, resume evaluation, resume assessment, resume performance, resume quality, resume effectiveness, " +
    // Free & Online Keywords
    "free resume checker, free ATS checker, free resume analyzer, free CV analyzer, online resume tool, web resume analyzer, cloud resume tool, " +
    // AI & Technology Keywords
    "AI resume review, AI powered resume, artificial intelligence resume, machine learning resume, automated resume checker, smart resume tool, intelligent resume analyzer, " +
    // Career Keywords
    "career advice, career tips, career counseling, career guidance, career coach, job coach, resume coach, career advancement, professional development, " +
    // Action Keywords
    "upload resume, analyze resume, check resume, scan resume, review resume, test resume, evaluate resume, grade resume, improve resume, optimize resume, fix resume, enhance resume, " +
    // Industry Keywords
    "tech resume, IT resume, software engineer resume, developer resume, marketing resume, sales resume, finance resume, healthcare resume, engineering resume, " +
    // Format Keywords
    "resume format checker, resume formatting, PDF resume, resume PDF, resume document, resume file, resume upload, " +
    // Comparison Keywords
    "best resume tool, top resume analyzer, leading resume checker, #1 resume scanner, resume tool comparison, " +
    // Problem-Solution Keywords
    "resume not getting interviews, resume rejected, improve interview chances, get more interviews, land dream job, job application success, resume success, " +
    // Long-tail Keywords
    "how to check ATS score, how to optimize resume for ATS, how to improve resume score, how to pass ATS, how to make ATS friendly resume, what is ATS score, resume ATS compatibility, " +
    // Alternative Spellings & Variations
    "résumé analyzer, résumé checker, résumé builder, curriculum vitae, CV analysis, resume analyse, resume analyser";

  return [
    // Primary Meta Tags
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "author", content: "Job Winner" },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { name: "googlebot", content: "index, follow" },
    { name: "bingbot", content: "index, follow" },

    // Canonical URL
    { tagName: "link", rel: "canonical", href: siteUrl },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: siteUrl },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${siteUrl}/images/logo.png` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Job Winner - AI Resume Analyzer" },
    { property: "og:site_name", content: "Job Winner" },
    { property: "og:locale", content: "en_US" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: siteUrl },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${siteUrl}/images/logo.png` },
    { name: "twitter:image:alt", content: "Job Winner - AI Resume Analyzer" },

    // Additional SEO Meta Tags
    { name: "application-name", content: "Job Winner" },
    { name: "apple-mobile-web-app-title", content: "Job Winner" },
    { name: "theme-color", content: "#4F46E5" },
    { name: "msapplication-TileColor", content: "#4F46E5" },

    // Geo & Language
    { name: "language", content: "English" },
    { name: "revisit-after", content: "7 days" },
    { name: "rating", content: "General" },

    // Structured Data - JSON-LD for Rich Snippets
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Job Winner",
        alternateName: ["Resume Analyzer", "ATS Score Checker", "CV Analyzer"],
        url: siteUrl,
        description: description,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "10000",
          bestRating: "5",
          worstRating: "1",
        },
        featureList: [
          "AI-Powered Resume Analysis",
          "ATS Score Checking",
          "Job Description Matching",
          "Resume Optimization Suggestions",
          "Instant Feedback",
          "Free to Use",
        ],
      },
    },
    // Organization Schema
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Job Winner",
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
        sameAs: [],
      },
    },
    // FAQ Schema for Featured Snippets
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is an ATS score checker?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "An ATS score checker analyzes your resume to determine how well it will perform with Applicant Tracking Systems used by employers. Job Winner provides instant ATS compatibility scores and suggestions to improve your resume's chances of passing automated screening.",
            },
          },
          {
            "@type": "Question",
            name: "How does the AI resume analyzer work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Job Winner uses advanced AI to analyze your resume's content, structure, keywords, and formatting. It compares your resume against job descriptions and ATS requirements, then provides actionable feedback to help you improve your resume and increase your chances of landing interviews.",
            },
          },
          {
            "@type": "Question",
            name: "Is Job Winner free to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Job Winner is completely free to use. Upload your resume, add a job description, and get instant AI-powered feedback without any cost or credit card required.",
            },
          },
        ],
      },
    },
  ];
}

// Feature data
const features = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Smart Resume Analysis",
    description:
      "Our AI deeply analyzes your resume structure, content, and formatting to identify areas for improvement.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "AI-Powered Insights",
    description:
      "Get intelligent suggestions powered by advanced AI to make your resume stand out from the competition.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "ATS Score Optimization",
    description:
      "Ensure your resume passes Applicant Tracking Systems with our comprehensive ATS compatibility check.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Job Match Analysis",
    description:
      "Compare your resume against specific job descriptions to see how well you match the requirements.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Instant Results",
    description:
      "Get comprehensive feedback in seconds, not hours. Our AI works fast so you can improve faster.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Secure & Private",
    description:
      "Your resume data is encrypted and never shared. We prioritize your privacy and data security.",
    gradient: "from-rose-500 to-pink-500",
  },
];

// How it works steps
const steps = [
  {
    number: "01",
    title: "Upload Your Resume",
    description:
      "Simply drag and drop your PDF resume or click to upload. We support all standard resume formats.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&auto=format",
  },
  {
    number: "02",
    title: "Add Job Details",
    description:
      "Paste the job description you're targeting. Our AI will analyze how well your resume matches.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&auto=format",
  },
  {
    number: "03",
    title: "Get AI Feedback",
    description:
      "Receive instant, actionable feedback with scores, suggestions, and specific improvements.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      "Job Winner helped me land my dream job at a Fortune 500 company. The AI feedback was incredibly detailed and actionable.",
    author: "Sarah Chen",
    role: "Software Engineer",
    company: "Tech Company",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format",
  },
  {
    quote:
      "I went from getting no callbacks to landing 5 interviews in a week. The ATS optimization feature is a game-changer.",
    author: "Michael Rodriguez",
    role: "Product Manager",
    company: "Startup Inc",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format",
  },
  {
    quote:
      "As a career counselor, I recommend Job Winner to all my clients. It's like having an expert resume reviewer available 24/7.",
    author: "Emily Watson",
    role: "Career Counselor",
    company: "Career Services",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format",
  },
];

export default function Landing() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  const handleCTAClick = () => {
    if (auth.isAuthenticated) {
      navigate("/upload");
    } else {
      navigate("/auth?next=/upload");
    }
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-40 right-40 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 font-medium text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                AI-Powered Resume Analysis
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent">
                  Land Your Dream Job
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  With AI Precision
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Get instant, intelligent feedback on your resume. Optimize for
                ATS systems, match job requirements, and stand out from the
                competition.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleCTAClick}
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-full hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1"
                >
                  <span>Upload & Analyze Now</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </div>
                </button>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold text-lg rounded-full border-2 border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  See How It Works
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap items-center gap-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&auto=format"
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format"
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&auto=format"
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  </div>
                  <span className="text-sm text-gray-600">
                    <strong className="text-gray-900">10,000+</strong> resumes
                    analyzed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    <strong className="text-gray-900">4.9/5</strong> rating
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative hidden lg:block animate-fade-in-up animation-delay-300">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=600&fit=crop&auto=format"
                    alt="Resume Analysis"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                {/* Floating score card */}
                <div className="absolute -left-10 top-20 bg-white rounded-2xl shadow-xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">ATS Score</p>
                      <p className="text-2xl font-bold text-gray-900">92%</p>
                    </div>
                  </div>
                </div>

                {/* Floating improvement card */}
                <div className="absolute -right-5 bottom-32 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-2000">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Match Rate</p>
                      <p className="text-2xl font-bold text-gray-900">+45%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#features"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-indigo-600 transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Perfect Your Resume
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Our AI-powered platform provides comprehensive analysis and
              actionable feedback to help you create a resume that gets results.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center text-indigo-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Feedback in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Three Simple Steps
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Our streamlined process makes it easy to improve your resume and
              increase your chances of landing interviews.
            </p>
          </div>

          {/* Steps */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-[calc(50%+100px)] w-[calc(100%-100px)] h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300"></div>
                )}

                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  {/* Step number */}
                  <div className="text-6xl font-bold bg-gradient-to-br from-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
                    {step.number}
                  </div>

                  {/* Image */}
                  <div className="relative mb-6 rounded-2xl overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button
              onClick={handleCTAClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              <span>Start Analyzing Now</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-gray-900 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Loved by{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Job Seekers
              </span>{" "}
              Worldwide
            </h2>
            <p className="text-xl text-gray-400">
              See what our users have to say about their experience with CV
              Align.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-colors duration-300"
              >
                {/* Quote */}
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-indigo-500/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full border-2 border-indigo-500/50"
                  />
                  <div>
                    <p className="text-white font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of job seekers who have improved their resumes and
            landed more interviews with Job Winner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCTAClick}
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-indigo-600 font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-black/25 transition-all duration-300 hover:-translate-y-1"
            >
              <span>Get Started for Free</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          {/* Trust badge */}
          <div className="mt-10 flex items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Free to use</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Instant results</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
