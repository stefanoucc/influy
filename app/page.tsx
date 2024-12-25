import Image from "next/image"
import Link from "next/link"
import { Globe, Zap, BarChart3, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-bold text-pink-400">
            Influy
          </Link>
        </nav>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center py-16 sm:py-20">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt=""
                  className="max-w-lg"
                />
              </div>
              <div className="relative">
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                  Bienvenido a <span className="text-pink-400">Influy</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                  La plataforma que conecta marcas con creadores para crear campañas de marketing impactantes.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/influencer-signup"
                    className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-pink-200 text-pink-600 hover:bg-pink-300 transition-colors duration-200"
                  >
                    Soy Creador
                  </Link>
                  <Link
                    href="/brand-signup"
                    className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-green-200 text-green-600 hover:bg-green-300 transition-colors duration-200"
                  >
                    Tengo una Marca
                  </Link>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-pink-400">1000+</p>
                <p className="mt-2 text-sm text-gray-600">Creadores Activos</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-pink-400">500+</p>
                <p className="mt-2 text-sm text-gray-600">Marcas Registradas</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-pink-400">2000+</p>
                <p className="mt-2 text-sm text-gray-600">Campañas Exitosas</p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16 sm:py-20">
            <h2 className="text-3xl font-bold text-center mb-16">
              Conectamos Marcas con Creadores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 to-pink-50 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-pink-200 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Alcance Global</h3>
                  <p className="text-gray-600">
                    Conecta con creadores de todo el mundo para amplificar tu mensaje.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 to-pink-50 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-pink-200 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Colaboración Eficiente</h3>
                  <p className="text-gray-600">
                    Gestiona tus proyectos y comunicaciones en un solo lugar, ahorrando tiempo y recursos.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 to-pink-50 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-pink-200 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Métricas Precisas</h3>
                  <p className="text-gray-600">
                    Analiza el rendimiento de tus campañas con datos detallados y en tiempo real.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-200 to-pink-50 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-pink-200 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Comunicación Directa</h3>
                  <p className="text-gray-600">
                    Chatea directamente con los creadores para asegurar que tu visión se transmita correctamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2023 Influy. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

