<template>
  <div>
    <b-container class="bv-example-row">
      <div class="" >
        <b-row class="text-left">
        <b-col></b-col>
          <b-col cols="10" class="bg1">
            <center>
            <h1><b>NW Rent Car</b></h1>
            <h5>จำนวนจองที่มี {{ blogcars.length }} รายการ</h5></center>
            <hr>
            <div class="d-grid gap-2 col-6 mx-auto">
               <center> <b-button variant="btn btn-success" v-on:click="navigateTo('/blogcar/create')"><i class="fa fa-id-card-o">จองรถเช่า</i>  </b-button>  </center>
            </div>

            <br>
            <div class="box1" v-for="blogcar in blogcars" v-bind:key="blogcar.id">
              <h4><b><p>รายการที่ : {{ blogcar.id }}</p></b></h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>ชื่อรถ</b> : {{ blogcar.other }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>ชื่อ - นามสกุล :</b> {{ blogcar.firstname }}  {{ blogcar.lastname }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>เบอร์โทรศัพท์ :</b> {{ blogcar.tel }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>จำนวนวันที่เช่า :</b> {{ blogcar.pnum }} คน</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>ระดับการให้บริการ :</b> {{ blogcar.nroom }} </p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>วันที่ Check in :</b> {{ blogcar.dates }}</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>วันที่ Check out :</b> {{ blogcar.datee }}</p>
              <hr>
              <p>
                <b-button variant="primary" v-on:click="navigateTo('blogcar/'+blogcar.id)"><i class="fa fa-search">ตรวจสอบข้อมูล</i> </b-button>
                <b-button variant="warning" v-on:click="navigateTo('/blogcar/edit/' + blogcar.id)"><i class="fa fa-check-square-o">แก้ไขการจองรถ</i></b-button>
                <b-button variant="danger" v-on:click="deleteBlog(blogcar)"> <i class="fa fa-times">ยกเลิกการจอง</i></b-button> 
               
              </p> 
            </div>
    
          </b-col>
        <b-col></b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
import BlogcarService from "@/services/BlogcarsService";
export default {
  data() {
    return {
      blogcars: [],
    };
  },
  async created() {
    this.blogcars = (await BlogcarService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteBlog(blogcar) {
      let result = confirm("ต้องการยกเลิกการจองหอพักนี้ ?");
      if (result) {
        try {
          await BlogcarService.delete(blogcar);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.blogcars = (await BlogcarService.index()).data;
    },
  },
};
</script>
<style scoped>

</style>