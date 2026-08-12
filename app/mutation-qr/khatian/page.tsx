"use client";

import React, { useState, useEffect } from "react";

export default function KhatianPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState<1 | 2>(1);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const fontFamily =
    "'kalpurush', 'nikosh', 'Noto Sans Bengali', Arial, sans-serif";

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const printPage = () => {
    window.print();
  };

  const scrollToPage = (pageNum: 1 | 2) => {
    setActivePage(pageNum);
    const element = document.getElementById(`khatian-page-${pageNum}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 50), 200));
  };

  const cellBase: React.CSSProperties = {
    border: "1px solid #000",
    padding: "6px 6px",
    fontSize: "11.5px",
    fontFamily,
    lineHeight: "1.35",
    verticalAlign: "middle",
    textAlign: "center",
    fontWeight: "normal",
    backgroundColor: "transparent",
  };

  const cellHeader: React.CSSProperties = {
    ...cellBase,
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: "transparent",
  };

  return (
    <div
      style={{
        fontFamily,
        backgroundColor: "#323639",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      {/* ====== CHROME PDF VIEWER TOP TOOLBAR ====== */}
      <div
        className="no-print pdf-toolbar"
        style={{
          height: "48px",
          backgroundColor: "#323639",
          borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          color: "#f1f3f4",
          zIndex: 1000,
          userSelect: "none",
          boxSizing: "border-box",
        }}
      >
        {/* Left Section: Sidebar Toggle + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Toggle sidebar"
            style={{
              background: "transparent",
              border: "none",
              color: "#e8eaed",
              cursor: "pointer",
              padding: "6px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>

          <span
            className="pdf-toolbar-title"
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#f1f3f4",
              letterSpacing: "0.2px",
              fontFamily: "Roboto, Arial, sans-serif",
            }}
          >
            আবেদন নং - ১২৬৬৫৯৭৬
          </span>
        </div>

        {/* Center Section: Page Counter & Zoom Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#9aa0a6" }}>
            <span
              style={{
                backgroundColor: "#1e1e1e",
                color: "#f1f3f4",
                padding: "2px 6px",
                borderRadius: "2px",
                fontSize: "12px",
                fontFamily: "monospace",
              }}
            >
              {activePage}
            </span>
            <span>/ 2</span>
          </div>

          <div className="pdf-toolbar-zoom-group" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#e8eaed" }}>
            <div style={{ width: "1px", height: "16px", backgroundColor: "#5f6368" }} />
            <button
              onClick={() => handleZoom(-10)}
              style={{ background: "transparent", border: "none", color: "#e8eaed", cursor: "pointer", fontSize: "16px", padding: "0 4px" }}
            >
              −
            </button>
            <span style={{ fontSize: "12px", minWidth: "36px", textAlign: "center" }}>{zoomLevel}%</span>
            <button
              onClick={() => handleZoom(10)}
              style={{ background: "transparent", border: "none", color: "#e8eaed", cursor: "pointer", fontSize: "16px", padding: "0 4px" }}
            >
              +
            </button>
          </div>
        </div>

        {/* Right Section: Print | Download */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={printPage}
            title="Download PDF"
            style={{
              background: "transparent",
              border: "none",
              color: "#f1f3f4",
              cursor: "pointer",
              padding: "6px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
          </button>

          <button
            onClick={printPage}
            title="Print (Ctrl+P)"
            style={{
              background: "transparent",
              border: "none",
              color: "#f1f3f4",
              cursor: "pointer",
              padding: "6px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
            </svg>
          </button>
        </div>
      </div>

      {/* ====== MAIN VIEWPORT AREA ====== */}
      <div style={{ display: "flex", flex: 1, height: "calc(100vh - 48px)", overflow: "hidden", position: "relative" }}>
        {/* Mobile Backdrop Overlay */}
        {isMobile && sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 998,
            }}
          />
        )}

        {/* Left Sidebar (Thumbnails) */}
        {sidebarOpen && (
          <div
            className="no-print pdf-sidebar"
            style={{
              width: "240px",
              backgroundColor: "#323639",
              borderRight: "1px solid rgba(255, 255, 255, 0.12)",
              padding: "16px 12px",
              overflowY: "auto",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              onClick={() => scrollToPage(1)}
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "180px",
                  height: "127px",
                  backgroundColor: "#ffffff",
                  border: activePage === 1 ? "2px solid #8ab4f8" : "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "2px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
                  padding: "4px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <div style={{ fontSize: "5px", fontFamily, transform: "scale(0.22)", transformOrigin: "top left", width: "800px" }}>
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>খতিয়ান নং ১৫৬২</div>
                  <div style={{ border: "1px solid #000", height: "300px", marginTop: "10px" }} />
                </div>
              </div>
              <span style={{ color: "#e8eaed", fontSize: "12px", marginTop: "6px" }}>1</span>
            </div>

            <div
              onClick={() => scrollToPage(2)}
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "180px",
                  height: "127px",
                  backgroundColor: "#ffffff",
                  border: activePage === 2 ? "2px solid #8ab4f8" : "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "2px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
                  padding: "4px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <div style={{ fontSize: "5px", fontFamily, transform: "scale(0.22)", transformOrigin: "top left", width: "800px" }}>
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>খতিয়ান নং ১৫৬২</div>
                  <div style={{ marginTop: "10px" }}>বিশেষ দ্রষ্টব্য: ...</div>
                </div>
              </div>
              <span style={{ color: "#e8eaed", fontSize: "12px", marginTop: "6px" }}>2</span>
            </div>
          </div>
        )}

        {/* Right Scrollable Viewport */}
        <div
          className="khatian-scroll-area"
          style={{
            flex: 1,
            backgroundColor: "#323639",
            overflowY: "auto",
            overflowX: "auto",
            padding: isMobile ? "12px 6px 40px 6px" : "20px 0 40px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            boxSizing: "border-box",
          }}
        >
          {/* Zoom Wrapper */}
          <div
            style={{
              transform: zoomLevel !== 100 ? `scale(${zoomLevel / 100})` : undefined,
              transformOrigin: "top center",
              transition: "transform 0.15s ease-out",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
            }}
          >
          {/* ====== PAGE 1 DOCUMENT ====== */}
          <div
            id="khatian-page-1"
            className="khatian-page"
            style={{
              width: "297mm",
              height: "210mm",
              backgroundColor: "#ffffff",
              padding: "7mm 9mm 5mm 9mm",
              boxSizing: "border-box",
              position: "relative",
              boxShadow: "0 0 12px rgba(0, 0, 0, 0.5)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Content Container */}
            <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                {/* Top Header Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "4px",
                  }}
                >
                  {/* Left: Form number */}
                  <div style={{ fontSize: "9.5px", fontFamily, paddingTop: "12px", width: "24%" }}>
                    বাংলাদেশ ফরম নং ৫৪৬২ (সংশোধিত)
                  </div>

                  {/* Center: Khatiyan number */}
                  <div
                    style={{
                      fontSize: "21px",
                      fontWeight: "bold",
                      fontFamily,
                      textAlign: "center",
                      flex: 1,
                      paddingTop: "4px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    খতিয়ান নং ১৫৬২
                  </div>

                  {/* Right: Application info + QR Code (QR on LEFT, ONLY line 3 has bullet) */}
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", justifyContent: "flex-end", width: "38%" }}>
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=0&qzone=1&ecc=M&data=${encodeURIComponent(
                        "https://dakhilaldtaxgovbd.vercel.app/mutation-qr"
                      )}`}
                      alt="QR"
                      style={{ width: "56px", height: "56px", padding: "0" }}
                    />
                    <div style={{ fontSize: "9.2px", fontFamily, lineHeight: "1.35", textAlign: "left" }}>
                      <div>আবেদন নম্বর : ১২৬৬৫৯৭৬</div>
                      <div>আবেদনের তারিখ : ১৪-৮-২০২৫</div>
                      <div>নামজারির মামলা নং: ১৯১৬ (IX-I)/ ২০২৫-২৬</div>
                      <div>অনলাইন ডিসিয়ার নং: ২৩২৬৫০০০০৬০৫০৮২</div>
                    </div>
                  </div>
                </div> 

                {/* Location Row */}
                <div
                  style={{
                    width: "100%",
                    fontSize: "11px",
                    fontFamily,
                    marginTop: "4px",
                    marginBottom: "8px",
                    padding: "2px 4px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxSizing: "border-box",
                  }}
                >
                  <span>জিলা : ঢাকা</span>
                  <span>উপজেলা/সার্কেল : মোহাম্মদপুর</span>
                  <span>মৌজা : দূয়ারীপাড়া</span>
                  <span>জে.এল নং : ৬</span>
                </div>

                {/* Main Data Table */}
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "11.5px",
                    fontFamily,
                    tableLayout: "fixed",
                  }}
                >
                  <thead>
                    {/* Row 1: Main headers */}
                    <tr>
                      <th style={{ ...cellHeader, width: "24%" }}>
                        মালিক, অকৃষি প্রজা বা<br />ইজারাদারের নাম ও ঠিকানা
                      </th>
                      <th style={{ ...cellHeader, width: "4.5%" }}>
                        অংশ
                      </th>
                      <th style={{ ...cellHeader, width: "6%" }}>
                        মোট ভূমি<br />উন্নয়ন কর
                      </th>
                      <th style={{ ...cellHeader, width: "6%" }}>
                        দাগ/প্লট<br />নং
                      </th>
                      <th colSpan={2} style={{ ...cellHeader, width: "10%" }}>
                        জমির শ্রেণী
                      </th>
                      <th colSpan={2} style={{ ...cellHeader, width: "10%" }}>
                        দাগের মোট জমির পরিমাণ
                      </th>
                      <th style={{ ...cellHeader, width: "9%" }}>
                        দাগের মধ্যে অত্র<br />খতিয়ানের অংশ
                      </th>
                      <th colSpan={2} style={{ ...cellHeader, width: "11.5%" }}>
                        অংশানুযায়ী জমির<br />পরিমাণ
                      </th>
                      <th style={{ ...cellHeader, width: "19%", fontSize: "11px" }}>
                        দখল/স্বত্ব বিষয়ক বা অন্যান্য<br />বিষয়ে মন্তব্য
                      </th>
                    </tr>
                    {/* Row 2: Numbers & Sub-headers */}
                    <tr>
                      <th style={cellHeader}>১</th>
                      <th style={cellHeader}>২</th>
                      <th style={cellHeader}>৩</th>
                      <th style={cellHeader}>৪</th>
                      <th style={{ ...cellHeader, fontSize: "10.5px" }}>কৃষি<br />৫ (ক)</th>
                      <th style={{ ...cellHeader, fontSize: "10.5px" }}>অকৃষি<br />৫ (খ)</th>
                      <th style={{ ...cellHeader, fontSize: "10.5px" }}>একর<br />৬ (ক)</th>
                      <th style={{ ...cellHeader, fontSize: "10.5px" }}>শতাংশ<br />৬ (খ)</th>
                      <th style={cellHeader}>৭</th>
                      <th style={{ ...cellHeader, fontSize: "10.5px" }}>একর<br />৮ (ক)</th>
                      <th style={{ ...cellHeader, fontSize: "10.5px" }}>শতাংশ<br />৮ (খ)</th>
                      <th style={cellHeader}>৯</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Data Row */}
                    <tr style={{ height: "240px" }}>
                      <td style={{ ...cellBase, textAlign: "left", fontSize: "11.5px", lineHeight: "1.5", padding: "12px 8px", verticalAlign: "top" }}>
                        <div style={{ fontWeight: "bold", fontSize: "12.5px", marginBottom: "4px" }}>নজরুল ইসলাম</div>
                        <div style={{ fontSize: "11px", color: "#000", marginBottom: "2px" }}>পিতা/স্বামী: মোঃ নুর নবী</div>
                        <div style={{ fontSize: "11px", color: "#000", marginBottom: "2px" }}>জাতীয় পরিচয়পত্র: ৩৭০১২০১২১৬</div>
                        <div style={{ fontSize: "10.8px", color: "#000", marginTop: "4px" }}>
                          বাসা/হোল্ডিং:, গ্রাম/রাস্তা:পশ্চিম বড়দেইল, বুড়ির চর, ডাকঘর:সাগরিয়া বাজার-, উপজেলা: হাতিয়া, জেলা: নোয়াখালী
                        </div>
                      </td>
                      <td style={{ ...cellBase, fontSize: "12px", verticalAlign: "top", paddingTop: "12px" }}>১.০০০</td>
                      <td style={{ ...cellBase, fontSize: "12px", verticalAlign: "top", paddingTop: "12px" }}>৬০</td>
                      <td style={{ ...cellBase, fontSize: "12px", verticalAlign: "top", paddingTop: "12px" }}>৯০</td>
                      <td style={{ ...cellBase, verticalAlign: "top", paddingTop: "12px" }}></td>
                      <td style={{ ...cellBase, fontSize: "12px", verticalAlign: "top", paddingTop: "12px" }}>বাড়ি আবাসিক</td>
                      <td style={{ ...cellBase, fontSize: "12px", verticalAlign: "top", paddingTop: "12px" }}>০</td>
                      <td style={{ ...cellBase, fontSize: "12px", verticalAlign: "top", paddingTop: "12px" }}>১.৪৫</td>
                      <td style={{ ...cellBase, fontSize: "12px", verticalAlign: "top", paddingTop: "12px" }}>১.৪৫</td>
                      <td style={{ ...cellBase, fontSize: "12px", verticalAlign: "top", paddingTop: "12px" }}>০</td>
                      <td style={{ ...cellBase, fontSize: "12px", verticalAlign: "top", paddingTop: "12px" }}>১.৪৫</td>
                      <td style={{ ...cellBase, textAlign: "left", fontSize: "11px", lineHeight: "1.5", padding: "12px 8px", verticalAlign: "top" }}>
                        <div>দলিল নং: ৬৫৯১</div>
                        <div>তাং: ২৪/০৭/২০২৫</div>
                        <div>পল্লবী, ঢাকা</div>
                        <div style={{ marginTop: "8px" }}>জোত নং ১৫৬/৮ ।</div>
                        <div style={{ marginTop: "8px" }}>নামজারি ও জমাভাগ অনুমোদনের তারিখঃ ১৯/০৮/২০২৫ খ্রিঃ।</div>
                      </td>
                    </tr>
                    {/* Summary Row */}
                    <tr>
                      <td style={{ ...cellBase, fontSize: "10.8px", textAlign: "left", padding: "6px 6px" }}>
                        ...১৪৩ ও ১১৬/১১৯...ধারামতে নোট বা পরিবর্তন মায় মোকদ্দমা এবং সন ।
                      </td>
                      <td style={{ ...cellBase, fontSize: "12px" }}>১.০০০</td>
                      <td style={cellBase}></td>
                      <td style={cellBase}></td>
                      <td style={cellBase}></td>
                      <td style={cellBase}></td>
                      <td style={cellBase}></td>
                      <td style={cellBase}></td>
                      <td style={{ ...cellBase, fontWeight: "bold", fontSize: "12px" }}>মোট জমি</td>
                      <td style={{ ...cellBase, fontSize: "12px" }}>০</td>
                      <td style={{ ...cellBase, fontSize: "12px" }}>১.৪৫</td>
                      <td style={{ ...cellBase, fontSize: "11.5px", textAlign: "left", fontWeight: "bold", padding: "6px 6px" }}>
                        কথায়: ০ একর ১ শতক ৪৫ অযুতাংশ
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Signature Section directly after the table finish */}
                <div style={{ marginTop: "16px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      padding: "0 5px",
                    }}
                  >
                    {/* ১. প্রস্তাবিত খতিয়ান */}
                    <div style={{ textAlign: "center", width: "23.5%", position: "relative" }}>
                      <div style={{ minHeight: "45px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                          src="/mutation-images/stamp-1.png"
                          alt="Signature 1"
                          style={{ maxHeight: "38px", maxWidth: "90%", objectFit: "contain" }}
                        />
                      </div>
                      <div style={{ borderTop: "1px solid #701a75", marginTop: "2px", paddingTop: "2px" }}>
                        <div style={{ fontSize: "9.5px", fontFamily, fontWeight: "bold", color: "#000" }}>প্রস্তাবিত খতিয়ান</div>
                        <div style={{ fontSize: "8.8px", fontFamily, color: "#701a75" }}>১৪/০৮/২০২৫</div>
                        <div style={{ fontSize: "9.5px", fontFamily, color: "#701a75", fontWeight: "bold" }}>(আফরোজা খাতুন)</div>
                        <div style={{ fontSize: "8px", fontFamily, color: "#701a75" }}>ইউনিয়ন ভূমি সহকারী কর্মকর্তা (ভারপ্রাপ্ত)</div>
                        <div style={{ fontSize: "8px", fontFamily, color: "#701a75" }}>সেনপাড়া পর্বতা ভূমি অফিস</div>
                      </div>
                    </div>

                    {/* ২. প্রস্তাবিত খতিয়ান সঠিক পাওয়া গেল */}
                    <div style={{ textAlign: "center", width: "23.5%", position: "relative" }}>
                      <div style={{ minHeight: "45px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                          src="/mutation-images/stamp-3.png"
                          alt="Signature 2"
                          style={{ maxHeight: "38px", maxWidth: "90%", objectFit: "contain" }}
                        />
                      </div>
                      <div style={{ borderTop: "1px solid #701a75", marginTop: "2px", paddingTop: "2px" }}>
                        <div style={{ fontSize: "9.5px", fontFamily, fontWeight: "bold", color: "#000" }}>প্রস্তাবিত খতিয়ান সঠিক পাওয়া গেলো।</div>
                        <div style={{ fontSize: "8.8px", fontFamily, color: "#701a75" }}>১৯/০৮/২০২৫</div>
                        <div style={{ fontSize: "9.5px", fontFamily, color: "#701a75", fontWeight: "bold" }}>(নাঈম আহমাদ)</div>
                        <div style={{ fontSize: "8px", fontFamily, color: "#701a75" }}>সার্ভেয়ার</div>
                        <div style={{ fontSize: "8px", fontFamily, color: "#701a75" }}>মোহাম্মদপুর রাজস্ব সার্কেল</div>
                      </div>
                    </div>

                    {/* ৩. পরীক্ষান্তে সঠিক পাওয়া গেল */}
                    <div style={{ textAlign: "center", width: "23.5%", position: "relative" }}>
                      <div style={{ minHeight: "45px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                          src="/mutation-images/stamp-4.png"
                          alt="Signature 3"
                          style={{ maxHeight: "38px", maxWidth: "90%", objectFit: "contain" }}
                        />
                      </div>
                      <div style={{ borderTop: "1px solid #701a75", marginTop: "2px", paddingTop: "2px" }}>
                        <div style={{ fontSize: "9.5px", fontFamily, fontWeight: "bold", color: "#000" }}>পরীক্ষান্তে সঠিক পাওয়া গেল।</div>
                        <div style={{ fontSize: "8.8px", fontFamily, color: "#701a75" }}>১৯/০৮/২০২৫</div>
                        <div style={{ fontSize: "9.5px", fontFamily, color: "#701a75", fontWeight: "bold" }}>(মোঃ নওয়াব হোসেন রাজা)</div>
                        <div style={{ fontSize: "8px", fontFamily, color: "#701a75" }}>কানুনগো (ভারপ্রাপ্ত)</div>
                        <div style={{ fontSize: "8px", fontFamily, color: "#701a75" }}>মোহাম্মদপুর রাজস্ব সার্কেল</div>
                      </div>
                    </div>

                    {/* ৪. অনুমোদিত */}
                    <div style={{ textAlign: "center", width: "23.5%", position: "relative" }}>
                      <div style={{ minHeight: "45px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                          src="/mutation-images/stamp-5.png"
                          alt="Signature 4"
                          style={{ maxHeight: "42px", maxWidth: "95%", objectFit: "contain" }}
                        />
                      </div>
                      <div style={{ borderTop: "1px solid #701a75", marginTop: "2px", paddingTop: "2px" }}>
                        <div style={{ fontSize: "9.5px", fontFamily, fontWeight: "bold", color: "#000" }}>অনুমোদিত</div>
                        <div style={{ fontSize: "8.8px", fontFamily, color: "#701a75" }}>১৯/০৮/২০২৫</div>
                        <div style={{ fontSize: "9.5px", fontFamily, color: "#701a75", fontWeight: "bold" }}>(মোঃ আবুবকর সিদ্দিক)</div>
                        <div style={{ fontSize: "8px", fontFamily, color: "#701a75" }}>সহকারী কমিশনার (ভূমি)</div>
                        <div style={{ fontSize: "8px", fontFamily, color: "#701a75" }}>মোহাম্মদপুর রাজস্ব সার্কেল</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Page number */}
              <div
                style={{
                  textAlign: "right",
                  fontSize: "11px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                  color: "#000",
                  paddingRight: "5px",
                }}
              >
                1/2
              </div>
            </div>
          </div>

          {/* ====== PAGE 2 DOCUMENT ====== */}
          <div
            id="khatian-page-2"
            className="khatian-page"
            style={{
              width: "297mm",
              height: "210mm",
              backgroundColor: "#ffffff",
              padding: "7mm 9mm 5mm 9mm",
              boxSizing: "border-box",
              position: "relative",
              boxShadow: "0 0 12px rgba(0, 0, 0, 0.5)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Content Container */}
            <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                {/* Header - same as page 1 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "4px",
                  }}
                >
                  <div style={{ fontSize: "9.5px", fontFamily, paddingTop: "12px", width: "24%" }}>
                    বাংলাদেশ ফরম নং ৫৪৬২ (সংশোধিত)
                  </div>
                  <div
                    style={{
                      fontSize: "21px",
                      fontWeight: "bold",
                      fontFamily,
                      textAlign: "center",
                      flex: 1,
                      paddingTop: "4px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    খতিয়ান নং ১৫৬২
                  </div>
                  <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", justifyContent: "flex-end", width: "38%" }}>
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=0&qzone=1&ecc=M&data=${encodeURIComponent(
                        "https://dakhilaldtaxgovbd.vercel.app/mutation-qr"
                      )}`}
                      alt="QR"
                      style={{ width: "56px", height: "56px", padding: "0" }}
                    />
                    <div style={{ fontSize: "9.2px", fontFamily, lineHeight: "1.35", textAlign: "left" }}>
                      <div>আবেদন নম্বর : ১২৬৬৫৯৭৬</div>
                      <div>আবেদনের তারিখ : ১৪-৮-২০২৫</div>
                      <div>নামজারির মামলা নং: ১৯২৬ (IX-I)/ ২০২৫-২৬</div>
                      <div>অনলাইন ডিসিয়ার নং: ২৩২৬৫০০০০৬০৫০৮১</div>
                    </div>
                  </div>
                </div>

                {/* Location Row */}
                <div
                  style={{
                    width: "100%",
                    fontSize: "11px",
                    fontFamily,
                    marginTop: "4px",
                    marginBottom: "16px",
                    padding: "2px 4px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxSizing: "border-box",
                  }}
                >
                  <span>জিলা : ঢাকা</span>
                  <span>উপজেলা/সার্কেল : মোহাম্মদপুর</span>
                  <span>মৌজা : দূয়ারীপাড়া</span>
                  <span>জে.এল নং : ৬</span>
                </div>

                {/* Special Notes */}
                <div style={{ padding: "8px 5px" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      fontFamily,
                      marginBottom: "10px",
                      color: "#000",
                    }}
                  >
                    বিশেষ দ্রষ্টব্য:
                  </div>
                  <div
                    style={{
                      fontSize: "11.5px",
                      fontFamily,
                      lineHeight: "2.1",
                      color: "#000",
                    }}
                  >
                    <p style={{ margin: "0 0 6px 0" }}>
                      ১ । এই নামজারি খতিয়ানটি অনলাইন নামজারি সিস্টেমে কর্তৃক প্রণীত। ইহা আইনগতভাবে বৈধ ও সর্বক্ষেত্রে গ্রহণযোগ্য হবে।
                    </p>
                    <p style={{ margin: "0 0 6px 0" }}>
                      ২ । অনলাইন খতিয়ানের সঠিকতা যাচাইয়ের জন্য কিউআর (QR) কোডটি স্ক্যান করে ভূমি মন্ত্রণালয়ের ওয়েবসাইট থেকে যাচাই করতে পারবেন।
                    </p>
                    <p style={{ margin: "0 0 6px 0" }}>
                      ৩ । ভূমি অফিস থেকে ম্যানুয়াল খতিয়ান সংগ্রহ করার প্রয়োজনীয়তা নেই।
                    </p>
                    <p style={{ margin: "0 0 6px 0" }}>
                      ৪ । ভূমি বিষয়ক যেকোনো তথ্য বা পরামর্শের জন্য ১৬১২২ নম্বরে কল করুন।
                    </p>
                  </div>
                </div>
              </div>

              {/* Page number */}
              <div
                style={{
                  textAlign: "right",
                  fontSize: "11px",
                  fontFamily: "Arial, sans-serif",
                  fontWeight: "bold",
                  color: "#000",
                  paddingRight: "5px",
                }}
              >
                2/2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Print & Mobile Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .pdf-sidebar {
            position: absolute !important;
            left: 0;
            top: 48px;
            bottom: 0;
            z-index: 999;
            box-shadow: 4px 0 12px rgba(0,0,0,0.5);
          }
          .pdf-toolbar-center-tools {
            display: none !important;
          }
          .pdf-toolbar-title {
            font-size: 12px !important;
            max-width: 140px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .khatian-scroll-area {
            padding: 10px 8px 30px 8px !important;
            align-items: flex-start !important;
          }
        }
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
          }
          .no-print, .pdf-toolbar, .pdf-sidebar {
            display: none !important;
          }
          .khatian-page {
            box-shadow: none !important;
            margin: 0 !important;
            page-break-after: always;
            page-break-inside: avoid;
          }
          div {
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}
