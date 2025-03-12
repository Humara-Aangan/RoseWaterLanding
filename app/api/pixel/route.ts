import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Get query parameters
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page') || 'unknown';
  const timestamp = searchParams.get('t') || Date.now().toString();
  
  // Get IP and User Agent information
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  const referer = request.headers.get('referer') || 'direct';
  
  // Here you would typically log this data to a database, file, or external service
  console.log({
    type: 'pageview',
    page,
    timestamp,
    ip,
    userAgent,
    referer,
    message: `page=${page}`
  });

  // Return a transparent 1x1 GIF
  const TRANSPARENT_GIF = Buffer.from(
    'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    'base64'
  );
  
  return new NextResponse(TRANSPARENT_GIF, {
    headers: {
      'Content-Type': 'image/gif',
      'Cache-Control': 'no-cache, no-store, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    },
  });
}