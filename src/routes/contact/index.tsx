import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';
export default component$(() => {
    useStylesScoped$(styles);

  return (
    <>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/contact-bg.jpg'); height: 450px;">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-center" style="height: 450px;">
                <div class="col-md-9 mb-5 text-center">
                    <p class="breadcrumbs"><span class="me-2"><a href="index.html">Home <i class="fa ion-ios-arrow-round-forward"></i></a></span> <span>Contact Us <i class="fa ion-ios-arrow-round-forward"></i></span></p>
                    <h1 class="mb-0 bread">Contact Us</h1>
                </div>
            </div>
        </div>
    </section>       

    <section class="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container-xl-fluid">
        <div class="row no-gutters justify-content-center">
            <div class="col-md-12">
            <div class="wrapper">
                <div class="row g-0">
                <div class="col-lg-6">
                    <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3>Contact Us</h3>
                    <p class="mb-4">We're open for any suggestion or just to have a chat</p>
                    <div class="row mb-4">
                        <div class="col-md-4">
                            <div class="dbox w-100 d-flex align-items-start">
                                <div class="text">
                                    <p><span>Address:</span> MIMC Changspa Centre</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="dbox w-100 d-flex align-items-start">
                                <div class="text">
                                    <p><span>Email:</span> <a href="mailto:yagoinfocentre@gmail.com">yagoinfocentre@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="dbox w-100 d-flex align-items-start">
                                <div class="text">
                                    <p><span>Phone:</span> <a href="tel:+91-9797415143">+91-9797415143</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-md-4">
                            <div class="dbox w-100 d-flex align-items-start">
                                <div class="text">
                                    <p><span>Address:</span> Sambodhi Retreat Centre</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="dbox w-100 d-flex align-items-start">
                                <div class="text">
                                    <p><span>Email:</span> <a href="mailto:yagoinfocentre@gmail.com">sambodhi@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="dbox w-100 d-flex align-items-start">
                                <div class="text">
                                    <p>
                                        <span>Phone:</span> <a href="tel:+91-9103188699">+91-9103188699</a><br />
                                        <a href="tel:+91-9103188699">+91-9103188699</a><br />
                                        <a href="tel:+91-8899885112">+91-8899885112</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                    <form id="contactForm" name="contactForm" class="contactForm">
                        <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                            <input type="text" class="form-control" name="name" id="name" placeholder="Name" />
                            </div>
                        </div>
                        <div class="col-md-12"> 
                            <div class="form-group">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                            <textarea name="message" class="form-control" id="message" cols={30} rows={4} placeholder="Create a message here"></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                            <input type="submit" value="Send Message" class="btn btn-primary" />
                            <div class="submitting"></div>
                            </div>
                        </div>
                        </div>
                    </form>
                    <div class="w-100 social-media mt-5">
                        <h3>Follow us here</h3>
                        <p>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                        <a href="#">Dribbble</a>
                        </p>
                    </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex align-items-stretch">
                    <div id="map" class="bg-white" style="position: relative; overflow: hidden;">
                        <div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);">
                            <div class="gm-err-container">
                                <div class="gm-err-content">
                                    <div class="gm-err-icon"><img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" alt="" style="user-select: none;" /></div>
                                    <div class="gm-err-title">Sorry! Something went wrong.</div>
                                    <div class="gm-err-message">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  </>
  );
});

export const head: DocumentHead = {
  title: 'Contact Us - Sambodhi Retreat Centre',
  meta: [
    {
      name: 'description',
      content: 'Contact Us - Sambodhi Retreat Centre',
    },
  ],
};