import Home from '../pages/home';
import RegisterUser from '../pages/RegisterUser';
import login from '../pages/login';


interface Route {
    path: string;
    component: React.FC;
}

const routes: Route[] = [
    {path: '/', component: Home},
    {path: '/register', component: RegisterUser},
    {path: '/login', component: login},
];

export default routes;