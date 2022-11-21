import React from "react";
import Layout from "../../components/Layout";
import AnakinSaber from "../../components/Load-Models/LoadAnakin";

export const Head = () => <title>Anakin Skywalkers Lightsaber</title>
export default function AnakinsSaber({data, location}) {
    return (
        <Layout>
            <section className="w-full grid">
                <div>
                    <h1 className="text-white text-center font-jedi text-6xl pt-5 pb-10">Anakins Saber</h1>
                    <div>
                        <AnakinSaber />
                    </div>
                </div>

                <div className="grid grid-cols-1 container-center">
                    <div className="px-10 py-5">
                        <h3 className="text-white font-dosis text-4xl">Heading 1</h3>
                        <p className="text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}