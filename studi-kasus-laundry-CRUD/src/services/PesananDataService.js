import http from "../http-common";

class PesananDataService {
    getAll() {
        return http.get("/list-pesanan");
    }
    get(id) {
        return http.get(`/list-pesanan/${id}`);
    }
    create(data) {
        return http.post("/list-pesanan", data);
    }
    update(id, nama, deskripsi) {
        return http.put(`/list-pesanan/${id}`, nama, deskripsi);
    }
    delete(id) {
        return http.delete(`/list-pesanan/${id}`);
    }
    deleteAll() {
        return http.delete(`/list-pesanan`)
    }
    cariPesanan(nama) {
        return http.get(`/list-pesanan?nama=${nama}`)
    }
}

export default new PesananDataService();