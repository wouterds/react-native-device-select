import type { PlatformOSType } from 'react-native';

export enum DeviceType {
  Phone = 'phone',
  Tablet = 'tablet',
  TV = 'tv',
  Unknown = 'unknown',
}

export enum DeviceOS {
  Android = 'android',
  Apple = 'apple',
  Unknown = 'unknown',
}

export type DeviceSelectType =
  | PlatformOSType
  | DeviceOS.Apple
  | DeviceType.TV
  | DeviceType.Tablet
  | DeviceType.Phone
  | 'mobile'
  | 'androidTV'
  | 'appleTV'
  | 'default';
