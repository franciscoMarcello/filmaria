/* eslint-disable @next/next/no-img-element */
import api from "../sevices/api";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from 'next/router'
import { json } from "stream/consumers";


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
  async function AlterarFilme(_id:string) {
    router.push({pathname:"/Alterar/[id]",
     query:{id:_id}})
  }
  const router = useRouter()

  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Detalhes de {title}</title>
      </Head>
      <Header />
      <div className="mx-auto mt-12  lx:flex md:flex  justify- w-4/5  sm:grid-cols-1  flex-row  ">
        <div className=" h-65 w-65 rounded-lg overflow-hidden lx:flex-2 ">
          <img
            className="w-full h-full object-center object-cover group-hover:opacity-75"
            src={poster}
            alt={title}
          />
        </div>
        <div className=" ml-12 lx:flex-1">
          <h3 className=" mb-5 text-5xl font-medium text-gray-900">{title}</h3>
          <h4 className="text-2xl">Diretor: <strong>{director}</strong></h4>
          <span className="text-2xl" >Nota no IMDB: <strong>{rating}</strong></span>
          <h4 className="mt-3 text-2xl">Sinopsia:</h4>
          <p className=" text-lg font-medium text-gray-700">
            {description}
          </p>
          <div className="flex justify-end">
          <button onClick={()=> ExcluirFilme(_id)} className="bg-red-500 mt-5  hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Excluir</button>
          <button onClick={()=> AlterarFilme(_id)} className="bg-blue-500 mt-5 ml-3  hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Alterar</button>
          </div>
        </div>
       
      </div>
      
    </div>
  );
}
