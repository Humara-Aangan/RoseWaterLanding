/**
 * Analytics utility functions for tracking events and conversions
 */

// Types for analytics events
interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface UTMParams {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
}

// Configuration
const SCROLL_TRACKING_THRESHOLDS = [25, 50, 75, 90];

/**
 * Track a standard analytics event
 */
export function trackEvent({ action, category, label, value }: EventParams): void {
  // Check if Google Analytics exists
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-ignore - gtag might not be recognized in the type system
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  
  // Log events during development
  if (process.env.NODE_ENV !== 'production') {
    console.log('📊 Event tracked:', { action, category, label, value });
  }
}

/**
 * Track a conversion event (special events that indicate key user actions)
 */
export function trackConversion(eventName: string): void {
  // Track as both a standard event and as a conversion
  trackEvent({
    action: eventName,
    category: 'Conversion',
  });
  
  // Additional conversion-specific logic for different analytics providers
  if (typeof window !== 'undefined') {
    // Google Ads conversion tracking
    if ('gtag' in window) {
      // @ts-ignore - gtag might not be recognized in the type system
      window.gtag('event', 'conversion', {
        'send_to': process.env.NEXT_PUBLIC_CONVERSION_ID,
        'event_category': 'Conversion',
        'event_label': eventName,
      });
    }
    
    // Facebook Pixel tracking
    if ('fbq' in window) {
      // @ts-ignore - fbq might not be recognized in the type system
      window.fbq('track', eventName);
    }
  }
  
  // Log conversions during development
  if (process.env.NODE_ENV !== 'production') {
    console.log('🎯 Conversion tracked:', eventName);
  }
}

/**
 * Extract UTM parameters from the current URL
 */
export function getUTMParameters(): UTMParams {
  if (typeof window === 'undefined') {
    return {};
  }
  
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    utmSource: urlParams.get('utm_source') || undefined,
    utmMedium: urlParams.get('utm_medium') || undefined,
    utmCampaign: urlParams.get('utm_campaign') || undefined,
    utmContent: urlParams.get('utm_content') || undefined,
    utmTerm: urlParams.get('utm_term') || undefined,
  };
}

/**
 * Track page view events
 */
export function trackPageView(url: string): void {
  if (typeof window === 'undefined') {
    return;
  }

  if ('gtag' in window) {
    // @ts-ignore - gtag might not be recognized in the type system
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: url,
    });
  }

  trackEvent({
    action: 'page_view',
    category: 'Navigation',
    label: url,
  });

  // Log page view during development
  if (process.env.NODE_ENV !== 'production') {
    console.log('📄 Page view tracked:', url);
  }
}

/**
 * Setup scroll depth tracking
 */
export function setupScrollTracking(): void {
  if (typeof window === 'undefined') {
    return;
  }

  let scrollMarks: number[] = [...SCROLL_TRACKING_THRESHOLDS];
  let docHeight = getDocHeight();
  
  // Reset scroll marks to prevent duplicate events
  const resetScrollMarks = () => {
    scrollMarks = [...SCROLL_TRACKING_THRESHOLDS];
    docHeight = getDocHeight();
  };

  // Track scroll depth
  const trackScrollDepth = () => {
    const scrollPos = window.scrollY + window.innerHeight;
    const scrollPercent = Math.round((scrollPos / docHeight) * 100);
    
    // Find the thresholds that have been passed
    const passedMarks = scrollMarks.filter(mark => scrollPercent >= mark);
    
    if (passedMarks.length > 0) {
      // Track each passed threshold
      passedMarks.forEach(mark => {
        trackEvent({
          action: 'scroll_depth',
          category: 'Engagement',
          label: `Scrolled ${mark}%`,
          value: mark,
        });
      });
      
      // Remove tracked thresholds
      scrollMarks = scrollMarks.filter(mark => !passedMarks.includes(mark));
    }
  };
  
  // Helper function to get document height
  function getDocHeight(): number {
    const body = document.body;
    const html = document.documentElement;
    
    return Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
  }

  // Throttle function to prevent excessive event firing
  function throttle(callback: Function, limit: number): () => void {
    let waiting = false;
    return function(this: any, ...args: any[]) {
      if (!waiting) {
        callback.apply(this, args);
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  }

  // Set up scroll event listener with throttling
  const throttledScrollHandler = throttle(trackScrollDepth, 500);
  window.addEventListener('scroll', throttledScrollHandler);
  
  // Reset on route change
  window.addEventListener('popstate', resetScrollMarks);
  
  // Initial setup
  resetScrollMarks();
  
  if (process.env.NODE_ENV !== 'production') {
    console.log('📊 Scroll tracking initialized');
  }
}

/**
 * Track UTM parameters when present in URL
 */
export function trackUTMParameters(): void {
  const utmParams = getUTMParameters();
  
  if (Object.values(utmParams).some(value => value !== undefined)) {
    trackEvent({
      action: 'utm_parameters',
      category: 'Attribution',
      label: JSON.stringify(utmParams),
    });
    
    // Store UTM params in session storage for cross-page attribution
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
    }
    
    if (process.env.NODE_ENV !== 'production') {
      console.log('🔗 UTM parameters tracked:', utmParams);
    }
  }
}

/**
 * Initialize analytics services
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  // Initialize Facebook Pixel if needed
//   if (process.env.NEXT_PUBLIC_FB_PIXEL_ID) {
//     // Facebook Pixel Code
//     !function(f, b, e, v, n, t, s) {
//       if (f.fbq) return; n = f.fbq = function() {
//         n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
//       };
//       if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
//       n.queue = []; t = b.createElement(e); t.async = !0;
//       t.src = v; s = b.getElementsByTagName(e)[0];
//       s.parentNode.insertBefore(t, s)
//     }(window as any, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
//     // @ts-ignore - fbq might not be recognized in the type system
//     window.fbq('init', process.env.NEXT_PUBLIC_FB_PIXEL_ID);
//   }
  
  if (process.env.NODE_ENV !== 'production') {
    console.log('📊 Analytics initialized');
  }
}
