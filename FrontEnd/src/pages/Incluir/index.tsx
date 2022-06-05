import React,{useState, FormEvent} from "react";
import Header from "../../components/Header";
import api from "../../sevices/api";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Incluir() {
  const [nome,setNome] = useState('')
  const [diretor, setDiretor] = useState('')
  const [sinopsia, setSinopsia] = useState('')
  const [nota, setNota] = useState('')
  const [url, setUrl] = useState('')

  async function handleSubmit(e:FormEvent) {
    e.preventDefault()
    if(nome === "" || nota === "" || sinopsia === "" || url === "" || diretor === ""){
      toast.warn("Preencha todos os campos")
    }
    try{
      await api.post('/movie',{
        title:nome,
        rating:nota,
        description:sinopsia,
        director:diretor,
        poster:url
      })
      setNome('')
      setDiretor('')
      setNota('')
      setSinopsia('')
      setUrl('')
      toast.success("Filme cadastrado com sucesso")
    }catch(error:any ){
     const mensagem = error.response.data.errors[0]
     console.log(mensagem)
     toast.error('a')
    }
   

  }
  return (
    <div>
      <Header />

      <div className="md:grid md:grid-cols-4 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg mt-2 ml-2 font-medium leading-6 text-gray-900">
              Filme
            </h3>
            <p className="mt-1 text-sm ml-2 text-gray-600">
              Preencha as informação para adicionar um filme ao nosso catalago
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nome do Filme
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 p-2 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="Matrix"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nota no IMDB
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 p-2 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="1 a 5"
                        value={nota}
                        onChange={(e) => setNota(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Diretor
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 p-2 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="Christopher Nolan"
                        value={diretor}
                        onChange={(e) => setDiretor(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700"
                    >
                     URL do poster
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 p-2 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="https://"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </div>
                  </div>

                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Sinopsia
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="resize-none shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Neo e o escolhido ...."
                      value={sinopsia}
                      onChange={(e) => setSinopsia(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
