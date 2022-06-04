import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state';
import Caver from 'caver-js';

import { gateway } from 'contracts/addrBook';
import { approve } from 'contracts/erc20';
import Erc20Abi from 'contracts/abi/ERC20.json';
import { getNumberFromInt256 } from 'utils/number';
import ViewScopeButton from './ViewScopeButton';

import * as S from './style';
import * as LabNoteS from '../style';

const ApproveZero = () => {
  const myAddress = useSelector((state: RootState) => state.wallet.address);
  const walletType = useSelector((state: RootState) => state.wallet.walletType);

  const [tokenAddr, setTokenAddr] = useState<string>('');
  const [targetContractAddr, setTargetContractAddr] = useState<string>('');

  const [approvedAmount, setApprovedAmount] = useState<string>('');

  const klaytnCaver = new Caver(window.klaytn);
  const caver = new Caver(gateway.cypress);

  const getMyApproved = async () => {
    try {
      const tokenInstance = caver.contract.create(Erc20Abi, tokenAddr);
      const allowance = await tokenInstance.methods.allowance(myAddress, targetContractAddr).call();
      const decimals = await tokenInstance.methods.decimals().call();
      const symbol = await tokenInstance.methods.symbol().call();
      setApprovedAmount(getNumberFromInt256(allowance, Number(decimals)).toString().concat(' ').concat(symbol));
    } catch {
      if (myAddress === '') {
        setApprovedAmount('로그인을 먼저 해주세요.');
      } else setApprovedAmount('주소를 다시 확인해주세요.');
    }
  };

  const approveZero = async () => {
    try {
      await approve(myAddress, tokenAddr, targetContractAddr, 0, walletType, klaytnCaver);
      const tokenInstance = caver.contract.create(Erc20Abi, tokenAddr);
      const allowance = await tokenInstance.methods.allowance(myAddress, targetContractAddr).call();
      const decimals = await tokenInstance.methods.decimals().call();
      const symbol = await tokenInstance.methods.symbol().call();
      setApprovedAmount(getNumberFromInt256(allowance, Number(decimals)).toString().concat(' ').concat(symbol));
    } catch {
      if (myAddress === '') {
        setApprovedAmount('로그인을 먼저 해주세요.');
      } else setApprovedAmount('주소를 다시 확인해주세요.');
    }
  };

  return (
    <S.ApproveZero>
      <LabNoteS.NoteLogWrapper>
        팔라의 사람들은 서로 다양한 계약을 맺으며 살아간다. <br />
        그리고 계약을 중개하는 서비스들도 매우 다양한 것으로 파악된다. <br />
        <br />
        중개 서비스를 사용하기 위해서는 보통 <br />
        권한 양도가 필요하다. <br />
        <br />
        그런데, <br />
        권한을 주기만 하고 회수하는 경우를 잘 못봤다. <br />
        <br />
        서로 잘 믿어서 그런걸까, <br />
        착한 알랍들이 조금 걱정이다. <br />
        <br />
        권한을 회수할 수 있는 도구를 만들어보고자 한다. <br />
      </LabNoteS.NoteLogWrapper>
      <S.AddrCheckWrapper>
        토큰 주소 (ERC-20, KIP-17)
        <S.ContractInput
          placeholder="토큰 주소"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTokenAddr(e.target.value)}
          autoComplete="none"
        />
        <ViewScopeButton type="token" addr={tokenAddr} />
      </S.AddrCheckWrapper>
      <S.AddrCheckWrapper>
        계약 주소
        <S.ContractInput
          placeholder="계약 주소"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTargetContractAddr(e.target.value)}
          autoComplete="none"
        />
        <ViewScopeButton type="account" addr={targetContractAddr} />
      </S.AddrCheckWrapper>
      <S.AddrCheckWrapper>
        허용 내역
        <S.ResultBox>{approvedAmount}</S.ResultBox>
        <S.ViewScopeButton onClick={getMyApproved}> 조회하기 </S.ViewScopeButton>
        <S.ViewScopeButton onClick={approveZero}> 해제하기 </S.ViewScopeButton>
      </S.AddrCheckWrapper>
    </S.ApproveZero>
  );
};

export default ApproveZero;
