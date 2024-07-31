import axiosInstance from "./axios";

const productApi = {
    getAll: (params) => {
        return axiosInstance.get('/products', { params: params});
    },
    getById(id) {
        return axiosInstance.get(`/products/${id}`);
    },
    add(category) {
        return axiosInstance.post(`/products`, {category});
    },
    update(id, category) {
        return axiosInstance.patch(`/products/${id}`, {category});
    },
    delete(id) {
        return axiosInstance.delete(`/products/${id}`);
    }
}

export default productApi