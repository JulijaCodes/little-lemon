import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <main className="main">
      <section className="hero">
        <div>
          <h1>Little Lemon</h1>
          <h2 className="subheading">Chicago</h2>
          <p>
            Experience the finest Mediterranean flavors, crafted with tradition and passion. Since 1968, we've been serving authentic dishes made from the freshest ingredients, bringing the warmth of the Mediterranean to your table.
          </p>
          <button onClick={() => navigate("/booking")}>Reserve a Table</button>
        </div>
        <div>
          <img src="/restaurant-chef.jpg" alt="restaurant-chef" className="hero-image" />
        </div>
      </section>

      <section className="specials">
        <div className="heading-button">
          <h2>Specials</h2>
          <button>Online Menu</button>
        </div>
        <div className="specials-grid">
          <article className="special-item">
            <img src="/greek salad.jpg" alt="Greek Salad" />
            <div className="special-text">
              <div className="special-name-price">
                <h3>Greek Salad</h3>
                <p className="price">$12.99</p>
              </div>
              <p>
                A refreshing mix of crisp lettuce, juicy tomatoes, crunchy cucumbers, and red onions, all topped with creamy feta cheese and Kalamata olives. Drizzled with a zesty olive oil dressing for a Mediterranean delight.
              </p>
            </div>
          </article>
          <article className="special-item">
            <img src="/bruchetta.jpg" alt="Bruschetta" />
            <div className="special-text">
              <div className="special-name-price">
                <h3>Bruschetta</h3>
                <p className="price">$5.99</p>
              </div>
              <p>
                Slices of rustic, grilled bread topped with a vibrant mixture of diced tomatoes, fresh basil, and garlic, infused with extra virgin olive oil and a hint of balsamic glaze for the perfect balance of flavors.
              </p>
            </div>
          </article>
          <article className="special-item">
            <img src="/lemon dessert.jpg" alt="Lemon Dessert" />
            <div className="special-text">
              <div className="special-name-price">
                <h3>Lemon Dessert</h3>
                <p className="price">$5.99</p>
              </div>
              <p>
                A luscious lemon-infused pastry with a delicate, buttery crust and a smooth, tangy-sweet filling, finished with a dusting of powdered sugar for a delightful citrus treat.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <img src="/sarah.png" alt="sarah-guest" />
            <p>🍋 🍋 🍋 🍋 🍋</p>
            <p>"Absolutely delicious! The freshest ingredients and bold flavors make every bite amazing!"</p>
            <p className="guest-name">- Sarah</p>
          </div>
          <div className="testimonial">
            <img src="/ahmed.png" alt="ahmed-guest" />
            <p>🍋 🍋 🍋 🍋 🍋</p>
            <p>"Incredible atmosphere and friendly staff! The lemon pastries are a must-try."</p>
            <p className="guest-name">- Ahmed</p>
          </div>
          <div className="testimonial">
            <img src="/emma.png" alt="emma-guest" />
            <p>🍋 🍋 🍋 🍋 🍋</p>
            <p>"Best Mediterranean food in town! Everything tastes homemade and full of love."</p>
            <p className="guest-name">- Emma</p>
          </div>
          <div className="testimonial">
            <img src="/ben.png" alt="ben-guest" />
            <p>🍋 🍋 🍋 🍋 🍋</p>
            <p>"Fast service, great portions, and the grilled bread with tomato & basil is perfection!"</p>
            <p className="guest-name">- Ben</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-text">
          <h2>About Little Lemon</h2>
          <p>
            At Little Lemon, we bring the heart of the Mediterranean straight to your plate. Founded by expert chefs Adrian and Mario, our restaurant is built on a passion for fresh, authentic flavors and warm hospitality. With years of experience in crafting traditional recipes with a modern twist, Adrian and Mario carefully select the finest ingredients to create dishes that transport you to sun-soaked coastal villages with every bite.
            <br />
            <br />
            From our vibrant Greek salads to our tangy lemon-infused desserts, every meal is a celebration of taste and tradition. Whether you're here for a quick bite or a leisurely dining experience, we welcome you to savor the flavors, enjoy the atmosphere, and become part of the Little Lemon family. 🍋✨
          </p>
        </div>
        <div className="about-images">
          <img src="/restaurant.jpg" alt="Restaurant" />
          <img src="/mario-adrian-1.jpg" alt="Adrian and Mario" />
          <img src="/mario-adrian-2.jpg" alt="Adrian and Mario" />
        </div>
      </section>
    </main>
  );
};

export default Main;