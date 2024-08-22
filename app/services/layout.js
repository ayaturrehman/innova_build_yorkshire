import Layout from "@/components/layout/Layout";

export default function ServicesLayout({ children }) {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            {children}
            <div className="container">
                <h3 className="my-3">Our Project Process</h3>
                <ul className="service-list">
                    <li>
                        <h5 className="fw-bold text-dark">Consultation & Planning</h5>
                        <p style={{ fontSize: '16px' }}>We start by understanding your vision and requirements, then create a detailed plan tailored to your needs.</p>
                    </li>
                    <li>
                        {/* <div className="services-details__points-bullet"></div> */}
                        <h5 className="fw-bold text-dark">Site Assessment & Design</h5>
                        <p style={{ fontSize: '16px' }}>We assess the site, design the project, and handle any necessary approvals to ensure everything is ready to go.</p>
                    </li>
                    <li>
                        <h5 className="fw-bold text-dark">Quotation & Agreement</h5>
                        <p style={{ fontSize: '16px' }}>We provide a clear quote and finalize the agreement, outlining the scope, timeline, and costs.</p>
                    </li>
                    <li>
                        <h5 className="fw-bold text-dark">Construction & Quality Control</h5>
                        <p style={{ fontSize: '16px' }}>Our skilled team manages the build with ongoing quality checks to ensure everything meets our high standards.</p>
                    </li>
                    <li>
                        <h5 className="fw-bold text-dark">Handover & Support</h5>
                        <p style={{ fontSize: '16px' }}>Once completed, we hand over the project and continue to offer support, ensuring your satisfaction.</p>
                    </li>
                </ul>
                <p className="my-5">
                    If you have any questions or would like to discuss your next project, feel free to reach out at enquiries@innovabuildyorkshire.co.uk.
                </p>
            </div>
        </Layout>
    );
}
