import type React from "react"
import type { Metadata } from "next"
import { Fira_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-fira-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Abdur-Rahman Shakir - Personal Website",
  description: "Professional portfolio showcasing CTF writeups, shader projects, and technical expertise",
  keywords: ["portfolio", "CTF", "cybersecurity", "shaders", "web development"],
  authors: [{ name: "Abdur-Rahman Shakir" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Abdur-Rahman Shakir - Personal Website",
    description: "Professional portfolio showcasing technical projects and expertise",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <script defer src="https://cloud.umami.is/script.js" data-website-id="1d2cb4fb-3c31-4177-a3ea-dddec2983e20"></script>
      <meta name="google-site-verification" content="i3wMWBFQ9OCEEbTTn8fJmY688PKVZ-5wQSqHSdrV4kI" />
      </head>
      <body className={`${firaSans.variable} ${firaSans.className} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
