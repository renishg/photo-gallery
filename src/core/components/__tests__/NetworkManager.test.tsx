import React from 'react';
import {RenderAPI} from '@testing-library/react-native';
import {NetworkManager} from '../NetworkManager';
import {Text} from 'react-native';
import {renderWithProviders} from 'src/utils/testUtils';
import {useNetInfo} from '@react-native-community/netinfo';

describe('<NetworkManager/>', () => {
  let instance: RenderAPI;

  const childText = 'Child text';

  const noInternetConnectionText = 'No internet connection';

  describe('interet is connected', () => {
    beforeAll(() => {
      (useNetInfo as jest.Mock).mockReturnValue({
        isConnected: true,
      });
    });
    beforeEach(() => {
      instance = renderWithProviders(
        <NetworkManager>
          <Text>{childText}</Text>
        </NetworkManager>,
      );
    });

    afterEach(() => {
      instance.unmount();
      jest.clearAllMocks();
    });

    it('should render child', () => {
      expect(instance.getByText(childText)).toBeOnTheScreen();
    });

    it('should not render no internet connection text', () => {
      expect(instance.queryByText(noInternetConnectionText)).toBeFalsy();
    });
  });

  describe('interet is not connected', () => {
    beforeAll(() => {
      (useNetInfo as jest.Mock).mockReturnValue({
        isConnected: false,
      });
    });
    beforeEach(() => {
      instance = renderWithProviders(
        <NetworkManager>
          <Text>{childText}</Text>
        </NetworkManager>,
      );
    });

    afterEach(() => {
      instance.unmount();
      jest.clearAllMocks();
    });

    it('should render child', () => {
      expect(instance.getByText(childText)).toBeOnTheScreen();
    });

    it('should render no internet connection text', () => {
      expect(instance.getByText(noInternetConnectionText)).toBeOnTheScreen();
    });
  });
});
