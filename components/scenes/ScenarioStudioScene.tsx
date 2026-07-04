import {ScenarioEngine} from "@/components/engines/ScenarioEngine";
import {SectionTitle} from "@/components/core/SectionTitle";
export function ScenarioStudioScene(){
return <section className="mx-auto max-w-7xl px-5 py-20">
<SectionTitle eyebrow="Navigator Studio™" title="Run the mission before the mission runs you."
copy="Select an operational scenario and watch Navigator evaluate, recommend, and quantify the outcome."/>
<div className="mt-8"><ScenarioEngine/></div>
</section>}
