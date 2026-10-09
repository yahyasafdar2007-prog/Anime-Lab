
import React from "react";

export default function AnimeCard({ anime }) {
    return (
        <article className="group min-w-0 p-3">
            <a
                href={anime.url}
                target="_blank"
                rel="noreferrer"
                className="block no-underline"
            >
                <figure className="mb-4 overflow-hidden rounded-2xl shadow-md">
                    <img
                        src={anime.image_url}
                        alt={anime.title}
                        className="block w-full aspect-[3/4] object-cover
                        transition-transform duration-300
                        group-hover:scale-105"
                    />
                </figure>

                <h3 className="text-base text-[#313131]">
                    {anime.title}
                </h3>
            </a>
        </article>
    );
}
