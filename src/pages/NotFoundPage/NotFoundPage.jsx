import {Link} from 'react-router-dom';

import './NotFoundPage.css';

export function NotFoundPage() {
    return (
        <div className={'not-found-page'}>
            <h1 className={'not-found-header'}>404 Страница не найдена</h1>
            <Link to={'/'} className={'not-found-link'}>Перейти на главную</Link>
        </div>
    );
}