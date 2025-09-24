import React from 'react'

export default function CountryMap() {
    return (
        <div className="country-map-style-one position-relative section-gap-xl-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <h3 className="text-bright-gray text-center">We have support language for more than 30 languages arounf the world</h3>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xxl-10">
                        <div className="mobil-map d-block d-lg-none pt-60">
                            <img src="/images/shapes/mobil-map.png" alt="" className="img-contain" />
                        </div>
                        <div className="country-map-wrap d-lg-block d-none">
                            <div className="map-bg">
                                <img src="/images/shapes/dot-map-body.png" alt="" />
                            </div>

                            <div className="single-country country-1 d-inline-flex wow zoomIn" data-wow-delay="0.3s">
                                <img src="/images/shapes/flag-1.png" alt="" className="circle-shadow rounded-circle" />
                            </div>
                            <div className="single-country country-2 d-inline-block wow zoomIn">
                                <img src="/images/shapes/flag-3.png" alt="" className="circle-shadow rounded-circle" />
                            </div>
                            <div className="single-country country-3 d-inline-block wow zoomIn" data-wow-delay="0.6s">
                                <img src="/images/shapes/flag-2.png" alt="" className="circle-shadow rounded-circle" />
                            </div>
                            <div className="single-country country-4 d-inline-block wow zoomIn" data-wow-delay="0.3s">
                                <img src="/images/shapes/flag-4.png" alt="" className="circle-shadow rounded-circle" />
                            </div>
                            <div className="single-country country-5 d-inline-block wow zoomIn" data-wow-delay="0.3s">
                                <img src="/images/shapes/flag-5.png" alt="" className="circle-shadow rounded-circle" />
                            </div>
                            <div className="single-country country-6 d-inline-block wow zoomIn">
                                <img src="/images/shapes/flag-6.png" alt="" className="circle-shadow rounded-circle" />
                            </div>
                            <div className="single-country country-7 d-inline-block wow zoomIn" data-wow-delay="0.6s">
                                <img src="/images/shapes/flag-7.png" alt="" className="circle-shadow rounded-circle" />
                            </div>
                            <div className="single-country country-8 d-inline-block wow zoomIn">
                                <img src="/images/shapes/flag-8.png" alt="" className="circle-shadow rounded-circle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
