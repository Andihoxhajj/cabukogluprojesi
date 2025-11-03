// Import all images from assets/images except 1.png and doctor-portrait.svg and video files
// Use alias-based glob (same approach as other data files) and include PNG/JPG
const imageModules = import.meta.glob(
  '@/assets/images/**/*.{png,PNG,jpg,jpeg,JPG,JPEG}',
  {
    eager: true,
    import: 'default',
  }
);

// Filter using the original file path (keys), then map to resolved URLs (module.default)
const projectImages = Object.entries(imageModules)
  .filter(([path]) => {
    // Exclude known non-gallery assets and videos
    if (/doctor-portrait\.svg$/i.test(path)) return false;
    if (/\.(mp4|mov|avi|mkv)$/i.test(path)) return false;
    // Exclude 1.png / 1.jpg placeholders explicitly by filename
    if (/\/1\.(png|jpe?g)$/i.test(path)) return false;
    return true;
  })
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, url]) => url)
  .filter(Boolean);

export default projectImages;

