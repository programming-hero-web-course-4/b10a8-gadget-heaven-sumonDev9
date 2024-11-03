// import bannerImg from '../assets/img/banner.jpg';
const Banner = () => {
    return (
        <div className="bg-primary mx-4 h-[550px] pt-12 text-center"> 
           <div className="max-w-4xl mx-auto">
           <h1 className="text-5xl text-white font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="mt-6 text-white max-w-2xl mx-auto">
            Enhance your tech experience with Gadget Heaven Accessories, offering stylish, innovative, and high-quality essentials.</p>
            <button className="text-black font-bold bg-white px-3 py-2 rounded-full mt-8">Shop Now</button>
            <div className="backdrop-blur-md mt-5 rounded-3xl border-2 border-white p-5 bg-white/30">
            <div
                className="hero border-2 min-h-[450px] object-cover rounded-2xl bg-banner">
            </div>
            </div>
           </div>
        </div>
    );
};

export default Banner;