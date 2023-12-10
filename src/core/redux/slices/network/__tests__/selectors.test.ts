import {networkSelectors} from '../selectors';
import {RootState} from 'src/core/redux';

describe('#selectors', () => {
  let rootState: RootState;

  beforeEach(() => {
    rootState = {
      network: {
        isConnected: false,
      },
      photos: {
        isLoading: false,
      },
    };
  });

  it('should get isConnected state', () => {
    const isConnected = networkSelectors.isConnected(rootState);
    expect(isConnected).toBe(rootState.network.isConnected);
  });
});
