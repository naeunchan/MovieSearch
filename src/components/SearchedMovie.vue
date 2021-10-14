<template>
    <div class="q-pa-md" v-if="storeIsLoading">
        <div class="q-gutter-md row">
            <q-spinner color="primary" size="3em" :thickness="10" />
        </div>
    </div>
    <hr />
    <div class="page">
        <section :class="isVisiblePage(storePage)">
            {{ storePage }} / {{ storeTotalResults }}
        </section>
    </div>
    <div class="movies">
        <aside class="left-button">
            <button :class="isVisibleButton(storePage, '1')" @click="clickLeftButton">&lt</button>
        </aside>
        <asdie class="right-button">
            <button
                :class="isVisibleButton(storePage, storeTotalResults)"
                @click="clickRightButton"
            >
                &gt
            </button>
        </asdie>
        <figrue
            class="poster"
            v-for="movie in storeMovies"
            :key="movie"
            @click="clickedPoster(movie)"
            @mouseover.capture="mouseOver"
            @mouseleave.capture="mouseLeave"
        >
            <img :src="getPosterImage(movie)" alt="None!" @load="loadedImage()" />
            <figcaption class="caption">
                <h3 class="title">{{ movie.Title }}</h3>
                <p class="type">{{ movie.Type }}</p>
            </figcaption>
        </figrue>
    </div>
</template>

<script>
import notFoundImage from "../assets/not_found_image.png";

export default {
    computed: {
        storeMovies() {
            return this.$store.state.api.movies;
        },
        storeBeforePage() {
            return this.$store.state.beforePage;
        },
        storePage() {
            return this.$store.state.page;
        },
        storeTotalResults() {
            return this.$store.state.api.totalResults;
        },
        storeIsLoading() {
            return this.$store.state.isLoading;
        },
    },
    methods: {
        // 포스터 hover 시 애니메이션
        mouseOver(e) {
            e.target.parentElement.classList.add("hover");
        },
        mouseLeave(e) {
            e.target.parentElement.classList.remove("hover");
        },
        // 현재 페이지를 나타내는 section 화면에 노출 여부
        isVisiblePage(storePage) {
            return storePage === "0" ? "hidden" : "";
        },
        // 왼쪽, 오른쪽 버튼 화면에 노출 여부
        isVisibleButton(storePage, condition) {
            return storePage === "0" || storePage === condition ? "hidden" : "";
        },
        // 왼쪽, 오른쪽 버튼 클릭 이벤트
        clickLeftButton() {
            this.$store.dispatch("changeLoadingStateTrue");
            this.$store.dispatch("decreasePage");
            this.rerequestAPI();
        },
        clickRightButton() {
            this.$store.dispatch("changeLoadingStateTrue");
            this.$store.dispatch("increasePage");
            this.rerequestAPI();
        },
        // API 재호출
        rerequestAPI() {
            const { title, page, year } = this.$store.state;

            this.$store.dispatch("api/requestAPI", `s=${title}&page=${page}&$y=${year}}`);
        },
        // 포스터가 없으면 "not found" 이미지로 대체
        getPosterImage(movie) {
            return movie.Poster === "N/A" ? notFoundImage : movie.Poster;
        },
        // 포스터 클릭 시 imdbID 보여주기
        clickedPoster(movie) {
            alert(`imdbID : ${movie.imdbID}`);
        },
        // 포스터 image 모두 불러온 후 로딩 표시 끄기
        loadedImage() {
            setTimeout(() => this.$store.dispatch("changeLoadingStateFalse"), 500);
        },
    },
};
</script>

<style lang="scss" scoped>
.q-pa-md {
    position: absolute;
    background: black;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    z-index: 8;
}
.q-gutter-md {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1;
    transform: translate(-50%, -50%);
}

hr {
    min-width: 1300px;
    max-width: 770px;
    margin: 15px auto 15px auto;
    background-color: #97533a;
    height: 5px;
    border-radius: 5px;
    border: 1px solid #97533a;
}

.hidden {
    visibility: hidden;
}

.page {
    min-width: 1300px;
    max-width: 770px;
    margin: 15px auto 15px auto;
    font-weight: bold;
}

.movies {
    min-width: 550px;
    max-width: 1300px;
    height: 540px;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
        "left content content content content content right"
        "left content content content content content right";
    grid-template-rows: repeat(2, minmax(250px, 2fr));
    grid-template-columns: 50px repeat(5, minmax(110px, 1fr)) 50px;
    padding-top: 20px;
    padding-bottom: 20px;

    button {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
    }

    .left-button {
        grid-area: left;
        display: flex;
        align-items: center;
    }
    .right-button {
        grid-area: right;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    .poster {
        display: flex;
        position: relative;
        flex: 1;
        margin: 5px;
        background-color: #000000;
        color: #ffffff;
        cursor: pointer;
        * {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-transition: all 0.6s ease;
            transition: all 0.6s ease;
        }

        img {
            width: 100%;
            height: 100%;
            opacity: 1;
            -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
            text-align: center;
            line-height: 250px;
        }
        figcaption {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            -webkit-transform: rotateX(90deg);
            transform: rotateX(90deg);
            -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
            z-index: 1;
            opacity: 0;
            padding: 0 0 10px 10px;

            .title {
                font-size: 2em;
                line-height: 1em;
            }
        }
        &:hover img,
        .hover img {
            -webkit-transform: rotateX(-90deg);
            transform: rotateX(-90deg);
            opacity: 0;
        }
        &:hover figcaption,
        .hover figcaption {
            -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
            opacity: 1;
            -webkit-transition-delay: 0.2s;
            transition-delay: 0.2s;
        }
    }
}
</style>
