<template>
    <footer>
        <div class="footer-container">
            <div class="left-side">
                <div class="logo">
                    <img src="./absolute2 2.png" alt="logo">
                </div>
                <p>
                    Если вы родитель студента - ваш сын сможет получить <br>
                    востребованную, житейскую профессию, независимо <br>
                    от того, получит он высшее образование или нет. <br>
                    Мы научим зарабатывать.
                </p>
            </div>
            <div class="right-side">
                <div class="title">
                    <h3>Contact us</h3>
                </div>
                <div class="social">
                    <a href="#">
                        <span><lord-icon src="https://cdn.lordicon.com/xtzvywzp.json" trigger="loop"
                                colors="primary:#ffffff" style="width:25px;height:25px">
                            </lord-icon></span>
                        T3859061@gmail.com
                    </a>
                    <a href="#">
                        <span>
                            <lord-icon src="https://cdn.lordicon.com/srsgifqc.json" trigger="loop"
                                colors="primary:#ffffff" style="width:25px;height:25px">
                            </lord-icon>
                        </span>
                        +998(93)962-13-61
                    </a>
                    <a href="#">
                        <span style="font-size: 25px;">
                            <ion-icon name="location-outline"></ion-icon>
                        </span>
                        <img width="150px" height="150px" src="./Wew.jpg" alt="location">
                    </a>
                    <footerSocial class="social-btn" />
                </div>
            </div>
        </div>
        <p style="text-align: center; font-size: 15px; color: #fff; margin-top: 20px;" class="esten">Created By
            <a href="https://www.instagram.com/woxmen_w/"> WoxWeb</a> | 2024
        </p>
    </footer>
</template>
<style lang="scss" scoped>
footer {
    background: url("./11967\ 1.png") no-repeat;
    background-size: cover;
    object-fit: cover;

    .esten {
        padding: 20px 7px;
        border-top: 1px solid #fff;
    }

    .footer-container {
        padding: 30px 7px;
        width: 100%;
        // padding: 60px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 150px;
    }

    .left-side {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        row-gap: 20px;
        color: #fff;

        .logo {
            transform: scale(1.2);
            transition: 0.5s ease;

            &:hover {
                filter: drop-shadow(0 0 10px #fff);
            }
        }
    }

    .right-side {
        .title {
            color: #fff;

            h3 {
                font-size: 20px;
            }
        }

        .social {
            display: flex;
            align-items: start;
            justify-content: center;
            flex-direction: column;
            row-gap: 25px;

            a {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                color: #fff;
                filter: drop-shadow(0 0 10px #fff);
                border-radius: 15px;
            }

            .social-btn {
                margin-left: 15px;
            }
        }
    }
}

@media (max-width:480px) {
    .footer-container {
        padding: 30px 7px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        flex-direction: column;
    }
}
</style>
<script>
import footerSocial from './footerSocial.vue';
export default {
    name: 'footer',
    components: {
        footerSocial,
    }
}
</script>