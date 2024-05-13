import {Header} from '../../components/Header/Header';
import {Pagination} from '../../components/Pagination/Pagination';
import {useEffect, useState} from 'react';
import {getFilteredFilms} from '../../api/api';
import {LoadingPage} from '../LoadingPage/LoadingPage';

export function MainPage() {
    const [bestFilms, setBestFilms] = useState([]);

    useEffect(() => {
        const fetchFunc = async () => {
            const response = await getFilteredFilms();
            setBestFilms(response ?? []);
        }

        fetchFunc();
    }, []);

    if (!bestFilms.length) {
        return <LoadingPage />
    }

    return (
        <>
            <Header/>
            <Pagination itemsPerPage={8} bestFilms={bestFilms}/>
        </>
    );
}