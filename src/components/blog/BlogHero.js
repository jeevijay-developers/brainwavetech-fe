export default function BlogHero({ data }) {
    return (
        <div className="featured-blog-wrapper pt-xxl section-gap-xl-bottom position-relative z-index-1 ">
            <img src="/images/shapes/line-svg-blue.svg" alt="" className="position-absolute top-0 start-0 corner-line low-index" />
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-7 order-1 order-lg-0">
                        <div className="featured-blog-content">
                            <h1 className="text-bright-gray">{data.title}</h1>
                            <p className="body-disply-1">{data.subTitle}</p>
                            <div className="featured-blog-btn pt-5">
                                <a href="blog-details.html" className="btn-fill-rounded">{data.btnTxt}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 order-0 order-lg-1">
                        <div className="featured-blog-thumb text-lg-end ">
                            <img src={data.img} alt={data.title} className="wow fadeInRight img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
