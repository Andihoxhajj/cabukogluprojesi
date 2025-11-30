// Patient cases data
// Each case can have images (array) or video (string) or both

import allProjectImages from '@/data/projectImages.js';

// Import videos for nerve paralysis case
import nerveParalysisVideo1 from '../assets/images/Nerve paralysis due to birth trauma1.mp4?url';
import nerveParalysisVideo2 from '../assets/images/Nerve paralysis due to birth trauma2.mp4?url';

// Import videos for cerebral palsy case
import cerebralPalsyVideo1 from '../assets/images/Cerebral Palsy Orthopedic Care1.mp4?url';
import cerebralPalsyVideo2 from '../assets/images/Cerebral Palsy Orthopedic Care2.mp4?url';
import cerebralPalsyVideo3 from '../assets/images/Cerebral Palsy Orthopedic Care3.mp4?url';

// Import videos for tibial hemimelia case
import tibialHemimeliaVideo9 from '../assets/images/Tibial Hemimelia9.mp4?url';

// Import videos for tibial hemimelia case 2
import tibialHemilaVideo20 from '../assets/images/Tibial Hemila20.mp4?url';
import tibialHemilaVideo21 from '../assets/images/Tibial Hemila21.mp4?url';

// Import videos for proximal femoral focal deficiency case
import proximalFemoralVideo5 from '../assets/images/Proximal femoral focal deficiency5.mp4?url';
import proximalFemoralVideo6 from '../assets/images/Proximal femoral focal deficiency6.mp4?url';

// Import videos for fibular hemimelia case
import fibularHemimeliaVideo10 from '../assets/images/Fibular hemimelia10.mp4?url';

// Import videos for congenital orthopedic deformities case 2
import congenitalDeformitiesVideo7 from '../assets/images/Congenital Orthopedic Deformities7.MP4?url';
import congenitalDeformitiesVideo8 from '../assets/images/Congenital Orthopedic Deformities8.MP4?url';

// Get available images for placeholders
const availableImages = Array.isArray(allProjectImages) ? allProjectImages : [];

// Load images eagerly (videos are handled separately)
const imageModules = import.meta.glob('../assets/images/**/*.{png,PNG,jpg,jpeg,JPG,JPEG,webp,WEBP}', {
  eager: true,
  import: 'default',
});

// Videos should be added manually to avoid Vite parsing errors
// To add a video to a case, set the 'video' property to the filename
// Example: video: '/src/assets/images/Congenital Orthopedic Deformities7.MP4'
// Or import them manually at the top of the file if needed


const getMediaByPrefix = (prefix) => {
  const lowerPrefix = prefix.toLowerCase();
  const sources = [];

  // Add images
  Object.entries(imageModules).forEach(([path, resource]) => {
    if (!path.toLowerCase().includes(lowerPrefix)) return;
    sources.push(resource);
  });

  // Videos are handled separately using static imports to avoid parsing errors
  // They will be added manually or via a different mechanism

  return sources;
};

// Videos will be added manually to cases if needed
// They should be referenced using static paths like: '/src/assets/images/filename.mp4'

// Get media matching prefix with number range (e.g., "tibial hemila" with numbers 10-19)
const getMediaByPrefixAndRange = (prefix, startNum, endNum) => {
  const lowerPrefix = prefix.toLowerCase();
  const sources = [];

  // Add images
  Object.entries(imageModules).forEach(([path, resource]) => {
    const lowerPath = path.toLowerCase();
    if (!lowerPath.includes(lowerPrefix)) return;
    
    // Extract number from filename (e.g., "tibial hemila10" -> 10)
    const match = lowerPath.match(/(\d+)/);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num >= startNum && num <= endNum) {
        sources.push({ type: 'image', path, resource, num });
      }
    }
  });

  // Videos are handled separately to avoid Vite parsing errors
  // They can be added manually or via static imports if needed

  // Sort by number to maintain order
  sources.sort((a, b) => {
    if (a.num !== undefined && b.num !== undefined) {
      return a.num - b.num;
    }
    return a.path.localeCompare(b.path);
  });

  // Return resources (images as URLs, videos as lazy import functions)
  return sources.map(item => item.resource);
};

// Helper function to get images with fallback
const getImages = (start, end, fallbackCount = 2) => {
  const sliced = availableImages.slice(start, end);
  return sliced.length > 0 ? sliced : availableImages.slice(0, Math.min(fallbackCount, availableImages.length));
};

const proximalFemoralMedia = getMediaByPrefixAndRange('proximal femoral focal deficiency', 3, 4);
const tibialHemimeliaMedia = getMediaByPrefix('tibial hemimelia');
const tibialHemimeliaCase2Media = getMediaByPrefixAndRange('tibial hemila', 10, 21);
const fibularHemimeliaMedia = getMediaByPrefixAndRange('fibular hemimelia', 1, 9);
const congenitalDeformitiesMedia = getMediaByPrefixAndRange('congenital orthopedic deformities', 1, 7);
const congenitalDeformitiesCase2Media = getMediaByPrefixAndRange('congenital orthopedic deformities', 7, 8);
const cerebralPalsyMedia = getMediaByPrefixAndRange('cerebral palsy orthopedic care', 1, 3);
const nerveParalysisMedia = getMediaByPrefixAndRange('nerve paralysis due to birth trauma', 1, 2);

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
    media: [
      ...(cerebralPalsyMedia.length ? cerebralPalsyMedia : []),
      cerebralPalsyVideo1,
      cerebralPalsyVideo2,
      cerebralPalsyVideo3,
    ],
    images: !cerebralPalsyMedia.length ? getImages(0, 3, 3) : undefined,
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
    media: [
      ...(tibialHemimeliaMedia.length ? tibialHemimeliaMedia : []),
      tibialHemimeliaVideo9,
    ],
    images: !tibialHemimeliaMedia.length ? getImages(0, 3, 3) : undefined, // Fallback placeholders
    video: undefined,
  },
  {
    id: 'tibial-hemimelia-case-2',
    title: 'Tibial Hemimelia – Case 2',
    description: [
      'This second Tibial Hemimelia case illustrates another example of limb reconstruction and preservation in a child with severe tibial deficiency.',
      'As in other cases, the goal is to maximise limb function, preserve alignment and stability, and prevent lifelong disability through advanced reconstructive techniques.',
      'The images and videos here are placeholders for now and can later be replaced with dedicated media files specific to this patient.'
    ],
    media: [
      ...(tibialHemimeliaCase2Media.length ? tibialHemimeliaCase2Media : []),
      tibialHemilaVideo20,
      tibialHemilaVideo21,
    ],
    images: !tibialHemimeliaCase2Media.length ? getImages(0, 3, 3) : undefined,
    video: undefined,
  },
  {
    id: 'proximal-femoral-insufficiency',
    title: 'Proximal Femoral Insufficiency',
    description: [
      'Proximal femoral insufficiency is a congenital disorder in which the upper segment of the femur and the hip joint fail to develop fully, resulting in significant structural weakness and mechanical instability. Affected children may experience marked leg-length discrepancy, restricted hip motion, a persistent limp, and difficulty maintaining balance during walking.',
      'Despite advances in reconstructive techniques, amputation remains the most common treatment strategy worldwide. Limb-salvage reconstructive procedures are performed only in a small number of highly specialized centers with the necessary expertise and infrastructure.',
      'Through this initiative, our objective is to offer children with proximal femoral focal deficiency access to cutting-edge limb-preserving surgical methods—interventions that have the potential to restore alignment, improve mobility, and prevent lifelong disability. We are committed to providing these advanced treatments regardless of a family’s financial circumstances. In parallel, we aim to establish a comprehensive educational framework to disseminate, teach, and standardize these complex reconstructive techniques globally, ensuring that more children around the world can benefit from limb-preserving care.'
    ],
    media: [
      ...(proximalFemoralMedia.length ? proximalFemoralMedia : []),
      proximalFemoralVideo5,
      proximalFemoralVideo6,
    ],
    images: !proximalFemoralMedia.length ? getImages(3, 6, 2) : undefined,
    video: undefined,
  },
  {
    id: 'fibular-hemimelia',
    title: 'Fibular Hemimelia',
    description: [
      'Fibular hemimelia is a congenital condition in which the outer bone of the lower leg (the fibula) is partially or completely absent, leading to varying degrees of leg-length discrepancy, foot and ankle deformities, and knee instability.',
      'Thanks to advances in modern pediatric orthopedics—such as limb reconstruction, deformity correction, foot realignment procedures, and lengthening techniques—many children with fibular hemimelia can now achieve stable, well-aligned, and fully functional limbs, allowing them to participate actively in daily life.',
      'Our aim is to provide free surgical care to children with these deformities who lack adequate financial resources, and to train pediatric orthopedic surgeons in these techniques—ultimately enabling these children to experience the quality of life and happiness they deserve.'
    ],
    media: [
      ...(fibularHemimeliaMedia.length ? fibularHemimeliaMedia : []),
      fibularHemimeliaVideo10,
    ],
    images: !fibularHemimeliaMedia.length ? getImages(6, 9, 2) : undefined,
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
    media: congenitalDeformitiesMedia.length ? congenitalDeformitiesMedia : undefined,
    images: !congenitalDeformitiesMedia.length ? getImages(9, 12, 2) : undefined,
    video: null,
  },
  {
    id: 'congenital-orthopedic-deformities-case-2',
    title: 'Congenital Orthopedic Deformities – Case 2',
    description: [
      'This second Congenital Orthopedic Deformities case demonstrates another example of successful limb reconstruction and functional restoration in a child with complex congenital anomalies.',
      'As with other cases, the focus remains on maximizing function, improving alignment, and enabling independence through advanced surgical techniques and comprehensive rehabilitation.',
      'The images and videos here are placeholders and can be replaced with dedicated media files specific to this patient case.'
    ],
    media: [
      ...(congenitalDeformitiesCase2Media.length ? congenitalDeformitiesCase2Media : []),
      congenitalDeformitiesVideo7,
      congenitalDeformitiesVideo8,
    ],
    images: !congenitalDeformitiesCase2Media.length ? getImages(9, 12, 2) : undefined,
    video: null,
  },
  {
    id: 'nerve-paralysis-birth-trauma',
    title: 'Nerve paralysis due to birth trauma',
    description: [
      'Nerve paralysis due to birth trauma is a condition that can occur during delivery, affecting the peripheral nerves and potentially leading to functional limitations in affected limbs.',
      'Early diagnosis and appropriate intervention are crucial for optimizing recovery and functional outcomes. With proper evaluation and treatment, many children can achieve significant improvement in function and quality of life.'
    ],
    media: [
      ...(nerveParalysisMedia.length ? nerveParalysisMedia : []),
      nerveParalysisVideo1,
      nerveParalysisVideo2,
    ],
    images: !nerveParalysisMedia.length ? getImages(0, 2, 2) : undefined,
    video: null,
  },
];

export default patientCases;
