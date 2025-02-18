import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
    return (
        <Layout>
            <SEO
                title="Apply"
                keywords={['apply', 'madeleine mary walker']}
            />

            <div className="mx-auto md:w-2/3">

                <div className="bg-teal-600 text-gray-100 p-5 my-5 rounded">
                    <h2 className="text-2xl font-semibold mb-4">Application Information</h2>

                    <p className="">
                        To apply, please complete the form below. Alternatively, you can download{" "}
                        <a
                            href="https://docs.google.com/document/d/16qYiTrjOO4qey0g9Q2OfU_PPr7pyRr2F/export?format=doc"
                            className="font-bold underline"
                        >
                            this
                        </a>{" "}
                        application form and email a completed version to{" "}
                        <a href="mailto:m100pfb@yahoo.co.uk"
                              className="font-bold underline">
                            m100pfb@yahoo.co.uk
                        </a>.
                    </p>
                </div>
            </div>

            <form className="mx-auto md:w-2/3 md:flex md:flex-wrap md:justify-between"
                  action="https://formspree.io/m100pfb@yahoo.co.uk" method="POST" enctype="multipart/form-data">


                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-6 leading-tight"
                    id="first-name"
                    type="text"
                    placeholder="Name"
                    name="Name"
                    aria-label="name"
                    required
                />

                <input type="street"
                       className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                       placeholder="Street"
                       name="Street"
                       aria-label="street"
                       required
                />

                <input type="city"
                       className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                       id="city"
                       placeholder="Town / City"
                       name="Town/City"
                       aria-label="city"
                       required
                />

                <input type="county"
                       className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                       id="county"
                       placeholder="County"
                       name="County"
                       aria-label="county"
                       required
                />

                <input type="postcode"
                       className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                       id="postcode"
                       placeholder="Postcode"
                       name="Postcode"
                       aria-label="postcode"
                       required
                />

                <input type="email"
                       className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                       id="email"
                       placeholder="Email"
                       name="Email"
                       aria-label="email"
                       required
                />

                <input type="phone"
                       className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                       id="phone"
                       placeholder="Phone Number"
                       name="Phone Number"
                       aria-label="phone number"
                       required
                />

                <textarea
                    className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                    placeholder="Outline the basis of your application, including details of your income, outgoings and any shortfall"
                    rows="8"
                    id="application"
                    aria-label="application"

                    name="Application"
                />

                <textarea
                    className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
                    placeholder="Include here any evidence in support of your application, such as proof of acceptance on chosen course, costs of equipment, testimonials"
                    rows="8"
                    id="evidence"
                    aria-label="evidence"

                    name="Evidence"
                />

                 <span> If you wish to upload any files (such as references), please upload them here. </span>
                 <input className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full" type="file" name="attachment" accept="image/png, image/jpeg">

                <button
                    className="border-b-4 border-gray-700 hover:border-gray-600 bg-gray-600 hover:bg-gray-500 font-bold px-4 py-2 rounded text-sm text-white float-right">
                    Submit
                </button>
            </form>
        </Layout>
    );
}

export default ContactPage;
