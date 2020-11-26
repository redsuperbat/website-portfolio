import { onUnmounted, ref } from 'vue';

export const useDimensions = () => {
  const xs = ref(window.innerWidth < 600);
  const md = ref(window.innerWidth < 960);
  const lg = ref(window.innerWidth < 1260);
  const setDimensions = () => {
    xs.value = window.innerWidth < 600;
    md.value = window.innerWidth < 960;
    lg.value = window.innerWidth < 1260;
  };
  window.addEventListener('resize', setDimensions);
  onUnmounted(() => window.removeEventListener('resize', setDimensions));
  return {
    xs,
    md,
    lg,
  };
};
