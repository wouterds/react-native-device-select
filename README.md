# react-native-device-select

[![code-review](https://github.com/wouterds/react-native-device-select/workflows/code-review/badge.svg)](https://github.com/wouterds/react-native-device-select/actions/workflows/code-review.yml)
[![builds](https://github.com/wouterds/react-native-device-select/workflows/builds/badge.svg)](https://github.com/wouterds/react-native-device-select/actions/workflows/builds.yml)
[![npm](https://img.shields.io/npm/v/react-native-device-select)](https://www.npmjs.com/package/react-native-device-select)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-native-device-select)](https://www.npmjs.com/package/react-native-device-select)
<!-- [![npm downloads](https://img.shields.io/npm/dm/react-native-device-select)](https://www.npmjs.com/package/react-native-device-select) -->

An extension on the React Native Platform utilities that offers some more granular choices that are device specific.

## Installation

This library has a peer dependency on [`react-native-device-info`](https://github.com/react-native-device-info/react-native-device-info) so you will need to install that as well.

```sh
npm install react-native-device-info react-native-device-select
# or
yarn add react-native-device-info react-native-device-select
```

## Usage

```ts
import { Device, DeviceOS, DeviceType } from 'react-native-device-select'

if (Device.isMobile) {
  // mobile device
}

if (Device.isPhone) {
  // phone
}

if (Device.isTablet) {
  // tablet
}

if (Device.isAndroid) {
  // Android device
}

if (Device.isApple) {
  // Apple device
}

if (Device.isTV) {
  // TV device
}

if (Device.isAppleTV) {
  // Apple TV device
}

if (Device.isAndroidTV) {
  // Android TV device
}

if (Device.type === DeviceType.Phone) {
  // phone
}

if (Device.type === DeviceType.Tablet) {
  // tablet
}

if (Device.type === DeviceType.TV) {
  // TV
}

if (Device.OS === DeviceType.Android) {
  // Android
}

if (Device.OS === DeviceOS.Apple) {
  // Apple
}

if (Device.OS === DeviceType.Unknown) {
  // Not Apple or Android
}
```

### Device.select

Just a basic example but all of above utilities are available on `Device.select` as an option.

```ts
import { Device } from 'react-native-device-select'

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    ...Device.select({
      phone: {
        marginVertical: 10,
      },
      tablet: {
        marginVertical: 15,
      },
      tv: {
        marginVertical: 0,
      },
    }),
  },
  title: {
    marginTop: 5,
    ...Device.select({
      android: {
        marginTop: 4,
      },
    }),
  },
  signUpButton: {
    fontSize: 14,
    ...Device.select({
      appleTV: {
        display: 'none',
      },
    }),
  }
})
```

## License

MIT
