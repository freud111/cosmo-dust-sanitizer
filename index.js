const sanitizeHtml = require('sanitize-html');
const xss = require('xss');

/**
 * Sanitize HTML input to prevent XSS attacks.
 * @param {string} input - The HTML input to sanitize.
 * @returns {string} - The sanitized HTML.
 */
function sanitize(input) {
  // Use sanitize-html to sanitize the input
  const sanitizedHtml = sanitizeHtml(input);

  // Use xss library to further sanitize the HTML
  const sanitizedXss = xss(sanitizedHtml);

  return sanitizedXss;
}

module.exports = sanitize;
