import { isAndroid, isIOS } from 'react-device-detect';

import * as Wallet from 'constants/wallet';

export const pollingKlipRequest = async (
  requestKey: string,
  duration: number,
  completeCallback?: (klipResult: any) => Promise<void>,
  cancelCallback?: () => void,
) => {
  let time = duration;

  if (isIOS) {
    window.location.href = Wallet.getKlipIosDeepLink(requestKey);
  } else if (isAndroid) {
    window.location.href = Wallet.getKlipAndroidDeepLink(requestKey);
  }

  const executePoll = async () => {
    time -= 1;
    try {
      const fetchResult = await fetch(Wallet.getKlipResultUri(requestKey));
      if (fetchResult.status === 200) {
        const jsonData = await fetchResult.json();
        if (jsonData.status === 'completed') {
          if (completeCallback !== undefined) {
            await completeCallback(jsonData.result);
          }
          if (jsonData.result.status === 'success') {
          } else if (jsonData.result.status === 'fail') {
          }
        } else if (jsonData.status === 'canceled') {
          if (cancelCallback !== undefined) {
            cancelCallback();
          }
        } else {
          setTimeout(executePoll, 1000);
        }
      }
    } catch (error) {
      console.error('error ', error);
    }
  };

  return new Promise(executePoll);
};
