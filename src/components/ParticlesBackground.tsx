"use client";

import React from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const handleInit = React.useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles-bg"
      init={handleInit}
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        background: { color: { value: "transparent" } },
        fullScreen: { enable: false },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 50, density: { enable: true, area: 900 } },
          color: { value: ["#6ea8fe", "#9bbdff"] },
          opacity: { value: 0.25, random: { enable: true, minimumValue: 0.15 }, animation: { enable: false } },
          size: { value: { min: 1, max: 2.5 } },
          links: { enable: true, color: "#6ea8fe", opacity: 0.15, distance: 140, width: 1 },
          move: { enable: true, speed: 1.0, outModes: { default: "out" } },
          shape: { type: "circle" },
        },
        interactivity: {
          events: { resize: true },
        },
      }}
    />
  );
}


