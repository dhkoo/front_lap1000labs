import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Caver from 'caver-js';

import { RootState } from 'state';
import { contractAddr, gateway } from 'contracts/addrBook';
import { getUserAlapId, userAlapIds } from 'contracts/viewer';
import * as TxActions from 'state/transaction';

import * as S from './style';
import { registerAlapId } from 'contracts/alapRegistration';

const AlapRegister = () => {
  const dispatch = useDispatch();
  const klaytnCaver = new Caver(window.klaytn);
  const caver = new Caver(gateway.cypress);
  const walletType = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);
  const txFlag = useSelector((state: RootState) => state.tx.txFlag);

  const [registerId, setRegisterId] = useState<string>('0');
  const [registeredId, setRegisteredId] = useState<string>('0');
  const [ownedAlapIds, setOwnedAlapIds] = useState<string[]>([]);

  const isLoggedIn = (): boolean => {
    return walletType !== '' && address !== '';
  };

  useEffect(() => {
    const registeredAlapInfo = async () => {
      if (isLoggedIn()) {
        setRegisteredId(await getUserAlapId(caver, address));
        setOwnedAlapIds(await userAlapIds(caver, address, 0, 20));
      }
    };
    registeredAlapInfo();
  }, [address, txFlag]);

  const successTx = async (txHash: any) => {
    dispatch(TxActions.toggleFlag());
  };

  const onChangeName = (event: any) => setRegisterId(event.target.value);
  const onSubmitName = async (event: any) => {
    event.preventDefault();
    if (walletType !== '' && address !== '') {
      await registerAlapId(address, contractAddr.AlapRegistration, registerId, walletType, klaytnCaver, successTx)
    } else {
      alert('지갑을 연결해 주세요.');
    }
  };

  const alapIds = (ids: string[]) => {
    return ids.map((id: string) => {
      return (
          <S.Mint>{id} &nbsp;</S.Mint>
      );
    });
  }

  return (
    <>
      {isLoggedIn() ? (
        <S.AlapRegistration>
          <S.Record>
            <S.ContentText>
              My ALAP ID :&nbsp;
            </S.ContentText>
            <S.Mint><b>{registeredId !== "0" ? registeredId : 'NONE'}</b></S.Mint>
          </S.Record>
          <S.Record>
            <S.ContentText>
              Owned ALAP IDs :&nbsp;
            </S.ContentText>
            {ownedAlapIds.length !== 0 ? alapIds(ownedAlapIds) : <S.Mint>NONE</S.Mint>}
          </S.Record>
          <S.AlapRegisterForm onSubmit={onSubmitName}>
            <S.AlapRegisterInput type="number" placeholder="ID 입력" maxLength={5} onChange={onChangeName} />
            <S.AlapRegisterButton type="submit">
              ALAP ID 등록하기
            </S.AlapRegisterButton>
          </S.AlapRegisterForm>
        </S.AlapRegistration>
      ) : (
        <>
        </>
      )}
    </>
  );
};

export default AlapRegister;
