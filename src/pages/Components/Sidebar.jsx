import React from "react";

export default function SideBar( {topAnime} ) {
    return (
        <div className="flex">
            <aside className="max-w-[250px] flex-[1_1_250px] pr-[16px]">
                <nav className="pr-[16px] pl-[16px]">
                    <h3 className="text-gray-800 text-[24px] mt-[4px] mb-[16px] font-bold">Top Anime</h3>
                    {topAnime.map(anime => (
                        <a className="text-left text-[16px] py-2 px-4 block text-[#888] mb-[16px] rounded-full bg-[#EEE] no-underline transition duration-400 hover:bg-[#313131] hover:text-[#AAA] " 
                            href={anime.url}
                            target="_blank"
                            key={anime.mal_id}
                            rel="noreferrer">
                            {anime.title}
                        </a>
                    ))}
                    
                </nav>
            </aside>
        </div>
    );
}