import api from './'

export default {
    getAll: _ => {
        return api.get('/users');
    },
    getOne: cpf => {
        return api.get(`/user?cpf=${cpf}`);
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