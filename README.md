# breakout-css

Modern CSS utilities to easily break-out / hang / pop-out images, iframes, or other "figures" from their parent container.

## Installation

### From CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@anydigital/breakout-css@1/dist/breakout.min.css">
```

### From Source

```css
@import '@anydigital/breakout-css';
```

^ This is supported by Tailwind v4!

## Usage

### Basic Usage

```html
<div class="breakout">
  <h1>Article Title</h1>
  <p>Lorem ipsum dolor sit amet...</p>
  
  <!-- This image will automatically break out -->
  <img src="hero.jpg" alt="Hero image">
  
  <p>More content here...</p>
</div>
```

### Supported Elements

The breakout effect automatically applies to direct children or elements wrapped in `<p>` tags:

**Inline blocks:**
- `img`, `picture`, `figure`, `canvas`, `audio`

**Larger blocks:**
- `table`, `pre`
- `iframe`, `object`, `embed`, `video`

**Custom utility classes:**
- Elements with `.breakout-item` or `.breakout-item-max` class

### Manual Breakout

For elements that don't automatically break out, use the `.breakout-item` class:

```html
<div class="breakout">
  <p>Regular content...</p>
  
  <div class="breakout-item">
    <iframe src="https://example.com/embed"></iframe>
  </div>
  
  <p>More content...</p>
</div>
```

### Force Maximum Width

By default, breakout elements use `width: fit-content` with `max-width: 125%`, allowing them to size between 100% and 125% width based on their content. To force an element to always use the full 125% breakout width, use `.breakout-item-max`:

```html
<div class="breakout">
  <p>Regular content...</p>
  
  <!-- This will always be 125% width, never smaller -->
  <img src="wide-image.jpg" class="breakout-item-max" alt="Wide image">
  
  <p>More content...</p>
</div>
```

Note: `.breakout-item-max` uses `width: 125% !important` to override default sizing.

## How It Works

The `.breakout` container applies `padding-inline: 10%` to create space for breakout elements.

The breakout effect on elements is achieved by:

1. Setting `width: fit-content` with `min-width: 100%` and `max-width: 125%` (inline blocks like `img`, `picture`, `figure`, `canvas`, and `audio` use `min-width: auto` instead)
2. Using `margin-left: 50%` to position from the center of the container
3. Using `transform: translateX(-50%)` to shift it left by half its width

This combination allows elements to extend beyond their parent container (up to 125% width) while remaining visually centered.

### Markdown Support

The breakout effect works on direct children of `.breakout`, or elements wrapped in `<p>` tags (for Markdown compatibility where images are often wrapped in paragraphs).

## License

MIT
