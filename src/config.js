const dev = {
  REACT_APP_API: 'dev',
};
const prod = {
  REACT_APP_API: 'prod',
};
const staging = {
  REACT_APP_API: 'staging',
};
const config = {
  ...(process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : process.env.REACT_APP_STAGE === 'dev'
    ? dev
    : staging),
};
export const API = `https://${config.REACT_APP_API}.mockAPI.com`;
export default config;
