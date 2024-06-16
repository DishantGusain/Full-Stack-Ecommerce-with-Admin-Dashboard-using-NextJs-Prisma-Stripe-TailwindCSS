import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Full Stack Ecommerce with Admin Dashboard - Web Dev Simplified",
  description: "Welcome to the Open Source Ecommerce Store repository! This project is a comprehensive full-stack web application built to demonstrate a modern e-commerce platform. The tech stack includes React with Next.js, Prisma for database management, Stripe for payment processing, TypeScript for type safety, and Tailwind CSS for styling. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-background min-h-screen font-sans antialiased",inter.variable)}>{children}</body>
    </html>
  );
}
