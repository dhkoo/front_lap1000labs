import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Caver from 'caver-js';

import { contractAddr, gateway } from 'contracts/addrBook';
import { getCommentFee, getCommentInfos } from 'contracts/viewer';
import { approve, getAllowance } from 'contracts/erc20';
import { RootState } from 'state';
import * as TxActions from 'state/transaction';
import { BN, getNumberFromBN } from 'utils/number';

import * as S from './style';
import { CommentInfo, leaveComment } from 'contracts/commentBox';


const CommentBox = () => {
  const dispatch = useDispatch();
  const klaytnCaver = new Caver(window.klaytn);
  const caver = new Caver(gateway.cypress);
  const walletType = useSelector((state: RootState) => state.wallet.walletType);
  const address = useSelector((state: RootState) => state.wallet.address);
  const txFlag = useSelector((state: RootState) => state.tx.txFlag);

  const [comments, setComments] = useState<CommentInfo[]>([]);
  const [fee, setFeeValue] = useState(0);
  const [content, setContent] = useState('');
  const [palaAllowance, setPalaAllowance] = useState<typeof BN>(new BN(0));

  useEffect(() => {
    const GetComments = async () => {
      const res = await getCommentInfos(caver, 5);
      setComments(res);
    };
    const GetFee = async () => {
      const fee = getNumberFromBN(await getCommentFee(caver), 18);
      setFeeValue(fee);
    };
    const setAllowance = async () => {
      const allowance = await getAllowance(contractAddr.pala, contractAddr.Donation, address, caver);
      setPalaAllowance(allowance);
    };
    GetComments();
    GetFee();
    if (address !== '') setAllowance();
  }, [address, txFlag]);

  const successTx = async (txHash: any) => {
    dispatch(TxActions.toggleFlag());
  };

  const onChangeName = (event: any) => setContent(event.target.value);
  const onSubmitName = async (event: any) => {
    event.preventDefault();
    if (walletType !== '' && address !== '') {
      if (getNumberFromBN(palaAllowance, 18) < fee) {
        await approve(
          address,
          contractAddr.pala,
          contractAddr.CommentBox,
          fee * 1e18,
          walletType,
          klaytnCaver,
          successTx,
        );
      } else await leaveComment(address, contractAddr.CommentBox, content, walletType, klaytnCaver, successTx);
    } else {
      alert('지갑을 연결해 주세요.');
    }
  };

  const convertToDate = (timestamp: number) => {
    const datetime = new Date(timestamp * 1000);
    const formattedDate = 
      datetime.getFullYear() + "." + (datetime.getMonth() + 1) + "." + datetime.getDate() +
      " " + datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds();

    return formattedDate.toLocaleString();
  }

  const viewComment = (comments: CommentInfo[]) => {
    return comments.map((comment: CommentInfo) => {
      return (
        <S.CommentBox>
          <S.Comment>
            <S.Subject>
              <S.Purple>#{comment.index}&nbsp;</S.Purple>
              <S.Mint>
                {comment.name !== '' 
                  ? comment.name
                  : comment.addr.substring(0,4) +
                    '...' +
                    comment.addr.substring(comment.addr.length - 3, comment.addr.length)
                }
                &nbsp;
              </S.Mint>
            <S.DateText>
              ({convertToDate(parseInt(comment.timestamp))})
            </S.DateText>
            </S.Subject>
            <S.CommentText>{comment.content}</S.CommentText>
          </S.Comment>
        </S.CommentBox>
      );
    });
  }

  return (
    <>
      <S.ContentText>
        댓글을 남기기 위해선 <S.Purple>{fee} PALA</S.Purple>가 필요하다. <br />
        최근 5개의 댓글만 확인이 가능하다.<br />
        <br />
      </S.ContentText>
      <S.CommentForm onSubmit={onSubmitName}>
        <S.CommentInput type="text" placeholder="댓글 입력 (100자 제한)" maxLength={100} onChange={onChangeName} />
        <S.CommentButton type="submit">
          {getNumberFromBN(palaAllowance, 18) < fee
            ? `${fee} PALA 사용\n승인하기`
            : `댓글 생성하기\n(${getNumberFromBN(palaAllowance, 18)} PALA 승인됨)`}
        </S.CommentButton>
      </S.CommentForm>
      {viewComment(comments)}
    </>
  );
};

export default CommentBox;
