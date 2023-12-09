import Realm, {ObjectSchema} from 'realm';

export const PhotoSchemaName = 'Photo';

export class Photo extends Realm.Object<Photo> {
  id!: string;
  owner!: string;
  secret!: string;
  server!: string;
  farm!: number;
  title!: string;
  ispublic!: boolean;
  isfriend!: boolean;
  isfamily!: boolean;
  is_primary!: boolean;
  has_comment!: boolean;

  static schema: ObjectSchema = {
    name: PhotoSchemaName,
    properties: {
      id: 'string',
      owner: 'string',
      secret: 'string',
      server: 'string',
      farm: 'int',
      title: 'string',
      ispublic: 'bool',
      isfriend: 'bool',
      isfamily: 'bool',
      is_primary: 'bool',
      has_comment: 'bool',
    },
    primaryKey: 'id',
  };
}
