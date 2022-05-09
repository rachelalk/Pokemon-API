<h1> Pokemon API </h1>
<h2> The plan:</h2>

<ul>
 <li>This week's hackathon was really tricky. I felt like I had a grasp of APIs but when we were presented with the Pokemon API it felt huge, there was so much information to filter through. Due to this we decided to focus on just three types of Pokemon: fire, water and grass.
<li> We decided that we wanted to have 3 buttons, one to represent each of the pokemon types selected, these buttons would generate a random pokemon of that type. 	
<li>After this, you would then have the choice of keep or release, keep would add it to your pokedex which would have been at the bottom or side and release would require no action and clear the pokemon from the screen.
</ul>

<h2>Main learning points:</h2>

<ul>
  <li> Spending time discussing with your pair partner what you want to create is really valuable, this ensures that you are both on the same page and prevents confusion down the line.
    <li> Breaking things down into small chunks really helps. This allows you to be realistic about what you can create and how you will do it.
  <li> We used arrays to pull data from the API but ran into some issues, once we had input the data into an array outside of the function and then tried to call upon it we recieved a response of undefined. This stumped us for a long time, we had other bootcampers have a look at our code and they couldn't figure it out either. Eventually my lovely mentor came to have a look and even he, somebody experienced in Javascript, couldn't see the problem straight away. We got there in the end though and we realised that the problem was due to the asynchronous nature of the script, we were calling on the data before it had been generated. This was fixed by using the setTimeout() function.
    <li> Once this error was fixed we were able to get on, we used for loops to iterate through data, made use of the DOM to manipulate text on the page and ultimately ended up with a page that functions how we envisioned. 
      <li>We made use of an input box so that the user can add their name to the page, each coloured button generates the name of a pokemon of that type and you can keep or release the pokemon as it is generated.
      <li> If we had more time we would have added pictures to acompany the randomly generated pokemon names.
        <li> I have really felt the benefit of pair programming this week, it has been super helpful to have somebody to talk things through with and bounce ideas off - two heads are better than one!
         </ul>

 <p>View the page <a href="https://rachelalk.github.io/pokemonAPI/">here</a></p>
