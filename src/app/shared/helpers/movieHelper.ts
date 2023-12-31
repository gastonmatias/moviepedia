import { MovieAPIResponse, MoviePageType } from "src/app/movies/interfaces/movieList"


// export const setPaginatorProperties = (apiResponse:MovieAPIResponse) => {
export const setPaginatorProperties = (apiResponse:any) => {

    //! NOTA: API moviedb LIMITA busqueda a 20 items x pagina con MAXIMO 500 paginas, luego de eso arroja error "Invalid page: Pages start at 1 and max at 500"
    const totalRecords = apiResponse.total_results > 500*20 ? 500*20 : apiResponse.total_results 
    const rows = 20 //! NOTA: 20 en duraceli para EVITAR problemas por inconsistencia nro de rows al cambiar de pagina (nro pages en paginator se vuelve loco)!
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