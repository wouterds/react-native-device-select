import { Platform } from 'react-native';
import RNDeviceInfo from 'react-native-device-info';
import { DeviceOS, DeviceType } from './types';

export * from './types';

export const Device = {
  get isTablet() {
    return RNDeviceInfo.isTablet();
  },

  get isTV() {
    return Platform.isTV;
  },

  get isMobile() {
    if (Device.isTV) {
      return false;
    }

    return true;
  },

  get isPhone() {
    if (Device.isTV) {
      return false;
    }

    if (!Device.isMobile) {
      return false;
    }

    if (Device.isTablet) {
      return false;
    }

    return true;
  },

  get OS() {
    if (Platform.OS === 'ios') {
      return DeviceOS.Apple;
    }

    if (Platform.OS === 'android') {
      return DeviceOS.Android;
    }

    return DeviceOS.Unknown;
  },

  get isAndroid() {
    if (Device.OS === DeviceOS.Android) {
      return true;
    }

    return false;
  },

  get isApple() {
    if (Device.OS === DeviceOS.Apple) {
      return true;
    }

    return false;
  },

  get isAppleTV() {
    return Device.isTV && Device.isApple;
  },

  get isAndroidTV() {
    return Device.isTV && Device.isAndroid;
  },

  get type() {
    if (Device.isTV) {
      return DeviceType.TV;
    }

    if (Device.isTablet) {
      return DeviceType.Tablet;
    }

    if (Device.isPhone) {
      return DeviceType.Phone;
    }

    return DeviceType.Unknown;
  },
};
