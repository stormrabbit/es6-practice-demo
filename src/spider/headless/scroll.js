const scrollSmooth = async () => {
    await new Promise((resolve, reject) => {
      try {
        let lastScroll = 0;
        let retry = 0;
        const maxScroll = Number.MAX_SAFE_INTEGER;
        let count = 1000;
        const interval = setInterval(() => {
          window.scrollBy(0, 5);
          const scrollTop = document.documentElement.scrollTop;
          if (scrollTop === maxScroll || (retry > 10 && lastScroll === scrollTop) || count === 0) {
            clearInterval(interval);
            resolve();
          } else {
            retry++;
            lastScroll = scrollTop;
            count --;
          }
        }, 25);
      } catch (err) {
        reject(err.toString());
      }
    });
  }

export default scrollSmooth;