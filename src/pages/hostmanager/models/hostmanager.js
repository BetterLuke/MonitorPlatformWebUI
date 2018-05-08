import * as hostManagerService from '../services/hostmanager';

export default {
    namespace: 'hostmanager',
    state: {
        data: [],
        message: '',
        error: '',
    },
    reducers: {
        save(state, {payload: {data, message, error}}) {
            return {...state, data, message, error}
        },
    },
    effects: {
        *fetch({}, {call, put}) {
            const {data, message, error} = yield call(hostManagerService.query);
            console.log(data);
            yield put({type: 'save', payload: {data, message, error}});
        },
    },
    subscriptions: {
        setup({dispatch}) {
            dispatch({type: 'fetch'})
        }
    }
}