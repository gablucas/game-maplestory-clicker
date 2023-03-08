export function debounce(callback, delay = 1000) {
  let timer;

  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}