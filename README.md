# breakout-css

Modern CSS utilities to easily break-out / hang / pop-out images, iframes, or other "figures" from their parent container.

## Installation

### From CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@anydigital/breakout-css@1/dist/breakout.min.css">
```

### Precompiled CSS

```bash
npm install @anydigital/breakout-css
```

Import the compiled CSS file directly into your project:

```css
@import '@anydigital/breakout-css/dist/breakout.css';
```

### With Tailwind v4

Tailwind v4 supports native CSS nesting, so you can import the source file directly:

```css
@import '@anydigital/breakout-css/src/breakout.css';
```

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
- Elements with `.breakout-figure` class

### Manual Breakout

```html
<div class="breakout">
  <p>Regular content...</p>
  
  <div class="breakout-figure">
    <iframe src="https://example.com/embed"></iframe>
  </div>
  
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
