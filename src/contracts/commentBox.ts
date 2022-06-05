import Caver from 'caver-js';

import CommentBoxABI from './abi/CommentBox.json';
import { getABI } from './abi/AbiUtil';
import { AbiItem } from 'web3-utils';
import { executeTxKaikas, executeTxKlip } from '../utils/transaction';

export type CommentInfo = {
  index: number;
  addr: string;
  name: string;
  content: string;
  timestamp: string;
  alapId: string;
};

export const leaveComment = async (
  from: string,
  to: string,
  content: string,
  walletType: string,
  caver: typeof Caver,
  completeCallback?: (klipResult: any) => Promise<void>,
  cancelCallback?: () => void,
): Promise<void> => {
  const abi = getABI(CommentBoxABI as AbiItem[], 'leaveComment');
  if (walletType === 'klip')
    await executeTxKlip(
      from,
      to,
      '0',
      JSON.stringify(abi),
      JSON.stringify([content]),
      completeCallback,
      cancelCallback,
    );
  else await executeTxKaikas(from, to, '0', abi, [content], caver, completeCallback);
};
