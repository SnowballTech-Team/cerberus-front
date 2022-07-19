import { useQuery } from "react-query";
import { useWeb3Context } from "./web3Context";
import { useHistory } from "react-router-dom";
// import { useAddNetwork } from './useAddNetwork';
import baseUrl from "src/helpers/baseUrl";
const query = `
  query ProtcolMetrics {
    protocolMetrics(first: 100, orderBy: timestamp, orderDirection: desc) {
      id
      runway5k
      timestamp
      ohmPrice
      runway10k
      runway20k
      runway50k
      marketCap
      currentAPY
      totalSupply
      runway7dot5k
      runway2dot5k
      runwayCurrent
      nextEpochRebase
      totalValueLocked
      treasuryOhmDaiPOL
      treasuryOhmFraxPOL
      nextDistributedOhm
      treasuryMarketValue
      treasuryTotalBacking
      ohmCirculatingSupply
      sOhmCirculatingSupply
      treasuryRiskFreeValue
      treasuryDaiMarketValue
      treasuryUstMarketValue
      treasuryFraxMarketValue
      treasuryWETHMarketValue
      treasuryLusdMarketValue
      treasuryWBTCMarketValue
      treasuryDaiRiskFreeValue
      treasuryOtherMarketValue
      treasuryLusdRiskFreeValue
      treasuryXsushiMarketValue
      treasuryFraxRiskFreeValue
    }
  }
`;

interface ProtocolMetrics {
  id: string;
  runway5k: string;
  timestamp: string;
  ohmPrice: string;
  runway10k: string;
  runway20k: string;
  runway50k: string;
  marketCap: string;
  currentAPY: string;
  totalSupply: string;
  runway7dot5k: string;
  runway2dot5k: string;
  runwayCurrent: string;
  nextEpochRebase: string;
  totalValueLocked: string;
  treasuryOhmDaiPOL: string;
  treasuryOhmFraxPOL: string;
  nextDistributedOhm: string;
  treasuryMarketValue: string;
  treasuryTotalBacking: string;
  ohmCirculatingSupply: string;
  sOhmCirculatingSupply: string;
  treasuryRiskFreeValue: string;
  treasuryDaiMarketValue: string;
  treasuryUstMarketValue: string;
  treasuryFraxMarketValue: string;
  treasuryWETHMarketValue: string;
  treasuryLusdMarketValue: string;
  treasuryWBTCMarketValue: string;
  treasuryDaiRiskFreeValue: string;
  treasuryOtherMarketValue: string;
  treasuryLusdRiskFreeValue: string;
  treasuryXsushiMarketValue: string;
  treasuryFraxRiskFreeValue: string;
}

type ProtocolMetricsNumbers = Record<keyof ProtocolMetrics, number>;

export const protocolMetricsQueryKey = () => ["useProtocolMetrics"];

const TotalMiningHashRate = `${baseUrl}/system/open/api/apy`;
const MyNFTMiners = `${baseUrl}/system/open/api/myNftMiners`; // hasOwner
const MyNFTPools = `${baseUrl}/system/open/api/myNftPools`; // hasOwner
const MBTCPrice = `${baseUrl}/system/open/api/price/mbtc`;
const MyMiningHashRate = `${baseUrl}/system/open/api/myHashRate`; // hasOwner
const MinedMBTC = `${baseUrl}/system/open/api/minedMBTC`; // hasOwner
const MFuelcost = `${baseUrl}/system/open/api/mFuel/cost`; // hasOwner
const Volume24 = `${baseUrl}/system/open/api/volume`;
const MFuelprice = `${baseUrl}/system/open/api/price/mFuel`;
const MBTCConstant = `${baseUrl}/system/open/api/constant`;
const TotalValueLocked = `${baseUrl}/system/open/api/totalValueLocked`;
const totalMarketCapReport = `${baseUrl}/system/open/api/tvlReport`;

export const useMbtcMetrics = (requestUrl: string, hasOwner?: boolean) => {
  const { address } = useWeb3Context();
  const history = useHistory();
  const KEY = history?.location?.key || "";
  if (hasOwner) {
    requestUrl = requestUrl + "/" + address;
  }
  return useQuery(`${KEY}-${requestUrl}`, async () => {
    if (hasOwner && !address) {
      return 0;
    }
    const response = await fetch(requestUrl, {
      method: "post",
      body: JSON.stringify({}),
      headers: {
        "content-type": "application/json",
      },
    }).then(res => {
      return res.json();
    });

    if (!response) throw new Error("No response from MBTC");

    return response.data || 0;
  });
};
export const useTotalMiningHashRate = () => useMbtcMetrics(TotalMiningHashRate);
export const useMyNFTMiners = () => useMbtcMetrics(MyNFTMiners, true);
export const useMyNFTPools = () => useMbtcMetrics(MyNFTPools, true);
export const useMBTCPrice = () => useMbtcMetrics(MBTCPrice);
export const useMyMiningHashRate = () => useMbtcMetrics(MyMiningHashRate, true);
export const useMinedMBTC = () => useMbtcMetrics(MinedMBTC, true);
export const useMFuelcost = () => useMbtcMetrics(MFuelcost, true);
export const useVolume24 = () => useMbtcMetrics(Volume24);
export const useMFuelprice = () => useMbtcMetrics(MFuelprice);
export const useMBTCConstant = () => useMbtcMetrics(MBTCConstant);
export const useTotalValueLocked = () => useMbtcMetrics(TotalValueLocked);
export const useApyReport = () => useMbtcMetrics(`${baseUrl}/system/open/api/apyReport`);
export const useTotalMarketCapReport = () => useMbtcMetrics(totalMarketCapReport);
