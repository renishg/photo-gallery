import {useNetInfo} from '@react-native-community/netinfo';
import {networkActions, useAppDispatch} from 'src/core/redux';

export const useNetwork = () => {
  const {isConnected} = useNetInfo();
  const dispatch = useAppDispatch();

  const setIsConnected = (value: boolean) => {
    dispatch(networkActions.setIsConnected(value));
  };

  return {
    isConnected,
    setIsConnected,
  };
};
