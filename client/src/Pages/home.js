import image1 from "./images/NINTCHDBPIC.jpg"
import image2 from "./images/flight-attendants-boarding-plane.jpg"
import image3 from "./images/Flight-Attendant-190522.png"


function Home() {



      // Automatic Slideshow - change image every 3 seconds
      var myIndex = 0;
      carousel();

      function carousel() {
        var i;
        var x = document.getElementsByClassName("card-img");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
          myIndex = 1;
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 3000);
      }


    return (
      //<div>fjhdj</div>
      <div className="Home">
        
    <p>This is Home Page</p>

    <div class="card bg-dark text-white">

      <img class="card-img" src= {image1}/>
      <img class="card-img" src= {image2}/>
      <img class="card-img" src= {image3}/>


      <div class="card-img-overlay">
        <h1 class="display-1">
          <b><p class="text-center">B Airways</p></b>
        </h1>
        <h1 class="display-6">
          <p class="text-center">We fly you everywhere</p>
        </h1>
      </div>
      </div>
   
    
    <p >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat
      libero eget magna commodo, quis pharetra tellus pretium. Sed viverra ante
      in mauris finibus dapibus. Maecenas congue dapibus nulla, eu gravida orci
      consequat eu. Phasellus nec nunc malesuada, aliquam massa ac, accumsan
      metus. Fusce sed dignissim lectus. Nunc elit tellus, sollicitudin ac
      accumsan ut, egestas et dui. Maecenas aliquam est a ligula scelerisque, in
      aliquam neque sodales. Nullam condimentum euismod dictum. Curabitur non ex
      elementum, pretium enim ut, ornare ipsum.
    </p>



    
      </div>
    );
  }
  
  export default Home;