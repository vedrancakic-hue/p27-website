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

/** Hero / primary workspace shot */
export const HERO_SHOT = {
  src: "/screenshots/Sol_1_str.png",
  alt: "P27 Solver Strategy view — 13×13 mixed-strategy grid after a solve",
  caption:
    "Strategy — 13×13 hand classes at the current node. Coloured bars follow the legend under the grid (Fold, Check/Call, Bet/Raise sizes from Tree Settings). Mixed colours = mixed frequencies.",
} as const;

/** Full-window view tabs (EV / Equity / Reach) */
export const VIEW_SHOTS = [
  {
    id: "ev",
    src: "/screenshots/Sol_1_ev.png",
    alt: "P27 Solver EV view after a completed solve",
    caption:
      "EV — after Solve FN finishes. Cell = average EV (bb) at the node; combo detail = EV by action. Colour is an EV heat scale, not the Strategy legend.",
  },
  {
    id: "equity",
    src: "/screenshots/Sol_1_equity.png",
    alt: "P27 Solver Equity view on the 13×13 grid",
    caption:
      "Equity — Equity FN runs without a GTO solve. After a solve, the Equity tab also shows equity at the current node.",
  },
  {
    id: "reach",
    src: "/screenshots/Sol_1_reach.png",
    alt: "P27 Solver Reach toggle showing range thinning on a line",
    caption:
      "Reach — toggle on the Strategy / EV / Equity row. Fraction of each combo still in play on the path. Tiny reach is height-boosted for readability; the printed % is actual reach.",
  },
] as const;

/** Cropped panels (Composition + Tree Navigation) — not full-window repeats */
export const DETAIL_SHOTS = [
  {
    id: "composition",
    src: "/screenshots/Sol_1_composition.png",
    alt: "P27 Solver Composition panel — villain vs hero range breakdown",
    caption:
      "Composition — how ranges break down on this board (Value, Showdown, Draws, Air). Click a category to highlight matching hands. Range vs board — not the GTO mix.",
  },
  {
    id: "nav",
    src: "/screenshots/Sol_1_nav.png",
    alt: "P27 Solver Tree Navigation panel — actions and path",
    caption:
      "Tree Navigation — node path, stacks, available actions (Fold / Call / Raise %), range-weighted frequencies, and path with Back. All views update for the node you select.",
  },
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
      "GTO for Flop, Turn, and River. One SOLVE control; street from board length (3 / 4 / 5 cards). Button reads Solving… then SOLVED.",
  },
  {
    title: "Strategy grid",
    description:
      "13×13 hand classes with mixed action frequencies at the current node. Legend colours match live Tree Settings bet sizes.",
  },
  {
    title: "EV after a solve",
    description:
      "Expected value from the solved strategy once the result is loaded — class averages and combo EV by action.",
  },
  {
    title: "Equity tab & Reach",
    description:
      "Equity on the same grid (also via Equity FN without solving). Reach toggle shows how much of each combo still reaches the node after the line.",
  },
  {
    title: "Composition",
    description:
      "How hero and villain ranges break down on this board (made hands, pairs, draws, air). Click a category to highlight matching hands.",
  },
  {
    title: "Tree navigation",
    description:
      "From the root node, walk betting lines and chance cards. Strategy and related views update for the node you select.",
  },
  {
    title: "Solve Quality",
    description:
      "Quick, Normal, or Pro — how far CFR runs for the spot, not a second product.",
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
    body: "Equity FN runs independently of the solver. Use it for range-vs-range equity on the current board before — or without — a full GTO solve. After a solve, the Equity tab can also show equity at the current tree node.",
  },
  {
    name: "Solve FN",
    role: "GTO solving · Flop, Turn & River",
    body: "Solve FN is the GTO engine. One SOLVE control detects the street from the board (3 cards = Flop, 4 = Turn, 5 = River). While running it reads Solving…; when the UI has the result it reads SOLVED. Solve Quality (Quick / Normal / Pro) sets how far CFR runs.",
  },
] as const;

export const SOLVE_PROGRESS = [
  {
    title: "0%",
    body: "CFR has not started counting iterations yet. The engine is building the situation: equity matrices for this board and the two ranges, then the decision tree. Progress stays at 0% during that setup. Computation is local — not a cloud download.",
  },
  {
    title: "1%–99%",
    body: "CFR is running. The percentage is current iteration ÷ total iterations for this Solve Quality and street. The time counter is elapsed seconds.",
  },
  {
    title: "100% while still Solving…",
    body: "Iterations have finished. The engine is packaging a large strategy payload and handing it to the interface. On flop this can take up to a few minutes. Strategy / EV / Reach are not reliable until the badge flips to the completed state and the button reads SOLVED.",
  },
  {
    title: "Completed (✓ 100% • time)",
    body: "The UI has the result. Walk the tree and read Strategy, EV, Equity, Reach, and Composition at the current node.",
  },
] as const;

export const WORKSPACE_VIEWS = [
  {
    title: "Strategy",
    body: "13×13 grid of hand classes (AA, AKs, AKo, …). Each cell is the mixed strategy at the current node. Coloured bars = actions from the legend under the grid (Fold, Check/Call, Bet/Raise sizes from Tree Settings). Mixed colours in one cell = mixed frequencies. Select a hand for particular combos, not only the class average.",
  },
  {
    title: "EV",
    body: "Available after Solve FN completes and the result is in the UI. Matrix cell = average EV of that hand class at the current node (bb). Combo detail = EV by action (check vs each bet size, etc.). Colour is an EV heat scale — not the Strategy action legend.",
  },
  {
    title: "Equity",
    body: "Equity FN can run without a GTO solve. After a solve, the Equity tab shows equity at the current node on the same grid. Class averages on the matrix; particular combos in detail.",
  },
  {
    title: "Reach",
    body: "A toggle on the Strategy / EV / Equity row — meaningful after a solve on a line. Shows what fraction of each combo is still in play after the actions on the current path. Very small reach is drawn taller so the grid stays readable; the printed percentage is the real reach.",
  },
  {
    title: "Composition",
    body: "How current ranges break down on this board (hero vs villain): quads through air, pairs, draws, and related categories. Values are % of the range. Click a category to highlight matching hands. This is range-vs-board classification, not the GTO mix; it updates with the board and, when solved, the ranges still reaching the node.",
  },
  {
    title: "Game Tree",
    body: "After a solve you start at the root node for that street. Click actions (Check, Bet %, Fold, Call, Raise — labels match bet sizes for the spot) to move down the line. Turn and river include chance nodes for the next card. Path is shown; Back or a previous segment returns. All views refer to the node you are on.",
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
    title: "SOLVE",
    description:
      "Run Solve FN. Watch 0% setup, then iteration %, then 100% packaging until the badge completes and the button reads SOLVED.",
  },
  {
    step: "05",
    title: "Walk & review",
    description:
      "Walk the tree. Read Strategy, EV, Equity, Reach, and Composition at each node. Save locally.",
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
    body: "Equity FN and Solve FN are separate functions. Equity FN previews range-vs-range equity on a board without solving. Solve FN runs the CFR GTO engine for Flop, Turn, and River. After a solve completes and the result is in the UI, Strategy, EV, Reach, and node Equity are read from the solved data.",
  },
  {
    title: "Solve Quality",
    body: "Quick, Normal, and Pro presets control how far CFR runs — not a second product. Choose a preset before SOLVE.",
  },
] as const;

export const SOLVER_BEHAVIOR = [
  {
    title: "Solve FN · Automatic Street Detection",
    body: "One SOLVE control. Street comes from board cards (3 = Flop, 4 = Turn, 5 = River). The button reads Solving… while work is in progress and SOLVED when the UI has the result.",
  },
  {
    title: "Solve progress · local computation",
    body: "Progress next to the cash/tournament toggle: 0% while the engine builds equity matrices and the tree; 1%–99% while CFR iterations run; 100% while still Solving… means packaging the strategy payload into the UI (can take up to a few minutes on flop). Strategy / EV / Reach are reliable only after the completed badge (✓ 100% • time) and SOLVED.",
  },
  {
    title: "Equity FN · Independent Analysis",
    body: "Equity FN does not require a GTO solve. It calculates range-vs-range equity on the current board. After a solve, the Equity tab can also show equity at the current node.",
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
    answer: `The current Windows solver: Equity FN, Solve FN (Flop / Turn / River), Strategy / EV / Equity / Reach, Composition, tree navigation, save situations, Solve Quality presets, and heads-up postflop. ${PRICE_LOCK_LINE} Tournament Solver Mode and Exploitative Best-Response Solver are not included.`,
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
