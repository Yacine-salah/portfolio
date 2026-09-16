import { ArrowUpRight, Users } from "lucide-react";
import AnsibleDemo from "./AnsibleDemo";
import { thalesExperience } from "@/app/data/thales";

export default function AnsibleProject() {
  return (
    <article className="ansible-project">
      <div className="ansible-project-copy">
        <p className="project-kicker">THALES / SYSOPS & AUTOMATISATION</p>
        <h3>
          L’infrastructure
          <br />
          prend son envol.
        </h3>
        <p>{thalesExperience.description}</p>
        <div className="ansible-team">
          <Users size={18} />
          <span>
            Une équipe de <strong>4 personnes</strong>
          </span>
        </div>
        <div className="project-tags">
          <span>Full Ansible</span>
          <span>Infrastructure</span>
          <span>Contrôle aérien</span>
        </div>
        <a className="text-link" href="#case-studies/thales">
          Découvrir le projet Thales <ArrowUpRight size={18} />
        </a>
      </div>
      <AnsibleDemo />
    </article>
  );
}
