'use client';

import { trackEvent, trackConversion, getUTMParameters } from '@/lib/analytics';

interface AnalyticsButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  eventName: string;
  eventCategory: string;
  isConversion?: boolean;
}

export default function AnalyticsButton({
  href,
  className,
  children,
  eventName,
  eventCategory,
  isConversion = false,
}: AnalyticsButtonProps) {
  const handleClick = () => {
    // Regular event tracking
    trackEvent({
      action: eventName,
      category: eventCategory,
      label: href,
    });
    
    // If this is a conversion event, track it separately
    if (isConversion) {
      trackConversion(eventName);
    }
    
    // Get UTM parameters for attribution
    const utmParams = getUTMParameters();
    
    // For WhatsApp links, add UTM data to the message if available
    if (href.includes('wa.me') && utmParams.utmSource) {
      const baseUrl = href.split('?')[0];
      const searchParams = new URLSearchParams(href.split('?')[1] || '');
      let message = searchParams.get('text') || '';
      
      // Append UTM source to message for tracking
      message += ` (via ${utmParams.utmSource}${utmParams.utmMedium ? '/' + utmParams.utmMedium : ''})`;
      searchParams.set('text', message);
      
      // Open modified URL
      window.open(`${baseUrl}?${searchParams.toString()}`, '_blank');
      return false;
    }
    
    return true;
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
