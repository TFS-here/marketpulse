# Market Pulse

An original mobile concept inspired by the broad insider-activity product category. All displayed content is fictional mock/demo data.

## Project Overview

Market Pulse is a mobile prototype that helps a user scan fictional notable insider-activity, find a transaction through search and filters, and understand mock filing details. This is a prototype, not an investing tool — no real transaction data, live filings, or market APIs are used anywhere in the app.

## Concept and Data Statement

This is an original mobile concept inspired by the broad StockInsider.io product category. StockInsider.io was used only as high-level inspiration for the general idea of turning disclosed insider activity into a mobile discovery flow — it was **not** used as a data, copy, or UI source. Every company name, ticker, transaction, signal, date, and chart value in this app is invented and stored locally. No scraping, API calls, or real filing data are used anywhere in the project.

## Screens and Features

**1. Home (Market Pulse)**

- Header with a "Fictional Demo Data" badge
- Search entry that navigates to the Screener
- Three summary cards (transactions, purchase value, sale value), derived from local mock data
- Top Signals Today — three signal categories with counts derived from the local trade array
- Latest Activity — four most recent trades, each showing ticker/company, purchase/sale with arrow and color, value, insider/role, filing time, and a signal-strength badge
- "View All" action into the Screener

**2. Screener (Latest Trades)**

- Search by ticker or company name, case-insensitive
- Three independent filters: Transaction Type (All / Purchases / Sales), Insider Role (All Roles / CEO / CFO / Director — Officer remains under All Roles), and Value Threshold (Any / $100K+ / $500K+ / $1M+)
- Live result count
- Empty state with the message "No fictional demo trades match those filters." and a Clear Filters action
- Tapping any trade opens Trade Details

**3. Trade Details**

- Back button, company name, ticker, sector, and a "FICTIONAL DEMO DATA" badge
- Prominent signal card showing the signal name and fictional value
- A metrics grid: insider/role, transaction type and code, shares, price per share, total value, signal strength, transaction date, and filed date
- A "Mock 7-day activity" bar chart built from each trade's own local numeric array
- A short "Why this matters" explanation, written to avoid investment-advice language
- The required disclaimer, shown in full

## Tech Stack

- Expo (React Native)
- TypeScript
- React Navigation (native stack)
- Expo Vector Icons
- NativeWind (Tailwind CSS for React Native)

## Setup

```bash
git clone https://github.com/TFS-here/marketpulse.git
cd marketpulse
npm install
npx expo start
```

Scan the QR code with the Expo Go app, or press `a` / `i` to launch an Android/iOS emulator.

## Mobile Design Decisions

- **Dark theme throughout**, using a consistent background/surface/text token system, so purchase and sale semantics (green/red) stand out clearly against a neutral base.
- **Subtle borders instead of shadows** on every card — shadows don't read well against a dark background, so a thin low-opacity border is used to separate cards from the page instead.
- **Text-plus-color-plus-icon for Purchase/Sale**, never color alone, so the transaction type is identifiable without relying on color perception.
- **Officer role has no dedicated filter chip** and stays grouped under "All Roles," matching the filter behavior requested for this project rather than adding an extra option.
- **Flexible row layouts, not fixed widths**, so longer company names and signal labels wrap safely on narrower phone screens.

## Known Limitations

- All data is static and stored locally; there is no backend, live filings, or market data of any kind.
- No authentication, user accounts, portfolio tracking, or alerts.
- The 7-day activity chart is a fixed local array per trade, not a real time series.

## AI-Use Disclosure

I used ChatGPT and Claude while building this project, mainly in two ways:

- To help generate the initial fictional mock data (`mockTrades.ts`) and plan the file/folder structure for the project.
- As a debugging and learning aid whenever I got stuck on a React Native or NativeWind issue — for example, fixing TypeScript errors, understanding why a style or filter wasn't working, and getting feedback on component structure and naming.

I wrote, edited, and tested all the code myself, and I can explain every screen, component, and design decision in this project. No AI tool was used to generate a finished project without my own review — I used them as a reference and debugging aid throughout, the same way I would use documentation or Stack Overflow.
