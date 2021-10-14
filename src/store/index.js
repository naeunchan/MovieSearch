import { createStore } from "vuex";
import api from "./api";

export default createStore({
    state: {
        title: "",
        page: "0",
        year: "",
        isLoading: false,
    },
    modules: {
        api,
    },
    mutations: {
        setInputs(state, { title, page, year }) {
            state.title = title;
            state.page = page ? page.toString() : "1";
            state.year = year ? year.toString() : "";
        },
        setPageNumber(state, page) {
            state.page = page.toString();
        },
        increase(state) {
            state.page = (+state.page + 1).toString();
        },
        decrease(state) {
            state.page = (+state.page - 1).toString();
        },
        setLoadingStateTrue(state) {
            state.isLoading = true;
        },
        setLoadingStateFalse(state) {
            state.isLoading = false;
        },
    },
    actions: {
        // isLoading 상태 변경
        changeLoadingStateTrue({ commit }) {
            commit("setLoadingStateTrue");
        },
        changeLoadingStateFalse({ commit }) {
            commit("setLoadingStateFalse");
        },
        // input 값 저장
        storeInputs({ commit }) {
            const title = document.querySelector("#input_title").value;
            const year = document.querySelector("#input_year").value;
            const page = document.querySelector("#input_page").value;

            commit("setInputs", { title, page, year });
        },
        // 왼쪽, 오른쪽 버튼 클릭 시 현재 페이지 증감
        increasePage({ commit }) {
            commit("increase");
        },
        decreasePage({ commit }) {
            commit("decrease");
        },
    },
});
