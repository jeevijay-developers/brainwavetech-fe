export default function SingleInfoSection({ data }) {
    return (
        <div className="featured-article-wrapper section-gap-top-y-1 pb-80 position-relative z-index-1">
            <div className="container-fluid">
                <div className="row justify-content-center px-lg-5 px-md-3">
                    <div className="col-xxl-10 col-lg-12 col-md-11">
                        <div className="row gy-4 gx-5">
                            <div className="col-xl-4 col-lg-5">
                                <div className="featured-blog-image">
                                    <img src={data.img} alt={data.title} className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7">
                                <div className="featured-blog-two-content">
                                    <h3 className="text-bright-gray pb-2">{data.title}</h3>

                                    <div className="row gy-4">
                                        <div className="col-lg-6">
                                            <p className="body-disply-1 pt-4">{data.p1}</p>
                                        </div>
                                        <div className="col-lg-6 ">
                                            <p className="body-disply-1 pt-lg-4">{data.p2}</p>
                                        </div>
                                    </div>
                                    <div className="featured-blog-btn pt-5 mt-lg-3">
                                        <a href="blog-details.html" className="btn-fill-rounded">{data.btnTxt}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
