import { MovieAPIResponse, MoviePageType } from "src/app/movies/interfaces/movieList"


export const setPaginatorProperties = (apiResponse:MovieAPIResponse) => {

    // spoiler: API moviedb LIMITA busqueda a 20 items con MAXIMO 500 paginas, luego de eso arroja error "Invalid page: Pages start at 1 and max at 500"
    const totalRecords = apiResponse.total_results > 500*20 ? 500*20 : apiResponse.total_results 
    const rows = apiResponse.results.length // spoiler: siempre es 20

    return {totalRecords, rows}
}

export const getPageType = (currentPath:any) => {

    let pageType 
    
    if (currentPath === 'trending') {
      pageType = MoviePageType.trending
      // pageType = 'Trending'
    } else if (currentPath === 'popular') {
      // pageType = 'Popular'
      pageType = MoviePageType.popular
    } else if (currentPath === 'best-rated') {
      // pageType = 'Best Rated'
      pageType = MoviePageType.bestRated
    }
    
    return pageType
}

export const setPageTitle = (pageType: string) => {
    
    let title

    if (pageType === 'trending') {
        pageType = 'trending'
      } else if (pageType === 'popular') {
        pageType = 'popular'
      } else if (pageType === 'best-rated') {
        pageType = 'best-rated'
      }
      
      return title
}