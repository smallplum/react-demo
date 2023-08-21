const sortTypeMap = {
  descend: 'desc',
  ascend: 'asc',
};
export default (str = '') => {
  if (str) {
    return sortTypeMap[str];
  }
  return '';
};
