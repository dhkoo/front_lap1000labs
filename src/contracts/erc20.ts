import Caver from 'caver-js';

import ERC20ABI from './abi/ERC20.json';
import { contractAddr } from './addrBook';
import { getABI } from './abi/AbiUtil';
import { AbiItem } from 'web3-utils';
import { executeTx } from './transaction';
import { BN } from 'utils/number';

export const getAllowance = async (caver: typeof Caver, address: string): Promise<String> => {
  const token = caver.contract.create(ERC20ABI, contractAddr.pala);
  const allowance = await token.methods.allowance(address, contractAddr.ProxyNameBook).call();
  return new BN(allowance);
};

export const approve = async (
  caver: typeof Caver,
  from: string,
  to: string,
  spender: string,
  value: number,
): Promise<void> => {
  const abi = getABI(ERC20ABI as AbiItem[], 'approve');
  await executeTx(from, to, '0', abi, [spender, value.toString()], caver);
};
