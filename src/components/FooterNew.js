import React from "react";
import { Link } from "gatsby";

export default function Footernew() {
    return (
        <section className="h-auto bg-black">
            <div className="mt-5 text-center font-jedi text-white text-2xl">
                <Link className="m-5" to="/">Home</Link>
                <Link className="m-5" to="/">Privacy Policy</Link>
                <Link className="m-5" to="/">Cookie Policy</Link>
                <Link className="m-5" to="/">Contact</Link>
            </div>
            <div className="font-dosis text-white text-center text-xl bg-black">
                <h3 className="mt-3">2022 Wiki The Hutt</h3>
            </div>
        </section>
    )
}