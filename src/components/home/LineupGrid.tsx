'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import artistasData from '@/data/artistas.json';

const LineupGrid: React.FC = () => {
    const artists = artistasData.sort((a, b) => a.order - b.order);

    return (
        <div className="hidden md:grid grid-cols-3 gap-8 pt-12">
            {artists.map((artista) => (
                <Link
                    key={artista.id}
                    href={`/artistas/${artista.slug}`}
                    className="group flex flex-col gap-4"
                >
                    <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                            src={artista.images.cartel}
                            alt={artista.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority={artists.indexOf(artista) < 3}
                            unoptimized
                        />
                        {/* Overlay for aesthetic */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-[18pt] font-bold uppercase transition-colors group-hover:text-primary">
                            {artista.name}
                        </h3>
                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                            ◆
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default LineupGrid;
