# cosmo-dust-sanitizer

`cosmo-dust-sanitizer` is a JavaScript library for sanitizing HTML content using two popular libraries, `sanitize-html` and `xss`. It provides a simple interface to sanitize HTML strings, making them safe for rendering in web applications.

## Installation

You can install `cosmo-dust-sanitizer` via npm:

```bash
npm install cosmo-dust-sanitizer
```

## Usage

First, require the library in your project:

```javascript
const CosmicDustSanitizer = require('cosmo-dust-sanitizer');
```

Then, create an instance of `CosmicDustSanitizer` with optional configuration options:

```javascript
const sanitizer = new CosmicDustSanitizer(options);
```

### Sanitizing HTML

The library offers two methods for sanitizing HTML content:

1. **Sanitize with sanitize-html**:

   ```javascript
   const sanitizedHtml = sanitizer.sanitizeWithSanitizeHtml(html);
   ```

2. **Sanitize with xss**:

   ```javascript
   const sanitizedHtml = sanitizer.sanitizeWithXss(html);
   ```

## Example

```javascript
const CosmicDustSanitizer = require('cosmo-dust-sanitizer');

const sanitizer = new CosmicDustSanitizer();

const unsafeHtml = '<script>alert("XSS attack!")</script>';
const sanitizedHtml = sanitizer.sanitizeWithXss(unsafeHtml);

console.log(sanitizedHtml);
// Output: '&lt;script&gt;alert("XSS attack!")&lt;/script&gt;'
```

## API

### `new CosmicDustSanitizer(options)`

Creates a new instance of `CosmicDustSanitizer` with optional configuration options.

- `options` (Object): Optional configuration options for the sanitizer.

### `sanitizeWithSanitizeHtml(html)`

Sanitizes the provided HTML string using the `sanitize-html` library.

- `html` (String): The HTML string to sanitize.

Returns the sanitized HTML string.

### `sanitizeWithXss(html)`

Sanitizes the provided HTML string using the `xss` library.

- `html` (String): The HTML string to sanitize.

Returns the sanitized HTML string.

## License

This project is licensed under the [MIT License](LICENSE).
