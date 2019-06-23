import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import topping from "../images/roseberry_topping.jpg";

function IndexPage() {
    return (
        <Layout>
            <SEO
                title="Home"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />

            <div className="max-w-3/4 mx-auto">

            <p className="mb-5 text-gray-800">
                The Madeleine Mary Walker Foundation is a small voluntary Foundation set up a few years ago
                awarding
                modest grants to support people involved in fulfilling their educational aspirations.
            </p>

            <p className="mb-5 text-gray-800">
                Given the stringent economic climate and the necessity for students to pay tuition fees the
                Foundation has been overwhelmed with requests for support.
            </p>
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
