self.onmessage = async () => {
  try {
    // 1. Fetch the local file
    const response = await fetch('random_art.png');
    
    if (!response.ok) throw new Error("Could not find the file");

    const blob = await response.blob();

    // 2. Turn it into a Bitmap so the worker can "see" it
    const bitmap = await createImageBitmap(blob);

    // 3. Use OffscreenCanvas to grab the actual pixels
    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bitmap, 0, 0);

    // This gives you an array of RGBA values
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    console.log("Got the pixels! Array length:", imageData.data.length);

    // --- YOUR LOGIC GOES HERE ---
    // Example: Loop through pixels
    // for (let i = 0; i < imageData.data.length; i += 4) {
    //   let r = imageData.data[i];
    //   let g = imageData.data[i+1];
    //   let b = imageData.data[i+2];
    // }

    self.postMessage("Image processed successfully");

  } catch (err) {
    self.postMessage("Error: " + err.message);
  }
};
