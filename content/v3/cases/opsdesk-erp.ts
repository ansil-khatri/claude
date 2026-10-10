import type { Case } from "../types";

export const caseStudy: Case = {
  slug: "opsdesk-erp",
  name: "OpsDesk",
  sector: "ERP for a trading company",
  platform: "Custom ERP with WhatsApp and AI assistant",
  brand: "opsdesk",
  h: "One system for orders, stock, invoices and customer messages, replacing a set of spreadsheets",
  summary:
    "A concept build showing how we would design an operations system for a UAE trading company. OpsDesk is a fictional product, not a client.",
  brief:
    "Imagine a trading company running orders from WhatsApp, stock in Excel and invoices in a Word template. The brief we set ourselves: one place for orders, stock and invoices with 5% VAT handled correctly, customer messages arriving in the same system, and an assistant that answers routine questions but hands over to a person when it should.",
  built:
    "A web-based operations system: order and customer records, stock by location, quotations and VAT invoices, payment tracking, a WhatsApp inbox linked to customer records, and an AI assistant that answers from the catalogue and stock data. Built as a concept to demonstrate design.",
  decisions: [
    {
      t: "Model the real workflow before the screens",
      p: "We map how an order moves from enquiry to quotation, invoice, delivery and payment, and who touches it. The data model follows that flow, so the screens match how staff already think and training is short.",
    },
    {
      t: "Stock as movements, not a number",
      p: "Stock is the sum of receipts, sales and adjustments, each with a user and a date. A single editable quantity cannot be audited, and an audit trail is what lets a manager find where a count went wrong.",
    },
    {
      t: "VAT and invoices built in, with the accountant in the loop",
      p: "Invoices carry 5% VAT as separate lines with sequential numbering. Tax rules are confirmed with the client's accountant and, for e-invoicing, checked against current UAE requirements before we configure anything.",
    },
    {
      t: "WhatsApp through the official API",
      p: "Messages arrive via the WhatsApp Business Platform, which requires approved templates for business-initiated messages and a business account. We build on that rather than unofficial tools, which risk the number being blocked.",
    },
    {
      t: "The assistant answers from data and knows when to stop",
      p: "The AI assistant reads the catalogue and stock, answers price and availability questions, and hands off to a person for discounts, complaints or anything outside its data. It cites what it used, and staff can review every conversation.",
    },
    {
      t: "Roles and permissions from day one",
      p: "Sales, warehouse and finance see different things, and price or cost fields are hidden where they should be. Adding permissions after launch is harder than designing them in.",
    },
  ],
  stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "WhatsApp Business Platform (Cloud API)", "Anthropic Claude API", "Redis", "Docker", "Playwright", "Git with GitHub"],
  timeline:
    "Planned as a 10 to 14 week operations system build: workflow discovery in weeks 1 to 2, design in weeks 2 to 4, core modules in weeks 4 to 10, WhatsApp and assistant in weeks 9 to 12, data migration, training and launch after.",
  scope: ["Workflow discovery", "Data model", "Orders, stock and invoicing modules", "WhatsApp inbox", "AI assistant", "Roles and permissions", "Data import from Excel", "Staff training"],
  visuals: ["erp-dash", "erp-invoice", "wa-inbox", "ai-widget"],
  services: ["erp-software-dubai", "whatsapp-automation-dubai", "ai-assistant-for-business-dubai", "business-automation-dubai"],
  posts: ["erp-vs-excel-uae", "whatsapp-auto-reply-for-business"],
};
