import React, { useState, useRef, useEffect } from 'react';
import { isAndroid, isIOS } from 'react-device-detect';

import * as Wallet from 'constants/wallet';
import * as TxAction from 'state/transaction';
import { useDispatch } from 'react-redux';

interface IKlipRequestProps {
  requestKey: string;
  duration: number;
  completeCallback?: (klipResult: any) => Promise<void>;
  cancelCallback?: () => void;
}

const KlipRequestListener: React.FC<IKlipRequestProps> = ({
  requestKey,
  duration,
  completeCallback = undefined,
  cancelCallback = undefined,
}) => {
  const dispatch = useDispatch();
  const time = useRef(duration);
  const timerId = useRef<any>(null);

  useEffect(() => {
    if (requestKey !== '') {
      if (isIOS) {
        window.location.href = Wallet.getKlipIosDeepLink(requestKey);
      } else if (isAndroid) {
        window.location.href = Wallet.getKlipAndroidDeepLink(requestKey);
      }
      timerId.current = setInterval(async () => {
        time.current -= 1;
        try {
          const fetchResult = await fetch(Wallet.getKlipResultUri(requestKey));
          if (fetchResult.status === 200) {
            const jsonData = await fetchResult.json();
            if (jsonData.status === 'completed') {
              clearInterval(timerId.current);
              if (completeCallback !== undefined) {
                await completeCallback(jsonData.result);
              }
              if (jsonData.result.status === 'success') {
                dispatch(TxAction.toggleFlag());
                clearInterval(timerId.current);
              } else if (jsonData.result.status === 'fail') {
                clearInterval(timerId.current);
              }
            }
            if (jsonData.status === 'canceled') {
              clearInterval(timerId.current);
              if (cancelCallback !== undefined) {
                cancelCallback();
              }
            }
          }
        } catch (error) {
          console.error('error ', error);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timerId.current);
    };
  }, [requestKey]);

  useEffect(() => {
    // 만약 타임 아웃이 발생했을 경우
    if (time.current <= 0) {
      clearInterval(timerId.current);
      if (cancelCallback !== undefined) {
        cancelCallback();
      }
      // dispatch event
    }
  }, [time]);

  return null;
};

export default KlipRequestListener;
