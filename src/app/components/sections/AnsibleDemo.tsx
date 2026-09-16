"use client";

import { useEffect, useState } from "react";
import { Check, Play, RotateCcw, Terminal } from "lucide-react";

const steps = [
  "Lire l’inventaire de démonstration",
  "Préparer la configuration",
  "Appliquer les tâches",
  "Contrôler l’état attendu",
];

export default function AnsibleDemo() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const [configured, setConfigured] = useState(false);
  const [repeatRun, setRepeatRun] = useState(false);
  const complete = progress === steps.length;

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setProgress((value) => Math.min(value + 1, steps.length));
    }, 650);
    return () => window.clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (running && complete) {
      setRunning(false);
      setConfigured(true);
    }
  }, [complete, running]);

  const launch = () => {
    setRepeatRun(configured);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(steps.length);
      setConfigured(true);
      return;
    }
    setProgress(0);
    setRunning(true);
  };

  return (
    <div
      className="ansible-demo"
      aria-label="Démonstration interactive d’automatisation"
    >
      <div className="demo-header">
        <Terminal size={17} />
        <span>LE MINI-LAB ANSIBLE</span>
        <span className="demo-pill">DÉMO</span>
      </div>
      <div className="demo-command">
        <span aria-hidden="true">$</span> ansible-playbook demo.yml
      </div>
      <ol className="demo-steps" aria-label="Étapes de la démonstration">
        {steps.map((step, index) => {
          const done = index < progress;
          const active = running && index === progress;
          const changed = done && !repeatRun && (index === 1 || index === 2);
          return (
            <li
              key={step}
              className={active ? "is-running" : done ? "is-done" : ""}
            >
              <span className="demo-step-icon" aria-hidden="true">
                {done ? <Check size={13} /> : <span>{index + 1}</span>}
              </span>
              <span>{step}</span>
              <span
                className={changed ? "demo-status is-changed" : "demo-status"}
              >
                {done ? (changed ? "changed" : "ok") : active ? "…" : "—"}
              </span>
            </li>
          );
        })}
      </ol>
      <div
        className="demo-result"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {complete
          ? repeatRun
            ? "Déjà conforme. Aucun changement nécessaire."
            : "Configuration appliquée. Relancez pour comparer !"
          : running
            ? "Le scénario se déroule…"
            : "Une commande, plusieurs étapes. À vous de jouer."}
      </div>
      <div className="demo-actions">
        <button
          className="button button-primary"
          onClick={launch}
          disabled={running || !ready}
        >
          {configured ? <RotateCcw size={15} /> : <Play size={15} />}
          {running
            ? "Exécution en cours…"
            : configured
              ? "Relancer la démo"
              : "Lancer la démo"}
        </button>
        {configured && !running && (
          <button
            className="demo-reset"
            onClick={() => {
              setProgress(0);
              setConfigured(false);
              setRepeatRun(false);
            }}
          >
            Réinitialiser
          </button>
        )}
      </div>
      <p className="demo-note">Simulation pédagogique dans votre navigateur.</p>
    </div>
  );
}
