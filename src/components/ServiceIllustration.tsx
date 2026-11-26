import { AutomationArtwork } from "./serviceArt/AutomationArtwork";
import { AiArtwork } from "./serviceArt/AiArtwork";
import { LifecycleArtwork } from "./serviceArt/LifecycleArtwork";
import { StrategyArtwork } from "./serviceArt/StrategyArtwork";
import { WebArtwork } from "./serviceArt/WebArtwork";

export type ServiceKind = "strategy" | "web" | "ai" | "automation" | "lifecycle";

type ServiceIllustrationProps = { kind: ServiceKind };

export function ServiceIllustration({ kind }: ServiceIllustrationProps) {
  return (
    <svg className={`service-illustration service-illustration--${kind}`}
      viewBox="0 0 260 160" role="presentation" aria-hidden="true" focusable="false">
      {kind === "strategy" && <StrategyArtwork />}
      {kind === "web" && <WebArtwork />}
      {kind === "ai" && <AiArtwork />}
      {kind === "automation" && <AutomationArtwork />}
      {kind === "lifecycle" && <LifecycleArtwork />}
    </svg>
  );
}
