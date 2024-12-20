import React from 'react';
import pic  from '../images/pic.jpg';
import pic1  from '../images/pic1.jpg';
import pic2  from '../images/pic2.jpg';

function slider(){
    return(
        <div className='carsouel'>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pic} class="d-block  " alt="..." id='pic' className='pic'/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='tagline'>Creativity is an import-export bussiness</h5>
        
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic1}class="d-block w-100 " alt="..." id='pic1'  className='pic1'/>
      <div class="carousel-caption d-none d-md-block">
      <h5 className='tagline1'>There should be a policy to have a mechanism in place<br /> to decide when and how to import or export</h5>
       
      </div>
    </div>
    <div class="carousel-item">
      <img src={pic2} class="d-block " alt="..."  className='pic2'/>
      <div class="carousel-caption d-none d-md-block">
      <h5 className='tagline2'>Democracy is not a commodity for import and export</h5>
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    );
}

export default slider;
