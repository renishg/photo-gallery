import {act, renderHook, RenderHookResult} from '@testing-library/react-hooks';

import {usePhotos, UsePhotosType} from '../usePhotos';
import {Wrapper, WrapperProps} from 'src/utils/testUtils';
import {waitFor} from '@testing-library/react-native';
import {createMock} from 'src/utils/testUtils/mocks';
import {useNetInfo} from '@react-native-community/netinfo';

describe('usePhotos', () => {
  let renderHookResult: RenderHookResult<undefined, UsePhotosType>;

  describe('when interet is connected', () => {
    beforeAll(() => {
      act(() => {
        renderHookResult = renderHook<WrapperProps, UsePhotosType>(
          () => usePhotos(),
          {
            wrapper: Wrapper,
          },
        );
      });
    });

    afterAll(() => {
      jest.clearAllMocks();
      renderHookResult.unmount();
    });

    it('should return isLoding false', () => {
      const {
        result: {
          current: {isLoading},
        },
      } = renderHookResult;

      expect(isLoading).toBeFalsy();
    });

    it('should return error undefined', () => {
      const {
        result: {
          current: {error},
        },
      } = renderHookResult;

      expect(error).toBeUndefined();
    });

    it('should call insertAll', async () => {
      const {
        result: {
          current: {fetchPhotos},
        },
      } = renderHookResult;
      await waitFor(async () => {
        await fetchPhotos();
      });
      expect(createMock).toHaveBeenCalled();
    });
  });

  describe('when interet is not connected', () => {
    beforeAll(() => {
      (useNetInfo as jest.Mock).mockReturnValue({
        isConnected: false,
      });
      act(() => {
        renderHookResult = renderHook<WrapperProps, UsePhotosType>(
          () => usePhotos(),
          {
            wrapper: Wrapper,
          },
        );
      });
    });

    afterAll(() => {
      jest.clearAllMocks();
      renderHookResult.unmount();
    });

    it('should not call insertAll', async () => {
      const {
        result: {
          current: {fetchPhotos},
        },
      } = renderHookResult;
      await waitFor(async () => {
        await fetchPhotos();
      });
      expect(createMock).not.toHaveBeenCalled();
    });
  });
});
