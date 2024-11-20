import localFont from "next/font/local";
import "./globals.css";

// Define RenathaSignature font
const renathaSignature = localFont({
  src: "./fonts/RenathaSignature.otf",
  variable: "--font-renatha-signature",
  weight: "100", // Adjust the weight if necessary, depending on the font's characteristics
});

// Define Zector font
const zector = localFont({
  src: "./fonts/Zector.ttf",
  variable: "--font-zector",
  weight: "400", // Adjust the weight if necessary
});

export const metadata = {
  title: "Portfolio | Safwan",
  description: "Muhammed Safwan PM's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${renathaSignature.variable} ${zector.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
