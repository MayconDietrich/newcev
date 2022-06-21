let game = document.getElementById('game');
let playerWin = document.getElementById('playerWin');
const modal = document.getElementById('modal');
let player = 1;

document.addEventListener('click', function(event) {
  if(event.target.classList == 'area') {
    console.log(event.target);

    if(player === 1) {
      if(event.target.innerHTML == '') {
        event.target.innerHTML = 'x';
        player = 2;
      }
    }else {
      if(event.target.innerHTML == '') {
        player = 1;
        event.target.innerHTML = 'o';
      }
    }

    for(x = 0; x < 9; x+=3) {
      if(game.children[x].innerHTML == 'x' && game.children[x+1].innerHTML == 'x' && game.children[x+2].innerHTML == 'x') {
        console.log('ganhastes! :o');
        playerWin.innerHTML = '1';
        modal.style.display = 'flex'
      }else if(game.children[x].innerHTML == 'o' && game.children[x+1].innerHTML == 'o' && game.children[x+2].innerHTML == 'o') {
        console.log('ganhastes! :o');
        playerWin.innerHTML = '2';
        modal.style.display = 'flex'
      }
    }
    for(x = 0; x < 3; x++) {
      if(game.children[x].innerHTML == 'x' && game.children[x+3].innerHTML == 'x' && game.children[x+6].innerHTML == 'x') {
        console.log('ganhastes! :o');
        playerWin.innerHTML = '1';
        modal.style.display = 'flex'
      }else if(game.children[x].innerHTML == 'o' && game.children[x+3].innerHTML == 'o' && game.children[x+6].innerHTML == 'o') {
        console.log('ganhastes! :o');
        playerWin.innerHTML = '2';
        modal.style.display = 'flex'
      }
    }
    if(game.children[0].innerHTML == 'x' && game.children[4].innerHTML == 'x' && game.children[8].innerHTML == 'x') {
      console.log('ganhastes! :o');
      playerWin.innerHTML = '1';
      modal.style.display = 'flex'
    }
    if(game.children[2].innerHTML == 'x' && game.children[4].innerHTML == 'x' && game.children[6].innerHTML == 'x') {
      console.log('ganhastes! :o');
      playerWin.innerHTML = '2';
      modal.style.display = 'flex'
    }
    if(game.children[0].innerHTML == 'o' && game.children[4].innerHTML == 'o' && game.children[8].innerHTML == 'o') {
      console.log('ganhastes! :o');
      playerWin.innerHTML = '2';
      modal.style.display = 'flex'
    }
    if(game.children[2].innerHTML == 'o' && game.children[4].innerHTML == 'x' && game.children[6].innerHTML == 'o') {
      console.log('ganhastes! :o');
      playerWin.innerHTML = '2';
      modal.style.display = 'flex'
    }
  }
});

document.getElementById('btnReload').addEventListener('click', function() {
  location.reload();
})