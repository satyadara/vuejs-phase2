<template>
  <div>
    <div class="row">
      <h1 class="">Daftar Pelanggan</h1>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6 justify-content-center">
            <router-link :to="'/customers/create'">Tambah Pelanggan</router-link>
            <table class="table table-responsive table-striped">
              <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Aksi</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(d, index) in data" :key="d.id">
                <td>
                  {{index + 1}}
                </td>
                <td>
                  {{ d.name }}
                </td>
                <td>
                  <router-link :to="'/customers/' + d.id + '/address'">Tampil</router-link>
                  |
                  <router-link :to="'/customers/' + d.id">Sunting</router-link>
                  |
                  <button class="btn" @click="deleteUser(d.id)">Hapus</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'user-index',
    data() {
      return {
        data: null,
        stringifies: ''
      }
    },
    mounted() {
      this.getUsers()
    },
    methods: {
      getUsers() {
        const URL = '/api/customers'

        axios.get(URL)
          .then(response => {
            this.data = response.data
          })
          .catch(err => {
            alert(err)
          })
      },
      deleteUser(id) {
        const URL = '/api/customers/' + id
        axios.delete(URL)
          .then(response => {
            this.data = response.data
          })
          .catch(err => {
            alert(err)
          })
      },
      toString() {
        this.stringifies = JSON.stringify(this.data)
        alert(this.stringifies)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
