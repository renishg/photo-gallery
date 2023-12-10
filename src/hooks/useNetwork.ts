import {useNetInfo} from '@react-native-community/netinfo';
import {useCallback} from 'react';
import {networkActions} from 'src/core/redux';
import {useAppDispatch} from 'src/core/redux/hooks';

export const useNetwork = () => {
  const {isConnected} = useNetInfo();
  const dispatch = useAppDispatch();

  const setIsConnected = useCallback(
    (value: boolean) => {
      dispatch(networkActions.setIsConnected(value));
    },
    [dispatch],
  );

  return {
    isConnected,
    setIsConnected,
  };
};

export type UseNetworkType = ReturnType<typeof useNetwork>;
