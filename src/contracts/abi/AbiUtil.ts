import { AbiItem } from 'web3-utils'

export const getABI = (abi: AbiItem[], name: string): any => {
  for (let i = 0; i < abi.length; ++i) {
    if (abi[i].name == name) {
      return abi[i];
    }
  }
  return false;
}