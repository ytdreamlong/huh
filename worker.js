// This tells Wrangler to grab the file at build time
import imageData from "./random_art.png";

export default {
  async fetch(request, env, ctx) {
    try {
      // 'imageData' is now an ArrayBuffer automatically!
      
      // Your processing logic goes here...
      
      return new Response(imageData, {
        headers: { "Content-Type": "image/png" }
      });
    } catch (e) {
      return new Response("Error: " + e.message, { status: 500 });
    }
  }
};
