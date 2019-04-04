import { IMenuItem } from '../lib/interfaces';

const MenuItems: IMenuItem[] = [
  {
    href: '/',
    text: 'الصفحة الرئيسية',
    key: 'home',
  },
  {
    href: '/sign-in',
    text: 'تسجيل الدخول',
    key: 'sign-in',
  },
  {
    href: '/sign-up',
    text: 'إنشاء حساب',
    key: 'sign-up',
  },
];

export default MenuItems;
