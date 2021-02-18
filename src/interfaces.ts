import { EmoHook } from './types';

interface EmoParams {
  zone?: string | null;
  deactivatePrint?: boolean;
  deactivateEmojis?: boolean;
  hook?: EmoHook | null;
}

export { EmoParams };