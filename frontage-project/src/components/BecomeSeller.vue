<template>
    <div class="seller-container">
        <div class="seller-video-wrapper">
            <video autoplay muted loop>
                <source src="https://sg.fiverrcdn.com/packages_lp/cover_video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="text">
                <div class="text-heading">
                    Work your Way
                </div>
                <div class="text-subheading">
                    You bring the skill. We'll make earning easy.
                </div>
                <div class="button">
                    Become a Seller
                </div>
            </div>
            <div class="white-band">
                <div class="white-band-text">
                    <div class="text-container">
                        <div class="text1">
                            A Gig is Bought Every
                        </div>
                        <div class="text2">
                            <h1>4 sec</h1>
                        </div>
                    </div>
                    <div class="text-container">
                        <div class="text1">
                            Transactions
                        </div>
                        <div class="text2">
                            <h1> 50M+</h1>
                        </div>
                    </div>
                    <div class="text-container">
                        <div class="text1">
                            Price Range
                        </div>
                        <div class="text2">
                            <h1>$5 - $10,000</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="fiver-community">
            <div class="community-heading">
                <h2>Join our growing community</h2>
            </div>

            <div class="community-carsouels">
                <div class="community-img-wrapper">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Community 1" />
                </div>
                <div class="community-img-wrapper">
                    <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Community 2" />
                </div>
                <div class="community-img-wrapper">
                    <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Community 3" />
                </div>
                <div class="community-img-wrapper">
                    <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Community 4" />
                </div>
                <div class="community-img-wrapper">
                    <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="Community 5" />
                </div>
                <div class="community-img-wrapper">
                    <img src="https://randomuser.me/api/portraits/women/6.jpg" alt="Community 6" />
                </div>
                <div class="community-img-wrapper">
                    <img src="https://randomuser.me/api/portraits/men/7.jpg" alt="Community 7" />
                </div>
                <div class="community-img-wrapper">
                    <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="Community 8" />
                </div>
            </div>
        </div>

        <div class="QandA">
            <div class="QandA-wrapper">
                <div class="qanda-text">
                    Q&A
                </div>
                <div class="qanda-container">
                    <div v-for="(item, idx) in qandaList" :key="idx"
                        :class="['qanda-item', { expanded: expandedIdx === idx }]" @click="toggleQ(idx)">
                        <div class="qanda-question">
                            {{ item.question }}
                        </div>
                        <div v-if="expandedIdx === idx" class="qanda-answer">
                            {{ item.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import './BecomeSeller.css';
export default {
    data() {
        return {
            expandedIdx: null,
            qandaList: [
                { question: "How do i become a seller?", answer: "To become a seller, you need to create an account on our platform, set up your profile, and list your services as gigs. Make sure to follow our guidelines and provide clear descriptions of your offerings." },
                { question: "What are the requirements to sell on your platform?", answer: "To sell on our platform, you need to be at least 18 years old, have a valid email address, and comply with our terms of service. Additionally, you should have the skills or services you wish to offer." },
                { question: "How do I set my prices?", answer: "You can set your prices based on the value of your services, market demand, and your expertise. It's important to research similar gigs to ensure your pricing is competitive." },
                { question: "How do I get paid?", answer: "You can get paid through our secure payment system. Once a buyer places an order and it is completed, the payment will be released to your account after a short processing period." },
                { question: "What if I have issues with a buyer?", answer: "If you encounter any issues with a buyer, you can contact our support team for assistance. We have a dispute resolution process in place to help resolve conflicts." },
                { question: "Can I offer custom services?", answer: "Yes, you can offer custom services by creating a gig that allows buyers to request specific tasks or projects. Make sure to clearly outline what you can provide in your gig description." },
            ]
        };
    },
    methods: {
        toggleQ(idx) {
            this.expandedIdx = this.expandedIdx === idx ? null : idx;
        }
    }
};
</script>

<style></style>