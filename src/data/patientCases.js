// Patient cases data
// Each case can have images (array) or video (string) or both

import allProjectImages from '@/data/projectImages.js';

// Get available images for placeholders
const availableImages = Array.isArray(allProjectImages) ? allProjectImages : [];

// Helper function to get images with fallback
const getImages = (start, end, fallbackCount = 2) => {
  const sliced = availableImages.slice(start, end);
  return sliced.length > 0 ? sliced : availableImages.slice(0, Math.min(fallbackCount, availableImages.length));
};

const patientCases = [
  {
    id: 'tibial-hemimelia',
    title: 'Tibial Hemimelia',
    description: [
      'Tibial hemimelia is a rare congenital condition characterized by partial or complete absence of the tibia, leading to significant deformity and functional impairment. Early diagnosis and proper referral are essential for optimizing a child\'s mobility and long-term quality of life. Thanks to modern reconstructive and limb-preservation techniques, many cases that previously required amputation can now be treated with functional limb reconstruction. Families should seek pediatric orthopedic evaluation promptly if they notice leg-length discrepancy, ankle instability, or foot deformity in their child.',
      'With 30 years of professional experience in pediatric orthopedics and congenital deformities, I have successfully treated 113 patients with tibial hemimelia and am recognized as the developer of the \'Cabukoglu Reconstruction Procedure\'. This innovative technique represents a innovative advancement in the field, offering a limb-preserving alternative to amputation and establishing a new standard in the treatment of tibial hemimelia.'
    ],
    images: getImages(0, 3, 3), // Use first 3 images as placeholder
    video: null, // Can be set to video URL if needed
  },
  {
    id: 'fibular-hemimelia',
    title: 'Fibular Hemimelia',
    description: [
      'Fibular hemimelia is a congenital limb deficiency characterized by partial or complete absence of the fibula, often associated with foot and ankle deformities, leg-length discrepancy, and knee instability. This condition presents unique challenges in pediatric orthopedics, requiring comprehensive evaluation and individualized treatment planning.',
      'Through advanced surgical techniques and multidisciplinary care, we have achieved successful outcomes in restoring function and improving quality of life for children with fibular hemimelia. Our approach focuses on limb preservation, functional reconstruction, and optimizing long-term mobility outcomes.'
    ],
    images: getImages(3, 6, 2),
    video: null,
  },
  {
    id: 'proximal-femoral-focal-deficiency',
    title: 'Proximal Femoral Focal Deficiency',
    description: [
      'Proximal femoral focal deficiency (PFFD) is a rare congenital condition involving partial or complete absence of the proximal femur, resulting in significant limb-length discrepancy and functional limitations. This complex condition requires careful assessment and specialized treatment strategies tailored to each patient\'s unique presentation.',
      'Our comprehensive approach to PFFD management includes early intervention, staged reconstructive procedures, and long-term follow-up to ensure optimal functional outcomes. We work closely with families to develop individualized treatment plans that address both the physical and emotional aspects of this challenging condition.'
    ],
    images: getImages(6, 9, 2),
    video: null,
  },
  {
    id: 'cerebral-palsy-deformities',
    title: 'Advanced Cerebral Palsy Deformities',
    description: [
      'Advanced cerebral palsy deformities present complex challenges in pediatric orthopedics, often involving multiple joints and requiring comprehensive surgical planning. These conditions can significantly impact a child\'s mobility, independence, and quality of life.',
      'Our multidisciplinary team approach addresses the unique needs of each patient with cerebral palsy, combining orthopedic surgery, rehabilitation, and ongoing support. We focus on improving function, reducing pain, and enhancing the child\'s ability to participate in daily activities and achieve greater independence.'
    ],
    images: getImages(9, 12, 2),
    video: null,
  },
  {
    id: 'limb-lengthening',
    title: 'Limb Lengthening Procedures',
    description: [
      'Limb lengthening procedures represent a sophisticated approach to addressing significant leg-length discrepancies and congenital limb deficiencies. These techniques require precision, patience, and comprehensive postoperative care to achieve optimal results.',
      'Utilizing modern external and internal fixation devices, we have successfully performed numerous limb lengthening procedures, helping patients achieve improved symmetry, function, and quality of life. Our experience spans both pediatric and adult cases, with careful attention to each patient\'s unique anatomical and functional requirements.'
    ],
    images: getImages(0, 4, 2),
    video: null,
  },
  {
    id: 'complex-deformity-correction',
    title: 'Complex Deformity Correction',
    description: [
      'Complex deformity correction in pediatric orthopedics requires meticulous planning, advanced surgical techniques, and a deep understanding of growth patterns and biomechanics. These procedures aim to restore normal alignment, improve function, and prevent long-term complications.',
      'Our extensive experience in managing complex deformities has enabled us to develop refined surgical approaches that minimize complications while maximizing functional outcomes. We employ state-of-the-art imaging, computer-assisted planning, and innovative fixation techniques to achieve the best possible results for our patients.'
    ],
    images: getImages(4, 8, 2),
    video: null,
  },
];

export default patientCases;
