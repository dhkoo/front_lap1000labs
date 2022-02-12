import Caver from 'caver-js';

import { gateway } from 'contracts/addrBook';

const caverForBN = new Caver(gateway.cypress);
export const { BN } = caverForBN.utils;

export const getNumberFromInt256 = (numberInt256: string, decimals: number) => {
  const numString: string = '000000000000000000'.concat(numberInt256);
  const { length } = numString;
  const result = numString
    .slice(0, length - decimals)
    .concat('.')
    .concat(numString.substr(length - decimals, decimals));
  return Number(result);
};

export const getNumberFromBN = (num: typeof BN, decimals: number): number => {
  return getNumberFromInt256(num.toString(), decimals);
};
