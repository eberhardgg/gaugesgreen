# OG Image Generation

## Generate Images

```bash
npm run generate:og
```

This creates 1200x630 PNG images in `/public/og/`:
- `home.png` - Homepage
- `schedule.png` - Schedule page
- `default.png` - Fallback for other pages

## Design

- Background: Deep green (#0a1f14)
- Text: Light warm gray (#e8e6e1)
- Watermark: "g" logo at 6% opacity, positioned right
- Left 35% kept clear for LinkedIn avatar overlay

## Refresh LinkedIn Cache

After deploying new OG images:

1. Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Enter the URL (e.g., `https://www.gaugesgreen.com/schedule`)
3. Click "Inspect"
4. LinkedIn will fetch the new OG image

## Twitter/X Cache

Twitter caches cards for ~7 days. To refresh sooner:

1. Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter the URL
3. Click "Preview card"

## Adding New Pages

1. Add configuration to `scripts/generate-og-images.mjs`:
   ```js
   {
     name: 'newpage.png',
     config: {
       title: 'Page Title',
       subtitle: 'Optional subtitle',
       showLogo: true,
     },
   },
   ```

2. Run `npm run generate:og`

3. Add `ogImage="/og/newpage.png"` prop to the page's LayoutMinimal
