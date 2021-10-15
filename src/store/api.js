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
    },
    actions: {
        async requestAPI({ commit }, { title, year, page }) {
            const results = await fetch("/.netlify/functions/api", {
                method: "POST",
                body: JSON.stringify({ title, year, page }),
            }).then((res) => res.json());
            const movies = document.querySelector(".movies");

            // 검색 결과 없을 때
            if (!results.Search) {
                alert("검색 결과가 없습니다!");
                this.dispatch("changeLoadingStateFalse");
                movies.style.display = "none";
                return;
            }

            commit("setMoviesInformation", results);
            movies.style.display = "";
        },
    },
};
