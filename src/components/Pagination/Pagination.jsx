import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.css';
import {FilmCardList} from '../FilmCardList/FilmCardList';

export function Pagination({ itemsPerPage, bestFilms }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = bestFilms.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(bestFilms.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % bestFilms.length;
        setItemOffset(newOffset);
    };

    return (
        <div className={'pagination'}>
            <h2 className={'pagination-header'}>Best films</h2>
            <ReactPaginate
                activeClassName={'item active'}
                containerClassName={'pagination-list'}
                pageClassName={'item pagination-page'}
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
            <FilmCardList films={currentItems} />
        </div>
    );
}