## Notion Clone w. Vue

-   [Vue3 version GiHub Repo](https://github.com/Leon-Miller/notion-clone-programmers)
-   [NuxtJS(Vue2) Version GitHub Repo](https://github.com/Leon-Miller/notion-clone-programmers-nuxt)
-   [![Netlify Status](https://api.netlify.com/api/v1/badges/ca2ea302-1c79-4a5e-9afa-863fc6b943e5/deploy-status)](https://app.netlify.com/sites/sad-spence-65b8fd/deploys)
-   https://sad-spence-65b8fd.netlify.app

# ๐ 8์ฃผ์ฐจ ๊ณผ์ [Mission8]

API ์ฌ์ฉ์ ๋ํด ๊ถ๊ธํ ์ ์ '์ง์์๋ต' ์ฑ๋์ ์ง๋ฌธ ๋จ๊ฒจ์ฃผ์ธ์!

## ๐ฅ ์ํ ๊ฒ์ ํ๋ก์ ํธ

-   ๊ณผ์  ๊ธฐ๊ฐ: 9์ 28์ผ ~ 10์ 10์ผ ์คํ 23์ 59๋ถ
-   ๋ฆฌ๋ทฐ ๊ธฐ๊ฐ: 10์ 11์ผ ~ 10์ 16์ผ
-   ๋ด์ฉ: Vue.js์ ์ํ ๊ฒ์ API๋ฅผ ํ์ฉํด ํ๋ก์ ํธ๋ฅผ ๋ง๋์ธ์.

### ๊ธฐ๋ณธ ์๊ตฌ์ฌํญ

-   [ ] ๊ฒ์์ด๋ฅผ ์๋ ฅํด ์ํ๋ฅผ ๊ฒ์ํ  ์ ์์ด์ผ ํฉ๋๋ค.
-   [ ] ๊ฒ์๋ ๊ฒฐ๊ณผ๋ฅผ ํตํด ์ํ์ ์์ธ ์ ๋ณด๋ฅผ ๋ณผ ์ ์์ด์ผ ํฉ๋๋ค.
-   [ ] ํด๋ผ์ด์ธํธ์์ API Key๊ฐ ๋ธ์ถ๋์ง ์์์ผ ํฉ๋๋ค.
-   [ ] ์ค์  ์๋น์ค๋ก ๋ฐฐํฌํ๊ณ  ์ ๊ทผ ๊ฐ๋ฅํ ๋งํฌ๋ฅผ ์ถ๊ฐํด์ผ ํฉ๋๋ค.

### ์ ํ ์๊ตฌ์ฌํญ

-   [ ] API ์์ฒญ(Request)์ ๋ํ ๋ก๋ฉ ์ ๋๋ฉ์ด์์ ์ถ๊ฐํด ๋ณด์ธ์.
-   [ ] ์ํ ์์ธ ๊ฒ์์ผ๋ก ์ถ๋ ฅํ  ์ํ ํฌ์คํฐ๋ฅผ ๋ ๋์ ํด์๋ ์ฌ์ฉํด ๋ณด์ธ์.
    -   [ ] ์ํ ํฌ์คํฐ ์ฃผ์์ ํฌํจ๋ `SX300`๋ฅผ `SX700`๊ณผ ๊ฐ์ด ๋ ํฐ ์ซ์๋ก ์์ ํด ์์ฒญํ์ธ์.
    -   [ ] ์ค์๊ฐ์ผ๋ก ์ด๋ฏธ์ง์ ํฌ๊ธฐ๋ฅผ ๋ค๋ฅด๊ฒ ์์ฒญํ๋ ๊ฒ์ด ์ด๋ค ์๋ฆฌ๋ก ๊ฐ๋ฅํ์ง ์กฐ์ฌํด ๋ณด์ธ์.
-   [ ] ์์ฒญ ์ฃผ์์ HTTP๊ฐ ์๋ HTTPS ํ๋กํ ์ฝ์ ์ฌ์ฉํด์ผ ํ๋ ์ด์ ๋ฅผ ์กฐ์ฌํด ๋ณด์ธ์.
-   [ ] Bootstrap ๋ฑ์ UI ํ๋ ์์ํฌ๋ฅผ ๊ตฌ์ฑํด ํ๋ก์ ํธ๋ฅผ ์ต๋ํ ์์๊ฒ(?) ๋ง๋ค์ด ๋ณด์ธ์.
-   [ ] Open Graph ํน์ Twitter Cards๋ก Meta ์ ๋ณด๋ฅผ ์ ๊ณตํด ๋ณด์ธ์.
-   [ ] NuxtJS๋ฅผ ํ์ฉํด Server Side Rendering(SSR)๊ณผ ๊ฒ์ ์์ง ์ต์ ํ(SEO)๋ฅผ ๋์ํด ๋ณด์ธ์.  
         (๋ง์ฝ SSR์ ์ต์์น ์๋ค๋ฉด, SPA ํ๋ก์ ํธ๋ฅผ ๋จผ์  ๋ง๋ค์ด ๋ณด๊ณ  ๋์ ํ์ธ์!)

## API ์ฌ์ฉ๋ฒ

-   ์ฐธ๊ณ  ์ฌ์ดํธ: [The Open Movie Database](http://www.omdbapi.com/)
-   ์์ฒญ ์ฃผ์: `https://www.omdbapi.com`
-   Method: `GET`

### ์ํ ๋ชฉ๋ก ๊ฒ์

| ํ๋ผ๋ฏธํฐ | ํ์ | ์ค๋ช             | ๊ธฐ๋ณธ๊ฐ | ์ ํจ ๊ฐ   |
| -------- | ---- | ---------------- | ------ | --------- |
| `s`      | ์   | ๊ฒ์ํ  ์ํ ์ ๋ชฉ |        |
| `y`      |      | ์ํ ์ถ์ ๋๋   |        |
| `page`   |      | ๊ฒ์ ๊ฒฐ๊ณผ ํ์ด์ง | `1`    | `1`~`100` |

````

์๋ต ์์:

-   `Search`: ์ํ ๋ชฉ๋ก, 1ํ์ด์ง(`page`) ๋น ์ต๋ 10๊ฐ
-   `totalResults`: ๊ฒ์ ๊ฐ๋ฅํ ๋ชจ๋  ์ํ ๊ฐ์

```json
{
    "Search": [
        {
            "Title": "Frozen",
            "Year": "2013",
            "imdbID": "tt2294629",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0YjYy...eQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
        },
        "...์ต๋10๊ฐ"
    ],
    "totalResults": "263",
    "Response": "True"
}
````

### ์ํ ์์ธ ๊ฒ์

| ํ๋ผ๋ฏธํฐ | ํ์ | ์ค๋ช                         | ๊ธฐ๋ณธ๊ฐ  | ์ ํจ ๊ฐ |
| -------- | ---- | ---------------------------- | ------- | ------- |
| `i`      | ์   | ๊ฒ์ํ  ์ํ ์์ด๋(`imdbID`) |         |
| `plot`   |      | ์ํ ์ค๊ฑฐ๋ฆฌ ๊ธธ์ด             | `short` | `full`  |

์๋ต ์์:

```json
{
    "Title": "Frozen II",
    "Year": "2019",
    "Rated": "PG",
    "Released": "22 Nov 2019",
    "Runtime": "103 min",
    "Genre": "Animation, Adventure, Comedy",
    "Director": "Chris Buck, Jennifer Lee",
    "Writer": "Jennifer Lee, Hans Christian Andersen, Chris Buck",
    "Actors": "Kristen Bell, Idina Menzel, Josh Gad",
    "Plot": "Having harnessed her ever-growing power after lifting the dreadful curse of the eternal winter in Frozen (2013),",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 17 wins & 90 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0YjYy...eQXVyNDg4NjY5OTQ@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "77%"
        },
        {
            "Source": "Metacritic",
            "Value": "64/100"
        }
    ],
    "Metascore": "64",
    "imdbRating": "6.8",
    "imdbVotes": "151,940",
    "imdbID": "tt4520988",
    "Type": "movie",
    "DVD": "22 Nov 2019",
    "BoxOffice": "$477,373,578",
    "Production": "Walt Disney Animation, Walt Disney Pictures",
    "Website": "N/A",
    "Response": "True"
}
```

<br/>
<br/>
<br/>

---

<br/>
<br/>
<br/>
