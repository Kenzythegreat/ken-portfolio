import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function HoverExpandRow({ images, onOpen, reverse = false }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const order = reverse ? [...images].reverse() : images

  return (
    <div className="hover-row">
      {order.map((image, i) => {
        const index = reverse ? images.length - 1 - i : i
        const isActive = activeIndex === index
        return (
          <motion.div
            key={image.full}
            className="hover-row__item"
            initial={false}
            animate={{ width: isActive ? 'var(--hover-row-active-w)' : 'var(--hover-row-rest-w)' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            onClick={() => onOpen(image.full)}
            onHoverStart={() => setActiveIndex(index)}
          >
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hover-row__overlay"
                />
              )}
            </AnimatePresence>
            {isActive && image.label && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="hover-row__label"
              >
                {image.label}
              </motion.div>
            )}
            <img src={image.thumb} alt="" loading="lazy" />
          </motion.div>
        )
      })}
    </div>
  )
}
