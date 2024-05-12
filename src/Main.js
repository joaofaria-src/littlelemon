import React from 'react';
import image from './Images/restauranfood.jpg';
import dish1 from './Images/dish1.jpg';
import dish2 from './Images/dish2.svg';
import dish3 from './Images/dish3.jpg';
import user1 from './Images/user1.jpg';
import user2 from './Images/user2.jpg';
import user3 from './Images/user3.jpg';
import user4 from './Images/user4.jpg';
import chefs from './Images/chefs.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiking } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Main() {
    return (
        <main>
            <section className="hero-section">
                <div className="text-content">
                    <div className="title">Little Lemon</div>
                    <div className="subtitle">Chicago</div>
                    <p>We are a family owned<br />
                        Mediterranean restaurant,<br />
                        focused on traditional<br />
                        recipes served with a modern<br />
                        twist.</p>
                    <button className="reserve-button">Reserve a Table</button>
                </div>
                <div className="restaurant-image">
                    <img src={image} alt="Little Lemon Restaurant" />
                </div>
            </section>
            <section className="highlights-section">
                <div className="highlights-content">
                    <h2>This week's specials</h2>
                    <button className="order-menu-button">Order Menu</button>
                </div>
            </section>
            <section className="dishes-section">
                <div className="dish-card">
                    <img src={dish1} alt="Dish 1" className="dish-image" />
                    <div className="dish-details">
                        <h3>Greek Salad</h3>
                        <p className="dish-price">$10.99</p>
                        </div>
                        <p className="dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <p className="order-delivery">Order a delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" /></p>
                </div>

                <div className="dish-card">
                    <img src={dish2} alt="Dish 2" className="dish-image" />
                    <div className="dish-details">
                        <h3>Bruchetta</h3>
                        <p className="dish-price">$12.99</p>
                        </div>
                        <p className="dish-description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <p className="order-delivery">Order a delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" /></p>
                </div>

                <div className="dish-card">
                    <img src={dish3} alt="Dish 3" className="dish-image" />
                    <div className="dish-details">
                        <h3>Lemon Dessert</h3>
                        <p className="dish-price">$8.99</p>
                        </div>
                        <p className="dish-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <p className="order-delivery">Order a delivery <FontAwesomeIcon icon={faBiking} className="delivery-icon" /></p>
                </div>
            </section>
            <section className="testimonials-section" style={{ backgroundColor: '#D9D9D9' }}>
                <h2 className="testimonials-title">Testimonials</h2>
                <div className="testimonial-grid">
                    <div className="testimonial">
                        <img src={user1} alt="Testimonial 1" className="testimonial-image" />
                        <div className="testimonial-details">
                            <h3>John Doe</h3>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </div>
                            <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.</p>
                        </div>
                    </div>
                    <div className="testimonial">
                        <img src={user2} alt="Testimonial 1" className="testimonial-image" />
                        <div className="testimonial-details">
                            <h3>John Doe</h3>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </div>
                            <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.</p>
                        </div>
                    </div>
                    <div className="testimonial">
                        <img src={user3} alt="Testimonial 1" className="testimonial-image" />
                        <div className="testimonial-details">
                            <h3>John Doe</h3>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </div>
                            <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.</p>
                        </div>
                    </div>
                    <div className="testimonial">
                        <img src={user4} alt="Testimonial 1" className="testimonial-image" />
                        <div className="testimonial-details">
                            <h3>John Doe</h3>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                                <FontAwesomeIcon icon={faStar} className="star" />
                            </div>
                            <p className="review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-us-section">
    <div className="about-us-content">
        <div className="about-us-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
    </div>
    <div className="about-us-image">
        <img src={chefs} alt="About Us" />
    </div>
</section>
        </main>
    );
}

export default Main;