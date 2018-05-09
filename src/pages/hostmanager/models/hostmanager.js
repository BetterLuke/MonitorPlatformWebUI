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
            if(typeof(data) == 'undefined') {
                console.log(message)
                return {...state, message, error}
            } else{
                return {...state, data, message, error}                
            }
        },
    },
    effects: {
        *fetch({payload}, {call, put}) {
            const {data, message, error} = yield call(hostManagerService.query);
            yield put({type: 'save', payload: {data, message, error}});
        },
        *create({payload: value}, {call, put, select}) {
            const {message, error} = yield call(hostManagerService.create, value)
            yield put({type: 'save', payload: {message, error}})
            yield put({type: 'fetch'})
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