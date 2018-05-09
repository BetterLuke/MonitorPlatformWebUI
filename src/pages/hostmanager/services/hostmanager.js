import request from '../../../utils/request'

export function query() {
    return request('/api/hostmanager')
}

export function create(values) {
    return request('/api/hostmanager',{
        method : "POST",
        body : JSON.stringify(values)
    })
}

export function patch(id, values) {
    return request(`/api/hostmanager/${id}`,{
        method : "PUT",
        body : JSON.stringify(values)
    })
}

export function remove(id) {
    return request(`/api/hostmanager/${id}`,{
        method : "DELETE"
    })
}