function all(promise1, promise2) {
  return new Promise(function(resolve, reject) {
    var counter = 0;
    var out = [];
    promise1.then(function (val) {
      out[0] = val;
      counter++;
      if (counter >= 2) {
        resolve(out);
      }
    });
    promise2.then(function (val) {
      out[1] = val;
      counter++;
      if (counter >= 2) {
        resolve(out);
      }
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);
