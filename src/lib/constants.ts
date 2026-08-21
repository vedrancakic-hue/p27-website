/** Checkout / commerce — replace with your live Lemon Squeezy product URL. */
export const LEMON_SQUEEZY_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_LEMON_SQUEEZY_CHECKOUT_URL ??
  "https://p27solver.lemonsqueezy.com";

export const LEMON_SQUEEZY_CHECKOUT_CONFIGURED = Boolean(
  process.env.NEXT_PUBLIC_LEMON_SQUEEZY_CHECKOUT_URL,
);

export const CHECKOUT_NOTE =
  "Lemon Squeezy checkout is not live yet. Buy currently opens the store URL. When checkout is connected, your license key and download link arrive by email — enter the key in the app (Settings → License, or the first-run dialog).";

export const PRODUCT_VIDEO_URL = "https://youtu.be/WX3ImW5iQrk";
export const PRODUCT_VIDEO_EMBED_URL =
  "https://www.youtube.com/embed/WX3ImW5iQrk";

export const LICENSE_PRICE = "€68";
export const PRICE_UNTIL = "1 December 2026";

export const PRICE_INTRO_LINE = `Introductory lifetime price ${LICENSE_PRICE} until ${PRICE_UNTIL}. After that date the price will be adjusted for new buyers.`;

export const PRICE_LOCK_LINE = `Buy by ${PRICE_UNTIL} to lock ${LICENSE_PRICE} lifetime, including further solver speed upgrades when released.`;

/** Legal entity — footer/imprint for Azure Artifact Signing. Do not remove. */
export const COMPANY = {
  legalName: "NRG REAL d.o.o.",
  fullLegalName:
    "NRG REAL društvo s ograničenom odgovornošću za društvo s ograničenom odgovornošću za usluge",
  registeredAddress: "Ulica Zlatka Šulentića 12, 10000 Zagreb, Croatia",
  oib: "36516359407",
  mbs: "081446548",
  email: "info@p27solver.com",
  domain: "p27solver.com",
} as const;

export const NAV_LINKS = [
  { href: "/product", label: "Product" },
  { href: "/#included", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
] as const;

export const WHY_POINTS = [
  "Native Windows desktop solver — local computation, no browser",
  "Equity FN and Solve FN in one workspace",
  "Heads-up GTO postflop: Flop, Turn, and River",
  "Solve Quality presets: Quick, Normal, and Pro",
  `Further solver speed upgrades included for ${LICENSE_PRICE} buyers on or before ${PRICE_UNTIL} when released`,
] as const;

export const FEATURES = [
  {
    title: "Equity FN",
    description:
      "Range-vs-range equity on the current board. Independent of a GTO solve — inspect equity without running Solve FN.",
  },
  {
    title: "Solve FN",
    description:
      "GTO for Flop, Turn, and River. SOLVE routes by board length: 3 cards = Flop, 4 = Turn, 5 = River.",
  },
  {
    title: "Interactive range grids",
    description:
      "Build and inspect hero and villain ranges on the hand grid in a focused desktop workspace.",
  },
  {
    title: "Strategy visualisation",
    description:
      "Read action frequencies after a solve so lines stay clear and usable.",
  },
  {
    title: "EV after a solve",
    description:
      "Once Solve FN finishes, expected value is taken from the solved data — not a separate guess.",
  },
  {
    title: "Tree navigation",
    description:
      "Walk the decision tree from the root node through betting lines.",
  },
  {
    title: "Save situations",
    description:
      "Save spots locally and return to them later. Everything stays on your machine.",
  },
  {
    title: "Solve Quality presets",
    description:
      "Quick, Normal, or Pro — choose how far the CFR engine runs for the spot.",
  },
  {
    title: "Heads-up postflop",
    description:
      "Hero versus one villain. Multiway trees are not in the shipping app.",
  },
] as const;

export const APP_FUNCTIONS = [
  {
    name: "Equity FN",
    role: "Equity analysis",
    body: "Equity FN runs independently of the solver. Use it to preview how ranges collide on a board and to inspect range equity before — or without — launching a full GTO solve.",
  },
  {
    name: "Solve FN",
    role: "GTO solving · Flop, Turn & River",
    body: "Solve FN is the GTO engine. It computes game-theory-optimal strategies for Flop, Turn, and River. The SOLVE action detects the street from the board (3 cards = Flop, 4 = Turn, 5 = River) and routes to the correct solver automatically.",
  },
] as const;

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Set the spot",
    description:
      "Heads-up postflop: hero versus one villain. Deal the flop, turn, or river to define the board.",
  },
  {
    step: "02",
    title: "Assign ranges",
    description:
      "Edit the hand grid for hero and the villain. Preflop charts in the app can be applied or adjusted on the grid.",
  },
  {
    step: "03",
    title: "Choose Solve Quality",
    description: "Pick Quick, Normal, or Pro before you solve.",
  },
  {
    step: "04",
    title: "Solve FN",
    description:
      "Run Solve FN. The engine detects the street from board cards (3 / 4 / 5) and computes GTO strategy.",
  },
  {
    step: "05",
    title: "Review & save",
    description:
      "Explore strategy, EV after the solve, and Equity FN. Walk the tree and save the situation locally.",
  },
] as const;

export const ROADMAP_ITEMS = [
  {
    status: "Testing & validation",
    title: "Further solver speed upgrades",
    description: `Further solver speed upgrades are under testing and validation (expected in the coming months). Included for ${LICENSE_PRICE} buyers on or before ${PRICE_UNTIL} when released. From 2 December 2026 the licence price will be adjusted for new buyers.`,
  },
  {
    status: `Coming soon · not in the ${LICENSE_PRICE} licence`,
    title: "Tournament Solver Mode",
    description: `Dedicated tournament solving is in development. Game Settings for tournament / MTT / ICM is disabled in the shipping app. Not included in the current ${LICENSE_PRICE} lifetime licence.`,
  },
  {
    status: `Coming soon · not in the ${LICENSE_PRICE} licence`,
    title: "Exploitative Best-Response Solver",
    description: `Best-response solving against a specific opponent model. Villain profiles are not a working module in the shipping app. Not included in the current ${LICENSE_PRICE} lifetime licence.`,
  },
] as const;

export const COMING_SOON_ITEMS = [
  {
    title: "Further solver speed upgrades",
    note: `Under testing and validation — included for ${LICENSE_PRICE} buyers on or before ${PRICE_UNTIL} when released`,
  },
  {
    title: "GTO Adjustments panel",
    note: "Adjustable GTO parameters are not in the shipping app",
  },
  {
    title: "Tournament / MTT / ICM workflow",
    note: "Game Settings is disabled — not a working tournament mode",
  },
  {
    title: "Hand-history import, OCR, and screenshot import",
    note: "The Import tab is Coming Soon",
  },
  {
    title: "Multiway trees",
    note: "Shipping app is heads-up postflop only",
  },
  {
    title: "Villain profiles",
    note: "Not a working module in the shipping app",
  },
  {
    title: "Tournament Solver Mode",
    note: `Not included in the ${LICENSE_PRICE} licence`,
  },
  {
    title: "Exploitative Best-Response Solver",
    note: `Not included in the ${LICENSE_PRICE} licence`,
  },
] as const;

export const NEWS_ITEMS = [
  {
    category: "Development Update",
    title: "Further solver speed upgrades",
    body: `Further solver speed upgrades are under testing and validation. They are included for ${LICENSE_PRICE} buyers on or before ${PRICE_UNTIL} when released. From 2 December 2026 the licence price will be adjusted for new buyers.`,
  },
  {
    category: "Development Update",
    title: "Tournament Mode",
    body: `Tournament-specific solving is in development. It is not a working workflow in the shipping app and is not included in the ${LICENSE_PRICE} lifetime licence.`,
  },
  {
    category: "Development Update",
    title: "Exploitative Best-Response Solver",
    body: `Best-response solving against a specific opponent model is in development. It is not included in the ${LICENSE_PRICE} lifetime licence.`,
  },
] as const;

export const PRICING_INCLUDES = [
  "Full current P27 Solver (Windows desktop)",
  "Unlimited usage of features that ship today",
  "Two activations (desktop + laptop); deactivate to move",
  `Further solver speed upgrades upon release (included for ${LICENSE_PRICE} buyers on or before ${PRICE_UNTIL})`,
] as const;

export const PRICING_NOTE = `${PRICE_INTRO_LINE} Anyone who buys at ${LICENSE_PRICE} on or before ${PRICE_UNTIL} keeps that lifetime license, including further solver speed upgrades when released. Tournament Solver Mode and Exploitative Best-Response Solver are not included. Updates apply to the current product and those speed upgrades — not every future module.`;

export const SYSTEM_REQUIREMENTS = [
  {
    title: "Processor (CPU)",
    body: "Modern multi-core processor (4 cores / 8 threads or above recommended). The solver uses multiple threads; more cores generally mean faster convergence.",
  },
  {
    title: "Memory (RAM)",
    body: "16 GB minimum. 32 GB or more is recommended, especially for Flop solves with wider ranges. Larger ranges or additional bet sizes increase memory usage.",
  },
  {
    title: "Storage",
    body: "SSD recommended. The application itself is compact; saved situations benefit from fast storage.",
  },
  {
    title: "Operating System",
    body: "Windows 10 or later (64-bit) only. The native engine uses platform-specific optimizations including AVX2 where available.",
  },
] as const;

export const CORE_CONCEPTS = [
  {
    title: "Nash Equilibrium (GTO)",
    body: "A set of strategies where no player can improve their expected value by changing their own strategy alone — the unexploitable baseline the solver converges toward.",
  },
  {
    title: "Range vs. Range",
    body: "Every decision is solved for entire hand ranges, not single hands, so each combo is assigned the frequency that maximizes EV against the opponent’s whole range.",
  },
  {
    title: "Equity & EV",
    body: "Equity is your share of the pot at showdown; expected value (EV) is the long-run chips a line wins. Equity FN shows how ranges run out; Solve FN reports EV after a GTO solve.",
  },
  {
    title: "Exploitability",
    body: "How much a strategy can lose to a perfect counter-strategy. A fully converged solve approaches zero exploitability.",
  },
] as const;

export const CFR_SECTIONS = [
  {
    title: "Counterfactual Regret Minimization (CFR)",
    body: "An iterative self-play algorithm that repeatedly measures the regret of each action and shifts frequency toward the choices it “wishes” it had made, converging toward the optimal strategy over many iterations. The engine is written in Rust and runs natively. The shipping app solves heads-up postflop trees.",
  },
  {
    title: "Regret & Strategy Updates",
    body: "Regret is the difference between the action taken and the best action in hindsight. Strategies are averaged over all iterations so the final result reflects the equilibrium mix rather than the latest single pass.",
  },
  {
    title: "Equity FN vs Solve FN",
    body: "Equity FN and Solve FN are separate functions. Equity FN previews range-vs-range equity on a board without solving. Solve FN runs the CFR GTO engine for Flop, Turn, and River. After a solve completes, EV and strategy are read from the solved data.",
  },
  {
    title: "Solve Quality",
    body: "Quick, Normal, and Pro presets control how far the engine runs. Choose a preset before Solve FN.",
  },
] as const;

export const SOLVER_BEHAVIOR = [
  {
    title: "Solve FN · Automatic Street Detection",
    body: "Solve FN inspects the number of board cards and routes to the correct GTO solver — Flop, Turn, or River. No manual street selection is required.",
  },
  {
    title: "Equity FN · Independent Analysis",
    body: "Equity FN does not run a GTO solve. It calculates how ranges collide on the current board so you can inspect equity separately from Solve FN.",
  },
  {
    title: "Sleep & Standby Prevention",
    body: "Flop solves can run for several minutes or longer. During a flop solve the application prevents your computer from entering sleep or standby. Turn and river solves typically complete in seconds and do not require this protection.",
  },
  {
    title: "Consistent Engine",
    body: "Flop, Turn, and River share the same underlying CFR+ engine and regret matching. The difference is the number of chance-node boards evaluated per iteration (Block MCCFR sampling on Flop and Turn vs. full evaluation on the River).",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Is P27 Solver an online poker site?",
    answer:
      "No. It is a native Windows desktop application for studying GTO strategy. It is not a poker room and not a gambling service.",
  },
  {
    question: `What do I get with the ${LICENSE_PRICE} lifetime licence?`,
    answer: `The current Windows solver: Equity FN, Solve FN (Flop / Turn / River), range grids, strategy visualisation, EV after a solve, tree navigation, save situations, Solve Quality presets, and heads-up postflop. ${PRICE_LOCK_LINE} Tournament Solver Mode and Exploitative Best-Response Solver are not included.`,
  },
  {
    question: `Will the price change after ${PRICE_UNTIL}?`,
    answer: `Yes. ${PRICE_INTRO_LINE} Purchases on or before ${PRICE_UNTIL} keep ${LICENSE_PRICE} lifetime, including further solver speed upgrades when released. We are not announcing the post-${PRICE_UNTIL} price yet.`,
  },
  {
    question: "What is the difference between Equity FN and Solve FN?",
    answer:
      "Equity FN calculates range-vs-range equity on a board independently — it does not produce a GTO strategy. Solve FN is the GTO solver for Flop, Turn, and River: it detects the street from board cards and computes strategy via the CFR engine.",
  },
  {
    question: "Does it support multiway pots or tournaments today?",
    answer: `No. The shipping app is heads-up postflop. Multiway trees, tournament / MTT / ICM as a working workflow, GTO Adjustments, Import, and villain profiles are Coming Soon. Tournament Solver Mode is also not part of the ${LICENSE_PRICE} licence.`,
  },
  {
    question: "How do I buy and activate a licence?",
    answer:
      "Licences are sold through Lemon Squeezy (merchant of record). After purchase, the licence key and download link arrive by email. Enter the key in the app under Settings → License, or in the first-run dialog. Two activations are included (desktop + laptop); deactivate a machine to move the licence.",
  },
  {
    question: "Does it run in the browser?",
    answer:
      "No. P27 Solver is a downloadable native desktop app for Windows 10 or later (64-bit) only.",
  },
  {
    question: "Where can I read the docs?",
    answer:
      "Start with Getting Started in Docs for Equity FN, Solve FN, the CFR engine, workflow, and system requirements.",
  },
] as const;
