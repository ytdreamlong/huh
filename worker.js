export default {
  async fetch(request, env) {
    // env.ART_DATA will be our Base64 string
    const base64String = env.ART_DATA;

    // Convert Base64 back to binary
    const binaryString = atob(base64String);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Now 'bytes' is your image data!
    return new Response(bytes, {
      headers: { "Content-Type": "image/png" }
    });
  }
};
