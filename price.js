function openImagePage(imageUrl) {
    var randomPrice = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    document.body.innerHTML =`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Image Page</title>
            <link rel="stylesheet" href="../css/Nav.css">
            <link rel="stylesheet" href="../css/button.css">
            <link rel="stylesheet" href="../css/footer.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </head>
        <body>
        <header>
            <nav>
<img src="../img/website-logo.png" width="80px" style="position: absolute; left: 1px;">
<ul>
   <li><a href="home.html">Home</a></li>
   <li><a href= "Accessory.html" >Accessory</a>
<ul>
    <li><a href="Accessory.html#mouse">Mouse</a></li>
    <li><a href="Accessory.html#keyboard">Keyboard</a></li>
    <li><a href="Accessory.html#headset">Headset</a></li>
</ul>
  </li>
   <li><a href="Console.html">Console</a>
    <ul>
       <li><a href="Console.html#ps">Playstation</a></li>
       <li><a href="Console.html#xbox">Xbox</a></li>
       <li><a href="Console.html#nint">Nintendo</a></li>  
    </ul>
</li>
   <li><a href="PCs.html">PCs</a>
    <ul>
        <li><a href="PCs.html#pre">Pre-build</a></li> 
        <li><a href="PCs.html#gpu">GPU</a></li>
        <li><a href="PCs.html#cpu">CPU</a></li>
        <li><a href="PCs.html#ram">RAM</a></li>
        <li><a href="PCs.html#mb">Motherboard</a></li>
        <li><a href="PCs.html#pow">Power Supply</a></li>
        <li><a href="PCs.html#storage">Storage</a></li>
        <li><a href="PCs.html#case">Cases</a></li>        
    </ul>
    </li>
</ul>
    </nav>
</header>
<div class="mainContent">
    <img src="../${imageUrl}" alt="Image" style="display: block; margin: auto;">
        <div style="text-align: center; margin-top: 10px; font-size:2em;">
            <h5>The price will change on the next visit ❤️ </h5>
            <p>Price: $${randomPrice}</p>
            <button class="addToCartBtn">Add to Cart</button>
        </div>
     </div>

<footer>
<div class="footerContainer">
    <div class="socialIcons">
        <a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://www.google.com"><i class="fa-brands fa-google-plus"></i></a>
        <a href="https://www.youtube.com"><i class="fa-brands fa-youtube"></i></a>
    </div>
    <div class="footerNav">
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="PCs.html">PC's</a></li>
            <li><a href="Accessory.html">Accessories</a></li>
            <li><a href="Console.html">Console</a></li>
        </ul>
    </div>
    <div class="footerBottom">
        <p>Gaming Store &copy; 2023; Designed by <span class="designer">Group 13</span></p>
    </div>
</div>
</footer>
        </body>
        </html>
    `;
}