$('#drone').click(function () {
  let hp = parseInt($('#hp2').text().split(' ')[1]);
  $('#spit')
    .fadeIn()
    .animate({ left: '+=370' })
    .fadeOut(function () {
      $(this).css({ left: '170px' });
      hp--;
      $('#hp2').text('HP: ' + hp);
      if (hp === 0) {
        $('#bunker').fadeOut(function () {
          // 벙커가 fadeOut될 때 monster 이미지 등장 및 움직임
          $('#greenMonster')
            .fadeIn()
            .animate({ top: '+=20px', right: '+=50px' }, 200)
            .animate({ top: '-=40px', right: '+=150px' }, 400)
            .animate({ top: '+=20px', right: '+=300px' }, 200, function () {
              setTimeout(function () {
                $('#gameOver').fadeIn();
              }, 300);
            });
        });
      }
    });
});

$('#bunker').click(function () {
  let hp = parseInt($('#hp').text().split(' ')[1]);
  $('#bullets')
    .fadeIn()
    .animate({ right: '+=370' })
    .fadeOut(function () {
      $(this).css({ right: '210px' });
      hp--;
      $('#hp').text('HP: ' + hp);
      if (hp === 0) {
        $('#drone').fadeOut(function () {
          // 드론이 fadeOut될 때 monster 이미지 등장 및 움직임
          let monsters = [
            '#monster1',
            '#monster2',
            '#monster3',
            '#monster4',
            '#monster5',
            '#monster6',
          ];
          fadeInMonsters(monsters, function () {
            setTimeout(function () {
              $('#gameOver').fadeIn();
            }, 200);
          });
        });
      }
    });
});

function fadeInMonsters(monsters, callback, index = 0) {
  $(monsters[index])
    .fadeIn()
    .queue(function (next) {
      $(this).fadeIn(next);
      if (index + 1 < monsters.length) {
        fadeInMonsters(monsters, callback, index + 1);
      } else {
        callback();
      }
      next();
    });
}
