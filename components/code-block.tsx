"use client"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow, prism } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Fira_Code } from "next/font/google"

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fira-code",
})

interface CodeBlockProps {
  code: string
  language: string
  theme: string
}

export default function CodeBlock({ code, language, theme }: CodeBlockProps) {
  // Enhanced dark theme using the terminal palette
  const darkTheme = {
    ...tomorrow,
    'pre[class*="language-"]': {
      ...tomorrow['pre[class*="language-"]'],
      background: "#1c1c26",
      color: "#E5E9F0",
      fontSize: "0.875rem",
      lineHeight: "1.7",
      fontFamily: "var(--font-fira-code), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      padding: "1.25rem",
      borderRadius: "0.75rem",
      border: "1px solid #3b3b4d",
      boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.25)",
      fontStyle: "normal",
    },
    'code[class*="language-"]': {
      ...tomorrow['code[class*="language-"]'],
      background: "transparent",
      color: "#E5E9F0",
      fontSize: "0.875rem",
      lineHeight: "1.7",
      fontFamily: "var(--font-fira-code), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      fontStyle: "normal",
    },
    comment: { color: "#8E9BB5", fontStyle: "normal" },
    prolog: { color: "#8E9BB5", fontStyle: "normal" },
    doctype: { color: "#8E9BB5", fontStyle: "normal" },
    cdata: { color: "#8E9BB5", fontStyle: "normal" },
    keyword: { color: "#B8DEEB", fontWeight: "600", fontStyle: "normal" },
    "class-name": { color: "#B8DEEB", fontWeight: "600", fontStyle: "normal" },
    function: { color: "#CDDBF9", fontWeight: "500", fontStyle: "normal" },
    builtin: { color: "#B8DEEB", fontStyle: "normal" },
    number: { color: "#E6DFB8", fontStyle: "normal" },
    boolean: { color: "#E6DFB8", fontWeight: "600", fontStyle: "normal" },
    constant: { color: "#E6DFB8", fontStyle: "normal" },
    string: { color: "#B1DBA4", fontStyle: "normal" },
    char: { color: "#B1DBA4", fontStyle: "normal" },
    operator: { color: "#CDDBF9", fontStyle: "normal" },
    punctuation: { color: "#95A3BE", fontStyle: "normal" },
    property: { color: "#CDDBF9", fontStyle: "normal" },
    variable: { color: "#E5E9F0", fontStyle: "normal" },
    attr_name: { color: "#CDDBF9", fontStyle: "normal" },
    tag: { color: "#B8DEEB", fontStyle: "normal" },
  }

  // Enhanced light theme
  const lightTheme = {
    ...prism,
    'pre[class*="language-"]': {
      ...prism['pre[class*="language-"]'],
      background: "#f8f9fa",
      color: "#1e293b",
      fontSize: "0.875rem",
      lineHeight: "1.7",
      fontFamily: "var(--font-fira-code), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      padding: "1.25rem",
      borderRadius: "0.75rem",
      border: "1px solid #e2e8f0",
      boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05)",
      fontStyle: "normal",
    },
    'code[class*="language-"]': {
      ...prism['code[class*="language-"]'],
      background: "transparent",
      color: "#1e293b",
      fontSize: "0.875rem",
      lineHeight: "1.7",
      fontFamily: "var(--font-fira-code), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      fontStyle: "normal",
    },
    comment: { color: "#64748b", fontStyle: "normal" },
    prolog: { color: "#64748b", fontStyle: "normal" },
    doctype: { color: "#64748b", fontStyle: "normal" },
    cdata: { color: "#64748b", fontStyle: "normal" },
    keyword: { color: "#2563eb", fontWeight: "600", fontStyle: "normal" },
    "class-name": { color: "#2563eb", fontWeight: "600", fontStyle: "normal" },
    function: { color: "#0284c7", fontWeight: "500", fontStyle: "normal" },
    builtin: { color: "#0284c7", fontStyle: "normal" },
    number: { color: "#d97706", fontStyle: "normal" },
    boolean: { color: "#d97706", fontWeight: "600", fontStyle: "normal" },
    constant: { color: "#d97706", fontStyle: "normal" },
    string: { color: "#16a34a", fontStyle: "normal" },
    char: { color: "#16a34a", fontStyle: "normal" },
    operator: { color: "#0d9488", fontStyle: "normal" },
    punctuation: { color: "#475569", fontStyle: "normal" },
    property: { color: "#0284c7", fontStyle: "normal" },
    variable: { color: "#1e293b", fontStyle: "normal" },
    attr_name: { color: "#0284c7", fontStyle: "normal" },
    tag: { color: "#2563eb", fontStyle: "normal" },
  }

  const selectedTheme = theme === "dark" ? darkTheme : lightTheme

  return (
    <div className={`code-block font-mono ${firaCode.className}`}>
      <SyntaxHighlighter
        language={language || "glsl"}
        style={selectedTheme}
        customStyle={{
          margin: 0,
          borderRadius: "0.75rem",
          fontSize: "0.875rem",
          lineHeight: "1.7",
          maxHeight: "none",
          overflow: "visible",
        }}
        wrapLines={false}
        wrapLongLines={false}
        showLineNumbers={true}
        lineNumberStyle={{
          color: theme === "dark" ? "#65728c" : "#94a3b8",
          fontSize: "0.75rem",
          paddingRight: "0.75rem",
          marginRight: "0.75rem",
          borderRight: theme === "dark" ? "1px solid #3b3b4d" : "1px solid #e2e8f0",
          minWidth: "2.75rem",
          textAlign: "right",
          userSelect: "none",
          fontStyle: "normal",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
