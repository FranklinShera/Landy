<template>

    <Navbar/>

    <div class="hero simcont ">
        <div class="cta-text">

            <div class="main-text">
                Manage Your<br/>
                Apartments<br/>
                Like A Real<br/>
                Boss!
            </div>

            <div class="support-text">
                Get all the analysis and alerts
                in a single convenient place.
            </div>

            <div class="cta-btns">
                <button class="plain-btn primary-btn">Sign Up</button>
                <button class="plain-btn">Learn More</button>
            </div>

        </div>

        <div class="illustration" style="background: url('/storage/icons/buildings.svg') no-repeat">

        </div>
    </div>

    <div class="features simcont">
        <div class="feature-word">
            <h1>
                We Make<br/>
                Management<br/>
                Simple and<br/>
                Robust.
            </h1>

            <p>
                Our solution makes it easy to monitor
                apartments , tenants payment progress,
                payment balances and complains through
                a simple and informative interface.
            </p>
        </div>
        <div class="features-list ">
            <div class="feature-card" v-for="feature in features">

                <img class="feature-card-icon" :src="pathFormat( '/storage/icons/' , feature.icon)" />

                <div class="feature-card-text">
                    <h1>
                        {{ feature.title }}
                    </h1>
                    <p>
                        Our solution makes it easy to monitor
                        apartments , tenants payment progress,
                        payment balances and complains through
                        a simple and informative interface.
                    </p>
                </div>

            </div>
        </div>
    </div>

    <div class="how-it-works">

        <h1>How It Works</h1>

        <div class="how-to-steps">

            <div class="how-to-step" v-for="howStep in steps">
                 <img class="how-to-step-icon" :src="pathFormat( '/storage/icons/' , howStep.icon)" />

                <div class="how-to-step-description">

                    <h1>{{ howStep.title }}</h1>

                    <p>{{ howStep.desc }}</p>

                </div>

            </div>

        </div>

        <button class="btn-free-tour">Take A Free Tour</button>

    </div>



    <div class="get-started">
        <h1>Get Started With Us <br/> Now</h1>
        <p class="get-started-tagline">
            Get your business to efficiency and reliability
        </p>
        <div class="dashboard-mockup" style="background-image: url('/storage/images/dash-mock.png')">

        </div>
    </div>



    <div class="mobile-app simcont">
        <div class="mobile-app-mockup" >
            <img src="/storage/images/phone_mock.png" alt="Landy Mobile App">
        </div>

        <div class="mobile-app-info">
            <div class="mobile-app-info-lead">
                <h1>We Lead Customers To You</h1>
            </div>
            <div class="mobile-app-info-download">
                <h2>Get Our Mobile App</h2>

                <div class="download-providers">
                    <img src="/storage/images/appstore.png" alt="AppStore Link">
                    <img src="/storage/images/playstore.png" class="ml-6" alt="PlayStore Link">
                </div>
            </div>
        </div>

    </div>



    <div class="pick-your-package">
        <h1>Pick Your Desired Package</h1>
        <p>All Packages Are Subscribed Monthly!</p>

        <div class="packages ">
                <div class="package starter-pack">
                    <h2 class="pack-title">STARTER</h2>
                    <div class="pack-features">

                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 3 Apartments</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 60 Tenants</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/cancel.svg" alt="con feature">
                            <p>Tenant Communication</p>
                        </div>

                        <div class="pack-feature">
                            <img src="/storage/icons/cancel.svg" alt="con feature">
                            <p>Room Multi-Assign</p>
                        </div>

                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 3 Apartments</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 60 Tenants</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/cancel.svg" alt="con feature">
                            <p>Tenant Communication</p>
                        </div>

                        <div class="pack-feature">
                            <img src="/storage/icons/cancel.svg" alt="con feature">
                            <p>Room Multi-Assign</p>
                        </div>


                    </div>
                    <button>GET @ 7,000/=</button>
                </div>


                <div class="package mid-tier-pack">
                    <h2 class="pack-title">MID-TIER</h2>
                    <div class="pack-features">

                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 3 Apartments</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 60 Tenants</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Tenant Communication</p>
                        </div>

                        <div class="pack-feature">
                            <img src="/storage/icons/cancel.svg" alt="con feature">
                            <p>Room Multi-Assign</p>
                        </div>

                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 3 Apartments</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 60 Tenants</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Tenant Communication</p>
                        </div>

                        <div class="pack-feature">
                            <img src="/storage/icons/cancel.svg" alt="con feature">
                            <p>Room Multi-Assign</p>
                        </div>


                    </div>
                    <button>GET @ 15,000/=</button>
                </div>


                <div class="package top-tier-pack">
                    <h2 class="pack-title">TOP-TIER</h2>
                    <div class="pack-features">

                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 3 Apartments</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 60 Tenants</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Tenant Communication</p>
                        </div>

                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Room Multi-Assign</p>
                        </div>

                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 3 Apartments</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Up To 60 Tenants</p>
                        </div>


                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Tenant Communication</p>
                        </div>

                        <div class="pack-feature">
                            <img src="/storage/icons/ok.svg" alt="pro feature">
                            <p>Room Multi-Assign</p>
                        </div>


                    </div>
                    <button>GET @ 27,000/=</button>
                </div>
        </div>
    </div>


    <div class="what-customers-say simcont">
        <h1>What Our Customers Say</h1>
        <div class="customer-remarks">
            <div class="remark-card" v-for="cremark in customerRemarks">
                <img :src="pathFormat('/storage/images/',cremark.profile)" alt="">
                <h1>{{ cremark.name }}</h1>
                <p >
                    I like the service .It has made managing my
                    apartments easy.I can just communicate directly
                    to my clients and be sure that everybody will
                    have received my message
                </p>
            </div>
        </div>

    </div>


    <div class="contact-form">
        <h1>CONTACT US</h1>

        <form action="">

            <div class="input-group">
                <label for="name">NAME</label>
                <input type="text" name="name" placeholder="Enter Name..." required>
            </div>

            <div class="input-group">
                <label for="name">EMAIL</label>
                <input type="email" name="emal" placeholder="Enter Name..." required>
            </div>

            <div class="input-group">
                <label for="name">MESSAGE</label>
                <textarea  name="message" cols="25"  rows="10" placeholder="Enter Name..." required></textarea>
            </div>

            <button >SEND</button>

        </form>

    </div>



    <Footer/>
</template>

<script>
    import Navbar from "@/Components/Navbar";
    import Footer from "@/Components/Footer";

    export default {
        components: {Footer, Navbar},
        props: {

        },
        data(){
            return{

                customerRemarks:[

                    {
                        name: "Omar Njagi",
                        profile: "remark1.jpg"
                    },

                    {
                        name: "Ann Kanyiva",
                        profile: "remark2.jpg"
                    },

                    {
                        name: "Stephen Kimani",
                        profile: "remark3.jpg"
                    },

                    {
                        name: "Franklin Shera",
                        profile: "remark4.jpg"
                    },

                ],
                features:[
                    {
                        icon : "knowclients.svg",
                        title :"Know Your Clients"
                    },
                    {
                        icon : "brochure.svg",
                        title :"Inventory Management"
                    },
                    {
                        icon : "money_circulation.svg",
                        title :"Minitor Cashflow"
                    },
                    {
                        icon : "message_exchange.svg",
                        title :"Reliable Information Exchange"
                    },
                    {
                        icon : "clone.svg",
                        title :"Direct Communication"
                    },
                ],
                steps:[

                    {
                        icon : "registration.svg",
                        title :"Create A Landlord Account With Us",
                        desc : `From here you will now be able to pick your solution according
                                to the number of clients and apartments you want to include in
                                our system`
                    },
                    {
                        icon : "residence.svg",
                        title :"Add Your Apartments & Their Capacity",
                        desc : `Add your apartments , sizes (2 bedromm , 3 bedroom etc) with their
                                respective charges and available units.`
                    },
                    {
                        icon : "mobile.svg",
                        title :`Get Your Clients To Download Our App and Check In
                                    Into Your Apartments`,
                        desc : `After Clients/tenants check in to your apartment you can now
                                allocate a room to the which will now be referencing your tenant.`
                    },
                    {
                        icon : "get_cash.svg",
                        title :`You Are Set To Start Collecting Funds/Rent From
                                Clients/Tenants`,
                        desc : `Rent collection will be at your fingertips now.`
                    },
                     {
                        icon : "communication.svg",
                        title :`Establish Informed Communications Directly With
                                Your Clients`,
                        desc : `Break down middlemen and get feedback from the source.`
                    },


                ],
            }
        },
        methods:{
            pathFormat(path,file){
                return path + file;
            }
        }
    }
</script>

<style scoped>

</style>


