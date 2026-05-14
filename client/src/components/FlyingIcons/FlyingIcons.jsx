import { motion, AnimatePresence } from 'framer-motion';
import BatteryIcon from '../BatteryIcon/BatteryIcon'

const FlyingIcons = ({ icons, onComplete }) => {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
      <AnimatePresence>
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            initial={{ x: icon.x, y: icon.y, opacity: 1, scale: 0.5 }}
            animate={{ 
                x: window.innerWidth / 2, 
                y: -50,                  
                opacity: 0, 
                scale: 2,
                rotate: 180 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onAnimationComplete={() => onComplete(icon.id)}
            style={{ position: 'absolute' }}
          >
            <BatteryIcon color={icon.color} size={40} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FlyingIcons