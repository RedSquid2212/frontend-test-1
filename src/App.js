import {MainPage} from './pages/MainPage/MainPage';
import {Route, Routes} from 'react-router-dom';
import {FilmPage} from './pages/FilmPage/FilmPage';
import {NotFoundPage} from './pages/NotFoundPage/NotFoundPage';

const AppRoutes = {
    Main: '/',
    Film: '/films/:id'
};

function App() {
    return (
        <Routes>
            <Route path={AppRoutes.Main} element={<MainPage />}/>
            <Route path={AppRoutes.Film} element={<FilmPage />}/>
            <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    );
}

export default App;
