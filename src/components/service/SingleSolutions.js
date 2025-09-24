export default function SingleSolutions({ solutionsData }) {
    return (
        <>
            {
                solutionsData.length > 0 && solutionsData.map((dt, i) => {
                    return (
                        <div key={i} className="col-lg-4 col-md-6 col-sm-10">
                            <div className="service-card-style">
                                <div className={`service-icon bg-${i + 1}`}>
                                    <img src="/images/Icons/line-chart.svg" alt="" className="img-fluid" />
                                </div>
                                <div className="service-card-info">
                                    <h5 className="text-purple-haze">Creative development</h5>
                                    <p className="body-disply-1 text-purple-haze-700">Increase your team's productivity and save time with a bot that answers and fields customer inquiries</p>

                                    <div className="service-card-btn">
                                        <a href="#">Read details <i className="bi bi-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
