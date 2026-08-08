"use client";

export default function MutationQrPage() {
  const fontFamily =
    "'Noto Sans Bengali', 'kalpurush', Arial, sans-serif";

  return (
    <div style={{ fontFamily, color: "#333", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* ===== HEADER ===== */}
      <header
        style={{
          background: "#ffffff",
          position: "relative",
          zIndex: 999,
        }}
      >
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            padding: "0 15px",
          }}
        >
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              width: "100%",
              borderBottom: "1px solid #E1E1E1",
            }}
          >
            {/* Logo Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "20px",
                height: "78px",
              }}
            >
              <a href="/" style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="/mutation-images/home-icon.png"
                  alt="Logo"
                  style={{ width: "32px", height: "32px" }}
                />
              </a>
              <a href="/" style={{ display: "flex", alignItems: "center", height: "100%" }}>
                <img
                  src="/mutation-images/land-logo.jpg"
                  alt="Logo"
                  style={{ maxHeight: "68px", display: "block" }}
                />
              </a>
            </div>

            {/* Date Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  paddingLeft: "25px",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  height: "100%",
                  minHeight: "20px",
                }}
              >
                {/* Calendar icon */}
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    marginTop: "-10px",
                    width: "20px",
                    height: "20px",
                    display: "block",
                    fontSize: "16px",
                    lineHeight: "20px",
                    textAlign: "center",
                  }}
                >
                  📅
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "1",
                    fontFamily,
                  }}
                >
                  সোমবার, ৩ আগস্ট ২০২৬
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <div
        style={{
          position: "relative",
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "20px 15px",
        }}
      >
        {/* Watermark background */}
        <div
          style={{
            position: "absolute",
            backgroundImage: "url(/mutation-images/watermark.png)",
            backgroundRepeat: "repeat",
            backgroundPosition: "left top",
            top: 0,
            bottom: 0,
            left: "-9%",
            right: 0,
            opacity: 0.2,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              width: "99%",
              fontSize: "100%",
              margin: "0 auto",
              padding: "0 1%",
            }}
          >
            <div style={{ margin: "0 auto", width: "80%" }}>
              <br />
              <table
                cellSpacing={0}
                cellPadding={5}
                style={{
                  width: "100%",
                  marginTop: "2%",
                  fontSize: "100%",
                  border: "1px solid #e3e3e3",
                  borderCollapse: "collapse",
                  backgroundColor: "#fff",
                }}
              >
                <tbody>
                  {/* Notice row */}
                  <tr>
                    <td
                      colSpan={2}
                      style={{
                        padding: "12px 15px",
                        borderBottom: "1px solid #e3e3e3",
                      }}
                    >
                      <b>
                        খতিয়ান এর পূর্ণাঙ্গ তথ্য দেখতে হলে &quot;খতিয়ান ডাউনলোড&quot; বাটনে ক্লিক করে খতিয়ান ডাউনলোড করুন
                      </b>
                    </td>
                  </tr>

                  {/* ভূমি অফিস এর ঠিকানা */}
                  <tr>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        width: "50%",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      ভূমি অফিস এর ঠিকানা
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      দুয়ারীপাড়া, মোহাম্মদপুর, ঢাকা
                    </td>
                  </tr>

                  {/* খতিয়ান নং */}
                  <tr>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        width: "50%",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      খতিয়ান নং
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      ১৫৬২
                    </td>
                  </tr>

                  {/* আবেদন নম্বর */}
                  <tr>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        width: "50%",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      আবেদন নম্বর
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      ১২৬৮০০৪
                    </td>
                  </tr>

                  {/* আবেদনের তারিখ */}
                  <tr>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        width: "50%",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      আবেদনের তারিখ
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      ১৪-৮-২০২৫
                    </td>
                  </tr>

                  {/* মিউটেশন মামলা নং */}
                  <tr>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        width: "50%",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      মিউটেশন মামলা নং
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      ১৯১৬(IX-I)/২০২৫-২৬
                    </td>
                  </tr>

                  {/* ডি সি আর নং */}
                  <tr>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        width: "50%",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      ডি সি আর নং
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      23265000605081
                    </td>
                  </tr>

                  {/* মালিক, অকৃষি প্রজা বা ইজারাদারের নাম ও ঠিকানা */}
                  <tr>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        width: "50%",
                        padding: "10px 15px",
                        fontSize: "17px",
                        verticalAlign: "top",
                      }}
                    >
                      মালিক, অকৃষি প্রজা বা ইজারাদারের নাম ও ঠিকানা
                    </td>
                    <td
                      style={{
                        borderRight: "1px solid #e3e3e3",
                        borderBottom: "1px solid #e3e3e3",
                        padding: "10px 15px",
                        fontSize: "17px",
                      }}
                    >
                      1) নজরুল ইসলাম
                      <br />
                      বাসা/হোল্ডিং:, গ্রাম/রাস্তা:পশ্চিম বড়দেইল, বুড়ির চর, ডাকঘর:সাগরিয়া বাজার-, উপজেলা: হাতিয়া, জেলা: নোয়াখালী
                      <br />
                    </td>
                  </tr>

                  {/* Download button row */}
                  <tr>
                    <td
                      colSpan={2}
                      style={{
                        padding: "12px 15px",
                      }}
                    >
                      <a
                        href="/mutation-qr/khatian"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-block",
                          padding: "8px 20px",
                          backgroundColor: "#28a745",
                          color: "#ffffff",
                          borderRadius: "4px",
                          textDecoration: "none",
                          fontSize: "16px",
                          fontWeight: 500,
                          fontFamily,
                        }}
                      >
                        খতিয়ান ডাউনলোড
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div style={{ textAlign: "left" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          position: "relative",
          background: "#00684D",
          color: "#ffffff",
          padding: "25px 0 0px",
          fontFamily,
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            display: "block",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {/* Footer Logo Section */}
            <div>
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                  <a href="#" style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/mutation-images/footer_img_1.png"
                      alt="Logo"
                      style={{ maxHeight: "60px", display: "block" }}
                    />
                  </a>
                  <a href="#" style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="/mutation-images/footer_img.png"
                      alt="Logo"
                      style={{ maxHeight: "60px", display: "block" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* মিউটেশন সেবা */}
            <div>
              <div style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                    color: "yellow",
                    fontFamily,
                    margin: "0 0 10px 0",
                  }}
                >
                  মিউটেশন সেবা
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <li style={{ marginBottom: "6px" }}>
                    <a
                      href="#"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily,
                      }}
                    >
                      মিউটেশন সংক্রান্ত প্রজ্ঞাপন
                    </a>
                  </li>
                  <li style={{ marginBottom: "6px" }}>
                    <a
                      href="#"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily,
                      }}
                    >
                      মিউটেশন সংক্রান্ত জিজ্ঞাসা
                    </a>
                  </li>
                  <li style={{ marginBottom: "6px" }}>
                    <a
                      href="#"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily,
                      }}
                    >
                      পরিসংখ্যান
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* অন্যান্য */}
            <div>
              <div style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                    color: "yellow",
                    fontFamily,
                    margin: "0 0 10px 0",
                  }}
                >
                  অন্যান্য
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <li style={{ marginBottom: "6px" }}>
                    <a
                      href="#"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily,
                      }}
                    >
                      শর্তাবলী
                    </a>
                  </li>
                  <li style={{ marginBottom: "6px" }}>
                    <a
                      href="#"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily,
                      }}
                    >
                      যোগাযোগ
                    </a>
                  </li>
                  <li style={{ marginBottom: "6px" }}>
                    <a
                      href="#"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily,
                      }}
                    >
                      উত্তরাধিকার ক্যালকুলেটর
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* গুরুত্বপুর্ণ লিংকসমূহ */}
            <div>
              <div style={{ marginBottom: "20px" }}>
                <h3
                  style={{
                    fontSize: "16px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                    color: "yellow",
                    fontFamily,
                    margin: "0 0 10px 0",
                  }}
                >
                  গুরুত্বপুর্ণ লিংকসমূহ
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <li style={{ marginBottom: "6px" }}>
                    <a
                      href="https://land.gov.bd/"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        fontFamily,
                      }}
                    >
                      ভূমি পোর্টাল
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div
            style={{
              borderTop: "1px solid #ffffff",
              paddingTop: "15px",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                paddingBottom: "20px",
              }}
            >
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 14px",
                  backgroundColor: "#ffffff",
                  borderRadius: "40px",
                  gap: "10px",
                  textDecoration: "none",
                  color: "#00684D",
                  fontSize: "18px",
                  lineHeight: "20px",
                  width: "80%",
                  maxWidth: "240px",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/mutation-images/Namjari_full.png"
                  alt="Mutation App"
                  style={{ height: "40px", display: "block" }}
                />
              </a>
            </div>
            <p
              style={{
                marginBottom: "0",
                fontSize: "14px",
                color: "#ffffff",
                fontFamily,
              }}
            >
              মিউটেশন অ্যাপস: মিউটেশনের সকল তথ্য এখন হাতের মুঠোয়!
            </p>
            <h6
              style={{
                textAlign: "center",
                margin: "0",
                paddingTop: "4px",
                fontWeight: "bold",
                color: "black",
                fontFamily,
                fontSize: "14px",
              }}
            >
              পরীক্ষামূলক সংস্করণ
            </h6>
          </div>
        </div>
      </footer>
    </div>
  );
}
