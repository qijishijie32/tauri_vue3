export const debounce = <T extends (...args: never[]) => void>(fn: T, wait = 300) => {
  let timer: number | null = null;
  return (...args: Parameters<T>) => {
    if (timer) window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), wait);
  };
};

export const throttle = <T extends (...args: never[]) => void>(fn: T, wait = 300) => {
  let ready = true;
  return (...args: Parameters<T>) => {
    if (!ready) return;
    ready = false;
    fn(...args);
    window.setTimeout(() => {
      ready = true;
    }, wait);
  };
};

export const formatDate = (date: Date | number | string) => {
  const target = new Date(date);
  const year = target.getFullYear();
  const month = `${target.getMonth() + 1}`.padStart(2, '0');
  const day = `${target.getDate()}`.padStart(2, '0');
  const hour = `${target.getHours()}`.padStart(2, '0');
  const minute = `${target.getMinutes()}`.padStart(2, '0');
  const second = `${target.getSeconds()}`.padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
