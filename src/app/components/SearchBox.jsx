"use client";

import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function SearchBox() {

const router = useRouter();

    const [search, setSearch] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
    }
  return (
    <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
        <label htmlFor="search" className='sr-only'>Search</label>
        <input type="text" id="search" placeholder='Search...' className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1' 
        value={search} onChange={e => setSearch(e.target.value)}/>

        {/* 검색 버튼은 search 상태가 비어있을 때 비활성화됩니다. 사용자가 검색어를 입력해야만 버튼이 활성화되어 검색을 수행할 수 있습니다. */}
        <button type="submit" className='text-amber-600 disabled:text-gray-400' disabled={!search}>Search</button>
    </form>
  )
}
