import { Link } from 'react-router-dom';
// import Navbar from './components/navbar'

function LandingPage() {

  // const navigate = useNavigate()
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Include Tailwind CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <title>Landing Page</title>

      <nav>
        <div className="h-20vh flex justify-between z-50 text-white bg-blue-500">
            <div className="flex items-center flex-1">
                <span className="text-3xl font-semi-bold">Logo</span>
            </div>
            <div>
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <li
                        className="my-2 py-2 bg-blue-800 hover:bg-white hover:text-blue-600">Home</li>
                        <li
                        className="my-2 py-2 hover:bg-white hover:text-blue-600">Features</li>
                        <li
                        className="my-2 py-2 hover:bg-white hover:text-blue-600">Pricing</li>
                        <li
                        className="my-2 py-2 hover:bg-white hover:text-blue-600">FAQs</li>
                        <li
                        className="my-2 py-2 hover:bg-white hover:text-blue-600">About</li>
                    </ul>
                </div>
            </div>
        </div>
      </nav>
      <div className="section-hero bg-blue-700 text-white py-16">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-semibold leading-tight mb-4">
              Better Solutions For Your Business
            </h1>
            <p className="text-lg">
              We are a team of talented designers making websites with Bootstrap
            </p>
          </div>
          <div className="space-x-4 ml-4">
            <Link to="/create-product"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-white transition duration-300">
              Create Product
            </Link>
            <a href="#" id="" className="text-blue-500 hover:text-blue-600">
              About
            </a>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="image">
            <img src="hero-img.png.png" alt="landing page" name="landingpage" />
          </div>
        </div>
      </div>
      <div className="section-sub bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Join Our Newsletter</h3>
          <p className="text-gray-600">
            Tamen quem nulla quae legam multos aute sint culpa legam noster magna
          </p>
          <form className="mt-6 flex items-center justify-center">
            <input
              type="text"
              id="email"
              name="emailletter"
              className="rounded-full py-2 px-4 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            <input
              type="submit"
              name="subs"
              id="subs"
              defaultValue="Subscribe"
              className="bg-blue-500 text-white px-6 py-2 ml-4 rounded-full hover:bg-blue-600 transition duration-300"
            />
          </form>
        </div>
      </div>
      <div className="info bg-gray-800 text-white py-8">
        <div className="container mx-auto flex">
          <div className="w-full p-4">
            <p className="text-2xl font-semibold mb-4" id="name-arsha">
              ARSHA
            </p>
            <div className="footer-content text-gray-400">
              <p>
                A108 Adam Street
                <br />
                New York, NY 535022
                <br />
                United States
              </p>
              <p>
                Phone: +1 5589 55488 55
                <br />
                Email: info@example.com
              </p>
            </div>
          </div>
          <div className="w-full p-4">
            <p className="text-2xl font-semibold mb-4 title-footer">Useful Links</p>
            <div className="footer-content text-gray-400">
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-4">
            <p className="text-2xl font-semibold mb-4 title-footer">Our Services</p>
            <div className="footer-content text-gray-400">
              <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-4">
            <p className="text-2xl font-semibold mb-4 title-footer">Our Services</p>
            <div className="footer-content text-gray-400">
              <p className="">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-blue-500 text-white text-center py-4">
        <p className="text-sm">
          © Copyright <strong>Arsha</strong>. All Rights Reserved
        </p>
        <p className="text-xs">Designed by BootstrapMade</p>
      </footer>
    </>

  )
}

export default LandingPage