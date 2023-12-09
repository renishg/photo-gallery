import React from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';

import {HomeScreen} from 'src/screens';
import {
  PhotoDetailRouteParams,
  PhotoDetailScreen,
} from 'src/screens/PhotoDetailScreen';

export type RouteList = {
  Home: undefined;
  PhotoDetail: PhotoDetailRouteParams;
};

export type NavigationProps = NativeStackNavigationProp<RouteList>;

export type RouteProps<RouteName extends keyof RouteList> = RouteProp<
  RouteList,
  RouteName
>;

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Photos'}}
        />
        <Stack.Screen
          name="PhotoDetail"
          component={PhotoDetailScreen}
          options={{title: 'Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
