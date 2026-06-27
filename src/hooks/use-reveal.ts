import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    // Select only elements not yet marked as revealed
    const els = document.querySelectorAll<HTMLElement>(".reveal:not([data-revealed])");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => {
        el.classList.add("reveal-in");
        el.setAttribute("data-revealed", "true");
      });
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            entry.target.setAttribute("data-revealed", "true");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));

    // Improved detection with delay, reflow, and fallback
    setTimeout(() => {
      // Force reflow
      void window.scrollY;

      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("reveal-in");
          el.setAttribute("data-revealed", "true");
          io.unobserve(el);
        }
      });
    }, 100);

    // Final fallback
    setTimeout(() => {
      els.forEach((el) => {
        if (!el.classList.contains("reveal-in")) {
          el.classList.add("reveal-in");
          el.setAttribute("data-revealed", "true");
          io.unobserve(el);
        }
      });
    }, 500);

    return () => io.disconnect();
  }, []);
}
