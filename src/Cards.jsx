const CARDS = [
  { title: 'Photos', image: '/images/photos.jpg' },
  { title: 'Code', image: '/images/code.jpg' },
  { title: 'Sports', image: '/images/sports.jpg' },
  { title: 'Stocks', image: '/images/stocks.jpg' },
  { title: 'Guitar', image: '/images/guitar.jpg' },
]

export default function Cards() {
  return (
    <section className="cards">
      {CARDS.map(({ title, image }) => (
        <article key={title} className="card">
          <img src={image} alt="" loading="lazy" />
          <h2>{title}</h2>
        </article>
      ))}
    </section>
  )
}
