# GridPulse — Electricity Demand & Forecast Intelligence

GridPulse is an independent portfolio project by Lukas Amare. It presents a product-quality interface for exploring electricity demand, day-ahead forecasts, forecast error, and planned operational analytics.

> Phase 1 status: landing page complete. All dashboard values are illustrative and are not live EIA observations. The data pipeline has not been connected.

## Product preview

- Responsive enterprise analytics landing page
- Interactive region and date-range controls
- Actual vs. forecast demand, hourly error, daily peak, and accuracy charts
- Planned EIA → Databricks → Bronze/Silver/Gold → Tableau architecture
- Optional Tableau Public embed via `NEXT_PUBLIC_TABLEAU_URL`
- Transparent project and pipeline status

## Stack

Next.js, React, TypeScript, Tailwind CSS, Recharts, and Lucide icons. The planned analytics phase adds Python, PySpark, Databricks, SQL, Delta Lake, the EIA API, and Tableau.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add a valid Tableau Public URL when one is available.

## Phase 2 (awaiting approval)

The next phase will implement API ingestion, incremental Databricks processing, medallion tables, data-quality checks, SQL analytics, and live dashboard integration.
