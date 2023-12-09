import {useCallback} from 'react';
import {UpdateMode} from 'realm';
import {RealmSchema, useAppQuery, useAppRealm} from 'src/core/realm';

export const useRealmCollection = (schema: RealmSchema) => {
  const realm = useAppRealm();
  const data = useAppQuery(schema);

  const insertAll = useCallback(
    (records: Record<string, unknown>[]) => {
      records.forEach(record => {
        realm.write(() => {
          realm.create(schema, record, UpdateMode.Modified);
        });
      });
    },
    [realm, schema],
  );

  return {
    data,
    insertAll,
  };
};
