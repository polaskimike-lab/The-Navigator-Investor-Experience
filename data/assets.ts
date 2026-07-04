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

export const recommendations = [
  { title: "Delay fueling 63 miles", impact: "$842 saved", delta: "0 min arrival impact", confidence: "96.8%", copy: "Fuel cost, rush-hour exposure, weather, and HOS support a later refuel stop." },
  { title: "Advance departure window", impact: "$87K protected", delta: "-31 PTR", confidence: "94.2%", copy: "NOAA storm forecast elevates corridor risk within 13 hours." },
  { title: "Stage transload contingency", impact: "$142K protected", delta: "-18 PTR", confidence: "91.6%", copy: "Service Assurance falls below threshold if both assets enter the same storm band." }
];

export const roadmap = [
  { phase: "01", title: "Commercial Trucking", copy: "Dart pilot, Fleet Operations, PTR validation, Service Assurance." },
  { phase: "02", title: "Rail Transportation", copy: "Railcar, locomotive, interchange, track condition, cargo protection." },
  { phase: "03", title: "Aviation", copy: "Weather, maintenance, routing, cargo, operational reliability." },
  { phase: "04", title: "Consumer Transportation", copy: "Navigator HUD and domestic roadway intelligence." }
];
