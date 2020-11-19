<template>
  <div id="jobs">
    <label>Under production</label>
    <div class="col2 profile">
      <section>
<!--        <div class="col1">-->
<!--          <div class="create-company profile">-->
<!--            <p>Select company</p>-->
<!--            <button class="button" @click="editEmployee(0)">Create new company</button>-->
<!--            <company-table-->
<!--                :companies="companies"-->
<!--            />-->

<!--          </div>-->
<!--        </div>-->
        <div class="col2 profile">
          <div>

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  data(){
    return{
      navURI: "https://arbeidsplassen.nav.no/public-feed/api/v1/ads?orgnr=",
      publicToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ"

    }
  },
  methods:{
    async getJobs(orgnr){
      return await fetch(this.navURI+orgnr,{
        method:'GET',
        headers:{
          'Authorization': 'Bearer '+this.publicToken
        }
      })
    }
  }
}
</script>