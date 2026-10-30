import Cards from './Cards.jsx'
import HighFive from './HighFive.jsx'

const LINKEDIN_URL = 'https://www.linkedin.com/in/sagivf/'

export default function App() {
  return (
    <main>
      <h1>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          Sagiv Frankel
        </a>
      </h1>
      <Cards />
      <HighFive />
    </main>
  )
}
