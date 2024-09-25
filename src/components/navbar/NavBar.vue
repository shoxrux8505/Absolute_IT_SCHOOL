<template>
    <nav>
        <div class="logo">
            <img src="./logo/1-removebg-preview.png" alt="Logo">
        </div>
        <toggleMenu :class="{ 'is-active': isMenuActive }" class="menu" />
        <ul>
            <li><a href="#">{{ $t('Home') }}</a></li>
            <li><a href="#main">{{ $t('About') }}</a></li>
            <li><a href="#courses">{{ $t('Courses') }}</a></li>
            <li><a href="#form">{{ $t('Contacts') }}</a></li>
        </ul>
        <div class="btns">
            <div class="lang-toggle">
                <select :id="globe" v-model="currentLocale" @change="changeLanguage">
                    <option value="en">
                        <img src="./logo/eng.png" alt="">
                        EN
                    </option>
                    <option value="ru">RU</option>
                    <option value="uz">UZ</option>
                </select>
                <button class="menu-toggle" @click="toggleMenu">
                    <ion-icon name="menu-outline"></ion-icon>
                </button> <!-- Кнопка для переключения меню -->
            </div>
            <btnNav class="btn-nav" />
        </div>

    </nav>
</template>

<style lang="scss" scoped>
@mixin flex-center() {
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu {
    width: 480px;
    display: none;
    left: -50px;
    align-items: center;
    justify-content: center;

}

nav {
    width: 100%;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .menu-toggle {
        display: none; // Скрыть кнопку по умолчанию
        font-size: 24px;
        background: transparent;
        color: #fff;
        border: none;
        width: 40px;
        font-size: 50px;
        height: 40px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .btns {
        display: flex;
        align-items: center;
        justify-content: center;

        .lang-toggle {
            display: flex;
            align-items: center;
            justify-content: center;

            select {
                // transform: scale(0);
                padding: 10px;
                outline: 0;
                border-radius: 10px;
                border: none;
                color: #000;
                background: #DAF0FF;
                text-align: center;
                font-size: 16px;
            }

            label {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                z-index: 999;
            }
        }
    }

    .logo {
        // width: 300px;
        @include flex-center();
        filter: drop-shadow(0 0 10px purple);
        border: none;
        border-radius: 1px;
        position: relative;
        overflow: hidden;
        border-radius: 28px;
        outline: none;

        &::before {
            content: '';
            position: relative;
            width: 50px;
            height: 70px;
            background-image: linear-gradient(120deg,
                    rgba(255, 255, 255, 0) 30%,
                    rgba(255, 255, 255, .8),
                    rgba(255, 255, 255, 0) 70%);
            // top: 70px;
            left: -100px;
            animation: shine 3s infinite linear;
        }

        @keyframes shine {
            0% {
                left: -100px
            }

            20% {
                left: 100%
            }

            100% {
                left: 100%
            }
        }

        img {
            width: 250px;
            height: 250px;
        }

    }

    ul {
        list-style: none;
        @include flex-center();
        gap: 20px;
        li {
            font-size: 20px;

            a {
                color: #fff;
                font-weight: 600;

                &:hover {
                    color: rgb(175, 46, 175);
                    filter: drop-shadow(0 0 20px #fff);
                }
            }

        }

        .btn-nav {
            cursor: pointer;
        }
    }

    // @media (min-width: 390px) {
    //    nav{
    //     width: 100%;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     gap: 20px;
    //     .logo{
    //         z-index: 9999;
    //     }
    //     ul{
    //        li{
    //         display: none;
    //        }
    //     }
    //    }
    // }
}

@media (max-width: 480px) {
    nav {
        max-width: 480px;
        display: flex;
        align-items: center;
        justify-content: center;


        .menu.is-active {
            display: flex; // Показать меню, когда оно активно
        }

        .menu-toggle {
            display: flex;
        }

        .logo {
            @include flex-center();
            filter: drop-shadow(0 0 10px purple);
            border: none;
            border-radius: 1px;
            // padding: 5px 2px;
            // background: #FFFFF3;
            position: relative;
            left: 20px;
            overflow: hidden;
            // transform: scale(0.9);
            padding: 10px 10px;
            border-radius: 28px;
            outline: none;

            &::before {
                content: '';
                position: absolute;
                width: 50px;
                height: 70px;
                background-image: linear-gradient(120deg,
                        rgba(255, 255, 255, 0) 30%,
                        rgba(255, 255, 255, .8),
                        rgba(255, 255, 255, 0) 70%);
                top: -50px;
                left: -100px;
                animation: shine 3s infinite linear;
            }

            @keyframes shine {
                0% {
                    left: -100px
                }

                20% {
                    left: 100%
                }

                100% {
                    left: 100%
                }
            }

            img {
                width: 250px;
                height: 250px;
            }

        }

        .lang-toggle {
            transform: scale(0.8);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .menu-toggle {
        display: block; // Скрыть кнопку по умолчанию
        font-size: 24px;
        cursor: pointer;
        z-index: 999;
    }

    ul {
        display: none;

        li {
            display: none;
        }

        // Скрыть меню по умолчанию
    }

    .btns {
        flex-direction: column;

        .btn-nav {
            display: none; // Вертикальное расположение кнопок
        }

        .logo {
            width: 100%; // Адаптивная ширина логотипа

            img {
                width: 150px; // Уменьшить размер логотипа на мобильных устройствах
                height: auto; // Автоматическая высота
            }
        }
    }
}

@media (max-width: 480px) {
    .menu-toggle {
        display: block; // Показать кнопку на мобильных устройствах
    }
}
</style>

<script>
import btnNav from './button/btnNav.vue';
import ToggleMenu from './ToggleMenu.vue';
export default {
    name: 'NavBar',
    components: {
        btnNav,
        ToggleMenu,
    },
    data() {
        return {
            currentLocale: 'ru',
            isMenuActive: false
        }
    },
    methods: {
        changeLanguage() {
            this.$i18n.locale = this.currentLocale;
        },
        toggleMenu() {
            this.isMenuActive = !this.isMenuActive; // Переключение состояния меню
        }
    }
}
</script>