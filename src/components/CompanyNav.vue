<template>
  <div id="company-nav" >
    <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <b-tab v-for="company in tabs" :key="'dyn-tab-' + company.orgnr" :title=company.name active >
          <company-form @add:company="addCompany"  :opened_company="company" />
          <b-button size="sm" variant="danger" class="float-right" @click="closeTab(company)">
            Close tab
          </b-button>
        </b-tab>

        <!-- Render this if no tabs -->
        <template #empty>
          <div class="text-center text-muted">
            There are no open tabs<br>
            Open a new tab using the <b>Create new company</b> button or by editing an existing one.
          </div>
        </template>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import CompanyForm from "./CompanyForm";
import {mapState} from "vuex";
export default {
  name: "CompanyNav",
  components: {
    CompanyForm

  },
  data() {
    return {
      tabs: [],
      newTabCounter: 0
    }
  },
  computed: {
    ...mapState(['userProfile', 'companies'])
  },
  methods: {
    addCompany(company) {
      console.log(company)

    },
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1)
          this.$emit("close:tab",x)
        }
      }

    },
    newTab(x) {
      this.tabs.push(x)
    },

    deleteCompany(orgnr) {
      this.companies = this.companies.filter(
          company => company.orgnr !== orgnr
      )
    },
  }
}
</script>

<style>
#nav-bar{
  width: 100%;
}
</style>