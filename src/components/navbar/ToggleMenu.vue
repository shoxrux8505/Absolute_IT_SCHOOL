<template>
    <!-- :class="{ 'is-active': isMenuActive }" -->
    <div class="menu">
        <ul> <!-- Добавлен класс для активного состояния меню -->
            <li><a href="#">{{ $t('Home') }}</a></li>
            <li><a href="#main">{{ $t('About') }}</a></li>
            <li><a href="#courses">{{ $t('Courses') }}</a></li>
            <li><a href="#form">{{ $t('Contacts') }}</a></li>

        </ul>
        <div class="btns">
            <btnNav class="btn-nav" />
        </div>
    </div>
</template>
<script>
import btnNav from './button/btnNav.vue';
export default {
    name: 'ToggleMenu',
    components: {
        btnNav,
    }
}
</script>
<style lang="scss" scoped>
.menu {
    position: absolute;
    top: 80px;
    left: 250px;
    width: 200px;
    padding: 20px;
    height: 400px;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    transition: 0.5s ease;
    // background: url('../teachers/teamImg/download.webp') cover ;
    background: linear-gradient(180deg, purple, royalblue, #000);
    z-index: 9999;
}

ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    // font-family: 'Courier New', Courier, monospace;
    // &.is-active {
    //     display: flex; // Показать меню, когда оно активно
    // }

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
}

.btn-nav {
    cursor: pointer;
}
</style>