import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdur-Rahman Shakir - Personal Website",
  description: "Professional portfolio showcasing CTF writeups, shader projects, and technical expertise",
  keywords: ["portfolio", "CTF", "cybersecurity", "shaders", "web development"],
  authors: [{ name: "Abdur-Rahman Shakir" }],
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
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
