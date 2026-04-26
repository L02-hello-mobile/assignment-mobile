/* eslint-disable no-undef */
import '@testing-library/react-native/extend-expect';

// Fix lỗi ReferenceError: You are trying to import a file outside of the scope
global.__expo_module_name = 'test';

// Mock toàn bộ Expo Font và Asset
jest.mock('expo-font');
jest.mock('expo-asset');
jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'View',
}));

// Mock phản hồi từ hệ thống để tránh treo test
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');