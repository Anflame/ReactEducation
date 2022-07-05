import { Suspense } from 'react';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppRouter } from './components/AppRouter/AppRouter';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
};
