import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import mmw from "../images/madeleine-mary-walker.jpg";

function AboutPage() {
    return (
        <Layout>
            <SEO
                title="About"
                keywords={['about', 'madeleine mary walker']}
            />

            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 md:mr-8">
                    <h1 className="text-2xl pl-4 mb-8">About Madeleine Mary Walker</h1>
                    <p className="border-gray-900 leading-loose pl-4 mb-8">
                        Madeleine was a pupil at St Patrick’s RC School Thornaby and St Mary’s Convent, Middlesbrough
                        where she obtained 9 passes in GCE in 1956.
                        She was a student at Constantine Technical College, Middlesbrough where she gained three further
                        GCEs, mathematics, physics and chemistry in 1958.
                        Following that, a student at Stockton Billingham Technical College where she studied and gained
                        three advanced levels in mathematics, physics and chemistry in 1959.
                    </p>

                    <p className="border-gray-900 leading-loose pl-4 mb-8">
                        She received a First degree a BSc Durham University in 1962, MSc from London University in 1969
                        and a further MSc from Durham University in 1984.
                        Madeleine was elected a member of the British Computer Society in 1985, and became Chartered
                        Engineer and managing director of her own engineering company.
                    </p>

                    <p className="border-gray-900 leading-loose pl-4 mb-8">
                        She led a university expedition to Lapland whilst at Durham.
                        Member of the teaching staff at Darwin College, a university in Australia for many years and
                        secured dual nationality, Australian and British.
                    </p>

                    <p className="border-gray-900 leading-loose pl-4 mb-8">
                        Madeliene died in her fifties from cancer when her parents established the Madeleine Mary Walker
                        Foundation from monies raised through her career, and established the Madeleine Mary Walker Science Centre at Stockton Riverside College in 2003 with
                        a £50,000 donation from the foundation.
                    </p>
                </div>

                <div className="w-2/3 md:w-1/3">
                    <img src={mmw} alt="Madeleine Mary Walker"/>
                    <span className="text-sm">Madeleine Mary Walker</span>
                </div>
            </div>
        </Layout>
    );
}

export default AboutPage;
