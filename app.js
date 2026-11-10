// ===== Part A =====
// A1. 평균 평점
function average(list) {
    let sum = 0;
    for (const m of list) {
        sum += m.rating;
    }
    return sum / list.length;
}
console.log("평균:", average(movies));


// A2. 최고 평점 영화의 제목과 평점
let maxA = 0;

for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating > movies[maxA].rating) {
        maxA = i;
    }
}

console.log(
    "A2 최고 평점: " +
    movies[maxA].title + " " +
    movies[maxA].rating
);


// A3. 8점 이상인 영화 수
let countA = 0;

for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating >= 8) {
        countA++;
    }
}

console.log("A3 8점 이상: " + countA + "편");


// A4. 연도대별 영화 수
let count2020 = 0;
let count2010 = 0;
let count2000 = 0;
let countBefore = 0;

for (let i = 0; i < movies.length; i++) {
    const decade = movies[i].year - (movies[i].year % 10);

    switch (decade) {
        case 2020:
            count2020++;
            break;

        case 2010:
            count2010++;
            break;

        case 2000:
            count2000++;
            break;

        default:
            countBefore++;
    }
}

console.log(
    "A4 2020년대 " + count2020 + "편, " +
    "2010년대 " + count2010 + "편, " +
    "2000년대 " + count2000 + "편, " +
    "그 이전 " + countBefore + "편"
);


// A5. 관객 100만 이상 영화 제목
let bigA = "";

for (let i = 0; i < movies.length; i++) {
    if (movies[i].audience >= 1000000) {
        if (bigA !== "") {
            bigA += " ";
        }

        bigA += movies[i].title;
    }
}

if (bigA === "") {
    bigA = "없음";
}

console.log("A5 관객 100만 이상: " + bigA);




// ===== Part B =====
// 배열을 영화 객체로 합치기
const movies = [];

for (let i = 0; i < titles.length; i++) {
    movies.push({
        title: titles[i],
        year: years[i],
        rating: ratings[i],
        audience: audiences[i]
    });
}


// 1. 평균 평점
function average(list) {
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        sum += list[i].rating;
    }

    return sum / list.length;
}


// 2. 최고 평점 영화
function best(list) {
    let result = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i].rating > result.rating) {
            result = list[i];
        }
    }

    return result;
}


// 3. 평점 필터
function filterByRating(list, min) {
    return list.filter(m => m.rating >= min);
}


// 4. 정렬
function sortBy(list, key, desc) {
    const result = [...list];

    result.sort((a, b) => {
        let value;

        if (typeof a[key] === "string") {
            value = a[key].localeCompare(b[key]);
        } else {
            value = a[key] - b[key];
        }

        const sign = desc ? -1 : 1;

        return value * sign;
    });

    return result;
}


// 5. 영화 제목 검색
function search(list, keyword) {
    const word = keyword.trim().toLowerCase();

    return list.filter(m =>
        m.title.toLowerCase().includes(word)
    );
}


// 6. 숫자에 천 단위 쉼표 넣기
function formatNumber(n) {
    return Number(n).toLocaleString("ko-KR");
}


// 7. 개봉한 지 몇 년인지 계산
function yearsSince(dateStr) {
    const date = new Date(dateStr);
    const today = new Date();

    let year = today.getFullYear() - date.getFullYear();

    if (
        today.getMonth() < date.getMonth() ||
        (today.getMonth() === date.getMonth() &&
         today.getDate() < date.getDate())
    ) {
        year--;
    }

    return year;
}



document.getElementById("out").textContent = line1 + "\n" + line2 + "\n" + line3;

const bestMovie = best(movies);
const topAudience = sortBy(movies, "audience", true)[0];

const line1 = "평균 평점: " + average(movies).toFixed(1);

const line2 = "최고 평점: " + bestMovie.title +
    " (" + bestMovie.rating + "점, 개봉한 지 " +
    yearsSince(bestMovie.year + "-01-01") + "년)";

const line3 = "관객 1위: " + topAudience.title +
    " (누적 " + formatNumber(topAudience.audience) + "명)";
