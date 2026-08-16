// ─────────────────────────────────────────────
//  portfolioData.js
//  Edit this file to update your personal info,
//  skills, experience, projects and tools.
// ─────────────────────────────────────────────

export const PERSONAL = {
  name: "Tam Nguyen",
  tagline: "Analytics Engineer who turns data into decisions.",
  bio: "I design and build modern data stacks — from raw ingestion to the metrics your CEO trusts every Monday morning.",
  email: "hello@nguyendev.io",
  linkedin: "https://linkedin.com/in/tamnm156/",
  github: "https://github.com/tamngEngineer",
  location: "HaNoi, Vietnam",
  available: true,
  stats: [
    { val: "2+",   label: "Years experience" },
    { val: "2",    label: "Clients served" }
  ],
};

export const SKILLS = [
  {
    icon: "🏗️",
    color: "#dfa88f",
    name: "Data Modeling",
    desc: "Design dimensional models and data vault architectures that scale to billions of rows without breaking a sweat.",
    tags: ["dbt", "Kimball", "Data Vault 2.0", "Snowflake"],
  },
  {
    icon: "⚙️",
    color: "#9fc9a2",
    name: "Pipeline Engineering",
    desc: "Build reliable EL/ETL pipelines with idempotent logic, incremental loading, and automated quality gates.",
    tags: ["Airflow", "dbt", "Fivetran", "Spark"],
  },
  {
    icon: "📊",
    color: "#9fbbe0",
    name: "Analytics & BI",
    desc: "Transform raw warehouse data into executive-ready dashboards and self-serve semantic layers.",
    tags: ["Looker", "Power BI", "Metabase", "Tableau"],
  },
  {
    icon: "☁️",
    color: "#c0a8dd",
    name: "Cloud Data Platforms",
    desc: "Architect cost-efficient cloud data stacks with proper RBAC, clustering, and partition strategies.",
    tags: ["Snowflake", "BigQuery", "Redshift", "Databricks"],
  },
  {
    icon: "🔍",
    color: "#f54e00",
    name: "Data Quality",
    desc: "Implement layered testing frameworks and observability pipelines so bad data never reaches production.",
    tags: ["Great Expectations", "dbt tests", "Monte Carlo", "re_data"],
  },
  {
    icon: "🤝",
    color: "#c08532",
    name: "Stakeholder Enablement",
    desc: "Bridge the gap between engineering and business — translating messy requirements into clean, documented data products.",
    tags: ["Data Contracts", "Metrics Layer", "Confluence", "SQL Training"],
  },
];

export const EXPERIENCE = [
  {
    period: "2025-06  >  Present",
    company: "HTC",
    role: "BI Developer",
    desc: "Develop reporting dashboads on Power BI and maintain data pipelines",
    highlights: [
      "Build and maintain ETL pipelines using Python and Airflow to ensure timely and accurate data flow from source systems to the data warehouse",
      "Design and develop interactive dashboards and reports on Power BI to provide actionable insights for business stakeholders",
      "Collaborate with cross-functional teams to gather requirements, understand data needs, and deliver data solutions that drive informed decision-making",
    ],
  },
  {
    period: "2024-03  >  2025-05",
    company: "HoanMyKleanco - Industrial cleaning services",
    role: "Data Analyst + Business Analyst",
    desc: "Build system of ERP applications, data pipelines, and reporting dashboards",
    highlights: [
      "Run adhoc analyses for directors and department heads to support decision-making",
      "Design Data warehouse on MariaDB and build end-to-end data pipeline from warehouse to Looker and Google Sheets dashboards",
      "Interviewed users across sales, operations, and human resources teams to gather requirements and translate them into technical specifications",
      "Testing and gathering feedback for improving system performance and user experience",
    ],
  },
  {
    period: "2023-10  >  2024-01",
    company: "Pavico Plastic manufacturing",
    role: "Sales Representative",
    desc: "Developed new customers and maintained relationships with existing clients in the plastic manufacturing industry",
    highlights: [
      "Made 300+ cold calls and secured 10+ meetings with potential clients",
    ],
  },
  {
    period: "2023-03  >  2023-08",
    company: "MCG management consulting",
    role: "Consultant Assistant",
    desc: "Assist consultants in human resource management and ogranizational restructuring projects",
    highlights: [
      "Helped build 3 pitch decks",
      "Done data cleaning and transformation on Excel",
      "Interviewed client's management teams"
    ],
  },
];

export const PROJECTS = [
  {
    icon: "🔄",
    name: "Modular dbt Framework",
    desc: "Open-source dbt project template with pre-built staging patterns, macros for slowly changing dimensions, and a full CI/CD GitHub Actions workflow.",
    stack: ["dbt", "Snowflake", "GitHub Actions", "Python"],
    metrics: [
      { val: "2.4k", label: "GitHub Stars" },
      { val: "18",   label: "Contributors" },
    ],
  },
  {
    icon: "📦",
    name: "Metrics Layer Prototype",
    desc: "Proof-of-concept semantic layer built on top of dbt metrics and Cube.js, exposing a single API for KPIs consumed by Looker, Metabase, and Jupyter notebooks simultaneously.",
    stack: ["dbt metrics", "Cube.js", "Node.js", "React"],
    metrics: [
      { val: "100%", label: "Single Source" },
      { val: "3×",   label: "Tools Unified" },
    ],
  },
  {
    icon: "🛡️",
    name: "Data Quality Monitor",
    desc: "Lightweight data observability tool that runs Great Expectations suites on schedule, posts anomaly alerts to Slack, and generates a weekly data health scorecard PDF.",
    stack: ["Great Expectations", "Airflow", "Python", "Slack API"],
    metrics: [
      { val: "99.4%",  label: "Data Accuracy" },
      { val: "< 5 min", label: "Alert Latency" },
    ],
  },
  {
    icon: "⚡",
    name: "Real-time Sales Dashboard",
    desc: "End-to-end streaming pipeline from PostgreSQL CDC → Kafka → Snowflake → Streamlit dashboard updating executive KPIs every 60 seconds.",
    stack: ["Kafka", "Debezium", "Snowflake", "Streamlit"],
    metrics: [
      { val: "60s",  label: "Refresh Rate" },
      { val: "500k", label: "Events/day" },
    ],
  },
];

export const TOOLS = [
  { emoji: "❄️", name: "Snowflake",       cat: "Warehouse" },
  { emoji: "🔷", name: "BigQuery",        cat: "Warehouse" },
  { emoji: "📦", name: "dbt Core",        cat: "Transformation" },
  { emoji: "🌬️", name: "Apache Airflow", cat: "Orchestration" },
  { emoji: "🔥", name: "Apache Spark",    cat: "Processing" },
  { emoji: "📡", name: "Kafka",           cat: "Streaming" },
  { emoji: "🐍", name: "Python",          cat: "Language" },
  { emoji: "🐘", name: "PostgreSQL",      cat: "Database" },
  { emoji: "📊", name: "Looker",          cat: "BI" },
  { emoji: "📈", name: "Power BI",        cat: "BI" },
  { emoji: "🐙", name: "GitHub Actions",  cat: "CI/CD" },
];

export const PIPELINE_STEPS = [
  { color: "#dfa88f", label: "Extract", desc: "Postgres CDC → S3 raw zone",          status: "done" },
  { color: "#9fc9a2", label: "Load",    desc: "Fivetran sync → Snowflake raw",        status: "done" },
  { color: "#9fbbe0", label: "Transform", desc: "dbt run --select +marts.sales",      status: "running" },
  { color: "#c0a8dd", label: "Test",    desc: "dbt test --store-failures",            status: "queued" },
  { color: "#c08532", label: "Publish", desc: "Refresh Looker + Slack alert",         status: "queued" },
];
