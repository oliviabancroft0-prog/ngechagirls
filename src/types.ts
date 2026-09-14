export interface NavItem {
  label: string;
  href: string;
  dropdown?: {
    label: string;
    description?: string;
    actionKey?: string;
    href?: string;
  }[];
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  fallbackUrl?: string;
  alt?: string;
  title?: string;
  category?: string;
  caption?: string;
}

export interface AcademicDepartment {
  name: string;
  head: string;
  subjects: string[];
  description: string;
}
