import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/store";

import { NetworkId } from "../constants";
import { setAll } from "../helpers";
import { IBaseAsyncThunk } from "./interfaces";

export const loadAppDetails = createAsyncThunk("app/loadAppDetails", async ({ networkID }: IBaseAsyncThunk, {}) => {
  if (networkID !== NetworkId.MAINNET) {
    networkID = NetworkId.MAINNET;
  }

  // NOTE (appleseed): marketPrice from Graph was delayed, so get CoinGecko price
  // const marketPrice = parseFloat(graphData.data.protocolMetrics[0].ohmPrice);
  return {} as IAppData;
});

export interface IAppData {
  readonly circSupply?: number;
  readonly currentIndex?: string;
  readonly currentIndexV1?: string;
  readonly currentBlock?: number;
  readonly fiveDayRate?: number;
  readonly loading: boolean;
  readonly loadingMarketPrice: boolean;
  readonly marketCap?: number;
  readonly marketPrice?: number;
  readonly stakingAPY?: number;
  readonly stakingRebase?: number;
  readonly stakingTVL?: number;
  readonly totalSupply?: number;
  readonly treasuryBalance?: number;
  readonly treasuryMarketValue?: number;
  readonly secondsToEpoch?: number;
}

const initialState: IAppData = {
  loading: false,
  loadingMarketPrice: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    fetchAppSuccess(state, action) {
      setAll(state, action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadAppDetails.pending, state => {
        state.loading = true;
      })
      .addCase(loadAppDetails.fulfilled, (state, action) => {
        setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(loadAppDetails.rejected, (state, { error }) => {
        state.loading = false;
        console.error(error.name, error.message, error.stack);
      });
  },
});

const baseInfo = (state: RootState) => state.app;

export default appSlice.reducer;

export const { fetchAppSuccess } = appSlice.actions;

export const getAppState = createSelector(baseInfo, app => app);
