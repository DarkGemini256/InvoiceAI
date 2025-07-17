"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";

export default function LandingPage() {
  // Responsive feature list and pricing table data
  const features = [
    "AI-Powered Invoice Creation",
    "No Watermark on Free Tier",
    "Smart Payment Reminders",
    "Branded Client Portal",
    "Predictive Analytics (Pro)",
    "Multi-Currency Support",
    "Expense Tracking",
    "Stripe Payments",
    "GDPR & PCI DSS Compliance",
  ];

  const pricing = [
    {
      tier: "Free",
      price: "$0",
      features: [
        "10 invoices/month",
        "5 clients",
        "No watermark",
        "Basic features",
        "No AI",
        "1.5% platform fee",
      ],
    },
    {
      tier: "Starter",
      price: "$9/month",
      features: [
        "100 invoices/month",
        "Basic AI (invoice creation)",
        "No watermark",
        "0.9% fee",
      ],
    },
    {
      tier: "Pro",
      price: "$19/month",
      features: [
        "Unlimited invoices",
        "Advanced AI (reminders, analytics)",
        "No watermark",
        "0.9% fee",
      ],
    },
    {
      tier: "Add-ons",
      price: "$5–$10",
      features: [
        "Multi-user seats",
        "Custom domains",
        "WhatsApp delivery",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      {/* Header */}
      <Header />
      <main className="flex flex-col items-center flex-1 w-full">
        {/* Hero Section */}
        <section
          className="w-full flex flex-col items-center justify-center"
          style={{ height: "600px", minHeight: "400px" }}
        >
          <h1
            className="font-inter font-bold text-4xl md:text-6xl text-center text-primary mb-6"
            style={{ fontSize: "48px" }}
          >
            Simplify Your Invoicing with AI-Powered Tools
          </h1>
          <Button
            className="mt-4 w-[200px] h-[50px] text-lg bg-[#007BFF] hover:bg-blue-700 text-white font-semibold shadow transition"
            size="lg"
          >
            Start Free Trial
          </Button>
        </section>

        {/* Features Section */}
        <section
          className="w-full flex flex-col items-center bg-muted px-4 py-8"
          style={{ height: "400px", minHeight: "300px" }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Features</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-center max-w-4xl w-full">
            {features.map((feature) => (
              <li
                key={feature}
                className="py-2 px-4 rounded transition hover:bg-accent"
                style={{ fontSize: "18px" }}
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Pricing Section */}
        <section
          className="w-full flex flex-col items-center px-4 py-8"
          style={{ height: "400px", minHeight: "300px" }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Pricing</h2>
          <div className="overflow-x-auto w-full max-w-4xl">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr>
                  {pricing.map((plan) => (
                    <th
                      key={plan.tier}
                      className="text-lg font-semibold py-2 px-4 bg-secondary text-primary rounded"
                    >
                      {plan.tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {pricing.map((plan) => (
                    <td
                      key={plan.tier}
                      className="text-xl font-bold py-2 px-4 text-center"
                    >
                      {plan.price}
                    </td>
                  ))}
                </tr>
                {/* Features */}
                {[...Array(6)].map((_, i) => (
                  <tr key={i}>
                    {pricing.map((plan) => (
                      <td
                        key={plan.tier + i}
                        className="text-base py-1 px-4 text-center"
                      >
                        {plan.features[i] ? plan.features[i] : ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      {/* Theme Toggle (placed absolutely for easy access; move to settings later) */}
      <div className="absolute top-8 right-8">
        <ThemeToggle />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
