export interface ContactPhone {
  id: 'landline' | 'mobile';
  label: string;
  display: string;
  href: `tel:${string}`;
  isPrimary: boolean;
}

export interface DepartmentEmail {
  id: string;
  department: string;
  address: string;
  href: `mailto:${string}`;
  isPrimary: boolean;
}

export interface SocialProfile {
  id: 'facebook' | 'instagram' | 'youtube' | 'website';
  label: string;
  description: string;
  url: `https://${string}`;
}

export interface ContactConfig {
  studioName: string;
  phones: readonly ContactPhone[];
  emails: readonly DepartmentEmail[];
  office: {
    label: string;
    address: string;
    latitude: number;
    longitude: number;
    directionsUrl: `https://${string}`;
    embedUrl: `https://${string}`;
  };
  socials: readonly SocialProfile[];
  whatsappUrl: `https://${string}` | null;
  workingHours: readonly string[] | null;
  form: {
    whatsappMessageHeading: string;
  };
}

export const contactConfig = {
  studioName: 'Momen Fawzy Interior Design Studio',
  phones: [
    {
      id: 'landline',
      label: 'Main Phone',
      display: '032458777',
      href: 'tel:+2032458777',
      isPrimary: true,
    },
    {
      id: 'mobile',
      label: 'Mobile Phone',
      display: '01020004204',
      href: 'tel:+201020004204',
      isPrimary: false,
    },
  ],
  emails: [
    {
      id: 'general',
      department: 'General Inquiries',
      address: 'info@momenfawzy.com',
      href: 'mailto:info@momenfawzy.com',
      isPrimary: true,
    },
    {
      id: 'sales',
      department: 'Sales',
      address: 'sales@momenfawzy.com',
      href: 'mailto:sales@momenfawzy.com',
      isPrimary: false,
    },
    {
      id: 'design',
      department: 'Design',
      address: 'design@momenfawzy.com',
      href: 'mailto:design@momenfawzy.com',
      isPrimary: false,
    },
    {
      id: 'projects',
      department: 'Projects',
      address: 'projects@momenfawzy.com',
      href: 'mailto:projects@momenfawzy.com',
      isPrimary: false,
    },
    {
      id: 'human-resources',
      department: 'Human Resources',
      address: 'hr@momenfawzy.com',
      href: 'mailto:hr@momenfawzy.com',
      isPrimary: false,
    },
    {
      id: 'finance',
      department: 'Finance',
      address: 'finance@momenfawzy.com',
      href: 'mailto:finance@momenfawzy.com',
      isPrimary: false,
    },
    {
      id: 'support',
      department: 'Support',
      address: 'support@momenfawzy.com',
      href: 'mailto:support@momenfawzy.com',
      isPrimary: false,
    },
  ],
  office: {
    label: 'Main Office',
    address: '405 Al-Gaish Road, San Stefano, Alexandria, Egypt.',
    latitude: 31.2473056,
    longitude: 29.9674167,
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=31.2473056%2C29.9674167',
    embedUrl: 'https://www.google.com/maps?q=31.2473056%2C29.9674167&z=16&output=embed',
  },
  socials: [
    {
      id: 'facebook',
      label: 'Facebook',
      description: 'Studio news and project updates',
      url: 'https://www.facebook.com/mfawzyinteriors/',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      description: 'Behind the scenes and latest work',
      url: 'https://www.instagram.com/mfawzyinteriors',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      description: 'Design stories and studio films',
      url: 'https://www.youtube.com/channel/UCto5M-6YWOLC4fIhVmfHdpw',
    },
    {
      id: 'website',
      label: 'Website',
      description: 'Momen Fawzy Interior Design Studio',
      url: 'https://momenfawzy.com/',
    },
  ],
  whatsappUrl: 'https://wa.me/201020004204',
  workingHours: null,
  form: {
    whatsappMessageHeading: 'New Project Inquiry — Momen Fawzy Interior Design',
  },
} as const satisfies ContactConfig;

export const primaryPhone = contactConfig.phones.find((phone) => phone.isPrimary)!;
export const primaryEmail = contactConfig.emails.find((email) => email.isPrimary)!;
