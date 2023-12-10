import {act, renderHook, RenderHookResult} from '@testing-library/react-hooks';

import {useNetwork, UseNetworkType} from '../useNetwork';
import {Wrapper, WrapperProps} from 'src/utils/testUtils';

describe('useNetwork', () => {
  let renderHookResult: RenderHookResult<undefined, UseNetworkType>;

  beforeAll(() => {
    act(() => {
      renderHookResult = renderHook<WrapperProps, UseNetworkType>(
        () => useNetwork(),
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

  it('should return isConnected true', () => {
    const {
      result: {
        current: {isConnected},
      },
    } = renderHookResult;

    expect(isConnected).toBeTruthy();
  });

  it('should call setIsConnected', async () => {
    const {result} = renderHookResult;

    const payload = true;

    result.current.setIsConnected(payload);

    expect(result.current.isConnected).toBe(payload);
  });
});
