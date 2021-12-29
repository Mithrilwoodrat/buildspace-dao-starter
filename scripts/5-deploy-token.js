import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x0F603Ac3092bDbe26e2fdBD228caF5ec15fe8791");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "SecDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "HackerPoint",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();

//Your app address is: 0x0F603Ac3092bDbe26e2fdBD228caF5ec15fe8791
//✅ Successfully deployed token module, address: 0xa5aD6CfEE2A737aE7965fc928c0E2c4cAfd8eBf4