import Caver from 'caver-js';

export const executeTx = async (
  from: string,
  to: string,
  value: string,
  abi: any,
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
  let txHash = '';
  await caver.rpc.klay
    .sendTransaction(tx)
    .on('transactionHash', (transactionHash: any) => {
      txHash = transactionHash;
    })
    .on('receipt', (receipt: any) => {
      console.log('receipt', receipt);
      if (receiptCallback) receiptCallback();
    })
    .on('error', async (error: any) => {
      const failedReceipt = await caver.rpc.klay.getTransactionReceipt(txHash.toString());
      console.log('failed receipt', failedReceipt);
      console.log('error', error);
    });
};
