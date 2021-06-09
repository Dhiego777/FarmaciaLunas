import api from './'

export default {
    getAll: _ => {
        return api.get('/user');
    },
    getOne: cpf => {
        return api.get(`/user/${cpf}`);
    },
    create: user => {
        return api.post(`/user`, user);
    },
    delete: cpf => {
        return api.delete(`/user/${cpf}`);
    },
    put: user => {
        return api.put(`/user/${user.cpf}`, user);
    }
}