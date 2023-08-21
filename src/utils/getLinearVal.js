import * as d3 from 'd3';

function getLinearVal(color1, color2, min, max, currentVal) {
  const color = d3.scaleLinear().domain([min, max]).range([color1, color2]);
  return color(currentVal);
}
export default getLinearVal;
