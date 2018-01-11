<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <div class="form-group row">
              <label for="country" class="col-sm-2 col-form-label">Negara</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="country" placeholder="Indonesia"
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
                <button @click="updateAddress" class="btn btn-primary col-5">Ubah</button>
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
    name: 'address-edit',
    data() {
      return {
        address: {
          id: null,
          country: null,
          province: null,
          city: null,
          street: null,
          customer: null
        }
      }
    },
    mounted() {
      this.getAddress()
    },
    methods: {
      getAddress() {
        const URL = '/api' + this.$route.path

        axios.get(URL)
          .then(response => {
            this.address = response.data
          })
          .catch(err => {
            alert(err)
          })
      },
      updateAddress() {
        const URL = '/api' + this.$route.path

        axios.put(URL, this.address)
          .then(response => {
            this.$router.back()
          })
          .catch(err => {
            alert(err)
          })
      }
    }
  }
</script>

<style scoped>

</style>
