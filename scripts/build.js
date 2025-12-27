const fs = require('fs-extra');
const path = require('path');
const postcss = require('postcss');
const postcssNesting = require('postcss-nesting');
const postcssPresetEnv = require('postcss-preset-env');

const srcPath = path.join(__dirname, '..', 'src', 'breakout.css');
const outputPath = path.join(__dirname, '..', 'dist', 'breakout.css');

(async () => {
  const css = await fs.readFile(srcPath, 'utf8');
  const result = await postcss([
    postcssNesting(),
    postcssPresetEnv({ stage: 0, features: { 'nesting-rules': false } }),
  ]).process(css, { from: srcPath, to: outputPath });

  await fs.ensureDir(path.dirname(outputPath));
  await fs.writeFile(outputPath, result.css);
  console.log('✓ Build complete: dist/breakout.css');
})().catch(console.error);
