import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useWebflowReinitOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    const Webflow = (window as any).Webflow;
    if (!Webflow) return;

    if (Webflow.destroy) Webflow.destroy();
    if (Webflow.ready) Webflow.ready();

    try {
      const ix2 = Webflow.require && Webflow.require('ix2');
      ix2 && ix2.init && ix2.init();
    } catch (e) {
      console.warn('IX2 init failed', e);
    }
  }, [location.pathname]);
}
