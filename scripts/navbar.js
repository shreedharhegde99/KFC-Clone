function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("burger").style.marginLeft = "250px";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("sidebar").style.zIndex="-23"
    
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("burger").style.marginLeft= "0";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("sidebar").style.zIndex="56"

  }
  
   let getcartdata=()=>{
    let currentdata=JSON.parse(localStorage.getItem("cart"))||[]
    document.getElementById("cart_cnt").innerText=currentdata.length
    let sum=0
    currentdata.forEach((ele) => {
      sum+=Number(ele.price*ele.count)
    });

    document.getElementById("cost_of_cart").innerText=Math.floor(sum)
   }
   let tocartpage=()=>{
    let tocart=document.getElementById("cart_svg")
    tocart.onclick=()=>window.location.href="deals.html"
   }
   

   
   

   
    
   
    
   
   
  


