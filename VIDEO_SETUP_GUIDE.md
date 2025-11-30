# Guide: Adding MP4 Video Files to Patient Cases

## What You Need to Know Before Adding MP4 Files

### ✅ Already Configured (No Action Needed)

1. **Vite Configuration**: Video files (MP4, MOV, AVI, MKV) are configured as assets in `vite.config.js`
2. **Asset Handling**: Videos are treated as static assets to prevent parsing errors

### 📋 Steps to Add MP4 Files

1. **Place Your MP4 Files**:
   - Add your MP4 files to: `src/assets/images/`
   - Keep the exact filename you'll reference in the code

2. **Add Videos to Cases Manually**:
   
   Open `src/data/patientCases.js` and add videos to specific cases using the `video` property:

   ```javascript
   {
     id: 'congenital-orthopedic-deformities-case-2',
     title: 'Congenital Orthopedic Deformities – Case 2',
     // ... other properties ...
     video: '/src/assets/images/Congenital Orthopedic Deformities7.MP4',
   }
   ```

   Or use relative import at the top of the file:
   
   ```javascript
   import videoFile from '@/assets/images/Congenital Orthopedic Deformities7.MP4?url';
   
   // Then in the case:
   video: videoFile,
   ```

3. **File Size Considerations**:
   - Large video files may slow down loading
   - Consider compressing videos for web (recommended: under 10MB per video)
   - Use formats: MP4 (H.264) for best browser compatibility

### 🔧 How It Works

- **Images**: Automatically discovered via glob pattern
- **Videos**: Must be manually added to avoid Vite parsing errors
- **Display**: Videos appear in the media carousel alongside images

### 📝 Example: Adding a Video

1. Place file: `src/assets/images/Congenital Orthopedic Deformities7.MP4`

2. Add to case in `src/data/patientCases.js`:
   ```javascript
   {
     id: 'congenital-orthopedic-deformities-case-2',
     // ... other properties ...
     video: '/src/assets/images/Congenital Orthopedic Deformities7.MP4',
     // or using import:
     // video: importedVideoUrl,
   }
   ```

### ⚠️ Important Notes

1. **Manual Addition Required**: Videos must be added manually to each case's `video` property
2. **Path Format**: Use `/src/assets/images/filename.mp4` or import with `?url` suffix
3. **File Names**: Keep filenames as-is (case-sensitive)
4. **Error Prevention**: Manual addition prevents Vite from trying to parse video files

### 🚀 After Adding Files

1. Add the video file to `src/assets/images/`
2. Update the case in `src/data/patientCases.js` with the video path
3. Restart your dev server:
   ```bash
   npm run dev
   ```

The videos will appear in the patient cases page!

