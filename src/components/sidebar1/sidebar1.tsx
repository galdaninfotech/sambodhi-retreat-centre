import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './sidebar1.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
        <div id="recent-posts-4" class="widget widget_recent_entries posts_holder">
            <h4>Recent Posts</h4>
            <ul>
                <li> <a href="https://mahabodhi=ladakh.com/">Why Choose MIMC's Course?</a> </li>
                <li> <a href="https://mahabodhi=ladakh.com/">Who Should Attend?</a> </li>
                <li> <a href="https://mahabodhi=ladakh.com/">Why Yoga?</a> </li>
                <li> <a href="https://mahabodhi=ladakh.com/">Yoga for All Levels</a> </li>
                <li> <a href="https://mahabodhi=ladakh.com/">Contact For Sponsorship</a> </li>
            </ul>
        </div>
        <div id="categories-3" class="widget widget_categories posts_holder">
            <h4>Categories</h4>
            <ul>
                <li class="cat-item cat-item-2"><a href="https://mahabodhi=ladakh.com/">Eduction</a></li>
                <li class="cat-item cat-item-5"><a href="https://mahabodhi=ladakh.com/">Culture</a></li>
                <li class="cat-item cat-item-10"><a href="https://mahabodhi=ladakh.com/">Welfare</a></li>
                <li class="cat-item cat-item-5"><a href="https://mahabodhi=ladakh.com/">Health</a></li>
                <li class="cat-item cat-item-5"><a href="https://mahabodhi=ladakh.com/">Meditation</a></li>
                <li class="cat-item cat-item-5"><a href="https://mahabodhi=ladakh.com/">Yoga</a></li>
            </ul>    
        </div>
    </>
    );
});
