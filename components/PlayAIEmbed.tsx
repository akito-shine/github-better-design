"use client";

import { useEffect } from 'react';
import { open as openEmbed } from "@play-ai/web-embed";
import { PLAYAI_CONFIG } from '@/lib/constants';

export default function PlayAIEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.play.ai/embed/v1';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}