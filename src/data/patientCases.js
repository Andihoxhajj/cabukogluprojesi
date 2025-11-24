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
    id: 'cerebral-palsy',
    title: 'Cerebral Palsy',
    description: [
      'Cerebral palsy is a condition commonly seen in both developed and developing countries, spanning the fields of pediatric orthopedics, neurology, and physical medicine and rehabilitation. Globally, an estimated 18 million children and adults are living with cerebral palsy, making it one of the most prevalent lifelong childhood-onset motor disorders.',
      'When conservative methods are not sufficient, surgery may be recommended to improve alignment, enhance walking ability, and increase overall comfort—always tailored to the specific needs and functional goals of each child. In recent years, Single-Event Multilevel Surgery (SEMLS) has become a widely adopted and highly effective approach for children with cerebral palsy. By addressing multiple muscle, tendon, and bone deformities in a single surgical session, SEMLS allows for more efficient rehabilitation and provides significant long-term functional improvement.',
      'When children receive proper evaluation and treatment from pediatric orthopedic specialists, many are able to meet their daily functional needs, maintain self-care, and achieve meaningful levels of independence. With accurate diagnosis, timely intervention, and coordinated multidisciplinary management, a substantial proportion of children with cerebral palsy can lead independent lives with minimal reliance on their families.',
      'Through this project, our goal is to identify children with strong walking potential and the ability to develop self-care independence, and to make advanced pediatric orthopedic care accessible to them—regardless of financial circumstances. In parallel, we aim to provide pediatric orthopedic surgeons worldwide with practical training, hands-on experience, and exposure to modern treatment strategies in cerebral palsy management, contributing to a global improvement in care standards.',
    ],
    images: getImages(0, 3, 3),
    video: null,
  },
  {
    id: 'tibial-hemimelia',
    title: 'Tibial Hemimelia',
    description: [
      'Tibial hemimelia is a rare congenital condition characterized by partial or complete absence of the tibia, resulting in significant limb deformity and functional limitations. Early diagnosis and timely referral to a specialized center are critical for optimizing mobility and ensuring the best possible long-term outcomes for affected children.',
      'Advances in modern reconstructive surgery and limb-preservation techniques have transformed the treatment landscape. Many children who once faced inevitable amputation can now benefit from sophisticated, functional limb-reconstruction procedures. Families should seek prompt pediatric orthopedic evaluation if they notice leg-length discrepancy, ankle instability, or significant foot deformity in their child.',
      'Despite these advancements, amputation continues to be the predominant treatment approach worldwide. Limb-salvage reconstructive procedures are performed in only a small number of highly specialized centers with the necessary expertise and infrastructure.',
      'Through this initiative, our goal is to implement state-of-the-art limb-preserving surgical techniques for children with tibial hemimelia and to make these advanced treatments accessible to families regardless of financial circumstance. In parallel, we aim to develop a comprehensive educational framework to share, teach, and standardize these complex procedures globally.'
    ],
    images: getImages(0, 3, 3), // Use first 3 images as placeholder
    video: null, // Can be set to video URL if needed
  },
  {
    id: 'proximal-femoral-insufficiency',
    title: 'Proximal Femoral Insufficiency',
    description: [
      'Proximal femoral insufficiency is a congenital disorder in which the upper segment of the femur and the hip joint fail to develop fully, resulting in significant structural weakness and mechanical instability. Affected children may experience marked leg-length discrepancy, restricted hip motion, a persistent limp, and difficulty maintaining balance during walking.',
      'Despite advances in reconstructive techniques, amputation remains the most common treatment strategy worldwide. Limb-salvage reconstructive procedures are performed only in a small number of highly specialized centers with the necessary expertise and infrastructure.',
      'Through this initiative, our objective is to offer children with proximal femoral focal deficiency access to cutting-edge limb-preserving surgical methods—interventions that have the potential to restore alignment, improve mobility, and prevent lifelong disability. We are committed to providing these advanced treatments regardless of a family’s financial circumstances. In parallel, we aim to establish a comprehensive educational framework to disseminate, teach, and standardize these complex reconstructive techniques globally, ensuring that more children around the world can benefit from limb-preserving care.'
    ],
    images: getImages(3, 6, 2),
    video: null,
  },
  {
    id: 'fibular-hemimelia',
    title: 'Fibular Hemimelia',
    description: [
      'Fibular hemimelia is a congenital condition in which the outer bone of the lower leg (the fibula) is partially or completely absent, leading to varying degrees of leg-length discrepancy, foot and ankle deformities, and knee instability.',
      'Thanks to advances in modern pediatric orthopedics—such as limb reconstruction, deformity correction, foot realignment procedures, and lengthening techniques—many children with fibular hemimelia can now achieve stable, well-aligned, and fully functional limbs, allowing them to participate actively in daily life.',
      'Our aim is to provide free surgical care to children with these deformities who lack adequate financial resources, and to train pediatric orthopedic surgeons in these techniques—ultimately enabling these children to experience the quality of life and happiness they deserve.'
    ],
    images: getImages(6, 9, 2),
    video: null,
  },
  {
    id: 'congenital-orthopedic-deformities',
    title: 'Congenital Orthopedic Deformities',
    description: [
      'Congenital orthopedic deformities are structural abnormalities of the bones, joints, or limbs that are present at birth. These conditions can affect the arms, legs, spine, or overall musculoskeletal alignment.',
      'Congenital upper limb deformities occur due to disruptions in limb development during early pregnancy and can range from mild cosmetic differences to severe functional limitations.',
      'Common examples include radial longitudinal deficiency (radial club hand), ulnar longitudinal deficiency, syndactyly (webbed fingers), polydactyly (extra fingers), thumb hypoplasia or absence, Madelung deformity, and congenital constriction band syndrome.',
      'Treatment strategies vary widely based on the type and severity of the deformity. With timely intervention and structured rehabilitation, many children achieve strong functional outcomes, improved hand use, and enhanced quality of life.',
      'Our mission is to restore functional upper or lower limbs in children with congenital anomalies, enabling them to achieve independence in daily self-care. To fulfill this goal, we aim to reach families with limited financial resources, provide their children with comprehensive treatment, and offer advanced training to pediatric orthopedic surgeons who specialize in these complex conditions.'
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
