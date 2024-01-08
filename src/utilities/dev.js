export const isDebug = () => process?.env?.NODE_ENV === 'development';

export const getDomain = () =>
  isDebug() ? 'http://localhost:3000' : process?.env?.NEXT_PUBLIC_API_URL;

export const getCMSDomain = () => process?.env?.NEXT_PUBLIC_CMS_URL;

export const getGAID = () => process?.env?.NEXT_PUBLIC_GA_ID || '';

export const getPlayLink = () => process?.env?.NEXT_PUBLIC_PLAY_LINK || '/';

export const getGameLink = () => process?.env?.NEXT_PUBLIC_CASINO_LINK || '/';

export const getUnSafePageUrl = () =>
  process?.env?.NEXT_PUBLIC_UNSAFE_URL || 'https://hk-landing-page-59-fork.vercel.app';

export const getCloakingLink = () => {
  const url = process?.env?.NEXT_PUBLIC_CLOAKING_LINK || 'https://water-xyz.com/l/?9r1zonxi';
  const id = url.split('?')[1];

  return id;
};
