import Categories from '@/components/Categories';
// import React, { useEffect, useState } from 'react'

const Home = async () => {
  // const res = await fetch("https://opentdb.com/api_category.php");
  // const data = await res.json();

  const dummyCategories = [
      {
          name: "Ecchi",
          id: 1,
      },
      {
          name: "Harem",
          id: 2,
      },
      {
          name: "Isekai",
          id: 3,
      },
      {
          name: "Entertainment: Celebrities and Artists",
          id: 4,
      },
      {
          name: "Entertainment: Mathematics",
          id: 5,
      },
      {
          name: "Shounen",
          id: 6,
      },
      {
          name: "Ecchi",
          id: 7,
      },
      {
          name: "Harem",
          id: 8,
      },
      {
          name: "Isekai",
          id: 9,
      },
      {
          name: "Entertainment: Celebrities and Artists",
          id: 10,
      },
      {
          name: "Entertainment: Mathematics",
          id: 11,
      },
      {
          name: "Shounen",
          id: 12,
      },
      {
          name: "Ecchi",
          id: 13,
      },
      {
          name: "Harem",
          id: 14,
      },
      {
          name: "Isekai",
          id: 15,
      },
      {
          name: "Entertainment: Celebrities and Artists",
          id: 16,
      },
      {
          name: "Entertainment: Mathematics",
          id: 17,
      },
      {
          name: "Shounen",
          id: 18,
      },
      {
          name: "Ecchi",
          id: 19,
      },
      {
          name: "Harem",
          id: 20,
      },
      {
          name: "Isekai",
          id: 21,
      },
      {
          name: "Entertainment: Celebrities and Artists",
          id: 22,
      },
      {
          name: "Entertainment: Mathematics",
          id: 23,
      },
      {
          name: "Shounen",
          id: 24,
      }
  ];

  // return <Categories categories={data.trivia_categories} />;
  return <Categories categories={dummyCategories} />;
}

export default Home