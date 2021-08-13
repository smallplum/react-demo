import Retrosynthesis from '@/views/Retrosynthesis';
import MySwiper from '@/components/Swiper';

export default [
  {
    path: '/retrosynthesis',
    exact: true,
    component: Retrosynthesis,
  },
  {
    path: '/swiper',
    exact: true,
    component: MySwiper,
  },
];
