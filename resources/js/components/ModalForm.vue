<template>
    <div class="modalForm">
        <div class="modal-header">
            <h5 class="modal-title">Оставьте свои данные</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="formText">
                Оставьте заявку, мы обязательно свяжемся с Вами
            </div>
            <form action="">
            <div class="formInputs">
                <input required type="text" placeholder="Ваше Имя">
                <input required type="text" placeholder="Телефон" v-mask="'+7(999)999-99-99'">
            </div>
            <div class="formBtn">
                <button class="btn btnBP2">
                    Отправить
                </button>
            </div>
            </form>
        </div>

    </div>
</template>

<script>
    export default {
    }
</script>
