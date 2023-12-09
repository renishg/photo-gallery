import {RouteList} from './core/navigation/app-navigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RouteList {}
  }
}
