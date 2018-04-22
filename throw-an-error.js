function parsePromised(json) {
  return new Promise(function(resolve, reject) {
    try {
      var json = JSON.parse(process.argv[2]);
      resolve(json);
    } catch (e) {
      reject(e);
    }
  });
}

function onReject(error) {
  console.log(error.message);
}

parsePromised(process.argv[2]).then(null, onReject);
