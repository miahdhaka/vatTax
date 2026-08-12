"use client";

import { useState, useEffect } from "react";

export default function MutationQrPage() {
  const fontFamily =
    "'kalpurush', 'nikosh', 'Noto Sans Bengali', Arial, sans-serif";

  const [formattedDate, setFormattedDate] = useState("রবিবার, ৯ আগস্ট ২০২৬");

  useEffect(() => {
    const daysBangla = [
      "রবিবার",
      "সোমবার",
      "মঙ্গলবার",
      "বুধবার",
      "বৃহস্পতিবার",
      "শুক্রবার",
      "শনিবার",
    ];
    const monthsBangla = [
      "জানুয়ারি",
      "ফেব্রুয়ারি",
      "মার্চ",
      "এপ্রিল",
      "মে",
      "জুন",
      "জুলাই",
      "আগস্ট",
      "সেপ্টেম্বর",
      "অক্টোবর",
      "নভেম্বর",
      "ডিসেম্বর",
    ];
    const toBanglaDigits = (num: number) =>
      num.toString().replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d, 10)]);

    const now = new Date();
    const dayName = daysBangla[now.getDay()];
    const dayNum = toBanglaDigits(now.getDate());
    const monthName = monthsBangla[now.getMonth()];
    const yearNum = toBanglaDigits(now.getFullYear());

    setFormattedDate(`${dayName}, ${dayNum} ${monthName} ${yearNum}`);
  }, []);

  return (
    <div style={{ fontFamily, color: "#333", backgroundColor: "#f5f5f5", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Dynamic Mobile Responsive CSS */}
      <style>{`
        .mqr-header-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .mqr-header-inner {
          justify-content: space-between;
          display: flex;
          align-items: center;
          width: 100%;
          border-bottom: 1px solid #E1E1E1;
          padding: 6px 0;
        }
        .mqr-logo-group {
          display: flex;
          align-items: center;
          column-gap: 20px;
          height: 78px;
        }
        .mqr-land-logo {
          max-height: 68px;
          display: block;
        }
        .mqr-date-group {
          display: flex;
          align-items: center;
          column-gap: 10px;
        }
        .mqr-main-wrap {
          position: relative;
          max-width: 1140px;
          margin: 0 auto;
          padding: 20px 15px;
        }
        .mqr-table-box {
          margin: 0 auto;
          width: 100%;
        }
        .mqr-table {
          width: 100%;
          margin-top: 2%;
          font-size: 100%;
          border: 1px solid #e3e3e3;
          border-collapse: collapse;
          background-color: #fff;
        }
        .mqr-td-label {
          border-right: 1px solid #e3e3e3;
          border-bottom: 1px solid #e3e3e3;
          width: 45%;
          padding: 32px 24px;
          font-size: 18px;
          line-height: 1.6;
          vertical-align: middle;
          font-family: 'kalpurush', 'nikosh', 'Noto Sans Bengali', Arial, sans-serif;
        }
        .mqr-td-val {
          border-right: 1px solid #e3e3e3;
          border-bottom: 1px solid #e3e3e3;
          padding: 32px 24px;
          font-size: 18px;
          line-height: 1.6;
          vertical-align: middle;
          font-family: 'kalpurush', 'nikosh', 'Noto Sans Bengali', Arial, sans-serif;
        }
        .mqr-btn-download {
          display: inline-block;
          padding: 14px 32px;
          background-color: #28a745;
          color: #ffffff;
          border-radius: 4px;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          text-align: center;
          transition: background-color 0.2s ease;
        }
        .mqr-btn-download:hover {
          background-color: #218838;
        }
        .mqr-footer-inner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .mqr-footer-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* Mobile & Tablet Responsiveness */
        @media (max-width: 768px) {
          .mqr-table-box {
            width: 100% !important;
          }
          .mqr-header-inner {
            flex-direction: column;
            gap: 10px;
            padding: 10px 0;
          }
          .mqr-logo-group {
            height: auto;
            column-gap: 12px;
          }
          .mqr-land-logo {
            max-height: 52px;
          }
          .mqr-date-group {
            width: 100%;
            justify-content: center;
            border-top: 1px dashed #e1e1e1;
            padding-top: 8px;
            margin-top: 2px;
          }
          .mqr-td-label {
            width: 42%;
            padding: 21px 16px;
            font-size: 16px;
          }
          .mqr-td-val {
            padding: 21px 16px;
            font-size: 16px;
          }
          .mqr-footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px 16px;
          }
          .mqr-btn-download {
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 14px;
          }
        }

        @media (max-width: 480px) {
          .mqr-header-inner {
            align-items: center;
          }
          .mqr-logo-group {
            flex-wrap: wrap;
            justify-content: center;
          }
          .mqr-td-label {
            width: 44%;
            padding: 18px 14px;
            font-size: 15px;
          }
          .mqr-td-val {
            padding: 18px 14px;
            font-size: 15px;
          }
          .mqr-footer-grid {
            grid-template-columns: 1fr !important;
            gap: 24px;
          }
        }
      `}</style>

      {/* ===== HEADER ===== */}
      <header
        style={{
          background: "#ffffff",
          position: "relative",
          zIndex: 999,
        }}
      >
        <div className="mqr-header-container">
          <div className="mqr-header-inner">
            {/* Logo Section */}
            <div className="mqr-logo-group">
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
                  className="mqr-land-logo"
                />
              </a>
            </div>

            {/* Date Section */}
            <div className="mqr-date-group">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  minHeight: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    lineHeight: "1",
                    fontFamily,
                  }}
                >
                  {formattedDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <div className="mqr-main-wrap">
        {/* Watermark background */}
        <div
          style={{
            position: "absolute",
            backgroundImage: "url(/mutation-images/watermark.png)",
            backgroundRepeat: "repeat",
            backgroundPosition: "left top",
            top: 0,
            bottom: 0,
            left: "0",
            right: 0,
            opacity: 0.15,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              width: "100%",
              fontSize: "100%",
              margin: "0 auto",
            }}
          >
            <div className="mqr-table-box">
              <br />
              <table
                cellSpacing={0}
                cellPadding={5}
                className="mqr-table"
              >
                <tbody>
                  {/* Notice row */}
                  <tr>
                    <td
                      colSpan={2}
                      style={{
                        padding: "24px 22px",
                        borderBottom: "1px solid #e3e3e3",
                        fontSize: "17px",
                        lineHeight: "1.6",
                      }}
                    >
                      <b>
                        খতিয়ান এর পূর্ণাঙ্গ তথ্য দেখতে হলে &quot;খতিয়ান ডাউনলোড&quot; বাটনে ক্লিক করে খতিয়ান ডাউনলোড করুন
                      </b>
                    </td>
                  </tr>

                  {/* ভূমি অফিস এর ঠিকানা */}
                  <tr>
                    <td className="mqr-td-label">
                      ভূমি অফিস এর ঠিকানা
                    </td>
                    <td className="mqr-td-val">
                      দুয়ারীপাড়া, মোহাম্মদপুর, ঢাকা
                    </td>
                  </tr>

                  {/* খতিয়ান নং */}
                  <tr>
                    <td className="mqr-td-label">
                      খতিয়ান নং
                    </td>
                    <td className="mqr-td-val">
                      ১৫৬২
                    </td>
                  </tr>

                  {/* আবেদন নম্বর */}
                  <tr>
                    <td className="mqr-td-label">
                      আবেদন নম্বর
                    </td>
                    <td className="mqr-td-val">
                      ১২৬৮০০০৪
                    </td>
                  </tr>

                  {/* আবেদনের তারিখ */}
                  <tr>
                    <td className="mqr-td-label">
                      আবেদনের তারিখ
                    </td>
                    <td className="mqr-td-val">
                      ১৪-৮-২০২৫
                    </td>
                  </tr>

                  {/* মিউটেশন মামলা নং */}
                  <tr>
                    <td className="mqr-td-label">
                      মিউটেশন মামলা নং
                    </td>
                    <td className="mqr-td-val">
                      ১৯২৬(IX-I)/২০২৫-২৬
                    </td>
                  </tr>

                  {/* ডি সি আর নং */}
                  <tr>
                    <td className="mqr-td-label">
                      ডি সি আর নং
                    </td>
                    <td className="mqr-td-val">
                      23265000605081
                    </td>
                  </tr>

                  {/* মালিক, অকৃষি প্রজা বা ইজারাদারের নাম ও ঠিকানা */}
                  <tr>
                    <td className="mqr-td-label">
                      মালিক, অকৃষি প্রজা বা ইজারাদারের নাম ও ঠিকানা
                    </td>
                    <td className="mqr-td-val">
                      1) নজরুল ইসলাম
                      <br />
                      বাসা/হোল্ডিং:, গ্রাম/রাস্তা:পশ্চিম বড়দেইল, বুড়ির চর, ডাকঘর:সাগরিয়া বাজার-, উপজেলা: হাতিয়া, জেলা: নোখালী
                      <br />
                    </td>
                  </tr>

                  {/* Download button row */}
                  <tr>
                    <td
                      colSpan={2}
                      style={{
                        padding: "32px 24px",
                      }}
                    >
                      <a
                        href="/mutation-qr/khatian"
                        target="_blank"
                        rel="noreferrer"
                        className="mqr-btn-download"
                        style={{ fontFamily }}
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
        <div className="mqr-footer-inner">
          <div className="mqr-footer-grid">
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

