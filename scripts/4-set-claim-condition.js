import sdk from "./1-initialize-sdk.js";
// import {bootstrap} from 'global-agent';
// bootstrap();
// set GLOBAL_AGENT_HTTP_PROXY=http://127.0.0.1:7890

const bundleDrop = sdk.getBundleDropModule(
  "0x12506457F3E5565e52C6e6A8aad05bc5EC0d4d1E",
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });
    
    
    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Successfully set claim condition on bundle drop:", bundleDrop.address);
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})()

//Your app address is: 0x0F603Ac3092bDbe26e2fdBD228caF5ec15fe8791
//✅ Successfully set claim condition on bundle drop: 0x12506457F3E5565e52C6e6A8aad05bc5EC0d4d1E