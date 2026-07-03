import { ArrowRight, Network, Shield, TrendingUp } from "lucide-react";
import { visuals, ptrWeights, investmentStats, recommendations, roadmap } from "@/data/assets";
import { Section } from "@/components/Section";
import { KpiCard } from "@/components/KpiCard";
import { VisualBlock } from "@/components/VisualBlock";
import { PTRWeightCard } from "@/components/PTRWeightCard";
import { RecommendationCard } from "@/components/RecommendationCard";
import { RoadmapCard } from "@/components/RoadmapCard";

export default function InvestorExperience() {
  return (
    <main className="relative overflow-hidden bg-obsidian text-white">
      <div className="fixed inset-0 grid-field opacity-40 pointer-events-none" />

      <section className="relative flex min-h-[86vh] items-center justify-center px-5 py-16 text-center">
        <div className="relative z-10 max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-blueIntel/80">
            Genesis Security Solutions presents
          </p>
          <h1 className="mt-8 text-6xl font-semibold leading-[.86] tracking-[-0.075em] md:text-8xl">
            THE NAVIGATOR™
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Transportation Risk Intelligence Network
          </p>
          <p className="mx-auto mt-10 max-w-4xl text-3xl font-light leading-tight tracking-[-0.045em] text-white md:text-5xl">
            Every shipment carries more than cargo. It carries promises.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {investmentStats.map((stat) => <KpiCard key={stat.label} {...stat} />)}
          </div>
        </div>
      </section>

      <Section eyebrow="The launch visual" title="A platform brand built for investors, fleets, insurers, and infrastructure partners.">
        <VisualBlock
          src={visuals.brandPoster}
          alt="Navigator brand launch visual"
          caption="THE NAVIGATOR™ is positioned as a Transportation Risk Intelligence Network — premium, institutional, and enterprise-ready."
        />
      </Section>

      <Section eyebrow="Platform preview" title="The investor should feel the operating system before the product exists.">
        <VisualBlock
          src={visuals.commandCenter}
          alt="Navigator executive command center visual"
          caption="The command-center concept previews the future enterprise operating layer: PTR, revenue exposure, fleet status, weather intelligence, service assurance, and AI recommendations."
        />
      </Section>

      <Section eyebrow="The problem" title="Transportation is still managed reactively." compact>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Weather", "Storms, ice, fog, wind and visibility change faster than static transportation plans can respond."],
            ["Assets", "Equipment failures, road calls, cargo damage and transloads quietly destroy operational margins."],
            ["Customers", "A single failed shipment can ripple across manufacturers, receivers, contracts and future revenue."]
          ].map(([title, body]) => (
            <div key={title} className="mission-panel rounded-3xl p-7">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Asset Protection Intelligence™" title="Navigator connects every factor that threatens a transportation outcome.">
        <div className="grid items-stretch gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="mission-panel rounded-[2rem] p-8">
            <p className="text-2xl leading-10 text-slate-200">
              Navigator transforms disconnected signals into predictive, human-guided recommendations that protect the driver first, the asset second, service continuity third, and financial outcomes fourth.
            </p>
            <div className="mt-8 grid gap-3">
              {["Human life takes precedence", "Navigator recommends, humans approve", "Every material risk ties to financial impact"].map((item) => (
                <div key={item} className="rounded-2xl border border-line bg-black/25 p-4 text-sm text-slate-300">{item}</div>
              ))}
            </div>
          </div>
          <div className="mission-panel rounded-[2rem] p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {["Driver", "Equipment", "Cargo", "Route", "Weather", "Wildlife", "Customer", "Revenue"].map((node) => (
                <div key={node} className="rounded-2xl border border-line bg-white/[0.045] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-blueIntel">{node}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="PTR™ Framework" title="Preventable Transportation Risk becomes the operating score for transportation.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ptrWeights.map((item) => <PTRWeightCard key={item.label} {...item} />)}
        </div>
        <div className="mt-6">
          <VisualBlock
            src={visuals.ptrDashboard}
            alt="PTR framework and Fleet Command Center concept"
            caption="PTR framework and Fleet Command Center concept showing risk categories, live risk map, driver performance, financial impact, and platform modules."
          />
        </div>
      </Section>

      <Section eyebrow="Decision Engine" title="Current systems alert. Navigator recommends coordinated action.">
        <div className="grid gap-5 lg:grid-cols-3">
          {recommendations.map((rec, index) => <RecommendationCard key={rec.title} index={index + 1} {...rec} />)}
        </div>
      </Section>

      <Section eyebrow="Revenue Risk™" title="Every load is an individual asset with financial and supply-chain exposure." compact>
        <div className="grid gap-5 md:grid-cols-3">
          <KpiCard label="Load value" value="$250K" detail="Direct shipment exposure" />
          <KpiCard label="Annual customer" value="$4.5M" detail="Relationship exposure" />
          <KpiCard label="Revenue at risk" value="$143K" detail="Projected disruption impact" />
        </div>
      </Section>

      <Section eyebrow="Future interface" title="The HUD is not the product. It is the visible edge of the intelligence network.">
        <VisualBlock
          src={visuals.hudConcept}
          alt="Navigator AR HUD concept"
          caption="Future Navigator HUD concept: low-visibility guidance, roadway obstruction intelligence, wildlife probability, traction index, and V2X data sharing."
        />
      </Section>

      <Section eyebrow="Pilot strategy" title="The first deployment validates the intelligence layer, not a dashboard.">
        <div className="mission-panel rounded-[2rem] p-8">
          <p className="text-xl leading-8 text-slate-300">
            Initial target: Dart Transportation. Start with 100 vehicles, expand to one-third of fleet at six months, two-thirds at eight months, and full fleet after one year based on validated PTR reduction, accident reduction, road-call reduction, fuel savings, and wildlife event analytics.
          </p>
          <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-blueIntel via-amberRisk to-greenSafe" />
          </div>
          <div className="mt-4 grid gap-4 text-sm text-slate-400 md:grid-cols-4">
            <span>100 trucks</span>
            <span>6 mo: 1/3 fleet</span>
            <span>8 mo: 2/3 fleet</span>
            <span>12 mo: full fleet</span>
          </div>
        </div>
      </Section>

      <Section eyebrow="Expansion roadmap" title="One intelligence platform. Every mode of transportation.">
        <div className="grid gap-5 md:grid-cols-4">
          {roadmap.map((item) => <RoadmapCard key={item.title} {...item} />)}
        </div>
      </Section>

      <Section eyebrow="The moat" title="Navigator is not a trucking app. It is the intelligence layer for transportation risk.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [Shield, "Asset Protection Intelligence™", "Protects people, equipment, cargo, service continuity, and revenue."],
            [Network, "Network effects", "Every connected asset improves the value of the transportation intelligence network."],
            [TrendingUp, "PTR standard", "A proprietary operating score designed to become transportation's risk language."]
          ].map(([Icon, title, copy]: any) => (
            <div key={title} className="mission-panel rounded-3xl p-7">
              <Icon className="h-8 w-8 text-blueIntel" />
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">{title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative flex min-h-[74vh] items-center justify-center px-5 py-20 text-center">
        <div className="mission-panel max-w-5xl rounded-[2rem] p-10 shadow-glow md:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.45em] text-blueIntel">Request strategic briefing</p>
          <h2 className="mt-7 text-5xl font-semibold leading-[.9] tracking-[-0.065em] text-white md:text-7xl">
            See Beyond the Horizon™
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300">
            Navigator is building the future intelligence layer for transportation: trucking first, then rail, aviation, and consumer mobility.
          </p>
          <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-obsidian transition hover:bg-blueIntel">
            Request strategic briefing <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  );
}
