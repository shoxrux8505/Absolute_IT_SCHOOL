<template>
    <div class="req-form">
        <div class="req-form__container">
            <div class="req-form__form">
                <form action="#">
                    <div class="name input-field">
                        <label for="name">Оставьте заявку на бесплатную консультацию</label>
                        <input type="text" id="name" placeholder="Имя, Фамилия" v-model="name">
                    </div>
                    <div class="phone input-field">
                        <label for="phone">Телефон</label>
                        <input type="text" id="phone" placeholder="+998(99) 999-99-99" v-model="phone">
                    </div>
                    <!-- <div class="date input-field">
                        <label for="datepicker-12h"> Выберите дату </label>
                        <DatePicker v-model="date" placeholder="Выберите дату" id="datepicker-12h" />
                    </div> -->

                    <button class="req-form__btn">Отправить заявку</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
// import DatePicker from 'primevue/datepicker';
export default {
    name: 'ReqForm',
    data() {
        return {
            name: '',
            phone: '',
            // date: '',
        }
    }
}
</script>
<style lang="scss">
.req-form {
    position: absolute;
    margin-top: 500px;
    margin-left: 50px;
    width: 970px;
    height: 110px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #DAF0FF;
    z-index: 999;
    border-radius: 20px;

    form {
        padding: 15px 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .input-field {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            row-gap: 5px;

            label {
                font-size: 16px;
                font-weight: 400;
                font-family: 'Inter', sans-serif;
                line-height: 16px;
                color: #666666;

            }

            #name {
                padding: 5px 7px;
                border: 1px solid #666666;
                border: none;
                outline: 0;

                font-size: 16px;
                color: rgb(156, 65, 225);
                border-radius: 10px;
                padding: 10px;
            }

            #phone {
                width: 167px;
                border: 1px solid #666666;
                border: none;
                outline: 0;
                font-size: 16px;
                color: rgb(156, 65, 225);
                border-radius: 10px;
                padding: 10px;
            }

            #datepicker-12h {
                width: 120px;
                border: 1px solid #666666;
                border: none;
                outline: 0;
                font-size: 16px;
                color: rgb(156, 65, 225);
                border-radius: 10px;
                padding: 10px;
            }
        }

        .req-form__btn {
            width: 200px;
            height: 49px;
            background: #0600AE;
            border: none;
            border-radius: 20px;
            color: #fff;
            font-size: 20px;
            font-weight: 400;
            font-family: 'Inter', sans-serif;
            line-height: 16px;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background: rgb(175, 46, 175);
                filter: drop-shadow(0 0 20px #fff);
            }
        }
    }

}

@media (max-width: 480px) {
    .req-form {
    position: absolute;
    left: 0;
    margin-top: 400px;
    margin-left: -250px;
    width: 800px;
    height: 110px;
    transform: scale(0.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #DAF0FF;
    z-index: 999;
    border-radius: 20px;
}

}
</style>