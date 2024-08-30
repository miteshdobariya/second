import React from "react";

const Header = () =>{
    return(
        <>
            {/* <!-- header upper start --> */}

<div className="header-top-main">
 <div className="container">
   <div className="header-top-inner">
     <div className="cln">
       <div className="logo-img">
         <img src="assets1/img/logo.jpg" alt="logo"/>
       </div>
     </div>

     <div className="cln">
       <div className="form">
         <form method="post">
           <input type="text" value="" placeholder="Search Products..." aria-label="Search"/>
           <button className="action" type="submit">
              <a href="#"> <i className="fa fa-search"></i></a>
           </button>
         </form>
         
       </div>
     </div>

     <div className="cln icon">
       <div className="link">
         <a href="#"><i className="fa-solid fa-bag-shopping"></i></a>
       </div>
       <div className="beg">
         <a href="#"><i className="fa fa-user"></i></a>
       </div>
     </div>
   </div>
 </div>
</div>
{/* 
    <!-- header upper end -->
  <!-- header-bottom start --> */}

<div className="header-bottom-main">
<div className="container">
 <ul className="header-bottom-inner">
   <li><a href="#">Home</a></li>
   <li><a className="arrow" href="#">Shop</a>
     <ul className="sub-menu">
       <li><a className="arrow1" href="#">fashion</a>
         <ul className="inner-sub-menu">
           <li><a href="#">men</a></li>
           <li><a href="#">women</a></li>
           <li><a href="#">kids</a></li>
           <li><a href="#">accessories</a></li>
         </ul>
       </li>
       <li><a href="#">jewellery</a></li>
       <li><a href="#">furniture</a></li>
       <li><a href="#">autoparts</a></li>
     </ul>
   </li>
   <li><a className="arrow" href="#">Furniture</a>
     <ul className="sub-menu">
       <li><a href="#">living room</a></li>
       <li><a href="#">kitchen</a></li>
       <li><a href="#">office</a></li>
       <li><a href="#">home decor</a></li>


     </ul>
   </li>
   <li><a className="arrow" href="#">Electronics</a>
     <ul className="sub-menu">
       <li><a href="#">mobile</a>
       <ul className="inner-sub-menu">
           <li><a href="#">apple</a></li>
           <li><a href="#">blackberry</a></li>
           <li><a href="#">oneplus</a></li>
           <li><a href="#">sony</a></li>
         </ul>
       </li>
       <li><a href="#">cameras</a></li>
       


     </ul>

   </li>
   <li><a href="#">Sale</a></li>
   <li><a href="#">Contact Us</a></li>

 </ul>
</div>
</div>
{/* <!-- header-bottom end--> */}

        </>
    )
}
export default Header