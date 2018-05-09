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
        *fetch({payload}, {call, put}) {
            const {data, message, error} = yield call(hostManagerService.query);
            yield put({type: 'save', payload: {data, message, error}});
        },
    },
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen(({pathname, query}) => {
                if(pathname === '/hostmanager') {
                    dispatch({type: 'fetch'})
                }
            })
        }
    }
}