import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import styles from './index.css?inline';
import Sidebar1 from '~/components/sidebar1/sidebar1';
export default component$(() => {
    useStylesScoped$(styles);

  return (
    <>
    <section class="hero-wrap hero-wrap-2" style="background-image: url('/images/instructors-bg.jpg'); height: 450px;">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-center" style="height: 450px;">
                <div class="col-md-9 mb-5 text-center">
                    <p class="breadcrumbs">
                        <span class="me-2"><a href="index.html">Home <i class="fa ion-ios-arrow-round-forward"></i></a></span> 
                        <span class="me-2"><a href="index.html">About <i class="fa ion-ios-arrow-round-forward"></i></a></span>
                        <span>Instructors <i class="fa ion-ios-arrow-round-forward"></i></span>
                    </p>
                    <h1 class="mb-0 bread">Instructors</h1>
                </div>
            </div>
        </div>
    </section>       

    <section class="ftco-section ftco-about-section ftco-no-pt ftco-no-pb viewed">
        <div class="container-xl">
            <div class="row">
                <div class="col-md-9 py-5 heading-section aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div class="py-md-5 px-lg-5">
                        <span class="subheading">Sambodhi Retreat Centre</span>
                        <h1 class="mb-4">About The Teacher</h1>

                        <p>In 1986 Venerable Bhikkhu Sanghasena founded the Mahabodhi International Meditation Centre (MIMC) in Ladakh. Since its inception, Venerable has vigorously and selflessly worked to provide high quality education and shelter for the underprivileged children, health care for the poor and needy patients, a caring home for and respect for the less fortunate old folks and destitute, empowerment and literacy programs for elderly women and many other multifarious humanitarian services. Above all these activities, spiritual program was his consequential projects. Under this program, Vipassana and Samatha Meditation course are conducted and time to time Dhamma talk by Venerable based in the essence of the Buddha's teachings Venerable is a well acclaimed senior meditation teacher, who has touched the hearts of thousands through his simple and harmonious way of teaching and his popular slogan "Compassion in Action, Mediation in Action."</p>


                        <h2>Benefits of Meditation:</h2>
                        <p>Meditation course is designed to the people</p>
                        <ol class="instructors">
                            <li>To find immediate physical and psychological relaxation.</li>
                            <li>To train and discipline the mind and use it positively, effectively and efficiently in daily life.</li>
                            <li>To develop tranquility, serenity and clarity of mind.</li>
                            <li>To find practical solutions to the problems occurring in our daily lives.</li>
                            <li>To learn the art of living in this world peacefully, harmoniously, friendly, mindfully, creatively, positively, helping and serving, caring and sharing with each other's without hurting and harming each others.</li>
                            <li>To help experiencing the ultimate bliss of Nirvana</li>
                        </ol>


                        

                    </div>
                </div>
                <div class="col-md-3">
                    <Sidebar1 />
                </div>
            </div>
        </div>
    </section>
    <br /> <br /> <br /> <br />
  </>
  );
});

export const head: DocumentHead = {
  title: 'Instructors - Sambodhi Retreat Centre',
  meta: [
    {
      name: 'description',
      content: 'Instructors - Sambodhi Retreat Centre',
    },
  ],
};