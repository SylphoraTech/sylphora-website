"use client";

import React from "react";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export type SparklesCoreProps = {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
};

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.2,
  particleDensity = 100,
  className = "",
  particleColor = "#ffffff",
}) => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={particlesInit}
      className={className}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: background },
        },
        particles: {
          number: {
            value: particleDensity,
            density: { enable: true, area: 800 },
          },
          color: { value: particleColor },
          size: { value: { min: minSize, max: maxSize } },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
        },
      }}
    />
  );
};
