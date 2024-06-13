
import Profile from '../assets/Rectangle 1.png'
const Banner = () => {
    return (
        <div className="container mx-auto rounded-3xl">
            <div className="hero  rounded-2xl " style={{backgroundImage:`url(${Profile})`}}>
  
  <div className="hero-content text-center text-neutral-content">
    <div className=" space-x-5 mt-20 p-10">
      <h1 className=" text-5xl font-bold mt-10 text-white">Discover an exceptional cooking <br /> class tailored for you!</h1>
      <p className="mb-5 mt-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
     
      <div className='space-x-4'>
      <button className="btn btn-active mt-7 bg-[#0BE58A] rounded-3xl font-extrabold">Explore Now</button>
      <button className="btn btn-outline rounded-3xl font-extrabold">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;