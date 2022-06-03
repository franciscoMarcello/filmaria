/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import api from "../sevices/api";


type FilmesProps = {
  id:string;
  description:string;
  director:string;
  poster:string;
  rating:number |string;
  title:string
}
interface HomeProps{
  filmes:FilmesProps
}

export default function Home({filmes}:HomeProps){
  // useEffect(() => {
  //   async function getFilmes() {
     
  //     console.log(response.data);
  //     setFilmes(response.data)
  //   }
  //   getFilmes();
  // }, []);
  const [listFilmes,setListFilmes] = useState(filmes || [])
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {listFilmes.map((item) => (
            <a key={item.id} className="group">
              <div className="w-full h-64 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-700">{item.rating}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


export async function getServerSideProps(){
  const response = await api.get("/movie");

  return{
    props:{
      filmes:response.data
    }
  }

}