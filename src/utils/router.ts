import { useState, useEffect, useCallback } from 'react';

export type AppRoute = '/' | '/story' | '/projects' | '/resume';

/**
 * Normalizes the current window location to a recognized AppRoute.
 * Handles:
 * - HTML5 pathname: '/', '/story', '/projects', '/resume'
 * - Base subpaths: e.g. '/Portfolio-Os/' -> '/', '/Portfolio-Os/story' -> '/story'
 * - Hash fallback: '#/story', '#/projects', '#/resume', '#/'
 */
export function getCurrentRoute(): AppRoute {
  if (typeof window === 'undefined') return '/';

  const hash = window.location.hash;
  if (hash.startsWith('#/story')) return '/story';
  if (hash.startsWith('#/projects')) return '/projects';
  if (hash.startsWith('#/resume')) return '/resume';

  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  if (pathname.endsWith('/story')) return '/story';
  if (pathname.endsWith('/projects')) return '/projects';
  if (pathname.endsWith('/resume')) return '/resume';

  return '/';
}

/**
 * Navigates to a target route smoothly with HTML5 History API and hash fallback.
 */
export function navigateTo(route: AppRoute | string) {
  if (typeof window === 'undefined') return;

  const targetRoute = (route.startsWith('/') ? route : `/${route}`) as AppRoute;

  // Determine base path for Vite / GitHub Pages deployment
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;

  const fullPath = targetRoute === '/' 
    ? (cleanBase || '/') 
    : `${cleanBase}${targetRoute}`;

  // Update history state
  try {
    window.history.pushState({ route: targetRoute }, '', fullPath);
  } catch {
    // If running in strict origin or file:// protocol, fallback to hash
    window.location.hash = `#${targetRoute}`;
  }

  // Dispatch custom routechange event so all listeners re-render
  window.dispatchEvent(new Event('approutechange'));

  // Scroll to top on page route transition (unless navigating to hash anchor)
  if (!window.location.hash || window.location.hash.startsWith('#/')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * React hook for consuming and reacting to route changes.
 */
export function useAppRouter() {
  const [route, setRoute] = useState<AppRoute>(getCurrentRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(getCurrentRoute());
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('approutechange', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('approutechange', handleRouteChange);
    };
  }, []);

  const navigate = useCallback((target: AppRoute | string) => {
    navigateTo(target);
  }, []);

  return {
    route,
    navigate,
    isRecruiter: route === '/',
    isStory: route === '/story',
  };
}
