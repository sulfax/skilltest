<template>
  <div id="jobs">
    <label>Under production</label>
    <div class="col2 profile">
      <section>
        <div class="col1">
          <div class="create-company profile">
            <p>Press button</p>
            <button class="button" @click="getJobs(974632535)">Find jobs</button>
          </div>
        </div>
        <div class="col2 profile">
          <textarea
          v-model="JSONjob">
          </textarea>
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
      publicToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ",
      JSONjob: ""
    }
  },
  methods:{
    async getJobs(orgnr){
      const response = await fetch(this.navURI+orgnr,{
        method:'GET',
        headers:{
          'Authorization': 'Bearer '+this.publicToken
        }
      })
      const data = await response.json()
      this.JSONjob = JSON.stringify(data)
    }
  }
}
</script>