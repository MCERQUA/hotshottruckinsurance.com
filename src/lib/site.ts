// Centralized site data — hot shot trucking insurance

export const SITE = {
  name: "Hot Shot Truck Insurance",
  legalName: "Hot Shot Truck Insurance (by Contractors Choice Agency)",
  domain: "hotshottruckinsurance.com",
  url: "https://hotshottruckinsurance.com",
  tagline: "Insurance for Hot Shot Truckers & Owner-Operators",
  description:
    "Specialized commercial insurance for hot shot truckers and owner-operators — motor carrier authority, cargo liability, physical damage, bobtail, trailer interchange, non-trucking liability, general liability, and occupational accident. FMCSA-compliant programs for 1-ton pickups, gooseneck trailers, and flatbeds. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Hot Shot",
  brandSub: "Truck Insurance",
  tagline: "Insurance for Hot Shot Truckers & Owner-Operators",
  subTagline: "FMCSA-compliant programs for 1-ton pickups, gooseneck trailers & flatbeds",
  nicheShort: "hot shot trucker",
  nicheShortCap: "Hot Shot Trucker",
  nichePlural: "hot shot truckers",
  nichePluralCap: "Hot Shot Truckers",
  operator: "hot shot operation",
  operatorCap: "Hot Shot Operation",
  industry: "hot shot trucking",
  industryCap: "Hot Shot Trucking",
  audience: "owner-operators",
  audienceCap: "Owner-Operators",
  ownerTitle: "hot shot trucker",
  regionPill: "Texas · Oklahoma · National",
  ctaMain: "Get a Hot Shot Quote",
  ctaSecondary: "Talk to an Agent",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "motor-carrier-authority",
    title: "Motor Carrier Authority Coverage",
    description:
      "FMCSA-required filings and the underlying cargo liability your MC number demands. We handle the MCS-90 endorsement, BMC-91/91X filings, and match your authority type to the right coverage limits so you stay legal and loaded.",
    icon: "FileSignature",
  },
  {
    slug: "cargo-insurance",
    title: "Cargo Insurance",
    description:
      "Protects the freight you haul from pickup to delivery — theft, collision damage, loading/unloading accidents, and sudden physical loss. Broad form cargo policies for flatbed, gooseneck, step-deck, and enclosed loads.",
    icon: "Package",
  },
  {
    slug: "physical-damage",
    title: "Physical Damage Coverage",
    description:
      "Comprehensive and collision for your 1-ton pickup, dually, and trailer. We insure your rig at stated value or ACV — including custom sleeper cabs, toolboxes, fifth-wheel hitches, and gooseneck ball setups.",
    icon: "ShieldCheck",
  },
  {
    slug: "bobtail-insurance",
    title: "Bobtail Insurance",
    description:
      "Liability protection when you operate your truck without a trailer — between loads, deadheading, or repositioning. Fills the gap your motor-carrier policy leaves open when you\u2019re off dispatch.",
    icon: "Truck",
  },
  {
    slug: "trailer-interchange",
    title: "Trailer Interchange",
    description:
      "Physical damage coverage for trailers you don\u2019t own but haul under interchange agreements. Essential for hot shots who use broker-assigned trailers, rental flatbeds, or shared equipment.",
    icon: "Layers",
  },
  {
    slug: "non-trucking-liability",
    title: "Non-Trucking Liability",
    description:
      "Covers your liability exposure when using your truck for personal, non-business purposes — commuting, errands, or time off between hauls. Required by most motor carriers for leased owner-operators.",
    icon: "Car",
  },
  {
    slug: "general-liability",
    title: "General Liability",
    description:
      "Business liability protection beyond your truck — covering third-party bodily injury and property damage from your loading operations, dock presence, and daily business activities as an independent carrier.",
    icon: "Umbrella",
  },
  {
    slug: "occupational-accident",
    title: "Occupational Accident",
    description:
      "Injury coverage for independent owner-operators who aren\u2019t covered by workers\u2019 compensation. Pays medical bills, disability income, and accidental death benefits when you\u2019re hurt on the job.",
    icon: "Users",
  },
] as const;

export const LOCATIONS = [
  {
    slug: "texas",
    name: "Texas",
    state: "TX",
    region: "Permian Basin · Gulf Coast · DFW",
    metaTitle: "Hot Shot Truck Insurance Texas | TX Owner-Operator Coverage",
    metaDescription: "Hot shot trucking insurance in Texas — cargo, physical damage, bobtail, and FMCSA authority filings for TX owner-operators. Fast quotes, A-rated carriers.",
    h1: "Hot Shot Truck Insurance in Texas",
    intro: "Texas is the hottest hot-shot market in the country — Permian Basin oil-field loads, Gulf Coast petrochemical hauls, and DFW freight lanes keep Texas owner-operators busy year-round. We insure 1-ton pickups, gooseneck rigs, and flatbeds across the Lone Star State with FMCSA-compliant programs and fast certificate turnaround.",
  },
  {
    slug: "oklahoma",
    name: "Oklahoma",
    state: "OK",
    region: "SCOOP · STACK · OKC Metro",
    metaTitle: "Hot Shot Truck Insurance Oklahoma | OK Carrier Coverage",
    metaDescription: "Oklahoma hot shot trucking insurance — cargo liability, motor carrier authority filings, and physical damage for OK owner-operators. Licensed in all 50 states.",
    h1: "Hot Shot Truck Insurance in Oklahoma",
    intro: "Oklahoma's oil and gas plays — SCOOP, STACK, and Anadarko Basin — generate constant demand for hot-shot freight. We write cargo, authority, and physical damage programs for Oklahoma owner-operators running equipment loads, pipe, and oilfield supplies across the state.",
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    state: "LA",
    region: "Baton Rouge · Lake Charles · Shreveport",
    metaTitle: "Hot Shot Truck Insurance Louisiana | LA Carrier Programs",
    metaDescription: "Louisiana hot shot insurance — petrochemical hauls, oilfield supply, and port freight. FMCSA filings and cargo for LA owner-operators.",
    h1: "Hot Shot Truck Insurance in Louisiana",
    intro: "Louisiana's petrochemical corridor along the Mississippi and active oilfield work in the northwest keep hot-shot operators hauling year-round. We insure cargo, physical damage, and authority exposure for LA-based carriers from Baton Rouge to Shreveport.",
  },
  {
    slug: "colorado",
    name: "Colorado",
    state: "CO",
    region: "DJ Basin · Piceance · I-70 Corridor",
    metaTitle: "Hot Shot Truck Insurance Colorado | CO Owner-Operator Coverage",
    metaDescription: "Colorado hot shot trucking insurance — DJ Basin and Piceance oilfield loads, mountain freight, and FMCSA filings for CO owner-operators.",
    h1: "Hot Shot Truck Insurance in Colorado",
    intro: "From the DJ Basin oilfield to I-70 mountain freight runs, Colorado hot-shot operators face diverse terrain and cargo types. We write FMCSA-compliant programs for Colorado-based carriers handling oil and gas, agriculture, and time-sensitive industrial loads.",
  },
  {
    slug: "north-dakota",
    name: "North Dakota",
    state: "ND",
    region: "Williston Basin · Bakken Shale",
    metaTitle: "Hot Shot Truck Insurance North Dakota | Bakken Carrier Coverage",
    metaDescription: "North Dakota hot shot insurance for Bakken and Williston Basin operations — cargo, physical damage, and authority coverage for ND owner-operators.",
    h1: "Hot Shot Truck Insurance in North Dakota",
    intro: "The Bakken Shale keeps North Dakota hot-shot operators running heavy loads across frozen roads and wide-open terrain. Our programs cover 1-ton pickups and gooseneck rigs with physical damage, cargo, and FMCSA authority filings for ND-based carriers.",
  },
  {
    slug: "wyoming",
    name: "Wyoming",
    state: "WY",
    region: "Powder River Basin · Green River",
    metaTitle: "Hot Shot Truck Insurance Wyoming | WY Owner-Operator Programs",
    metaDescription: "Wyoming hot shot trucking insurance — Powder River Basin energy loads, ranching freight, and FMCSA coverage for WY owner-operators.",
    h1: "Hot Shot Truck Insurance in Wyoming",
    intro: "Wyoming's energy sector — coal, oil, natural gas, and wind — generates steady hot-shot demand across remote basins. We write cargo and physical damage programs for Wyoming carriers handling Powder River Basin energy loads and ranching freight.",
  },
  {
    slug: "kansas",
    name: "Kansas",
    state: "KS",
    region: "Wichita · Kansas City Metro",
    metaTitle: "Hot Shot Truck Insurance Kansas | KS Carrier Coverage",
    metaDescription: "Kansas hot shot insurance — agriculture, manufacturing, and freight corridor coverage for KS owner-operators. FMCSA filings and fast quotes.",
    h1: "Hot Shot Truck Insurance in Kansas",
    intro: "Kansas sits at the crossroads of major freight corridors and agricultural supply chains. We insure Kansas hot-shot operators hauling farm equipment, industrial parts, and oilfield supply with comprehensive cargo and authority programs.",
  },
  {
    slug: "new-mexico",
    name: "New Mexico",
    state: "NM",
    region: "Permian Extension · Four Corners",
    metaTitle: "Hot Shot Truck Insurance New Mexico | NM Owner-Operator Coverage",
    metaDescription: "New Mexico hot shot trucking insurance — Permian Basin extension and Four Corners oilfield coverage for NM owner-operators. Fast FMCSA filings.",
    h1: "Hot Shot Truck Insurance in New Mexico",
    intro: "New Mexico\u2019s share of the Permian Basin and Four Corners energy production keeps hot-shot operators busy with oilfield supply and equipment hauls. We write FMCSA-compliant programs for NM-based carriers with cargo, physical damage, and authority coverage.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "FMCSA authority specialists", icon: "FileSignature" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const SOCIAL = {
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",
} as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Hot shot operators insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring commercial truckers", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "I run a 1-ton dually with a 40-foot gooseneck. Every agent I called wanted to write it as a regular pickup. Hot Shot Truck Insurance actually understood bobtail vs. non-trucking vs. cargo and built a program that fits how I actually operate. First real apples-to-apples quote I\u2019ve gotten.",
    name: "Derek M.",
    role: "Owner-Operator",
    location: "Texas",
  },
  {
    quote: "Freight broker required MCS-90 and a $100K cargo limit in 24 hours or I lost the lane. These guys filed authority endorsements and had my certificate of insurance same-day. Nobody else could move that fast.",
    name: "Stephanie R.",
    role: "Hot Shot Carrier",
    location: "Oklahoma",
  },
  {
    quote: "A trailer I was hauling under interchange got sideswiped at a fuel stop. Owner came after me for the damage. My trailer interchange policy with CCA covered the repair completely. Saved me $18,000 out of pocket.",
    name: "Tony L.",
    role: "Independent Operator",
    location: "Louisiana",
  },
] as const;
