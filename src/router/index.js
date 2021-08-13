import Retrosynthesis from '@/views/Retrosynthesis';
import MySwiper from '@/components/Swiper';
import LineChart from '@/views/D3/LineChart';

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
  {
    path: '/d3/lineChart',
    exact: true,
    component: LineChart,
  },
];
