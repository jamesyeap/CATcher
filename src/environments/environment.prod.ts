import { BaseConfig } from './environment.gen';

const appSetting = require('../../package.json');

export const AppConfig = {
  version: appSetting.version,
  production: true,
  test: false,
  clientId: '5e1ed08cff7f0de1d68d',
  githubUrl: 'https://github.com',
  accessTokenUrl: BaseConfig.accessTokenUrl,
  clientDataUrl: 'https://raw.githubusercontent.com/CATcher-org/client_data/master/profiles.json',
  origin: 'https://catcher-org.github.io'
};
