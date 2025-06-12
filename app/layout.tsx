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
      <script src="https://cdn.counter.dev/script.js" data-id="ac1f80ae-aec6-4df6-8d22-4ef3d1ab78b2" data-utcoffset="-5"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
