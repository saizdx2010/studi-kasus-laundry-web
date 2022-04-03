<template>
  <div v-if="currentPesanan" class="edit-form">
    <h3>Pesanan</h3>
    <form action="">
      <div class="form-group">
        <label for="nama">Nama Pesanan</label>
        <input
          type="text"
          class="form-control"
          id="nama"
          name="nama"
          v-model="currentPesanan.nama"
        />
      </div>
      <div class="form-group">
        <label for="deskripsi">Deskripsi Pesanan</label>
        <input
          type="text"
          name="deskripsi"
          id="deskripsi"
          v-model="currentPesanan.deskripsi"
        />
      </div>
      <div class="form-group">
        <label for=""><strong>Status : </strong></label>
        {{ currentPesanan.published ? "Terkonfirmasi" : "Menunggu Konfirmasi" }}
      </div>
    </form>
    <button
      class="btn btn-primary btn-sm"
      v-if="currentPesanan.published"
      @click="updatePublished(false)"
    >
      Batal Konfirmasi
    </button>
    <button
      v-else
      class="btn btn-primary btn-sm"
      @click="updatePublished(true)"
    >
      Konfirmasi
    </button>
    <button class="btn btn-danger btn-sm" @click="hapusPesanan">
      Hapus Pesanan
    </button>
    <button type="submit" class="btn btn-success btn-sm" @click="updatePesanan">
      Update Pesanan
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Mohon Memilih Pesanan Terlebih Dahulu</p>
  </div>
</template>

<script>
import PesananDataService from "../services/PesananDataService";
export default {
  name: "pesanan-view",
  data() {
    return {
      currentPesanan: null,
      message: "",
    };
  },
  methods: {
    getPesanan(id) {
      PesananDataService.get(id)
        .then((resp) => {
          this.currentPesanan = resp.data;
          console.log(resp.data);
        })
        .catch((err) => console.log(err));
    },
    updatePublished(status) {
      let data = {
        id: this.currentPesanan._id,
        nama: this.currentPesanan.nama,
        deskripsi: this.currentPesanan.deskripsi,
        published: status,
      };
      PesananDataService.update(this.currentPesanan._id, data)
        .then((resp) => {
          this.currentPesanan.published = status;
          this.message = "Berhasil merubah konfirmasi pesanan";
          console.log(resp.data);
        })
        .catch((err) => console.log(err));
    },
    updatePesanan() {
      PesananDataService.update(
        this.currentPesanan._id,
        this.currentPesanan.nama,
        this.currentPesanan.deskripsi
      )
        .then((resp) => {
          this.message = "Data Pesanan Berhasil Diubah";
          console.log(resp.data);
        })
        .catch((err) => console.log(err));
    },
    hapusPesanan() {
      PesananDataService.delete(this.currentPesanan._id)
        .then((resp) => {
          this.$router.push({ name: "list-pesanan" });
          console.log(resp.data);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.message = "";
    this.getPesanan(this.$route.params.id);
  },
};
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}

.btn {
  width: 100px;
  height: 50px;
  padding: 10px;
}
</style>