import got from 'got';

function benchmarkFX() {
  // Fetch fxtwitter.com using got package and measure latency using performance.now()
  const start = performance.now();
  got('https://fxtwitter.com/dangeredwolf/status/1560358399535202304?'+Math.random())
    .then(response => {
      const end = performance.now();
      console.log(`fxtwitter: ${end - start}ms`);
    }).catch(error => {
      console.log(error);
    })
}

function benchmarkVX() {
  // Fetch fxtwitter.com using got package and measure latency using performance.now()
  const start = performance.now();
  got('https://vxtwitter.com/dangeredwolf/status/1560358399535202304?'+Math.random())
    .then(response => {
      const end = performance.now();
      console.log(`vxtwitter: ${end - start}ms`);
    }).catch(error => {
      console.log(error);
    })
}

benchmarkFX();
benchmarkVX();