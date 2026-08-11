# How to Add Your Photo

## Steps to Replace the Placeholder with Your Photo:

1. **Prepare Your Photo:**
   - Use a high-quality professional photo
   - Recommended size: 600x600 pixels (square)
   - Format: JPG or PNG
   - File size: Under 500KB for optimal loading

2. **Add Photo to Project:**
   - Save your photo as `profile.jpg` in the `public` folder
   - Or use any name you prefer (e.g., `narendra.jpg`)

3. **Update ProfileSection Component:**
   - Open `src/components/ProfileSection.jsx`
   - Find the commented section:
     ```jsx
     {/* Replace the placeholder with an actual image:
         <img src="/path/to/your/photo.jpg" alt="Narendra Keshkar" />
     */}
     ```
   - Replace it with:
     ```jsx
     <img src="/profile.jpg" alt="Narendra Keshkar" />
     ```
   - Remove or comment out the placeholder div:
     ```jsx
     {/* <div className="profile-placeholder">
       <span className="profile-initials">NK</span>
     </div> */}
     ```

4. **Using External URL (Optional):**
   - If your photo is hosted online (e.g., LinkedIn, cloud storage):
     ```jsx
     <img src="https://your-image-url.com/photo.jpg" alt="Narendra Keshkar" />
     ```

## Example Final Code:

```jsx
<div className="profile-image">
  <img src="/profile.jpg" alt="Narendra Keshkar" />
</div>
```

The circular styling is already applied via CSS, so your photo will automatically appear in a perfect circle!
