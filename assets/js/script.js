import { commonInit } from './common.js';
import { mainInit } from './pages/main.js';
// import { careerToggle } from './pages/sub.js';
// import { mdSlide } from './pages/sub.js';

function init() {
  commonInit();
  const container = document.getElementById('container');

  // 메인 페이지
  if (container.classList.contains('main-page')) {
    mainInit();
  }

  // Career 페이지
  // if (container.classList.contains('career')) {
  //   careerToggle();
  // }

  // program - md
  // if (container.classList.contains('md')) {
  //   mdSlide();
  // }
}

init();
