import style from './Menu.module.css'

const Menu = () => {
  return (
    <section className={style.menuSection}>
      <h1 className={style.menuSectionHeading}>Menu</h1>
      <section className={style.menuSectionTextContainerParent}>
        <div className={style.menuSectionTextContainer}>      
          <section className={style.menuSectionCard}>
            <div className={style.menuSectionItemContainer}>
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
            </div>
          
            <div className={style.menuSectionItemContainer}>
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
            </div>

            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>FAMILY FAVORITES</h2>
              <div className={style.menuItemContainer}>
                <span>DONALD'S FAVORITE</span>
                <span>$10.25</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>2 Soft chicken tacos</p>
                <p>Served with rice and beans</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>EMMA'S SALAD</span>
                <span>$10.25</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Chicken, cilantro, onions, & whole beans</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>MICHAEL'S FAVORITE</span>
                <span>$11.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>2 Chicken Enchiladas</p>
                <p>Topped with green sauce, cheese, guacamole & jalapenos</p>
                <p>Served with rice and beans</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>LAUREN'S GRILLED CHICKEN SALAD</span>
                <span>$12.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Grilled chicken salad</p>
                <p>Lettuce, whole beans, cheese and tomatoes</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>PRESLEY'S FAVORITE</span>
                <span>$16.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>(Tuesday-Satuday only)</p>
                <p>Tilapia, shrimp, and rice</p>
                <p>Toped with cheese, wrapped in foil</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>JOHN PERALES' SALAD</span>
                <span>$17.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Prawns, grilled chicken and special sauce</p>
                <p>Served with rice and beans</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>ERNESTO'S SEAFOOD TACO PLATTER</span>
                <span>$14.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>2 Shrimp or fish tacos</p>
                <p>Served with rice and beans</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>CARMEN'S FAVORITE</span>
                <span>$11.25</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>3 Mini soft tacos</p>
                <p>Served with cilantro, onions and special sauce</p>
                <p>Served with rice and beans</p>
              </div>
            </div>

            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>MAIN DISHES</h2>
              <div className={style.menuItemContainer}>
                <span>TACO SALAD</span>
                <span>$11.25</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Tortilla bowl (Beef or chicken)</p>
                <p>Topped with cheese, sour cream & guacomole</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>FAJITA SALAD</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Beef or chicken $12.50</p>
                <p>Shrimp $13.95</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>TOSTADAS</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Beef, chicken, carnitas or carne asada $9.50</p>
                <p>Bean and cheese $850</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>QUESADILLAS</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Cheese $8.25</p>
                <p>Chicken, beef, or chile verde $9.25</p>
                <p>Add rice and beans $2.00</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>TWO TACOS</span>
                <span>$7.50</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Beef, chicken, carnitas, carne asada, or potato(Wed-sat only)</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>BURRITOS</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Chile verde, chile colorado, carnitas, carne asada or chicken $8.25</p>
                <p>Bean & cheese $6.95</p>
                <p>Veggie (Rice, beans, sour cream, guacamole, lettuce) $7.50</p>
                <p>Topped with sauce and cheese add $2.00</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>Enchiladas</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Choice of beef, chicken or cheese $5.50</p>
                <p>Flour enchilada $6.25</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>BREAKFAST SERVED ALL DAY</span>
                <span>$10.25</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Huevos rancheros, chorizo, or machaca</p>
                <p>Served with rice and beans</p>
              </div>
              <div className={style.menuItemContainer}>
                <span>MENUDO (Friday & Satuday only)</span>
                <span>$10.95</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Choice of flour or corn tortillas</p>
              </div>
            </div>
          </section>

          <section className={style.menuSectionCard}>
            <div className={style.menuSectionItemContainer}>
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
            </div>

            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>CHILDREN'S PLATTER</h2>
              <h3>(12 & under only)</h3>
              <h3>$6.99</h3>
              <div className={style.menuItemContainer}>
                <span>Choice of one of the following:</span>
              </div>
              <div className={style.menuItemDescriptionContainer}>
                <p>Taco (Beef or chicken) (Carne asada add $1.00)</p>
                <p>Bean & cheese burrito</p>
                <p>Cheese quesadilla</p>
                <p>Enchilada (Beef, chicken or cheese)</p>
              </div>
            </div>

            <div className={style.menuSectionItemContainer}>
              <h2 className={style.menuSectionSubHeading}>A LA CARTE</h2>
              <div className={style.menuItemDescriptionContainer}>
                <p className={style.menuItemALaCarte}>TAMALE OR CHILE RELLENO $6.25</p>
                <p className={style.menuItemALaCarte}>RICE OR BEANS $3.50</p>
                <p className={style.menuItemALaCarte}>GREEN SALAD $3.75</p>
                <p className={style.menuItemALaCarte}>TORTILLAS $1.75</p>
                <p className={style.menuItemALaCarte}>SIDE OF SOUR CREAM $1.25</p>
                <p className={style.menuItemALaCarte}>CHIPS $3.95</p>
                <p className={style.menuItemALaCarte}>SALSA $4.95</p>
                <p className={style.menuItemALaCarte}>SIDE OF ??? $10.95</p>
                <p className={style.menuItemALaCarte}>SOUP $10.95</p>
                <p className={style.menuItemALaCarte}>SOUP $10.95</p>
              </div>
            </div>

            <div className={style.menuSectionItemContainer}>
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
            </div>

            <div className={style.menuSectionItemContainer}>
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
            </div>

          </section>
        </div>
      </section>
    </section>
  )
};

export default Menu;
