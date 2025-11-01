import doctorPortrait from '@/data/doctorImage.js';

const caseFolderImages = import.meta.glob('@/assets/images/cases/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
});

const rootGalleryImages = import.meta.glob(
  '@/assets/images/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  {
    eager: true,
    import: 'default',
  }
);

const imageModules = Object.fromEntries(
  Object.entries({ ...caseFolderImages, ...rootGalleryImages }).filter(([path]) => {
    return !/doctor-portrait\.svg$/i.test(path) && !/\/1\.(png|jpe?g|webp)$/i.test(path);
  })
);

const metadataByBaseName = {
  '1': {
    id: 'case-arthroplasty-1',
    title: 'Total Knee Arthroplasty Rehabilitation',
    description:
      'Restored mobility and pain-free ambulation for a patient with advanced degenerative joint disease through precision alignment and guided physiotherapy.',
    category: 'Joint Replacement',
    alt: 'Post-operative recovery after total knee arthroplasty',
  },
  '2': {
    id: 'case-corrective-alignment',
    title: 'Corrective Alignment Planning',
    description:
      'Detailed assessment stage documenting limb alignment metrics prior to reconstructive surgery.',
    category: 'Pediatric Orthopedics',
    alt: 'Clinical image illustrating preoperative limb alignment planning',
  },
  '3': {
    id: 'case-surgical-prep',
    title: 'Surgical Preparation & Positioning',
    description:
      'Multidisciplinary team finalises operative positioning to protect neurovascular structures during repair.',
    category: 'Surgical Technique',
    alt: 'Operating room preparation for orthopedic surgery',
  },
  '4': {
    id: 'case-intraoperative-check',
    title: 'Intraoperative Imaging Checkpoint',
    description:
      'Verification of osteotomy correction using real-time imaging to confirm targeted angles and lengths.',
    category: 'Intraoperative Imaging',
    alt: 'Surgeon reviewing intraoperative imaging',
  },
  '5': {
    id: 'case-fixation-overview',
    title: 'Fixation & Stabilisation',
    description:
      'Stability is validated across fixation points to support early mobilization and rehabilitation.',
    category: 'Reconstructive Surgery',
    alt: 'Orthopedic fixation overview following corrective procedure',
  },
  '6': {
    id: 'case-rehab-consult',
    title: 'Rehabilitation Consultation',
    description:
      'Patient and rehabilitation specialists define phased mobility milestones tailored to surgical outcomes.',
    category: 'Rehabilitation',
    alt: 'Clinical consultation discussing rehabilitation plan',
  },
  '7': {
    id: 'case-follow-up',
    title: 'Follow-up Evaluation',
    description:
      'Postoperative review documents neuromuscular function and joint stability with progressive loading.',
    category: 'Postoperative Care',
    alt: 'Patient follow-up evaluation after orthopedic surgery',
  },
  '8': {
    id: 'case-outcome-summary',
    title: 'Outcome Summary Session',
    description:
      'Outcome metrics are summarised with patient and caregivers to coordinate ongoing care responsibilities.',
    category: 'Patient Education',
    alt: 'Team reviewing outcome metrics with patient and family',
  },
  '9': {
    id: 'case-team-briefing',
    title: 'Team Briefing & Knowledge Sharing',
    description:
      'Surgical and rehabilitation teams conduct a structured briefing to refine protocols for future cases.',
    category: 'Team Collaboration',
    alt: 'Orthopedic team briefing after surgical case',
  },
  '10': {
    id: 'case-training-workshop',
    title: 'Training & Mentorship Workshop',
    description:
      'Resident surgeons and fellows receive hands-on instruction in advanced pediatric orthopedic techniques.',
    category: 'Education',
    alt: 'Orthopedic training workshop with residents',
  },
  '11': {
    id: 'case-community-outreach',
    title: 'Community Outreach & Awareness',
    description:
      'Public awareness session highlights preventive care, early diagnosis, and access pathways for rare deformities.',
    category: 'Community Outreach',
    alt: 'Community awareness event for orthopedic conditions',
  },
};

const formatTitle = (filename) => {
  const base = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
  return base
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const generatedImages = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, src], index) => {
    const filename = path.split('/').pop() || `case-${index + 1}`;
    const baseName = filename.toLowerCase().replace(/\.[^.]+$/, '');
    const meta = metadataByBaseName[baseName] ?? {};

    return {
      id: meta.id ?? `case-${index + 1}`,
      src,
      title: meta.title ?? formatTitle(filename),
      description:
        meta.description ??
        'Clinical outcome highlighting surgical planning, intraoperative precision, and coordinated rehabilitation.',
      category: meta.category ?? 'Orthopedics',
      alt: meta.alt ?? `${formatTitle(filename)} case result`,
    };
  });

const fallbackImages = [
  {
    id: 'case-doctor-portrait',
    src: doctorPortrait,
    title: 'Complex Orthopedic Case Review',
    description:
      'Representative case image featuring Op. Dr. Cengiz Çabukoğlu, used as a placeholder until additional clinical visuals are provided.',
    category: 'Orthopedics',
    alt: 'Op. Dr. Cengiz Çabukoğlu case documentation',
  },
];

export const galleryImages = generatedImages.length ? generatedImages : fallbackImages;

export default galleryImages;

