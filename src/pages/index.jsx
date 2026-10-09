import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import SideBar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";

export default function Index() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  // Get Top Anime
  const GetTopAnime = async () => {
    try {
      const response = await fetch(
        "https://kitsu.io/api/edge/anime?page[limit]=5&sort=popularityRank"
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();

      setTopAnime(
        result.data.map((anime, index) => ({
          mal_id: anime.id,
          rank: index + 1,
          title: anime.attributes.canonicalTitle,
          url: `https://kitsu.io/anime/${anime.id}`,
          image_url: anime.attributes.posterImage?.small
        }))
      );
    } catch (error) {
      console.error("Top anime fetch failed:", error);
    }
  };

  // Handle Search
  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };

  // Fetch Anime by Search Query
  const FetchAnime = async (query) => {
    if (!query.trim()) {
      setAnimeList([]);
      return;
    }

    try {
      const response = await fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(query)}&page[limit]=10&sort=popularityRank`
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();

      setAnimeList(
        result.data.map((anime) => ({
          mal_id: anime.id,
          title: anime.attributes.canonicalTitle,
          url: `https://kitsu.io/anime/${anime.id}`,
          image_url: anime.attributes.posterImage?.small,
          synopsis: anime.attributes.synopsis,
          rating: anime.attributes.averageRating
        }))
      );
    } catch (error) {
      console.error("Anime search failed:", error);
      setAnimeList([]);
    }
  };

  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <div>
      <Header />

      <div className="flex flex-row">
        <SideBar topAnime={topAnime} />

        <MainContent
          HandleSearch={HandleSearch}
          setSearch={setSearch}
          search={search}
          animeList={animeList}
        />
      </div>
    </div>
  );
}