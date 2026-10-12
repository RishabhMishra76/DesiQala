import { Section, type SectionTone } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutProcess } from "@/lib/about-content";

type ProcessStepsProps = {
  index?: string;
  tone?: SectionTone;
};

export function ProcessSteps({ index, tone = "paper" }: ProcessStepsProps) {
  return (
    <Section tone={tone}>
      <SectionHeading
        index={index}
        label="How ordering works"
        title="From first message to a packed shipment."
        description="Four steps we follow with every buyer, so you always know what happens next."
      />
      <ol className="grid border-t border-ink sm:grid-cols-2 lg:grid-cols-4">
        {aboutProcess.map((item, i) => (
          <li
            key={item.step}
            className={`border-b border-ink/20 py-8 sm:pr-8 lg:border-b-0 ${
              i > 0 ? "lg:border-l lg:border-ink/20 lg:pl-8" : ""
            } ${i % 2 === 1 ? "sm:border-l sm:border-ink/20 sm:pl-8 lg:pl-8" : ""}`}
          >
            <span className="font-display text-6xl leading-none text-sindoor">{item.step}</span>
            <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-kattha">{item.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
