import '@testing-library/react-native/extend-expect';

//mock
jest.mock('expo-image', () => ({
  Image: () => null,
}));
