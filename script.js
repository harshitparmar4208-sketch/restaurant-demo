let cart=[];
function addToCart(name,price){
  const item=cart.find(x=>x.name===name);
  if(item)item.qty++;
  else cart.push({name,price,qty:1});
  renderCart();
}
function renderCart(){
  document.getElementById("cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0);
  const box=document.getElementById("cartItems");
  if(!cart.length){box.innerHTML='<p class="empty">Your cart is empty.</p>';document.getElementById("cartTotal").textContent="₹0";return;}
  box.innerHTML=cart.map((x,i)=>`<div class="cart-row"><div><strong>${x.name}</strong><small>₹${x.price} × ${x.qty}</small></div><button class="remove" onclick="removeItem(${i})">Remove</button></div>`).join("");
  document.getElementById("cartTotal").textContent="₹"+cart.reduce((s,x)=>s+x.price*x.qty,0);
}
function removeItem(i){cart.splice(i,1);renderCart();}
function openCart(){document.getElementById("cart").classList.add("open");document.getElementById("overlay").classList.add("show");}
function closeCart(){document.getElementById("cart").classList.remove("open");document.getElementById("overlay").classList.remove("show");}
function filterMenu(cat,btn){
  document.querySelectorAll(".categories button").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".item").forEach(item=>item.style.display=(cat==="all"||item.dataset.category===cat)?"flex":"none");
}
function checkout(){
  if(!cart.length){alert("Please add an item first.");return;}
  alert("Demo order received!\\n\\nThis is a portfolio/demo website, so no real order was placed.");
}
renderCart();
