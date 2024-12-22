import Layout from "'../components/layout'"
import Link from "'next/link'"

// This would typically come from an API call
const campaigns = [
  { id: 1, title: "'Summer Fashion Campaign'", brand: "'FashionCo'", budget: "'$5000'" },
  { id: 2, title: "'Fitness App Promotion'", brand: "'FitLife'", budget: "'$3000'" },
  { id: 3, title: "'New Smartphone Launch'", brand: "'TechGiant'", budget: "'$10000'" },
]

export default function Campaigns() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Available Campaigns</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {campaigns.map((campaign) => (
              <li key={campaign.id}>
                <Link href={`/campaigns/${campaign.id}`} className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-blue-600 truncate">{campaign.title}</p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {campaign.budget}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          {campaign.brand}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

