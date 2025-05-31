import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '/images/phoo.jpg'; // صورة الملف الشخصي
import './Hero.css';

function Hero() {
  // حالة المودال للصورة الشخصية
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Variants لتحريك الصورة الشخصية
  const profilePicVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.15, rotateY: 10, boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)', transition: { duration: 0.4, ease: 'easeOut' } },
    tap: { scale: 0.9, transition: { duration: 0.2 } }
  };

  // Variants لتحريك النصوص
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay } })
  };

  // Variants لتحريك المودال
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };

  return (
    <header className="hero">
      {/* حاوية الملف الشخصي */}
      <motion.div
        className="profile-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -10 }}
      >
        <motion.img
          src={profilePic}
          alt="Profile"
          className="profile-pic"
          variants={profilePicVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onClick={() => setIsModalOpen(true)}
        />
        <motion.h1 custom={0.2} variants={textVariants} initial="hidden" animate="visible">
          Khloud Tamer
        </motion.h1>
        <motion.p custom={0.3} variants={textVariants} initial="hidden" animate="visible">
          Accountant
        </motion.p>
      </motion.div>

      {/* مودال الصورة الشخصية */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.img
              src={profilePic}
              alt="Profile Fullscreen"
              className="modal-img"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Hero;