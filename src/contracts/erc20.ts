import Caver from 'caver-js';

import ERC20ABI from './abi/ERC20.json';
import { getABI } from './abi/AbiUtil';
import { AbiItem } from 'web3-utils';
import { executeTxKaikas, executeTxKlip } from '../utils/transaction';
import { BN } from 'utils/number';

export const getBalanceOf = async (token: string, myAddress: string, caver: typeof Caver): Promise<typeof BN> => {
  const tokenInstance = caver.contract.create(ERC20ABI, token);
  const balance = await tokenInstance.methods.balanceOf(myAddress).call();
  return new BN(balance);
};

export const getAllowance = async (
  token: string,
  spender: string,
  myAddress: string,
  caver: typeof Caver,
): Promise<typeof BN> => {
  const tokenInstance = caver.contract.create(ERC20ABI, token);
  const allowance = await tokenInstance.methods.allowance(myAddress, spender).call();
  return new BN(allowance);
};

export const approve = async (
  from: string,
  to: string,
  spender: string,
  value: number,
  walletType: string,
  caver: typeof Caver,
  completeCallback?: (klipResult: any) => Promise<void>,
  cancelCallback?: () => void,
): Promise<void> => {
  const abi = getABI(ERC20ABI as AbiItem[], 'approve');
  if (walletType === 'klip')
    await executeTxKlip(
      from,
      to,
      '0',
      JSON.stringify(abi),
      JSON.stringify([spender, value.toString()]),
      completeCallback,
      cancelCallback,
    );
  else await executeTxKaikas(from, to, '0', abi, [spender, value.toString()], caver, completeCallback);
};
