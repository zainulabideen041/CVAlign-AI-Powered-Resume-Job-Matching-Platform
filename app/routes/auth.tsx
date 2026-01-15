import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const meta = () => {
  const siteUrl = "https://jobwinner.vercel.app";

  return [
    { title: "Job Winner | Sign In - Access Your Resume Analysis" },
    {
      name: "description",
      content:
        "Sign in to Job Winner to access your resume analysis, ATS scores, and personalized feedback. Secure authentication powered by Puter.js.",
    },
    { name: "robots", content: "noindex, nofollow" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}/auth` },
    { property: "og:title", content: "Job Winner | Sign In" },
    {
      property: "og:description",
      content: "Sign in to access your resume analysis and feedback",
    },
    { property: "og:site_name", content: "Job Winner" },

    // Twitter Card
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "Job Winner | Sign In" },
    {
      name: "twitter:description",
      content: "Sign in to access your resume analysis",
    },
  ];
};

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Log In to Continue Your Job Journey</h2>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                <p>Signing you in...</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={auth.signOut}>
                    <p>Log Out</p>
                  </button>
                ) : (
                  <button className="auth-button" onClick={auth.signIn}>
                    <p>Log In</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
