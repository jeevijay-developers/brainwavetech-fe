import coreValuesData from "@/constant/coreValues/coreValuesData";

export default function CoreValuesSection() {
  return (
    <div className="core-values-section section-gap-bottom position-relative">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            <div className="core-values-content">
              <div className="breadcrumb-style mb-3">
                <span className="text-primary">
                  {coreValuesData.coreValues.breadcrumb.home}
                </span>
                <span className="mx-2">/</span>
                <span className="text-muted">
                  {coreValuesData.coreValues.breadcrumb.current}
                </span>
              </div>

              <h2 className="section-title text-bright-gray mb-4">
                {coreValuesData.coreValues.title}
              </h2>

              <p className="body-display-1 text-muted mb-4">
                {coreValuesData.coreValues.description}
              </p>

              {/* Core Values List */}
              <div className="core-values-list">
                {coreValuesData.coreValues.values.map((value, index) => (
                  <div
                    key={index}
                    className="core-value-item d-flex align-items-start mb-3"
                  >
                    <div className="value-icon me-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="url(#gradient3)"
                          strokeWidth="2"
                        />
                        <path
                          d="M8 12L10.5 14.5L16 9"
                          stroke="url(#gradient3)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="gradient3"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#8976FD" />
                            <stop offset="100%" stopColor="#C06EF3" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="value-content">
                      <h5 className="text-bright-gray mb-2">{value.title}</h5>
                      <p className="text-mid-gray mb-0">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="core-values-illustration text-center">
              <div className="core-values-icon-wrapper">
                <div className="core-values-circle">
                  <svg
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="core-values-icon"
                  >
                    <circle
                      cx="80"
                      cy="80"
                      r="78"
                      stroke="url(#gradient4)"
                      strokeWidth="4"
                    />

                    {/* Heart symbol for wellness */}
                    <path
                      d="M80 130C80 130 50 110 50 85C50 72 60 65 70 65C75 65 80 68 80 68S85 65 90 65C100 65 110 72 110 85C110 110 80 130 80 130Z"
                      fill="url(#gradient4)"
                    />

                    {/* Mind/Brain waves */}
                    <path
                      d="M40 50Q50 45 60 50T80 50"
                      stroke="url(#gradient4)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M80 45Q90 40 100 45T120 45"
                      stroke="url(#gradient4)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />

                    {/* Spiritual symbol - lotus petals */}
                    <path
                      d="M80 25L85 35L95 30L90 40L100 38L92 48L102 50L92 52L100 62L90 60L95 70L85 65L80 75L75 65L65 70L70 60L60 62L68 52L58 50L68 48L60 38L70 40L65 30L75 35L80 25Z"
                      fill="url(#gradient4)"
                      fillOpacity="0.3"
                    />

                    <defs>
                      <linearGradient
                        id="gradient4"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#F59E0B" />
                        <stop offset="50%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="#8B5CF6" />
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
