import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x12506457F3E5565e52C6e6A8aad05bc5EC0d4d1E",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Key of Root",
        description: "This NFT will give you access to SecDAO!",
        image: readFileSync("scripts/assets/seccoder.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
// app address 0x0F603Ac3092bDbe26e2fdBD228caF5ec15fe8791