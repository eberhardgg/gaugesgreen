# Gauges Green Design System

Inspired by McKenzie (clarity), Zhuo (editorial), van Schneider (polish).

## Core Principles

1. **No decorative elements** — No cards, no borders, no shadows, no icons
2. **Typography is the design** — Hierarchy through size and weight alone
3. **Generous whitespace** — Let content breathe
4. **High contrast** — Dark on light, light on dark, nothing in between

## Typography Scale

Using fluid typography with clamp() for responsive scaling without breakpoints.

| Level | Class | Size Range | Usage |
|-------|-------|------------|-------|
| **Display** | `text-display` | 2.5rem → 3.5rem | Name/hero only |
| **Headline** | `text-headline` | 1.5rem → 2rem | Section titles |
| **Body** | `text-body` | 1.125rem | All body copy |
| **Small** | `text-sm` | 0.875rem | Meta, dates, captions |

### Font Stack
- **Body**: Inter, system-ui, sans-serif
- **Fallback**: System fonts for fast load

### Line Height
- Display/Headlines: 1.1
- Body: 1.6
- Small: 1.5

## Colors

Minimal palette. High contrast only.

```
Light mode:
  Background:  white
  Text:        #111 (near black)
  Muted:       #666 (secondary text)
  Accent:      #16a34a (green-600, used sparingly)
  Divider:     #e5e5e5

Dark mode:
  Background:  #0a0a0a
  Text:        #fafafa
  Muted:       #a1a1a1
  Accent:      #22c55e (green-500)
  Divider:     #262626
```

## Spacing

Vertical rhythm based on 1.5rem (24px) baseline.

| Element | Spacing |
|---------|---------|
| Section gap | 6rem (96px) |
| Paragraph gap | 1.5rem (24px) |
| List item gap | 0.75rem (12px) |
| Page top padding | 4rem (64px) |
| Page bottom padding | 6rem (96px) |

## Layout

- **Max width**: 38rem (608px) for optimal reading
- **Page padding**: 1.5rem on mobile, 2rem on desktop
- **No grid** — Single column, always

## Containers

**None.** No cards, no boxes, no borders around content.

Use horizontal rules (`<hr>`) sparingly to separate major sections:
```html
<hr class="my-24 border-t border-gray-200 dark:border-gray-800" />
```

## Buttons

One style only. Minimal.

```html
<a class="inline-block text-body font-medium text-green-600 dark:text-green-500 hover:underline">
  Book a call →
</a>
```

For primary CTA (rare):
```html
<a class="inline-block px-6 py-3 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900">
  Book a call
</a>
```

## Links

```html
<a class="text-green-600 dark:text-green-500 hover:underline">Link text</a>
```

## Lists

Simple, no bullets for navigation/feature lists:
```html
<ul class="space-y-3">
  <li>Item one</li>
  <li>Item two</li>
</ul>
```

## What NOT to Use

- Card borders
- Background colors on containers
- Icons (except navigation)
- Shadows
- Rounded corners
- Decorative dividers
- Multiple columns on content
- Images (except profile photo)

## Page Structure

```
[Nav - minimal, right-aligned links]

[Hero]
  Display: Name
  Body: One-line tagline
  Body: One paragraph proof
  Link: CTA

<hr>

[Section]
  Headline: Title
  Body: Content as prose or simple list

<hr>

[Section]
  ...

[Footer - minimal]
```
