<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <div class="form-group row">
              <label for="country" class="col-sm-2 col-form-label">Negara</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="country" placeholder="Indonesi"
                       v-model="address.country">
              </div>
            </div>
            <div class="form-group row">
              <label for="province" class="col-sm-2 col-form-label">Provinsi</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="province" placeholder="D.I Yogyakarta"
                       v-model="address.province">
              </div>
            </div>
            <div class="form-group row">
              <label for="city" class="col-sm-2 col-form-label">Kota</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="city" placeholder="yogyakarta" v-model="address.city">
              </div>
            </div>
            <div class="form-group row">
              <label for="street" class="col-sm-2 col-form-label">Jalan</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="street" placeholder="Jl. Kaliurang xxxx"
                       v-model="address.street">
              </div>
            </div>
            <div class="form-group row">
              <div class="col">
                <button @click="storeAddress" class="btn btn-primary col-5">Tambah</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <table class="table table-responsive table-striped">
      <thead>
      <tr>
        <th>#</th>
        <th>Negara, Provinsi, Kota, Jalan</th>
        <th>Aksi</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(d, number) in data" :key="d.id">
        <td>{{number + 1}}</td>
        <td>{{d.country}}, {{d.province}}, {{d.city}}, {{d.street}}</td>
        <td>
          <router-link :to="'/customers/' + d.customer.id + '/address/' + d.id">Sunting</router-link>
          |
          <button @click="deleteAddress(d.id)" class="btn btn-danger col-5">Hapus</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'user-address',
    data() {
      return {
        data: '',
        user: null,
        address: {
          country: null,
          province: null,
          city: null,
          street: null
        }
      }
    },
    methods: {
      callCustomer() {
        const URL = '/api' + this.$route.path
        axios.get(URL)
          .then(response => {
            this.data = response.data
            this.user = response.data.customer
          })
          .catch(err => {
            alert(err)
          })
      },
      storeAddress() {
        const URL = '/api' + this.$route.path
        axios.post(URL, this.address)
          .then(response => {
            this.callCustomer()
          })
          .when(err => {
            alert(JSON.stringify(err))
          })
        this.$router.push(this.$route.path)
      },
      deleteAddress(id) {
        const URL = '/api' + this.$route.path + '/' + id

        axios.delete(URL)
          .then(response => {
            this.callCustomer()
          })
          .when(err => {
            alert(JSON.stringify(err))
          })
        this.$router.push(this.$route.path)
      }
    },
    mounted() {
      this.callCustomer()
    }
  }
</script>

<style scoped>

</style>
