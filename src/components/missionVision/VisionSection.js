import missionVisionData from "@/constant/missionVision/missionVisionData";

export default function VisionSection() {
  return (
    <div className="vision-section section-gap-bottom position-relative">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            <div className="vision-content">
              <div className="breadcrumb-style mb-3">
                <span className="text-primary">
                  {missionVisionData.vision.breadcrumb.home}
                </span>
                <span className="mx-2">/</span>
                <span className="text-muted">
                  {missionVisionData.vision.breadcrumb.current}
                </span>
              </div>

              <h2 className="section-title text-bright-gray mb-4">
                {missionVisionData.vision.title}
              </h2>

              <p className="body-display-1 text-muted">
                {missionVisionData.vision.description}
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="vision-illustration text-center">
              <div className="vision-icon-wrapper">
                <div className="vision-circle">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="vision-icon"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="58"
                      stroke="url(#gradient1)"
                      strokeWidth="4"
                    />
                    <path
                      d="M60 25L75 45H65V75H55V45H45L60 25Z"
                      fill="url(#gradient1)"
                    />
                    <circle cx="60" cy="85" r="8" fill="url(#gradient1)" />
                    <defs>
                      <linearGradient
                        id="gradient1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#4F46E5" />
                        <stop offset="100%" stopColor="#7C3AED" />
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
