import got from 'got';
/* Generate a random Tweet ID. This Tweet ID doesn't have to exist at all,
   but being random is important because it means not having
   the response already cached, so no one script has a head start. */
let id = (Math.random() * 1555000000000000000)

function benchmarkFX() {
  const start = performance.now();
  got('https://fxtwitter.com/i/status/' + id, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)'
    }
  })
    .then(() => {
      const end = performance.now();
      console.log(`fxtwitter: ${end - start}ms`);
    }).catch(error => {
      console.log(error);
    })
}

function benchmarkVX() {
  const start = performance.now();
  got('https://vxtwitter.com/i/status/' + id, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)'
    }
  })
    .then(() => {
      const end = performance.now();
      console.log(`vxtwitter: ${end - start}ms`);
    }).catch(error => {
      console.log(error);
    })
}

function benchmarkTWX() {
  const start = performance.now();
  got('https://twxtter.com/i/status/' + id, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)'
    }
  })
    .then(() => {
      const end = performance.now();
      console.log(`twxtter: ${end - start}ms`);
    }).catch(error => {
      console.log(error);
    })
}

function benchmark64() {
  const start = performance.now();
  got('https://twitter64.com/i/status/' + id, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)'
    }
  })
    .then(() => {
      const end = performance.now();
      console.log(`twitter64: ${end - start}ms`);
    }).catch(error => {
      console.log(error);
    })
}

benchmarkVX();
benchmarkTWX();
benchmark64();
benchmarkFX();