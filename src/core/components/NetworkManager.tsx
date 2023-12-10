import React, {FC, PropsWithChildren, useEffect} from 'react';
import {ErrorText} from 'src/components';
import {useNetwork} from 'src/hooks';

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
