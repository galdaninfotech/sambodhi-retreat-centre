import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.module.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer class="ftco-footer">
        <div class="container-xl">
            <div class="row mb-5 pb-5 justify-content-between">
                <div class="col-md-6 col-lg">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2 logo d-flex">
                            <a class="navbar-brand d-flex align-items-center" href="index.html">
                                <div class="icon d-flex align-items-center justify-content-center"><img style="width: 20px;" src="images/logo1.png" alt="" /></div>
                                <span class="">Mahabodhi <small>Meditation &amp; & Yoga</small></span>
                            </a>
                        </h2>
                        <p>The incredibly beautiful Sambodhi Retreat Centre, an inspiring oasis of tranquil contemplation, is situated in a secluded corner of the transformative Mahabodhi International Meditation Centre campus.
                        </p>
                        <ul class="ftco-footer-social list-unstyled mt-2">
                            <li><a href="#"><span class="fa fa-twitter"></span></a></li>
                            <li><a href="#"><span class="fa fa-facebook"></span></a></li>
                            <li><a href="#"><span class="fa fa-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-2">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Explore</h2>
                        <ul class="list-unstyled">
                            <li><a href="#"><span class="fa ion-ios-arrow-round-forward me-3"></span>About Us</a></li>
                            <li><a href="#"><span class="fa ion-ios-arrow-round-forward me-3"></span>Instructors</a></li>
                            <li><a href="#"><span class="fa ion-ios-arrow-round-forward me-3"></span>Upcoming Events</a></li>
                            <li><a href="#"><span class="fa ion-ios-arrow-round-forward me-3"></span>Registration</a></li>
                            <li><a href="#"><span class="fa ion-ios-arrow-round-forward me-3"></span>Latest News</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-2">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Our Contacts</h2>
                        <div class="block-23 mb-3">
                            <ul>
                                <li><span class="icon fa fa-map marker"></span><span class="text">Sambodhi Retreat Centre</span></li>
                                <li><a href="tel:+91 9103188699"><span class="icon fa fa-phone"></span><span class="text">+91 9103188699</span></a></li>
                                <li><a href="tel:+91 8899885112"><span class="icon fa fa-phone"></span><span class="text">+91 8899885112</span></a></li>
                                <li>
                                    <a href="mailto:yagoinfocentre@gmail.com">
                                        <span class="icon fa fa-paper-plane"></span>
                                        <span class="text"><span class="__cf_email__"></span>
                                            yagoinfocentre@gmail.com
                                        </span>
                                    </a>
                                    <a href="mailto:mimc.sambodhi@gmail.com">
                                        <span class="icon fa fa-paper-plane"></span>
                                        <span class="text"><span class="__cf_email__"></span>
                                            mimc.sambodhi@gmail.com
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="ftco-footer-widget mb-4">
                        <div class="row g-sm-2">
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <a href="#" class="img gallery" style="background-image: url(/images/footer/gallery-1.jpg);"></a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <a href="#" class="img gallery" style="background-image: url(/images/footer/gallery-2.jpg);"></a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <a href="#" class="img gallery" style="background-image: url(/images/footer/gallery-3.jpg);"></a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <a href="#" class="img gallery" style="background-image: url(/images/footer/gallery-4.jpg);"></a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <a href="#" class="img gallery" style="background-image: url(/images/footer/gallery-5.jpg);"></a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <a href="#" class="img gallery" style="background-image: url(/images/footer/gallery-6.jpg);"></a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <a href="#" class="img gallery" style="background-image: url(/images/footer/gallery-7.jpg);"></a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <a href="#" class="img gallery" style="background-image: url(/images/footer/gallery-8.jpg);"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid px-0 py-5 bg-darken">
            <div class="container-xl">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p class="mb-0" style="color: rgba(255,255,255,.5); font-size: 13px;">
                            Copyright ©<script data-cfasync="false" src="js/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script>All rights reserved | <i class="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="https://sambodhi.com" target="_blank" rel="nofollow noopener">Sambodhi Retreat Centre</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
});
