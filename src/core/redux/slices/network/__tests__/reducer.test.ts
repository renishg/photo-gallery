import {networkActions} from '../actions';
import {NetworkState, networkReducer} from '../reducer';

describe('#reducer', () => {
  let initialState: NetworkState;

  beforeEach(() => {
    initialState = {
      isConnected: false,
    };
  });

  it('should update isConnected state', () => {
    const isLoading = true;
    const nextState = networkReducer(
      initialState,
      networkActions.setIsConnected(isLoading),
    );
    expect(nextState.isConnected).toBe(isLoading);
  });

  it('should reset isConnected state', () => {
    const nextState = networkReducer(initialState, networkActions.reset());
    expect(nextState.isConnected).toBeFalsy();
  });
});
