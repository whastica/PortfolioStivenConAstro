export interface LayoutProps {
  title: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  siteName: string;
  twitterHandle?: string;
}