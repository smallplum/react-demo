function getBroswerInfo() {
  const browserInfo = navigator.userAgent.toLowerCase();
  const regular = /(msie|firefox|chrome|opera|edg|edge|version).*?([\d.]+)/;
  const vsMsg = browserInfo.match(regular);
  const browserName = vsMsg[1].replace(/version/, 'safari');
  const version = Number(vsMsg[2].split('.')[0]);
  if (
    !['chrome', 'edg', 'edge', 'firefox'].includes(browserName) ||
    (browserInfo.indexOf('chrome') >= 0 && version < 85) ||
    (browserInfo.indexOf('firefox') >= 0 && version < 85) ||
    (browserInfo.indexOf('edg') >= 0 && version < 89) ||
    (browserInfo.indexOf('edge') >= 0 && version < 89)
  ) {
    return true;
  }
  return false;
}
export default getBroswerInfo;
