"use client"

import { useState } from "react"
import Layout from "../components/layout"

export default function MarcaSignup() {
  const [formData, setFormData] = useState({
    nombreEmpresa: "''",
    email: "''",
    password: "''",
    sitioWeb: "''",
    industria: "''",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí normalmente enviarías los datos al backend
    console.log(formData)
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto mt-10">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl mb-6 text-center text-green-400">Registro de Marca</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombreEmpresa">
              Nombre de la Empresa
            </label>
            <input
              className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-gray-800"
              id="nombreEmpresa"
              type="text"
              name="nombreEmpresa"
              value={formData.nombreEmpresa}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-gray-800"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-gray-800"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sitioWeb">
              Sitio Web
            </label>
            <input
              className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-gray-800"
              id="sitioWeb"
              type="url"
              name="sitioWeb"
              value={formData.sitioWeb}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="industria">
              Industria
            </label>
            <input
              className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-gray-800"
              id="industria"
              type="text"
              name="industria"
              value={formData.industria}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-200 hover:bg-green-300 text-green-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

