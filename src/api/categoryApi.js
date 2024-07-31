import axiosInstance from "./axios";

const categoryApi = {
    getAll: (params) => {
        return axiosInstance.get('/categories', { params: params});
    },
    getById(id) {
        return axiosInstance.get(`/categories/${id}`);
    },
    add(category) {
        return axiosInstance.post(`/categories`, {category});
    },
    update(id, category) {
        return axiosInstance.patch(`/categories/${id}`, {category});
    },
    delete(id) {
        return axiosInstance.delete(`/categories/${id}`);
    }
}

export default categoryApi