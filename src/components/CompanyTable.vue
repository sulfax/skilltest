<template>
  <div id="company-table">
    <p v-if="companies.length < 1" class="empty-table">No companies</p>
    <table v-else class="company-table">
      <colgroup>
        <col style="width:50%">
        <col style="width:40%">
        <col style="width:10%">
      </colgroup>
      <thead>
      <tr>
        <th>Org nr.</th>
        <th>Name</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="company in companies" :key="company.orgnr">
        <td >{{company.orgnr}}</td>
        <td>{{company.name}}</td>
        <td>
          <button class="button" @click="$emit('edit:company', company.orgnr)">Edit</button>
          <button class="button" @click="$emit('delete:company', company.orgnr)">Delete</button>
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
//import {mapState} from "vuex";

export default {
  name: 'company-table',
  props: {
    companies: Array
  },
  data() {
    return {
    }
  },
  methods: {
    editCompany(company) {
      this.$emit('edit:company', company.id, company)
    },
    deleteCompany(company) {
      this.$emit('delete:company', company.id, company)
    }
  }
}
</script>
