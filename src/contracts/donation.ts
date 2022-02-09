import Caver from 'caver-js';

import DonationABI from './abi/Donation.json';
import DonationViewerABI from './abi/DonationViewer.json';
import { contractAddr } from './addrBook';
import { getABI } from './abi/AbiUtil';
import { AbiItem } from 'web3-utils';
import { executeTx } from './transaction';

export const getKlayTopDonators = async (caver: typeof Caver): Promise<any> => {
  const donationViewer = caver.contract.create(DonationViewerABI, contractAddr.DonationViewer);
  const res = await donationViewer.methods.klayTopDonatorList().call();
  return res;
};

export const getPalaTopDonators = async (caver: typeof Caver): Promise<any> => {
  const donationViewer = caver.contract.create(DonationViewerABI, contractAddr.DonationViewer);
  const res = await donationViewer.methods.palaTopDonatorList().call();
  return res;
};

export const donateKlay = async (caver: typeof Caver, from: string, to: string, amount: Number): Promise<void> => {
  const abi = getABI(DonationABI as AbiItem[], 'donateKLAY');
  executeTx(from, to, amount.toString(), abi, [], caver);
};
