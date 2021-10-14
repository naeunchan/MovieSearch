<template>
    <section class="wrap">
        <div class="wrap__box">
            <a class="logo" href="/">오엠디비</a>
        </div>
    </section>
    <input-form />
    <searched-movie />
</template>

<script>
import InputForm from "~/components/InputForm";
import SearchedMovie from "~/components/SearchedMovie";

export default {
    components: {
        InputForm,
        SearchedMovie,
    },
};
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    height: calc(100% - 560px);
    min-height: 150px;
    max-height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    box-sizing: border-box;

    .wrap__box {
        position: relative;
        height: 100%;
        max-height: 92px;
        margin-top: 198px;

        .logo {
            font-family: "SBAggroB";
            font-size: 90px;
            text-align: center;
            white-space: nowrap;
            color: #eb1c24;
            text-decoration: none;
        }
    }
}
</style>
