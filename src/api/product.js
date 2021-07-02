import api from './'

export default {
    getAll: _ => {
        return api.get('/products');
    },
    getOne: idproduct => {
        return api.get(`/product?idproduct=${idproduct}`);
    },
    create: product => {
        return api.post(`/product`, product);
    },
    delete: idproduct => {
        return api.delete(`/product?idproduct=${idproduct}`);
    },
    put: product => {
        return api.put(`/product?idproduct=${product.idproduct}`, product);
    }
}