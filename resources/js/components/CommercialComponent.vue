<template>
    <div class="container">
        <div class="row">
            <div class="col-30">
                <form action="/" method="post">


                <div class="card fm1">
                    <div class="cardForm">
                        <div class="formTitle">
                            Сколько сотрудников  работает в
                            Вашей компании?
                        </div>
                        <div class="formInfo">
                            <div>
                            <input type="checkbox" id="quntity">
                            <label for="quntity">до 10 человек</label>
                            </div>
                            <div>
                            <input type="checkbox" id="quntity2">
                            <label for="quntity2">от 10 до 30 человек</label>
                            </div>
                            <div>
                            <input type="checkbox" id="quntity3">
                            <label for="quntity3">более 30 человек</label>
                            </div>
                        </div>
                        <div class="formBtn">
                            <a href="javascript:;" @click="for2" class="btn btnBP2"><span>Далее &#8594;</span>  </a>
                        </div>
                    </div>
                </div>

                    <div class="card fm2">
                        <div class="cardForm">
                            <div class="formTitle">
                                Сколько Вы готовы потратить на качественное квалифицированное юридическое сопровождение в месяц?
                            </div>
                            <div class="formInfo">
                                <div>
                                    <input type="checkbox" id="quntity" onclick="checker">
                                    <label for="quntity">до 100.000 тг/месяц</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="quntity2">
                                    <label for="quntity2">до 200.000 тг/месяц</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="quntity3">
                                    <label for="quntity3">свыше 200.000 тг/месяц</label>
                                </div>
                            </div>
                            <div class="formBtn">
                                <a href="javascript:;" @click="for3" class="btn btnBP2"><span>Далее &#8594;</span>  </a>
                            </div>
                        </div>
                    </div>

                    <div class="card fm3">
                        <div class="cardForm">
                            <div class="formTitle">
                                Чем занимается Ваша компания:
                            </div>
                            <div class="formInfo">
                                <div>
                                    <textarea placeholder="Опишите вкратце деятельность Вашей компании" name="about" id="aboutForm" ></textarea>
                                </div>
                            </div>
                            <div class="formBtn">
                                <a href="javascript:;" @click="for4" class="btn btnBP2"><span>Далее &#8594;</span>  </a>
                            </div>
                        </div>
                    </div>

                    <div class="card fm4">
                        <div class="cardForm">
                            <div class="formTitle">
                                Мы подобрали для Вас наилучшее коммерческое предложение, Вы его получите на почту, также с вами свяжется наш специалист для первичной консультации:
                            </div>
                            <div class="formInfo">
                                <div class="formInputs">
                                    <input required="required" type="text" placeholder="Ваше Имя">
                                    <input required="required" type="text" placeholder="Телефон" v-mask="'+7(999)999-99-99'">
                                    <input required="required" type="email" placeholder="Ваша почта">
                                </div>
                            </div>
                            <div class="formBtn">
                                <button class="btn btnBP2" @click="forF">
                                    Отправить
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card fmF">
                        <div class="cardForm">

                           <div v-if="alert"><sweetalert-icon icon="success" /></div>

                            <div class="formTitle">
                                Успешно отправлено!
                            </div>

                            <div>
                                Скоро наш менеджер с Вами свяжется
                            </div>




                        </div>
                    </div>


                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                alert: false,
            }
        },
        mounted() {

        },
        methods:{
            checker(){
                alert("WORKING!");
            },
            for2(){
                $('.fm2').css('visibility','visible');

                $('.fm1').addClass('animate__animated animate__fadeOutTopLeft');
                $('.fm2').addClass('animate__animated animate__fadeInRight');
            },
            for3(){
                $('.fm3').css('visibility','visible');

                $('.fm2').addClass('animate__animated animate__fadeOutBottomLeft');
                $('.fm3').addClass('animate__animated animate__fadeInRight');
            },
            for4(){
                $('.fm4').css('visibility','visible');

                $('.fm3').addClass('animate__animated animate__fadeOutBottomRight');
                $('.fm4').addClass('animate__animated animate__fadeInRight');
            },
            forF(){
                $('.fmF').css('visibility','visible');

                $('.fm4').addClass('animate__animated animate__fadeOutTopRight');
                $('.fmF').addClass('animate__animated animate__rotateIn');
                setTimeout(() => { this.alert = true; }, 1000);

            }

        }
    }
</script>

<style lang="scss">
    a.btn.btnBP2 span {
        vertical-align: sub;
        display: inline-block;
        margin-top: 10px;
    }
    .fm2, .fm3, .fm4, .fmF{
        position: absolute;
        visibility: hidden;
        top: 0;
    }
    .fm2{
        .formInfo{
            margin-left: 20px!important;
            margin-top: 10px!important;
            margin-bottom: 20px!important;
        }
    }
    .fm3{
        .formInfo{
            margin-left: 0!important;
            margin-bottom: 100px!important;
            textarea{
                width: 100%;
                min-height: 100px;
                padding: 10px;
            }
        }
    }
    .fm4{
        .formInfo{
            margin-left: 0!important;
            margin-top: 25px!important;
            margin-bottom: 25px!important;
            .formInputs{
                input{
                    margin-bottom: 10px;
                    color: #333;
                    border-bottom: 1px solid #333;
                }
            }
        }
    }
</style>