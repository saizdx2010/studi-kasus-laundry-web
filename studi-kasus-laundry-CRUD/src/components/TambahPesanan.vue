<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nama">Nama Pesanan</label>
        <input
          type="text"
          class="form-control"
          name="nama"
          id="nama"
          required
          v-model="pesanan.nama"
        />
      </div>
      <div class="form-group">
        <label for="nama">Deskripsi Pesanan</label>
        <input
          type="text"
          class="form-control"
          name="deskripsi"
          id="deskripsi"
          required
          v-model="pesanan.deskripsi"
        />
      </div>
      <button @click="simpanPesanan" class="btn btn-success">
        Tambah Pesanan
      </button>
    </div>
    <div v-else>
      <h3>Pesanan berhasil dibuat!</h3>
      <h4>Terima Kasih</h4>
      <button class="btn btn-primary" @click="pesananBaru">Buat Pesanan</button>
    </div>
  </div>
</template>

<script>
import PesananDataService from "../services/PesananDataService";
export default {
  name: "tambah-pesanan",
  data() {
    return {
      pesanan: {
        id: null,
        nama: "",
        deskripsi: "",
        published: false,
      },
      submitted: false,
    };
  },

  methods: {
    simpanPesanan() {
      let data = {
        nama: this.pesanan.nama,
        deskripsi: this.pesanan.deskripsi,
      };
      PesananDataService.create(data)
        .then((resp) => {
          this.pesanan.id = resp.data.id;
          console.log(resp.data);
          this.submitted = true;
        })
        .catch((err) => console.log(err));
    },

    pesananBaru() {
      this.submitted = false;
      this.pesanan = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
