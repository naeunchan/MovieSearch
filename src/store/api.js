export default {
    namespaced: true,
    state() {
        return {
            movies: [],
            totalResults: "0",
            lastPageNumber: "0",
        };
    },
    mutations: {
        // 검색 결과 저장
        setMoviesInformation(state, results) {
            state.movies = results.Search;
            state.totalResults = Math.floor(results.totalResults / 10 + 1).toString();
        },
        // 검색한 타이틀의 마지막 페이지 저장
        setLastPageNumber(state, page) {
            state.lastPageNumber = Math.floor(page / 10 + 1).toString();
        },
    },
    actions: {
        async requestAPI({ commit, dispatch }, query) {
            const results = await fetch(
                `https://www.omdbapi.com?apikey=${process.env.API_KEY}&${query}`
            ).then((res) => res.json());

            // 검색 결과 없을 때
            if (!results.Search) {
                alert("검색 결과가 없습니다!");
                return;
            }

            // 검색한 페이지가 기본 페이지를 넘어가는 경우
            if (!results.totalResults) {
                const rerequest = await fetch(
                    `https://www.omdbapi.com?apikey=7035c60c&s=${this.state.title}&year=${this.state.year}`
                ).then((res) => res.json());
                commit("setLastPageNumber", rerequest.totalResults);

                commit("setPageNumber", this.state.api.lastPageNumber, { root: true });
                dispatch(
                    "requestAPI",
                    `s=${this.state.title}&page=${this.state.page}&y=${this.state.year}`
                );

                alert(`해당 검색의 총 페이지는 ${this.state.api.lastPageNumber} 입니다!`);
                return;
            }
            commit("setMoviesInformation", results);
        },
    },
};
