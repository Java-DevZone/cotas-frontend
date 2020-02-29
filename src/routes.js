import Wallet from "./pages/wallet/Wallet";
import Dashbaord from "./pages/dashboard/Dashboard";
import Investments from './pages/investments/Investment';
import Profile from './pages/profile/Profile';
  
export const routes = [
  {path: '/wallet', component: Wallet},
  {path: '/investments', component: Investments},
  {path: '/dashboard', component: Dashbaord},
  {path: '/profile', component: Profile},
];
