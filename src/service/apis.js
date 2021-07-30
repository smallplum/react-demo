/* eslint-disable no-undef */
// eslint-disable-next-line consistent-return
const getUrl = (path) => {
  if (NODE_ENV === 'dev') {
    // return `http://dev01.bgp.stonewise.cn:7107${path}`;
    return `http://dev01.bgp.stonewise.cn:7203${path}`;
    // return path;
  }
  if (NODE_ENV === 'test') {
    // return `http://dev01.bgp.stonewise.cn:7203${path}`;
    return `https://tmp-test02.aws.nx.stonewise.cn:4433${path}`;
  }
  if (NODE_ENV === 'prd') {
    // https://yunying.stonewise.cn:9002/operation
    // return `http://dev01.bgp.stonewise.cn:7203${path}`; // 测试环境接口
    return path; // 正式环境接口
  }
};

export default {
  loginUser: getUrl('/operation/user/login'),
};
