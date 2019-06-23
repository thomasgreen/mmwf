import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
    return (
        <Layout>
            <SEO
                title="Contact"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />

            <div className="mx-auto md:w-2/3">
                <h2>Application Information</h2>

                <ul>
                    <li>
                        All applicants will undergo a telephone interview before a grant will be awarded
                    </li>
                    <li>
                        If you do not hear from the Foundation within two months of your application, you can assume
                        your application has been unsuccessful.
                    </li>
                </ul>
            </div>

            <form className="mx-auto md:w-2/3 md:flex md:flex-wrap md:justify-between">
                <p className="mb-8 text-gray-800">
                    To apply, please complete the form below. Alternatively, you can download{" "}
                    <a
                        href="https://tailwindcss.com/docs/examples/forms"
                        className="font-bold no-underline text-gray-600"
                    >
                        this
                    </a>{" "}
                    document here and email it to .
                </p>

                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-6 leading-tight"
                    id="first-name"
                    type="text"
                    placeholder="Name"
                />

                <input type="street"
                       className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                       id="autocomplete"
                       placeholder="Street"/>

                <input type="city"
                       className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                       id="inputCity"
                       placeholder="City"/>

                <input type="county"
                       className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                       id="inputCounty"
                       placeholder="County"/>

                <input type="zip"
                       className="appearance-none block bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                       id="inputZip"
                       placeholder="Postcode"/>

                <textarea
                    className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full rounded"
                    placeholder="Outline the basis of your application, including details of your income, outgoings and any shortfall"
                    rows="8"
                />

                <textarea
                    className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
                    placeholder="Include here any evidence in support of your application, such as proof of acceptance on chosen course, costs of equipment, testimonials"
                    rows="8"
                />

                <button
                    className="border-b-4 border-gray-700 hover:border-gray-600 bg-gray-600 hover:bg-gray-500 font-bold px-4 py-2 rounded text-sm text-white">
                    Submit
                </button>
            </form>
        </Layout>
    );
}

export default ContactPage;
