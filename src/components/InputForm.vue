<template>
    <section class="search__form">
        <div class="search__form__box">
            <input
                type="text"
                id="input_title"
                placeholder="제목"
                @keyup.enter="submit"
                autofocus
            />
            <input type="text" id="input_year" placeholder="출시 년도" @keyup.enter="submit" />
            <input
                type="text"
                id="input_page"
                placeholder="결과 페이지 1 ~ 100"
                @keyup.enter="submit"
            />
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        // enter 키 이벤트
        // 로딩 화면 표시
        submit() {
            this.$store.dispatch("changeLoadingStateTrue");
            this.$store.dispatch("storeInputs");

            const { title, page, year } = this.$store.state;

            this.$store.dispatch(
                "api/requestAPI",
                `s=${title}&page=${page}&${year === "" ? "" : `y=${year}`}`
            );
        },
    },
};
</script>

<style scoped lang="scss">
.search__form {
    max-height: 160px;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 20px;

    .search__form__box {
        position: relative;
        margin: 0 auto;
        padding-top: 6px;
        width: auto;
        max-width: 584px;

        input {
            border-radius: 14px;
            border: 2px solid #f28322;
            background-color: transparent;
            margin: 0;
            padding: 0;
            word-wrap: break-word;
            outline: none;
            display: flex;
            flex: 100%;
            width: 100%;
            height: 34px;
            font-size: 16px;
            margin-top: 5px;
            font-size: 15px;
            padding-left: 10px;
            padding-right: 10px;
        }
    }
}
</style>
