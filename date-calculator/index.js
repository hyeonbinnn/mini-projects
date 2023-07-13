// 우리 사귄지 며칠째?
const now = new Date();
const start = new Date('2020-05-28');
const dayDiff = Math.floor((now - start) / (1000 * 60 * 60 * 24) + 1);
$('#love').text(dayDiff + '일째');

// 기념일까지 남은 날짜?
const valentine = new Date('2024-02-14');
const dayDiff2 = Math.floor((valentine - now) / (1000 * 60 * 60 * 24));
$('#valentine').text(dayDiff2 + ' days');

// 1000일은 언제?
const thousand = new Date(start.getTime() + 999 * (1000 * 60 * 60 * 24));
const thousandDate = `${thousand.getFullYear()}.${thousand.getMonth() + 1}.${thousand.getDate()}`;
$('#thousand-date').text(thousandDate);

// 2000일은 언제?
const twoThousand = new Date(start.getTime() + 1999 * (1000 * 60 * 60 * 24));
const twoThousandDate = `${twoThousand.getFullYear()}.${
  twoThousand.getMonth() + 1
}.${twoThousand.getDate()}`;
$('#two-thousand-date').text(twoThousandDate);

// 1000일까지 며칠 남았는지?
const dayDiff3 = Math.floor((thousand - now) / (1000 * 60 * 60 * 24));
$('#thousand').text(dayDiff3 + ' days');

// 2000일까지 며칠 남았는지?
const dayDiff4 = Math.floor((twoThousand - now) / (1000 * 60 * 60 * 24));
$('#two-thousand').text(dayDiff4 + ' days');
