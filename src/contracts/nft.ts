import Caver from 'caver-js';

import AlapViewerABI from './abi/AlapViewer.json';
import { contractAddr } from './addrBook';

export const getUserAlapAmount = async (caver: typeof Caver, account: string) => {
    const viewer = caver.contract.create(AlapViewerABI, contractAddr.AlapViewer);
    const amount = await viewer.methods.balanceof(account).call();
    return Number(amount);
};

export const getUserAlapIds = async (caver: typeof Caver, account: string, offset: number, limit: number): Promise<any> => {
    const alapViewer = caver.contract.create(AlapViewerABI, contractAddr.AlapViewer);
    const res = await alapViewer.methods.userTokenIds(account, offset, limit).call();
    return res.tokenIds;
};