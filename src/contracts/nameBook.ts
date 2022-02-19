import Caver from 'caver-js';

import NameBookViewerABI from './abi/NameBookViewer.json';
import { contractAddr } from './addrBook';

export type NameInfo = {
  addr: string;
  name: string;
};

export const getNames = async (caver: typeof Caver, addrs: string []): Promise<NameInfo[]> => {
  const nameBookViewer = caver.contract.create(NameBookViewerABI, contractAddr.NameBookViewer);
  const res = await nameBookViewer.methods.getNames(addrs).call();
  const list: NameInfo[] = [];
  Object.keys(res).forEach((id: string) =>
    list.push({ addr: res[id].account, name: res[id].name}),
  );
  return list;
};