<script setup lang="ts" name="responsiveLayout">
import { useResponsiveLayoutStore } from "./store";
import { ref, onMounted, onUnmounted, watch, useSlots } from "vue";

interface ClassNames {
  nav?: string;
  aside?: string;
  main?: string;
}

interface Props {
  className?: string;
  classNames?: ClassNames;
  navWidth?: string;
  asideWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  navWidth: "24rem",
  asideWidth: "24rem",
});

const slots = useSlots();
const store = useResponsiveLayoutStore();
const navRef = ref<HTMLElement | null>(null);
const asideRef = ref<HTMLElement | null>(null);
const mainRef = ref<HTMLElement | null>(null);

const hasNav = Boolean(slots.nav);
const hasAside = Boolean(slots.aside);

const scrollTo = (
  target: "nav" | "aside" | "main",
  behavior: ScrollBehavior = "smooth"
) => {
  switch (target) {
    case "nav":
      if (hasNav) navRef.value?.scrollIntoView({ behavior });
      else mainRef.value?.scrollIntoView({ behavior });
      break;
    case "aside":
      if (hasAside) asideRef.value?.scrollIntoView({ behavior });
      else mainRef.value?.scrollIntoView({ behavior });
      break;
    case "main":
      mainRef.value?.scrollIntoView({ behavior });
      break;
  }
};

const handleResize = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    store.setOpenNav(false);
    store.setOpenAside(false);
    scrollTo("main", "auto");
  } else {
    store.setOpenNav(hasNav);
    store.setOpenAside(false);
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const targetId = entry.target.id;
        if (entry.isIntersecting) {
          switch (targetId) {
            case "AppNav":
              store.setOpenNav(true);
              store.setOpenAside(false);
              break;
            case "AppAside":
              store.setOpenAside(true);
              store.setOpenNav(false);
              break;
            case "AppMain":
              store.setOpenNav(false);
              store.setOpenAside(false);
              break;
          }
        }
      });
    },
    { threshold: [1] }
  );

  [mainRef.value, asideRef.value, navRef.value].forEach((el) => {
    if (el instanceof HTMLElement) observer.observe(el);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
    observer.disconnect();
  });
});

watch([() => store.openNav, () => store.openAside], () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (!isMobile) return;

  if (!store.openAside && !store.openNav) {
    scrollTo("main");
  } else if (store.openAside) {
    scrollTo("aside");
  } else if (store.openNav) {
    scrollTo("nav");
  }
});

const cn = (...classNames: (string | undefined | null | false)[]) => {
  return classNames.filter(Boolean).join(" ");
};

const layoutStyles = {
  "--nav-width": props.navWidth,
  "--aside-width": props.asideWidth,
  scrollbarWidth: "none" as const,
};
</script>

<template>
  <section
    :class="
      cn(
        'h-[100dvh] w-[100dvw]',
        'flex md:overflow-hidden',
        'overflow-x-scroll overflow-y-hidden md:overflow-visible snap-x snap-mandatory md:snap-none',
        className
      )
    "
    :style="layoutStyles">
    <nav
      v-if="hasNav"
      ref="navRef"
      id="AppNav"
      :class="
        cn(
          'h-full relative',
          'w-screen flex-shrink-0',
          'snap-center md:snap-none',
          'md:transition-all md:duration-300 md:overflow-hidden',
          'md:w-[var(--nav-width)]',
          !store.openNav && 'md:!w-0',
          classNames?.nav
        )
      ">
      <slot name="nav" />
    </nav>
    <main
      ref="mainRef"
      id="AppMain"
      :class="
        cn(
          'h-full',
          'w-screen flex-shrink-0',
          'snap-center md:snap-none',
          'md:transition-all md:duration-300',
          'md:w-full',
          store.openNav &&
            hasNav &&
            !store.openAside &&
            'md:!w-[calc(100%-var(--nav-width))]',
          !store.openNav &&
            store.openAside &&
            hasAside &&
            'md:!w-[calc(100%-var(--aside-width))]',
          store.openNav &&
            hasNav &&
            store.openAside &&
            hasAside &&
            'md:!w-[calc(100%-var(--nav-width)-var(--aside-width))]',
          classNames?.main
        )
      ">
      <slot name="main" />
    </main>
    <aside
      v-if="hasAside"
      ref="asideRef"
      id="AppAside"
      :class="
        cn(
          'h-full relative',
          'w-screen flex-shrink-0',
          'snap-center md:snap-none',
          'md:transition-all md:duration-300 md:overflow-hidden',
          'md:w-[var(--aside-width)]',
          !store.openAside && 'md:!w-0',
          classNames?.aside
        )
      ">
      <slot name="aside" />
    </aside>
  </section>
</template>
