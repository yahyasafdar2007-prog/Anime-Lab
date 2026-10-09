import React from "react";
import AnimeCard from "./AnimeCard";

export default function MainContent(props) {
    return (
        <main className="flex-[1_1_0%] px-4 pt-4 self-start">
            <div className="flex justify-end">
                <form className="w-full max-w-[400px]" onSubmit={props.HandleSearch}>
                    <input
                        type="text"
                        required
                        placeholder="Search anime..."
                        value={props.search}
                        className="appearance-none bg-[#EEE] outline-none border-none block w-full max-w-[400px] p-4 rounded-full transition duration-[400ms] placeholder:text-[#888] focus:bg-[#313131] focus:text-white valid:bg-[#313131] valid:text-white"
                        onChange={e => props.setSearch(e.target.value)}
                    />
                </form>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {props.animeList.map((anime) => (
                    <AnimeCard
                        key={anime.mal_id}
                        anime={anime}
                    />
                ))}
            </div>

        </main>
    );
}