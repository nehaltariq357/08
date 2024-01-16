import React from 'react'

function Slider() {
  return (
  <>
 
 <div className="flex">
  <div className='w-96' id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/af899b2f-1f12-4c9e-a3dd-5ebb0d93b6ce.gif?format=avif" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block"></div>
      </div>
      <div className="carousel-item">
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/5a0e2a09-32fe-49ce-8cd6-1082c3571856.png?format=avif" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block"></div>
      </div>
      <div className="carousel-item">
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/b461e33c-2b59-4502-885b-adab6806401b.png?format=avif" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block"></div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  <img clsass = 'image' className='w-3/12	h-52	m-0	' src="https://f.nooncdn.com/mpcms/EN0001/assets/9fa77bc4-04be-47ec-a433-42126343092c.png?format=avif" alt="" />
</div>


  </>
  )
}

export default Slider