export interface Config {
  serverUrl: string
  instanceName: string
  instanceSubName: string
  disableSubName: boolean
  disableRadio: boolean
  disablePodcast: boolean
}

const env = (window as any).env

export const config: Config = {
  serverUrl: env?.SERVER_URL || '',
  instanceName: env?.INSTANCE_NAME || 'airsonic',
  instanceSubName: env?.INSTANCE_SUBNAME || 'refix',
  disableSubName: env?.DISABLE_SUBNAME ? Boolean(env.DISABLE_SUBNAME) : false,
  disableRadio: env?.DISABLE_RADIO ? Boolean(env.DISABLE_RADIO) : false,
  disablePodcast: env?.DISABLE_PODCAST ? Boolean(env.DISABLE_PODCAST) : false,
}
