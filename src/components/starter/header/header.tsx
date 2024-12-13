import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
        <div class="top-wrap">
            <div class="container-xl">
                <div class="row justify-content-end">
                    <div class="col-md topper d-flex align-items-xl-center">
                        <div class="text">
                            <p class="con">
                                <span>Call Us Now:</span> <span>+91 9103188699</span>
                                <span>&nbsp;/&nbsp;</span>
                                <span>+91 9103188699</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-md topper d-flex align-items-xl-center justify-content-end">
                        <ul class="ftco-social">
                            <li><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
                            <li><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
                            <li><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg  ftco-navbar-light">
            <div class="container-xl">
                <a class="navbar-brand d-flex align-items-center" href="index.html">
                    <div class="icon d-flex align-items-center justify-content-center"><img style="width: 20px;" src="/images/logo2.png" alt="" /></div>
                    <span class="">Mahabodhi <small>Meditation &amp; & Yoga</small></span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars"></span> Menu
                </button>
                <div class="collapse navbar-collapse border-top-custom" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-lg-5">
                        <li class="nav-item"><a class="nav-link active" href="/">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="/courses">Courses</a></li>
                        <li class="nav-item"><a class="nav-link" href="/instructors">Instructors</a></li>
                        <li class="nav-item"><a class="nav-link" href="/testimonials">Testimonials</a></li>
                        <li class="nav-item"><a class="nav-link" href="/upcoming-events">Upcoming Events</a></li>
                        <li class="nav-item"><a class="nav-link" href="/gallery">Gallery</a></li>
                        <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                    </ul>
                    <a href="#" class="btn-custom">Join Us Today!</a>
                </div>
            </div>
        </nav>
        
    </>
  );
});