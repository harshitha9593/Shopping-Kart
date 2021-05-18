
const fetchData = require('./utils');
require("babel-core/register");
require("babel-polyfill");


const resultEl = document.querySelector(".result");
const detailsEl = document.querySelector(".details");
const itemId = document.querySelector("#item_id");
const itemImage = document.querySelector("#item_image");
const itemTitle = document.querySelector("#item_title");
const itemDesc = document.querySelector("#item_desc");
const itemPrice = document.querySelector("#item_price");
const checkItem = document.getElementsByTagName("p")[0];
const item_cart = document.querySelector("#itemInCart");
const filter_category = document.querySelector("#filter_category_block");
const filter_category1 = document.querySelector("#filter_category_block1");
const filter_category2 = document.querySelector("#filter_category_block2");
const filter_category3 = document.querySelector("#filter_category_block3");
const filter_price1 = document.querySelector('#filter_price_1');
const filter_price2 = document.querySelector('#filter_price_2');
const filter_price3 = document.querySelector('#filter_price_3');
const clear_cart = document.querySelector("#clear");
const searchlist = document.querySelector("#display_searchitem");
const search_text = document.querySelector("#searchText");


let completeIteminfo = [];
let myArray = [];
let cartView = [];
let cartItem = [];

let mensclothing_list=[];
let womenclothing_list=[];
let jewelery_list=[];
let electronics_list=[];


let price_range_list1=[];
let price_range_list2=[];
let price_range_list3=[];



 fetchData();
 const dataUser = fetchData();
 dataUser.then(items_list =>{

  items_list.forEach((element) => completeIteminfo.push(element));
  console.log(completeIteminfo);

  //rendering main product page
 const trItem = completeIteminfo.map((item) => {
     return `
     
   <tr style="display:inline-table;border:2px solid white;">
   <td >
     <img src="${item.image}" height="150"  style="padding:10px 10px 10px 35px;"/>
   </td>
     <td style="color:orangered;font-style:bold;display:block;text-align:left;padding:32px 20px 24px 20px;font-weight:bold;">
       ${item.title}
     <br><br>
       <b>Description : </b><h4 style="color:blue">${item.description}</h4>
       <br><br>
         Rs.${item.price}
     </td >
     <td style="display:block;padding:2px 0 15px 0;">
       <button  id="btn-view" data-id="${item.id}" item-desc="${item.description}" item-view="${item.image}" item-price="${item.price}" item-title="${item.title}"  >
       View Details
        </button>
     </td>
   </tr>
 `;
}).join("");
 resultEl.innerHTML = `
 <table>
   <thead>
   <tr id="main-heading"><td >
   <h1>Welcome to your Favorite Shopping site Shopping Kart...!</h1></tr></td>
    <tr><th style="font-family: cursive;font-size: large;">Scroll up for exciting new products</th></tr>
   </thead>
   <tbody >
     ${trItem}
   </tbody>
 </table>
`;

 //setting up page for price range - 1
function filter1(){
  let i;
  for(i=0;i<completeIteminfo.length;i++){
    if((completeIteminfo[i].price > 0) && (completeIteminfo[i].price<=100)){
      price_range_list1.push(completeIteminfo[i]);
    }}
  const newbtn1 = document.createElement('button');filter_price1.appendChild(newbtn1);
  newbtn1.innerText = 'Home';
  newbtn1.setAttribute('class','btn_home4');
  let count;
  for(count=0;count<price_range_list1.length;count++){
  const newpara = document.createElement('h4');
  const newpara1 = document.createElement('p');
  newpara.innerHTML = price_range_list1[count].title ;
  newpara1.innerHTML = "<img src="+price_range_list1[count].image+" height='160'>"+ "</p><b>Description : </b>"+price_range_list1[count].description + "</p><br/>"+"<p><b>Rs. "+price_range_list1[count].price+"</b></p><br/>" ;
  const newdiv = document.createElement('div');
  const newbtn = document.createElement('button');
  newbtn.innerText = 'Add to Cart';
  newbtn.setAttribute('data-id',price_range_list1[count].id);
  newbtn.setAttribute('class','add_item');
  newdiv.setAttribute('id','price1filter')
  newdiv.appendChild(newpara);
  newdiv.appendChild(newpara1);
  newdiv.appendChild(newbtn);
  filter_price1.appendChild(newdiv);
 }
 
 
 }
 filter1();
 
  //setting up page for price range - 2
 function filter2(){
  let i;
  for(i=0;i<completeIteminfo.length;i++){
    if((completeIteminfo[i].price >= 100) && (completeIteminfo[i].price<=500)){
      price_range_list2.push(completeIteminfo[i]);
      console.log[i];
    }
  }
  const newbtn2 = document.createElement('button');filter_price2.appendChild(newbtn2);
  newbtn2.innerText = 'Home';
  newbtn2.setAttribute('class','btn_home2');
  let count;
  for(count=0;count<price_range_list2.length;count++){
  const newpara1 = document.createElement('h4');
  const newpara2 = document.createElement('p');
  newpara1.innerHTML = price_range_list2[count].title;
  newpara2.innerHTML =  "<img src="+price_range_list2[count].image+" height='160'>"+ "</p><b>Description : </b>"+price_range_list2[count].description + "</p><br/>"+"<p><b>Rs. "+price_range_list2[count].price+"</b></p><br/>" ;
  const newdiv1 = document.createElement('div');
  const newbtn1 = document.createElement('button');
  newbtn1.innerText = 'Add to Cart';
  newbtn1.setAttribute('data-id',price_range_list2[count].id);
  newbtn1.setAttribute('class','add_item');
  newdiv1.setAttribute('id','price1filter')
  newdiv1.appendChild(newpara1);
  newdiv1.appendChild(newpara2);
  newdiv1.appendChild(newbtn1);
  filter_price2.appendChild(newdiv1);
 }
 }
 filter2();
 
 //setting up page for price range - 3
 function filter3(){
  let i;
  for(i=0;i<completeIteminfo.length;i++){
    if((completeIteminfo[i].price >= 500) && (completeIteminfo[i].price<=1000)){
      price_range_list3.push(completeIteminfo[i]);
      console.log[i];
    }
  }
  const newbtn3 = document.createElement('button');filter_price3.appendChild(newbtn3);
  newbtn3.innerText = 'Home';
  newbtn3.setAttribute('class','btn_home3');
  let count;
  for(count=0;count<price_range_list3.length;count++){
  const newpara3 = document.createElement('h4');
  const newpara4 = document.createElement('p');
  newpara3.innerHTML = price_range_list3[count].title;
  newpara4.innerHTML = "<img src="+price_range_list3[count].image+" height='160'>" + "</p><b>Description : </b>"+price_range_list3[count].description + "</p><br/>"+"<p><b>Rs."+price_range_list3[count].price+"</b></p><br/>" ;
  const newdiv2 = document.createElement('div');
  const newbtn1 = document.createElement('button');
  newbtn1.innerText = 'Add to Cart';
  newbtn1.setAttribute('data-id',price_range_list3[count].id);
  newbtn1.setAttribute('class','add_item');
  newdiv2.setAttribute('id','price1filter')
  newdiv2.appendChild(newpara3);
  newdiv2.appendChild(newpara4);
  newdiv2.appendChild(newbtn1);
  filter_price3.appendChild(newdiv2);
 }
 }
 filter3();
 
 //creating arrray for all categories
 let loop_1;
 for(loop_1=0;loop_1<completeIteminfo.length;loop_1++){
  if(completeIteminfo[loop_1].category==="men's clothing"){
    
    mensclothing_list.push(completeIteminfo[loop_1]);
  }
  else if(completeIteminfo[loop_1].category==="jewelery"){
    jewelery_list.push(completeIteminfo[loop_1]);
  }
  else if(completeIteminfo[loop_1].category==="women's clothing"){
    womenclothing_list.push(completeIteminfo[loop_1]);
  }
  else if(completeIteminfo[loop_1].category==="electronics"){
    electronics_list.push(completeIteminfo[loop_1]);
  }
  
 }
 
 });

 
//search item based on user text
document.getElementById("searchItem").addEventListener("click", function () {
 document.getElementsByClassName("result")[0].style.display = "none";
 document.getElementById("display_searchitem").style.display = "block";

 document.getElementById("searchText").onkeyup= fnc_searchtext();
function fnc_searchtext(){
  var input, filter, i, txtValue;
  input = document.getElementById("searchText");
  filter = input.value.toUpperCase();
  for (i = 0; i < completeIteminfo.length; i++) {
    
     txtValue=completeIteminfo[i].title;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          cartView.push(completeIteminfo[i]);
          

      } else {
          console.log("items dont match")
          
      }
  }

}
if(cartView.length===0){alert("No Items found");}

//  myArray = document.getElementById("searchText").value;
//  console.log(myArray);
//  let i;
//  for (i = 0; i < completeIteminfo.length; i++) {
//    if (myArray === completeIteminfo[i].title) {
//      cartView.push(completeIteminfo[i]);
//      console.log(cartView);
//    } }
  
   const trItem = cartView.map((item) => {
     return `
     <div class="cart_container" style="background-color:#b0e9fd;">
   <tr>
   <td>
     <img src="${item.image}" height="150" style="padding:20px; />
     </td>
     <td style="font-style:bold;display:inline;text-align:left;padding:10px 0 0 20px;font-weight:bold;">
       <p style="color:orangered;font-size:20px;">${item.title}</p><br><br>
       <p style="color:blue;"> ${item.description}</p><br>
       <p style="color:blue;">Rs. ${item.price}</p>
     </td>
     <td>
     <button class="btn_addtocart" id="btn-view" data-id="${item.id}" >Add to Cart</button>
   </td>
   </tr>
   </div>
 `;
   }).join("");
 searchlist.innerHTML = `
   <table>
   <tbody>
   <td>
   <button id="home1" class="searchHome">Home</button>
 </td>
     <td style="padding:50px ">${trItem}</td>

   </tbody>
 </table>
`;

 

 document.getElementsByClassName("searchHome")[0].addEventListener("click", function () {
   document.getElementsByClassName("result")[0].style.display = "block";
   document.getElementById("display_searchitem").style.display = "none";
   document.getElementById("searchText").value ="";
//     let i;
//     for(i=0;i<cartView.length;i++){
//    cartView.pop();
//    console.log(cartView);
//    console.log(i);
//  }console.log(cartView);
cartView.length=0;
console.log(cartView);
 searchlist.innerHTML="";
   });
});


// document.getElementById("opt_filter").addEventListener("click", function () {
//  e.onchange = show;
// });

// //selecting filter option
// let e = document.getElementById("opt_filter");
// function show() {
//  var strUser = e.options[e.selectedIndex].text;
//  console.log(strUser);
// }
// e.onchange = show;
// show();
let item_id;
let item_description;
let item_image, item_title, item_price;

//display all products
resultEl.addEventListener("click", (e) => {
 e.stopPropagation();
 item_id = e.target.getAttribute("data-id");
 item_image = e.target.getAttribute("item-view");
 item_title = e.target.getAttribute("item-title");
 item_description = e.target.getAttribute("item-desc");
 item_price = e.target.getAttribute("item-price");
 console.log(item_id);
 console.log(cartView);
 if(typeof(item_id)!=="object"){
 document.getElementsByClassName("result")[0].style.display = "none";

 document.getElementsByClassName("details")[0].style.display = "block";

 itemImage.innerHTML = "<img src="+item_image+" height='160'>";
 itemTitle.innerText = item_title;
 itemDesc.innerText = " Description  :   "+item_description;
 itemPrice.innerHTML = " Rs. "+item_price;
 }
});

//add item to cart
let x;
document.getElementById("btn_addtocart").addEventListener("click", function () {
 if(typeof(item_id)!==undefined){
 x = item_id - 1;
 console.log(x);
 cartItem.push(completeIteminfo[x]);
 console.log(cartItem);
 alert("Item added to cart successfully");
 }
});


//going back from view details to home
document.getElementById("btn_back").addEventListener("click", function () {
 document.getElementsByClassName("result")[0].style.display = "block";

 document.getElementsByClassName("details")[0].style.display = "none";
});

fetchData();


//display mens clothing
document.getElementById("mens").addEventListener("click", function () {
 document.getElementsByClassName("result")[0].style.display = "none";
  document.getElementById("filter_category_block").style.display = "block";

const trIt = mensclothing_list.map((item) => {
 return `
 <div class="cart_container" style="background-color:#b0e9fd;">
<tr style="display:inline-table;border:2px solid white;">
<td>
 <img src="${item.image}" height="150" />
 </td>
 <td style="color:orangered;font-style:bold;display:block;text-align:left;padding:32px 0 24px 20px;font-weight:bold;">
 ${item.title}
<br><br>
 <b>Description : </b><h4 style="color:blue">${item.description}</h4>
 <br><br>
   Rs.${item.price}
 </td>
 <td>
 <button class="btn_addtocart" id="btn-view"  data-id="${item.id}" >Add to Cart</button>
</td>
</tr>
</div>
`;
}).join("");
filter_category.innerHTML = `
<table>
<tbody>
 <td>
   <button id="home_men">Home</button>
 </td>
 <td>${trIt}</td>
</tbody>
</table>
`;
document.getElementById("home_men").addEventListener("click", function () {
document.getElementsByClassName("result")[0].style.display = "block";
document.getElementById("filter_category_block").style.display = "none";
});
});

//display womens clothing
document.getElementById("womens").addEventListener("click", function () {
 document.getElementsByClassName("result")[0].style.display = "none";
  document.getElementById("filter_category_block1").style.display = "block";

const trIt = womenclothing_list.map((item) => {
 return `
 <div class="cart_container" style="background-color:#b0e9fd;">
<tr>
<td>
 <img src="${item.image}" height="150" />
 </td>
 <td style="color:orangered;font-style:bold;display:block;text-align:left;padding:32px 0 24px 20px;font-weight:bold;border-bottom:4px solid white;">
 ${item.title}<br><br>
 <b>Description : </b><h4 style="color:blue">${item.description}</h4>
 <br><br>
   Rs.${item.price}
 </td>
 <td>
 <button class="btn_addtocart" id="btn-view" data-id="${item.id}" >Add to cart</button>
</td>
</tr>
</div>
`;
}).join("");
filter_category1.innerHTML = `
<table>
<tbody>
 <td>
   <button id="home_women">Home</button>
 </td>
 <td>${trIt}</td>
</tbody>
</table>
`;
document.getElementById("home_women").addEventListener("click", function () {
document.getElementsByClassName("result")[0].style.display = "block";
document.getElementById("filter_category_block1").style.display = "none";
});
});

//display jewellery
document.getElementById("jewelery").addEventListener("click", function () {
 document.getElementsByClassName("result")[0].style.display = "none";
  document.getElementById("filter_category_block2").style.display = "block";

const trIt = jewelery_list.map((item) => {
 return `
 <div class="cart_container" style="background-color:#b0e9fd;">
<tr>
<td>
 <img src="${item.image}" height="150" />
 </td>
 <td style="color:orangered;font-style:bold;display:block;text-align:left;padding:32px 0 24px 20px;font-weight:bold;border-bottom:4px solid white;">
 ${item.title}<br><br>
 <b>Description : </b><h4 style="color:blue">${item.description}</h4>
 <br><br>
   Rs.${item.price}
 </td>
 <td>
 <button class="btn_addtocart" id="btn-view" data-id="${item.id}" >Add to cart</button>
</td>
</tr>
</div>
`;
}).join("");
filter_category2.innerHTML = `
<table>
<tbody>
 <td>
   <button id="home_jewelery">Home</button>
 </td>
 <td>${trIt}</td>
</tbody>
</table>
`;
document.getElementById("home_jewelery").addEventListener("click", function () {
document.getElementsByClassName("result")[0].style.display = "block";
document.getElementById("filter_category_block2").style.display = "none";
});
});

//display electronics
document.getElementById("electronics").addEventListener("click", function () {
 document.getElementsByClassName("result")[0].style.display = "none";
  document.getElementById("filter_category_block3").style.display = "block";

const trIt = electronics_list.map((item) => {
 return `
 <div class="cart_container" style="background-color:#b0e9fd;">
<tr>
<td>
 <img src="${item.image}" height="150" />
 </td>
 <td style="color:orangered;font-style:bold;display:block;text-align:left;padding:32px 0 24px 20px;font-weight:bold;border-bottom:4px solid white;">
 ${item.title}<br><br>
 <b>Description : </b><h4 style="color:blue">${item.description}</h4>
 <br><br>
   Rs.${item.price}
 </td>
 <td>
 <button class="btn_addtocart" id="btn-view1" data-id="${item.id}" >Add to Cart</button>
</td>
</tr>
</div>
`;
}).join("");
filter_category3.innerHTML = `
<table>
 <tbody>
   <td>
     <button id="home_electronics">Home</button>
 </td>
 <td>${trIt}</td>
</tbody>
</table>
`;
document.getElementById("home_electronics").addEventListener("click", function () {
document.getElementsByClassName("result")[0].style.display = "block";
document.getElementById("filter_category_block3").style.display = "none";
});
});

//display items in cart
document.getElementById("addToCart").addEventListener("click", function () {
 document.getElementById("itemInCart").style.display = "block";
 document.getElementsByClassName("result")[0].style.display = "none";
 document.getElementsByClassName("details")[0].style.display = "none";
 document.getElementById("filter_price_1").style.display = "none";
 document.getElementById("filter_price_2").style.display = "none";
 document.getElementById("filter_price_3").style.display = "none";
 document.getElementById("filter_category_block").style.display="none";
 document.getElementById("filter_category_block1").style.display="none";
 document.getElementById("filter_category_block2").style.display="none";
 document.getElementById("filter_category_block3").style.display="none";
 document.getElementById("display_searchitem").style.display="none";


   let count=0;
  let totalAmount = 0;
  for( count =0;count<cartItem.length;count++){
      totalAmount+=cartItem[count].price;
  }

 if (cartItem.length === 0) {
   //alert("No items added in Cart");
    document.getElementsByTagName("p")[0].innerText = "No items added in Cart";
 } else {

   const trItem = cartItem.map((item) => {
     return `
     <div class="cart_container" style="background-color:#b0e9fd;">
   <tr>
   <td>
     <img src="${item.image}" height="150" style="margin:10px;" />
     </td>
     <td style="font-style:bold;display:block;text-align:left;padding:10px 0 0 20px;font-weight:bold;">
       <p style="color:orange;">${item.title}</p><br><br>

       <p style="color:blue;">Rs. ${item.price}</p>
     </td>

   </tr>
   </div>
 `;
   }).join("");
 item_cart.innerHTML = `
   <table>
   <tbody>
   <td>
       <button style ="margin-bottom: 60px;" id="home">Home</button>
     </td>
     <td>${trItem}</td>
     <td style="border:3px solid blue;"><lable id ="total" style="color:blue;font-size:22px;">Total</lable></td>
     <td>
       <button id="clear">Clear Cart</button>
     </td>
   </tbody>
 </table>
`;
document.querySelector("#total").innerText="Total : "+totalAmount;
document.getElementById("home").addEventListener("click", function () {
 document.getElementsByClassName("result")[0].style.display = "block";
 document.getElementById("itemInCart").style.display = "none";
});
document.getElementById('clear').addEventListener("click", function() {
 let i;
 for(i=0;i<cartItem.length;i++){
   cartItem.pop();
 }
 console.log(cartItem);
 item_cart.innerHTML="";
 item_cart.innerHTML="<p>No Items in kart</p><button  id='home'>Home</button>";
 document.getElementById("home").addEventListener("click", function () {
   document.getElementsByClassName("result")[0].style.display = "block";
   document.getElementById("itemInCart").style.display = "none";
 });
});
 }
});


//display home page
document.getElementById("home").addEventListener("click", function () {
 document.getElementsByClassName("result")[0].style.display = "block";
 document.getElementById("itemInCart").style.display = "none";
 document.getElementsByTagName("p")[0].innerText = "";
});



//submit selected price range
document.getElementById("submit").addEventListener("click", function () {
     document.getElementsByClassName("result")[0].style.display = "none";

     //document.getElementById("filter_price").style.display="block";

     var inputanswer = document.querySelectorAll("input:checked")[0].getAttribute("value");
     //const optuser = e.target.getAttribute("value");
     console.log(inputanswer);
     if(inputanswer === "range1"){
       document.getElementById("filter_price_1").style.display = "block";
       
       document.getElementsByClassName("btn_home4")[0].addEventListener("click", function () {
         document.getElementsByClassName("result")[0].style.display = "block";
         document.getElementById("filter_price_1").style.display = "none";
         });
     }
     else if(inputanswer === "range2"){
       document.getElementById("filter_price_2").style.display = "block";

       document.getElementsByClassName("btn_home2")[0].addEventListener("click", function () {
         document.getElementsByClassName("result")[0].style.display = "block";
         document.getElementById("filter_price_2").style.display = "none";
         });
     }
     else if(inputanswer === "range3"){
       document.getElementById("filter_price_3").style.display = "block";

       document.getElementsByClassName("btn_home3")[0].addEventListener("click", function () {
         document.getElementsByClassName("result")[0].style.display = "block";
         document.getElementById("filter_price_3").style.display = "none";
         });
     }
     
});

//adding items in price range - 1 to cart
filter_price1.addEventListener("click", (e) => {
 e.stopPropagation();
 item_id = e.target.getAttribute("data-id");
 console.log(item_id);
   if (typeof(item_id)!== "object"){
 let x;
 x = item_id - 1;
 console.log(x);
 cartItem.push(completeIteminfo[x]);
 console.log(cartItem);
 alert("Item added to cart successfully");
   }
});

//adding items in price range - 2 to cart
filter_price2.addEventListener("click", (e) => {
 e.stopPropagation();
 item_id = e.target.getAttribute("data-id");
 if (typeof(item_id)!== "object"){
 let x;
 x = item_id - 1;
 console.log(x);
 cartItem.push(completeIteminfo[x]);
 console.log(cartItem);
 alert("Item added to cart successfully");
 }
});

//adding items in price range - 3 to cart
filter_price3.addEventListener("click", (e) => {
 e.stopPropagation();
 item_id = e.target.getAttribute("data-id");
 if (typeof(item_id)!== "object"){
 let x;
 x = item_id - 1;
 console.log(x);
 cartItem.push(completeIteminfo[x]);
 console.log(cartItem);
 alert("Item added to cart successfully");
 }
});

//adding items in mens clothing to cart
filter_category.addEventListener("click", (e) => {
  e.stopPropagation();
  item_id = e.target.getAttribute("data-id");
  console.log(item_id);
    if (typeof(item_id)!== "object"){
  let x;
  x = item_id - 1;
  console.log(x);
  cartItem.push(completeIteminfo[x]);
  console.log(cartItem);
  alert("Item added to cart successfully");
    }
 });

 //adding items in womens clothing to cart
filter_category1.addEventListener("click", (e) => {
  e.stopPropagation();
  item_id = e.target.getAttribute("data-id");
  console.log(item_id);
    if (typeof(item_id)!== "object"){
  let x;
  x = item_id - 1;
  console.log(x);
  cartItem.push(completeIteminfo[x]);
  console.log(cartItem);
  alert("Item added to cart successfully");
    }
 });

 //adding items in jewelery  to cart
filter_category2.addEventListener("click", (e) => {
  e.stopPropagation();
  item_id = e.target.getAttribute("data-id");
  console.log(item_id);
    if (typeof(item_id)!== "object"){
  let x;
  x = item_id - 1;
  console.log(x);
  cartItem.push(completeIteminfo[x]);
  console.log(cartItem);
  alert("Item added to cart successfully");
    }
 });

 //adding items in electronics  to cart
filter_category3.addEventListener("click", (e) => {
  e.stopPropagation();
  item_id = e.target.getAttribute("data-id");
  console.log(item_id);
    if (typeof(item_id)!== "object"){
  let x;
  x = item_id - 1;
  console.log(x);
  cartItem.push(completeIteminfo[x]);
  console.log(cartItem);
  alert("Item added to cart successfully");
    }
 });

  //adding search items in  to cart
searchlist.addEventListener("click", (e) => {
  e.stopPropagation();
  item_id = e.target.getAttribute("data-id");
  console.log(item_id);
    if (typeof(item_id)!== "object"){
  let x;
  x = item_id - 1;
  console.log(x);
  cartItem.push(completeIteminfo[x]);
  console.log(cartItem);
  alert("Item added to cart successfully");
    }
 });

//    //remove items in  to cart
// item_cart.addEventListener("click", (e) => {
//   e.stopPropagation();
//   item_id = e.target.getAttribute("data-id");
//   console.log(item_id);
//     if (typeof(item_id)!== "object"){
//   let x;
//   x = item_id - 1;
//   console.log(x);
//   cartItem[x].pop();
//   console.log(cartItem);
//     }
//  });