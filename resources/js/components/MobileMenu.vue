<template>
    <div>
        <div class="mobMenu">
            <div class="logo">
                <a href="#head">
                    <img class="mainLogo" src="/img/logoM.png" data-rjs="2" alt="logoBKP">
                </a>
            </div>
            <div class="contactBtn">
                    <span class="burgBtn">
                <tasty-burger-button
                        ref="menuTap"
                        :type="buttonType"
                        :active="isActive"
                        :color="color"
                        :active-color="activeColor"
                        v-on:toggle="onToggle"
                />
                    </span>
            </div>
        </div>
        <div :class="{active: menuNav}" class="mobNav">
            <div class="col-30">
                <nav>
                    <div class="mainMenuMob">
                        <div class="menuItem">

                            <a href="#ourTeam">
                                <div class="navy">
                                    Наша команда
                                </div>
                            </a>

                        </div>
                        <div class="menuItem">

                            <a href="#service">
                                <div class="navy">
                                    Кого мы обслуживаем
                                </div>
                            </a>

                        </div>
                        <div class="menuItem">

                            <a href="#weWorking">
                                <div class="navy">
                                    Как мы работаем
                                </div>
                            </a>

                        </div>
                        <div class="menuItem">

                            <a href="#price">
                                <div class="navy">
                                    Стоимость и пакеты услуг
                                </div>
                            </a>

                        </div>
                        <div class="menuItem">

                            <a href="#events">
                                <div class="navy">
                                    Публикация и мероприятия
                                </div>
                            </a>

                        </div>
                    </div>
                </nav>
            </div>

            <div class="col-30">
                <div class="row contactInfo">
                    <div class="col-30">
                        <div class="geo">
                            г. Алматы, ул. Биокомбинатская, д. 7а, офис 202
                        </div>
                    </div>
                    <div class="col-30">
                        <div class="contacts">
                            <div class="phone">
                                <a href="tel:+77279717118">
                                    +7 (727) 971-71-18
                                </a>
                            </div>
                            <div class="mail">
                                <a href="mailto:info@bkp.kz">
                                    info@bkp.kz
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                buttonType: 'spin',
                isActive: false,
                color: '#fff',
                activeColor: '#F9CB00',
                menuNav: false,
            }
        },
        mounted() {

        },
        methods: {
            onToggle(){
                this.menuNav = !this.menuNav;
            },
        }
    }
</script>