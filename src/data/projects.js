import doctorPortrait from '@/data/doctorImage.js';

export const projects = [
  {
    id: 'enhanced-recovery-arthroplasty',
    title: 'Enhanced Recovery Arthroplasty Program',
    summary:
      'Developed a fast-track hip and knee replacement protocol reducing average hospital stays by 36 hours.',
    description:
      'Collaborated with anesthesiology, physiotherapy, and nursing teams to design a streamlined recovery roadmap. The program balanced pain management, early ambulation, and patient education, cutting complication rates and boosting satisfaction scores.',
    image: doctorPortrait,
    year: 2024,
    focus: 'Joint Replacement',
    outcome:
      'Average discharge now occurs within 48 hours post-surgery while maintaining >95% patient satisfaction.',
    highlights: [
      'Implemented data-driven pain control pathways.',
      'Introduced digital patient education modules.',
      'Trained multidisciplinary rapid-response recovery team.',
    ],
  },
  {
    id: 'spine-navigation-suite',
    title: 'Spine Navigation Suite Integration',
    summary:
      'Led adoption of 3D navigation tools to improve precision in complex spinal deformity corrections.',
    description:
      'Oversaw evaluation and deployment of intraoperative navigation technology. Created surgeon training curriculum, updated operative protocols, and mentored junior surgeons through the first 30 complex cases.',
    image: doctorPortrait,
    year: 2023,
    focus: 'Spine Surgery',
    outcome:
      'Achieved 22% reduction in revision surgeries and improved post-op alignment metrics across the patient cohort.',
    highlights: [
      'Integrated AI-assisted planning workflows.',
      'Standardized quality checks and safety briefings.',
      'Published results in the European Spine Journal.',
    ],
  },
  {
    id: 'acl-return-to-play',
    title: 'Elite ACL Return-to-Play Pathway',
    summary:
      'Established a sports medicine program guiding 150+ athletes back to competition with individualized metrics-driven plans.',
    description:
      'Combined arthroscopic techniques with neuromuscular conditioning and wearable analytics. Partnered with club coaches to align rehab goals and implemented mental resilience coaching.',
    image: doctorPortrait,
    year: 2022,
    focus: 'Sports Medicine',
    outcome:
      '90% of athletes returned to competitive play within 7 months, surpassing league benchmarks.',
    highlights: [
      'Introduced objective readiness scoring system.',
      'Reduced re-injury rates below 3%.',
      'Co-created strength templates for partner clubs.',
    ],
  },
  {
    id: 'geriatric-fracture-unit',
    title: 'Integrated Geriatric Fracture Unit',
    summary:
      'Launched an interdisciplinary fracture unit focused on rapid stabilization and holistic recovery for senior patients.',
    description:
      'Designed care pathways spanning emergency admission through community follow-up. Embedded fall-prevention counseling and caregiver education to improve long-term outcomes.',
    image: doctorPortrait,
    year: 2021,
    focus: 'Rehabilitation',
    outcome:
      'Reduced 30-day readmissions by 18% and improved functional independence scores.',
    highlights: [
      'Introduced virtual home assessments post-discharge.',
      'Partnered with community physiotherapists for continuity.',
      'Secured national recognition for patient safety innovation.',
    ],
  },
];

export const findProjectById = (id) => projects.find((project) => project.id === id);

export default projects;

