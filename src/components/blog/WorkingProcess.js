export default function WorkingProcess({ data, delay }) {
    return (
        <div className="blog-grid-wrapper-two section-gap-xl-top position-relative z-index-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pb-60">
                        <h3 className="text-bright-gray">articles about our working process</h3>
                    </div>
                </div>
                <div className="row gy-4">
                    {
                        data.length > 0 && data.slice(0, 2).map(dt => {
                            return (
                                <div key={dt.id} className="col-lg-6 col-md-6">
                                    <div className="blog-card-xl">
                                        <div className="blog-thumb">
                                            <a href="blog-details.html">
                                                <img src={dt.img} alt="" />
                                            </a>
                                        </div>
                                        <div className="blog-info">
                                            <h4 className="blog-title"><a href="blog-details.html">{dt.title}</a></h4>
                                            <p className="body-disply-1">{dt.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row pt-5 gy-4">
                    {
                        data.length > 0 && data.slice(2).map(dt => {
                            return (
                                <div key={dt.id} className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft" data-wow-delay={dt.delay} >
                                    <div className="blog-card-sm-v2">
                                        <div className="blog-thumb">
                                            <a href="#"><img src={dt.img} alt="" /></a>
                                        </div>
                                        <div className="blog-info">
                                            <h5 className="blog-title"><a href="blog-details.html">{dt.title}</a></h5>
                                            <p className="body-disply-1">{dt.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
