export async function getRandomArtworkUrl(fields = ["id", "title", "artist_id", "artist_title", "image_id"]) {
    try {
        const seed = await getRandomInt(0, 250);
        console.log("Image index ID: " + seed);
        const queryParams = { fields: fields.join(",") };
        const response = await fetch(
            `https://api.artic.edu/api/v1/artworks/search?size=1&from=${seed}`,
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(queryParams)
            }
        );
      const result = await response.json();
      const iiifUrl = result.config.iiif_url;
      const imageId = result.data[0].image_id;
      const img_append = '/full/843,/0/default.jpg'
      return `${iiifUrl}/${imageId}${img_append}`;
    } catch (error) {
      console.error("Error:", error);
      throw error; // Re-throwing the error for handling at the caller side if needed
    }
  }
function getRandomInt(min, max) {
    min = Math.ceil(min);
    // console.log("min: " + min);
    max = Math.floor(max);
    // console.log("max: " + max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  