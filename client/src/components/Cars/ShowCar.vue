<template>
  <div> 
    <b-container class="bv-example-row">
      <b-row class="text-left">
        <b-col></b-col>
          <b-col cols="10" class="bg3">
            <center><h2><b>รายละเอียดรถ</b></h2></center>
            <hr>
            <div class="box3">
              <h4><b>รายการรถที่ : {{ car.id }}</b></h4>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>ชื่อ : </b>{{ car.title }}</p>
            <transition name="fade"> 
              <div class="thumbnail-pic" v-if="car.thumbnail != 'null'">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img :src="BASE_URL+car.thumbnail" alt="thumbnail"></p>
              </div>
            </transition>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>รายละเอียดรถ : </b>{{ car.content }}</p>
            <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ประเภทรถ : </b>{{ car.catagori }}</p>
              <p><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ราคาเช่า : </b>{{ car.price }}</p>
            <hr>
              
              <p>
              <b-button variant="warning" v-on:click="navigateTo('/car/edit/' + car.id)"><i class="fa fa-check-square-o">แก้ไขรายการ</i></b-button>
              <b-button variant="secondary" v-on:click="navigateTo('/cars')"><i class="fa fa-arrow-circle-left">ย้อนกลับ</i></b-button>
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
      car: null,
    };
  },
  async created() {
    try {
      let carId = this.$route.params.carId;
      this.car = (await CarService.show(carId)).data;
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