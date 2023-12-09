import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useNetwork} from 'src/hooks';

export const NetworkManager: FC<PropsWithChildren> = ({children}) => {
  const {isConnected, setIsConnected} = useNetwork();

  useEffect(() => {
    setIsConnected(!!isConnected);
  }, [isConnected, setIsConnected]);

  return <>{children}</>;
};
