"use client";
import {useState} from "react";
const scenarios=[
{name:"Winter Storm Corridor",ptr:-31,revenue:"$87K",confidence:"94.6%"},
{name:"Fuel Volatility",ptr:-12,revenue:"$18K",confidence:"96.8%"},
{name:"Equipment Failure",ptr:-24,revenue:"$63K",confidence:"91.4%"},
{name:"Wildlife Migration",ptr:-15,revenue:"$22K",confidence:"89.9%"},
{name:"Critical Customer Shipment",ptr:-28,revenue:"$140K",confidence:"93.1%"}
];
export function ScenarioEngine(){
 const [i,setI]=useState(0);
 const s=scenarios[i];
 return <div className="mission-panel rounded-[2rem] p-6">
 <h2 className="text-3xl font-semibold">Navigator Studio™</h2>
 <select className="mt-4 bg-black p-2" value={i} onChange={e=>setI(Number(e.target.value))}>
 {scenarios.map((x,n)=><option key={x.name} value={n}>{x.name}</option>)}
 </select>
 <div className="grid md:grid-cols-3 gap-4 mt-6">
 <div><h3>Before</h3><p>PTR 72</p><p>Revenue Risk High</p></div>
 <div><h3>Recommendation</h3><p>Confidence {s.confidence}</p><p>Expected PTR {s.ptr}</p><button>Approve Mission</button></div>
 <div><h3>After</h3><p>Revenue Protected {s.revenue}</p><p>Service Assurance ↑</p></div>
 </div></div>;
}