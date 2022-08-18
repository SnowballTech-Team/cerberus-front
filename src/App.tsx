// eslint-disable-next-line simple-import-sort/imports
import "./style.scss";
import { useEffect, useState, useCallback } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useTheme from "./hooks/useTheme";
import useBonds from "./hooks/useBonds";
import { useWeb3Context, useAppSelector } from "./hooks";
import { shouldTriggerSafetyCheck } from "./helpers";

import { calcBondDetails } from "./slices/BondSlice";
import { loadAppDetails } from "./slices/AppSlice";
import { loadAccountDetails } from "./slices/AccountSlice";
import { error, info } from "./slices/MessagesSlice";

import { dark as darkTheme } from "./themes/dark.js";
import { dark as lightTheme } from "./themes/dark.js";
import { girth as gTheme } from "./themes/girth.js";
import { useGoogleAnalytics } from "./hooks/useGoogleAnalytics";
// import { getAllBonds } from "./slices/BondSliceV2";
import { NetworkId } from "./constants";
import { trackGAEvent } from "./helpers/analytics";
import { getAllInverseBonds } from "./slices/InverseBondSlice";
import { Home } from "./views/Home";
import { CDog } from "./views/CDog";
import { CNFT } from "./views/CNFT";
import { MillionDogClub } from "./views/MillionDogClub";
import { CommingSoon } from "./views/CommingSoon";
import { Berus } from "./views/Berus";
import HomeLayout from "./components/HomeLayout";
import { Referral } from "./views/Referral";
const DEBUG = false;

// 🛰 providers
if (DEBUG) console.log("📡 Connecting to Mainnet Ethereum");
// 🔭 block explorer URL

const drawerWidth = 257;
const transitionDuration = 969;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: transitionDuration,
    }),
    height: "100%",
    overflow: "auto",
    marginLeft: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: transitionDuration,
    }),
    marginLeft: 0,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

function App() {
  useGoogleAnalytics();
  const location = useLocation();
  const dispatch = useDispatch();
  const [theme, toggleTheme] = useTheme();
  const currentPath = location.pathname + location.hash + location.search;
  const trimmedPath = location.pathname + location.hash;
  const classes = useStyles();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { address, connect, connectionError, hasCachedProvider, provider, connected, networkId, providerInitialized } =
    useWeb3Context();

  const migModalClose = () => {
    dispatch(loadAccountDetails({ networkID: networkId, address, provider }));
  };

  const isSmallerScreen = useMediaQuery("(max-width: 980px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const [walletChecked, setWalletChecked] = useState(false);

  // TODO (appleseed-expiredBonds): there may be a smarter way to refactor this
  const { bonds, expiredBonds } = useBonds(networkId);

  const bondIndexes = useAppSelector(state => state.bondingV2.indexes);
  const inverseBondIndexes = useAppSelector(state => state.inverseBonds.indexes);

  async function loadDetails(whichDetails: string) {
    // NOTE (unbanksy): If you encounter the following error:
    // Unhandled Rejection (Error): call revert exception (method="balanceOf(address)", errorArgs=null, errorName=null, errorSignature=null, reason=null, code=CALL_EXCEPTION, version=abi/5.4.0)
    // it's because the initial provider loaded always starts with networkID=1. This causes
    // address lookup on the wrong chain which then throws the error. To properly resolve this,
    // we shouldn't be initializing to networkID=1 in web3Context without first listening for the
    // network. To actually test rinkeby, change setnetworkID equal to 4 before testing.
    const loadProvider = provider;

    if (whichDetails === "app") {
      loadApp(loadProvider);
    }

    // don't run unless provider is a Wallet...
    if (whichDetails === "account" && address && connected) {
      loadAccount(loadProvider);
    }
  }

  const loadApp = useCallback(
    loadProvider => {
      dispatch(loadAppDetails({ networkID: networkId, provider: loadProvider }));
      if (
        networkId === NetworkId.MAINNET ||
        networkId === NetworkId.TESTNET_RINKEBY ||
        networkId === NetworkId.BSC_TESTNET
      ) {
        bonds.map(bond => {
          // NOTE (appleseed): getBondability & getLOLability control which bonds are active in the view for Bonds V1
          // ... getClaimability is the analogue for claiming bonds
          if (bond.getBondability(networkId) || bond.getLOLability(networkId)) {
            dispatch(calcBondDetails({ bond, value: "", provider: loadProvider, networkID: networkId }));
          }
        });
        // dispatch(getAllBonds({ provider: loadProvider, networkID: networkId, address }));
        dispatch(getAllInverseBonds({ provider: loadProvider, networkID: networkId, address }));
      }
    },
    [networkId, address],
  );

  const loadAccount = useCallback(
    loadProvider => {
      if (!providerInitialized) {
        return;
      }
    },
    [networkId, address, providerInitialized],
  );

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
      dispatch(info("Safety Check: Always verify you're on btcz!"));
    }
  }, []);

  // this useEffect fires on state change from above. It will ALWAYS fire AFTER
  useEffect(() => {
    // don't load ANY details until wallet is Checked
    if (walletChecked) {
      if (networkId !== -1) {
        loadDetails("account");
        loadDetails("app");
      }
    }
  }, [walletChecked, networkId]);

  // this useEffect picks up any time a user Connects via the button
  useEffect(() => {
    // don't load ANY details until wallet is Connected
    if (connected && providerInitialized) {
      loadDetails("account");
    }
  }, [connected, networkId, providerInitialized]);

  useEffect(() => {
    if (connectionError) dispatch(error(connectionError.text));
  }, [connectionError]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarExpanded(false);
  };

  let themeMode = theme === "light" ? lightTheme : theme === "dark" ? darkTheme : gTheme;

  useEffect(() => {
    themeMode = theme === "light" ? lightTheme : darkTheme;
  }, [theme]);

  useEffect(() => {
    if (isSidebarExpanded) handleSidebarClose();
  }, [location]);

  const accountBonds = useAppSelector(state => {
    const withInterestDue = [];
    for (const bond in state.account.bonds) {
      if (state.account.bonds[bond].interestDue > 0) {
        withInterestDue.push(state.account.bonds[bond]);
      }
    }
    return withInterestDue;
  });

  return (
    <Route>
      <HomeLayout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/cdog" component={CDog}></Route>
          <Route exact path="/cnft" component={CNFT}></Route>
          <Route exact path="/milliondogclub" component={MillionDogClub}></Route>
          <Route exact path="/berus" component={Berus}></Route>
          <Route exact path="/referral" component={Referral}></Route>
          <Route exact path="/commingsoon" component={CommingSoon}></Route>
        </Switch>
      </HomeLayout>
    </Route>
  );
}

export default App;
