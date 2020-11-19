<template>
  <div id="dashboard">
    <section>
      <div class="col1">
        <div class="create-company profile">
          <p>Select company</p>
          <button class="button" @click="editEmployee(0)">Create new company</button>
          <company-table
              :companies="companies"
              @delete:company="deleteEmployee"
              @edit:company="editEmployee"
          />
        </div>
      </div>
      <div class="col2 profile">
        <div v-if="companies.length">
          <CompanyNav ref="companyNav"/>
        </div>
        <div v-else>
          <p class="no-results">There are currently no companies</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CompanyTable from "../components/CompanyTable";
import CompanyNav from "../components/CompanyNav";

export default {
  components: {
    CompanyNav,
    CompanyTable
  },
  data() {
    return {
      openCompanies:[],
    }
  },
  computed: {
    ...mapState(['userProfile', 'companies'])
  },
  methods: {


    deleteEmployee(orgnr) {
      this.companies = this.companies.filter(
          company => company.orgnr !== orgnr
      )
    },

    editEmployee(orgnr) {
      if(this.openCompanies.includes(orgnr)){
        return
      }
      this.openCompanies.push(orgnr)
      if (orgnr === 0) {
        this.$refs.companyNav.newTab({orgnr: 0, name: "New company"})
        return
      }
      this.$refs.companyNav.newTab(this.companies.find(company => company.orgnr === orgnr))
    }
  },
}
</script>

<style lang="scss" scoped>
</style>