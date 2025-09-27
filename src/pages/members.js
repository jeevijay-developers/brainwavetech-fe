import Footer2 from "@/components/home2/Footer2";
import TeamMember from "@/components/contact/TeamMember";
import BoardOfAdvisors from "@/components/contact/BoardOfAdvisors";
import {
  brainwaveTeamData,
  boardOfAdvisorsData,
} from "@/constant/members/membersData";
import { NextSeo } from "next-seo";
import Header from "@/components/home/Header";

const Members = () => {
  return (
    <>
      <NextSeo
        title={"Team Members & Board of Advisors - Brainwave Tech"}
        description={
          "Meet our dedicated team and board of advisors at Brainwave Tech. Our experts including Dr. Ankit Gupta (CEO/Founder), Nitya Gupta (Co-Founder), Amruta Shingwekar (Co-Founder), and our advisory board are transforming mental healthcare through innovative brainwave technology."
        }
      />
      <div className="background-wrap inner-bg">
        <Header logo={'logo-v2.svg'} btn="btn-fill-pill md-btn" btnDefault={false} loginBtn={'btn-transparent-v2'} headerStyle={'header-style-two'} />
        {/* Hero Section */}
        <div className="members-hero-wrapper pt-xxl section-gap-xl-bottom position-relative z-index-1">
          <img
            src="/images/shapes/line-svg-blue.svg"
            alt=""
            className="position-absolute top-0 start-0 corner-line low-index"
          />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="members-hero-header">
                  <h1 className="text-bright-gray mb-4">Meet Our Team</h1>
                  <p className="body-display-1 text-muted">
                    Dedicated professionals transforming mental healthcare
                    through innovative brainwave technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TeamMember teamData={brainwaveTeamData} />
        <BoardOfAdvisors advisorsData={boardOfAdvisorsData} />
        <Footer2 />
      </div>
    </>
  );
};

export default Members;
