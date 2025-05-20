// // hooks/useWebflowReinit.ts
// import { useEffect } from "react";
// import { pageStartingJS } from "../../public/js/util";
// // import weblfowJS from "../../public/js/webflow";

// export default function useWebflowReinit(delay = 1000) {
//   useEffect(() => {
//     const Webflow = (window as any).Webflow;
//     if (!Webflow) return;

//     // Destroy existing Webflow behaviors
//     if (Webflow.destroy) Webflow.destroy();

//     const timeout = setTimeout(() => {
//       // Reinitialize Webflow interactions
//       if (Webflow.ready) Webflow.ready();

//       pageStartingJS();
//       // weblfowJS();

//       try {
//         const ix2 = Webflow.require && Webflow.require('ix2');
//         if (ix2 && typeof ix2.init === 'function') {
//           ix2.init();
//         }
//       } catch (err) {
//         console.warn('Webflow ix2 init failed:', err);
//       }
//     }, delay); // wait for DOM to fully load

//     return () => clearTimeout(timeout);
//   }, [delay]);
// }


// hooks/useWebflowOnLoad.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useWebflowOnLoad() {

    const location = useLocation();
  useEffect(() => {
    const Webflow = (window as any).Webflow;
    if (!Webflow) return;

    const onLoad = () => {
      // Ensure previous interactions are cleared
      if (Webflow.destroy) Webflow.destroy();

      // Restart Webflow behaviors
      if (Webflow.ready) Webflow.ready();

      // Reinitialize ix2 (interactions engine)
      try {
        const ix2 = Webflow.require?.("ix2");
        console.log("mounts")
        ix2?.init?.();
      } catch (err) {
        console.warn("Webflow ix2 init failed:", err);
      }
    };

    // If already loaded, call it immediately
    if (document.readyState === "complete") {
      onLoad();
    } else {
      // Wait for full page load
      window.addEventListener("load", onLoad);
    }

    console.log("page")

    return () => window.removeEventListener("load", onLoad);
  }, [location.pathname]);
}
