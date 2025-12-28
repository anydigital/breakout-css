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

The breakout effect automatically applies to:
- `img`, `figure`, `picture`
- `video`, `audio`
- `iframe`, `object`, `embed`, `canvas`
- `table`, `pre`
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

By default, breakout elements auto-size between 100% and 125% width. To force an element to always use the full 125% breakout width, use `.breakout-item-max`:

```html
<div class="breakout">
  <p>Regular content...</p>
  
  <!-- This will always be 125% width, never smaller -->
  <img src="wide-image.jpg" class="breakout-item-max" alt="Wide image">
  
  <p>More content...</p>
</div>
```

## How It Works

The breakout effect is achieved by:

1. Setting the element's width to 125% of its container
2. Using `transform: translateX(-50%)` to shift it left by half its width
3. Using `margin-left: 50%` to position it from the center of the container

This combination allows elements to extend beyond their parent container while remaining visually centered.

## License

MIT
