import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';

// Dòng này chặn mọi lỗi liên quan đến thư viện Icon và Font
jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'View'
}));

describe('HomeScreen', () => {
  it('1. Màn hình render thành công không bị crash', () => {
    const { toJSON } = render(<HomeScreen />);
    expect(toJSON()).toBeTruthy();
  });

  it('2. Hiển thị thông tin người dùng và Banner', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('Hello Mobile')).toBeTruthy();
    expect(getByText('85%')).toBeTruthy();
    expect(getByText('Hỗ trợ gian hàng số 14')).toBeTruthy();
  });

  it('3. Xử lý nút bấm Xem nhiệm vụ', () => {
    const { getByTestId, getByText } = render(<HomeScreen />);
    const button = getByTestId('btn-action');
    
    expect(getByText('Xem nhiệm vụ')).toBeTruthy();
    fireEvent.press(button);
    expect(getByText('Đang tải...')).toBeTruthy();
  });
});