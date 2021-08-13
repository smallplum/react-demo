import React, { PureComponent } from 'react';
import Swiper from 'swiper';
// import '~swiper/css/swiper.css';

class MySwiper extends PureComponent {
  // 在合适的生命周期函数中实例化 Swiper
  componentDidMount() {
    // 实例化
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">slider1</div>
          <div className="swiper-slide">slider2</div>
          <div className="swiper-slide">slider3</div>
        </div>
      </div>
    );
  }
}

export default MySwiper;
