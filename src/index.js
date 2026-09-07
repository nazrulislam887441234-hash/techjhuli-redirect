export default {
  async fetch(request) {
    const TARGET_URL = "https://www.ghotimarket.com";

    return Response.redirect(TARGET_URL, 301);
  },
};
