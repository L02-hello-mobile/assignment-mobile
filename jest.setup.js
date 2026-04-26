/* eslint-disable no-undef */
import "@testing-library/react-native";

global.__expo_module_name = "test";

jest.mock("expo-font");
jest.mock("expo-asset");
jest.mock("@expo/vector-icons", () => ({
  Ionicons: "View",
}));

// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
