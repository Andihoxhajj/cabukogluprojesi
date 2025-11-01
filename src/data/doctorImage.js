const portraitVariants = import.meta.glob('@/assets/images/1.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
});

const portraitInCases = import.meta.glob('@/assets/images/cases/1.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
});

const fallbackIllustration = import.meta.glob('@/assets/images/doctor-portrait.svg', {
  eager: true,
  import: 'default',
});

const remoteFallback = 'https://images.unsplash.com/photo-1551601651-012b6e1f2b72?auto=format&fit=crop&w=900&q=80';

const doctorPortrait =
  Object.values(portraitVariants)[0] ??
  Object.values(portraitInCases)[0] ??
  Object.values(fallbackIllustration)[0] ??
  remoteFallback;

export default doctorPortrait;

