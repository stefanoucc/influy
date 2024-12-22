import Layout from "./components/layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Bienvenido a <span className="text-pink-400">Influy</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            La plataforma que conecta marcas con influencers para crear campañas de marketing impactantes.
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <Link
              href="/influencer-signup"
              className="inline-flex items-center px-6 py-3 border border-gray-200 border-transparent text-base font-medium rounded-md text-white bg-pink-300 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 dark:border-gray-800"
            >
              Soy Influencer
            </Link>
            <Link
              href="/brand-signup"
              className="inline-flex items-center px-6 py-3 border border-gray-200 border-transparent text-base font-medium rounded-md text-white bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:border-gray-800"
            >
              Tengo una Marca
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Conectamos Marcas con Influencers
          </h2>
          <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-400 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 00-9-9m9 9H3m9 9a9 01-9-9m9 9c1.657 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 019-9" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Alcance Global</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Conecta con influencers de todo el mundo para amplificar tu mensaje.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-400 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Colaboración Eficiente</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Gestiona tus proyectos y comunicaciones en un solo lugar, ahorrando tiempo y recursos.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-400 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 0M18 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Métricas Precisas</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Analiza el rendimiento de tus campañas con datos detallados y en tiempo real.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-400 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 012-2h14a2 012 2v8a2 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Comunicación Directa</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Chatea directamente con los influencers para asegurar que tu visión se transmita correctamente.
              </dd>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

