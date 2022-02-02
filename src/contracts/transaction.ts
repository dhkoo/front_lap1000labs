import Caver from 'caver-js';

export const executeTx = async (
  from: string,
  to: string,
  value: string,
  abi: string,
  params: any,
  caver: typeof Caver,
  receiptCallback?: any,
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
  console.log(from, to, data, value);
  await caver.rpc.klay
    .sendTransaction(tx)
    .on('transactionHash', (transactionHash: any) => {
      console.log('txHash', transactionHash);
    })
    .on('receipt', (receipt: any) => {
      console.log('receipt', receipt);
      if (receiptCallback) receiptCallback();
    })
    .on('error', async (error: any) => {
      console.log('error', error);
    });
};