import React, { useEffect, useState } from "react";
import "./home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const apiKey = "ce031c8070b7aa9ca9b4eb028eb5c979";
const url = "https://api.themoviedb.org/3/movie";
const urlGenre = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const popular = "popular";
const nowPlaying = "now_playing";
const topRated = "top_rated";
const imgUrl = "https://image.tmdb.org/t/p/w500";

const Card = ({ imgSrc }) => {
  return <img className="card" src={imgSrc} alt="card img" />;
};

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, id) => {
          return <Card imgSrc={imgUrl + item.poster_path} key={id} />;
        })}
      </div>
    </div>
  );
};

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  console.log(genre);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const response = await axios.get(
        `${url}/${upcoming}?api_key=${apiKey}&page=2`
      );
      try {
        setUpcomingMovies(response.data && response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchPopular = async () => {
      const response = await axios.get(`${url}/${popular}?api_key=${apiKey}`);
      try {
        setPopularMovies(response.data && response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchNowPlaying = async () => {
      const response = await axios.get(
        `${url}/${nowPlaying}?api_key=${apiKey}&page=2`
      );
      try {
        setNowPlayingMovies(response.data && response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTopRated = async () => {
      const response = await axios.get(`${url}/${topRated}?api_key=${apiKey}`);
      try {
        setTopRatedMovies(response.data && response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    const getAllGenre = async () => {
      const response = await axios.get(
        `${urlGenre}/genre/movie/list?api_key=${apiKey}`
      );
      try {
        setGenre(response.data && response.data.genres);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUpcoming();
    fetchPopular();
    fetchNowPlaying();
    fetchTopRated();
    getAllGenre();
  }, []);

  const imgArrayIndex = Math.floor(Math.random() * 10);

  return (
    <section className="homeMain">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[imgArrayIndex]
            ? `url(${`${imgUrl}/${
                popularMovies[imgArrayIndex] &&
                popularMovies[imgArrayIndex].poster_path
              }`})`
            : "none",
        }}
      >
        <h1>
          {popularMovies[imgArrayIndex] &&
            popularMovies[imgArrayIndex].original_title}{" "}
        </h1>
        <p>
          {popularMovies[imgArrayIndex] &&
            popularMovies[imgArrayIndex].overview}
        </p>
        <div>
          <button>
            <BiPlay /> Play
          </button>
          <button>
            My List <AiOutlinePlus />
          </button>
        </div>
      </div>

      <Row title="Upcoming Movies" arr={upcomingMovies} />
      <Row title="Popular on Netflix" arr={popularMovies} />
      <Row title="Now Playing" arr={nowPlayingMovies} />
      <Row title="Top Rated" arr={topRatedMovies} />
      {/* <Row title="TV Shows" arr={upcomingMovies} />
      <Row title="Movies" arr={upcomingMovies} />
      <Row title="Recently Added" arr={upcomingMovies} />
      <Row title="My List" arr={upcomingMovies} /> */}

      <div className="genreBox">
        {genre.map((item, id) => {
          return (
            <Link key={id} to={`/genre/${item.id}`}>
              {" "}
              {item.name}{" "}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
