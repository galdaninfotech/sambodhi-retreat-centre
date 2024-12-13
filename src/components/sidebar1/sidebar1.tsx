import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './sidebar1.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
        <div id="recent-posts-4" class="widget widget_recent_entries posts_holder">
            <ul>
                <li> <a href="https://mahabodhi=ladakh.com/">Why Choose MIMC's Course?</a> </li>
                <li> <a href="https://mahabodhi=ladakh.com/">Who Should Attend?</a> </li>
                <li> <a href="https://mahabodhi=ladakh.com/">Why Yoga?</a> </li>
                <li> <a href="https://mahabodhi=ladakh.com/">Yoga for All Levels</a> </li>
                <li> <a href="https://mahabodhi=ladakh.com/">Contact For Sponsorship</a> </li>
            </ul>
        </div>
        
    </>
    );
});
