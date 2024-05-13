import {FilmCard} from '../FilmCard/FilmCard';
import './FilmCardList.css';

export function FilmCardList({films}) {
    return (
        <div className={'film-list'}>
            {films && films?.map(film => <FilmCard
                key={film.id}
                imageSource={film.previewImage}
                title={film.name}
                filmId={film.id}
            />)}
        </div>
    );
}