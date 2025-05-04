/**
 * Enhanced browser detection and compatibility utilities
 */

// Define extended window interface for browser detection
interface BrowserWindow extends Window {
  MSStream?: any;
  opr?: any;
  opera?: any;
  InstallTrigger?: any;
  safari?: any;
  mozInnerScreenX?: number;
  StyleMedia?: any;
  chrome?: any;
  webkitAudioContext?: any;
}

/**
 * More reliable browser detection using feature detection where possible
 */
export const getBrowser = (): string => {
  const win = window as BrowserWindow;
  const nav = navigator;
  const doc = document;
  
  // Edge (Chromium-based)
  if (!!win.chrome && (!!win.chrome.webstore || !!win.chrome.runtime) && 
      /Edg/.test(nav.userAgent)) {
    return 'edge';
  }
  
  // Chrome
  if (!!win.chrome && (!!win.chrome.webstore || !!win.chrome.runtime) && 
      !/Edg|OPR|Opera/.test(nav.userAgent)) {
    return 'chrome';
  }
  
  // Firefox
  if (typeof win.InstallTrigger !== 'undefined' || 
      /Firefox|FxiOS/.test(nav.userAgent)) {
    return 'firefox';
  }
  
  // Safari
  if (/Safari/.test(nav.userAgent) && 
      !/Chrome|Chromium|Edg|OPR|Opera/.test(nav.userAgent)) {
    return 'safari';
  }
  
  // Internet Explorer
  if (/*@cc_on!@*/false || !!(doc as any).documentMode) {
    return 'ie';
  }
  
  // Opera
  if ((!!win.opr && !!win.opr.addons) || 
      !!win.opera || 
      /OPR|Opera/.test(nav.userAgent)) {
    return 'opera';
  }
  
  // Default as unknown with best compatibility
  return 'unknown';
};

/**
 * Normalize CSS inconsistencies between browsers
 */
export const applyBrowserFixes = (): void => {
  const browser = getBrowser();
  const html = document.documentElement;
  
  // Add browser identification class
  html.classList.add(`browser-${browser}`);
  
  // Apply viewport height fix for mobile browsers
  if (/Android|iPhone|iPad|iPod/.test(navigator.userAgent)) {
    applyMobileViewportFix();
  }
  
  // Apply specific browser fixes
  switch (browser) {
    case 'edge':
      // Edge-specific fixes
      applyEdgeFixes();
      break;
    case 'chrome':
      // Chrome-specific fixes
      applyChromeFixes();
      break;
    case 'firefox':
      // Firefox-specific fixes
      applyFirefoxFixes();
      break;
    case 'safari':
      // Safari-specific fixes
      applySafariFixes();
      break;
    default:
      // Generic fixes for all browsers
      applyGenericFixes();
  }
};

/**
 * Edge-specific compatibility fixes
 */
function applyEdgeFixes(): void {
  const html = document.documentElement;
  html.classList.add('edge-fixes');
  
  // Fix for Edge's handling of CSS Grid
  document.querySelectorAll('.grid').forEach((element) => {
    element.classList.add('edge-grid-fix');
  });
  
  // Fix for Edge's flexbox issues
  document.querySelectorAll('.flex').forEach((element) => {
    element.classList.add('edge-flex-fix');
  });
}

/**
 * Chrome-specific compatibility fixes
 */
function applyChromeFixes(): void {
  const html = document.documentElement;
  html.classList.add('chrome-fixes');
  
  // Fix Chrome's rendering of certain animations
  document.querySelectorAll('[data-animation]').forEach((element) => {
    element.classList.add('chrome-animation-fix');
  });
}

/**
 * Firefox-specific compatibility fixes
 */
function applyFirefoxFixes(): void {
  const html = document.documentElement;
  html.classList.add('firefox-fixes');
  // Add a class for scrollbar styling instead of setting style property
  html.classList.add('firefox-scrollbar-thin');
  
  // Fix for Firefox animation performance
  document.querySelectorAll('.animate, [data-animation]').forEach((element) => {
    element.classList.add('firefox-animation-fix');
  });
}

/**
 * Safari-specific compatibility fixes
 */
function applySafariFixes(): void {
  const html = document.documentElement;
  html.classList.add('safari-fixes');
  
  // Fix for Safari's flexbox implementation
  document.querySelectorAll('.flex').forEach((element) => {
    element.classList.add('safari-flex-fix');
  });
  
  // Fix for Safari's backdrop filter
  document.querySelectorAll('.backdrop-blur').forEach((element) => {
    element.classList.add('safari-backdrop-fix');
  });
}

/**
 * Generic compatibility fixes for all browsers
 */
function applyGenericFixes(): void {
  // Fix for smooth scrolling across browsers
  document.documentElement.style.scrollBehavior = 'smooth';
}

/**
 * Fix for mobile browser viewport height inconsistencies
 */
function applyMobileViewportFix(): void {
  const setVH = () => {
    // Set the actual viewport height as a CSS variable
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  // Set initially and on resize
  setVH();
  window.addEventListener('resize', setVH);
}
