import * as $ from 'jquery';

const StoryTips = {
  init: () => {
    const storyTipsSlide = $('.story-tips-box');
    storyTipsSlide.not('.slick-initialized').slick({
      slidesToShow: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 7000,
    });
  },
};

export default StoryTips;
