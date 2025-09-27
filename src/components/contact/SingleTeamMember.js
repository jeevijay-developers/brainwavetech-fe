export default function SingleTeamMember({ teamData }) {
  return (
    <>
      {teamData.length > 0 &&
        teamData.map((dt) => {
          return (
            <div key={dt.id} className="col-lg-4 col-md-6">
              <div className="team-card-style-one">
                <div className="team-avater">
                  <img src={dt.img} alt={dt.title} />
                  {dt.social && (
                    <div className="team-social-overlay">
                      <div className="team-social-icons">
                        {dt.social.facebook && (
                          <a
                            href={dt.social.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon facebook"
                            aria-label="Facebook"
                          >
                            <i className="bi bi-facebook"></i>
                          </a>
                        )}
                        {dt.social.linkedin && (
                          <a
                            href={dt.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon linkedin"
                            aria-label="LinkedIn"
                          >
                            <i className="bi bi-linkedin"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="team-disc">
                  <h5>{dt.title}</h5>
                  <p className="designation">{dt.designation}</p>
                  {dt.description && (
                    <p className="description">{dt.description}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
