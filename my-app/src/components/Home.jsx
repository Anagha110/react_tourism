import React from 'react'
import kerala from './kerala.jpg';

const Home = () => {
  return (
    
    
  <div>

<header className="Home-header" >
      
       <h3>
       Explore the Specialities of Kerala
       </h3>
     </header>


<div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="about">
          
          <p>Kerala, located on the south-western tip of India, enjoys unique geographical features that have made it
            one of the most sought-after tourist destinations in Asia. Fondly referred to as ‘God’s Own Country’, Kerala
            was selected by the National Geographic Traveller as one of the 50 destinations of a lifetime and one of the
            thirteen paradises in the world.


            Classical art forms, colourful festivals, exotic cuisine are some of the cultural marvels that await
            travellers. Ayurveda, the ancient Indian system of medicine and Panchakarma, the rejuvenation therapy in
            Ayurveda have also helped Kerala to gain a pan-global reputation as a worth-visit destination.

            Season never ends in Kerala, thanks to the year-long moderate climate and numerous festivals and events.

          </p>
        </div>
      </div>
      <div class="col-md-8 p-8">
      <img src={kerala} className="kerala-img" height={200} alt="keralaimage" />
      </div>
    </div>
  </div>
    
    
    <footer>
    <p>kerala_tourism_web@gmail.com<br/><span>contact ph::9678789889</span></p>
  </footer>


  
  </div>
  )
}

export default Home