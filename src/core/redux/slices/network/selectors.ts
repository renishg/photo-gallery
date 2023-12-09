import type {RootState} from '../../store';

const isConnected = (state: RootState) => state.network.isConnected;

export const networkSelectors = {
  isConnected,
};
