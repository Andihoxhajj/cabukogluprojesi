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
    id: 'proximal-femoral-insufficiency',
    title: 'Proximal Femoral Insufficiency',
    description: [
      'Proximal femoral insufficiency is a congenital disorder where the upper segment of the femur and hip joint fail to develop fully, leading to structural weakness and mechanical instability. This condition may cause significant leg-length discrepancy, limited hip motion, frequent limping, and challenges in maintaining balance during walking.',
      'Although rare, it requires careful and early evaluation because the hip joint in these children can behave differently over time—some may remain flexible, while others may gradually lose stability or alignment. With modern pediatric orthopedic techniques, including guided growth, controlled lengthening, pelvic–femoral reconstruction, and advanced limb-preservation strategies, it is now possible to improve alignment, restore function, and support normal development far more effectively than in the past.',
      'Parents should be attentive to early signs such as asymmetric skin folds, a noticeable shorter limb, difficulty keeping the hip aligned, or a persistent limp. Early specialist assessment ensures that treatment is tailored to the child\'s growth, helping them achieve the best possible mobility and long-term quality of life.',
      'Through the surgeries I have performed on children from various countries around the world, these patients have regained their normal health, functional mobility, and have been able to continue their lives actively and independently.'
    ],
    images: getImages(3, 6, 2),
    video: null,
  },
  {
    id: 'fibular-hemimelia',
    title: 'Fibular Hemimelia',
    description: [
      'Fibular hemimelia is a congenital condition in which the outer bone of the lower leg (the fibula) is partially or completely absent, leading to varying degrees of leg-length discrepancy, foot deformity, and ankle instability. Although rare, early recognition is crucial because timely and specialized orthopedic care can significantly improve a child\'s long-term mobility and functional outcomes.',
      'Thanks to advances in modern pediatric orthopedics—such as limb reconstruction, deformity correction, foot realignment procedures, and lengthening techniques—many children with fibular hemimelia can now achieve stable, well-aligned, and fully functional limbs, allowing them to participate actively in daily life.',
      'With appropriate treatment and follow-up, children with fibular hemimelia can grow up to lead healthy, active, and independent lives. I currently have a new surgical technique that I developed myself, which has not yet been published in the literature and is now in the process of being prepared for publication.'
    ],
    images: getImages(6, 9, 2),
    video: null,
  },
  {
    id: 'congenital-orthopedic-deformities',
    title: 'Congenital Orthopedic Deformities',
    description: [
      'Congenital deformities of the upper and lower extremities include a wide spectrum of conditions such as clubfoot, radial or tibial longitudinal deficiencies, limb length discrepancies, and Madelung deformity. These disorders may affect bone growth, joint alignment, and overall limb function.',
      'Modern pediatric orthopedic care offers highly effective solutions, ranging from minimally invasive procedures and guided growth techniques to corrective osteotomies for conditions such as Madelung deformity or complex angular deformities. With early diagnosis and a personalized treatment plan, most children can achieve excellent long-term function and alignment.'
    ],
    images: getImages(9, 12, 2),
    video: null,
  },
  {
    id: 'cerebral-palsy-orthopedic',
    title: 'Cerebral Palsy Orthopedic Care',
    description: [
      'Children with cerebral palsy often develop orthopedic problems due to muscle stiffness and imbalance. My goal is to identify these issues early and protect each child\'s mobility, comfort, and long-term function.',
      'Common Orthopedic Problems:',
      'Muscle Tightness (Contractures): Increased muscle tension can limit joint motion and, over time, lead to fixed contractures that affect standing and walking.',
      'Hip Problems: Because of muscle imbalance, the hip joint may gradually move out of its normal position. Regular hip X-rays are essential for early detection and prevention of dislocation.',
      'Spinal Curvature (Scoliosis): Some children develop scoliosis, which can impact posture, sitting balance, and overall comfort.',
      'Foot and Ankle Deformities: Tiptoe walking, flat feet, or inward-turning feet can cause instability, frequent tripping, or pain during walking.',
      'Walking and Gait Difficulties: Changes in muscle tone can alter a child\'s walking pattern, reducing endurance and increasing fatigue.',
      'How We Support Children With CP Orthopedically:',
      'Regular Follow-Up: I provide routine clinical evaluations along with hip and spine monitoring to catch problems early.',
      'Therapy and Bracing: Physiotherapy and orthoses (braces) help maintain alignment, improve stability, and support functional mobility.',
      'Botulinum Toxin Injections: For selected patients, I use botulinum toxin to reduce muscle tightness and improve movement.',
      'Surgical Treatment When Necessary: When conservative methods are not enough, surgery may be recommended to improve alignment, walking ability, and overall comfort—always tailored to the child\'s needs.',
      'In recent years, Single-Event Multilevel Surgery (SEMLS) has become a widely adopted approach for children with cerebral palsy. By correcting multiple muscle, tendon, and bone deformities in a single operation, this method offers more efficient rehabilitation and long-term functional improvement. We also perform SEMLS in our practice, applying comprehensive surgical planning to achieve the best possible outcomes for our patients.'
    ],
    images: getImages(0, 4, 2),
    video: null,
  },
];

export default patientCases;
