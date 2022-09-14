import Home from '~/pages/Home/Home';
import Collection from '~/pages/Collection/Collection';
import Blog from '~/pages/Blog/Blog';
import Test from '~/pages/Test/Test';
import config from '~/configs';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.collection,
        component: Collection,
    },
    {
        path: config.routes.blog,
        component: Blog,
    },
    {
        path: config.routes.test,
        component: Test,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
