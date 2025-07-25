<script>
export default {
  methods: {
    scrollPopularServices(direction) {
      const container = this.$refs.popularServicesCards;
      const scrollAmount = 220;
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    },
    toggleVideo() {
      const video = this.$refs.mainVideo;
      if (!video) return;

      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },
  }
};
</script>

<template>
  <div class="main-container">
    <div class="top-navbar-container">
      <div class="logo-left">
        <img src alt="this is a logo" />
      </div>
      <div class="navbar-right">
        <ul>
          <li>Fiverr Pro</li>
          <li>Explore</li>
          <li>EN</li>
          <li>Become a Bestseller</li>
          <li>Sign Up</li>
          <li style="border: 1px solid black; padding: 8px ; border-radius: 5px">Login</li>
        </ul>
      </div>
    </div>
    <div class="carsouel-container">
      <div class="carsouel">
        <div class="video">
          <video ref="mainVideo"
            src="https://fiverr-res.cloudinary.com/video/upload/f_auto:video,q_auto:best/v1/video-attachments/generic_asset/asset/18ad23debdc5ce914d67939eceb5fc27-1738830703211/Desktop%20Header%20new%20version"
            autoplay muted loop></video>
          <div class="video-text">
            <div class="video-text-heading">
              <h1>Our freelancers</h1>
              <h1>will take it from here</h1>
            </div>
            <div class="search-wrapper">
              <form class="form-inline my-2 my-lg-0">
                <div class="search-container">
                  <input class="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success search-button" type="submit">Search</button>
                </div>
              </form>
            </div>
            <div class="video-text-skills">
              <button type="button" class="btn btn-outline-light">Web Development</button>
              <button type="button" class="btn btn-outline-light">
                architecture and Interior
                Design
              </button>
              <button type="button" class="btn btn-outline-light">UGC Videos</button>
              <button type="button" class="btn btn-outline-light">video editing</button>
              <button type="button" class="btn btn-outline-light">vibe coding</button>
            </div>
          </div>
        </div>
        <div class="carsouel-footer">
          <div class="text-left">Trusted By:</div>
          <div class="brands-right">
            <img src="../assets/google.e74f4d9.svg" alt />
            <img src="../assets/meta.ff37dd3.svg" alt />
            <img src="../assets/netflix.b310314.svg" alt />
            <img src="../assets/payoneer.7c1170d.svg" alt />
            <img src="../assets/paypal.d398de5.svg" alt />
            <img src="../assets/pg.22fca85.svg" alt />
            <div class="play-button">
              <button type="button" class="btn btn-secondary play-pause" @click="toggleVideo()">play/pause</button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="features-section">
      <div class="features-card">
        <div class="features-card-text">Programming & Tech</div>
      </div>
      <div class="features-card">
        <div class="features-card-text">Graphic and Design</div>
      </div>
      <div class="features-card">
        <div class="features-card-text">Ditigal Marketing</div>
      </div>
      <div class="features-card">
        <div class="features-card-text">Video & Animation</div>
      </div>
      <div class="features-card">
        <div class="features-card-text">AI Services</div>
      </div>
      <div class="features-card">
        <div class="features-card-text">Music and Audio</div>
      </div>
      <div class="features-card">
        <div class="features-card-text">Business</div>
      </div>
      <div class="features-card">
        <div class="features-card-text">Consult</div>
      </div>
      <div class="features-card">
        <div class="features-card-text">Fashion</div>
      </div>
    </div>

    <div class="popular-services">
      <div class="popular-services-heading">
        <h1>Popular Services</h1>
      </div>
      <div class="popular-services-scroll-wrapper">
        <button class="scroll-arrow left" @click="scrollPopularServices('left')">&#8592;</button>
        <div class="popular-services-cards" ref="popularServicesCards">
          <div class="popular-services-card">
            <div class="popular-services-text">
              Architecture and Interior Design
            </div>
            <div class="popular-services-card-img">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png"
                alt />
            </div>
          </div>
          <div class="popular-services-card">
            <div class="popular-services-text">
              Book Design
            </div>
            <div class="popular-services-card-img">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/af48c6702af221956ea7adf0055854e6-1745826082297/Book%20Design.png"
                alt />
            </div>
          </div>
          <div class="popular-services-card">
            <div class="popular-services-text">
              UGC Videos
            </div>
            <div class="popular-services-card-img">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/ece24f7f595e2dd44b26567705d1c600-1728279781879/UGC%20Video%20img.png"
                alt />
            </div>
          </div>
          <div class="popular-services-card">
            <div class="popular-services-text">
              Voice Over
            </div>
            <div class="popular-services-card-img">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png"
                alt />
            </div>
          </div>
          <div class="popular-services-card">
            <div class="popular-services-text">
              Social Media Marketing
            </div>
            <div class="popular-services-card-img">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png"
                alt />
            </div>
          </div>
          <div class="popular-services-card">
            <div class="popular-services-text">
              AI Development
            </div>
            <div class="popular-services-card-img">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/4d23a927c9a0acf93aac6642714de09f-1745826013295/AI%20Development.png"
                alt />
            </div>
          </div>
        </div>
        <button class="scroll-arrow right" @click="scrollPopularServices('right')">&#8594;
</button>
      </div>
    </div>

    <div class="carsouel2-container">
      <div class="carsouel2">
        <div class="carsouel2-text-left">
          <h1>Stuck at Vibe Coding?</h1>
          <div class="carsouel2-text-left-subtext">Get matched with the right expert to turn your prototype
            into a real, working product.</div>
          <button type="button" class="btn btn-light">Find an Expert</button>
        </div>

        <div class="carsouel2-video-right">
          <video
            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/6d44640ae60bba48efa315b0c206fad3-1750935806127/Vibe%20coding%20marketing%20banner%20loop"
            autoplay muted loop></video>
        </div>
      </div>
    </div>

    <div class="trusted-services-wrapper">
      <div class="trusted-services-wrapper-heading">
        <h2>Vontélle’s trusted services</h2>
      </div>
        <div class="trusted-services-wrapper-cards" ref="trustedServicesCards">
          <div class="card">
            <div class="card-img">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png"
                alt />
            </div>
            <div class="card-texts">3D Industrial Designs</div>
          </div>
          <div class="card">
            <div class="card-img">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666565/E-commerce-Website-Development_2x.png"
                alt />
            </div>
            <div class="card-texts">Ecommerce and Website Development</div>
          </div>
          <div class="card">
            <div class="card-img">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666560/Email-Marketing_2x.png"
                alt />
            </div>
            <div class="card-texts">Email Marketing</div>
          </div>
          <div class="card">
            <div class="card-img">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666567/Press-Releases_2x.png"
                alt />
            </div>
            <div class="card-texts">Press Releases</div>
          </div>
          <div class="card">
            <div class="card-img">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666561/Logo-Design_2x.png"
                alt />
            </div>
            <div class="card-texts">Logo Designs</div>
          </div>
        </div>
    </div>

    <div class="fiver-logo-maker-wrapper">
      <div class="fiver-logo-maker">
        <div class="fiver-logo-maker-left">
          <div class="logo">
            this is a logo
          </div>
          <div class="text">
            <h1>Make an incredible
            </h1>
            <h1>logo <span>in seconds</span>
            </h1>
            <p>Pre-designed by top talent. Just add your touch</p>
            <button type="button" class="btn btn-dark">Try Fiver Logo Maker</button>
          </div>
        </div>
        <div class="fiver-logo-maker-right">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_460,dpr_1.0/v1/attachments/generic_asset/asset/55292bd34319d97ef4e9fd48d9f8758d-1704795769965/logo-maker-lohp.png"
            alt="">
        </div>
      </div>
    </div>
    <div class="fiver-pictures-wrapper">

      <div class="fiver-pictures-heading">
        <h1> Made on Fiver -</h1>
      </div>
      <div class="fiver-pictures-grid">
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/25adaa30a6cf3529ba5de4933a243b52-1746588578/mockup1.jpg"
          alt="">
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/b0c67b92a7ef697eada4b00e81cee4b8-1746608364/GIG%20review.png"
          alt="">
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/4001dc6d3bc448b2ebdaadd233dc9f6e-1746265210/LISA%20HILDEBRANT_INTERIOR_LIVING_HR_FINAL.jpg"
          alt="">
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/8e573c38c01f1c92dbd16a7c499af099-1746456412/F_1.jpg"
          alt="">
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/b1128b17beff4e7dabfe8ba41b75fa41-1745559436/IMG_7140.jpeg"
          alt="">
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/54d91985a7123ba4fdfff8e502453871-1745328656/tupp.png"
          alt="">
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/2e972cf37a9f2667e4547aa2eba74af5-1745255512/Revision%202.png"
          alt="">
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_delivery_web_tile/v1/attachments/delivery/asset/be0e28849d80904c6ee0883922772390-1746699824/Mockup%20copy.jpg"
          alt="">
      </div>
    </div>

    <div class="footer-carsouel-wrapper">
      <div class="footer-carsouel">
        <div class="texts">
          Freelance services at your
          <span>fingertips</span>
        </div>
        <button type="button" class="btn btn-light">Join Fiver</button>
      </div>
    </div>

    <footer class="site-footer">
      <div class="footer-container">
        <div class="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
            <li>Programming & Tech</li>
            <li>AI Services</li>
            <li>Consulting</li>
            <li>Data</li>
            <li>Business</li>
            <li>Personal Growth & Hobbies</li>
            <li>Photography</li>
            <li>Finance</li>
            <li>End-to-End Projects</li>
            <li>Service Catalog</li>
            <li>For Clients</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>How Fiverr Works</h4>
          <ul>
            <li>Customer Success Stories</li>
            <li>Trust & Safety</li>
            <li>Quality Guide</li>
            <li>Fiverr Learn - Online Courses</li>
            <li>Fiverr Guides</li>
            <li>Fiverr Answers</li>
          </ul>
          <h4 style="margin-top: 20px;">For Freelancers</h4>
          <ul>
            <li>Become a Fiverr Freelancer</li>
            <li>Become an Agency</li>
            <li>Freelancer Equity Program</li>
            <li>Community Hub</li>
            <li>Forum</li>
            <li>Events</li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Business Solutions</h4>
          <ul>
            <li>Fiverr Pro</li>
            <li>Project Management Service</li>
            <li>Expert Sourcing Service</li>
            <li>ClearVoice - Content Marketing</li>
            <li>Working Not Working - Creative Talent</li>
            <li>AutoDS - Dropshipping Tool</li>
            <li>AI store builder</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2025 Fiverr. All rights reserved.</span>
        <span class="footer-socials">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="footer-social-link">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter" class="footer-social-link">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="footer-social-link">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.397 3.678 1.378c-.98.98-1.247 2.092-1.306 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.326 2.393 1.306 3.373.981.981 2.093 1.247 3.374 1.306C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.325 3.374-1.306.98-.98 1.247-2.092 1.306-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.326-2.393-1.306-3.373-.981-.981-2.093-1.247-3.374-1.306C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="footer-social-link">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.369 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400..700&display=swap');

.main-container {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

.carsouel-container {
  color: black;
  width: 100%;
  position: relative;
}

.top-navbar-container {
  width: 100%;
  height: 70px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 30px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-right ul {
  display: flex;
  align-items: center;
  gap: 30px;
}

li {
  list-style: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.video {
  width: 100vw;
  height: 105vh;
  overflow: visible;
  position: relative;
}

.video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.video-text {
  position: absolute;
  top: 200px;
  left: 50px;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.video-text-heading {
  margin-bottom: 20px;
}

.search-wrapper {
  width: 80vw;
  margin: auto;
  /* center horizontally */
}

.search-container {
  position: relative;
  width: 100%;
}

.search-input {
  width: 100%;
  padding-right: 100px;
  /* space for button */
}

.search-button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.video-text-heading h1 {
  font-size: 60px;
  font-weight: 200;
  text-align: left;
}

.video-text-skills {
  display: flex;
  gap: 10px;
  margin-top: 30px;
  padding-right: 80px;
}

.video-text-skills button {
  padding: 10px 20px;
  width: auto;
  height: 48px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.123);
  color: white;
}

.carsouel-footer {
  position: absolute;
  bottom: 16px;
  left: 50px;
  right: 50px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 100px);
  /* 50px left + 50px right */
  box-sizing: border-box;
}

.text-left {
  color: white;
  font-size: 20px;
  z-index: 50;
}

.play-button {
  margin-left: auto;
  /* pushes play-button to the far right */
}

.brands-right {
  display: flex;
  align-items: center;
  gap: 30px;
}

.features-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  gap: 25px;
  box-sizing: border-box;
}

.features-card {
  position: relative;
  /* necessary for pseudo-element positioning */
  height: 120px;
  width: 120px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.322);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  overflow: hidden;
}

.features-card::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: rgba(75, 206, 82, 0.5);
  /* light blue */
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  filter: blur(25px);
  transition: transform 0.5s ease;
  z-index: 0;
}

.features-card:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

.features-card-text {
  font-size: 12px;
  padding: 5px;
  font-weight: 600;
  text-align: center;
  z-index: 1;
  position: relative;
  /* ensures it's above the blur */
}


.popular-services {
  padding: 30px;
}

.popular-services-scroll-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.popular-services-cards {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 25px;
  width: 100%;
  padding: 10px 0;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */
}

.popular-services-text {
  color: white;
  text-align: center;
  margin-top: 30px;
  font-weight: 600;


}

.popular-services-cards::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}

.popular-services-card {
  height: 250px;
  width: 200px;
  background-color: rgb(14, 29, 14);
  border-radius: 10px;
  margin-top: 35px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  justify-content: center;
}

.scroll-arrow {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  position: relative;
}

.scroll-arrow.left {
  margin-right: 10px;
}

.scroll-arrow.right {
  margin-left: 10px;
}

.popular-services-card-img {
  position: absolute;
  bottom: 8px;
}

.popular-services-card-img img {
  width: 150;
}

.carsouel2-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.carsouel2 {
  height: 80vh;
  width: 95vw;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.322);
 background: linear-gradient(
  to bottom left,
  rgb(197, 97, 114) 60%,
  rgb(95, 20, 36) 90%
);

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 20px;
}

.carsouel2-video-right {
  position: absolute;
  right: 50px;
}

.carsouel2-video-right video {
  height: 65vh;
  width: 45vw;
  border-radius: 30px;
}

.carsouel2-text-left {
  width: 40vw;
  position: absolute;
  left: 50px;
  color: white;
}

.carsouel2-text-left button {
  margin-top: 30px;
  height: 50px;
}

.trusted-services-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.trusted-services-wrapper-cards {
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 30px 0;
  width: 100%;
  padding: 10px 0;
  justify-content: center;
}


.trusted-services-wrapper-cards .card {
  height: 200px;
  width: 220px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.322);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
}

.card-texts {
  text-align: center;
}

.card-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card-img img {
  display: block;
  margin: 0 auto;
  max-width: 80px;
  height: auto;
}

.fiver-logo-maker-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.fiver-logo-maker {
  width: 95vw;
  height: 80vh;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.322);
  background-color: rgb(255, 249, 243);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 20px;
  padding: 50px;
  padding-right: 100px;
  position: relative;
  gap: 180px;

}

.fiver-logo-maker-left {
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
}

.fiver-logo-maker-left .logo {
  position: absolute;
  top: 50px;
  left: 50px;
}

.fiver-logo-maker-left .text {
  position: absolute;
  left: 50px;
  margin-bottom: 30px;
  display: block;
}

.fiver-logo-maker-left .text h1 {
  font-size: 50px;
  font-weight: 500;
  margin-bottom: 10px;
}

.fiver-logo-maker-left .text h1 span {
  color: rgb(240, 164, 23);
  font-family: "Domine", serif;
  font-weight: 400;
}

.fiver-logo-maker-left .text p {
  margin-top: 30px;
  margin-bottom: 30px;
  font-weight: 500;
  color: rgb(78, 76, 76);
  font-size: 20px;
}

/* made with fiver */
.fiver-pictures-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
}

.fiver-pictures-heading {
  position: absolute;
  top: 50px;
  left: 50px;
}

.fiver-pictures-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* 4 equal columns */
  grid-auto-rows: auto;
  /* row height adapts to image */
  row-gap: 15px;
  /* 15px vertical gap */
  column-gap: 15px;
  /* 15px horizontal gap */
  justify-content: center;
  padding: 50px;
  align-items: start;
  /* align images to the top of each cell */
}

.fiver-pictures-grid img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 10px;
}

.footer-carsouel-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.footer-carsouel {
  width: 95vw;
  height: 50vh;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.322);
  background-color: rgb(41, 6, 8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  color: white;
}

.footer-carsouel .texts {
  font-size: 64px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 50px;
}

.footer-carsouel .texts span {
  color: rgb(255, 118, 64);
  font-family: "Domine", serif;
  font-size: 64px;
  font-weight: 400;
}

.footer-carsouel button {
  height: 50px;
  width: 150px;
}

.site-footer {
  background: #ffffff;
  color: #292828;
  padding: 40px 0 0 0;
  font-size: 15px;
  margin-top: 60px;
  border-top: #363636 1px solid;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding: 0 40px;
  gap: 40px;
}

.footer-section {
  min-width: 200px;
  flex: 1 1 250px;
  margin-bottom: 30px;
}

.footer-section h4 {
  font-size: 17px;
  margin-bottom: 15px;
  font-weight: 600;
  color: #000000;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
  cursor: pointer;
  transition: color 0.2s;
  color: #242222c9;
  font-size: 14px;
}

.footer-section ul li:hover {
  color: rgb(255, 118, 64);
}

.footer-bottom {
  border-top: 1px solid #444;
  text-align: center;
  padding: 18px 0;
  margin-top: 10px;
  font-size: 14px;
  color: #353434b7;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.footer-socials {
  margin-top: 8px;
  display: flex;
  gap: 18px;
  justify-content: center;
}

.footer-social-link {
  color: #353434b7;
  transition: color 0.2s;
  display: inline-flex;
  align-items: center;
}

.footer-social-link:hover {
  color: #f0a417;
}
</style>
