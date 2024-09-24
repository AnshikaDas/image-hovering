var elem=document.querySelector(".elem")
elem.forEach(function(val) {
    val.addEventListerner("mouseenter",function(){
        val.childNodes[3].style.opacity=1
    });
    val.addEventListerner("mouseleave",function(){
        val.childNodes[3].style.opacity=0
    });
    val.addEventListerner("mouseleave",function(dets){
        val.childNodes[3].style.left=dets.x+"px"
    });
});
  