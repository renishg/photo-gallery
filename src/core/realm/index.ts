import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import {Photo} from './schema';

const realmConfig: Realm.Configuration = {
  schema: [Photo],
  deleteRealmIfMigrationNeeded: true,
};

export const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);
