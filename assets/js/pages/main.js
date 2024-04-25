export const mainInit = () => {
  // $('.main-hear__slide').slick({
  //   dots: true,
  //   fade: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slide: '.item',
  // });

  // $('.main-portfolio__list').slick({
  //   vertical: true,
  //   verticalSwiping: true,
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   slidesToShow: 1,
  //   pauseOnHover: false,
  //   slide: '.item',
  // });

  // $('.main-team__slide').slick({
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 700,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   slidesToShow: 1,
  //   fade: true,
  //   pauseOnHover: false,
  //   slide: '.item',
  // });

  mainPrtnerAnim();
  infiniteCarousel({
    trigger: '.box-carousel',
    duration: 7,
    reverse: true,
    pauseOnHover: false,
  });
};

const mainPrtnerAnim = () => {
  gsap.to('.main-partner__banner div', {
    scrollTrigger: {
      trigger: '.main-partner__banner',
      start: '0, 60%',
      end: '100%, 100%',
    },
    width: '100%',
    duration: 1,
  });
};
function infiniteCarousel({ trigger, duration, reverse, pauseOnHover }) {
  trigger = document.querySelectorAll(trigger);

  trigger.forEach((trigger) => {
    trigger.style.overflow = 'hidden';
    trigger.style.visibility = 'visible';

    const items = trigger.querySelector('.carousel-items');
    const item = trigger.querySelectorAll('.carousel-item');
    const itemWidthArr = [...item].map((item) => {
      item.style.position = 'absolute';
      return item.clientWidth;
    });
    let totalWidth = 0;

    itemWidthArr.map((width, idx, arr) => {
      if (idx === 0) {
        totalWidth = itemWidthArr[arr.length - 1];
      } else if (arr[idx - 1]) {
        totalWidth = totalWidth + arr[idx - 1];
      }
      gsap.set(item[idx], {
        x: totalWidth,
      });
    });

    items.style.position = 'relative';
    items.style.height = `${item[0].offsetHeight}px`;
    items.style.left = `-${Math.max(...itemWidthArr)}px`;

    const tl = gsap.timeline();
    tl.to(item, duration * item.length, {
      x: () => {
        return reverse ? `-=${totalWidth}` : `+=${totalWidth}`;
      },
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          return reverse ? (x < 0 ? (parseFloat(x) % totalWidth) + totalWidth : x) : parseFloat(x) % totalWidth;
        }),
      },
    });

    if (pauseOnHover) {
      trigger.addEventListener('mouseover', () => {
        tl.pause();
      });

      trigger.addEventListener('mouseleave', () => {
        tl.play();
      });
    }
  });
}
