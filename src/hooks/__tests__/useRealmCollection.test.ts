import {act, renderHook, RenderHookResult} from '@testing-library/react-hooks';
import {UpdateMode} from 'realm';

import {
  useRealmCollection,
  UseRealmCollectionType,
} from '../useRealmCollection';
import {Photo} from 'src/core/realm/schema';
import {Wrapper, WrapperProps} from 'src/utils/testUtils';
import {createMock, mockGetPhotosResponse} from 'src/utils/testUtils/mocks';

describe('useRealmCollection', () => {
  let renderHookResult: RenderHookResult<undefined, UseRealmCollectionType>;

  const data = mockGetPhotosResponse.photos.photo;

  beforeAll(() => {
    act(() => {
      renderHookResult = renderHook<WrapperProps, UseRealmCollectionType>(
        () => useRealmCollection(Photo),
        {
          wrapper: Wrapper,
        },
      );
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
    renderHookResult.unmount();
  });

  it('should call create', () => {
    const {
      result: {
        current: {insertAll},
      },
    } = renderHookResult;

    insertAll(data);

    data.forEach(item => {
      expect(createMock).toHaveBeenCalledWith(Photo, item, UpdateMode.Modified);
    });
  });
});
