function doSmtAfter1s(str) {
  let s = str.toUpperCase();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(s);
    }, 1000);
  });
}
console.log("bat dau");
const ret1 = doSmtAfter1s("Hello");
const ret2 = ret1.then((s) => {
  console.log("do lan 2");
  return doSmtAfter1s(s + " 1");
});
ret2.then((s) => console.log(s));
