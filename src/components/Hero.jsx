import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profilePic from '/images/phoo.jpg'; // صورة الملف الشخصي
import './Hero.css';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const icons = [
    {
      id: 1,
      name: 'Certificates',
      images: [
        '/images/cphoo5.jpg',
        '/images/cphoo6.jpg',
        '/images/cphoo7.jpg',
      ],
    },
    {
      id: 2,
      name: 'Durrat Alkaraz Mall',
      images: [
        '/images/Dorrat1.jpg',
        '/images/Dorrat3.jpg',
        '/images/Dorrat2.jpg',
      ],
    },
    {
      id: 3, // تم تصحيح المعرف ليكون فريدًا
      name: 'Playa',
      images: [
        '/images/phoo2.jpg',
        '/images/phoo3.jpg',
        '/images/phoo4.jpg',
      ],
    },
    {
      id: 4,
      name: 'Marassi',
      images: [
        'public/images/mphoo1.jpg',
        'public/images/mphoo2.jpg',
        'public/images/mphoo3.jpg',
      ],
    },
  ];

  const profilePicVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.15, rotateY: 10, boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)', transition: { duration: 0.4, ease: 'easeOut' } },
    tap: { scale: 0.9, transition: { duration: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay } }),
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const iconVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.2, y: -5, boxShadow: '0 0 15px rgba(255, 223, 0, 0.6)', transition: { duration: 0.3, ease: 'easeOut' } },
    tap: { scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <header className="hero">
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
          Ibrahim Saad
        </motion.h1>
        <motion.p custom={0.3} variants={textVariants} initial="hidden" animate="visible">
          Survey Specialist
        </motion.p>

        <motion.div
          className="icon-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {icons.map((icon) => (
            <motion.div
              key={icon.id}
              className="icon-item"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedIcon(icon)}
            >
              <span className="icon-text">{icon.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

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

      <AnimatePresence>
        {selectedIcon && (
          <motion.div
            className="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedIcon(null)}
          >
            <motion.div
              className="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedIcon.name}</h2>
              <div className="modal-images">
                {selectedIcon.images.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={'Icon Image ${index + 1}'}
                    className="modal-icon-img"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
              <button className="close-button" onClick={() => setSelectedIcon(null)}>
                إغلاق
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fullscreen-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
              <button className="fullscreen-close" onClick={() => setSelectedImage(null)}>
                ×
              </button>
              <img src={selectedImage} alt="Fullscreen Image" className="fullscreen-img" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Hero;