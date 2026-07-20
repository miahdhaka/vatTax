"use client";

export default function DakhilaPrintPage() {
  const printDiv = () => {
    window.print();
  };

  return (
    <div>
      <div className="clearfix"></div>
      <div className="page-container">
        <div className="page-content">
          <div className="page-content">
            <div className="row">
              <div className="col-md-12">
                <div>
                  <div
                    className="print-btn-container"
                    style={{
                      display: "flex",
                      marginBottom: "1.25rem",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      onClick={printDiv}
                      style={{
                        padding: "0.32rem 1.15rem",
                        borderRadius: "0.25rem",
                        color: "#ffffff",
                        backgroundColor: "#3B82F6",
                        border: "1px solid #3B82F6",
                        cursor: "pointer",
                        fontSize: "11.5px",
                        lineHeight: "1.2",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      🖨️ প্রিন্ট
                    </button>
                  </div>

                  <div className="portlet-body">
                    <div
                      id="printArea"
                      className="content"
                      style={{ width: "815px", margin: "0 auto" }}
                    >
                      <div className="col-md-12">
                        <div
                          style={{
                            fontFamily: "'kalpurush',Arial,sans-serif",
                            fontSize: "14px",
                            lineHeight: "1.2",
                            color: "#333",
                            backgroundColor: "#fff",
                            width: "7.9in",
                            height: "11in",
                            borderRadius: "10px",
                            border: "dotted 1px",
                            padding: "10px",
                            float: "left",
                            margin: "30px auto",
                            position: "relative",
                          }}
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <div className="from-controll">
                                <table style={{ width: "100%" }}>
                                  <tbody>
                                    <tr>
                                      <td className="text-left">
                                        বাংলাদেশ ফরম নং ১০৭৭
                                      </td>
                                      <td className="text-right">
                                        (পরিশিষ্ট: ৩৮)
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-left">(সংশোধিত)</td>
                                      <td className="text-right input_bangla">
                                        ক্রমিক নং ২৬৫০২৫১১৮১৯৪
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        className="text-center"
                                        colSpan={2}
                                      >
                                        ভূমি উন্নয়ন কর পরিশোধ রসিদ
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        className="text-center"
                                        colSpan={2}
                                      >
                                        (অনুচ্ছেদ ৩৯২ দ্রষ্টব্য)
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div style={{ width: "100%", height: "20px" }}></div>
                                <table style={{ width: "100%" }}>
                                  <tbody>
                                    <tr>
                                      <td style={{ width: "320px" }}>
                                        সিটি কর্পোরেশন/ পৌর/ ইউনিয়ন ভূমি অফিসের
                                        নাম:
                                      </td>
                                      <td className="dotted_botton">
                                        সেনপাড়া পর্বতা ভূমি অফিস
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table style={{ marginTop: "5px", width: "100%" }}>
                                  <tbody>
                                    <tr>
                                      <td style={{ width: "170px" }}>
                                        মৌজার নাম ও জে. এল. নং:
                                      </td>
                                      <td
                                        className="dotted_botton input_bangla"
                                        style={{ padding: "0 10px 0 5px" }}
                                      >
                                        দূরারীপাড়া-৬
                                      </td>
                                      <td style={{ width: "105px" }}>
                                        উপজেলা/থানা:
                                      </td>
                                      <td
                                        className="dotted_botton"
                                        style={{ padding: "0 10px 0 5px" }}
                                      >
                                        মোহাম্মদপুর
                                      </td>
                                      <td style={{ width: "40px" }}>জেলা:</td>
                                      <td
                                        className="dotted_botton"
                                        style={{ padding: "0 10px 0 5px" }}
                                      >
                                        ঢাকা
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table style={{ marginTop: "5px", width: "100%" }}>
                                  <tbody>
                                    <tr>
                                      <td style={{ textAlign: "justify" }}>
                                        আবাসন প্রকল্পের নাম:{" "}
                                        <span
                                          className="dotted_botton"
                                          style={{ padding: "0 8px" }}
                                        >
                                          মিরপুর হাউজিং
                                        </span>
                                        , সেক্টর/সেকশন:{" "}
                                        <span
                                          className="dotted_botton"
                                          style={{ padding: "0 8px" }}
                                        >
                                          সেকশন-০৫
                                        </span>
                                        , ব্লক:{" "}
                                        <span
                                          className="dotted_botton"
                                          style={{ padding: "0 8px" }}
                                        ></span>
                                        , এভিনিউ/রোড/লেন:{" "}
                                        <span
                                          className="dotted_botton"
                                          style={{ padding: "0 8px" }}
                                        ></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <table style={{ marginTop: "5px", width: "100%" }}>
                                  <tbody>
                                    <tr>
                                      <td style={{ width: "225px" }}>
                                        ২ নং রেজিস্টার অনুযায়ী হোল্ডিং নম্বর:
                                      </td>
                                      <td
                                        className="dotted_botton numeric_bangla"
                                        style={{ paddingLeft: "10px" }}
                                      >
                                        ১৫৬/৮
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <table style={{ marginTop: "5px", width: "100%" }}>
                                  <tbody>
                                    <tr>
                                      <td style={{ width: "75px" }}>
                                        খতিয়ান নং:
                                      </td>
                                      <td
                                        className="dotted_botton numeric_bangla"
                                        style={{ paddingLeft: "10px" }}
                                      >
                                        ১৫৬২
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <div style={{ height: "10px" }}></div>
                              </div>

                              <div className="from-controll">
                                <p
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: "12px",
                                    textAlign: "center",
                                    margin: "0px",
                                    padding: "0px",
                                  }}
                                >
                                  <u>মালিকের বিবরণ</u>
                                </p>
                              </div>
                              <table
                                style={{
                                  border: "1px dotted",
                                  borderCollapse: "collapse",
                                  margin: "10px 2px",
                                  width: "100%",
                                  fontSize: "11px",
                                  float: "left",
                                }}
                              >
                                <thead>
                                  <tr>
                                    <th
                                      style={{
                                        width: "10%",
                                        textAlign: "center",
                                      }}
                                      className="b1"
                                    >
                                      ক্রমঃ
                                    </th>
                                    <th
                                      style={{
                                        width: "60%",
                                        textAlign: "center",
                                      }}
                                      className="b1"
                                    >
                                      মালিকের নাম
                                    </th>
                                    <th
                                      style={{
                                        width: "25%",
                                        textAlign: "center",
                                      }}
                                      className="b1"
                                    >
                                      মালিকের অংশ
                                    </th>
                                  </tr>
                                </thead>
                                <tbody style={{ height: "21px" }}>
                                  <tr>
                                    <td className="b1 input_bangla text-center">
                                      ১
                                    </td>
                                    <td className="b1 input_bangla">
                                      মোঃ মোজাম্মেল হক গং
                                    </td>
                                    <td className="b1 input_bangla text-center">
                                      ১
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <p
                              style={{
                                fontWeight: "bold",
                                fontSize: "12px",
                                textAlign: "center",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <u>জমির বিবরণ</u>
                            </p>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <table
                                style={{
                                  border: "1px dotted",
                                  borderCollapse: "collapse",
                                  margin: "10px 2px",
                                  width: "100%",
                                  fontSize: "11px",
                                  float: "left",
                                }}
                              >
                                <thead>
                                  <tr>
                                    <th className="b1">ক্রমঃ</th>
                                    <th className="b1">দাগ নং</th>
                                    <th className="b1">জমির শ্রেণি</th>
                                    <th className="b1">
                                      জমির পরিমাণ (শতাংশ)
                                    </th>
                                  </tr>
                                </thead>
                                <tbody style={{ height: "21px" }}>
                                  <tr>
                                    <td className="b1 input_bangla text-center">
                                      ১
                                    </td>
                                    <td className="b1 input_bangla">৯০</td>
                                    <td className="b1">বাড়ী (আবাসিক)</td>
                                    <td className="b1 input_bangla">১.৪৫</td>
                                  </tr>
                                </tbody>
                              </table>

                              <table
                                style={{
                                  border: "1px dotted",
                                  borderCollapse: "collapse",
                                  margin: "10px 2px",
                                  width: "100%",
                                  fontSize: "12px",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      className="b1 text-center"
                                      style={{ width: "50%" }}
                                    >
                                      সর্বমোট জমি (শতাংশ)
                                    </td>
                                    <td
                                      className="b1 input_bangla"
                                      style={{ width: "50%" }}
                                    >
                                      ১.৪৫
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div style={{ height: "10px" }}></div>
                              <table
                                className="table table-striped table-bordered table-hover"
                                style={{
                                  margin: "10px 2px",
                                  width: "100%",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <th
                                      style={{ textAlign: "center" }}
                                      colSpan={8}
                                    >
                                      আদায়ের বিবরণ{" "}
                                    </th>
                                  </tr>

                                  <tr>
                                    <td style={{ textAlign: "center" }}>
                                      তিন বৎসরের ঊর্ধ্বের বকেয়া
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      গত তিন বৎসরের বকেয়া
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      বকেয়ার জরিমানা ও ক্ষতিপূরণ
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      হাল দাবি
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      মোট দাবি
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      মোট আদায়
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      মোট বকেয়া
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                      মন্তব্য
                                    </td>
                                  </tr>

                                  <tr>
                                    <td align="center">০</td>
                                    <td align="center">০</td>
                                    <td align="center">০</td>
                                    <td align="center">৬০</td>
                                    <td align="center">৬০</td>
                                    <td align="center">৬০</td>
                                    <td align="center">০</td>
                                    <td align="center"></td>
                                  </tr>
                                </tbody>
                              </table>
                              <div
                                style={{
                                  width: "100%",
                                  margin: "10px 0",
                                }}
                              >
                                <p className="dotted_botton" style={{ margin: "5px 0 15px 0", paddingBottom: "3px" }}>
                                  সর্বমোট (কথায়): ষাট টাকা মাত্র ।
                                </p>
                              </div>

                              <div className="row" style={{ marginTop: "10px" }}>
                                <div
                                  className="col-md-12"
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: "350px",
                                      textAlign: "left",
                                      fontSize: "12px",
                                      lineHeight: "1.4",
                                    }}
                                  >
                                    <p style={{ margin: "0 0 2px 0" }}>
                                      নোট: সর্বশেষ কর পরিশোধের সাল - 2026-2027 (অর্থবছর)
                                    </p>
                                    <p
                                      className="input_bangla"
                                      style={{ margin: "0 0 4px 0" }}
                                    >
                                      চালান নং : ২৬২৭-০০০০৯৩৩৬১৬
                                    </p>
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                      }}
                                    >
                                      <span>তারিখ :</span>
                                      <div
                                        style={{
                                          display: "inline-flex",
                                          flexDirection: "column",
                                          alignItems: "center",
                                        }}
                                      >
                                        <span
                                          style={{
                                            margin: 0,
                                            padding: "0 2px",
                                            fontSize: "12px",
                                            lineHeight: "1.2",
                                          }}
                                        >
                                          ৩০ আষাঢ় ১৪৩৩
                                        </span>
                                        <span
                                          style={{
                                            borderTop: "1px solid #000",
                                            padding: "1px 2px 0 2px",
                                            fontSize: "12px",
                                            lineHeight: "1.2",
                                          }}
                                        >
                                          ১৫ জুলাই, ২০২৬
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    style={{ width: "90px", textAlign: "center" }}
                                  >
                                    <img
                                      src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=0&qzone=0&ecc=M&data=${encodeURIComponent(
                                        "https://dakhilaldtaxgovbd.vercel.app/dakhila-print/blYxWTJqVXZCeElnZURvMUd2Ym82UT09"
                                      )}`}
                                      alt="QR Code"
                                      width={74}
                                      height={74}
                                      style={{
                                        display: "block",
                                        margin: "0 auto",
                                        width: "74px",
                                        height: "74px",
                                      }}
                                    />
                                  </div>
                                  <div
                                    style={{
                                      width: "265px",
                                      textAlign: "right",
                                      fontSize: "12px",
                                      fontFamily: "'kalpurush',Arial,sans-serif",
                                    }}
                                  >
                                    <p
                                      className="text-center"
                                      style={{ padding: "5px", margin: 0, lineHeight: "1.4" }}
                                    >
                                      এই দাখিলা ইলেক্ট্রনিকভাবে তৈরি করা হয়েছে,{" "}
                                      <br /> কোন স্বাক্ষর প্রয়োজন নেই।
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div
                              className="col-md-12 text-right"
                              style={{
                                width: "100%",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                              }}
                            >
                              <div
                                style={{
                                  width: "100%",
                                  borderTop: "1px dotted gray",
                                  marginTop: "15px",
                                }}
                              ></div>
                              <div className="from-controll">১/১</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
