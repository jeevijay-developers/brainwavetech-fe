import coreValuesData from "@/constant/coreValues/coreValuesData";

export default function CoreValuesHero() {
  return (
    <div className="core-values-wrapper pt-xxl section-gap-xl-bottom position-relative z-index-1">
      <img
        src="/images/shapes/line-svg-blue.svg"
        alt=""
        className="position-absolute top-0 start-0 corner-line low-index"
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="core-values-header">
              <h1 className="text-bright-gray mb-4">
                {coreValuesData.hero.title}
              </h1>
              <p className="body-display-1 text-muted">
                {coreValuesData.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
