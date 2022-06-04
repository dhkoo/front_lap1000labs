import Caver from 'caver-js';

import AlapRegistrationABI from './abi/AlapRegistration.json';
import { getABI } from './abi/AbiUtil';
import { AbiItem } from 'web3-utils';
import { executeTxKaikas, executeTxKlip } from '../utils/transaction';

export const registerAlapId = async (
  from: string,
  to: string,
  id: string,
  walletType: string,
  caver: typeof Caver,
  completeCallback?: (klipResult: any) => Promise<void>,
  cancelCallback?: () => void,
): Promise<void> => {
  const abi = getABI(AlapRegistrationABI as AbiItem[], 'registerAlapId');
  if (walletType === 'klip')
    await executeTxKlip(from, to, '0', JSON.stringify(abi), JSON.stringify([id]), completeCallback, cancelCallback);
  else await executeTxKaikas(from, to, '0', abi, [id], caver, completeCallback);
};
