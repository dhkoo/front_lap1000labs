import Caver from 'caver-js';

import UnityViewerABI from './abi/UnityViewer.json';
import PriceViewerABI from './abi/PriceViewer.json';
import { contractAddr } from './addrBook';
import { Donator } from './donation';
import { NameInfo } from './nameBook';
import { CommentInfo } from './commentBox';
import { AllPalaNFTInfo, AllPalaTokenInfo } from 'utils/types';
import { BN } from 'utils/number';

export const alapBalanceOf = async (caver: typeof Caver, account: string): Promise<any> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const amount = await viewer.methods.alapBalanceOf(account).call();
  return Number(amount);
};

export const representativeAlapIdOf = async (caver: typeof Caver, account: string): Promise<any> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const id = await viewer.methods.representativeAlapIdOf(account).call();
  return Number(id);
};

export const getKlayTopDonators = async (caver: typeof Caver): Promise<Donator[]> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const res = await viewer.methods.klayTopDonatorList().call();
  const list: Donator[] = [];
  Object.keys(res.donatorList).forEach((id: string) =>
    list.push({ addr: res.donatorList[id].account, amount: res.donatorList[id].amount, alapId: res.tokenList[id] }),
  );
  return list;
};

export const getPalaTopDonators = async (caver: typeof Caver): Promise<any> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const res = await viewer.methods.palaTopDonatorList().call();
  const list: Donator[] = [];
  Object.keys(res.donatorList).forEach((id: string) =>
    list.push({ addr: res.donatorList[id].account, amount: res.donatorList[id].amount, alapId: res.tokenList[id] }),
  );
  return list;
};

export const getNamesOf = async (caver: typeof Caver, account: string[]): Promise<NameInfo[]> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const res = await viewer.methods.getNamesOf(account).call();
  const list: NameInfo[] = [];
  Object.keys(res).forEach((id: string) => list.push({ addr: res[id].account, name: res[id].name }));
  return list;
};

export const getNamingFee = async (caver: typeof Caver): Promise<any> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const fee = await viewer.methods.getNamingFee().call();
  return Number(fee);
};

export const getUserAlapId = async (caver: typeof Caver, account: string): Promise<any> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const id = await viewer.methods.getUserAlapId(account).call();
  return id;
};

export const userAlapIds = async (
  caver: typeof Caver,
  account: string,
  offset: number,
  limit: number,
): Promise<string[]> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const res = await viewer.methods.userAlapIds(account, offset, limit).call();
  return res.tokenIds;
};

export const getCommentInfos = async (caver: typeof Caver, count: number): Promise<CommentInfo[]> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const res = await viewer.methods.getCommentInfos(count).call();
  const list: CommentInfo[] = [];
  Object.keys(res.comments).forEach((id: string) => {
    if (res.comments[id].account !== '0x0000000000000000000000000000000000000000')
      list.push({
        index: res.indices[id],
        addr: res.comments[id].account,
        name: res.comments[id].name,
        content: res.comments[id].content,
        timestamp: res.comments[id].timestamp,
        alapId: res.comments[id].alapId,
      });
  });
  return list;
};

export const getCommentFee = async (caver: typeof Caver): Promise<any> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const fee = await viewer.methods.getCommentFee().call();
  return Number(fee);
};

export const getTokenPrice = async (caver: typeof Caver, token: string): Promise<any> => {
  const viewer = caver.contract.create(PriceViewerABI, contractAddr.PriceViewer);
  const res = await viewer.methods.tokenPrice(token).call();
  return res;
};

export const allPalaTokneInfo = async (caver: typeof Caver, account: string): Promise<AllPalaTokenInfo> => {
  const viewer = caver.contract.create(PriceViewerABI, contractAddr.PriceViewer);
  const res = await viewer.methods.allPalaTokneInfo(account).call();
  return {
    inWallet: res.inWallet,
    inLP: res.inLP,
    inSingleStaking: res.inSingleStaking,
    inPairStaking: res.inPairStaking,
    pending: res.pending,
    price: res.price,
  };
};
export const allPalaNFTInfo = async (caver: typeof Caver, account: string): Promise<AllPalaNFTInfo> => {
  const viewer = caver.contract.create(PriceViewerABI, contractAddr.PriceViewer);
  const res = await viewer.methods.allPalaNFTInfo(account).call();
  return {
    salapPrice: res.salapPrice,
    alapBalance: res.alapBalance,
    smokshaPrice: res.smokshaPrice,
    mokshaBalance: res.mokshaBalance,
  };
};
