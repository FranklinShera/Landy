<template>
    <div class="footer ">

        <div class="footer-left-side">

            <ApplicationLogo wi="200" hi="70"/>

            <p class="font-italic">
                A realiable business partner
                for your real estate
            </p>

            <p class="mt-1 font-bold">
                &copy;2021 All Rights Reserved.
            </p>

        </div>

        <div class="footer-middle">

            <div class="footer-item">

                <img class="footer-item-icon" src="/storage/icons/address.svg" />

                <div class="footer-item-content">
                    P.O Box 212,<br/>
                    Nairobi, Kenya
                </div>

            </div>

            <div class="footer-item">

                <img class="footer-item-icon" src="/storage/icons/zip_code.svg" />

                <div class="footer-item-content">
                    P.O Box 212,<br/>
                    Nairobi, Kenya
                </div>

            </div>

        </div>

        <div class="footer-right-side">

            <div class="footer-item">

                <img class="footer-item-icon" src="/storage/icons/send_email.svg" />

                <div class="footer-item-content">
                    info@landy.com
                </div>
            </div>

            <div class="footer-item">

                <img class="footer-item-icon" src="/storage/icons/website.svg" />

                <div class="footer-item-content">
                    www.landy.com
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    import ApplicationLogo from "@/Jetstream/ApplicationLogo";
    export default {
        name: "Footer",
        components: {ApplicationLogo},
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
