export const careerToggle = () => {
  document.querySelectorAll('.career-list li').forEach((ele, idx) => {
    console.log('ele', ele);
    ele.addEventListener('click', e => {
      ele.classList.toggle('active');
    });
  });
};

export const mdSlide = () => {
  $('.md-accelerate__slide').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slide: '.item',
  });
}