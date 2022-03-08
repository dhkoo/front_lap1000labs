import Caver from 'caver-js';

import NameBookViewerABI from './abi/NameBookViewer.json';
import NameBookABI from './abi/NameBook.json';
import { contractAddr } from './addrBook';
import { getABI } from './abi/AbiUtil';
import { AbiItem } from 'web3-utils';
import { executeTxKaikas, executeTxKlip } from '../utils/transaction';
import { BN } from 'utils/number';

export type NameInfo = {
  addr: string;
  name: string;
};

export const getNames = async (caver: typeof Caver, addrs: string[]): Promise<NameInfo[]> => {
  const nameBookViewer = caver.contract.create(NameBookViewerABI, contractAddr.NameBookViewer);
  const res = await nameBookViewer.methods.getNames(addrs).call();
  const list: NameInfo[] = [];
  Object.keys(res).forEach((id: string) => list.push({ addr: res[id].account, name: res[id].name }));
  return list;
};

export const getFee = async (caver: typeof Caver): Promise<String> => {
  const nameBookViewer = caver.contract.create(NameBookViewerABI, contractAddr.NameBookViewer);
  const fee = await nameBookViewer.methods.getFee().call();
  return new BN(fee);
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
