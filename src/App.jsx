import React, { useState } from "react";
import "./App.css";

// Icon Components
const CalendarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M16 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
    <path d="M16 18h.01" />
  </svg>
);

const MapPinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);




const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const MailIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-header">
          <div className="nav-logo">
            
            <span className="logo-text">Industrial Visit</span>
          </div>

          {/* Desktop navigation */}
          <div className="desktop-menu">
            <a href="https://jomarifrancisco.netlify.app/" className="nav-link">Home</a>
            
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <XIcon className="menu-icon" /> : <MenuIcon className="menu-icon" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="https://jomarifrancisco.netlify.app/" className="mobile-nav-link">Home</a>
            
          </div>
        )}
      </div>
    </nav>
  );
}

// Header Component
function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">{title}</h1>
        <p className="header-subtitle">{subtitle}</p>

        <div className="header-details">
          <div className="header-detail">
            <CalendarIcon className="header-icon" />
            <span>April 7-14, 2025</span>
          </div>
          
        </div>
      </div>
    </header>

    
  );
}

// Image Gallery Component
function ImageGallery({ images, onImageClick }) {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className="gallery-card"
          onClick={() => onImageClick(image)}
        >
          <div className="card-image-container">
            <img
              src={image.src || "/images/Day1.1.jpg"}
              alt={image.title}
              className="card-image"
            />
          </div>
          <div className="card-content">
            <h2 className="card-title">{image.title}</h2>
            <p className="card-description">{image.description}</p>
            <div className="card-date">
              <CalendarIcon className="date-icon" />
              <span>{image.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Image Modal Component
function ImageModal({ image, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image-container">
          <img
            src={image.src || "/images/Day 1.1.jpg"}
            alt={image.title}
            className="modal-image"
          />
          <button onClick={onClose} className="modal-close-button">
            <XIcon className="close-icon" />
          </button>
        </div>

        <div className="modal-content">
          <h2 className="modal-title">{image.title}</h2>
          <p className="modal-date">{image.date}</p>
          <p className="modal-description">{image.description}</p>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-heading">About Industrial Visit</h3>
            <p className="footer-text">
            An industrial visit offers students a unique opportunity to step out of the classroom and into the real world of industry. It provides firsthand exposure to workplace environments, machinery, and operations, helping bridge the gap between academic theories and practical applications.  
            </p>
          </div>

         

          <div className="footer-section">
            <h3 className="footer-heading">Connect With Me</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/francisco.jz/" className="social-link">
                <FacebookIcon className="social-icon" />
              </a>
              <a href="#https://instagram.com/frncsc.jz" className="social-link">
                <InstagramIcon className="social-icon" />
              </a>
              
            </div>
          
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Educational Tour Blog | Western Mindanao State University</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  // Tour image data
  const images = [
    {
      src: "/images/Day 1.1.jpg",
      title: "City Tour",
      description: "Exploring the heart of the city and getting a glimpse of its culture, history, and urban vibe.",
      date: "April 7, 2025",
    },
    {
      src: "/images/Day 1.2.jpg",
      title: "Rizal Park",
      description: "Visited one of the most iconic historical landmarks in the Philippines, dedicated to the national hero.",
      date: "April 7, 2025",
    },
    {
      src: "/images/Day 1.3.jpg",
      title: "Fort Santiago",
      description: "A walk through the centuries-old Spanish fortress that once served as a key defense structure in Intramuros.",
      date: "April 7, 2025",
    },
    {
      src: "/images/Day 2.1.jpg",
      title: "SBMA Law Enforcement Department-Communication Branch",
      description: "Learned how the SBMA manages communication operations within its law enforcement branch.",
      date: "April 8, 2025",
    },
    {
      src: "/images/Day 2.2.jpg",
      title: "SBMA Seaport Department (Vessel Traffic Management System)",
      description: "Observed how maritime traffic is monitored and controlled for safe port operations.",
      date: "April 8, 2025",
    },
    {
      src: "/images/Day 2.3.jpg",
      title: "Subic Bay Exhibition & Convention Center",
      description: "A visit to a major venue for conventions and expos, showcasing business and tourism development.",
      date: "April 8, 2025",
    },
    {
      src: "/images/Day 3.1.jpg",
      title: "Museo ni Manuel Quezon",
      description: "A deep dive into the life and legacy of President Manuel Quezon through artifacts and exhibits.",
      date: "April 9, 2025",
    },
    {
      src: "/images/Day 3.2.jpg",
      title: "National Museum of Natural History",
      description: "Explored the rich biodiversity and natural wonders of the Philippines through interactive displays.",
      date: "April 9, 2025",
    },
    {
      src: "/images/Day 3.3.jpg",
      title: "National Museum of Fine Arts",
      description: "Admired Filipino artistic masterpieces spanning generations at this cultural landmark.",
      date: "April 9, 2025",
    },
    {
      src: "/images/Day 4.1.jpg",
      title: "Bangko Sentral ng Pilipinas",
      description: "Gained insights into the role of the central bank in stabilizing and managing the Philippine economy.(Photo was taken by ABS-CBN)",
      date: "April 10, 2025",
    },
    {
      src: "/images/Day 4.2.jpg",
      title: "Hytec Power Inc.",
      description: "Visited a tech-driven company specializing in advanced learning solutions and equipment.",
      date: "April 10, 2025",
    },
    {
      src: "/images/Day 4.3.jpg",
      title: "Laser Tag @ SM North Edsa",
      description: "Unwound with some team-based laser tag action in one of the country’s largest malls.",
      date: "April 10, 2025",
    },
    {
      src: "/images/Day 5.1.jpg",
      title: "Light Rail Transit Authority-Line 2",
      description: "Learned about urban transit systems and how railway operations help manage city traffic.",
      date: "April 11, 2025",
    },
    {
      src: "/images/Day 5.2.jpg",
      title: "Metropolitan Manila Development Authority",
      description: "Discovered how the MMDA oversees urban planning, traffic control, and disaster response.",
      date: "April 11, 2025",
    },
    {
      src: "/images/Day 6.1.jpg",
      title: "Philippine Military Academy",
      description: "Visited the prestigious institution responsible for training future military leaders.",
      date: "April 12, 2025",
    },
    {
      src: "/images/Day 6.2.jpg",
      title: "Bell Church",
      description: "Explored this tranquil religious site blending Chinese and Filipino cultural elements.",
      date: "April 12, 2025",
    },
    {
      src: "/images/Day 6.3.jpg",
      title: "The Mansion (Baguio City)",
      description: "Admired the architecture and history of the President’s official summer residence.",
      date: "April 12, 2025",
    },
    {
      src: "/images/Day 7.1.jpg",
      title: "Burnham Park",
      description: "Enjoyed a peaceful day amid nature in one of Baguio’s most beloved parks.",
      date: "April 13, 2025",
    },
    {
      src: "/images/Day 7.2.jpg",
      title: "Night Out At Baguio City Night Market",
      description: "Shopped and experienced the vibrant local night scene full of bargains and flavors.",
      date: "April 13, 2025",
    },
    {
      src: "/images/Day 8.1.jpg",
      title: "Back to Ninoy Aquino International Airport",
      description: "Prepared for departure, concluding an unforgettable educational journey.",
      date: "April 14, 2025",
    },
    {
      src: "/images/Day 8.2.jpg",
      title: "Flight to Zamboanga City",
      description: "Headed home to Zamboanga City, carrying back memories and new learnings.",
      date: "April 14, 2025",
    },
  ];
  

  const [selectedImage, setSelectedImage] = useState(null);
  const [filterTag, setFilterTag] = useState("all");

  // Open image modal
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Close image modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Filter images by date
  const filteredImages = filterTag === "all" 
    ? images 
    : images.filter((img) => img.date.includes(filterTag));

  return (
    <div className="app-container">
      <Navigation />
      <Header
        title="Educational Tour Highlights"
        subtitle="A visual journey through our academic adventure"
      />

      <main className="main-content">
        {/* Filter buttons */}
        <div className="filter-container">
  <button
    onClick={() => setFilterTag("all")}
    className={filterTag === "all" ? "filter-button active" : "filter-button"}
  >
    All Days
  </button>
  {["April 7", "April 8", "April 9", "April 10", "April 11", "April 12", "April 13", "April 14"].map(
    (day, index) => (
      <button
        key={index}
        onClick={() => setFilterTag(day)}
        className={filterTag === day ? "filter-button active" : "filter-button"}
      >
        Day {index + 1} ({day})
      </button>
    )
  )}
</div>


        <ImageGallery images={filteredImages} onImageClick={openModal} />
      </main>

      <Footer />

      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
