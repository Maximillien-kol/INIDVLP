import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/seo-config"

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Terms and conditions for using INI Development's web development services. Understand our policies, service agreements, and legal terms.",
    keywords: [
        "terms and conditions",
        "service terms Rwanda",
        "web development terms",
        "legal terms",
        "service agreement",
        "INI Development policies",
    ],
    alternates: {
        canonical: `${siteConfig.url}/terms`,
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function TermsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header variant="solid" />

            <main className="flex-1 bg-gray-50">
                <div className="max-w-4xl mx-auto px-8 lg:px-16 py-24 md:py-32">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <p className="text-sm tracking-[0.2em] text-gray-500 uppercase mb-6">
                            Understanding Our
                        </p>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-[#1C1C1C] mb-12">
                            Terms and
                            <br />
                            Conditions
                        </h1>

                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                            In using this website and our services, you are deemed to have read and agreed to the following terms and conditions:
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16 bg-white p-8 md:p-12 rounded-sm">

                        {/* Definitions */}
                        <section>
                            <p className="text-gray-600 leading-relaxed">
                                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: "customer", "You" and "Your" refers to you, the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", "We" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the customer and ourselves, or either the customer or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the customer in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the customer's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing English Law. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                            </p>
                        </section>

                        {/* Services */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Services
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                INI Development provides web development, software development, and digital solutions services. All projects are delivered according to agreed timelines and specifications outlined in individual project proposals and contracts.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Project timelines are estimates and may be subject to change based on project complexity, client feedback cycles, and resource availability. We commit to transparent communication regarding any timeline adjustments.
                            </p>
                        </section>

                        {/* Payment Terms */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Payment Terms
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Payment terms are outlined in individual project proposals. Typically, payment is structured as follows:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                                <li>Initial deposit (typically 50%) upon project commencement</li>
                                <li>Milestone payments as agreed in the project proposal</li>
                                <li>Final payment upon project completion and client approval</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Late payments may result in project suspension until payment is received. All fees are quoted in RWF (Rwandan Francs) or USD as agreed.
                            </p>
                        </section>

                        {/* Intellectual Property */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Intellectual Property Rights
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Upon full payment, all custom code and designs created specifically for your project shall be transferred to you. However, INI Development retains the right to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                                <li>Use the project in our portfolio and marketing materials</li>
                                <li>Reuse general coding patterns, frameworks, and methodologies</li>
                                <li>Retain ownership of any pre-existing code, libraries, or templates used</li>
                            </ul>
                        </section>

                        {/* Client Responsibilities */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Client Responsibilities
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The client agrees to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                                <li>Provide all necessary content, materials, and information in a timely manner</li>
                                <li>Provide clear and specific feedback within agreed timelines</li>
                                <li>Respond to requests for information or approval within 5 business days</li>
                                <li>Ensure they have the rights to any materials provided (images, text, branding)</li>
                                <li>Maintain backups of their data and content</li>
                            </ul>
                        </section>

                        {/* Revisions and Changes */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Revisions and Scope Changes
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Each project includes a specified number of revision rounds as outlined in the proposal. Additional revisions or changes to the project scope may incur additional fees.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Major scope changes may require a new project proposal and timeline adjustment. We commit to providing clear estimates for any additional work before proceeding.
                            </p>
                        </section>

                        {/* Maintenance and Support */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Maintenance and Support
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Post-launch support is available through separate maintenance agreements. This includes:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                                <li>Bug fixes for issues directly related to our development work</li>
                                <li>Technical support and troubleshooting</li>
                                <li>Software updates and security patches</li>
                                <li>Performance monitoring and optimization</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Basic bug fixes within 30 days of launch are included. Extended support requires a maintenance agreement.
                            </p>
                        </section>

                        {/* Warranties and Disclaimers */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Warranties and Disclaimers
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We warrant that our work will be performed with professional skill and care. However, we cannot guarantee:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                                <li>Specific search engine rankings or traffic levels</li>
                                <li>Compatibility with all future third-party services or platforms</li>
                                <li>Uninterrupted operation of websites or applications</li>
                                <li>Results from marketing or promotional activities</li>
                            </ul>
                        </section>

                        {/* Limitation of Liability */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Limitation of Liability
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                INI Development's liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific project in question. We shall not be liable for any indirect, consequential, or incidental damages including but not limited to loss of profits, data, or business opportunities.
                            </p>
                        </section>

                        {/* Termination */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Termination
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Either party may terminate the agreement with written notice. In the event of termination:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                                <li>Client must pay for all work completed up to the termination date</li>
                                <li>INI Development will provide all completed work upon receipt of payment</li>
                                <li>No refunds will be issued for work already completed</li>
                                <li>Both parties must return any confidential materials</li>
                            </ul>
                        </section>

                        {/* Confidentiality */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Confidentiality
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We respect the confidentiality of our clients' information. Any confidential information shared during the project will be kept secure and not disclosed to third parties, except as required by law or with client permission. This obligation continues beyond project completion.
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Governing Law
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms and Conditions shall be governed by and construed in accordance with the laws of Rwanda. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Rwanda.
                            </p>
                        </section>

                        {/* Changes to Terms */}
                        <section>
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Changes to Terms
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                INI Development reserves the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the new terms.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="border-t border-gray-200 pt-8 mt-12">
                            <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">
                                Contact Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                For questions about these Terms and Conditions, please contact us:
                            </p>
                            <div className="space-y-2 text-gray-700">
                                <p><strong>Email:</strong> contact@ini.rw</p>
                                <p><strong>Address:</strong> Kigali, Rwanda, Nyarugenge district</p>
                            </div>
                        </section>

                        {/* Last Updated */}
                        <div className="text-center pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500">
                                Last Updated: December 25, 2025
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
