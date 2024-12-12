import Home from '../pages/home';
import RegisterUser from '../pages/RegisterUser';
import login from '../pages/login';
import CarSale from "../pages/car_sale";
import CarWash from "../pages/car_wash";
import Members from "../pages/members";

interface Route {
    path: string;
    component: React.FC;
}

const routes: Route[] = [
    {path: '/', component: Home},
    {path: '/register', component: RegisterUser},
    {path: '/login', component: login},
    {path: '/car-sale', component: CarSale},
    {path: '/car-wash', component: CarWash},
    {path: '/members', component: Members},
];

export default routes;