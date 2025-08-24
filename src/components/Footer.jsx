import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

// مكون الفوتر
function Footer() {
  // Variants لتحريك الأيقونات
  const iconVariants = {
    initial: { scale: 1, y: 0, rotate: 0 },
    hover: { 
      scale: 1.2, 
      y: -6, 
      rotate: 8, 
      transition: { duration: 0.25, ease: 'easeOut' } 
    },
    tap: { 
      scale: 0.9, 
      transition: { duration: 0.15 } 
    }
  };

  return (
    <footer className="footer">
      {/* روابط السوشيال ميديا */}
      <div className="social-links">
        <motion.a
          href="https://www.facebook.com/share/1BFEXY3ciX/"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="social-link"
        >
          <FaFacebook className="icon facebook" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/ibrahim_saad64?igsh=MXNiejJiaWl4eWNodg=="
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="social-link"
        >
          <FaInstagram className="icon instagram" />
        </motion.a>
        <motion.a
          href="https://wa.me/+20017765594"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="social-link"
        >
          <FaWhatsapp className="icon whatsapp" />
        </motion.a>
        <motion.a
          href="https://t.me/+201228598661"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="social-link"
        >
          <FaTelegram className="icon telegram" />
        </motion.a>
        <motion.a
          href="tel:‪+201017765594‬"
          target="_blank"
          rel="noopener noreferrer"
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="social-link"
        >
          <FaPhone className="icon phone" />
        </motion.a>
      </div>

     
    </footer>
);
}

export default Footer;