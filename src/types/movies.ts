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
    total_pages: number;
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

export type Video = {
    id: number;
    results?: [
        {
            iso_639_1: string;
            iso_3166_1: string;
            name: string;
            key: string;
            site: string;
            size: number;
            type: string;
            official: boolean;
            published_at: string;
            id: string;
        }
    ]
}

export type MoviePorId = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
    };
    budget: number;
    genres: [
      {
        id: number;
        name: string;
      }
    ];
    homepage: string;
    id?: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: [
      {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
      }
    ];
    production_countries: [
      {
        iso_3166_1: string;
        name: string;
      }
    ];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: [
      {
        english_name: string;
        iso_639_1: string;
        name: string;
      }
    ];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export const formatDate = (date?: string) => {
  let separateDate: string[] | undefined = date?.split('-');

  let dateFormat: string = `${separateDate?.[2]}/${separateDate?.[1]}/${separateDate?.[0]}`;

  return dateFormat;
}