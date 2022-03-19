import Caver from 'caver-js';

import UnityViewerABI from './abi/UnityViewer.json';
import { contractAddr } from './addrBook';

export type Donator = {
  addr: string;
  amount: string;
  alapId: number;
};

export type NameInfo = {
  account: string;
  name: string;
};

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
  res.forEach((elem: NameInfo) => {
    list.push({account: elem.account, name: elem.name });
  })
  return list;
};

export const getNamingFee = async (caver: typeof Caver): Promise<any> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const fee = await viewer.methods.getNamingFee().call();
  return Number(fee);
};

export const getUserAlapId = async (caver: typeof Caver, account: string): Promise<any> => {
  const viewer = caver.contract.create(UnityViewerABI, contractAddr.UnityViewer);
  const id = await viewer.methods.getUserAlapId().call();
  return Number(id);
};