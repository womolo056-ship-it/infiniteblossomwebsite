import { useState, useEffect, useRef } from 'react'
import styles from './LazyImage.module.css'

function LazyImage({ src, alt, className, placeholder, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px' // Start loading 50px before image enters viewport
      }
    )

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={imgRef} className={`${styles.lazyImageWrapper} ${className || ''}`}>
      {!isLoaded && (
        <div className={styles.placeholder}>
          {placeholder || <div className={styles.spinner} />}
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`${styles.lazyImage} ${isLoaded ? styles.loaded : ''}`}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  )
}

export default LazyImage
