let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

llf.onclick=function(s){  // notice the 's' parameter. This is the index
  if (typeof(s) == "object") {// user clicked the control
    return
  } else {
      let textChoice = NSB.$("llf_" + s).textContent
      console.log(`The item number of the choice is ${s} and the text is ${textChoice}`)
      
       llf.addItem("Garbanzo","active","default")
 }
}