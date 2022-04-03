<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Cari Pesanan"
          v-model="nama"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="cariPesanan"
          >
            Cari
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>List Pesanan</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index === currentId }"
          v-for="(pesanan, index) in pesanan"
          :key="index"
          @click="setActivePesanan(pesanan, index)"
        >
          {{ pesanan.nama }}
        </li>
      </ul>
      <!-- <button class="m-3 btn btn-ms btn-danger" @click="hapusSemuaPesanan">
        Hapus Semua Pesanan
      </button> -->
    </div>
    <div class="col-md-6">
      <div v-if="currentPesanan">
        <h3>Pesanan</h3>
        <div>
          <label for=""><strong>Nama : </strong></label>
          {{ currentPesanan.nama }}
        </div>
        <div>
          <label for=""><strong>Deskripsi : </strong></label>
          {{ currentPesanan.deskripsi }}
        </div>
        <div>
          <label for=""><strong>Status : </strong></label>
          {{ currentPesanan.published ? "Published" : "Pending" }}
        </div>
        <router-link
          :to="'/list-pesanan/' + currentPesanan._id"
          class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Mohon Memilih Pesanan Terlebih Dahulu</p>
      </div>
    </div>
  </div>
</template>

<script>
import PesananDataService from "../services/PesananDataService";

export default {
  name: "list-pesanan",
  data() {
    return {
      pesanan: [],
      currentPesanan: null,
      currentId: -1,
      nama: "",
    };
  },
  methods: {
    retrievePesanan() {
      PesananDataService.getAll()
        .then((resp) => {
          this.pesanan = resp.data;
          console.log(resp.data);
        })
        .catch((err) => console.log(err));
    },
    refreshList() {
      this.retrievePesanan();
      this.currentPesanan = null;
      this.currentId = -1;
    },
    setActivePesanan(pesanan, index) {
      this.currentPesanan = pesanan;
      this.currentId = pesanan ? index : -1;
    },
    // hapusSemuaPesanan() {
    //   PesananDataService.deleteAll()
    //     .then((resp) => {
    //       console.log(resp.data);
    //       this.refreshList();
    //     })
    //     .catch((err) => console.log(err));
    // },
    cariPesanan() {
      PesananDataService.cariPesanan(this.nama)
        .then((resp) => {
          this.pesanan = resp.data;
          this.setActivePesanan(null);
          console.log(resp.data);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.retrievePesanan();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 700px;
  margin: auto;
}
</style>