import Caver from 'caver-js';

import NameBookABI from './abi/NameBook.json';
import { getABI } from './abi/AbiUtil';
import { AbiItem } from 'web3-utils';
import { executeTxKaikas, executeTxKlip } from '../utils/transaction';

export type NameInfo = {
  addr: string;
  name: string;
};

export const setName = async (
  from: string,
  to: string,
  name: string,
  walletType: string,
  caver: typeof Caver,
  completeCallback?: (klipResult: any) => Promise<void>,
  cancelCallback?: () => void,
): Promise<void> => {
  const abi = getABI(NameBookABI as AbiItem[], 'setName');
  if (walletType === 'klip')
    await executeTxKlip(from, to, '0', JSON.stringify(abi), JSON.stringify([name]), completeCallback, cancelCallback);
  else await executeTxKaikas(from, to, '0', abi, [name], caver, completeCallback);
};
