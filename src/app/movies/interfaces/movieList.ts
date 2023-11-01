export interface MovieAPIResponse {
    page:          number;
    results:       MovieListItem[];
    total_pages:   number;
    total_results: number;
}

export interface MovieListItem {
    adult:             boolean;
    backdrop_path:     string;
    id:                number;
    title:             string;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    media_type:        MediaType;
    genre_ids:         number[];
    popularity:        number;
    release_date:      string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum MediaType {
    Movie = "movie",
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ko = "ko",
}

export enum MoviePageType  {
    trending    = "Trending",
    popular     = "Popular",
    bestRated   = "Best Rated",
}