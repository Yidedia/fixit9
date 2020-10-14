/* add a switch here to take the user to the form
     they chose. 
  */
hmbMenu.onclick = function(s) {
  if (typeof(s) == "object") {
    return
} else {
  switch (s) {
    case "Login":
      // hide the hamberger menu and show the signin button
      ChangeForm(loginCU)
      break
    case "Favorite Foods":
      // Go to the Demo form
      ChangeForm(favFoods)
      break
    case "Dessert Voting":
      // add an item to the hamburger menu at runtime just for fun
      ChangeForm(dessertVoting)
      break
    case "Describe Me":
      // add an item to the hamburger menu at runtime just for fun
      ChangeForm(describeYou)
      break
    case "Favorite Exercises":
      // add an item to the hamburger menu at runtime just for fun
      ChangeForm(favExercises)
      break
  } //switch
} //else
}