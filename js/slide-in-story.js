


//ensure that our js only after the HTML content is loaded 
document.addEventListener("DOMContentLoaded", function() {
    //Grab all the elements with class story-item 
    const storyItem = document.querySelectorAll(".story-item"); 

    function checkSlide() {
        //Loop through the storyItems 
        storyItem.forEach((storyItem) => {
            //Calculate the point where the top of the element is halfway into the viewport 
            const slideInAt = window.scrollY + window.innerHeight - storyItem.clientHeight/2; 
            //Calculate the bottom of the story-item element 
            const itemBottom = storyItem.offsetTop + storyItem.clientHeight; 

            //Check if the element is halfway shown or scrollpast 
            const isHalfShown = slideInAt > storyItem.offsetTop; 
            const isNotScrollingPast = window.scrollY < itemBottom; 

            //if conditions are met, we add in slide-in class else we remove it 
            if (isHalfShown && isNotScrollingPast){
                storyItem.classList.add("slide-in"); 
            } else {
                storyItem.classList.remove("slide-in");
            }
        }) 
    }
    window.addEventListener("scroll", checkSlide); 
    window.addEventListener("resize", checkSlide); 

    checkSlide(); 
}) 