import style from './Menu.module.css'

const Menu = () => {
  return (
    <section className={style.menuSection}>
      <div className={style.menuTopStripe}></div>
      <h1 className={style.menuSectionHeading}>Menu</h1>
      <div className={style.menuSectionTextContainer}>
        <div className={style.menuBottomStripe}></div>
        <section className={style.menuSectionCard}>
            <h2 className={style.menuSectionSubHeading}>APPETIZERS</h2>
            <h3>Complementry Chips and Salsa (Additonal baskets $2.00)</h3>
            <div className={style.menuItemContainer}>
              <span>NACHOS</span>
              <span>$9.25</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Chips layered with cheese, beans and topped with sour cream, guacamole & tomatos</p>
              <p>Chicken or Beef add $1.00</p>
              <p>Linda's style topped w/ enchilada sauce add $1.00</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>GUACAMOLE DIP</span>
              <span>$8.75</span>
            </div>
            <div className={style.menuItemContainer}>
              <span>POTATO SKINS</span>
              <span>$9.75</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Topped with cheese, jalapenos, guacamole, sour cream and tomatos</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>CHEESY "n" SAUCY BEAN DIP</span>
              <span>$8.75</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Topped with toasted jalapenos</p>
            </div>
        </section>

        <section className={style.menuSectionCard}>
            <h2 className={style.menuSectionSubHeading}>SPECIALTY COMBINATIONS</h2>
            <h3>(Served with soup or salad)</h3>
            <div className={style.menuItemContainer}>
              <span>FAJITAS</span>
              <span>$16.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Grilled steak or chicken in garlic, onions & bell peppers</p>
              <p>Served with guac, sour cream & your choice of flour or corn tortillas</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>SHRIMP FAJITAS</span>
              <span>$17.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Grilled shrimp in garlic, onions & bell peppers</p>
              <p>Served with guac, sour cream & your choice of flour or corn tortillas</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>CAMARONES</span>
              <span>$18.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Shrimp sauteed in garlic, onions, tomatoes & cilantro</p>
              <p>Served in a special sauce</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>VICTORIA'S FIESTA COMBO</span>
              <span>$18.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>One chile relleno, cheese enchilada, beef taco & chile verde burrito</p>
            </div>
        </section>

        <section className={style.menuSectionCard}>
            <h2 className={style.menuSectionSubHeading}>COMBINATIONS</h2>
            <h3>Served with rice & beans. (For an additional $1.00 add soup or salad)</h3>
            <div className={style.menuItemContainer}>
              <span>1. ONE TACO</span>
              <span>$8.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(Beef or chicken)</p>
              <p>(add $1.00 for Carne asada)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>2. ONE CHOICE OF ENCHILADA, CHILE RELLENO OR TAMALE</span>
              <span>$9.95</span>
            </div>
            <div className={style.menuItemContainer}>
              <span>3. ONE BEAN AND CHEESE BURRITO</span>
              <span>$8.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(Add $1.00 for meat)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>4. ONE TOSTADA</span>
              <span>$9.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(Beef or chicken)</p>
              <p>(Add $1.00 for Carne asada)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>5. ONE CHEESE ENCHILADA & ONE GROUND BEEF TACO</span>
              <span>$10.95</span>
            </div>
            <div className={style.menuItemContainer}>
              <span>6. ONE CHILE VERDE BURRITO & ONE CHILE RELLENO</span>
              <span>$12.95</span>
            </div>
            <div className={style.menuItemContainer}>
              <span>7. TWO ENCHILADAS</span>
              <span>$10.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(cheese, beef or chicken)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>8. ONE CHILE RELLENO & ONE ENCHILADA</span>
              <span>$11.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(cheese, beef or chicken)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>9. THREE FLAUTAS</span>
              <span>$11.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(shredded beef or chicken, topped with sour cream & guac)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>10. ONE TAMALE, ONE CHILI RELLENO & ONE CHEESE ENCHILADA</span>
              <span>$14.95</span>
            </div>
            <div className={style.menuItemContainer}>
              <span>11. ONE CHEESE ENCHILADA & ONE CHILI VERDE BURRITO</span>
              <span>$12.50</span>
            </div>
            <div className={style.menuItemContainer}>
              <span>12. CHILE VERDE</span>
              <span>$13.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(Served with tortillas)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>13. CHILE COLORADO</span>
              <span>$13.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(Served with tortillas)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>14. STEAK RANCHERO</span>
              <span>$14.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(Served with tortillas)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>15. TWO TACOS</span>
              <span>$11.50</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(beef or chicken, soft or crispy)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>16. CARNE ASADA</span>
              <span>$14.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(Served with tortillas)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>17. CARNITAS</span>
              <span>$14.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(Served with tortillas)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>18. CHIMICHANGA</span>
              <span>$14.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>(Chicken, shredded beef, or chile verde)</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>19. ONE CHILE RELLENO & ONE GROUND BEEF TACO</span>
              <span>$11.95</span>
            </div>
            <div className={style.menuItemContainer}>
              <span>20. TWO CHILI RELLENOS OR TWO TAMALES</span>
              <span>$14.25</span>
            </div>
        </section>

        <section className={style.menuSectionCard}>
            <h2 className={style.menuSectionSubHeading}>BEVERAGES</h2>
            <div className={style.menuItemContainer}>
              <span>DRINKS</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Coke, Diet Coke, Sprite, Lemonade, Root Beer, Ice Tea, Milk, Coffee</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>WINE</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Local Wine</p>
              <p>Glass $6.25</p>
              <p>Bottle $$14.50</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>DOMESTIC BEER</span>
              <span>$4.00</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Coors Light, Bud Light, O'doul's</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>IMPORTED BEER</span>
              <span>$4.50</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Corona, Corona Light, Tecate, Pacifico, Negro Modello, Modello Especial</p>
            </div>
        </section>

        <section className={style.menuSectionCard}>
            <h2 className={style.menuSectionSubHeading}>VICTORIA'S TEQUILA MARGARITA'S</h2>
            <div className={style.menuItemContainer}>
              <span>REGULAR MARGARITA</span>
              <span>$7.75</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Top shelf add $2.00</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>REGULAR MARGARITA PITCHER</span>
              <span>$31.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Top shelf add $8.00</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>FLAVORED MARGARITA</span>
              <span>$8.00</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Top shelf add $2.00</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>FLAVORED MARGARITA PITCHER</span>
              <span>$35.95</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Top shelf add $8.00</p>
            </div>
        </section>

        <section className={style.menuSectionCard}>
            <h2 className={style.menuSectionSubHeading}>Appetizers</h2>
            <h3>Complementry Chips and Salsa (Additonal baskets $2.00)</h3>
            <div className={style.menuItemContainer}>
              <span>NACHOS</span>
              <span>$9.25</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Chips layered with cheese, beans and topped with sour cream, guacamole & tomatos</p>
              <p>Chicken or Beef add $1.00</p>
              <p>Linda's style topped w/ enchilada sauce add $1.00</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>GUACAMOLE DIP</span>
              <span>$8.75</span>
            </div>
            <div className={style.menuItemContainer}>
              <span>POTATO SKINS</span>
              <span>$9.75</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Topped with cheese, jalapenos, guacamole, sour cream and tomatos</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>CHEESY "n" SAUCY BEAN DIP</span>
              <span>$8.75</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Topped with toasted jalapenos</p>
            </div>
        </section>

        <section className={style.menuSectionCard}>
            <h2 className={style.menuSectionSubHeading}>Appetizers</h2>
            <h3>Complementry Chips and Salsa (Additonal baskets $2.00)</h3>
            <div className={style.menuItemContainer}>
              <span>NACHOS</span>
              <span>$9.25</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Chips layered with cheese, beans and topped with sour cream, guacamole & tomatos</p>
              <p>Chicken or Beef add $1.00</p>
              <p>Linda's style topped w/ enchilada sauce add $1.00</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>GUACAMOLE DIP</span>
              <span>$8.75</span>
            </div>
            <div className={style.menuItemContainer}>
              <span>POTATO SKINS</span>
              <span>$9.75</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Topped with cheese, jalapenos, guacamole, sour cream and tomatos</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>CHEESY "n" SAUCY BEAN DIP</span>
              <span>$8.75</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Topped with toasted jalapenos</p>
            </div>
        </section>

        <section className={style.menuSectionCard}>
            <h2 className={style.menuSectionSubHeading}>Appetizers</h2>
            <h3>Complementry Chips and Salsa (Additonal baskets $2.00)</h3>
            <div className={style.menuItemContainer}>
              <span>NACHOS</span>
              <span>$9.25</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Chips layered with cheese, beans and topped with sour cream, guacamole & tomatos</p>
              <p>Chicken or Beef add $1.00</p>
              <p>Linda's style topped w/ enchilada sauce add $1.00</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>GUACAMOLE DIP</span>
              <span>$8.75</span>
            </div>
            <div className={style.menuItemContainer}>
              <span>POTATO SKINS</span>
              <span>$9.75</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Topped with cheese, jalapenos, guacamole, sour cream and tomatos</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>CHEESY "n" SAUCY BEAN DIP</span>
              <span>$8.75</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Topped with toasted jalapenos</p>
            </div>
        </section>

        <section className={style.menuSectionCard}>
            <h2 className={style.menuSectionSubHeading}>Appetizers</h2>
            <h3>Complementry Chips and Salsa (Additonal baskets $2.00)</h3>
            <div className={style.menuItemContainer}>
              <span>NACHOS</span>
              <span>$9.25</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Chips layered with cheese, beans and topped with sour cream, guacamole & tomatos</p>
              <p>Chicken or Beef add $1.00</p>
              <p>Linda's style topped w/ enchilada sauce add $1.00</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>GUACAMOLE DIP</span>
              <span>$8.75</span>
            </div>
            <div className={style.menuItemContainer}>
              <span>POTATO SKINS</span>
              <span>$9.75</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Topped with cheese, jalapenos, guacamole, sour cream and tomatos</p>
            </div>
            <div className={style.menuItemContainer}>
              <span>CHEESY "n" SAUCY BEAN DIP</span>
              <span>$8.75</span>
            </div>
            <div className={style.menuItemDescriptionContainer}>
              <p>Topped with toasted jalapenos</p>
            </div>
        </section>

        
        <div className={style.menuBottomStripe}></div>
      </div>
    </section>
  )
};

export default Menu;
