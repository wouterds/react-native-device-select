import { Platform } from 'react-native';
import RNDeviceInfo from 'react-native-device-info';
import { DeviceOS, DeviceSelectType, DeviceType } from './types';

type DeviceSelect = <T = undefined>(specifics: {
  [type in DeviceSelectType]?: T;
}) => T | undefined;

const deviceSelect: DeviceSelect = <T>(specifics: {
  [type in DeviceSelectType]?: T;
}) => {
  let styles = Platform.select(specifics);

  if (specifics.androidTV && Device.isAndroidTV) {
    styles = { ...styles, ...specifics.androidTV };
  }

  if (specifics.appleTV && Device.isAppleTV) {
    styles = { ...styles, ...specifics.appleTV };
  }

  if (specifics[DeviceType.TV] && Device.isTV) {
    styles = { ...styles, ...specifics[DeviceType.TV] };
  }

  if (specifics.mobile && Device.isMobile) {
    styles = { ...styles, ...specifics.mobile };
  }

  if (specifics[DeviceType.Phone] && Device.isPhone) {
    styles = { ...styles, ...specifics[DeviceType.Phone] };
  }

  if (specifics[DeviceType.Tablet] && Device.isTablet) {
    styles = { ...styles, ...specifics[DeviceType.Tablet] };
  }

  if (specifics[DeviceOS.Apple] && Device.isApple) {
    styles = { ...styles, ...specifics[DeviceOS.Apple] };
  }

  if (specifics.default) {
    styles = { ...styles, ...specifics.default };
  }

  return styles;
};

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

  select: deviceSelect,
};

export * from './types';
