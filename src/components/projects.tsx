const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKEkZ593Y2TWHTcxptn2H4Uf0wOXzhj1tQ&s',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKEkZ593Y2TWHTcxptn2H4Uf0wOXzhj1tQ&s',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKEkZ593Y2TWHTcxptn2H4Uf0wOXzhj1tQ&s',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKEkZ593Y2TWHTcxptn2H4Uf0wOXzhj1tQ&s',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDKEkZ593Y2TWHTcxptn2H4Uf0wOXzhj1tQ&s',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]

export default function Projects() {
  return (
    <>
      <div className="w-screen flex justify-center items-center text-center mt-12 sm:mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-0">
            <h2 className="text-2xl font-bold text-gray-900">Principais Projetos</h2>

            <div className="mt-6 space-y-8 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative pb-0 sm:pb-6">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      alt={callout.imageAlt}
                      src={callout.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <p className="mt-4 text-base font-semibold text-gray-900">{callout.description}</p>
                  <h3 className="text-sm text-gray-500">
                    <a href={callout.href}>
                      {callout.name}
                      <span className="absolute inset-0" />
                    </a>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}