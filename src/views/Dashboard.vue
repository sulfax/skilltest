<template>
  <div id="dashboard">
    <section>
      <div class="col1">
        <div class="create-company profile">
          <p>Select company</p>
          <button class="button" @click="editCompany(0)">Create new company</button>
          <company-table
              :companies="companies"
              @delete:company="deleteCompany"
              @edit:company="editCompany"
          />
        </div>
      </div>
      <div class="col2 profile">
          <CompanyNav
              @close:tab ="closeTab"
              ref="companyNav"/>
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

    closeTab(tab){
      this.openCompanies = this.openCompanies.filter(i => i!==tab.orgnr)
    },

    deleteCompany(orgnr) {
      this.companies = this.companies.filter(
          company => company.orgnr !== orgnr
      )
    },

    editCompany(orgnr) {
      if(this.openCompanies.includes(orgnr)){
        return
      }
      this.openCompanies.push(orgnr)
      console.log(orgnr)
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