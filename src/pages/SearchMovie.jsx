import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../Components/CardComponent/popularcard.css";
import { useDispatch, useSelector } from "react-redux";
import getSearchData from "../redux/actions/searchActions";
const SearchMovies = () => {
    const dispatch = useDispatch();
    const searchedMovies = useSelector((state) => state.search.searchedMovies);
    const totalPages = useSelector((state) => state.search.totalPages);

    const [searchParams] = useSearchParams();
    const pageValue = parseInt(searchParams.get("page"), 10) || 1;
    const queryValue = searchParams.get("query") || "wait";

    useEffect(() => {
        dispatch(getSearchData(queryValue, pageValue));
    }, [dispatch, queryValue, pageValue]);

    const nextPage = pageValue + 1;
    const prevPage = pageValue - 1;

    if (searchedMovies.length === 0) {
        return <h1 className="mt-5 ms-5 text-white">Loading....</h1>;
    }

    if (queryValue === "wait") {
        return <h1 className="mt-5 ms-5 text-white">Waiting For Data...</h1>;
    }

    return (
        <>
            <h1 className="mt-5 mx-5 text-light">
                Results for <q>{queryValue}</q>
            </h1>
            <div className="d-flex justify-content-center flex-wrap gap-3">
                {searchedMovies.map((movie) => (
                    <div
                        key={movie?.id}
                        className="card text-light bg-dark responsive-image custom-anim"
                    >
                        <Link
                            to={`/details/${movie.id}`}
                            className="text-decoration-none text-light"
                        >
                            <LazyLoadImage
                                alt={movie.title}
                                width={"100%"}
                                height={"100%"}
                                src={`${
                                    import.meta.env.VITE_VERCEL_IMG_URL_ORIGINAL
                                }${movie.poster_path}`}
                                className="rounded"
                                style={{
                                    objectFit: "cover",
                                    background: "#EEEEEE",
                                }}
                                onError={(e) => {
                                    e.target.src = "/Placeholder.svg";
                                }}
                            />
                            <div
                                key={movie?.id}
                                className="card-img-overlay d-flex flex-column justify-content-between"
                            >
                                <div className="card-text m-0">
                                    <span>
                                        <small className="badge bg-danger me-2">
                                            ⭐{" "}
                                            {parseFloat(
                                                movie?.vote_average
                                            ).toFixed(1)}{" "}
                                            / 10
                                        </small>
                                    </span>
                                </div>
                                <div className="custom-text rounded text-center description">
                                    <h5 className="card-title m-0 ">
                                        {movie.title}
                                    </h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center mt-3">
                {prevPage > 0 && (
                    <Link
                        to={`/search?query=${queryValue}&page=${prevPage}`}
                        className="btn btn-primary me-2"
                    >
                        Previous Page
                    </Link>
                )}

                {nextPage <= totalPages && (
                    <Link
                        to={`/search?query=${queryValue}&page=${nextPage}`}
                        className="btn btn-primary"
                    >
                        Next Page
                    </Link>
                )}
            </div>
        </>
    );
};

export default SearchMovies;
