import React from 'react'
import styles from './App.module.css'
import LoadingIcon from './components/LoadingIcon'

const App = () => {
  const [loading, setLoading] = React.useState(false)
  const [image, setImage] = React.useState('')
  const [text, setText] = React.useState('')
  const {VITE_OPENAI_API_KEY} = import.meta.env

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!text) return

    setLoading(true)

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: text,
        n: 1,
        size: "512x512"
      })
    })

    const data = await response.json()
    setImage(data.data[0].url)

    setLoading(false)
  }

  return (
    <>
    <main className={styles.container}>
      <h1 className={styles.title}>Generador de imágenes a partir de texto</h1>
      <section className={styles.section}>
        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Escribe un texto para generar una imagen"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Generar imagen</button>
        </form>
        <div className={styles.resultContainer}>
        {
          loading
          ? <p className={styles.icon}><LoadingIcon /></p>
          : image
            ? <img className={styles.img} src={image} alt={text}/>
            : <p>Aquí aparecerá tu imagen generada</p>
        }
        </div>
      </section>            
      </main>
      <footer className={styles.footer}>
        <p>Hecho con ❤️  por <a href="https://github.com/carandev" target="_blank" rel="noreferrer">carandev</a></p>
      </footer>
    </>
  )
}

export default App