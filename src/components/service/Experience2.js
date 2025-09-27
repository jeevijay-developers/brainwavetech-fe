export default function Experience2({ pb }) {
  return (
    <div
      className={`about-experience-wrap section-gap-xl-top position-relative z-index-1 ${
        pb ? pb : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row gy-4 align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6 text-lg-end">
            <div className="position-relative about-experience-screens d-lg-inline-block d-flex flex-wrap flex-sm-nowrap">
              <div className="about-experience-bg d-lg-block d-none">
                <img
                  src="/images/shapes/experience-bg.png"
                  alt="Brainwave Experience Background"
                  className="img-fluid"
                />
              </div>
              <div className="wow fadeInDown experience-screen screen-1 text-start position-absolute start-0">
                <img
                  src="/images/shapes/vb/pexels-shkrabaanthony-7579302.jpg"
                  alt="Brainwave Report Example"
                  className="img-fluid"
                />
              </div>
              <div className="wow fadeInUp experience-screen screen-2 position-absolute end-0">
                <img
                  src="/images/shapes/vb/pexels-anntarazevich-6230962.jpg"
                  alt="Customized Sound Therapy Screen"
                  className="img-fluid"
                />
              </div>
              {/* <div className="experience-screen screen-3 position-absolute d-none d-lg-block">
                <img
                  src="/images/shapes/vb/pexels-shkrabaanthony-7579302.jpg"
                  alt="Neurofeedback Interface"
                  className="img-fluid"
                />
              </div> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="experience-content">
              <h3 className="text-bright-gray">
                6+ Years of Transforming Mental Wellness
              </h3>
              <p className="body-disply-1 mt-4 text-purple-haze-700">
                Brain Waves Tech empowers individuals and professionals with
                patented brainwave analysis technology—delivering over 92%
                accuracy in measuring mental states and offering customized
                sound therapy for focus, clarity, and emotional balance.
              </p>

              <ul className="experience-list mt-5">
                <li className="d-flex align-items-center">
                  <span></span>
                  <h5>
                    {" "}
                    10K+ individuals benefited across education, healthcare &
                    corporate sectors{" "}
                  </h5>
                </li>
                <li className="d-flex align-items-center">
                  <span></span>
                  <h5>
                    {" "}
                    15+ brain & emotional parameters analyzed in just 2 minutes{" "}
                  </h5>
                </li>
                <li className="d-flex align-items-center">
                  <span></span>
                  <h5>
                    {" "}
                    Backed by IBM-verified technology & scientific validation{" "}
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
