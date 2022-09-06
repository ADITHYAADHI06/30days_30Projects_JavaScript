let one=document.getElementById("date");
let two=document.getElementById("time");


let updateClock=()=>{
      let now=new Date();
      let dayName=now.getDay(),
          month=now.getMonth(),
          date=now.getDate(),
          year=now.getFullYear(),
          hour=now.getHours(),
          min=now.getMinutes(),
          sec=now.getSeconds();

       let months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
       let dayNames=["Sunday","Monday","tuesday","wednesday","thursday","friday","saturday"];
   
       one.innerHTML=`<p id="date">${dayNames[dayName]}, ${months[month]} ${date}, ${year}</p>`;
       two.innerHTML=`<p id="time">${ hour>=12 ? `0${hour-12}` : `0${hour}` }: ${min} : ${sec} <span>${ hour>=12 ? `PM` : `AM` }</span></p>`

}

window.addEventListener("load",()=>{
    window.setInterval("updateClock()",1); 
});