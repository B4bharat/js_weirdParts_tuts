var keepsHisWord;
keepsHisWord = true;

promise1 = new Promise((resolve, reject) => {
  if (keepsHisWord) {
    resolve('The man likes to keep his word');
  } else {
    reject("The man doesn't want to keep his word");
  }
});

promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      message: 'The man likes to keep his word',
      code: 'aManKeepsHisWord',
    });
  }, 10 * 1000);
});

promise2.then((result) => {
  console.log(result);
});

var momsPromise = new Promise((resolve, reject) => {
  momsSavings = 20000;
  priceofPhone = 60000;

  if (momsSavings > priceofPhone) {
    resolve({
      brand: 'iphone',
      model: '6s',
    });
  } else {
    reject('we do not have enough money, lets save some more money');
  }
});

momsPromise.then(function (value) {
  console.log('Hurray I got this phone as a gift ', JSON.stringify(value));
});

momsPromise.catch(function (reason) {
  console.log("Mom coudn't buy me the phone because ", reason);
});

momsPromise.finally(function () {
  console.log(
    'Irrespecitve of whether my mom can buy me a phone or not, I still love her'
  );
});
