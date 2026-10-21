import type { ImageMetadata } from 'astro';

import consultationImage from '../assets/images/projects/smouha-office/01-cover.jpeg';
import designImage from '../assets/images/projects/city-edge-alamein-studio/05-entry-comparison.jpg';
import fitOutImage from '../assets/images/projects/city-edge-alamein-studio/08-living-comparison.jpg';
import furnitureImage from '../assets/images/projects/valorie-residence/11-bedroom-dressing.jpg';
import heroImage from '../assets/images/projects/valorie-residence/01-cover.png';
import landscapeImage from '../assets/images/projects/valorie-residence/20-balcony.jpg';
import projectDeliveryImage from '../assets/images/projects/zaki-ragab-smouha/01-cover.jpg';
import technicalImage from '../assets/images/projects/al-fatah-shipping-company/02-executive-office.jpg';

export interface ServiceCapabilityGroup {
  title?: string;
  items: readonly string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  benefitHeading: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  imagePosition?: string;
  capabilityGroups: readonly ServiceCapabilityGroup[];
  displayOrder: number;
  isActive: boolean;
}

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  displayOrder: number;
  isActive: boolean;
}

export const services = [
  {
    id: 'consultation-site-survey',
    slug: 'consultation-site-survey',
    title: 'Consultation & Site Survey',
    benefitHeading: 'Every successful project begins with clarity.',
    description:
      'We begin by listening carefully, understanding how you want the space to feel and function, and studying the site in detail. This creates a clear starting point and a realistic view of the project before design work begins.',
    image: consultationImage,
    imageAlt: 'Refined executive interior from the Momen Fawzy project portfolio',
    imagePosition: 'center',
    capabilityGroups: [
      {
        items: [
          'On-site inspection and accurate measurements',
          'Understanding needs, priorities, and daily use',
          'Defining the most suitable design style',
          'Preliminary cost estimation',
          'Clear scope of work',
          'Expected project timeline',
        ],
      },
    ],
    displayOrder: 1,
    isActive: true,
  },
  {
    id: 'interior-design-visualization',
    slug: 'interior-design-visualization',
    title: 'Interior Design & 3D Visualization',
    benefitHeading: 'See your space before it is built.',
    description:
      'We transform your ideas into a complete interior direction shaped around your lifestyle, requirements, and personal taste. Realistic 3D visualizations let you review every key decision and approve the design with confidence before execution.',
    image: designImage,
    imageAlt: 'Interior design visualization shown beside its executed result',
    imagePosition: 'center',
    capabilityGroups: [
      {
        items: [
          'Interior design concept development',
          'Space and furniture planning',
          'Colour, finish, and material selection',
          'Ceiling, wall, and flooring design',
          'Lighting design',
          'Kitchen and dressing-room design',
          'Façade design',
          'Realistic 3D visualizations and final renders',
          'Design options, revisions, and final approval',
        ],
      },
    ],
    displayOrder: 2,
    isActive: true,
  },
  {
    id: 'technical-engineering-documentation',
    slug: 'technical-engineering-documentation',
    title: 'Technical & Engineering Documentation',
    benefitHeading: 'Every detail, ready for execution.',
    description:
      'Once the design is approved, we translate it into a coordinated technical package that guides every specialist on site and protects the original design intent throughout execution.',
    image: technicalImage,
    imageAlt: 'Detailed commercial interior demonstrating coordinated lighting and joinery',
    imagePosition: 'center',
    capabilityGroups: [
      {
        items: [
          'Architectural drawings',
          'Shop drawings',
          'Electrical drawings',
          'Plumbing drawings',
          'HVAC drawings',
          'Lighting plans',
          'Joinery and furniture details',
          'Material schedules',
          'Bill of Quantities — BOQ',
        ],
      },
    ],
    displayOrder: 3,
    isActive: true,
  },
  {
    id: 'fit-out-integrated-systems',
    slug: 'fit-out-integrated-systems',
    title: 'Fit-Out & Integrated Systems',
    benefitHeading: 'Carefully built. Fully coordinated.',
    description:
      'We bring the approved design to life through complete fit-out and engineering execution. Architectural finishes and technical systems are coordinated as one plan, creating a smoother and more controlled construction experience.',
    image: fitOutImage,
    imageAlt: 'Interior visualization shown beside the completed fit-out',
    imagePosition: 'center',
    capabilityGroups: [
      {
        title: 'Architectural & Finishing Works',
        items: [
          'Architectural modifications',
          'Plastering and surface preparation',
          'Painting and decorative finishes',
          'Gypsum-board and ceiling works',
          'Flooring, marble, and granite',
          'Wallpaper, wall treatments, and cladding',
          'Doors, PVC and aluminium windows',
          'Carpentry works',
        ],
      },
      {
        title: 'Engineering & Integrated Systems',
        items: [
          'Electrical works and distribution boards',
          'Plumbing',
          'Air-conditioning, HVAC, and refrigerant piping',
          'Lighting distribution',
          'Fire and low-current systems',
          'CCTV, data, and network systems',
          'Smart-home systems',
        ],
      },
    ],
    displayOrder: 4,
    isActive: true,
  },
  {
    id: 'furniture-lighting-styling',
    slug: 'furniture-lighting-styling',
    title: 'Furniture, Joinery, Lighting & Styling',
    benefitHeading: 'The details that make a space feel complete.',
    description:
      'Furniture, joinery, lighting, and styling are developed as part of the complete interior. Every element is selected or made to support the character, comfort, and everyday function of the space.',
    image: furnitureImage,
    imageAlt: 'Custom dressing room with integrated joinery and architectural lighting',
    imagePosition: 'center',
    capabilityGroups: [
      {
        items: [
          'Kitchen design and execution',
          'Wardrobes and dressing rooms',
          'TV units, wall panels, doors, and custom joinery',
          'Bespoke furniture',
          'Selection and supply of ready-made furniture',
          'Curtains and soft furnishings',
          'Architectural, decorative, and accent lighting',
          'Chandeliers, mirrors, and wall décor',
          'Accessories and final styling',
        ],
      },
    ],
    displayOrder: 5,
    isActive: true,
  },
  {
    id: 'landscape-exterior-works',
    slug: 'landscape-exterior-works',
    title: 'Landscape & Exterior Works',
    benefitHeading: 'Design that continues beyond the interior.',
    description:
      'For villas and commercial projects, we create exterior environments that feel connected to the architecture and interior experience—bringing landscape, lighting, outdoor structures, and furnishing together.',
    image: landscapeImage,
    imageAlt: 'Landscaped balcony with integrated exterior lighting and outdoor furniture',
    imagePosition: 'center 62%',
    capabilityGroups: [
      {
        items: [
          'Landscape design and execution',
          'Swimming pools',
          'Pergolas',
          'Façade works',
          'Gates',
          'Outdoor furniture',
          'Exterior lighting',
        ],
      },
    ],
    displayOrder: 6,
    isActive: true,
  },
  {
    id: 'project-delivery-aftercare',
    slug: 'project-delivery-aftercare',
    title: 'Procurement, Project Delivery & Aftercare',
    benefitHeading: 'Managed from first order to final handover.',
    description:
      'We coordinate the practical details that keep your project moving. Materials, suppliers, schedules, budgets, contractors, and quality inspections are managed throughout execution—while you remain informed and supported until completion and beyond.',
    image: projectDeliveryImage,
    imageAlt: 'Completed living space representing coordinated project delivery',
    imagePosition: 'center',
    capabilityGroups: [
      {
        title: 'Procurement',
        items: [
          'Purchasing and supplying approved materials',
          'Furniture, lighting, sanitary ware, appliances, and accessories',
          'Supplier coordination and follow-up',
          'Material inspection before installation',
        ],
      },
      {
        title: 'Project Management',
        items: [
          'Dedicated project manager, site engineer, and site supervision',
          'Execution scheduling and procurement tracking',
          'Budget monitoring and periodic progress reports',
          'Coordination between contractors and specialists',
        ],
      },
      {
        title: 'Quality Control',
        items: [
          'Material-sample approval and inspection during execution',
          'Design-compliance and workmanship reviews',
          'Corrective-action follow-up',
          'Snag-list preparation and closure',
        ],
      },
      {
        title: 'Handover & Aftercare',
        items: [
          'Professional cleaning and systems testing',
          'Final inspection and completion of observations',
          'Handover of keys, warranties, and documents',
          'Maintenance and warranty follow-up',
          'Continued support under the agreed aftercare plan',
        ],
      },
    ],
    displayOrder: 7,
    isActive: true,
  },
] as const satisfies readonly Service[];

export const servicesHeroMedia = {
  image: heroImage,
  alt: 'Warm contemporary living space designed by Momen Fawzy Interior Design',
};

export const serviceWorkflow = [
  {
    id: 'listen-measure',
    title: 'Listen & Measure',
    description: 'We inspect the site, understand your needs, and establish the project direction.',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: 'define-design',
    title: 'Define & Design',
    description:
      'We develop the layout, creative concept, materials, and complete visual identity.',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: 'visualize-approve',
    title: 'Visualize & Approve',
    description: 'You review the space through realistic 3D visuals before approving the design.',
    displayOrder: 3,
    isActive: true,
  },
  {
    id: 'detail-coordinate',
    title: 'Detail & Coordinate',
    description: 'We prepare the technical drawings, engineering plans, schedules, and quantities.',
    displayOrder: 4,
    isActive: true,
  },
  {
    id: 'procure-prepare',
    title: 'Procure & Prepare',
    description: 'Approved materials, suppliers, schedules, and site requirements are coordinated.',
    displayOrder: 5,
    isActive: true,
  },
  {
    id: 'build-inspect',
    title: 'Build & Inspect',
    description: 'Execution moves forward under active management and continuous quality control.',
    displayOrder: 6,
    isActive: true,
  },
  {
    id: 'handover-support',
    title: 'Handover & Support',
    description: 'The project is tested, documented, delivered, and supported through aftercare.',
    displayOrder: 7,
    isActive: true,
  },
] as const satisfies readonly WorkflowStep[];

export const activeServices = services
  .filter((service) => service.isActive)
  .toSorted((a, b) => a.displayOrder - b.displayOrder);

export const activeServiceWorkflow = serviceWorkflow
  .filter((step) => step.isActive)
  .toSorted((a, b) => a.displayOrder - b.displayOrder);
