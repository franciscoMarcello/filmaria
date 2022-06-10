/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React, { FormEvent, useState } from "react";
import Header from "../components/Header";
import api from "../sevices/api";
import { AiFillStar } from "react-icons/ai";
import Head from 'next/head'
import {FaSearch} from 'react-icons/fa'
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
  const [pesquisa, setPesquisa] = useState('')

  async function Pesquisa() {

    const response = await api.get('/movie/find',{
      title:pesquisa
    })
    console.log(response)
    setListFilmes(response.data)

  }
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Filmaria</title>
      </Head>
      <Header />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-5xl lg:px-8">
      
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Nome do filme
      </label>
      <input type="seach"className="shadow mr-3 appearance-none border border-red-500 rounded w-64  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Matrix" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)}/>
      <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={Pesquisa}>
        <FaSearch size={20} color="#fff"/>
      </button>
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
