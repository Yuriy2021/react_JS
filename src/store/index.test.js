import { act, renderHook } from '@testing-library/react-hooks';
import { withChats } from "../hocs/withChats";

describe('withChats', () => {

    it('setFieldValue', () => {
        const initialValues = {}
        const { result } = renderHook(() => withChats(initialValues))

        act(() => {
            result.current.setFieldValue('name');
        })

        expect(result.current.values).toMatchObject({
            name: 'content',

        })

        expect(result.current.getFieldValue('name')).toEqual('content');

    })

})