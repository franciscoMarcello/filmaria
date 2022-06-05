/* eslint-disable @next/next/no-img-element */
import api from "../sevices/api";
import { GetServerSidePropsContext } from "next";
import Header from "../components/Header";
interface Filme {
  _id: string;
  description: string;
  title: string;
  poster: string;
  director: string;
  rating: string | number;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.id;
  const response = await api.get(`movie/${id}`);
  const Filme = response.data;
  return {
    props: Filme,
  };
}

export default function Filme({
  title,
  poster,

  description,
  director,
  rating,
}: Filme) {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="grid-cols-2 mx-auto flex items-center justify-center w-4/5 mt-36 sm:grid-cols-1   ">
        <div className="w-4/5 h-4/5 aspect-w-1 aspect-h-1  rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            className="w-full h-full object-center object-cover group-hover:opacity-75"
            src={poster}
            alt={title}
          />
        </div>
        <div className=" ml-12">
          <h3 className=" mb-5 text-5xl font-medium text-gray-900">{title}</h3>
          <p className="mt-1 text-lg font-medium text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
