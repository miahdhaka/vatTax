import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ভূমি উন্নয়ন কর: Dakhila",
  description: "ভূমি উন্নয়ন কর সংক্রান্ত অনলাইন সেবা ও তথ্যাবলী",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.cdnfonts.com/css/kalpurush"
          rel="stylesheet"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/assets/global/plugins/font-awesome/css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/assets/global/plugins/simple-line-icons/simple-line-icons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/assets/global/plugins/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/assets/global/plugins/uniform/css/uniform.default.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/assets/global/css/components-rounded.css"
          id="style_components"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/assets/global/css/plugins-md.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/assets/admin/layout4/css/layout.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/assets/admin/layout4/css/themes/light.css"
          rel="stylesheet"
          type="text/css"
          id="style_color"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/assets/admin/layout4/css/custom.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/css/common.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://dakhila.ldtax.gov.bd/css/style.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="shortcut icon"
          href="https://dakhila.ldtax.gov.bd/img/favicon.ico"
        />
      </head>
      <body className="page-md page-sidebar-page-sidebar-closed-hide-logo page-header-fixed page-footer-fixed">
        {children}
      </body>
    </html>
  );
}
