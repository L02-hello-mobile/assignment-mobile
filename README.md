# Assignment Mobile

[![Test & Sonar Scan](https://github.com/L02-hello-mobile/assignment-mobile/actions/workflows/test.yml/badge.svg)](https://github.com/L02-hello-mobile/assignment-mobile/actions/workflows/test.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=L02-hello-mobile_assignment-mobile&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=L02-hello-mobile_assignment-mobile)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=L02-hello-mobile_assignment-mobile&metric=coverage)](https://sonarcloud.io/summary/new_code?id=L02-hello-mobile_assignment-mobile)

React Native + Expo. Gồm 2 màn hình: đăng nhập và home.

npm run web # localhost
npx expo start # mobile — scan QR bằng Expo Go

## Tests

**OnboardingScreen** (`__tests__/OnboardingScreen.test.tsx`)

- render đúng tiêu đề
- nhập email + password
- bấm đăng nhập → navigate sang Home

**HomeScreen** (`__tests__/HomeScreen.test.tsx`)

- render không crash
- hiển thị tên user và banner 85%
- bấm nút → đổi text
