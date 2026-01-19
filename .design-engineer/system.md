# Gauges Green Design System

## Typography Scale

**Principle: Minimal type sizes. Use weight and color for hierarchy, not size.**

| Level | Class | Usage |
|-------|-------|-------|
| **Page title** | `text-3xl font-semibold` | One per page. The main heading. |
| **Section heading** | `text-xl font-semibold` | Section titles like "How It Works" |
| **Body / Card titles** | `text-base` (default) | All body copy. Use `font-semibold` for card titles. |
| **Meta / Small** | `text-sm` | Dates, captions, secondary info, links |

### Rules

1. **Never use arbitrary sizes** - no `text-lg`, `text-2xl`, `text-4xl`, `text-[15px]`
2. **Card titles are body size** - differentiate with `font-semibold`, not larger text
3. **Use color for hierarchy** - `text-gray-900` for primary, `text-gray-600` for body, `text-gray-500` for meta
4. **Responsive sizes are forbidden** - no `md:text-xl` patterns. Size is constant.

## Colors

```
Primary text:    text-gray-900 dark:text-white
Body text:       text-gray-600 dark:text-gray-400
Meta text:       text-gray-500 dark:text-gray-500
Accent:          text-primary (green)
```

## Spacing

- Container: `max-w-2xl mx-auto px-6 md:px-8`
- Section padding: `py-12`
- Card padding: `p-6`
- Card stack gap: `space-y-4`

## Cards

All content cards use the same structure:

```html
<div class="p-6 border border-gray-200 dark:border-gray-800">
  <p class="font-semibold text-gray-900 dark:text-white mb-2">Title</p>
  <p class="text-base text-gray-600 dark:text-gray-400">Description</p>
</div>
```

## Buttons

Primary button:
```html
<a class="inline-flex items-center justify-center px-5 py-2 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900">
```

Secondary/outline button:
```html
<a class="inline-flex items-center justify-center px-5 py-2 text-sm font-medium border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white">
```

Text link:
```html
<a class="text-sm text-primary hover:underline">Link →</a>
```
