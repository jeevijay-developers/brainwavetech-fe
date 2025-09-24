import SingleSolutions from "./SingleSolutions";

export default function Solutions({ data }) {
    const { ourSolutions } = data;
    return (
        <div className="service-cards-wrapper position-relative z-index-1">
            <div className="container">
                <div className="row justify-content-center pb-60">
                    <div className="col-lg-7">
                        <h3 className="text-bright-gray text-center">Better Agency/SEO Solution At Your Fingertips</h3>
                    </div>
                </div>
                <div className="row justify-content-center gy-4">
                    <SingleSolutions solutionsData={ourSolutions} />
                </div>
            </div>
        </div>
    )
}
