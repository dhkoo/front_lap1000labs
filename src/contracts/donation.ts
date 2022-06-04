import Caver from 'caver-js';

import DonationABI from './abi/Donation.json';
import { getABI } from './abi/AbiUtil';
import { AbiItem } from 'web3-utils';
import { executeTxKaikas, executeTxKlip } from '../utils/transaction';

export type Donator = {
  addr: string;
  amount: string;
  alapId: number;
};

export const donateKlay = async (
  from: string,
  to: string,
  amount: Number,
  walletType: string,
  caver: typeof Caver,
  completeCallback?: (klipResult: any) => Promise<void>,
  cancelCallback?: () => void,
): Promise<void> => {
  const abi = getABI(DonationABI as AbiItem[], 'donateKLAY');
  if (walletType === 'klip')
    await executeTxKlip(
      from,
      to,
      amount.toString(),
      JSON.stringify(abi),
      JSON.stringify([]),
      completeCallback,
      cancelCallback,
    );
  else await executeTxKaikas(from, to, amount.toString(), abi, [], caver, completeCallback);
};

export const donatePala = async (
  from: string,
  to: string,
  amount: Number,
  walletType: string,
  caver: typeof Caver,
  completeCallback?: (klipResult: any) => Promise<void>,
  cancelCallback?: () => void,
): Promise<void> => {
  const abi = getABI(DonationABI as AbiItem[], 'donatePALA');
  if (walletType === 'klip')
    await executeTxKlip(
      from,
      to,
      '0',
      JSON.stringify(abi),
      JSON.stringify([amount.toString()]),
      completeCallback,
      cancelCallback,
    );
  else await executeTxKaikas(from, to, '0', abi, [amount.toString()], caver, completeCallback);
};
