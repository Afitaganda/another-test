
const Navbar = () => {
    return (
      <nav>
        <div className="h-10vh flex justify-between z-50 text-white">
            <div className="flex items-center flex-1">
                <span>Logo</span>
            </div>
            <div>
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <li>Home</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>FAQs</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </div>
      </nav>
    )
  }
