import './FilmCard.css';
import {Link} from 'react-router-dom';

export function FilmCard({imageSource, title, filmId}) {
    return (
        <div className={'film-card'}>
            <Link to={`/films/${filmId}`}>
                <div>
                    <img src={imageSource} alt={'film poster'} className={'film-card-image'}/>
                </div>
            </Link>
            <div className={'title'}>
                {title}
            </div>
        </div>
    );
}