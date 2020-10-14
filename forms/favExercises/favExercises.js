var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]

favExercises.onshow = function() {
  selExercises.clear()
  // put array of exercises and coreExercises in the dropdown (called populating it)
  for (i = 0; i <= exercises.length - 1; i++)
    selExercises.addItem(exercises[i])
  for (i = 0; i <= coreExercises.length - 1; i++)
    selExercises.addItem(coreExercises[i])
}


btnDone.onclick = function() {
  if (selExercises.text.length == 2) {
    let message = "You chose "
    for (i = 0; i <= selExercises.text.length - 1; i++)
      message = message + selExercises.text[i] + " and "
    // remove the last comma; slice starts at 0, and goes 
    // to end of the string minus 1 - net effect of dropping 
    // last 2 characters (comma and space)
    message = message.slice(0, -5);
    message = `${message} - those are the two core exercises.`
    lblExercises.value = message
  } else {
    lblExercises.value = "You did not pick the two core exercises."
    }

}
btnToNav.onclick=function(){
  ChangeForm(mobileNav)
}
