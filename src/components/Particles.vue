<template>
  <Particles
      id="tsparticles"
      :options="options"
      :particlesInit="particlesInit"
  />
</template>

<script lang="ts">
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default {
  data() {
    return {
      options: {
        background: {
          color: "#000000",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {

            push: {
              quantity: 1,
            },
            repulse: {
              distance: 300,
            },
          },
        },
        particles: {
          color: {
            value: '#4b4827'
          },
          links: {
            color: '#c2ad63',
            distance: 200,
            enable: true,
          },
          move: {
            enable: true,
            speed: { min: 1, max: 2 },
          },
          number: {
            value: 60,
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: { min: 0.3, max: 0.7 },
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      },
    };
  },
  methods: {
    async particlesInit(engine: Engine) {
      await loadSlim(engine);
      // await loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
    },
  },
};
</script>