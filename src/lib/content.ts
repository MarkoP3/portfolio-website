// Dynamic import inside getter to avoid requiring the package during local dev

import { get } from "@vercel/edge-config";

export type LanguageCode = string;

export type LocalizedMap = {
  [code: string]: string | undefined;
  en?: string;
  default?: string;
};

export type LocalizedString = string | LocalizedMap;

export interface SiteContent {
  metadata: {
    title: LocalizedString;
    description: LocalizedString;
    openGraph: {
      title: LocalizedString;
      description: LocalizedString;
      url: LocalizedString;
      siteName: LocalizedString;
      locale: LocalizedString;
      type: LocalizedString;
    };
  };
  profile: {
    greeting: LocalizedString;
    firstName: LocalizedString;
    lastName: LocalizedString;
    role: LocalizedString;
    description: LocalizedString;
    ctaContact: LocalizedString;
    ctaProjects: LocalizedString;
  };
  sections: {
    education: LocalizedString;
    experience: LocalizedString;
    projects: LocalizedString;
    certificates: LocalizedString;
    achievements: LocalizedString;
    skillsAndLanguages: LocalizedString;
    contact: LocalizedString;
    languages: LocalizedString;
    technologies: LocalizedString;
    getInTouch: LocalizedString;
    projectsExplorePrefix: LocalizedString;
    projectsExploreLinkText: LocalizedString;
  };
  education: Array<{
    years: LocalizedString;
    school: LocalizedString;
    field: LocalizedString;
    degree: LocalizedString;
  }>;
  experience: Array<{
    years: LocalizedString;
    companyAndRole: LocalizedString;
    descriptions: LocalizedString[];
    internalEffortsTitle?: LocalizedString;
    bullets?: LocalizedString[];
  }>;
  projects: Array<
    {
      name: LocalizedString;
      desc: LocalizedString;
      tech: LocalizedString;
    }
  >;
  certificates: Array<{
    title: LocalizedString;
    subtitle: LocalizedString;
    url: LocalizedString;
  }>;
  achievements: Array<{
    title: LocalizedString;
    description: LocalizedString;
  }>;
  skills: {
    languages: LocalizedString[];
    technologies: LocalizedString;
  };
  contact: {
    phone: LocalizedString;
    email: LocalizedString;
    website: LocalizedString;
  };
  social: {
    githubUrl: LocalizedString;
  };
}

/**
 * Create a translator function that resolves LocalizedString values with a default fallback to English.
 */
export function createTranslator(languageCode: LanguageCode) {
  return function translate(localized: LocalizedString): string {
    if (localized == null) return "";
    if (typeof localized === "string") return localized;
    if (typeof localized === "object") {
      const val = localized[languageCode] ?? localized.en ?? localized.default;
      if (typeof val === "string") return val;
    }
    return String(localized ?? "");
  };
}

/**
 * Fetch raw site content from Vercel Edge Config. Falls back to local content when not available.
 */
export async function getRawSiteContent(): Promise<SiteContent> {
  try {
    const edgeContent = await get("homePageContent");
    if (edgeContent) return edgeContent as unknown as SiteContent;
  } catch {
    // ignore and fall back
  }
  const localContent = (await import("@/content/local-content")).default as SiteContent;
  return localContent;
}


