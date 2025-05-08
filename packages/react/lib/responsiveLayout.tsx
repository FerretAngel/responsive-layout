import { useCallback, useEffect, useRef } from "react";
import { useResponsiveLayoutStore } from "./store";
export function cn(...classNames: (string | undefined | null | false)[]) {
  return classNames.filter(Boolean).join(" ");
}
export interface ClassNames {
  nav?: string;
  aside?: string;
  main?: string;
}
export interface ResponsiveLayoutProps {
  appNav?: React.ReactNode;
  appAside?: React.ReactNode;
  appMain: React.ReactNode;
  className?: string;
  classNames?: ClassNames;
  navWidth?: string;
  asideWidth?: string;
}
export const ResponsiveLayout = ({
  appNav,
  appAside,
  appMain,
  className,
  classNames,
  navWidth = "24rem",
  asideWidth = "24rem",
}: ResponsiveLayoutProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const hasNav = Boolean(appNav);
  const hasAside = Boolean(appAside);

  const openNav = useResponsiveLayoutStore((state) => state.openNav);
  const openAside = useResponsiveLayoutStore((state) => state.openAside);
  const setOpenNav = useResponsiveLayoutStore((state) => state.setOpenNav);
  const setOpenAside = useResponsiveLayoutStore((state) => state.setOpenAside);

  const scrollTo = useCallback(
    (target: "nav" | "aside" | "main", behavior: ScrollBehavior = "smooth") => {
      switch (target) {
        case "nav":
          if (hasNav) navRef.current?.scrollIntoView({ behavior });
          else mainRef.current?.scrollIntoView({ behavior });
          break;
        case "aside":
          if (hasAside) asideRef.current?.scrollIntoView({ behavior });
          else mainRef.current?.scrollIntoView({ behavior });
          break;
        case "main":
          mainRef.current?.scrollIntoView({ behavior });
          break;
      }
    },
    [hasNav, hasAside]
  );

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile) {
        setOpenNav(false);
        setOpenAside(false);
        scrollTo("main", "auto");
      } else {
        setOpenNav(hasNav);
        setOpenAside(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [hasNav, hasAside, scrollTo, setOpenNav, setOpenAside]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    if (!openAside && !openNav) {
      scrollTo("main");
    } else if (openAside) {
      scrollTo("aside");
    } else if (openNav) {
      scrollTo("nav");
    }
  }, [openNav, openAside]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetId = entry.target.id;
          if (entry.isIntersecting) {
            switch (targetId) {
              case "AppNav":
                setOpenNav(true);
                setOpenAside(false);
                break;
              case "AppAside":
                setOpenAside(true);
                setOpenNav(false);
                break;
              case "AppMain":
                setOpenNav(false);
                setOpenAside(false);
                break;
            }
          }
        });
      },
      { threshold: [1] }
    );

    [mainRef.current, asideRef.current, navRef.current].forEach((el) => {
      if (el instanceof HTMLDivElement) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const layoutStyles = {
    "--nav-width": navWidth,
    "--aside-width": asideWidth,
    scrollbarWidth: "none",
  } as React.CSSProperties;

  return (
    <section
      className={cn(
        "h-[100dvh] w-[100dvw]",
        "flex md:overflow-hidden",
        "overflow-x-scroll overflow-y-hidden md:overflow-visible snap-x snap-mandatory md:snap-none",
        className
      )}
      style={layoutStyles}>
      {hasNav && (
        <nav
          ref={navRef}
          id="AppNav"
          className={cn(
            "h-full relative",
            "w-screen flex-shrink-0",
            "snap-center md:snap-none",
            "md:transition-all md:duration-300 md:overflow-hidden",
            "md:w-[var(--nav-width)]",
            !openNav && "md:!w-0",
            classNames?.nav
          )}>
          {appNav}
        </nav>
      )}
      <main
        ref={mainRef}
        id="AppMain"
        className={cn(
          "h-full",
          "w-screen flex-shrink-0",
          "snap-center md:snap-none",
          "md:transition-all md:duration-300",
          "md:w-full",
          openNav &&
            hasNav &&
            !openAside &&
            "md:!w-[calc(100%-var(--nav-width))]",
          !openNav &&
            openAside &&
            hasAside &&
            "md:!w-[calc(100%-var(--aside-width))]",
          openNav &&
            hasNav &&
            openAside &&
            hasAside &&
            "md:!w-[calc(100%-var(--nav-width)-var(--aside-width))]",
          classNames?.main
        )}>
        {appMain}
      </main>
      {hasAside && (
        <aside
          ref={asideRef}
          id="AppAside"
          className={cn(
            "h-full relative",
            "w-screen flex-shrink-0",
            "snap-center md:snap-none",
            "md:transition-all md:duration-300 md:overflow-hidden",
            "md:w-[var(--aside-width)]",
            !openAside && "md:!w-0",
            classNames?.aside
          )}>
          {appAside}
        </aside>
      )}
    </section>
  );
};
ResponsiveLayout.displayName = "ResponsiveLayout";
