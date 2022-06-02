/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import React, { useEffect } from "react";
import Header from "../components/Header";
import api from "../sevices/api";

const Home: NextPage = () => {
  useEffect(() => {
    async function getFilmes() {
      const response = await api.get("/movie");
      console.log(response.data);
    }
    getFilmes();
  }, []);
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-36 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Filmes</h2>

          <div className="mt-6 space-y-10 lg:space-y-10 lg:grid lg:grid-cols-1 lg:gap-x-6">
            <div className="group relative">
              <div className=" ">
                <img
                  src="https://images.alphacoders.com/614/614131.jpg"
                  alt="teste."
                  className="w-max h-max object-center object-cover"
                />
              </div>
              <h3 className="mt-2 text-2xl font-extrabold text-red-700">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Clube da luta
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 my-6">
                A depressed man (Edward Norton) suffering from insomnia meets a
                strange soap salesman named Tyler Durden (Brad Pitt) and soon
                finds himself living in his squalid house after his perfect
                apartment is destroyed. The two bored men form an underground
                club with strict rules and fight other men who are fed up with
                their mundane lives. Their perfect partnership frays when Marla
                (Helena Bonham Carter), a fellow support group crasher, attracts
                Tylers attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
