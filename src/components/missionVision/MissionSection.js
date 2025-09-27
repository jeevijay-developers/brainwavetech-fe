import missionVisionData from "@/constant/missionVision/missionVisionData";

export default function MissionSection() {
  return (
    <div className="mission-section section-gap-bottom position-relative">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="mission-content">
              <div className="breadcrumb-style mb-3">
                <span className="text-primary">
                  {missionVisionData.mission.breadcrumb.home}
                </span>
                <span className="mx-2">/</span>
                <span className="text-muted">
                  {missionVisionData.mission.breadcrumb.current}
                </span>
              </div>

              <h2 className="section-title text-bright-gray mb-4">
                {missionVisionData.mission.title}
              </h2>

              <p className="body-display-1 text-muted">
                {missionVisionData.mission.description}
              </p>
            </div>
          </div>

          <div className="col-lg-6 order-lg-1">
            <div className="mission-illustration text-center">
              <div className="mission-icon-wrapper">
                <div className="mission-circle">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mission-icon"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="58"
                      stroke="url(#gradient2)"
                      strokeWidth="4"
                    />
                    <path
                      d="M40 60L50 70L80 40"
                      stroke="url(#gradient2)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="60"
                      cy="30"
                      r="15"
                      stroke="url(#gradient2)"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M60 75L45 85V95H75V85L60 75Z"
                      fill="url(#gradient2)"
                    />
                    <defs>
                      <linearGradient
                        id="gradient2"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#059669" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
