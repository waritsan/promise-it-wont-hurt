function attachTitle(arg) {
  return 'DR. ' + arg;
}

var promise = new Promise(function(resolve, reject) {
  resolve('MANHATTAN');
});

promise.then(attachTitle).then(console.log);
