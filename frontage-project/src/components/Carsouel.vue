<script>
import './Carsouel.css'; // <-- Import your CSS file here
export default {
  name: 'Carsouel',
  mounted() {
    console.log("Carsouel component mounted!");
  },
  
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
  </div>
</template>

<style scoped></style>
