import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import {Photo} from './schema';

const schema = [Photo];

export const realmConfig: Realm.Configuration = {
  schema,
};

export type RealmSchema = (typeof schema)[number];

export const {
  RealmProvider,
  useRealm: useAppRealm,
  useObject: useAppObject,
  useQuery: useAppQuery,
} = createRealmContext(realmConfig);
