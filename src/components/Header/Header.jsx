import './Header.css';
import {Link} from 'react-router-dom';

export function Header() {
    return (
        <header className={'app-header'}>
            <Link to={'/'} className={'app-header-link'}>
                <span>Movie directory</span>
            </Link>
        </header>
    );
}