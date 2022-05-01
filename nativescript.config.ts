import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'cloud.holfelder.ledapp',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;