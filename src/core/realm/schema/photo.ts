import Realm, {ObjectSchema} from 'realm';

export const PhotoSchemaName = 'Photo';

export class Photo extends Realm.Object<Photo> {
  id!: string;
  owner!: string;
  secret!: string;
  server!: string;
  farm!: number;
  title!: string;
  ispublic!: number;
  isfriend!: number;
  isfamily!: number;
  is_primary!: number;
  has_comment!: number;

  static schema: ObjectSchema = {
    name: PhotoSchemaName,
    properties: {
      id: 'string',
      owner: 'string',
      secret: 'string',
      server: 'string',
      farm: 'int',
      title: 'string',
      ispublic: 'int',
      isfriend: 'int',
      isfamily: 'int',
      is_primary: 'int',
      has_comment: 'int',
    },
    primaryKey: 'id',
  };
}
