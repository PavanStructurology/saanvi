// hooks/useWebflowWaitForElement.ts
import { useEffect } from "react";

export default function useWebflowWaitForElement(
  selector = ".xxl-heading.one",
  timeout = 3000,
  interval = 100
) {
  useEffect(() => {
    const Webflow = (window as any).Webflow;
    if (!Webflow) return;

    let elapsed = 0;
    const poll = setInterval(() => {
      const el = document.querySelector(selector);

      if (el || elapsed >= timeout) {
        clearInterval(poll);

        if (Webflow.destroy) Webflow.destroy();
        if (Webflow.ready) Webflow.ready();

        try {
          const ix2 = Webflow.require?.('ix2');
          ix2?.init?.();
        } catch (err) {
          console.warn("Webflow IX2 init failed:", err);
        }
      }

      elapsed += interval;
    }, interval);

    return () => clearInterval(poll);
  }, [selector, timeout, interval]);
}
