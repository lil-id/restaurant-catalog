import Main from '../views/pages/mainView';
import Detail from '../views/pages/detailView';
import Favorite from '../views/pages/FavoriteView';

const routes = {
  '/': Main, // default page
  '/home': Main,
  '/favorites': Favorite,
  '/detail/:id': Detail,
};

export default routes;
