import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useNetwork} from 'src/hooks';
import {ErrorText} from './ErrorText';

export const NetworkManager: FC<PropsWithChildren> = ({children}) => {
  const {isConnected, setIsConnected} = useNetwork();

  useEffect(() => {
    setIsConnected(!!isConnected);
  }, [isConnected, setIsConnected]);

  return (
    <>
      {!isConnected && <ErrorText text={'No internet connection'} />}
      {children}
    </>
  );
};
