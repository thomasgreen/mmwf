import React from "react";

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

                <p className="mb-5 text-gray-800 text-2xl">
                    <span className="font-bold">The Madeleine Mary Walker Foundation</span> is a small voluntary
                    Foundation set up to award
                    modest grants supporting people involved in fulfilling their educational aspirations.
                </p>

                <p className="mb-5 text-gray-800">
                    Given the stringent economic climate and the necessity for students to pay tuition fees the
                    Foundation has been recently overwhelmed with requests for support.
                </p>

                <div>
                    <img className="opacity-75 mb-5" src={topping} alt="Madeleine Mary Walker"/>
                </div>


                <p className="mb-5 text-gray-800">
                    At a past meeting of the Trustees there were over one
                    hundred thirty requests for support. Our funds are very limited and in a recent financial
                    year we
                    ran out of funds.
                </p>
                <p className="mb-5 text-gray-800">
                    Of necessity we have had to apply very strict criteria. The Foundation gives first
                    priority to supporting students from within our own locality (within 30 miles of Stokesley
                    in North
                    Yorkshire).
                </p>
            </div>

        </Layout>
    );
}

export default IndexPage;
