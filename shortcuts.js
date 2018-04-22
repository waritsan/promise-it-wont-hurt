var promise = Promise.resolve('RESOLVED');
promise.then(console.log);

promise = Promise.reject(new Error('REJECTED'));
promise.catch(function (err) {
  console.log(err.message);
});
