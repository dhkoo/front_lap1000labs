import Caver from 'caver-js';
import { prepare } from 'klip-sdk';

import * as Wallet from 'constants/wallet';
import { pollingKlipRequest } from './pollingKlipRequest';

export const executeTxKaikas = async (
  from: string,
  to: string,
  value: string,
  abi: any,
  params: any,
  caver: typeof Caver,
  completeCallback?: any,
) => {
  const data = caver.abi.encodeFunctionCall(abi, params);
  const tx = {
    type: 'SMART_CONTRACT_EXECUTION',
    from,
    to,
    data,
    value,
    gas: 3000000,
  };
  let txHash = '';
  await caver.rpc.klay
    .sendTransaction(tx)
    .on('transactionHash', (transactionHash: any) => {
      txHash = transactionHash;
    })
    .on('receipt', (receipt: any) => {
      console.log('receipt', receipt);
      if (completeCallback) {
        console.log('callback setted');
        completeCallback();
      }
    })
    .on('error', async (error: any) => {
      const failedReceipt = await caver.rpc.klay.getTransactionReceipt(txHash.toString());
      console.log('failed receipt', failedReceipt);
      console.log('error', error);
      window.alert('tx failed');
    });
};

export const executeTxKlip = async (
  from: string,
  to: string,
  value: string,
  abi: string,
  params: any,
  completeCallback?: (klipResult: any) => Promise<void>,
  cancelCallback?: () => void,
) => {
  try {
    // console.log('executeTxKlip');

    let convertValue;
    if (value !== '0') {
      convertValue = value.substring(0, value.length - 12).concat('000000000000');
    } else {
      convertValue = '0';
    }

    const param = {
      bappName: Wallet.AppName,
      from,
      to,
      value: convertValue,
      abi,
      params,
    };

    const res = await prepare.executeContract(param);

    if (res.err) {
      // console.log('internal error', res);
      return;
    }
    if (res.request_key) {
      await pollingKlipRequest(res.request_key, 150, completeCallback, cancelCallback);
    }
  } catch (error) {
    console.error('error', error);
  }
};
