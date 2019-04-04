/**
 * Scroll to top of the page
 * @source: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
 */
export function scrollTop() {
  if (
      document.documentElement.scrollTop !== 0 ||
      document.body.scrollTop !== 0
  ) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
