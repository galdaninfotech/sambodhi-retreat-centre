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
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/about/about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/about/mahabodhi-sambodhi-retreat-centre">Mahabodhi Sambodhi Retreat Centre</a>
                            <a class="dropdown-item" href="/about/facilities">Facilities</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/about/guidelines">Guideline</a>
                            <a class="dropdown-item" href="/about/instructors">Instructors</a>
                            <a class="dropdown-item" href="/about/history-of-mimc">History of MIMC</a>
                            <a class="dropdown-item" href="/about/testimonials">Testimonials</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/about-the-founder/about-the-founder" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About The Founder</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/about-the-founder/background">Background</a>
                            <a class="dropdown-item" href="/about-the-founder/vision">Vision</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/about-the-founder/story">Story</a>
                            </div>
                        </li>

                        <li class="nav-item"><a class="nav-link" href="/courses-and-retreats">Courses and Retreats</a></li>
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