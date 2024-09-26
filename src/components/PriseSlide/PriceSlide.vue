<template>
  <div class="slider-container">
    <swiper :slides-per-view="4" :space-between="20" :pagination="{ clickable: true }" :modules="modules" :breakpoints="{
      320: { // for mobile screens
        slidesPerView: 1,
        spaceBetween: 10
      },
      640: { // for small tablets
        slidesPerView: 2,
        spaceBetween: 10
      },
      768: { // for tablets
        slidesPerView: 3,
        spaceBetween: 15
      },
      1024: { // for desktops
        slidesPerView: 4,
        spaceBetween: 20
      }
    }" class="mySwiper">
      <!-- Наше направление -->
      <swiper-slide class="swiper-cards" v-for="course in courses" :key="course.id">
        <div class="card">
          <div class="img">
            <p class="timer">Осталось дней: <span>{{ daysLeft }}</span></p>
            <img :src="course.imgP" alt="">
          </div>
          <div class="text-part">
            <div class="title-price">
              <h3>{{ course.title }}
                <span>
                  {{ course.priceSale }}сум
                  <small style="text-decoration: line-through;">{{ course.price }}сум</small>

                </span>
              </h3> <!-- Использование данных из объекта курса -->
            </div>
            <p>
              {{ course.description }} <!-- Использование данных из объекта курса -->
            </p>
            <!-- <img width="25px" height="25px" src="./Vector.png" alt=""> -->
          </div>
          <button class="card-btn"><a href="#form">Записатся</a></button>
        </div>
      </swiper-slide>
      <!-- <swiper-slide>Слайд 2</swiper-slide>
        <swiper-slide>Слайд 3</swiper-slide>
      <swiper-slide>Слайд 4</swiper-slide>
      <swiper-slide>Слайд 5</swiper-slide>
      <swiper-slide>Слайд 6</swiper-slide>
      <swiper-slide>Слайд 7</swiper-slide>
      <swiper-slide>Слайд 8</swiper-slide>
      <swiper-slide>Слайд 9</swiper-slide> -->
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import jsPng from '@/components/PriseSlide/img/js.png'
import PyPng from '@/components/PriseSlide/img/python.png'
import FrontPng from '@/components/PriseSlide/img/front.png'
import UniTy from '@/components/PriseSlide/img/unity.png'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      countdownDate: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,
      courses: [ // Добавлен массив объектов с курсами
        {
          id: 1,
          title: 'Javascript',
          price: '1.200.000 ',
          priceSale: '999.000',
          description: 'Join the leader in smallship cruising on the Great Lakes.',
          imgP: jsPng
        },
        {
          id: 2,
          title: 'Python Basic',
          price: '1.200.000 ',
          description: 'Learn server-side development and database management.',
          imgP: PyPng,
          priceSale: '999.000',
        },
        {
          id: 3,
          title: 'Front-end',
          price: '1.200.000 ',
          description: 'Become a versatile developer with both front-end and back-end skills.',
          imgP: FrontPng,
          priceSale: '999.000',
        },
        // {
        //   id: 4,
        //   title: 'Python Basic',
        //   price: '250$',
        //   description: 'Join the leader in smallship cruising on the Great Lakes.',
        // },
        {
          id: 2,
          title: 'C# Unity',
          price: '1.200.000 ',
          description: 'Learn server-side development and database management.',
          imgP: UniTy,
          priceSale: '999.000',
        },
        // {
        //   id: 3,
        //   title: 'Full Stack',
        //   price: '500$',
        //   description: 'Become a versatile developer with both front-end and back-end skills.',
        // },
      ],
    }
  },
  computed: {
    daysLeft() {
      const now = new Date().getTime();
      const distance = this.countdownDate - now;
      return Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0)
    }
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      setInterval(() => {
        this.$forceUpdate(); // Обновление компонента для перерисовки таймера
      }, 1000 * 60 * 60 * 24); // Обновление раз в день
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
.mySwiper {
  padding: 10px;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 350px;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    row-gap: 10px;
    padding: 5px 7px;

    .card-btn {
      width: 170px;
      height: 50px;
      background: #1F39BA;
      border: none;
      outline: 0;
      cursor: pointer;
      transition: 0.5s ease;
      border-radius: 10px;

      &:hover {
        background: rgb(175, 46, 175);
      }

      a {
        color: #fff;
        font-size: 17px;
        transition: all 0.5s ease;
      }
    }

    .img {
      width: 270px;
      height: 270px;
      border-radius: 16px;
      position: relative;

      .timer {
        padding: 5px 10px;
        position: absolute;
        border-radius: 20px;
        color: #CC37F6;
        margin-top: 5px;
        margin-left: 5px;
        background: #fff;

        span {
          color: red;
          animation-name: anons;
          animation-duration: 2s;
          animation-delay: 0.5s;
          animation-iteration-count: infinite;
          filter: drop-shadow(0 0 0 red);
        }

        @keyframes anons {
          0% {
            filter: drop-shadow(0 0 0 red);
          }

          100% {
            filter: drop-shadow(0 0 10px red);
          }
        }
      }

      img {
        transition: all 0.5s ease;
        cursor: pointer;
      }

      &:hover img {
        transform: scale(1.1);
      }
    }

    .text-part {
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      text-align: start;
      color: #fff;

      .title-price {
        display: flex;
        align-items: start;
        justify-content: center;

        h3 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;

          span {
            color: #CC37F6;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            row-gap: 2px;

            small {
              color: red;
              transform: scale(0.8);
            }
          }
        }
      }
    }
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-container {
  width: 100%;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 480px) {
  .card {
    width: 350px;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    row-gap: 10px;
    padding: 5px 7px;

    .card-btn {
      width: 170px;
      height: 50px;
      background: #1F39BA;
      border: none;
      outline: 0;
      cursor: pointer;
      transition: 0.5s ease;
      border-radius: 10px;

      &:hover {
        background: rgb(175, 46, 175);
      }

      a {
        color: #fff;
        font-size: 17px;
        transition: all 0.5s ease;
      }
    }

    .img {
      width: 270px;
      height: 270px;
      border-radius: 16px;
      position: relative;

      .timer {
        padding: 5px 10px;
        position: absolute;
        left: 37px;
        border-radius: 20px;
        color: #CC37F6;
        margin-top: 5px;
        margin-left: 100px;
        background: #fff;
        z-index: 99;

        span {
          color: red;
          animation-name: anons;
          animation-duration: 2s;
          animation-delay: 0.5s;
          animation-iteration-count: infinite;
          filter: drop-shadow(0 0 0 red);
        }

        @keyframes anons {
          0% {
            filter: drop-shadow(0 0 0 red);
          }

          100% {
            filter: drop-shadow(0 0 10px red);
          }
        }
      }

      img {
        transition: all 0.5s ease;
        cursor: pointer;
        transform: scale(0.8);
      }

      &:hover img {
        transform: scale(1);
      }
    }

    .text-part {
      transform: scale(0.9);
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      text-align: start;
      color: #fff;

      .title-price {
        transform: scale(0.9);
        display: flex;
        align-items: start;
        justify-content: center;

        h3 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;

          span {
            color: #CC37F6;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            row-gap: 2px;

            small {
              color: red;
              transform: scale(0.8);
            }
          }
        }
      }
    }
  }
}
</style>