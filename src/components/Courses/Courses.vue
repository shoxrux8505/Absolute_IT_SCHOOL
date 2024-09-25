<template>
    <div class="content">
        <div class="card" v-for="course in courses" :key="course.id">
            <div class="circle">
                <p class="circle-text">{{ course.id }}</p>
            </div>
            <div class="icon">
                <lord-icon :src="course.iconSrc" trigger="in" style="width:250px;height:250px">
                </lord-icon>
            </div>
            <h1 class="title">{{ course.title }}</h1>
            <p class="description">
                {{ course.description }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Courses',
    data() {
        return {
            courses: [
                {
                    id: 1,
                    title: 'Веб-разработка',
                    description: 'Веб-разработка — процесс создания веб-сайта или веб-приложения. Основными этапами процесса являются веб-дизайн, вёрстка страниц, программирование на стороне клиента и сервера',
                    iconSrc: 'https://cdn.lordicon.com/dqrpfjei.json'
                    // iconSrc: 'https://www.flaticon.com/ru/free-icon/coding_2085263?term=html+css+js&page=1&position=3&origin=search&related_id=2085263'
                },
                {
                    id: 2,
                    title: 'Python basics',
                    description: ' В учебнике рассматриваются основные концепции и функции языка Python, включая синтаксис и управление потоком.',
                    iconSrc: 'https://cdn.lordicon.com/tmffjodc.json'

                },
                {
                    id: 3,
                    title: 'Javascript basics',
                    description: 'Этот учебник предназначен для обучения JavaScript от базового до продвинутого уровня, с простыми объяснениями и примерами.',
                    iconSrc: 'https://cdn.lordicon.com/blkavbjg.json'

                },
                {
                    id: 4,
                    title: 'GAME разработка',
                    description: ' Разработка компьютерных игр — это процесс создания игр, который включает в себя множество этапов, от концепции до реализации.',
                    iconSrc: 'https://cdn.lordicon.com/txahugpp.json'

                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
// @import 'tailwindcss/base';
// @import 'tailwindcss/components';
// @import 'tailwindcss/utilities';
@media (max-width: 480px){
    // background: linear-gradient(180deg, #250C6F 0%, #CC37F6 100%);

    .content::before {
        content: "";
        width: 150px;
        height: 150px;
        filter: drop-shadow(0 0 10px royalblue);
        filter: blur(20px);
        backdrop-filter: blur(20px);
        opacity: 0.5;
        border-radius: 50%;

        background: linear-gradient(180deg, #250C6F 0%, #CC37F6 100%);
    }

    .content::after {
        content: "";
        width: 300px;
        height: 300px;
        position: relative;
        top: 750px;
        // margin-top: 500px;
        filter: drop-shadow(0 0 10px royalblue);
        filter: blur(15px);
        backdrop-filter: blur(15px);
        opacity: 0.5;
        border-radius: 50%;
        z-index: -1;
        background: linear-gradient(180deg, #250C6F 0%, #CC37F6 100%);
        animation-name: blur;
        animation-delay: 0.1s;
        animation-iteration-count: infinite;
        animation-duration: 3s;
        animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
        transform: rotate(0deg);

    }

    @keyframes blur {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}

.content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    // background: linear-gradient(180deg, #250C6F 0%, #CC37F6 100%);
}

//     &::before {
//         content: "";
//         width: 323px;
//         height: 323px;
//         position: absolute;
//         // left: 80%;
//         margin-top: -350px;
//         filter: drop-shadow(0 0 10px royalblue);
//         filter: blur(20px);
//         backdrop-filter: blur(20px);
//         opacity: 0.5;
//         border-radius: 50%;

//         background: linear-gradient(180deg, #250C6F 0%, #CC37F6 100%);
//     }

//     &::after {
//         content: "";
//         width: 600px;
//         height: 600px;
//         position: absolute;
//         left: -8%;
//         top: 750px;
//         margin-top: 500px;
//         filter: drop-shadow(0 0 10px royalblue);
//         filter: blur(15px);
//         backdrop-filter: blur(15px);
//         opacity: 0.5;
//         border-radius: 50%;
//         z-index: -1;
//         background: linear-gradient(180deg, #250C6F 0%, #CC37F6 100%);
//         // animation-name: blur;
//         animation-delay: 0.1s;
//         animation-iteration-count: infinite;
//         animation-duration: 3s;
//         animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
//         transform: rotate(0deg);

//     }

//     @keyframes blur {
//         0% {
//             transform: rotate(0deg);
//         }

//         100% {
//             transform: rotate(360deg);
//         }
//     }
// }

.card {
    width: 16rem;
    /* w-64 */
    border-radius: 15px;
    background-color: white;
    /* bg-white */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.09);
    /* shadow-[0px_0px_15px_rgba(0,0,0,0.09)] */
    padding: 2.25rem;
    /* p-9 */
    position: relative;
    overflow: hidden;
    margin-bottom: 1.5rem;
    /* space-y-3 */
}

.circle {
    width: 6rem;
    /* w-24 */
    height: 6rem;
    /* h-24 */
    background-color: #7c3aed;
    /* bg-violet-500 */
    border-radius: 9999px;
    /* rounded-full */
    position: absolute;
    right: -1.25rem;
    /* -right-5 */
    top: -1.75rem;
    /* -top-7 */
}

.circle-text {
    // position: absolute;
    // bottom: 1.5rem;
    /* bottom-6 */
    // left: 1.75rem;
    display: flex;
    position: absolute;
    top: 10px;
    left: 35px;
    align-items: center;
    justify-content: center;
    color: white;
    /* text-white */
    font-size: 1.5rem;
    /* text-2xl */
}

.icon {
    fill: #7c3aed;
    /* fill-violet-500 */
    display: flex;
    align-items: center;
    justify-content: center;
    /* w-12 */
}

.title {
    font-weight: bold;
    /* font-bold */
    font-size: 1.25rem;
    /* text-xl */
}

.description {
    font-size: 0.875rem;
    /* text-sm */
    color: #4b5563;
    /* text-zinc-500 */
    line-height: 1.5;
    /* leading-6 */
}
</style>