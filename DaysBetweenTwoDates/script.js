let output=document.getElementById("output");
let submit=document.getElementById("submit");

submit.addEventListener("click",()=>{
    // Creating Date object with selected Dates
      let date1=new Date(document.getElementById("date1").value);
      let date2=new Date(document.getElementById("date2").value);
       
    //   console.log(date2.getTime());

      if (date1.getTime() && date2.getTime()) {
        let differencebtweenDatesin_Ms = date2.getTime() - date1.getTime();

        let differencebtweendates= differencebtweenDatesin_Ms/(1000*3600*24);

    //    console.log(differencebtweendates);
          output.innerHTML = `Difference between the two dates is <span>${differencebtweendates}</span> days`;
      }else{
          output.innerHTML = "Please select a valid date";
      }





      
})

