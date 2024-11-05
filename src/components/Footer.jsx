

const Footer = () => {
    return (
        <footer className="footer footer-center bg-white shadow text-base-content rounded p-10">
            <div>
                <h1 className='text-2xl lg:text-3xl font-bold  text-[#09080F]'>Gadget Heaven</h1>
                <p className='text-[#09080F99] opacity-60 font-medium'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="border-2 w-full border-[rgba(9, 8, 15, 0.1)] my-1"></div>
            <div className="flex flex-col md:flex-row lg:gap-40 justify-between">
                <nav className="flex flex-col">
                    <h6 className="footer-title text-[#09080F] font-bold">Services</h6>
                    <a className="link link-hover p-2 text-[#09080F] opacity-60">Product Support</a>
                    <a className="link link-hover p-2 text-[#09080F] opacity-60">Order Tracking</a>
                    <a className="link link-hover p-2 text-[#09080F] opacity-60">Shipping & Delivery</a>
                    <a className="link link-hover p-2 text-[#09080F] opacity-60">Returns</a>
                </nav>
                <nav className="flex flex-col md:-mt-8">
                    <h6 className="footer-title text-[#09080F] font-bold">Company</h6>
                    <a className="link link-hover p-2 text-[#09080F] opacity-60">About us</a>
                    <a className="link link-hover p-2 text-[#09080F] opacity-60">Careers</a>
                    <a className="link link-hover p-2 text-[#09080F] opacity-60">Contact</a>

                </nav>
                <nav className="flex flex-col md:-mt-8">
                    <h6 className="footer-title text-[#09080F] font-bold">Legal</h6>
                    <a className="link link-hover  p-2 text-[#09080F] opacity-60">Terms of use</a>
                    <a className="link link-hover p-2  text-[#09080F] opacity-60">Privacy policy</a>
                    <a className="link link-hover  p-2 text-[#09080F] opacity-60">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;


