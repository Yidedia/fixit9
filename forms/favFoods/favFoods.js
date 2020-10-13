let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

ddf.onshow=function(){
    // always clear before populating
    ddf.clear()   
    // put array of food in the dropdown (called populating it)
    for (i = 0; i <= goodFoods.length - 1; i++) 
        ddf.addItem(goodFoods[i])
}