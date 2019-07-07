import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import topping from "../images/roseberry_topping.jpg";

function IndexPage() {
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[`charity`, `stokesley`, `madeleine mary walker`]}
            />

            <div className="md:max-w-3/4 mx-auto leading-loose">

                <p className="mb-8 text-gray-800 text-2xl">
                    A North Eastern memorial Foundation created in 1997 to assist people of all ages and abilities who
                    may have difficulties in financing educational opportunities.
                </p>

                <p className="mb-8 text-gray-800">
                    <span className="font-bold">The Madeleine Mary Walker Foundation</span> is a small voluntary
                    Foundation set up to award
                    modest grants supporting people involved in fulfilling their educational aspirations.
                </p>

            </div>

            <div className="md:w-3/4 mx-auto leading-loose bg-teal-600 text-gray-100 p-8 mb-8 rounded shadow-lg">

                <span className="font-bold text-2xl">The foundation supports:</span>

                <ul className="p-4">
                    <li className="mb-2">
                        - People with their education at all
                        levels
                    </li>
                    <li className="mb-2">
                        - Students with the purchase of their books, equipment or tools
                    </li>
                    <li className="mb-2">
                        - Students with their tuition fees
                    </li>
                    <li className="mb-2">
                        - Students with the purchase of their musical instruments
                    </li>
                    <li className="mb-2">
                        - Students with their travel, projects abroad and field studies
                    </li>
                </ul>
            </div>

            <div className="md:max-w-3/4 mx-auto leading-loose">
                <div className=" mb-8 ">
                    <span className="text-gray-800 text-sm">Roseberry Topping, near our home in Stokesley</span>
                    <img className="opacity-75 rounded-lg w-full shadow-lg" src={topping} alt="Madeleine Mary Walker"/>
                </div>


                <p className="mb-8 text-gray-800">
                    Our funds are very limited, therefore we have to apply very strict criteria. The Foundation
                    gives first
                    priority to supporting students from within our own locality (within 30 miles of Stokesley
                    in North
                    Yorkshire).
                </p>

                <p>To see how to apply, please visit our{" "} <Link to="/apply"
                                                                    className="font-bold underline"> Application
                    Page</Link>.</p>
            </div>

        </Layout>
    );
}

export default IndexPage;
