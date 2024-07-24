import {
  IconRouteAltLeft,
  // IconSettings,
  IconHome,
  IconUser,
  IconShoppingBag,
  IconNetwork,
  IconMilitaryRank,
  IconVideo,
  IconWallet
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sideLinks: SideLink[] = [
  {
    title: 'الرئيسية',
    label: '',
    href: '/',
    icon: <IconHome size={18} />,
  },
  {
    title: 'صفحتي',
    label: '',
    href: '/profile',
    icon: <IconUser size={18} />,
  },
  {
    title: 'المتجر',
    label: '',
    href: '/store',
    icon: <IconShoppingBag size={18} />,
  },
  {
    title: 'محفظتي',
    label: '',
    href: '/wallet',
    icon: <IconWallet size={18} />,
  },
  {
    title: 'شبكتي',
    label: '',
    href: '/my-network',
    icon: <IconNetwork size={18} />,
  },
  {
    title: 'خدماتي',
    label: '',
    href: '/my-services',
    icon: <IconUser size={18} />,
  },
  {
    title: 'التحويلات',
    label: '',
    href: '/transactions',
    icon: <IconRouteAltLeft size={18} />,
  },
  {
    title: 'رتبتي',
    label: '',
    href: '/my-rank',
    icon: <IconMilitaryRank size={18} />,
  },
  {
    title: 'الميديا',
    label: '',
    href: '/media',
    icon: <IconVideo size={18} />,
  },














  // {
  //   title: 'Dashboard',
  //   label: '',
  //   href: '/',
  //   icon: <IconLayoutDashboard size={18} />,
  // },
  // {
  //   title: 'Tasks',
  //   label: '3',
  //   href: '/tasks',
  //   icon: <IconChecklist size={18} />,
  // },
  // {
  //   title: 'Chats',
  //   label: '9',
  //   href: '/chats',
  //   icon: <IconMessages size={18} />,
  // },
  // {
  //   title: 'Apps',
  //   label: '',
  //   href: '/apps',
  //   icon: <IconApps size={18} />,
  // },
  // {
  //   title: 'Authentication',
  //   label: '',
  //   href: '',
  //   icon: <IconUserShield size={18} />,
  //   sub: [
  //     {
  //       title: 'Sign In (email + password)',
  //       label: '',
  //       href: '/sign-in',
  //       icon: <IconHexagonNumber1 size={18} />,
  //     },
  //     {
  //       title: 'Sign In (Box)',
  //       label: '',
  //       href: '/sign-in-2',
  //       icon: <IconHexagonNumber2 size={18} />,
  //     },
  //     {
  //       title: 'Sign Up',
  //       label: '',
  //       href: '/sign-up',
  //       icon: <IconHexagonNumber3 size={18} />,
  //     },
  //     {
  //       title: 'Forgot Password',
  //       label: '',
  //       href: '/forgot-password',
  //       icon: <IconHexagonNumber4 size={18} />,
  //     },
  //     {
  //       title: 'OTP',
  //       label: '',
  //       href: '/otp',
  //       icon: <IconHexagonNumber5 size={18} />,
  //     },
  //   ],
  // },
  // {
  //   title: 'Users',
  //   label: '',
  //   href: '/users',
  //   icon: <IconUsers size={18} />,
  // },
  // {
  //   title: 'Requests',
  //   label: '10',
  //   href: '/requests',
  //   icon: <IconRouteAltLeft size={18} />,
  //   sub: [
  //     {
  //       title: 'Trucks',
  //       label: '9',
  //       href: '/trucks',
  //       icon: <IconTruck size={18} />,
  //     },
  //     {
  //       title: 'Cargos',
  //       label: '',
  //       href: '/cargos',
  //       icon: <IconBoxSeam size={18} />,
  //     },
  //   ],
  // },
  // {
  //   title: 'Analysis',
  //   label: '',
  //   href: '/analysis',
  //   icon: <IconChartHistogram size={18} />,
  // },
  // {
  //   title: 'Extra Components',
  //   label: '',
  //   href: '/extra-components',
  //   icon: <IconComponents size={18} />,
  // },
  // {
  //   title: 'Error Pages',
  //   label: '',
  //   href: '',
  //   icon: <IconExclamationCircle size={18} />,
  //   sub: [
  //     {
  //       title: 'Not Found',
  //       label: '',
  //       href: '/404',
  //       icon: <IconError404 size={18} />,
  //     },
  //     {
  //       title: 'Internal Server Error',
  //       label: '',
  //       href: '/500',
  //       icon: <IconServerOff size={18} />,
  //     },
  //     {
  //       title: 'Maintenance Error',
  //       label: '',
  //       href: '/503',
  //       icon: <IconBarrierBlock size={18} />,
  //     },
  //     {
  //       title: 'Unauthorised Error',
  //       label: '',
  //       href: '/401',
  //       icon: <IconLock size={18} />,
  //     },
  //   ],
  // },
  // {
  //   title: 'الإعدادات',
  //   label: '',
  //   href: '/settings',
  //   icon: <IconSettings size={18} />,
  // },
]
