import Home from '../pages/home';
import RegisterUser from '../pages/RegisterUser';
import login from '../pages/login';
import CarSale from "../pages/car_sale";
import CarWash from "../pages/car_wash";
import Members from "../pages/members";
import UsersList from '../pages/usersList';
import CarWashList from '../pages/car_washList';
import CarSaleForm from '../pages/car_saleForm';

interface Route {
    path: string;
    component: React.FC;
}

const routes: Route[] = [
    {path: '/home', component: Home},
    {path: '/register', component: RegisterUser},
    {path: '/', component: login},
    {path: '/car-sale', component: CarSale},
    {path: '/car-wash', component: CarWash},
    {path: '/members', component: Members},
    {path: '/users', component: UsersList},
    {path: '/car-washList', component: CarWashList},
    {path: '/car-saleForm', component: CarSaleForm},
];

export default routes;