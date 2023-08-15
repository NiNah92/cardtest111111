<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="text-left">
        <b-col></b-col>
        <b-col cols="10" class="bg1">
        <center>
          <h1><b>NW Rent Car</b></h1>
          <h5>รายละเอียดการจอง {{ blogcar.id }} </h5><hr>
        </center>
        <div class="box1">
              <h4><b><p>รายการที่ : {{ blogcar.id }}</p></b></h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ชื่อ - นามสกุล</b> : {{ blogcar.firstname }}  {{ blogcar.lastname }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>เบอร์โทรศัพท์</b> : {{ blogcar.tel }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ชื่อรถ</b> : {{ blogcar.other }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ระดับการให้บริการ</b> : {{ blogcar.nroom }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>จำนวนวันที่เช่า</b> : {{ blogcar.pnum }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>วันที่ Check in</b> : {{ blogcar.dates }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>วันที่ Check out</b> : {{ blogcar.datee }}</p>
             
              <hr>
            <p>
             
              <b-button variant="secondary" v-on:click="navigateTo('/blogcars')"><i class="fa fa-arrow-circle-left">ย้อนกลับ</i></b-button>
            </p>
        </div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BlogcarService from "@/services/BlogcarsService";
export default {
  data() {
    return {
      blogcar: null,
    };
  },
  async created() {
    try {
      let blogcarId = this.$route.params.blogcarId;
      this.blogcar = (await BlogcarService.show(blogcarId)).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style scoped>

</style>