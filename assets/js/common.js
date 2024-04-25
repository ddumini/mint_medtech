// const toggleLang = () => {
//   $('.i18n > button').on('click', function () {
//     $(this).toggleClass('active');
//     $('.i18n__list').stop().slideToggle(200);
//   });
// };

// const toggleGsnb = () => {
//   $('button.gnb__depth1').on('click', function () {
//     $('button.gnb__depth1')
//       .not($(this))
//       .removeClass('active')
//       .siblings('.gsnb')
//       .stop()
//       .slideUp(200);

//     $(this) //
//       .toggleClass('active')
//       .siblings('.gsnb')
//       .stop()
//       .slideToggle(200);
//   });
// };
const headerAnim = () => {
  let header = document.querySelector('.header');
  let viewportHeight = document.documentElement.clientHeight
  let prevY = 0;
  addEventListener('scroll', (e) => {
    const currentY = scrollY;
    currentY > viewportHeight ? header.classList.remove('top') : header.classList.add('top');
    prevY = scrollY;
  });
}
// gsap.registerPlugin(ScrollTrigger);
// const fadeInUp = () => {
//   gsap.utils.toArray('.fadeInUp').forEach(target => {
//     gsap.fromTo(
//       target,
//       0.7,
//       {
//         yPercent: 10,
//         autoAlpha: 0,
//       },
//       {
//         scrollTrigger: {
//           trigger: target,
//           markers: false,
//           start: '0%, 90%',
//         },
//         yPercent: 0,
//         autoAlpha: 1,
//       },
//     );
//   });
// };

export function commonInit() {
  headerAnim();
}
