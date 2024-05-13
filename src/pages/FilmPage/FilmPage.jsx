import {Header} from '../../components/Header/Header';
import {FilmDescription} from '../../components/FilmDescription/FilmDescription';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getFilmById, getSimilarFilms} from '../../api/api';

import './FilmPage.css';
import {FilmCardList} from '../../components/FilmCardList/FilmCardList';
import {LoadingPage} from '../LoadingPage/LoadingPage';
import {NotFoundPage} from '../NotFoundPage/NotFoundPage';

export function FilmPage() {
    const id = useParams().id;
    const [film, setFilm] = useState(null);
    const [similarFilms, setSimilarFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchFunc = async () => {
            if (id) {
                const response = await getFilmById(id);
                setFilm(response);
                setIsLoading(false)
            }
        };

        fetchFunc();
    }, [id]);

    useEffect(() => {
        const fetchFunc = async () => {
            if (id) {
                const response = await getSimilarFilms(id);
                setSimilarFilms(response);
            }
        }

        fetchFunc();
    }, [id]);

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!film) {
        return <NotFoundPage />;
    }

    return (
        <>
            <Header/>
            <h2 className={'film-title'}>
                {`${film?.rating} ${film?.name}`}
            </h2>
            <div className={'film'}>
                <FilmDescription film={film}/>
                <div className={'film-poster-container'}>
                    <img src={film?.posterImage} alt={'film poster'} className={'film-poster'}/>
                </div>
            </div>
            <h2 className={'similar-films-header'}>Similar films</h2>
            <FilmCardList films={similarFilms}/>
        </>
    );
}