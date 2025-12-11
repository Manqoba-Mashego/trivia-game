"use client";
import TriviaCard from '@/components/TriviaCard';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [sessionToken, setSessionToken] = useState("");
  const [categories, setCategories] = useState([]);
  const fetchSessionToken = async () => {
    const res = await fetch("https://opentdb.com/api_token.php?command=request");
    const data = await res.json();  
    console.log("Session Token: ", data);
  }

  const fetchCategories = async () => {
    const res = await fetch("https://opentdb.com/api_category.php");
    const data = await res.json();
    console.log("Categories", data.trivia_categories);
    setCategories(data.trivia_categories);
  }

  const slugify = (str) => str.replace(/&/g, "and").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");


  useEffect(()=>{
    // fetchSessionToken();
    fetchCategories();
  }, [])

  return (
    <div className='w-[80%] mx-auto text-center'>
      <h1 className=' mt-15 text-4xl font-semibold'>Choose a category</h1>
      {/* category cards */}
        {categories.length > 0 && 
        <div className='grid lg:grid-cols-3 xl:grid-cols-4 xl:gap-2 mt-8'>
          {categories.map((cat)=> (
            <Link href={`/category/${cat.id}`} key={cat.id}>
              <TriviaCard category={cat.name} categoryId={cat.id}/>
            </Link>
          ))}
        </div>
        }
    </div>
  )
}

export default Home