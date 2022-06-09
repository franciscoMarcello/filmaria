/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header";
import api from "../sevices/api";
import { AiFillStar } from "react-icons/ai";
import Head from 'next/head'
type FilmesProps = {
  _id: string;
  description: string;
  director: string;
  poster: string;
  rating: number | string;
  title: string;
};
interface HomeProps {
  filmes: FilmesProps;
}

export default function Home({ filmes }: HomeProps) {
  const [listFilmes, setListFilmes] = useState(filmes || []);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Filmaria</title>
      </Head>
      <Header />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {listFilmes.map((item) => (
            <Link key={item._id} href={`/${item._id}`}>
              <a className="group">
                <div className="w-full h-4/5 aspect-w-1 aspect-h-1  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={item.poster}
                    alt={item.title}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-3xl font-medium text-gray-900">
                  {item.title}
                </h3>
                <div className="flex items-center ">
                  <AiFillStar size={25} color="red" className="mr-2" />
                  <p className="mt-1 text-lg font-medium text-gray-700">
                    {item.rating}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await api.get("/movie");

  return {
    props: {
      filmes: response.data,
    },
  };
}
