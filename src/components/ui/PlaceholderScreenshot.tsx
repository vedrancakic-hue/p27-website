type Variant =
  | "strategy"
  | "ranges"
  | "tree"
  | "heatmap"
  | "results"
  | "pricing";

const captions: Record<Variant, string> = {
  strategy: "Strategy view · River node",
  ranges: "Range construction",
  tree: "Tree visualization",
  heatmap: "Strategy heatmap",
  results: "EV & results",
  pricing: "Desktop application",
};

function WindowChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
      <div className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
      </div>
      <p className="truncate text-xs text-muted">{title}</p>
    </div>
  );
}

function StrategyMock() {
  const rows = ["AA", "KK", "QQ", "AKs", "AQs", "JJ", "TT", "AJs"];
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-[1fr_1.2fr]">
      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-wider text-muted">Actions</p>
        {[
          { label: "Bet 75%", pct: 62, color: "bg-accent" },
          { label: "Check", pct: 38, color: "bg-white/25" },
        ].map((row) => (
          <div key={row.label} className="rounded-lg bg-bg/60 p-3">
            <div className="mb-2 flex justify-between text-xs">
              <span className="text-text">{row.label}</span>
              <span className="font-mono text-accent">{row.pct}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className={`h-full ${row.color}`} style={{ width: `${row.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="mb-2 text-[11px] uppercase tracking-wider text-muted">Frequencies</p>
        <div className="grid grid-cols-4 gap-1.5">
          {rows.map((hand, i) => (
            <div
              key={hand}
              className="rounded-md border border-white/[0.06] bg-bg/50 p-2 text-center"
            >
              <div className="font-mono text-[11px] text-text">{hand}</div>
              <div
                className="mt-1 h-1 rounded-full bg-accent/80"
                style={{ opacity: 0.35 + (i % 5) * 0.12 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RangesMock() {
  return (
    <div className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs text-muted">IP Range · Flop</p>
        <p className="font-mono text-xs text-accent">34.2%</p>
      </div>
      <div className="grid grid-cols-8 gap-1">
        {Array.from({ length: 64 }).map((_, i) => {
          const on = i % 3 !== 0 && i % 7 !== 0;
          return (
            <div
              key={i}
              className={`aspect-square rounded-sm ${
                on ? "bg-accent/70" : "bg-white/[0.04]"
              }`}
              style={{ opacity: on ? 0.4 + (i % 6) * 0.1 : 1 }}
            />
          );
        })}
      </div>
    </div>
  );
}

function TreeMock() {
  return (
    <div className="flex items-center justify-center gap-6 p-6 sm:gap-10">
      <div className="rounded-lg border border-accent/30 bg-accent-soft px-3 py-2 text-xs text-accent">
        Root
      </div>
      <div className="hidden h-px w-8 bg-white/20 sm:block" />
      <div className="space-y-3">
        {["Bet", "Check"].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-white/10 bg-bg/50 px-3 py-2 text-xs text-text"
          >
            {label}
          </div>
        ))}
      </div>
      <div className="hidden h-px w-8 bg-white/20 sm:block" />
      <div className="space-y-2">
        {["Raise", "Call", "Fold"].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-[11px] text-muted"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function HeatmapMock() {
  return (
    <div className="p-4">
      <div className="mb-3 flex justify-between text-xs text-muted">
        <span>Strategy heatmap</span>
        <span className="font-mono text-accent">Bet / Check</span>
      </div>
      <div className="grid grid-cols-10 gap-1">
        {Array.from({ length: 50 }).map((_, i) => {
          const t = (i * 17) % 100;
          return (
            <div
              key={i}
              className="aspect-square rounded-[3px]"
              style={{
                background: `rgba(50, 213, 255, ${0.08 + (t / 100) * 0.75})`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function ResultsMock() {
  return (
    <div className="space-y-3 p-4">
      {[
        { label: "EV", value: "+12.4 bb" },
        { label: "Exploitability", value: "0.00%" },
        { label: "Nodes", value: "1.2M" },
      ].map((row) => (
        <div
          key={row.label}
          className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-bg/40 px-4 py-3"
        >
          <span className="text-sm text-muted">{row.label}</span>
          <span className="font-mono text-sm text-text">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

function PricingMock() {
  return (
    <div className="p-4">
      <StrategyMock />
    </div>
  );
}

const mocks: Record<Variant, () => React.ReactNode> = {
  strategy: StrategyMock,
  ranges: RangesMock,
  tree: TreeMock,
  heatmap: HeatmapMock,
  results: ResultsMock,
  pricing: PricingMock,
};

export function PlaceholderScreenshot({
  variant = "strategy",
  caption,
  className = "",
  large = false,
}: {
  variant?: Variant;
  caption?: string;
  className?: string;
  large?: boolean;
}) {
  const Mock = mocks[variant];
  const label = caption ?? captions[variant];

  return (
    <figure className={className}>
      <div
        className={[
          "overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)]",
          large ? "min-h-[280px] sm:min-h-[360px]" : "min-h-[220px]",
        ].join(" ")}
      >
        <WindowChrome title="P27 Solver" />
        <div className="bg-gradient-to-b from-surface to-bg/40">
          <Mock />
        </div>
      </div>
      {label ? (
        <figcaption className="mt-3 text-center text-sm text-muted">
          {label}
          <span className="ml-2 text-xs text-muted/60">· placeholder</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
