    //    Variable hissesi

var chatopen = document.querySelector(".chatopen");
var container = document.querySelector(".container")
var close = document.querySelector(".fa-times")
var message = document.querySelector(".input");
var button = document.querySelector(".fa-sign-in")
var chatzone = document.querySelector(".chat-zone");
var rmv=[];
  
              //  Auto scrool ucun
function autoScroll(){
    chatzone.scrollTop=chatzone.scrollHeight;
}
            //   Acib ve Baglamaq ucun
chatopen.addEventListener("click", function () {
    container.style.display = "block"
    chatopen.style.display = "none"
})
close.addEventListener("click", function () {
    container.style.display = "none"
    chatopen.style.display = "block"
})


            //    Esas funksiyanin click-i :)
button.addEventListener("click", function () {
   
   sendmessaje();
    
})  
            //   Esas funksiya
function sendmessaje(){
    var mesaj = message.value;

    if (mesaj[0] == mesaj[0].toUpperCase()) {
        // var girlmessaje = document.createElement("div");
        var girlmessaje = document.createElement("div");
        girlmessaje.classList.add("call-girl");
        var girlimg = document.createElement("div");
        girlimg.classList.add("girl");
        var para = document.createElement("p");
        para.classList.add("para");

        para.innerHTML = mesaj;

        chatzone.appendChild(girlmessaje);
        girlmessaje.appendChild(girlimg);
        girlmessaje.appendChild(para);
        autoScroll(); 

        girlmessaje.addEventListener("click",function(){
        if(this.style.backgroundColor=="grey"){
            this.style.backgroundColor="#3D444D"
            sil.style.display="none"
        }else{
            this.style.backgroundColor="grey";
        rmv.push(this);
        sil.style.display="inline-block"
        }
        })
    } else {

        var boymessaje = document.createElement("div");
        boymessaje.classList.add("call-boy");
        var boyimg = document.createElement("div");
        boyimg.classList.add("boy");
        var p = document.createElement("p");
        p.classList.add("par");
        p.innerHTML = mesaj;
    
        chatzone.appendChild(boymessaje);
        boymessaje.appendChild(boyimg);
        boymessaje.appendChild(p);
        autoScroll(); 

        boymessaje.addEventListener("click",function(){
            if(this.style.backgroundColor=="grey"){
                this.style.backgroundColor="#3D444D"
                sil.style.display="none"
            }else{
         rmv.push(this);
         this.style.backgroundColor="grey";
         sil.style.display="inline-block"
            }
        })
    
    }

    message.value = "";

}
          //    Enter duymesi ucun
document.addEventListener("keydown",function(e){
    if(e.keyCode==13){
    sendmessaje();
  
}
})
            //    Remove ucun
var sil=document.querySelector(".fa-trash");
sil.addEventListener("click",function(){
for(var i=0;i<rmv.length;i++){
    rmv[i].remove();
    sil.style.display="none"
}
})




