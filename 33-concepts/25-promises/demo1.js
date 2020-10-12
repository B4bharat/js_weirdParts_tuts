var isMomHappy = true;

var willIGetNewPhone = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: 'Samsung',
      color: 'black',
    };
    resolve(phone);
  } else {
    var reason = new Error('mom is not happy');
    reject(reason);
  }
});

var askMom = function () {
  willIGetNewPhone
    .then(function (fulfilled) {
      console.log(fulfilled);
    })
    .catch(function (err) {
      console.log(err.message);
    });
};

askMom();
