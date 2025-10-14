'use client';
import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    let sessionId = localStorage.getItem('visitor_session_id');
    if (!sessionId) {
      sessionId = 's_' + Math.random().toString(36).slice(2, 12);
      localStorage.setItem('visitor_session_id', sessionId);
    }

    const payload = {
      path: window.location.pathname + window.location.search,
      sessionId
    };

    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(() => {});
  }, []);

  return null;
}
