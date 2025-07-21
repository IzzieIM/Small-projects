<script>
export default {
    methods: {
        scrollPopularServices(direction) {
            const container = this.$refs.popularServicesCards;
            const scrollAmount = 220;
            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    }
}
</script>

<template>
    <div class="main-container">
        <div class="top-navbar-container">
            <div class="logo-left">
                <img src="" alt="this is a logo">
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
                    <video
                        src="https://fiverr-res.cloudinary.com/video/upload/f_auto:video,q_auto:best/v1/video-attachments/generic_asset/asset/18ad23debdc5ce914d67939eceb5fc27-1738830703211/Desktop%20Header%20new%20version"></video>
                    <div class="video-text">
                        <div class="video-text-heading">
                            <h1>Our freelancers </h1>
                            <h1>will take it from here</h1>
                        </div>
                        <div class="search-wrapper">
                            <form class="form-inline my-2 my-lg-0">
                                <div class="search-container">
                                    <input class="form-control search-input" type="search" placeholder="Search"
                                        aria-label="Search" />
                                    <button class="btn btn-outline-success search-button" type="submit">
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="video-text-skills">
                            <button type="button" class="btn btn-outline-light">Web Development</button>
                            <button type="button" class="btn btn-outline-light">architecture and Interior
                                Design</button>
                            <button type="button" class="btn btn-outline-light">UGC Videos</button>
                            <button type="button" class="btn btn-outline-light">video editing</button>
                            <button type="button" class="btn btn-outline-light">vibe coding</button>
                        </div>
                    </div>
                </div>
                <div class="carsouel-footer">
                    <div class="text-left">
                        Trusted By:
                    </div>
                    <div class="brands-right">
                        <img src="../assets/google.e74f4d9.svg" alt="">
                        <img src="../assets/meta.ff37dd3.svg" alt="">
                        <img src="../assets/netflix.b310314.svg" alt="">
                        <img src="../assets/payoneer.7c1170d.svg" alt="">
                        <img src="../assets/paypal.d398de5.svg" alt="">
                        <img src="../assets/pg.22fca85.svg" alt="">
                    </div>
                </div>

            </div>
        </div>

        <div class="features-section">
            <div class="features-card">
                <div class="features-card-text">
                    Programming & Tech
                </div>
            </div>
            <div class="features-card">
                <div class="features-card-text">
                    Graphic and Design
                </div>
            </div>
            <div class="features-card">
                <div class="features-card-text">
                    Ditigal Marketing
                </div>
            </div>
            <div class="features-card">
                <div class="features-card-text">
                    Video & Animation
                </div>
            </div>
            <div class="features-card">
                <div class="features-card-text">
                    AI Services
                </div>
            </div>
            <div class="features-card">
                <div class="features-card-text">
                    Music and Audio
                </div>
            </div>
            <div class="features-card">
                <div class="features-card-text">
                    Business
                </div>
            </div>
            <div class="features-card">
                <div class="features-card-text">
                    Consult
                </div>
            </div>
            <div class="features-card">
                <div class="features-card-text">
                    Fashion
                </div>
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
                        <div class="popular-services-card-img">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png"
                                alt="">
                        </div>
                    </div>
                    <div class="popular-services-card">
                        <div class="popular-services-card-img">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/af48c6702af221956ea7adf0055854e6-1745826082297/Book%20Design.png"
                                alt="">
                        </div>

                    </div>
                    <div class="popular-services-card">
                        <div class="popular-services-card-img">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/ece24f7f595e2dd44b26567705d1c600-1728279781879/UGC%20Video%20img.png" alt="">
                        </div>
                    </div>
                    <div class="popular-services-card">
                        <div class="popular-services-card-img">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png" alt="">
                        </div>
                    </div>
                    <div class="popular-services-card">
                        <div class="popular-services-card-img">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png" alt="">
                        </div>
                    </div>
                    <div class="popular-services-card">
                        <div class="popular-services-card-img">
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/4d23a927c9a0acf93aac6642714de09f-1745826013295/AI%20Development.png" alt="">
                        </div>
                    </div>
                </div>
                <button class="scroll-arrow right" @click="scrollPopularServices('right')">&#8594;</button>
            </div>
        </div>

        <div class="carsouel2-container">
            <div class="carsouel2">
                <div class="carsouel2-text-left">
                    <h1>Stuck at Vibe Coding?</h1>
                    <div class="carsouel2-text-left-subtext">
                        Get matched with the right expert to turn your prototype into a real, working product.
                    </div>
                    <button type="button" class="btn btn-light">Find an Expert</button>
                </div>

                <div class="carsouel2-video-right">
                    <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/6d44640ae60bba48efa315b0c206fad3-1750935806127/Vibe%20coding%20marketing%20banner%20loop"></video>
                </div>
            </div>
        </div>

        <div class="trusted-services-wrapper">
            <div class="trusted-services-wrapper-heading">
                <h2>Vontélle’s trusted services</h2>
            </div>
            <div class="trusted-services-wrapper-cards">
                <div class="card">
                    <div class="card-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png" alt="">
                    </div>
                    <div class="card-texts">
                        3D Industrial Designs
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png" alt="">
                    </div>
                    <div class="card-texts">
                        3D Industrial Designs
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png" alt="">
                    </div>
                    <div class="card-texts">
                        3D Industrial Designs
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png" alt="">
                    </div>
                    <div class="card-texts">
                        3D Industrial Designs
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png" alt="">
                    </div>
                    <div class="card-texts">
                        3D Industrial Designs
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png" alt="">
                    </div>
                    <div class="card-texts">
                        3D Industrial Designs
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_80,dpr_1.0/v1/attachments/generic_asset/asset/818fbc450c6b7f14664e7d15584f008b-1722417666557/3D-Industrial-Design_2x.png" alt="">
                    </div>
                    <div class="card-texts">
                        3D Industrial Designs
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    right: 650px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.text-left {
    color: white;
    font-size: 20px;
    z-index: 50;
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
    height: 120px;
    width: 120px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.322);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.features-card-text {
    font-size: 12px;
    padding: 5px;
    font-weight: 600;
    text-align: center;
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
    background-color: rgb(197, 97, 114);
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
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 30px;
}

.trusted-services-wrapper-cards .card {
    height: 200px;
    width: 220px;
    box-shadow:0 6px 12px rgba(0, 0, 0, 0.322) ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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


</style>
