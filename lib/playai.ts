import { open as openEmbed } from "@play-ai/web-embed";
import { PLAYAI_CONFIG } from './constants';

export const initializePlayAI = async () => {
  if (typeof window === 'undefined') return;

  try {
    await openEmbed(PLAYAI_CONFIG.webEmbedId, {
      events: PLAYAI_CONFIG.events,
      onEvent: () => {}
    });
    return true;
  } catch (error) {
    console.error("PlayAI initialization failed:", error);
    return false;
  }
};