export default {
  async fetch(request) {
    const imgBBUrl = "https://cdn.discordapp.com/clan-badges/1317975081976332338/059741bbde35c502c39549f23de4dab8.png?size=16";

    // Fetch the image from ImgBB
    const imageResponse = await fetch(imgBBUrl);

    // Create a new response so we can set our own headers
    const response = new Response(imageResponse.body, imageResponse);
    
    // Add headers to make sure it displays correctly in BBCode [img] tags
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Content-Type", "image/png");
    response.headers.set("Cache-Control", "public, max-age=604800");

    return response;
  }
};
