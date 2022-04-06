import React from 'react';

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Who we are?</p>
         <p> Developer: Kevin Hoang is a student in computer programming program at 
           Humber
         </p>
         <p> Developer: Anthony Elia is a student in computer programming program at 
           Humber
         </p>
         <p> Website is designed for CPAN144 as a fan page for NBA fanatics </p>
         <p>Links to Social Media</p>
         <img src="/images/Instagram.jpeg" alt="" width="50" height="50"/>
         <img src="/images/Twitter.png" alt=""/>

         <form>
        <label>
        <br/>  <h1>Feedback Submission:</h1>
          <br/> <input type="text" name="Feedback" placeholder='Insert Feedback Here'/><br/>
        </label>
        <br/> <input type="submit" value="Submit"/>
      </form><br/><br/>
         


    </div>

  )
}

export default About;