<template>
    <div>
    <form action="">
        <div class="formFeedback">
            <div class="formTitle">
                Оставьте свои данные
            </div>
            <div class="formInputs">
            <input required type="email" placeholder="Ваша почта">
            <input required type="text" placeholder="Телефон" v-mask="'+7(999)999-99-99'">
            </div>
            <div class="formBtn">
            <button class="btn btnBP">
                Получить прайс
            </button>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
    export default {
    }
</script>
