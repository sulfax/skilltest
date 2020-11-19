<template>
  <div id="company-form">
    <button class="button" @click="getCompany">Get Company from Brønnøysund</button>
    <form @submit.prevent="handleSubmit">
      <label>Organization number</label>
      <input
          :key="opened_company.orgnr"
          type="text"
          v-model="company.orgnr"
      />
      <label>Name</label>
      <input
          type="text"
          v-model="company.name"
      />
      <label>No. Employees</label>
      <input
          type="text"
          v-model="company.antallAnsatte"
      />
      <label>Postal code</label>
      <input
          type="text"
          v-model="company.postalCode"
          @change="checkPostalCode"
      />
      <label>
        Note
      </label>
      <input
        type="text"
        v-model="company.note"
      />
      <label v-if="company.underAvviklingEllerKonkurs" style="color: red">Company bankrupt or under liquidation</label>
      <label v-else-if="!company.underAvviklingEllerKonkurs" style="color: lightgreen">Company not bankrupt or under liquidation</label>
      <label style="" id="formatted_adress">
        {{ this.company.formatted_adress }}
        </label>
      <button >Save</button>
    </form>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'company-form',
  props: {
    opened_company: Object,
  },
  data() {
    return {
      company: this.opened_company
    }
  },
  computed: {
    ...mapState(['companies'])
  },
  created() {
    console.log(this.opened_company)
    if(this.opened_company.orgnr===0){
      this.company.orgnr=""
      this.company.name=""
      this.company.note=""
    }
  },

  methods: {
    handleSubmit() {
      this.$store.dispatch('createCompany', this.company)
    },
    async getCompany() {
      try {
        const response = await fetch('https://data.brreg.no/enhetsregisteret/api/enheter/' + this.company.orgnr)
        const data = await response.json()
        this.company.orgnr=data.organisasjonsnummer
        this.company.name = data.navn
        this.company.antallAnsatte = data.antallAnsatte
        this.company.underAvviklingEllerKonkurs = data.underAvvikling || data.underTvangsavviklingEllerTvangsopplosning || data.konkurs
        this.$forceUpdate()
      } catch (error) {
        console.error(error)
      }
    },
    async getPostalTown() {
      try {
        const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDFFT_BYvth95kdpY-EwuWjb3fl3kemWbA&components=country:NO|companyal_code:' + this.company.postalCode + '&sensor=false')
        const data = await response.json()
        this.company.formatted_adress = data.results[0].formatted_address

      } catch (error) {
        console.error(error)
      }
    },
    checkPostalCode() {
      if (this.company.postalCode.length === 4){
        this.getcompanyalTown()
      }
    },
  },

}
</script>

<style scoped>
</style>