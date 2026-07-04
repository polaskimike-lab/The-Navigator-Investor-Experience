export const visuals = {
  brandPoster: "/assets/brand-poster.webp",
  hudConcept: "/assets/hud-concept.webp",
  ptrDashboard: "/assets/ptr-dashboard.webp",
  commandCenter: "/assets/command-center.webp"
};

export const ptrWeights = [
  { label: "Compliance", value: 20, detail: "HOS, inspection, registration, permits, regulatory exposure" },
  { label: "Equipment", value: 20, detail: "Tires, brakes, wheel ends, diagnostics, preventive maintenance" },
  { label: "Cargo", value: 15, detail: "Value, sensitivity, condition on arrival, handling requirements" },
  { label: "Driver", value: 15, detail: "Safety profile, fatigue risk, cargo care performance" },
  { label: "Route", value: 10, detail: "Terrain, construction, congestion, corridor history" },
  { label: "Environment", value: 10, detail: "Weather, visibility, wind, precipitation, road conditions" },
  { label: "Wildlife", value: 10, detail: "Deer activity, migration corridors, time-of-day risk" }
];

export const investmentStats = [
  { label: "Modeled fleet ROI", value: "210%", detail: "Illustrative 500-truck scenario" },
  { label: "Pilot deployment", value: "100", detail: "Vehicles in first commercial pilot" },
  { label: "PTR refresh", value: "5 min", detail: "Risk updates across active assets" },
  { label: "Seed target", value: "$2M", detail: "Platform build + pilot execution" }
];

export const recommendations = [
  { title: "Advance departure window", impact: "$87K protected", delta: "-31 PTR", copy: "NOAA storm forecast elevates corridor risk within 13 hours." },
  { title: "Stage transload contingency", impact: "$142K protected", delta: "-18 PTR", copy: "Service Assurance falls below threshold if both assets enter the same storm band." },
  { title: "Notify receiving customer", impact: "$2.3M exposure", delta: "+24 SAS", copy: "Delivery confidence changes materially; proactive notice protects relationship value." }
];

export const roadmap = [
  { phase: "01", title: "Commercial Trucking", copy: "Dart pilot, Fleet Operations, PTR validation, Service Assurance." },
  { phase: "02", title: "Rail Transportation", copy: "Railcar, locomotive, interchange, track condition, cargo protection." },
  { phase: "03", title: "Aviation", copy: "Weather, maintenance, routing, cargo, operational reliability." },
  { phase: "04", title: "Consumer Transportation", copy: "Navigator HUD and domestic roadway intelligence." }
];
