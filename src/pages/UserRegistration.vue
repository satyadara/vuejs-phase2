<template>
  <div>
    <div class="row">
      <h1 class="">Pendaftaran Pelanggan</h1>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
              <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Nama</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="name" placeholder="email@example.com" v-model="data.name">
                </div>
              </div>
              <div class="form-group row">
                <label for="country" class="col-sm-2 col-form-label">Negara</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="country" placeholder="Indonesi"
                         v-model="data.address.country">
                </div>
              </div>
              <div class="form-group row">
                <label for="province" class="col-sm-2 col-form-label">Provinsi</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="province" placeholder="D.I Yogyakarta"
                         v-model="data.address.province">
                </div>
              </div>
              <div class="form-group row">
                <label for="city" class="col-sm-2 col-form-label">Kota</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="city" placeholder="yogyakarta" v-model="data.address.city">
                </div>
              </div>
              <div class="form-group row">
                <label for="street" class="col-sm-2 col-form-label">Jalan</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="street" placeholder="Jl. Kaliurang xxxx"
                         v-model="data.address.street">
                </div>
              </div>
              <div class="form-group row">
                <div class="col">
                  <button @click="storeUser" class="btn btn-primary col-5">Daftar</button>
                  <a href="/customers">
                    <button @click="toString" class="btn btn-default col-5">Batal</button>
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'user-registration',
    data() {
      return {
        data: {
          name: null,
          address: {
            country: null,
            province: null,
            city: null,
            street: null
          }
        }
      }
    },
    mounted() {

    },
    methods: {
      storeUser() {
        const URL = '/api/customers'
        axios.post(URL, this.data)
          .then(response => {
            alert(JSON.stringify(response.data))
            this.$router.push('/customers')
          })
          .catch(err => {
            alert(err)
          })
      },
      toString()  {
        alert(JSON.stringify(this.data))
      }
    }
  }
</script>

<style scoped>

</style>
