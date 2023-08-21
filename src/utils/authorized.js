import getUserInfo from './user';

export default (compURL) => {
  const user = getUserInfo();
  if (!user) {
    return false;
  }
  if (!user.allowedUris) {
    return false;
  }
  return user.allowedUris.includes(compURL);
};

export const someAllowed = (uris = []) => {
  const user = getUserInfo();
  if (!user) {
    return false;
  }
  if (!user.allowedUris) {
    return false;
  }
  return uris.some((v) => user.allowedUris.includes(v));
};
