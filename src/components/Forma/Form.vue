<template>
    <div class="form-content">
        <div class="form-box">
            <form action="#">
                <h2>Записатся на курсы</h2>
                <input type="text" name="" id="name" placeholder="имя, фамилия">
                <input type="number" placeholder="+9989(99)999-99-99" mask="+9989(99)999-99-99">
                <select name="" id="">
                    <option value="Front-end">Front-end</option>
                    <option value="Back-end">Back-end</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Python">Python</option>
                </select>
                <textarea id="" cols="45" rows="10" placeholder="Если есть вопросы"></textarea>
                <button class="btn-form">
                    <a href="#">Отправить</a>
                </button>
            </form>
        </div>
        <div class="img-content">
            <img width="500px" src="./Asset 35.png" alt="">
        </div>
    </div>
</template>
<style lang="scss" scoped>
.form-content {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .img-content {
        filter: drop-shadow(0 0 10px royalblue);
    }

    .form-box {
        background: #DAF0FF;
        border-radius: 40px;
        filter: drop-shadow(0 0 5px #fff);
    }

    form {
        padding: 10px 20px;
        width: 600px;
        height: 511px;
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        row-gap: 20px;
        background: url(./globe.png) no-repeat;
        background-size: contain;
        background-position: 250px;

        // &::before{
        //     position: relative;
        //     left: 550px;
        //     // margin-top: 300px;
        //     content: "";
        //     z-index: 0;
        //     width: 200px;
        //     height: 200px;
        //  
        // }
        h2 {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
        }

        input {
            width: 508px;
            padding: 10px 20px;
            border: none;
            border-radius: 10px;
            outline: 0;
            font-size: 16px;
            color: rgb(180, 51, 180);

            &:focus {
                border: 2px solid royalblue
            }
        }

        select {
            width: 508px;
            padding: 10px 20px;
            outline: 0;
            border: none;
            border-radius: 10px;

            &:focus {
                border: 2px solid royalblue
            }

        }

        textarea {
            color: purple;
            font-size: 20px;
            border: none;
            outline: 0;
            border-radius: 15px;
            resize: none;
            padding: 10px 20px;

            &:focus {
                border: 2px solid royalblue
            }

        }

        .btn-form {
            width: 220px;
            height: 60px;
            padding: 20px 30px;
            background: linear-gradient(196.71deg, #BF33ED -12.11%, #5D13E3 126.29%);
            border: none;
            border-radius: 25px;

            a {
                color: #fff;
                font-size: 20px;
            }
        }
    }
}
@media (max-width: 480px) {
    .form-content {
    width: 100%;
    // padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column-reverse;
    .img-content{
        position: relative;
        top: 15px;
        transform: scale(0.8);
    }
}
.form-box{
    transform: scale(0.6);
}

}
</style>