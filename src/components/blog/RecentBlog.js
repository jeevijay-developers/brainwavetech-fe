import { recentBlogLeft, recentBlogRight } from "@/constant/blog/recentBlogData"

export default function RecentBlog() {
    return (
        <div className="blog-grid-wrapper position-relative z-index-1">
            <div className="container">
                <div className="row justify-content-center pb-60">
                    <div className="col-lg-6 text-center">
                        <h3 className="text-bright-gray">Read our recent blog </h3>
                    </div>
                </div>
                <div className="row gy-5">
                    <div className="col-lg-3 col-md-6">
                        {
                            recentBlogLeft.length > 0 && recentBlogLeft.map((dt, i) => {
                                return (
                                    <div key={i} className={`blog-card-sm wow fadeInUp ${i === 0 ? "" : "mt-30"}`}>
                                        <div className="blog-thumb">
                                            <a href="blog-details.html"><img src="/images/blog/thumb-sm-one.png" alt="" /></a>
                                        </div>
                                        <div className="blog-info">
                                            <h5 className="blog-title"><a href="blog-details.html">Our co-founders Tuomo Riekki and Kristo Ovaska are</a></h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-5 d-lg-block d-none">
                        <div className="blog-grid-featured-image">
                            <img src="/images/blog/blog-featured-image.png" alt="featured" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {
                            recentBlogRight.length > 0 && recentBlogRight.map((dt, i) => {
                                return (
                                    <div key={dt.id} className={`blog-card-md has-bottom-border wow fadeInUp`}>
                                        <ul className="blog-meta">

                                            <li>Decmeber 05</li>
                                            <li><a href="#">Admin</a></li>
                                        </ul>
                                        <h5 className="blog-title">
                                            <a href="blog-details.html">Our co-founders Tuomo Riekki yesterday.</a>
                                        </h5>
                                        <p>Our co-founders Tuomo Riekki and Kristo Ovaska are serial entrepreneurs who</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
