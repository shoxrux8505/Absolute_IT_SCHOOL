<template>
    <div class="content">
        <div class="text-content">
            <p>{{ $t('International IT School') }}</p>
            <h1>
                {{ $t('Start') }} {{ $t('your') }} {{ $t('journey') }} {{ $t('into') }} {{ $t('the') }} {{ $t('world')
                }} {{ $t('of') }}
                <span>{{ $t('Innovations') }}</span>
                {{ $t('and') }} <span>{{ $t('Technology') }}</span>.
            </h1>
            <p>
                Откройте для себя возможности в мире технологий и станьте экспертом в IT.
            </p>
            <ReqForm />
        </div>
        <div class="img-content">
            <img src="./img/globus.png" alt="globus">
        </div>

    </div>
</template>
<script>
import ReqForm from './ReqForm.vue';
export default {
    name: 'MainContent',
    components: {
        ReqForm
    }
}

</script>
<style lang="scss" scoped>
main {
    h2 {
        color: #fff;
        padding: 5px 7px;
    }
}

.content {
    // position: relative;
    // top: -100px;
    width: 100%;
    margin: auto;
    margin-top: -50px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text-content {
        position: relative;
        top: -50px;
        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: center;

        p {
            color: #fff;
        }

        h1 {
            font-size: 60px;
            color: #fff;

            span {
                background: linear-gradient(90deg, #2F05DC, #761BE7, #ED41FC);
                -webkit-background-clip: text;
                background-clip: text; // {{ edit_1 }} Добавлено для совместимости
                -webkit-text-fill-color: transparent;
            }
        }
    }

    .img-content {
        filter: drop-shadow(0 0 10px royalblue);

        img {
            object-fit: cover;
        }
    }
}

@media (max-width: 480px) {
    .content {
        // position: relative;
        // top: -100px;
        width: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .img-content {
            transform: scale(0.5);
            position: absolute;
            opacity: 0.5;
            z-index: -1;
        }

        .text-content {
            // position: relative;
            // top: -50px;
            display: flex;
            align-items: start;
            flex-direction: column;
            justify-content: center;

            p {
                color: #fff;
            }

            h1 {
                font-size: 30px;
                color: #fff;

                span {
                    background: linear-gradient(90deg, #2F05DC, #761BE7, #ED41FC);
                    -webkit-background-clip: text;
                    background-clip: text; // {{ edit_1 }} Добавлено для совместимости
                    -webkit-text-fill-color: transparent;
                }
            }
        }
    }
}

header {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
    /* Цвет заголовка */
}
</style>