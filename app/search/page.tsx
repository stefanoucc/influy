'use client'

import { useState } from "react"
import Layout from "../components/layout"

// This would typically come from an API call
const creators = [
  { id: 1, name: "'John Doe'", category: "'Moda'", followers: 100000, location: "'Nueva York'" },
  { id: 2, name: "'Jane Smith'", category: "'Fitness'", followers: 500000, location: "'Los Ángeles'" },
  { id: 3, name: "'Mike Johnson'", category: "'Tecnología'", followers: 250000, location: "'San Francisco'" },
]

export default function Search() {
  const [filters, setFilters] = useState({
    category: "''",
    minFollowers: "''",
    location: "''",
  })

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const filteredCreators = creators.filter((creator) => {
    return (
      (filters.category === "''" || creator.category === filters.category) &&
      (filters.minFollowers === "''" || creator.followers >= parseInt(filters.minFollowers)) &&
      (filters.location === "''" || creator.location === filters.location)
    )
  })

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Buscar Creadores</h1>
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Categoría
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value="">Todas las Categorías</option>
              <option value="Moda">Moda</option>
              <option value="Fitness">Fitness</option>
              <option value="Tecnología">Tecnología</option>
            </select>
          </div>
          <div>
            <label htmlFor="minFollowers" className="block text-sm font-medium text-gray-700">
              Seguidores Mínimos
            </label>
            <input
              type="number"
              name="minFollowers"
              id="minFollowers"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={filters.minFollowers}
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Ubicación
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={filters.location}
              onChange={handleFilterChange}
            />
          </div>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {filteredCreators.map((creator) => (
              <li key={creator.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-blue-600 truncate">{creator.name}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {creator.followers.toLocaleString()} seguidores
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {creator.category}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>{creator.location}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

