import siteConfig from "./site.json";

export const SITE_TITLE = siteConfig.title ?? "Dasein";
export const SITE_DESCRIPTION =
  siteConfig.description ?? "Welcome to my website!";
export const SITE_OCCUPATION = siteConfig.occupation ?? "Philosopher";
export const SITE_BIO = siteConfig.bio ?? "404 Bio Not Found";

export default siteConfig;
