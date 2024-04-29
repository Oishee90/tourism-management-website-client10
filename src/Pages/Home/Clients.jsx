import client from "../../assets/team-working-project-together.jpg"

const Clients = () => {
    return (
        <div className="mt-7 mb-7 container mx-auto ">
    <div className="my-20">

<div className="font-ubuntu my-8 text-center space-y-6">
  <h1 className="text-2xl lg:text-4xl font-ubuntu font-extrabold">Clients Question</h1>
  <p className="text-base">Discover the Organizations and Businesses that Make JourneySEA s Adventures Possible. Hear from Our Satisfied Clients and Explore Their Experiences!
  </p>

   
    <div>
      <div className="border rounded-lg border-[#1313181A]">
        <div className="hero">
          <div className="hero-content gap-10 flex-col lg:flex-row">
           <div className="relative">
            <img className="rounded-lg" src={client} alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-lg"></div>
           </div>
            <div className="space-y-5">
              <div className="collapse collapse-plus border-b-2 rounded-none border-[#1313181A]">
                <input type="radio" name="my-accordion-3" checked="checked" /> 
                <div className="collapse-title font-raleway text-left text-xl  font-bold">
                  Our Equipment
                </div>
                <div className="collapse-content"> 
                  <p className="font-raleway  text-left"> 
                  Top-Quality Gear: Experience Every Adventure with Confidence Knowing Our Equipment Is Reliable, Well-Maintained, and Tailored to Your Needs. From Snorkeling Gear to Camping Essentials, We Provide the Tools for Unforgettable Experiences.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus border-b-2 rounded-none border-[#1313181A]">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title font-raleway text-left text-xl  font-bold">
                Safety Measures
                </div>
                <div className="collapse-content"> 
                  <p className="font-raleway  text-left">
                  Experience peace of mind with JourneySEA's comprehensive safety protocols. From expert guides to emergency preparedness, we prioritize your well-being every step of the way.
              </p>
                </div>
              </div>
              <div className="collapse collapse-plus border-b-2 rounded-none border-[#1313181A]">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title font-rakeway text-left text-xl  font-bold">
                Customization Options
                </div>
                <div className="collapse-content"> 
                  <p className="font-raleway  text-left">
                  Tailor your adventure with JourneySEA's customizable options. Whether it's a private tour, specialized activity, or unique itinerary, we ensure your experience reflects your preferences and interests.

              </p>
                </div>
              </div>
  
             

              <div className="collapse collapse-plus border-b-2 rounded-none border-[#1313181A]">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title font-raleway text-left text-xl  font-bold">
                 Booking Process
                </div>
                <div className="collapse-content"> 
                  <p className="font-raleway  text-left">Streamline your journey with JourneySEA s hassle-free booking system. Our intuitive platform makes reserving your spot for tours, lessons, or excursions effortless, so you can focus on the 
              </p>
                </div>
              </div>
              <div className="collapse collapse-plus border-b-2 rounded-none border-[#1313181A]">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title font-raleway text-left text-xl  font-bold">
                  Pricing
                </div>
                <div className="collapse-content"> 
                  <p className="font-manrop  text-left">At JourneySEA, we understand the importance of transparency. Feel free to reach out with any inquiries regarding our pricing options. Our dedicated team is here to provide you with detailed information and assist you in selecting the perfect package for your adventure needs.

              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


          </div> 
         
</div>
        </div>
    );
};

export default Clients;