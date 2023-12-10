import * as RealmFunctions from '../index';

describe('realm', () => {
  it('should get realm functions', async () => {
    expect(RealmFunctions.RealmProvider).toBeTruthy();
    expect(RealmFunctions.useAppObject).toBeTruthy();
    expect(RealmFunctions.useAppQuery).toBeTruthy();
    expect(RealmFunctions.useAppRealm).toBeTruthy();
  });
});
