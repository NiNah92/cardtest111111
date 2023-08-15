<template>
  <div>
    <b-container class="bv-example-row">
    <b-row class="text-left">
         <b-col></b-col>
         <b-col cols="10" class="bg3">
          <center>
            <h1><b>รายการรถ</b></h1>
            <h5>จำนวนการจองรถ{{ cars.length }} </h5>
            <hr>
          </center>
          <div class="d-grid gap-2 col-6 mx-auto">
            <center><b-button variant="success" v-on:click="navigateTo('/car/create')"><i class='fa fa-calendar-check-o'>กดเพื่อเพิ่มรายการรถ</i></b-button></center>
          </div>
          <br>
          <div  class="box3" v-for="car in cars" v-bind:key="car.id">
            <h4><b><p>รายการรถที่: {{ car.id }}</p></b></h4>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>ชื่อ : </b>{{ car.title }}</p>
            <transition name="fade"> 
              <div class="thumbnail-pic" v-if="car.thumbnail != 'null'">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img :src="BASE_URL+car.thumbnail" alt="thumbnail"></p>
              </div>
            </transition>
            <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;รายละเอียด : </b>{{ car.content }}</p>
            <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ประเภท : </b>{{ car.catagori }}</p>
            <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ราคาเช่า : </b>{{ car.price }}</p>
            <hr>
            <p>
              <b-button variant="primary" v-on:click="navigateTo('car/'+car.id)"> <i class="fa fa-search">ดูรายละเอียด</i></b-button>
              <b-button variant="warning" v-on:click="navigateTo('/car/edit/' +car.id)"><i class="fa fa-check-square-o">แก้ไขรายการ</i>  </b-button>
              <b-button variant="danger" v-on:click="deleteCar(car)"><i class="fa fa-times">ลบรายการนี้</i>  </b-button>
            </p>
          </div>
        </b-col>
      <b-col> </b-col>
     </b-row>
  </b-container>
  </div>
</template>
<script>
import CarService from "@/services/CarsService";
export default {
  data() {
    return {
         BASE_URL: "http://localhost:8081/assets/uploads/",
         cars: [],
    };
  },
  async created() {
    this.cars = (await CarService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteCar(car) {
      let result = confirm("คุณแน่ใจนะ ที่จะลบรายการนี้?");
      if (result) {
        try {
          await CarService.delete(car);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.cars = (await CarService.index()).data;
    },
  },
};
</script>
<style scoped>
</style>