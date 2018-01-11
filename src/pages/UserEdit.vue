<template>
  <div>
    <div class="row">
      <h1 class="">Sunting Pelanggan</h1>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col">
            <div class="form-group row">
              <label for="name" class="col-sm-2 col-form-label">Nama</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="name" placeholder="email@example.com" v-model="data">
              </div>
            </div>
            <div class="form-group row">
              <div class="col">
                <button @click="updateUser" class="btn btn-primary col-5">Update</button>
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
    name: 'user-edit',
    data() {
      return {
        data : null
      }
    },
    mounted() {
      this.getUser()
    },
    methods: {
      getUser() {
        const URL = '/api' + this.$route.path
        axios.get(URL)
          .then(response => {
            this.data = response.data.name
            alert(JSON.stringify(this.data))
          })
          .catch(err => {
            alert(err)
          })
      },
      updateUser() {
        const URL = '/api' + this.$route.path
        alert(JSON.stringify(this.data))
        axios.put(URL, {
          name: this.data
        })
          .then(response => {
            alert(JSON.stringify(response.data))
            this.$router.push('/customers')
          })
          .catch(err => {
            alert(err)
          })
      },
      toString() {
        alert(JSON.stringify(this.data))
      }
    }
  }
</script>

<style scoped>

</style>
