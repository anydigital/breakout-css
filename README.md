# breakout-css

Modern CSS utilities to easily break-out / hang / pop-out / bleed images, tables, iframes, and other figures from their parent container.

## Installation

### From CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@anydigital/breakout-css@1/dist/breakout.css"
/>
```

### From Source

```css
@import "@anydigital/breakout-css";
```

^ This is supported by Tailwind v4!

## Usage

### Basic Usage

```html
<div class="breakout">
  <h1>Article Title</h1>
  <p>Lorem ipsum dolor sit amet...</p>

  <!-- This image will automatically break out -->
  <img src="hero.jpg" alt="Hero image" />

  <p>More content here...</p>
</div>
```

### Supported Elements

The breakout effect automatically applies to direct children or elements wrapped in `<p>` tags:

**Inline blocks:**

- `img`, `picture`, `figure`, `canvas`, `audio`

**Larger blocks:**

- `table` (responsive with horizontal scroll support), `pre`
- `iframe`, `object`, `embed`, `video`

**Custom utility classes:**

- Elements with `.breakout-item` or `.breakout-item-max` class

### Headings & Dividers

For decorative headings and full-width dividers, use the `.breakout-headings` class. This adds a subtle accent line to the left of headings and makes horizontal rules span the full viewport width:

```html
<div class="breakout-headings">
  <h2>Section Title</h2>
  <p>Some content...</p>

  <hr />

  <h3>Subheading</h3>
  <p>More content...</p>
</div>
```

The extension applies to the following elements (when they don't have other classes):

- `h2`, `h3`, `h4` (adds decorative accent line)
- `hr` (breaks out to full viewport width)

_Note: The decorative accent on headings is automatically hidden if the heading immediately follows an `<hr>` to avoid visual overlap._

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
  <img src="wide-image.jpg" class="breakout-item-max" alt="Wide image" />

  <p>More content...</p>
</div>
```

Note: `.breakout-item-max` uses `width: 125% !important` to override default sizing.

## How It Works

The `.breakout` container applies `padding-inline: 10%` to create space for breakout elements.

The breakout effect on elements is achieved by:

1. Setting `width: fit-content` with `min-width: 100%` and `max-width: 125%` (inline blocks like `img`, `picture`, `figure`, `canvas`, and `audio` use `min-width: auto` instead). Tables are handled specially to be full-bleed (`max-width: 100vw`) with internal horizontal padding (`7.5%`) and horizontal scroll support.
2. Using `margin-left: 50%` to position from the center of the container
3. Using `transform: translateX(-50%)` to shift it left by half its width

This combination allows elements to extend beyond their parent container (up to 125% width) while remaining visually centered.

The `.breakout-headings` utility works by:

1. Adding a `::before` pseudo-element to headings (`h2-h4`) positioned to the left.
2. Using a `100vw` width and negative translation on `hr::before` to create a full-width divider.

### Markdown Support

The breakout effect works on direct children of `.breakout`, or elements wrapped in `<p>` tags (for Markdown compatibility where images are often wrapped in paragraphs).

## License

MIT
