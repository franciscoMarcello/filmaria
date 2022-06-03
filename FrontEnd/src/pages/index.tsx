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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-36 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Filmes</h2>

          <div className="mt-6 space-y-10 lg:space-y-10 lg:grid lg:grid-cols-1 lg:gap-x-6">
            <div className="group relative">
            <div className=" ">
                {listFilmes.map((item)=>(
            <>
                  <img
                    src={item.poster}
                    alt="teste."
                    className="w-max h-max object-center object-cover"
                    />
                   <h3 className="mt-2 text-2xl font-extrabold text-red-700">
                <a href="#">
                  <span className="absolute inset-0"></span>
                 {item.title}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 my-6">
                {item.description}
              </p>
                  </>
                ))}
               
              </div>
             
            </div>
          </div>
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