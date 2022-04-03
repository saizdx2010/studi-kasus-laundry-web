<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand"
        >Laundry Sai Prashanth</router-link
      >
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Beranda</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/list-pesanan" class="nav-link">Pesanan</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tambah" class="nav-link">Buat Pesanan</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>