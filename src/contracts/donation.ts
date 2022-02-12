import Caver from 'caver-js';

import DonationABI from './abi/Donation.json';
import DonationViewerABI from './abi/DonationViewer.json';
import { contractAddr } from './addrBook';
import { getABI } from './abi/AbiUtil';
import { AbiItem } from 'web3-utils';
import { executeTx } from './transaction';

export type Donator = {
  addr: string;
  amount: string;
  alapId: number;
};

export const getKlayTopDonators = async (caver: typeof Caver): Promise<Donator[]> => {
  const donationViewer = caver.contract.create(DonationViewerABI, contractAddr.DonationViewer);
  const res = await donationViewer.methods.klayTopDonatorList().call();
  const list: Donator[] = [];
  Object.keys(res.donatorList).forEach((id: string) =>
    list.push({ addr: res.donatorList[id].account, amount: res.donatorList[id].amount, alapId: res.tokenList[id] }),
  );
  return list;
};

export const getPalaTopDonators = async (caver: typeof Caver): Promise<any> => {
  const donationViewer = caver.contract.create(DonationViewerABI, contractAddr.DonationViewer);
  const res = await donationViewer.methods.palaTopDonatorList().call();
  const list: Donator[] = [];
  Object.keys(res.donatorList).forEach((id: string) =>
    list.push({ addr: res.donatorList[id].account, amount: res.donatorList[id].amount, alapId: res.tokenList[id] }),
  );
  return list;
};

export const donateKlay = async (caver: typeof Caver, from: string, to: string, amount: Number): Promise<void> => {
  const abi = getABI(DonationABI as AbiItem[], 'donateKLAY');
  executeTx(from, to, amount.toString(), abi, [], caver);
};

export const donatePala = async (caver: typeof Caver, from: string, to: string, amount: Number): Promise<void> => {
  const abi = getABI(DonationABI as AbiItem[], 'donatePALA');
  executeTx(from, to, '0', abi, [amount.toString()], caver);
};
