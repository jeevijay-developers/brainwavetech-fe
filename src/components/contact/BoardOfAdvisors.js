import React from "react";
import SingleTeamMember from "./SingleTeamMember";

export default function BoardOfAdvisors({
  advisorsData,
  title = "Board of Advisors",
}) {
  return (
    <div className="board-advisors-section section-gap-bottom-y-1 position-relative z-index-1">
      {/* Header Section */}
      <div className="board-header-wrapper py-5 position-relative">
        <div className="board-header-bg">
          <div className="board-title-bg fill bg-fill"></div>
          <div className="board-title-overlay fill"></div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="board-title-wrapper">
                <h2 className="text-bright-gray mb-0">{title}</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="board-breadcrumbs text-end">
                <nav className="breadcrumbs-nav">
                  <a href="/" className="text-primary">
                    Home
                  </a>
                  <span className="breadcrumb-divider mx-2">/</span>
                  <span className="text-muted">Board of Advisors</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advisors Cards */}
      <div className="container">
        <div className="row gy-4">
          <SingleTeamMember teamData={advisorsData} />
        </div>
      </div>
    </div>
  );
}
