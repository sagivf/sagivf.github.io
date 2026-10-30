import { useEffect, useState } from 'react'
import { loadHighFives, saveHighFives } from './highFives.js'

const HIGH_FIVE_EMOJIS = ['🙌', '✋', '🤚', '🖐️', '👏', '🎉', '🚀', '🦄']

export default function HighFive() {
  const [count, setCount] = useState(null)
  const [emojiIndex, setEmojiIndex] = useState(0)

  useEffect(() => {
    loadHighFives()
      .then(setCount)
      .catch((error) => {
        console.error(error)
        setCount(0)
      })
  }, [])

  const highFive = () => {
    const next = (count ?? 0) + 1
    setCount(next)
    setEmojiIndex((index) => (index + 1) % HIGH_FIVE_EMOJIS.length)
    saveHighFives(next).catch(console.error)
  }

  return (
    <div className="high-five">
      <button type="button" onClick={highFive} disabled={count === null} aria-label="High five">
        <span key={emojiIndex} className="emoji" aria-hidden="true">
          {HIGH_FIVE_EMOJIS[emojiIndex]}
        </span>
      </button>
      <p>{count === null ? 'Loading…' : `${count} high five${count === 1 ? '' : 's'}`}</p>
    </div>
  )
}
