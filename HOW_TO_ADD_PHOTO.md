# How to Add Your Profile Photo

## Quick Guide

Your portfolio is ready to display your professional photo! Follow these simple steps:

## Option 1: Local Photo (Recommended)

### Step 1: Prepare Your Photo
- **Size**: 600x600 pixels or larger (square format)
- **Format**: JPG or PNG
- **Quality**: High-resolution, professional headshot
- **File size**: Keep under 500KB for fast loading

### Step 2: Add Photo to Project
1. Save your photo as `profile.jpg` in the `public` folder
   ```
   Portfolio/
   ├── public/
   │   └── profile.jpg  ← Save here
   ```

### Step 3: Update ProfileSection Component
1. Open `src/components/ProfileSection.jsx`
2. Find this section (around line 55):
   ```jsx
   <div className="profile-image">
     {/* Placeholder - Replace with your actual photo */}
     <div className="profile-placeholder">
       <span className="profile-initials">NK</span>
     </div>
     {/* To use your photo, uncomment below... */}
   </div>
   ```

3. Replace it with:
   ```jsx
   <div className="profile-image">
     <img src="/profile.jpg" alt="Narendra Keshkar" />
   </div>
   ```

### Step 4: Commit and Push
```bash
git add public/profile.jpg src/components/ProfileSection.jsx
git commit -m "Add profile photo"
git push
```

## Option 2: External URL

If your photo is hosted online (e.g., LinkedIn, cloud storage):

```jsx
<div className="profile-image">
  <img src="https://your-image-url.com/photo.jpg" alt="Narendra Keshkar" />
</div>
```

## Photo Tips

### Best Practices
- ✅ Professional headshot with good lighting
- ✅ Clean background (solid color or blurred)
- ✅ Face clearly visible
- ✅ Square crop (1:1 ratio)
- ✅ High contrast for better visibility

### Image Optimization
Before uploading, compress your image:
- Use [TinyPNG](https://tinypng.com) or similar
- Target 200-400KB file size
- Keep resolution at least 600x600px

## Animation Features

Your photo will have these effects:
- ✨ **Fade in from left** on scroll
- 🎭 **Scale animation** on hover
- 📍 **Parallax movement** while scrolling
- 🔴 **Red border glow** on hover
- 🌟 **Smooth transitions** throughout

## Testing Locally

```bash
npm run dev
```

Then visit `http://localhost:5173` and scroll down to see your photo animate in!

## Troubleshooting

### Photo not appearing?
- Check file name is exactly `profile.jpg`
- Verify file is in `public` folder
- Clear browser cache (Ctrl+Shift+R)
- Check browser console for errors

### Photo looks pixelated?
- Use higher resolution image (at least 600x600)
- Ensure image quality is high when saving

### Want different file name?
Change both places:
```jsx
<img src="/your-photo-name.jpg" alt="Narendra Keshkar" />
```

## Example Final Code

```jsx
<div className="profile-image">
  <img src="/profile.jpg" alt="Narendra Keshkar" />
</div>
```

That's it! Your photo will appear in a circular frame with beautiful animations. 🎉
