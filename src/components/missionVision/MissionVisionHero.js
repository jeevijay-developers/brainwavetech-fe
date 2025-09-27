import missionVisionData from "@/constant/missionVision/missionVisionData";

export default function MissionVisionHero() {
  return (
    <div className="mission-vision-wrapper pt-xxl section-gap-xl-bottom position-relative z-index-1">
      <img
        src="/images/shapes/line-svg-blue.svg"
        alt=""
        className="position-absolute top-0 start-0 corner-line low-index"
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="mission-vision-header">
              <h1 className="text-bright-gray mb-4">
                {missionVisionData.hero.title}
              </h1>
              <p className="body-display-1 text-muted">
                {missionVisionData.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
