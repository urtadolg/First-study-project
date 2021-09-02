let counter = "2";
let delay = 5000;
setTimeout(() => {
  document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
  counter++;
  setTimeout(() => {
    document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
    counter++;
    setTimeout(() => {
      document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
      counter++;
      setTimeout(() => {
        document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
        counter++;
        setTimeout(() => {
          document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
          counter = 1;
          setTimeout(() => {
            document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
            counter = 2;
          }, delay);
        }, delay);
      }, delay);
    }, delay);
  }, delay);
}, delay);
setInterval(() => {
  setTimeout(() => {
    document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
    counter++;
    setTimeout(() => {
      document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
      counter++;
      setTimeout(() => {
        document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
        counter++;
        setTimeout(() => {
          document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
          counter++;
          setTimeout(() => {
            document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
            counter = 1;
            setTimeout(() => {
              document.body.style.backgroundImage = `url(images/background${counter}.jpg)`;
              counter = 2;
            }, delay);
          }, delay);
        }, delay);
      }, delay);
    }, delay);
  }, delay);
}, delay * 6);