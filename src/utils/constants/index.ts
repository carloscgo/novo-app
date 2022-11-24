import { PropsConfig as IConfig } from '../interfaces'

export const DAEMON = '@@saga-injector/daemon'
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount'
export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount'

const {
  VITE_APP_NAME: APP_NAME,
  VITE_GC_KEY: GC_KEY,
  VITE_FB_KEY: FB_KEY,
  VITE_FB_AUTHDOMAIN: FB_AUTHDOMAIN,
  VITE_FB_DATABASEURL: FB_DATABASEURL,
  VITE_FB_PROJECTID: FB_PROJECTID,
  VITE_FB_STORAGEBUCKET: FB_STORAGEBUCKET,
  VITE_FB_MESSAGINGSENDERID: FB_MESSAGINGSENDERID,
  VITE_FB_APPID: FB_APPID,
} = import.meta.env

const VITE_APP: IConfig = {
  APP_NAME,
  GC_KEY,
  FIREBASE: {
    KEY: FB_KEY,
    DATABASEURL: FB_DATABASEURL,
    AUTHDOMAIN: FB_AUTHDOMAIN,
    PROJECTID: FB_PROJECTID,
    STORAGEBUCKET: FB_STORAGEBUCKET,
    MESSAGINGSENDERID: FB_MESSAGINGSENDERID,
    APPID: FB_APPID,
  }
}

const USER_NAME = 'Carlos Camacho'
const COPYRIGHT = "&copy 2022 Novopayment Inc. All right reserved."

export {
  VITE_APP,
  USER_NAME,
  COPYRIGHT,
}
