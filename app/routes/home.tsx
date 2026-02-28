import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeAI" },
    { name: "description", content: "Your big brother and mentor for dream job!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading">
          <h1>Track your Application and Resume Ratings</h1>
          <h2>Review your submission and check AI-powered feedback</h2>
        </div>
        {resumes.length > 0 && (
          <div className="resume-section">
            {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
      
     
      
    </main>
  );
}