import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeMe" },
    { name: "description", content: "Best AI Resume Analyzer!" },
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
  </main>;
}
