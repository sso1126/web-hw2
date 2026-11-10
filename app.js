// ===== Part A =====

// A1. 평균 평점
let sumA = 0;

for (let i = 0; i < movies.length; i++) {
    sumA += movies[i].rating;
}

const average = sumA / movies.length;

console.log("A1 평균 평점: " + average);


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
