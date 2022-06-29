function checkMemStatus () {
  // como usar módulo do node dentro do js, nesse caso o módulo é o 'os
  const { stat } = require('os');
  const os  = require('os');
  //retorna o OS que está sendo executado o node
  // console.log(os.platform());

  const mem = parseInt(os.freemem()/1024/1024)
  const totalMem = parseInt(os.totalmem()/1024/1024);
  const percentage = parseInt((mem/totalMem)*100);

  const statistics = {
    totalMemory: `${totalMem}MB`,
    freeMemory: `${mem}MB`,
    percentage: `${percentage}%`
  }

  // console.log(statistics);
  console.clear();
  console.table(statistics);
}


setInterval(() => {
  checkMemStatus();
}, 1000)