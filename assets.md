# Media & Asset Guide for the Art & Design Team

This guide outlines every video, image, and graphic asset needed for the website. 

To make it as simple as possible, use the exact filenames below. When you drop these files into the `assets/media/` or `assets/icons/` folders, the website can link to them directly.

---

## 📁 Folder Structure

Place your exported files into these folders:

```
plasticracks/
└── assets/
    ├── media/       <-- Put all background videos, project photos, and showcase images here
    └── icons/       <-- Put all logos, brand marks, client logos, and vector icons here
```

---

## 🎬 1. Hero Video & Banner

The hero section at the top of the page plays a smooth, silent looping video behind the main headline.

| Target Filename | Location | Format | Recommended Size | Aspect Ratio | Max File Size | Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `first-banner-video-1080p.mp4` | `assets/media/` | MP4 (H.264, no audio) | **1920 × 1080 px** | 16:9 Landscape | < 8 MB | Silent looping video showing architectural spaces, dynamic lighting, or installation motion (8–15 seconds duration). |
| `first-banner-poster-1920x1080.webp` | `assets/media/` | WebP or JPG | **1920 × 1080 px** | 16:9 Landscape | < 350 KB | Fallback still image shown while the video loads or on low-power mobile devices. |

> **Pro Tip for Videos:** 
> - Remove the audio track completely (reduces file size by ~20%).
> - Make sure the video is bright and high contrast. The website automatically applies a subtle readable overlay, so you **do not** need to darken the video before exporting.

---

## 🏷️ 2. Brand Logos & Favicons

High-resolution logos with transparent backgrounds.

| Target Filename | Location | Format | Recommended Size | Aspect Ratio | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `logo-light-800x600.png` | `assets/icons/` | PNG (Transparent) or SVG | **800 × 600 px** canvas (or vector) | 4:3 canvas | White or light logo for dark backgrounds (like the hero section). |
| `logo-dark-800x600.png` | `assets/icons/` | PNG (Transparent) or SVG | **800 × 600 px** canvas (or vector) | 4:3 canvas | Dark charcoal or black logo for white headers and white document cards. |
| `favicon-512x512.png` | `assets/icons/` | PNG | **512 × 512 px** | 1:1 Square | High-res square icon for browser tabs, bookmarks, and mobile home screens. |

---

## 🪟 3. Interactive Showcase (Horizontal Expanding Accordion)

The showcase features 4 interactive panels that expand when hovered or clicked. Because each panel expands from narrow to wide, high-resolution images with center-focused composition work best.

| Target Filename | Location | Format | Recommended Size | Aspect Ratio | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `showcase-01-flagship-1600x1200.webp` | `assets/media/` | WebP or JPG | **1600 × 1200 px** | 4:3 (or 16:9) | Flagship interior installation (e.g. dynamic canvas walls, retail space). Center subject. |
| `showcase-02-gallery-1600x1200.webp` | `assets/media/` | WebP or JPG | **1600 × 1200 px** | 4:3 (or 16:9) | Illuminated exhibition or gallery space with warm or architectural lighting. |
| `showcase-03-concept-1600x1200.webp` | `assets/media/` | WebP or JPG | **1600 × 1200 px** | 4:3 (or 16:9) | Minimalist concept store with clean structural partition systems. |
| `showcase-04-digital-1600x1200.webp` | `assets/media/` | WebP or JPG | **1600 × 1200 px** | 4:3 (or 16:9) | Dynamic kinetic or sensory installation with curved lightboxes. |

---

## 📦 4. Core Systems & Hardware Cards (3-Column Grid)

Crisp landscape photographs highlighting specific hardware, structures, or product details.

| Target Filename | Location | Format | Recommended Size | Aspect Ratio | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `system-01-lightboxes-1200x800.webp` | `assets/media/` | WebP or JPG | **1200 × 800 px** | 3:2 Landscape | Close-up / medium shot of illuminated fabric lightboxes and edge profiles. |
| `system-02-uprights-1200x800.webp` | `assets/media/` | WebP or JPG | **1200 × 800 px** | 3:2 Landscape | Structural modular uprights, aluminum framing, or interlocking hardware. |
| `system-03-interactive-1200x800.webp` | `assets/media/` | WebP or JPG | **1200 × 800 px** | 3:2 Landscape | Interactive digital display canvas or smart sensory integration. |

---

## 🤝 5. Client & Partner Brand Badges

Monochrome logos shown in the client trust section. They look cleanest when converted to flat white or 50% grey with transparent backgrounds.

| Target Filename | Location | Format | Recommended Size | Aspect Ratio | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `client-01-logo-400x200.png` | `assets/icons/` | PNG (Transparent) or SVG | **400 × 200 px** | 2:1 Rectangular | Monochrome client logo #1 (White or light grey on transparent). |
| `client-02-logo-400x200.png` | `assets/icons/` | PNG (Transparent) or SVG | **400 × 200 px** | 2:1 Rectangular | Monochrome client logo #2. |
| `client-03-logo-400x200.png` | `assets/icons/` | PNG (Transparent) or SVG | **400 × 200 px** | 2:1 Rectangular | Monochrome client logo #3. |
| `client-04-logo-400x200.png` | `assets/icons/` | PNG (Transparent) or SVG | **400 × 200 px** | 2:1 Rectangular | Monochrome client logo #4. |
| `client-05-logo-400x200.png` | `assets/icons/` | PNG (Transparent) or SVG | **400 × 200 px** | 2:1 Rectangular | Monochrome client logo #5. |

---

## 🏭 6. Industrial Warehouse & Product Catalog (For Plastiracks Product Pages)

If providing photography for the heavy-duty plastic rack catalog:

| Target Filename | Location | Format | Recommended Size | Aspect Ratio | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `product-rack-structural-1200x900.webp` | `assets/media/` | WebP or JPG | **1200 × 900 px** | 4:3 | Heavy-duty structural rack loaded with pallets in a warehouse setting. |
| `product-rack-coldstorage-1200x900.webp` | `assets/media/` | WebP or JPG | **1200 × 900 px** | 4:3 | HDPE frost-resistant rack in a commercial cold storage freezer (-30°C). |
| `product-rack-hygienic-1200x900.webp` | `assets/media/` | WebP or JPG | **1200 × 900 px** | 4:3 | Washdown-ready cleanroom or pharmaceutical food-grade rack. |
| `product-rack-modular-1200x900.webp` | `assets/media/` | WebP or JPG | **1200 × 900 px** | 4:3 | Modular snap-lock assembly showing beam-to-column connector details. |

---

## 🎨 Quick Checklist Before Exporting

1. **Format Preference:** 
   - Photos: **`.webp`** (or `.jpg` at 82% quality).
   - Logos & Graphics: **`.png`** (with transparent background) or **`.svg`**.
   - Videos: **`.mp4`** (H.264 codec, muted / no audio channel).
2. **File Size Targets:**
   - Photos: Keep under **350 KB** each for fast instant loading.
   - Videos: Keep under **8 MB** each.
3. **No Spaces in Names:** Always use hyphens (`-`) instead of spaces (e.g., `first-banner-video-1080p.mp4`, never `first banner video.mp4`).
4. **Brightness & Colors:** Export images in natural, vivid lighting. Do not pre-darken them, as the website automatically manages overlay readability.
