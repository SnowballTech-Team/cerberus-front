// eslint-disable-next-line simple-import-sort/imports
import "./style.scss";
import { useEffect, useState, useCallback } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useWeb3Context } from "./hooks";
import { shouldTriggerSafetyCheck } from "./helpers";
import { loadAppDetails } from "./slices/AppSlice";
import { error, info } from "./slices/MessagesSlice";
import { useGoogleAnalytics } from "./hooks/useGoogleAnalytics";
import { trackGAEvent } from "./helpers/analytics";
import HomeLayout from "./components/HomeLayout";
import Home from "./views/Home";
import CDoge from "./views/CDoge";
import CNFT from "./views/CNFT";
import NotFound from "./views/404/NotFound";

const DEBUG = false;

// 🛰 providers
if (DEBUG) console.log("📡 Connecting to Mainnet Ethereum");
// 🔭 block explorer URL

function App() {
  useGoogleAnalytics();
  const dispatch = useDispatch();

  const { address, connect, connectionError, hasCachedProvider, provider, connected, networkId, providerInitialized } =
    useWeb3Context();

  const [walletChecked, setWalletChecked] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function loadDetails(whichDetails: string) {
    const loadProvider = provider;

    if (whichDetails === "app") {
      loadApp(loadProvider);
    }

    // don't run unless provider is a Wallet...
    if (whichDetails === "account" && address && connected) {
      loadAccount();
    }
  }

  const loadApp = useCallback(
    loadProvider => {
      dispatch(loadAppDetails({ networkID: networkId, provider: loadProvider }));
    },
    [dispatch, networkId],
  );

  const loadAccount = useCallback(() => {
    if (!providerInitialized) {
      return;
    }
  }, [providerInitialized]);

  useEffect(() => {
    if (hasCachedProvider()) {
      // then user DOES have a wallet
      connect().then(() => {
        setWalletChecked(true);
        trackGAEvent({
          category: "App",
          action: "connect",
        });
      });
    } else {
      // then user DOES NOT have a wallet
      setWalletChecked(true);
    }
    if (shouldTriggerSafetyCheck()) {
      dispatch(info("Safety Check: Always verify you're on mbtc!"));
    }
  }, [connect, dispatch, hasCachedProvider]);

  // this useEffect fires on state change from above. It will ALWAYS fire AFTER
  useEffect(() => {
    // don't load ANY details until wallet is Checked
    if (walletChecked) {
      if (networkId !== -1) {
        loadDetails("account");
        loadDetails("app");
      }
    }
  }, [walletChecked, networkId, loadDetails]);

  // this useEffect picks up any time a user Connects via the button
  useEffect(() => {
    // don't load ANY details until wallet is Connected
    if (connected && providerInitialized) {
      loadDetails("account");
    }
  }, [connected, loadDetails, networkId, providerInitialized]);

  useEffect(() => {
    if (connectionError) dispatch(error(connectionError.text));
  }, [connectionError, dispatch]);

  return (
    <HomeLayout>
      <Route>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/cdoge" component={CDoge}></Route>
          <Route exact path="/cnft" component={CNFT}></Route>
          <Route component={NotFound} />
        </Switch>
      </Route>
    </HomeLayout>
  );
}

export default App;
