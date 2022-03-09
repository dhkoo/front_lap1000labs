const KlipQrUriPrefix = 'https://klipwallet.com/?target=/a2a?request_key=';
const KlipResultUriPrefix = 'https://a2a-api.klipwallet.com/v2/a2a/result?request_key=';
const KlipIosDeepLinkUriPrefix = 'kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=';
const KlipAndroidDeepLinkUriPrefix = 'intent://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=';
const KlipAndroidDeepLinkUriPostfix = '#Intent;scheme=kakaotalk;package=com.kakao.talk;end';

const KaikasExtentionUrl = 'https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi?hl=ko';

const DcentDeepLinkBaseUrl = 'https://link.dcentwallet.com/DAppBrowser/?url=';

export const AppName = '랍천 연구소';

export const getKaikasInstallUri = () => KaikasExtentionUrl;

export const getKlipQrCode = (requestKey: string): string => {
  return KlipQrUriPrefix.concat(requestKey);
};

export const getKlipResultUri = (requestKey: string): string => {
  return KlipResultUriPrefix.concat(requestKey);
};

export const getKlipIosDeepLink = (requestKey: string): string => {
  return KlipIosDeepLinkUriPrefix.concat(requestKey);
};

export const getKlipAndroidDeepLink = (requestKey: string): string => {
  return KlipAndroidDeepLinkUriPrefix.concat(requestKey).concat(KlipAndroidDeepLinkUriPostfix);
};

export const getDcentDeepLink = (): string => {
  const linkUrl = encodeURIComponent('https://lap1000.xyz');
  const network = 'klaytn-mainnet';
  const deepLink = DcentDeepLinkBaseUrl.concat(linkUrl).concat('&network=').concat(network);
  return deepLink;
};
