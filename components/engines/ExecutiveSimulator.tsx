 "use client";

import { useMemo, useState } from "react";

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="rounded-2xl border border-line bg-black/25 p-4">
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{label}</p>
        <p className="text-sm font-semibold text-white">
          {value.toLocaleString()}{suffix ?? ""}
        </p>
      </div>
      <input
        aria-label={label}
        className="w-full accent-sky-400"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  );
}

export function ExecutiveSimulator() {
  const [fleetSize, setFleetSize] = useState(10000);
  const [annualMiles, setAnnualMiles] = useState(120000);
  const [dieselPrice, setDieselPrice] = useState(4.25);
  const [weatherSeverity, setWeatherSeverity] = useState(65);
  const [shipmentValue, setShipmentValue] = useState(250000);
  const [accidentFrequency, setAccidentFrequency] = useState(8);
  const [emptyMiles, setEmptyMiles] = useState(15);

  const model = useMemo(() => {
    const scale = fleetSize / 10000;
    const weatherFactor = weatherSeverity / 65;
    const shipmentFactor = shipmentValue / 250000;
    const accidentFactor = accidentFrequency / 8;
    const dieselFactor = dieselPrice / 4.25;
    const mileFactor = annualMiles / 120000;
    const emptyMileFactor = emptyMiles / 15;

    const annualRevenueProtected =
      184.2 * scale * weatherFactor * shipmentFactor * accidentFactor;

    const fuelSavings =
      18.4 * scale * dieselFactor * mileFactor * (0.75 + emptyMileFactor * 0.25);

    const maintenanceAvoidance = 7.2 * scale * mileFactor * accidentFactor;
    const operatingSavings = fuelSavings + maintenanceAvoidance + 6.0 * scale;

    const implementationCost = 4.27 * scale + 0.0009 * fleetSize;
    const annualBenefit = annualRevenueProtected + operatingSavings;
    const paybackMonths = Math.max(1.2, (implementationCost / annualBenefit) * 12);
    const threeYearRoi = ((annualBenefit * 3 - implementationCost) / implementationCost) * 100;
    const ptrStart = 72;
    const ptrReduction = Math.min(48, Math.round(16 + weatherSeverity * 0.2 + accidentFrequency * 0.9));
    const ptrEnd = Math.max(18, ptrStart - ptrReduction);
    const confidence = Math.min(97.8, 86 + fleetSize / 2500 + weatherSeverity / 30);

    return {
      annualRevenueProtected,
      fuelSavings,
      maintenanceAvoidance,
      operatingSavings,
      implementationCost,
      paybackMonths,
      threeYearRoi,
      ptrStart,
      ptrEnd,
      confidence
    };
  }, [fleetSize, annualMiles, dieselPrice, weatherSeverity, shipmentValue, accidentFrequency, emptyMiles]);

  const money = (value: number) =>
    `$${value >= 1000 ? `${(value / 1000).toFixed(1)}B` : `${value.toFixed(1)}M`}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="mission-panel rounded-[2rem] p-7">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueIntel">Interactive Executive Model</p>
        <h3 className="mt-4 text-4xl font-semibold leading-[.95] tracking-[-0.055em] text-white">
          Adjust the operating assumptions. Watch the investment case move.
        </h3>

        <div className="mt-7 grid gap-4">
          <Slider label="Fleet Size" value={fleetSize} min={100} max={10000} step={100} onChange={setFleetSize} />
          <Slider label="Annual Miles / Tractor" value={annualMiles} min={60000} max={160000} step={5000} onChange={setAnnualMiles} />
          <Slider label="Diesel Price" value={dieselPrice} min={3} max={6} step={0.05} suffix="/gal" onChange={setDieselPrice} />
          <Slider label="Weather Severity" value={weatherSeverity} min={10} max={100} step={5} suffix="%" onChange={setWeatherSeverity} />
          <Slider label="Average Shipment Value" value={shipmentValue} min={50000} max={750000} step={25000} onChange={setShipmentValue} />
          <Slider label="Annual Preventable Events" value={accidentFrequency} min={1} max={25} step={1} onChange={setAccidentFrequency} />
          <Slider label="Empty Miles" value={emptyMiles} min={5} max={35} step={1} suffix="%" onChange={setEmptyMiles} />
        </div>
      </div>

      <div className="mission-panel rounded-[2rem] p-7">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueIntel">Modeled Output</p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-amberRisk/25 bg-amberRisk/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Estimated Annual Revenue Protected</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-amberRisk">{money(model.annualRevenueProtected)}</p>
          </div>
          <div className="rounded-2xl border border-greenSafe/25 bg-greenSafe/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Estimated Annual Operating Savings</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-greenSafe">{money(model.operatingSavings)}</p>
          </div>
          <div className="rounded-2xl border border-line bg-black/25 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Fleet Fuel Savings</p>
            <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">{money(model.fuelSavings)}</p>
          </div>
          <div className="rounded-2xl border border-line bg-black/25 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Maintenance Avoidance</p>
            <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">{money(model.maintenanceAvoidance)}</p>
          </div>
          <div className="rounded-2xl border border-blueIntel/25 bg-blueIntel/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Estimated Payback Period</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-blueIntel">{model.paybackMonths.toFixed(1)} mo</p>
          </div>
          <div className="rounded-2xl border border-blueIntel/25 bg-blueIntel/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Estimated 3-Year ROI</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-blueIntel">{Math.round(model.threeYearRoi)}%</p>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-line bg-black/25 p-5">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">PTR</p>
              <p className="mt-2 text-2xl font-semibold text-greenSafe">{model.ptrStart} → {model.ptrEnd}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Implementation Cost</p>
              <p className="mt-2 text-2xl font-semibold text-white">{money(model.implementationCost)}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Model Confidence</p>
              <p className="mt-2 text-2xl font-semibold text-white">{model.confidence.toFixed(1)}%</p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-blueIntel/25 bg-blueIntel/[0.055] p-5">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-blueIntel">Scenario Assumptions</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            12-month operating model. Revenue protected includes avoided service failure, shipment disruption, emergency transload exposure, customer confidence impact, and delay-related supply-chain risk. ROI is modeled over three years and should be validated with customer operating data during diligence.
          </p>
        </div>
      </div>
    </div>
  );
}
