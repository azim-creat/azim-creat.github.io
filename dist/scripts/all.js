// $(document).ready(
//   () => {
    const t = [
      'Wake up, Neo ...\n',
      'The Matrix has you ...\n',
      'Follow Azim\n',
      'Knock, knock, Neo.\n',
      '<a href="#about">Scroll down</a>\n'
    ];
    
    function typeText(){
      let line = 0;
      let count = 0;
      let out = '';
      function typeLine() {
        let interval = setTimeout(
          () => {
            out += t[line][count]
            document.querySelector('pre').innerHTML =out +'|';
         
          
          count++;
          /**
          ** проверяем 
          **/
          if (count >= t[line].length) {
            count = 0;
            line++;
            if (line == t.length) {
              clearTimeout(interval);
               document.querySelector('pre').innerHTML =out;
              return true;
            }
          }
          typeLine();
        }, getRandomInt(getRandomInt(250*2.5)))
      }
      typeLine();
      
    }
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    setTimeout( function(){typeText()}, 3000)
    // typeText();






const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';
  
  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);



//   }
// )

