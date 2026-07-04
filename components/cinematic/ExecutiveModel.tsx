"use client";

import { useMemo, useState } from "react";

function Slider({ label, value, min, max, step, suffix, onChange }: { label: string; value: number; min: number; max: number; step: number; suffix?: string; onChange: (value: number) => void; }) {
  return (
    <div className="rounded-2xl border border-line bg-black/25 p-4">
      <div className="mb-3 flex items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{label}</p>
        <p className="text-sm font-semibold text-white">{value.toLocaleString()}{suffix ?? ""}</p>
      </div>
      <input aria-label={label} className="w-full accent-sky-400" type="range" min={min} max={max} step={step} value={value} onChange={(event) => onChange(Number(event.target.value))} />
    </div>
  );
}

export function ExecutiveModel() {
  const [fleetSize, setFleetSize] = useState(10000);
  const [weatherSeverity, setWeatherSeverity] = useState(65);
  const [dieselPrice, setDieselPrice] = useState(4.25);
  const [shipmentValue, setShipmentValue] = useState(250000);

  const model = useMemo(() => {
    const scale = fleetSize / 10000;
    const annualRevenueProtected = 184.2 * scale * (weatherSeverity / 65) * (shipmentValue / 250000);
    const operatingSavings = 31.6 * scale * (dieselPrice / 4.25);
    const implementationCost = 4.27 * scale + 0.0009 * fleetSize;
    const annualBenefit = annualRevenueProtected + operatingSavings;
    const paybackMonths = Math.max(1.2, (implementationCost / annualBenefit) * 12);
    const threeYearRoi = ((annualBenefit * 3 - implementationCost) / implementationCost) * 100;
    return { annualRevenueProtected, operatingSavings, implementationCost, paybackMonths, threeYearRoi };
  }, [fleetSize, weatherSeverity, dieselPrice, shipmentValue]);

  const money = (value: number) => `$${value >= 1000 ? `${(value / 1000).toFixed(1)}B` : `${value.toFixed(1)}M`}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
      <div className="panel rounded-[2.5rem] p-7">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-blueIntel">Interactive Business Case</p>
        <h3 className="mt-4 text-4xl font-semibold leading-[.95] tracking-[-0.055em] text-white">Adjust assumptions. Watch value move.</h3>
        <div className="mt-7 grid gap-4">
          <Slider label="Fleet Size" value={fleetSize} min={100} max={10000} step={100} onChange={setFleetSize} />
          <Slider label="Weather Severity" value={weatherSeverity} min={10} max={100} step={5} suffix="%" onChange={setWeatherSeverity} />
          <Slider label="Diesel Price" value={dieselPrice} min={3} max={6} step={0.05} suffix="/gal" onChange={setDieselPrice} />
          <Slider label="Average Shipment Value" value={shipmentValue} min={50000} max={750000} step={25000} onChange={setShipmentValue} />
        </div>
      </div>

      <div className="panel rounded-[2.5rem] p-7">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-amberRisk/25 bg-amberRisk/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Annual Revenue Protected</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-amberRisk">{money(model.annualRevenueProtected)}</p>
          </div>
          <div className="rounded-2xl border border-greenSafe/25 bg-greenSafe/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Annual Operating Savings</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-greenSafe">{money(model.operatingSavings)}</p>
          </div>
          <div className="rounded-2xl border border-blueIntel/25 bg-blueIntel/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Payback Period</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-blueIntel">{model.paybackMonths.toFixed(1)} mo</p>
          </div>
          <div className="rounded-2xl border border-blueIntel/25 bg-blueIntel/10 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Estimated 3-Year ROI</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-blueIntel">{Math.round(model.threeYearRoi)}%</p>
          </div>
        </div>
        <p className="mt-5 rounded-3xl border border-line bg-black/25 p-5 text-sm leading-7 text-slate-300">
          12-month operating model. ROI is modeled over three years and should be validated with customer operating data during diligence.
        </p>
      </div>
    </div>
  );
}
