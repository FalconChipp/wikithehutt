import React from "react";
import { Link } from "gatsby";

export default function NewNav() {
    return (
        <nav className="bg-transparent text-white">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <div className=" flex justify-between items-center w-full">
                    <ul className="flex flex-col mt-4 text-2xl font-jedi">
                        
                        <li>
                            <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-redSaber hover:text-redSaber rounded-xl flex items-center" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-blueSaber hover:text-blueSaber rounded-xl flex items" to="/characters">Characters</Link>
                        </li>
                        <li>
                            <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-greenSaber hover:text-greenSaber rounded-xl flex items-center" to="/weapons">Weapons</Link>
                        </li>
                        <li>
                            <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-greenSaber hover:text-greenSaber rounded-xl flex items-center" to="#">Armour</Link>
                        </li>
                        <li>
                            <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-orangeSaber hover:text-orangeSaber rounded-xl flex items-center" to="/ships">Ships</Link>
                        </li>
                        <li>
                            <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-purpleSaber hover:text-purpleSaber rounded-xl flex items-center" to="/planets">Planets</Link>
                        </li>
                        <li>
                            <Link className="m-5 pt-1 pb-2 px-3 hover:shadow-yellowSaber hover:text-yellowSaber rounded-xl flex items-center" to="/timeline">Timeline</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}