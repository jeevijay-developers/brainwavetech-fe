import partnersData from "@/constant/home2/partners"

export default function Partners() {
    const { title, p, btnTxt, images } = partnersData;
    return (
      <div className="partner-style-one section-gap-xl-top py-5">
  <div className="container-fluid px-3 px-lg-5">
    <div className="row align-items-center gy-5 gy-lg-4">
      
      {/* Images Section */}
      <div className="col-lg-6 order-2 order-lg-1">
        <div className="row gx-lg-5 gx-3 align-items-center justify-content-center">
          {/* Left column of images */}
          <div className="col-6 d-flex flex-column align-items-center">
            {images.length > 0 &&
              images.slice(0, 3).map((img, i) => (
                <div
                  key={`left-${i}-${img.img}`}
                  className="single-partner-logo partner-logo-enhanced mb-4"
                >
                  <img
                    src={img.img}
                    alt={`Partner logo ${i + 1}`}
                    className="partner-img img-fluid"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>

          {/* Right column of images */}
          <div className="col-6 d-flex flex-column align-items-center">
            {images.length > 3 &&
              images.slice(3).map((img, i) => (
                <div
                  key={`right-${i}-${img.img}`}
                  className="single-partner-logo partner-logo-enhanced mb-4"
                >
                  <img
                    src={img.img}
                    alt={`Partner logo ${i + 4}`}
                    className="partner-img img-fluid"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="col-lg-5 order-1 order-lg-0 text-center text-lg-start">
        <div className="partner-one-content px-3 px-md-0">
          <h2 className="fw-bold fs-0 fs-md-2">{title}</h2>
          <p className="body-disply-2 pt-3 fs-6 fs-md-5">{p}</p>
          <div className="partner-btn mt-4">
            <a href="#" className="btn-fill-outlined btn btn-primary px-4 py-2 rounded-pill">
              {btnTxt}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    /* Consistent logo containers */
    .partner-logo-enhanced {
      width: 100%;
      height: 120px; /* ⬆️ increased from 90px → 120px */
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
    }

    /* Bigger, proportional logos */
    .partner-img {
      max-width: 100%;
      max-height: 100px; /* ⬆️ increased from 70px → 100px */
      object-fit: contain;
      transition: transform 0.25s ease;
    }

    .partner-img:hover {
      transform: scale(1.08);
    }

    /* Button style */
    .btn-fill-outlined {
      border: 2px solid #1b3c53;
      color: #1b3c53;
      background: transparent;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .btn-fill-outlined:hover {
      background-color: #1b3c53;
      color: #fff;
    }

    /* ✅ Responsive for mobile (≤425px) */
    @media (max-width: 575.98px) {
      .partner-style-one {
        text-align: center;
        padding: 2rem 1rem;
      }

      .partner-one-content h2 {
        font-size: 1.6rem;
        line-height: 1.3;
      }

      .partner-one-content p {
        font-size: 0.95rem;
      }

      /* Make logos large but stacked nicely on small screens */
      .partner-logo-enhanced {
        height: 100px; /* still larger on mobile */
      }

      .partner-img {
        max-height: 85px; /* ⬆️ bigger logos on mobile too */
      }

      /* Layout: 2 logos per row on mobile */
      .col-6.d-flex.flex-column.align-items-center {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.75rem;
      }

      .single-partner-logo {
        width: 48%;
        justify-content: center;
      }
    }
  `}</style>
</div>


    )
}
