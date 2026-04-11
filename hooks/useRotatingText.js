import { useState, useEffect } from "react";

/**
 * useRotatingText - Hook para rotar texto automáticamente
 *
 * @param {string[]} words - Array de palabras a rotar
 * @param {number} interval - Tiempo en ms entre cambios (default: 2500ms)
 * @returns {string} - Palabra actual
 *
 * Uso:
 * const title = useRotatingText(['Graphic', 'Motion', 'UX', 'Product']);
 * <h1>{title} Designer</h1>
 *
 * Para agregar más palabras, edita el array en About.js:
 * const title = useRotatingText(['Graphic', 'Motion', 'UX', 'Product', 'Visual', 'Digital']);
 */

export function useRotatingText(words, interval = 2500) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      // Fade out
      setFade(false);

      // Cambiar palabra después de fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true); // Fade in
      }, 300); // Duración del fade out
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return { word: words[index], fade };
}
