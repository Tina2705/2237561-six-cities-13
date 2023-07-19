import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../const';
import MainScreen from '../pages/main/main';
import LoginScreen from '../pages/login/login';
import FavoritesPage from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import NotFoundScreen from '../pages/not-found/not-found';
import PrivateRoute from './private-route/private-route';
import {TOffers} from '../types/offer';

type AppScreenProps = {
  offersCount: number;
  offers: TOffers;
};

function App({ offersCount, offers }: AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen offersCount={offersCount} offers={offers} />}
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<Offer />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
