import {ListMoviesViewProps} from "@/pages/ListMovies/ListMovies.tsx";
import {ListMoviesHeader} from "@/pages/ListMovies/components/ListMoviesHeader";
import {ListMoviesInfo} from "@/pages/ListMovies/components/ListMoviesInfo";
import {ChipsFilters} from "./components/ChipsFilters";
import {SelectFiltersDesktop} from "@/pages/ListMovies/components/SelectFilters";
import {ListMoviesListsFilters, ListMoviesListsFiltersItem} from "@/pages/ListMovies/components/ListMoviesListsFilters";
import {ListMoviesList} from "@/pages/ListMovies/components/ListMoviesList";
import {Sorting} from "@/pages/ListMovies/components/Sorting";
import {ListMoviesPagination} from "./components/ListMoviesPagination";
import classes from "@/pages/ListMovies/styles.desktop.module.scss";



function ListMoviesDesktop({ listInfo, movies, countriesSelect, genresSelect }: ListMoviesViewProps) {


  return (
    <div className={classes.listMovies}>
      <ListMoviesHeader/>

      <div className={classes.sidebar}>
        <div className={classes.sidebarFilters}>
          <ChipsFilters category={listInfo.data?.category}/>
          <SelectFiltersDesktop
            countries={countriesSelect}
            genres={genresSelect}
          />
        </div>
      </div>

      <div className={classes.content}>
        <ListMoviesInfo listInfo={listInfo}/>

        <div className={classes.listHeader}>
          <ListMoviesListsFilters>
            <ListMoviesListsFiltersItem
              to="."
              title="Все"
              count={movies.data?.total}
            />
          </ListMoviesListsFilters>
          <Sorting/>
        </div>

        <ListMoviesList
          movies={movies.data?.docs}
          isSuccess={movies.isSuccess}
        />

        <ListMoviesPagination
          className={classes.pagination}
          page={movies.data?.page}
          pages={movies.data?.pages}
        />
      </div>
    </div>
  );
}

export default ListMoviesDesktop;