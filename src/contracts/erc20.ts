import Caver from 'caver-js';

import ERC20ABI from './abi/ERC20.json';
import { getABI } from './abi/AbiUtil';
import { AbiItem } from 'web3-utils';
import { executeTx } from './transaction';

export const approve = async (caver: typeof Caver, from: string, to: string, spender: string, value: Number): Promise<void> => {
  const abi = getABI(ERC20ABI as AbiItem[], 'approve');
  await executeTx(from, to, '0', abi, [spender, value.toString()], caver);
}