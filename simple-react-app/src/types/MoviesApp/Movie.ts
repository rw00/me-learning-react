// response structure from api.themoviedb.org
export type Movie = {
  readonly id: string;
  readonly title: string;
  readonly release_date: string;
  readonly poster_path: string;
};
