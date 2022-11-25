import { PropsConfig as IConfig } from '../interfaces'

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

const USER_NAME: string = 'Carlos Camacho'
const COPYRIGHT: string = "&copy 2022 Novopayment Inc. All right reserved."

const DAEMON: string = '@@saga-injector/daemon'
const ONCE_TILL_UNMOUNT: string = '@@saga-injector/once-till-unmount'
const RESTART_ON_REMOUNT: string = '@@saga-injector/restart-on-remount'

export {
  DAEMON,
  ONCE_TILL_UNMOUNT,
  RESTART_ON_REMOUNT,
  VITE_APP,
  USER_NAME,
  COPYRIGHT,
}
