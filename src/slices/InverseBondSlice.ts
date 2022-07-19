import { NetworkId } from "src/constants";

function checkNetwork(networkID: NetworkId) {
  if (networkID !== 1 && networkID !== 4) {
    //ENABLE FOR MAINNET LAUNCH
    throw Error(`Network=${networkID} is not supported for V2 bonds`);
  }
}
