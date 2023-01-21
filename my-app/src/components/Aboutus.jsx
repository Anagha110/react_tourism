import React from "react";
import kerala3 from "./kerala3.jpg";

const Aboutus = () => {
  return (
    <div>
      <header className="Home-header">
        <h3>Aboutus</h3>
      </header>

      <div class="container">
        <div class="row">
          <div class="column">
            <div class="about">
              <p>
                Encompassing serenity, Kerala is a charming South Indian
                destination that should be in every traveller’s bucket list.
                Adorned with the emerald backwaters, sprawling and lush tea
                estates, pristine hill stations, and azure Arabian Sea, Kerala
                tourism boasts numerous tourist places with which you will fall
                in love instantly. In North Kerala, districts like Kasaragod,
                Kannur, Wayanad, Kozhikode, and Malappuram have many attractions
                for the tourists. Wayanad offers a lovely hill station holiday
                whereas Kozhikode offers a great beach holiday and an
                opportunity of bird watching.Best Places to Visit in Kerala ;
                Munnar · Hill Station; Tea Plantation; Waterfalls ; Alleppey ·
                Backwater; Beach ; Kochi · Temple; Museum ; Thrissur · Green
                Fields ... Tourism Attractions: Beaches, Backwaters, Hill ...
                Official Language: Malayalam Major Festivals: Onam, Vishu,
                Thiruvathira Also Known as: God's own country. Kerala, one of
                the most beautiful states in India situated in the southwest
                corner of the country is blessed with the greenery of nature.
                Kerala is one of the most popular tourist destinations. Kerala
                has 14 districts with Thiruvananthapuram (Trivandrum) as the
                capital. The Port city Kochi and Kozhikode are the other two
                major cities in Kerala. There are three airports providing
                international as well as domestic connections. The state is
                spread in an area of 38,863 square kilometer with a population
                of 31.8 million. Languages spoken are Malayalam, Hindi and
                English. In literacy, Kerala stands first among the Indian
                states with a literacy rate of 90.9%. Kerala is a secular place.
                Religion in Kerala is a mixture of different faiths; Hinduism,
                Islam and Christianity being the most significant among them.
                The climate in Kerala is tropical. The summer (February - May)
                and Monsoon (June - August) are the seasons specifically
                experienced here. The best time to visit Kerala is between
                August and March. Important food crops in Kerala are Rice and
                Tapioca. Kerala is a major producer of coconut, rubber, pepper,
                cardamom, cashew, coffee, tea, ginger and cocoa. Spices like
                cinnamon and cloves are cultivated in Kerala.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 p-8">
        <img
          src={kerala3}
          className="kerala-img3"
          height={200}
          alt="keralaimage"
        />
      </div>
      <footer>
        <p>
          kerala_tourism_web@gmail.com
          <br />
          <span>contact ph::9678789889</span>
        </p>
      </footer>
    </div>
  );
};

export default Aboutus;
