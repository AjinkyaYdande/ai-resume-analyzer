import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "~/constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "ResumeMe"},
        {name: "description", content: "Best AI Resume Analyzer!"},
    ];
}

export default function Home() {
    return <main className="bg-[url('/images/bg-main2.svg')]">
        <Navbar/>
        <section className="main-section">
            <div className="page-heading">
                <h1>Track your Applications & Resume Ratings</h1>
                <h2>Review your submissions & check AI powered feedback.</h2>
            </div>
        </section>

        {resumes.length > 0 && (
            <div className="resumes-section">
                {resumes.map((resume) => (
                    <ResumeCard key={resume.id}/>
                ))}
            </div>
        )}
    </main>;
}
