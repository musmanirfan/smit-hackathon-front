"use client"

import { ChevronRight } from '@mui/icons-material'
import React from 'react'
import { useRouter } from 'next/navigation';
import { BannerProps } from '@/app/types/bannerPropTypes';

export default function InnerPageBanner({ currentPage, previousPage }: BannerProps) {
    const route = useRouter();
    return (
        <>
            <div
                className="h-[60vh] sm:mt-[70px] mt:50px bg-cover bg-center md:pl-24 pl-5 justify-center flex flex-col gap-3"
                style={{ backgroundImage: "url('/innerPage/banner.jpg')" }}
            >
                <h1 className="md:text-white text-black font-bold text-4xl md:text-6xl">{currentPage}</h1>
                <div className="flex">
                    <h3 className='md:text-white text-black text-2xl cursor-pointer font-bold' onClick={() => { route.push("/") }}>{previousPage}</h3>
                    <ChevronRight className='hidden md:inline' style={{ color: 'white', fontSize: 30}} />
                    <ChevronRight className='inline md:hidden' style={{ color: 'black', fontSize: 33}} />
                    <h3 className='text-[#16A34A] font-bold text-2xl text-center'>{currentPage}</h3>
                </div>
            </div>
        </>
    );
}
