/* Checkout link. Same URL on both languages. */
const BUY_URL = "https://pay.kiwify.com.br/1A9h6Z0";

const CATS = [
  { id: "all", label: "All" },
  { id: "start", label: "Start and coordinate", cls: "c1" },
  { id: "research", label: "Research", cls: "c2" },
  { id: "strategy", label: "Strategy", cls: "c3" },
  { id: "campaigns", label: "Campaigns and content", cls: "c4" }
];

const SKILLS = [
  { id:"onboard", cat:"start", name:"Onboard", cmd:"/marketing:onboard",
    sum:"Builds the full business brief in a guided conversation and saves it to marketing-brief.md.",
    steps:[
      ["The business","What is sold, to whom, at what price, how it is delivered, and the revenue goal for marketing."],
      ["The customer","ICP, avatar, pains and desires in their words, objections, and a starter language bank."],
      ["The competitors","The 3 to 5 alternatives the buyer actually weighs, including doing nothing."],
      ["The market","Working TAM/SAM/SOM, the entry segment, and the rules of the category, with a confidence grade."],
      ["Positioning, offer, channels, voice, and numbers","The position line, the package, the main channel, the voice rules, and dated metrics."]
    ]},
  { id:"cmo", cat:"start", name:"Virtual CMO", cmd:"/marketing:cmo",
    sum:"Reads the brief, finds the weakest link, and coordinates the specialists into a prioritized plan.",
    steps:[
      ["Turn the goal into a number and a date","If that did not come up in the conversation, the CMO proposes both and confirms before moving on."],
      ["Diagnose the weakest link","Walks research, positioning, offer, channel, funnel, creative, and measurement, and stops at the first link that breaks."],
      ["Challenge the self-diagnosis","If you asked for an ad and the offer is still a guess, it says so from the brief."],
      ["Build the work plan","A sequence of 3 to 7 rounds, each with the specialist or the skill, the input, and the deliverable."],
      ["Run it or hand the plan back","You choose to run it now or receive the instructions. At the end, the weekly rhythm and the number to watch go in."]
    ]},
  { id:"marketing-audit", cat:"start", name:"Marketing audit", cmd:"/marketing:marketing-audit",
    sum:"Scores the marketing across 7 layers and returns a 90-day fix plan, ranked by impact.",
    steps:[
      ["Score seven layers","Research, positioning, offer, channels, funnel, creative, and measurement."],
      ["Rank the gaps","The order follows impact on revenue, not the easiest or most visible task."],
      ["Return the 90-day plan","The fix sequence, with what to attack first and what can wait."]
    ]},
  { id:"weekly-review", cat:"start", name:"Weekly review", cmd:"/marketing:weekly-review",
    sum:"Compares the numbers with the goal, diagnoses what broke, and sets the single focus for the week.",
    steps:[
      ["Build the week table","Each indicator with actual, plan, and the previous week. A missing number becomes a gap. It does not disappear."],
      ["Follow the biggest gap to the stage that broke","Name the stage, not only the symptom."],
      ["Separate noise from a trend","One bad week is passing weather. Three in the same direction call for a plan change."],
      ["Close last week's focus","Whatever was left half done either continues or is closed out loud."],
      ["Set ONE focus for the next week","The highest-impact action, with an owner and a definition of done by Friday."]
    ]},
  { id:"market-research-sprint", cat:"research", name:"Market research sprint", cmd:"/marketing:market-research-sprint",
    sum:"Maps the full market: size, segments, trends, channels, and spaces that are still thinly served.",
    steps:[
      ["Size the market","Size with the math in view and assumptions with a confidence grade."],
      ["Cut and rank segments","Picks the entry segment, where you actually start."],
      ["Read trends and time windows","What is rising, what is a fad, and what has already passed."],
      ["List channels and category rules","Where the buyer gathers, and what is table stakes versus a differentiator."],
      ["Point at the white space","Underserved niches, and write the picture into the brief."]
    ]},
  { id:"customer-deep-dive", cat:"research", name:"Customer deep dive", cmd:"/marketing:customer-deep-dive",
    sum:"Builds the customer picture (avatar, language, pains, and objections) in their own words.",
    steps:[
      ["Build the avatar","The day to day, the triggers, and the places where this person gets information."],
      ["Build the language bank","Literal phrases the copy should be born from, not paraphrases."],
      ["Rank the pains","By what they cost: intensity times frequency, in the buyer's voice."],
      ["Separate the stated objection from the real one","What the person says versus what actually blocks the purchase."],
      ["Write it into the brief","The customer section of marketing-brief.md is ready for the rest of the department."]
    ]},
  { id:"competitor-teardown", cat:"research", name:"Competitor teardown", cmd:"/marketing:competitor-teardown",
    sum:"Takes a competitor apart end to end and finishes with a concrete plan for how to beat them.",
    steps:[
      ["Profile the company","Model, prices, team signals, and recent launches."],
      ["Open the offer and the positioning","Package, guarantees, the position they claim, and the claims already crowded in the category."],
      ["Map the message and walk the funnel","The hooks they repeat, and the journey as a buyer sees it."],
      ["Look at public ad libraries","What is live and for how long: staying up usually signals spend."],
      ["Hunt weaknesses and write how to win","Complaints from their own customers, and the ground where their model cannot follow you."]
    ]},
  { id:"battlecard", cat:"research", name:"Sales battlecard", cmd:"/marketing:battlecard",
    sum:"A one-page card: when you win, when you lose, and how to answer each objection about this rival.",
    steps:[
      ["Gather the intelligence","Offer, price, positioning, and how sales against them actually ended, with a confidence grade."],
      ["Write when we win","The 3 to 5 conditions where you are genuinely the better choice, tied to a concrete difference."],
      ["Write when we lose","With honesty: that is what makes the team trust the rest of the card."],
      ["Prepare trap questions","Questions the seller plants early, backed by a verified weakness, never by a false premise."],
      ["Handle the objections and how to talk about the rival","Answers with evidence, and a short rule: specific, respectful, no trashing."]
    ]},
  { id:"research-to-brief", cat:"research", name:"Research into the brief", cmd:"/marketing:research-to-brief",
    sum:"Organizes loose research into the brief, with a confidence level on each finding and contradictions in view.",
    steps:[
      ["List the sources with a date","Recency matters when you grade confidence."],
      ["Extract what changes a decision","A number, a quote, and a pattern, routed to the right section of the brief."],
      ["Grade T1, T2, or T3","Source, estimate, or guess. A guess dressed up as data does not go in as fact."],
      ["Surface contradictions","It does not erase them and it does not average them: both versions stay on record to resolve."],
      ["Merge into the brief and report the delta","What went in, what changed grade, and the next piece of research that would strengthen the file most."]
    ]},

  { id:"positioning-workshop", cat:"strategy", name:"Positioning workshop", cmd:"/marketing:positioning-workshop",
    sum:"Defines the positioning line and tests it against the competitors already in the brief.",
    steps:[
      ["List the real alternatives","What the buyer does instead, including doing nothing or handling it in a spreadsheet."],
      ["List true differences","Cuts anything the customer does not value, however proud the team is of it."],
      ["Link difference, value, and who cares most","A difference only counts for the value it creates, and every value has a slice that feels it more."],
      ["Draft three candidate lines","In the form: for WHOM, against WHICH alternative, the DIFFERENCE, the PROOF."],
      ["Stress it, choose, and save","Tests against competitor claims, keeps the argument, and updates the brief."]
    ]},
  { id:"message-map", cat:"strategy", name:"Message map", cmd:"/marketing:message-map",
    sum:"A core message, three pillars with proof, and a list of phrases the brand does not use.",
    steps:[
      ["Distill one core message","Everything that comes after has to ladder up to it."],
      ["Support it with three pillars","Each pillar carries its proof: a pillar without evidence cannot hold copy."],
      ["Write the forbidden phrases","Jargon, hype, and the vocabulary this brand simply does not use."],
      ["Save the map in the brief","So every future piece is born aligned, not with everyone saying something different."]
    ]},
  { id:"offer-builder", cat:"strategy", name:"Offer builder", cmd:"/marketing:offer-builder",
    sum:"Builds the offer: result, package, price logic, guarantee, and urgency only if it is real.",
    steps:[
      ["Name the result the customer buys","The after, specific and honest, not the list of deliverables."],
      ["Build the value stack","Each item has to kill a named pain. Decoration comes out."],
      ["Set the price logic","Against the cost of the problem, the value of the result, and the nearest alternative."],
      ["Design the risk reversal","First the buyer's biggest fear, then the guarantee that cancels that fear."],
      ["Urgency only if it is real","No invented deadline. At the end, the offer summary page goes into the brief."]
    ]},
  { id:"objection-map", cat:"strategy", name:"Objection map", cmd:"/marketing:objection-map",
    sum:"Lists the objections, separates what the customer says from what they mean, and writes the answer to each.",
    steps:[
      ["Collect it literally","A paraphrase destroys the detail that diagnoses the block."],
      ["Separate the stated from the real","What sits under the sentence: price, risk, timing, credibility."],
      ["Rank by impact on revenue","The three that kill or delay the most deals get the deeper work."],
      ["Answer by leading with the answer","One direct sentence, the reframe, and the proof that already exists in the brief."],
      ["Decide where to kill each objection","FAQ, email, ad, or call, then save the library in the brief."]
    ]},
  { id:"channel-picker", cat:"strategy", name:"Channel picker", cmd:"/marketing:channel-picker",
    sum:"Picks one primary channel from evidence and builds the 90-day plan, with a kill criterion.",
    steps:[
      ["Build the list from evidence","Where the customer already gathers, not the channel of the moment or the one the team prefers."],
      ["Score on four axes","ICP presence, ability to execute, economics, and speed of signal."],
      ["Run the numbers on the finalists","How many sales the channel needs to generate, per month, to pay for itself, and whether that volume is plausible."],
      ["Commit to one primary channel","Two supporting channels at most, feeding the primary, not a second side bet."],
      ["Draw the 90 days","Setup, volume, scale or cut, with the it is working numbers defined before the spend."]
    ]},
  { id:"funnel-map", cat:"strategy", name:"Funnel map", cmd:"/marketing:funnel-map",
    sum:"Maps the funnel with real numbers, finds the leak that costs the most, and designs a testable fix.",
    steps:[
      ["Draw the funnel as it is","Stage by stage, with the numbers that actually exist, not the funnel you wish were on the slide."],
      ["Name the question at each stage","What the buyer needs to answer in order to move forward."],
      ["Find the most expensive leak","The hole that lets the most money escape, not the most visible one."],
      ["Design a single fix","Sized to test in about two weeks."]
    ]},
  { id:"kpi-tree", cat:"strategy", name:"KPI tree", cmd:"/marketing:kpi-tree",
    sum:"Defines the north-star metric, the indicators that pull it, and the one-page weekly dashboard.",
    steps:[
      ["Choose the north-star metric","The number that decides whether the week was won."],
      ["Break it into 3 to 5 drivers","Each with an owner and leading indicators."],
      ["Specify the weekly dashboard","One page, not a stack of reports nobody uses."],
      ["Name the metric that matters now","The immediate focus, so the team stops arguing about what winning means."]
    ]},
  { id:"experiment-backlog", cat:"strategy", name:"Experiment backlog", cmd:"/marketing:experiment-backlog",
    sum:"Lists growth tests with a score and designs the best five as real experiments.",
    steps:[
      ["Generate the queue from the brief","Hypotheses tied to evidence you already have, not to a growth fad."],
      ["Give an honest score","Prioritize with an explicit criterion, without inflating what is only easy to run."],
      ["Design the first five","A minimum viable test, with the decision rule written before you start."]
    ]},
  { id:"pricing-test", cat:"strategy", name:"Pricing test", cmd:"/marketing:pricing-test",
    sum:"Designs a price test without burning the trust of people who are already customers.",
    steps:[
      ["Set the baseline","Current price, conversion at that price, and revenue per prospect."],
      ["Write the hypothesis with evidence","Without the because, it is not time to test live. First, willingness-to-pay research."],
      ["Change ONE structure","Tier, anchor, or packaging, not three things at once."],
      ["Protect trust","New prospects. An existing customer is not repriced in the middle of the relationship without notice. A quoted price is honored."],
      ["Lock the decision rule first","What makes the new price become the price, what makes you revert, and the record in the brief."]
    ]},
  { id:"brand-voice", cat:"strategy", name:"Brand voice", cmd:"/marketing:brand-voice",
    sum:"Creates the voice guide from real brand writing, with rules, examples, and what never to use.",
    steps:[
      ["Audit the samples","If there are few, the profile is still born, marked as provisional."],
      ["Extract the patterns","What repeats in the writing that actually sounds like the brand."],
      ["Write do and don't rules","Each rule paired with a real line. A rule without an example is only an opinion."],
      ["Define the registers","How the voice loosens or tightens by format, and what never changes."],
      ["List banned words and calibrate","Three before and after rewrites, and the profile saved for the whole department to use."]
    ]},

  { id:"launch-plan", cat:"campaigns", name:"Launch plan", cmd:"/marketing:launch-plan",
    sum:"Builds the plan backward from the date, with assets, deadlines, channels, and a backup plan.",
    steps:[
      ["Start from the non-negotiable date","The plan walks backward, not we will figure it out along the way."],
      ["Lock the central idea","The argument of the launch, not only the list of posts."],
      ["List every asset with a deadline","The full inventory, with an owner and a delivery date."],
      ["Choreograph channel by channel","What goes into each front, and when."],
      ["Agree the mid-flight triggers","The backup plan is written now, before emotion takes over the launch."]
    ]},
  { id:"content-calendar", cat:"campaigns", name:"Content calendar", cmd:"/marketing:content-calendar",
    sum:"Thirty days of content by pillar and platform, with the first week's hooks already written.",
    steps:[
      ["Check the foundation","Without message pillars in the brief, the calendar becomes only a posting grid."],
      ["Set the week's mix","The mix follows what the funnel needs most right now, in each platform's native format."],
      ["Generate the idea bank","Cornerstone ideas, crossing pillar with pain, desire, or proof."],
      ["Lay out the 30 days","Pillar, journey stage, and the repurposing chain."],
      ["Prewrite week 1 hooks","So execution starts, instead of stopping at the spreadsheet."]
    ]},
  { id:"hook-factory", cat:"campaigns", name:"Hook factory", cmd:"/marketing:hook-factory",
    sum:"Generates 20 hooks for one topic, structure first, ranked, and with the reasoning.",
    steps:[
      ["Lock the topic and the audience","One subject, one slice, not twenty variations of the target."],
      ["Write from the structure","The hooks are born in proven categories, not from loose inspiration."],
      ["Get to 20","Enough volume to choose from, not to publish everything."],
      ["Rank them and show the reasoning","Why this one opens better than that one, so you can decide with a criterion."]
    ]},
  { id:"ad-scripts", cat:"campaigns", name:"Ad scripts", cmd:"/marketing:ad-scripts",
    sum:"Three video scripts, in distinct formats, with spoken lines, scene notes, and CTA variations.",
    steps:[
      ["Lock the angle","One sentence: the belief the ad installs, and for whom."],
      ["Choose three formats","The ones that fit the platform and the offer."],
      ["Write in blocks, with the literal line","Hook in the first three seconds, agitation, mechanism, and CTA."],
      ["Offer three hooks per script","Ranked: the hook is most of the ad."],
      ["Include scene notes and two CTAs","One direct and one lighter, with a 30 to 45 second runtime."]
    ]},
  { id:"creative-brief", cat:"campaigns", name:"Creative brief", cmd:"/marketing:creative-brief",
    sum:"A one-page brief so the designer or editor can execute with no question coming back.",
    steps:[
      ["Objective and audience insight","What the work needs to do, and the audience perception that supports it."],
      ["The one-sentence proposition","One idea only: what the piece needs to leave installed."],
      ["Proof, mandatories, and references","What must appear, what must not, and references that calibrate the tone."],
      ["Format specs","Size, duration, variations: enough to produce without an extra meeting."]
    ]},
  { id:"landing-page", cat:"campaigns", name:"Landing page", cmd:"/marketing:landing-page",
    sum:"Full landing copy, section by section, with a design note on each block.",
    steps:[
      ["Headline options and the opening","The promise and the mechanism, in the language of the brief."],
      ["Proof, offer, and objections","The full argument, not a thin wire with empty gaps."],
      ["FAQ and CTA blocks","Real buyer questions and the next step, repeated where it matters."],
      ["A design note per section","The copy arrives ready for the designer to build, not as an empty outline."]
    ]},
  { id:"email-sequence", cat:"campaigns", name:"Email sequence", cmd:"/marketing:email-sequence",
    sum:"A full sequence (welcome, nurture, launch, or reactivation) with one job per email.",
    steps:[
      ["Choose the sequence type","Welcome, nurture, launch, or reactivation."],
      ["Give each email a single job","Subject, body, and what that send needs to accomplish."],
      ["Write the full copy","Ready to go into the tool, not an outline of topics."],
      ["Set the timing","When each piece goes out, and why."]
    ]},
  { id:"lead-magnet-builder", cat:"campaigns", name:"Lead magnet", cmd:"/marketing:lead-magnet-builder",
    sum:"Chooses and writes a free asset that attracts someone who can become a customer, not a freebie collector.",
    steps:[
      ["Score ideas against the paid offer","The magnet has to point at the same purchase, not at a different audience."],
      ["Pick the winner and outline it","A clear structure before drafting."],
      ["Write the core content","The asset itself, not only the cover."],
      ["Write the capture and the promotion","The opt-in copy and the promotion copy that deliver the asset."]
    ]},
  { id:"repurpose", cat:"campaigns", name:"Repurpose", cmd:"/marketing:repurpose",
    sum:"Turns one strong piece into ten native versions for other platforms, rebuilt, not chopped up.",
    steps:[
      ["Inventory the ideas in the material","Each claim, story, number, method, or contrary thesis."],
      ["Rank what stands on its own","The best derivative usually comes from an idea in the middle, not from the original title."],
      ["Map the ten versions","Posts, email, carousel, short script, and hooks, on the channels in the brief."],
      ["Rebuild from the ground up","In the brand voice, with each platform's native CTA, and a sequence so the same idea does not hit the same audience twice in 48 hours."]
    ]},
  { id:"case-study-writer", cat:"campaigns", name:"Case study writer", cmd:"/marketing:case-study-writer",
    sum:"Turns a real customer result into a structured case, with a short version for social.",
    steps:[
      ["Inventory the raw material","Who the customer is, the before, what was done, the numbers with a time window, and the literal quotes."],
      ["Put the numbers to the test","Baseline, window, and what else was happening in the period. A number without a baseline does not go in as proof."],
      ["Write the case in the structure","Situation, the block, the intervention, numbers, and quotes."],
      ["Cut the social version","Hook, a three-beat arc, one number, and a CTA, rewritten for the feed, not merely shrunk."],
      ["Apply the naming rule","Respects what can and cannot be published, and what still needs permission."]
    ]},
  { id:"campaign-debrief", cat:"campaigns", name:"Campaign debrief", cmd:"/marketing:campaign-debrief",
    sum:"The after-action review: goal versus result, what to keep, change, or cut, and the lessons in the brief.",
    steps:[
      ["Recall the goal from before the launch","If it was never written down, that is already the first finding."],
      ["Put goal, result, and economics side by side","Hitting the number and still being unviable is a result too."],
      ["Split the campaign into elements","Angle, audience, offer, format, hook, channel, page, and timing."],
      ["Diagnose element by element","Where the data cannot isolate the cause, it is recorded as we cannot tell, not a guess dressed up as a lesson."],
      ["Decide keep, cut, or change","With the portable lessons saved in the brief so the next campaign starts cheaper."]
    ]}
];


const DEPTS = [
  { id:"mr", name:"Market research", count:"10 specialists",
    blurb:"Size, segments, demand, price, channels, and the space nobody has occupied well yet.",
    agents:[
      ["market-sizer","TAM, SAM, and SOM with the assumptions tracked and a sanity check."],
      ["trend-tracker","What is rising or falling, the time window, and what is a trend versus a fad."],
      ["whitespace-finder","Underserved niches and unsolved needs worth owning."],
      ["pricing-researcher","How the market charges, willingness to pay, and where the pricing power sits."]
    ]},
  { id:"ci", name:"Competitor intelligence", count:"10 specialists",
    blurb:"Dossier, offer, message, funnel, and the weaknesses their own customers already say out loud.",
    agents:[
      ["competitor-profiler","The full dossier on one competitor."],
      ["weakness-hunter","Exploitable weaknesses their own customers already complain about."],
      ["ad-library-analyst","What they run in public ad libraries. Staying up usually signals spend."],
      ["funnel-walker","Walks their funnel as a buyer and documents the machine."]
    ]},
  { id:"cr", name:"Customer research", count:"10 specialists",
    blurb:"ICP, avatar, pains, desires, and the bank of literal phrases the copy should be born from.",
    agents:[
      ["icp-architect","The ideal customer profile from real wins and losses."],
      ["voc-miner","The bank of literal language the copy should be written in."],
      ["pain-mapper","Pains ranked by intensity and frequency, in the buyer's words."],
      ["objection-collector","Stated versus real objections, and the proof that dissolves each one."]
    ]},
  { id:"ms", name:"Marketing strategy", count:"10 specialists",
    blurb:"Positioning, offer, channel, funnel, launch, budget, metrics, and experiments.",
    agents:[
      ["positioning-strategist","The position you can actually win, and the argument behind it."],
      ["offer-strategist","The offer: result, package, price logic, risk reversal, and real urgency."],
      ["channel-strategist","One primary channel until it works, chosen with evidence."],
      ["metrics-architect","The metrics tree: the north star, the drivers, and the weekly dashboard."]
    ]},
  { id:"cs", name:"Creative strategy", count:"10 specialists",
    blurb:"Angles, hooks, scripts, copy, email, social, and the brief a designer can execute alone.",
    agents:[
      ["hook-writer","Hooks that stop the scroll, structure first, then the ranking."],
      ["ad-scriptwriter","Video scripts in named formats, with scene notes."],
      ["sales-copywriter","Direct-response copy, in the buyer's language."],
      ["creative-briefer","Briefs a designer can execute without one more meeting."]
    ]}
];

const FAQS = [
  { q:"Do I need Claude Code?",
    a:"The package goes furthest in Claude Code: that is where the specialist agents, the /marketing: commands, and the automatic brief loading were built to run. The skills (SKILL.md files) and the 150 prompts also work in Claude (claude.ai and the desktop app), in Grok Bot, and in other agents that read SKILL.md files, as instructions. Claude Code is a paid tool on its own and is not included in the package." },
  { q:"What language are the files in?",
    a:"This is the original version: skills, agents, and prompts are in English. This page is in English. Commands stay in the /marketing:name format. When you talk to the agents in another language, they reply in that language." },
  { q:"How do I get access after I pay?",
    a:"After payment, you receive the package and the installation steps. It is a set of files to install in Claude Code. The natural path is a download, not an online dashboard, because the skills need to run locally on your machine." },
  { q:"Do I need to know how to code?",
    a:"No. You install the package in Claude Code and run the flows by command, such as /marketing:onboard or /marketing:hook-factory. Some familiarity with Claude Code helps, but the marketing work does not require writing code." },
  { q:"What is the single brief?",
    a:"It is the marketing-brief.md file: business, market, customer, competitors, positioning, offer, channels, voice, and numbers. The /marketing:onboard skill builds that file in a guided conversation. A session-start hook loads the brief automatically, so you do not re-explain the business in every chat." },
  { q:"Does this replace my strategy?",
    a:"No. The department does the heavy lifting: research, drafts, plans, and assets. Strategy and decisions stay with you. The virtual CMO names one bottleneck and proposes the next step. You approve it." },
  { q:"Is there a guarantee?",
    a:"Yes. You have a 7-day guarantee. If you do not like it, request a refund through Kiwify and you get 100% of the payment back." }
];

document.getElementById("y").textContent = new Date().getFullYear();

document.querySelectorAll("[data-buy]").forEach(el => {
  el.setAttribute("href", BUY_URL);
});

/* AddToCart on checkout clicks. Same-tab navigations wait briefly so the pixel can send. */
const CART_NAV_DELAY_MS = 300;
function isCheckoutLink(el) {
  if (!el || el.tagName !== "A") return false;
  if (el.hasAttribute("data-buy")) return true;
  try {
    return new URL(el.href, window.location.href).hostname === "pay.kiwify.com.br";
  } catch (_) {
    return false;
  }
}
function trackAddToCartAndGo(event) {
  const el = event.currentTarget;
  if (!isCheckoutLink(el)) return;
  try {
    if (typeof window.rdt === "function") window.rdt("track", "AddToCart");
  } catch (_) {}
  if (event.type !== "click") return;
  if (event.defaultPrevented) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (typeof event.button === "number" && event.button !== 0) return;
  if (el.target && el.target !== "_self") return;
  const href = el.href;
  if (!href) return;
  event.preventDefault();
  window.setTimeout(() => { window.location.assign(href); }, CART_NAV_DELAY_MS);
}
document.querySelectorAll("a[data-buy], a[href*='pay.kiwify.com.br']").forEach(el => {
  el.addEventListener("click", trackAddToCartAndGo);
  el.addEventListener("auxclick", trackAddToCartAndGo);
});

const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const links = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  links.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}));
const progress = document.getElementById("progress");
const sticky = document.getElementById("stickyCta");
const hero = document.getElementById("top");
function onScroll(){
  nav.classList.toggle("scrolled", window.scrollY > 8);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  const passed = hero.getBoundingClientRect().bottom < 80;
  if (passed) { sticky.hidden = false; sticky.classList.add("show"); }
  else { sticky.classList.remove("show"); sticky.hidden = true; }
}
onScroll();
window.addEventListener("scroll", onScroll, { passive:true });

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduce && "IntersectionObserver" in window){
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold:.12, rootMargin:"0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
}

const grid = document.getElementById("skillGrid");
const filtersEl = document.getElementById("filters");
const searchEl = document.getElementById("skillSearch");
let activeCat = "all";
let query = "";

CATS.forEach(c => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "filter";
  b.textContent = c.label;
  b.dataset.cat = c.id;
  b.setAttribute("aria-pressed", c.id === "all" ? "true" : "false");
  b.addEventListener("click", () => {
    activeCat = c.id;
    filtersEl.querySelectorAll(".filter").forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
    renderSkills();
  });
  filtersEl.appendChild(b);
});

function catMeta(id){ return CATS.find(c => c.id === id) || { label:"", cls:"" }; }

function renderSkills(){
  const q = query.trim().toLowerCase();
  const list = SKILLS.filter(s => {
    if (activeCat !== "all" && s.cat !== activeCat) return false;
    if (!q) return true;
    return (s.name + " " + s.cmd + " " + s.sum).toLowerCase().includes(q);
  });
  grid.innerHTML = "";
  if (!list.length){
    grid.innerHTML = "<p class='empty'>No skills match that search. Try another term or clear the filter.</p>";
    return;
  }
  const frag = document.createDocumentFragment();
  list.forEach(s => {
    const cat = catMeta(s.cat);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "card skill";
    btn.innerHTML = `<span class="cat-pill ${cat.cls}">${cat.label}</span>
      <span class="cmd">${s.cmd}</span>
      <h3>${s.name}</h3>
      <p>${s.sum}</p>
      <span class="more">See the steps <svg width="12" height="12" aria-hidden="true"><use href="#i-arrow"/></svg></span>`;
    btn.addEventListener("click", () => openModal(s));
    frag.appendChild(btn);
  });
  grid.appendChild(frag);
}
searchEl.addEventListener("input", e => { query = e.target.value; renderSkills(); });
renderSkills();

const bg = document.getElementById("modalBg");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
let lastFocus = null;
function openModal(s){
  lastFocus = document.activeElement;
  const cat = catMeta(s.cat);
  const pill = document.getElementById("modalCat");
  pill.className = "cat-pill " + cat.cls;
  pill.textContent = cat.label;
  document.getElementById("modalCmd").textContent = s.cmd;
  document.getElementById("modalTitle").textContent = s.name;
  document.getElementById("modalSum").textContent = s.sum;
  const ol = document.getElementById("modalSteps");
  ol.innerHTML = s.steps.map(([title,d]) => `<li><strong>${title}.</strong> ${d}</li>`).join("");
  bg.hidden = false;
  bg.classList.add("open");
  document.body.style.overflow = "hidden";
  modal.focus();
}
function closeModal(){
  bg.classList.remove("open");
  bg.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
modalClose.addEventListener("click", closeModal);
bg.addEventListener("click", e => { if (e.target === bg) closeModal(); });
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && bg.classList.contains("open")) closeModal();
});

const tabs = document.getElementById("deptTabs");
const panel = document.getElementById("deptPanel");
function renderDept(i){
  DEPTS.forEach((d, idx) => {
    const t = tabs.children[idx];
    if (t) t.setAttribute("aria-selected", idx === i ? "true" : "false");
  });
  const d = DEPTS[i];
  panel.innerHTML = `<h3>${d.name}</h3><p class="sub">${d.blurb} A sample of 4 of the ${d.count}.</p>
    <div class="agent-list">${d.agents.map(([n,s]) => `<div class="agent"><code>${n}</code><p>${s}</p></div>`).join("")}</div>
    <p class="dept-more">The other specialists in this department come in the package, along with these.</p>`;
}
DEPTS.forEach((d, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "dept-tab";
  b.setAttribute("role","tab");
  b.setAttribute("aria-selected", i === 0 ? "true" : "false");
  b.id = "tab-" + d.id;
  b.innerHTML = `<small>${d.count}</small><b>${d.name}</b>`;
  b.addEventListener("click", () => renderDept(i));
  tabs.appendChild(b);
});
renderDept(0);

const faqList = document.getElementById("faqList");
FAQS.forEach((f, i) => {
  const wrap = document.createElement("div");
  wrap.className = "faq";
  const id = "faq-a-" + i;
  wrap.innerHTML = `<button type="button" aria-expanded="false" aria-controls="${id}"><span>${f.q}</span><svg aria-hidden="true"><use href="#i-plus"/></svg></button>
    <div class="ans" id="${id}"><p>${f.a}</p></div>`;
  const btn = wrap.querySelector("button");
  const ans = wrap.querySelector(".ans");
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    faqList.querySelectorAll("button").forEach(b => b.setAttribute("aria-expanded","false"));
    faqList.querySelectorAll(".ans").forEach(a => a.classList.remove("open"));
    if (!open){ btn.setAttribute("aria-expanded","true"); ans.classList.add("open"); }
  });
  faqList.appendChild(wrap);
});

(function(){
  const c = document.getElementById("net");
  if (!c || reduce) return;
  const ctx = c.getContext("2d");
  let w, h, pts, raf;
  function resize(){
    const r = c.parentElement.getBoundingClientRect();
    w = c.width = Math.floor(r.width * devicePixelRatio);
    h = c.height = Math.floor(r.height * devicePixelRatio);
    c.style.width = r.width + "px";
    c.style.height = r.height + "px";
    const n = Math.min(70, Math.floor((r.width * r.height) / 18000));
    pts = Array.from({length:n}, () => ({
      x: Math.random()*w, y: Math.random()*h,
      vx: (Math.random()-.5)*0.22*devicePixelRatio,
      vy: (Math.random()-.5)*0.22*devicePixelRatio
    }));
  }
  function tick(){
    ctx.clearRect(0,0,w,h);
    const max = 140 * devicePixelRatio;
    for (let i=0;i<pts.length;i++){
      const pt = pts[i];
      pt.x += pt.vx; pt.y += pt.vy;
      if (pt.x<0||pt.x>w) pt.vx*=-1;
      if (pt.y<0||pt.y>h) pt.vy*=-1;
      ctx.beginPath();
      ctx.arc(pt.x,pt.y,1.4*devicePixelRatio,0,Math.PI*2);
      ctx.fillStyle="rgba(34,211,238,.55)";
      ctx.fill();
      for (let j=i+1;j<pts.length;j++){
        const q = pts[j];
        const dx=pt.x-q.x, dy=pt.y-q.y, d=Math.hypot(dx,dy);
        if (d<max){
          ctx.beginPath();
          ctx.moveTo(pt.x,pt.y); ctx.lineTo(q.x,q.y);
          ctx.strokeStyle=`rgba(59,130,246,${0.16*(1-d/max)})`;
          ctx.lineWidth=devicePixelRatio;
          ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(tick);
  }
  resize();
  tick();
  window.addEventListener("resize", resize, { passive:true });
})();

// hero word rotators (title + eyebrow, in sync)
(function(){
  var groups=[].map.call(document.querySelectorAll('.rotator'),function(g){return g.querySelectorAll('.rot-item');}).filter(function(x){return x.length>1;});
  if(!groups.length) return;
  var i=0;
  setInterval(function(){
    var n=(i+1)%groups[0].length;
    groups.forEach(function(items){
      var cur=items[i]; cur.classList.remove('is-on'); cur.classList.add('is-out');
      setTimeout(function(){cur.classList.remove('is-out');},600);
      items[n].classList.add('is-on');
    });
    i=n;
  },2600);
})();
