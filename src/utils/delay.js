export default function delay(fn, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn ? fn() : null);
    }, time);
  });
}
