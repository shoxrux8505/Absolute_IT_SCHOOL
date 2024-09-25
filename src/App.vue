<template>
  <div v-if="isLoading" class="loading">
    <lord-icon
    src="https://cdn.lordicon.com/lqxfrxad.json"
    trigger="loop"
    colors="primary:#ffffff"
    style="width:250px;height:250px">
</lord-icon>
  </div>
  <div v-else>
    <NavBar class="navbar" :class="{ sticky: isSticky }" />
    <MainContent class="main-content" />
    <main>
      <h2>Наше направление</h2>
      <p>
        В месте с нашими направлениями становитесь лучше и развивайтесь с нами
      </p>
      <Courses class="courses" />
    </main>
    <section>
      <h2 style="padding: 10px;">Доступные цены рассрочка и кредит - помогут скорее начать обучение с нами.</h2>
      <p>
        Бесплатный вводный урок поможет вам определиться с выбором из множества специальностей программирования.
      </p>
      <PriceSlide />
    </section>
    <main>
      <h2 style="padding: 10px 25px;">Наши професионалы</h2>
      <TeachersTeam />
    </main>
    <main style="margin-top:100px;">
      <Form id="form" />
    </main>
    <Footer />
  </div>
</template>
<script>
import NavBar from '@/components/navbar/NavBar.vue'
import Courses from './components/Courses/Courses.vue';
import MainContent from './components/MainContent/MainContent.vue';
import PriceSlide from './components/PriseSlide/PriceSlide.vue';
import TeachersTeam from './components/teachers/TeachersTeam.vue';
import Form from './components/Forma/Form.vue';
import Footer from './components/footer/Footer.vue';
export default {
  name: 'App',
  components: {
    NavBar,
    MainContent,
    Courses,
    PriceSlide,
    TeachersTeam,
    Form,
    Footer
  },
  data() {
    return {
      isSticky: false,
      currentLocale: 'ru',
      isLoading: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.loadData();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 0;
    },
    changeLanguage() {
      this.currentLocale = this.currentLocale === 'ru' ? 'en' : 'uz';
      this.$i18n.locale = this.currentLocale;
    },
    loadData() {
      // Симуляция загрузки данных
      setTimeout(() => {
        this.isLoading = false; // Установить состояние загрузки в false после загрузки
      }, 2000); // Задержка 2 секунды
    },
  },
  computed: {
    isSticky() {
      return this.isSticky;
    }
  }

}
</script>
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
@media (max-width: 480px){
  div{
    // text-align: center;
  }
}
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  filter: drop-shadow(0 0 10px #fff);
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: #fff;
  background: url('./components/teachers/teamImg/download.webp') no-repeat;
  z-index: 1000;
  /* Убедитесь, что индикатор загрузки выше других элементов */
}

main {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 48px;
    color: #ffff;
    filter: drop-shadow(0 0 10px purple)
  }

  p {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }

  .courses {
    width: 100%;
  }


}

section {
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  h2 {
    font-size: 36px;
    color: #ffff;
  }

  p {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
}

div {
  width: 100%;
}

.navbar {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  transition: top 0.3s;
  transition: background-color 0.3s;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px);
  /* Добавлено для размытия фона */
  background-color: rgba(92, 6, 121, 0.8);
  /* Полупрозрачный фон для лучшего эффекта */
  /* Убедитесь, что панель выше других элементов */
}
@media (max-width:480){
  .sticky{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
  }
}
.main-content {
  width: 100%;
  height: 100%;
}
</style>
