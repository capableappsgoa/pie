const stats = [
    { id: 1, name: 'Registered users', value: '44' },
    { id: 2, name: 'Property transactions', value: '$119' },
    { id: 3, name: 'User nationalities', value: '46' },
    { id: 3, name: 'Rental income paid', value: '90' },
  ]
  
  export default function GlobalRankCounter() {
    return (
      <div className="bg-white py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first flex text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value} <p className=" text-green-600">M+</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  