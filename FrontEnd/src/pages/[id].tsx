/* eslint-disable @next/next/no-img-element */
import api from "../sevices/api";
import { GetServerSidePropsContext } from "next";
import Header from "../components/Header";
import { useRouter } from 'next/router'

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
  _id
}: Filme) {

  async function ExcluirFilme(_id:string) {
    await api.delete(`/movie/${_id}`)
    router.push('/')
  }
  const router = useRouter()

  return (
    <div className="bg-gray-100 ">
      <Header />
      <div className="mx-auto mt-12  lx:flex md:flex  justify- w-4/5  sm:grid-cols-1  flex-row  ">
        <div className=" h-65 w-64 rounded-lg overflow-hidden lx:flex-2 ">
          <img
            className="w-full h-full object-center object-cover group-hover:opacity-75"
            src={poster}
            alt={title}
          />
        </div>
        <div className=" ml-12 lx:flex-1">
          <h3 className=" mb-5 text-5xl font-medium text-gray-900">{title}</h3>
          <h4>Diretor: <strong>{director}</strong></h4>
          <span >Nota no IMDB: <strong>{rating}</strong></span>
          <p className="mt-1 text-lg font-medium text-gray-700">
            {description}
          </p>
          <button onClick={()=> ExcluirFilme(_id)} className="bg-red-500 mt-5 justify-end hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Excluir</button>
        </div>
       
      </div>
      
    </div>
  );
}
