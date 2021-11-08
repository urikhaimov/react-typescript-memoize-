import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  }
};

export default config;
