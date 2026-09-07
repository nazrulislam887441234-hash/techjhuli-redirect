export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // তোমার নতুন সাইট
    const destinationBase = "https://www.ghotimarket.com";

    // Option A: সবাইকে Homepage এ পাঠাবে (তুমি এটাই চেয়েছো)
    const redirectUrl = `${destinationBase}/?utm_source=techjhuli&utm_medium=redirect`;

    // Option B: যদি Path সহ পাঠাতে চাও, উপরের লাইন কমেন্ট করে নিচের 2 লাইন চালু করো
    // const newUrl = new URL(destinationBase);
    // newUrl.pathname = url.pathname;
    // newUrl.search = url.search;
    // const redirectUrl = newUrl.toString();

    return new Response(null, {
      status: 301,
      headers: {
        "Location": redirectUrl,
        "Cache-Control": "public, max-age=86400",
        "X-Robots-Tag": "noindex"
      }
    });
  }
}
