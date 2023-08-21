// // eslint-disable-next-line import/prefer-default-export
// export function parsePosition(positionStr, { width, height }) {
//   const [left, top, right, bottom] = positionStr.split('_');
//   if (!width) {
//     return;
//   }
//   const ratio = width / 2480;
//   const ratioH = height / 3509;
//   // eslint-disable-next-line consistent-return
//   return {
//     x: Math.round(left * ratio),
//     y: Math.round(top * ratioH),
//     width: Math.round((right - left) * ratio),
//     height: Math.round((bottom - top) * ratioH),
//   };
// }
