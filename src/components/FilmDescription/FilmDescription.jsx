import './FilmDescription.css';

export function FilmDescription({film}) {
    return (
        <section className={'film-full-info'}>
            <div className={'film-annotation'}>
                {film?.description}
            </div>
            <div className={'film-description-info'}>
                <p>
                    {`Duration: ${film?.runTime} minutes`}
                </p>
                <p>
                    {`Popularity: ${film?.scoresCount}`}
                </p>
                <p>
                    {`Released: ${film?.released}`}
                </p>
                <p>
                    {`Genre: ${film?.genre}`}
                </p>
            </div>
        </section>
    );
}