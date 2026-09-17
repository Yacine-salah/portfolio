import Reveal from "../motion/Reveal";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { education } from "@/app/data/portfolio";

export default function Education() {
  return (
    <div className="container py-12">
      <div className="education-list">
        {education.map((edu) => (
          <Reveal key={edu.degree}>
            <article className="education-item">
              <BookOpen size={33} />
              <div>
                <h2>{edu.degree}</h2>
                <p className="school">{edu.school}</p>
                <p>
                  {edu.period} · {edu.details}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <a
        className="button button-primary mt-8"
        href="https://www.cloudskillsboost.google/public_profiles/c3800e34-0c7d-44d8-9ee7-418a32cb2389"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mon profil Google Skills <ArrowUpRight size={18} />
      </a>
    </div>
  );
}
