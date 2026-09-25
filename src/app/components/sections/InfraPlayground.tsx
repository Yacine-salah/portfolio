"use client";
import { useEffect, useState, type PointerEvent } from "react";
import { m, useSpring } from "motion/react";
import {
  ArrowUpRight,
  Box,
  GitBranch,
  Layers3,
  Network,
  ScanLine,
  Server,
} from "lucide-react";
import { useMotionSettings } from "../motion/MotionProvider";
import { motionTokens, springs } from "@/app/lib/motion";

const disciplines = [
  {
    name: "Cloud",
    number: "01",
    title: "Dessiner les fondations.",
    description:
      "Des architectures GCP & OCI pensées pour les usages, de l’infrastructure au déploiement.",
    layers: ["RÉSEAU", "COMPUTE", "DONNÉES"],
    icon: Network,
    stack: "GCP · OCI · TERRAFORM",
  },
  {
    name: "DevOps",
    number: "02",
    title: "Du commit à la production.",
    description:
      "Des pipelines reproductibles pour livrer sereinement et avancer ensemble.",
    layers: ["CODE", "CI / CD", "RELEASE"],
    icon: GitBranch,
    stack: "GITLAB · DOCKER · KUBERNETES",
  },
  {
    name: "SysOps",
    number: "03",
    title: "Garder la maîtrise.",
    description:
      "Automatiser la configuration et rendre les infrastructures plus simples à opérer.",
    layers: ["INVENTAIRE", "PLAYBOOKS", "CONTRÔLE"],
    icon: Server,
    stack: "ANSIBLE · LINUX · OBSERVABILITÉ",
  },
];
export default function InfraPlayground() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const { enabled, pointerEffects } = useMotionSettings();
  const rotateX = useSpring(0, springs.gentle);
  const rotateY = useSpring(0, springs.gentle);
  const current = disciplines[active];
  const Icon = current.icon;
  useEffect(() => {
    if (!pointerEffects) {
      rotateX.jump(0);
      rotateY.jump(0);
    }
  }, [pointerEffects, rotateX, rotateY]);
  function move(event: PointerEvent<HTMLDivElement>) {
    if (!pointerEffects || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    rotateY.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 14);
    rotateX.set((0.5 - (event.clientY - bounds.top) / bounds.height) * 8);
  }
  return (
    <div className="infra-playground" data-discipline={active}>
      <div className="playground-top">
        <span>SOUS LE CAPOT</span>
        <span>FIG. 0{active + 1}</span>
      </div>
      <div
        className="infra-stage"
        onPointerMove={move}
        onPointerLeave={() => {
          rotateX.set(0);
          rotateY.set(0);
        }}
        onPointerCancel={() => {
          rotateX.set(0);
          rotateY.set(0);
        }}
      >
        <span className="stage-coordinate" aria-hidden="true">
          YS / SYSTEMS
        </span>
        <m.div
          className="infra-object"
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          aria-hidden="true"
        >
          <div className="infra-orbit" />
          {current.layers.map((layer, index) => (
            <m.div
              key={index}
              className={`infra-level level-${index}`}
              initial={false}
              animate={{
                y: expanded ? -index * 58 - 42 : -index * 18 - 80,
                x: active === 1 && expanded ? (index - 1) * 20 : 0,
              }}
              transition={{
                duration: enabled ? motionTokens.duration.slow : 0,
                ease: motionTokens.easing.smooth,
              }}
            >
              <div className="infra-plane">
                <div className="plane-top">
                  <span>0{index + 1}</span>
                  <span className="plane-dot" />
                </div>
                {index === 2 ? (
                  <Icon className="plane-icon" size={54} strokeWidth={1} />
                ) : index === 1 ? (
                  <Box className="plane-icon" size={52} strokeWidth={1} />
                ) : (
                  <ScanLine className="plane-icon" size={52} strokeWidth={1} />
                )}
                <span className="plane-label">{layer}</span>
                <span className="plane-edge" />
              </div>
            </m.div>
          ))}
        </m.div>
        <button
          className="explode-button"
          onClick={() => setExpanded(!expanded)}
          aria-pressed={expanded}
        >
          <Layers3 size={14} />
          {expanded ? "Assembler" : "Décomposer"}
          <span className="sr-only"> les couches</span>
        </button>
      </div>
      <div
        className="discipline-controls"
        role="group"
        aria-label="Explorer mes disciplines"
      >
        {disciplines.map((item, index) => (
          <button
            key={item.name}
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            aria-controls="discipline-description"
          >
            <span>{item.number}</span>
            {item.name}
            <ArrowUpRight size={15} />
          </button>
        ))}
      </div>
      <div
        id="discipline-description"
        className="discipline-description"
        aria-live="polite"
        aria-atomic="true"
      >
        <h2>{current.title}</h2>
        <p>{current.description}</p>
        <span>{current.stack}</span>
      </div>
    </div>
  );
}
