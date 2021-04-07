
let i = 0;
let slidesImage = ["images/01.jpg","images/02.jpg","images/03.jpg"];/*هات كل الصور في array */


/* expression function */
let slideShow = function(){
   document.slideshow.src = slidesImage[i]
   
   if( i < slidesImage.length - 1){
      i++;
   }else{
      i = 0;
   }
    setTimeout('slideShow()', 2000);/*بيشغل الfunction */

}

slideShow(); /*call function */

