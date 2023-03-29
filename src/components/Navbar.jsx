import { useState } from "react"
import { Menu, CloseMenu } from "./icons"
import { navLinks } from "../constants";


const Navbar = () => {

	const [openMenu, setOpenMenu] = useState(false);

	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	}

  return (
    <div className="flex justify-between">

		<h1 className="font-inter text-[22px] font-bold z-50">Your Logo</h1>

		<button className="z-50"onClick={toggleMenu}>
			{openMenu ? <CloseMenu/> : <Menu/>}	
		</button>
			{
				openMenu && (
					<div className="fixed z-40 top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
						
							<ul className="bg-gradient p-20 rounded-xl text-center"> 
								{navLinks.map((navLink) => (
									<li key={navLink.id} className="m-[20px] border-b-4 border-transparent hover:border-white">
										<a href={navLink.path} className="text-[25px] text-white font-bold">
											{navLink.title}
										</a>	
									</li>
								))}
							</ul>

					</div>	
					

				
				)
			}

    </div>
  )
}

export default Navbar