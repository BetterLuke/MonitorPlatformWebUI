export default {
    namespace: 'app',
    state: {
        collapsed: false,
        breadcrumb: ""
    },
    reducers: {
        /**
         * @description 修改侧边栏闭合状态
         * @param {object} state app model的state对象
         */
        switchSider(state) {
            return {...state, collapsed: !state.collapsed}
        },
        /**
         * @description 修改面包屑的状态
         * @param {*} state 
         * @param {*} param1 
         */
        updateBreadcrumb(state, {payload: breadcrumb}) {
            return {...state, breadcrumb}
        }
    },
    effects: {

    },
    subscriptions: {
        
    }
}