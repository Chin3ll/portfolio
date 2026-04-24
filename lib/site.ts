import { siteConfig } from "@/content/site.config";
import { PortfolioConfig } from "@/lib/types";

function assert(condition: boolean, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

export function validateSiteConfig(config: PortfolioConfig): PortfolioConfig {
  assert(config.person.fullName.length > 1, "person.fullName is required");
  assert(config.person.title.length > 1, "person.title is required");
  assert(config.person.email.includes("@"), "person.email must be a valid email");
  assert(config.projects.length > 0, "at least one project is required");
  assert(config.skills.length > 0, "at least one skill category is required");
  return config;
}

export const portfolioData = validateSiteConfig(siteConfig);
