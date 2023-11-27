import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const imageBuffer = 'https://gateway.ipfs.io/ipfs/QmcV7tBx7YfYA8pQZDqKpV7pVSPLnJNqN8byeesF5ME2Vy';
    const editionDrop = await sdk.getContract("Edition_drop_address", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Old Money Bike collection",
        description: "This NFT will give you access to BikeDAO!",
        image: imageBuffer,
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
