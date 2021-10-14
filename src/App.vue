<template>
    <router-view></router-view>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    data() {
        return {};
    },
    methods: {
        ...mapActions("requestAPI", ["requestAPI"]),
    },
};
</script>

<style>
@font-face {
    font-family: "SBAggroB";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff")
        format("woff");
    font-weight: normal;
    font-style: normal;
}
</style>
