import DepthSurface from "../motion/DepthSurface";
import Reveal from "../motion/Reveal";
import { ArrowUpRight, Blocks } from "lucide-react";

export default function PersonalProject({
  headingAs: Heading = "h2",
}: {
  headingAs?: "h2" | "h3";
}) {
  return (
    <Reveal>
      <DepthSurface
        as="a"
        className="personal-project"
        href="https://whytheblockchain.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="personal-project-icon" aria-hidden="true">
          <Blocks size={35} strokeWidth={1.4} />
        </div>
        <div className="personal-project-copy">
          <p className="project-kicker">PROJET PERSONNEL / TRANSMISSION</p>
          <Heading>Why the Blockchain</Heading>
          <p>
            Mon site pour comprendre la blockchain, les cryptomonnaies et le
            Web3. Des guides et des explications pour rendre ces technologies
            accessibles.
          </p>
        </div>
        <span className="personal-project-link">
          Explorer le site <ArrowUpRight size={20} />
          <span className="sr-only"> (nouvel onglet)</span>
        </span>
      </DepthSurface>
    </Reveal>
  );
}
