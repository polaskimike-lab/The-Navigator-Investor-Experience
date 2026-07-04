export const missions = [
  { id:"M-041", route:"Cedar Rapids → Chicago", ptr:72, status:"Action Required", revenue:"$87K", mode:"Truck" },
  { id:"M-052", route:"Kansas City → Dallas", ptr:48, status:"Watch", revenue:"$24K", mode:"Truck" },
  { id:"R-118", route:"Chicago Intermodal", ptr:61, status:"Rail Weather Risk", revenue:"$140K", mode:"Rail" },
  { id:"A-022", route:"Memphis Air Cargo", ptr:37, status:"On Track", revenue:"$18K", mode:"Air" }
];

export const optimizationOutputs = [
  ["Fuel Optimization", "Delay fueling 63 miles", "$842 saved", "-6 PTR"],
  ["Maintenance Optimization", "Route to service-capable stop", "$63K protected", "-24 PTR"],
  ["Weather Optimization", "Advance departure window", "$87K protected", "-31 PTR"],
  ["Customer Recovery", "Notify receiver + update SLA", "$2.3M relationship protected", "+24 SAS"]
];
