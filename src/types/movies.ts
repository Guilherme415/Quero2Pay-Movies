export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type MoviePage = {
    results?: Movie[];
    dates: string;
    page: number;
    total_page: number;
    total_result: number;
}

export type SearchValue = {
    searchValue: string;
}

export type Genres = {
    results?: Genre[];
}

export type Genre = {
    genres: [
        {
            id: number;
            name: string;
        },
    ]
}