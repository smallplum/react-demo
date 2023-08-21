import localStorage from '@/utils/localStorage';

export default function getUserInfo() {
  return localStorage.getItem('__login_user__');
}
