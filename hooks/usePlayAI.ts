import { useCallback } from 'react';
import { open as openEmbed } from "@play-ai/web-embed";
import { PLAYAI_CONFIG } from '@/lib/constants';

export function usePlayAI() {
  const initializeEmbed = useCallback(async () => {
    if (typeof window === 'undefined') return;

    try {
      await openEmbed(PLAYAI_CONFIG.webEmbedId, PLAYAI_CONFIG.defaultOptions);
      return true;
    } catch (error) {
      console.error("PlayAI initialization failed:", error);
      return false;
    }
  }, []);

  return { initializeEmbed };
}