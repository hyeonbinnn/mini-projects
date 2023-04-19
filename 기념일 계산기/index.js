// 1
const now = new Date();
const start = new Date("2020.5.28");

const timeDiff = now.getTime() - start.getTime();
const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
$("#love").text(day + "일째");

// 2
const valentine = new Date("2024-02-14");

const timeDiff2 = valentine.getTime() - now.getTime();
const day2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24) + 1);
$("#valentine").text(day2 + "일 남음");

// 3
const ms = start.getTime() + 999 * (1000 * 60 * 60 * 24);
const thousand = new Date(ms);
const thousandDate =
  thousand.getFullYear() +
  "." +
  (thousand.getMonth() + 1) +
  "." +
  thousand.getDate();
$("#thousand-date").text(thousandDate);

// 2000일 구하기
const ms2 = start.getTime() + 1999 * (1000 * 60 * 60 * 24);
const twoThousand = new Date(ms2);
const twoThousandDate =
  twoThousand.getFullYear() +
  "." +
  (twoThousand.getMonth() + 1) +
  twoThousand.getDate();
$("#two-thousand-date").text(twoThousandDate);

// 4
const timeDiff3 = thousand.getTime() - now.getTime();
const day3 = Math.floor(timeDiff3 / (1000 * 60 * 60 * 24) + 1);
$("#thousand").text(day3 + "일 남음");

// 남은 2000일 구하기
const timeDiff4 = twoThousand.getTime() - now.getTime();
const day4 = Math.floor(timeDiff4 / (2000 * 60 * 60 * 24) + 1);
$("#two-thousand").text(day4 + "일 남음");
