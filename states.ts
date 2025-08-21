export interface StateData {
  name: string;
  slug: string;
  url: string;
  phone?: string;
  email?: string;
  address?: string;
  description?: string;
  stats?: {
    totalAmount?: string;
    properties?: string;
    avgClaim?: string;
  };
}

export const statesData: StateData[] = [
  {
    name: "Alabama",
    slug: "alabama",
    url: "https://moneyquestalabama.com/",
    phone: "(334) 242-7800",
    description: "Search the Alabama state database for unclaimed property and missing money.",
    stats: { totalAmount: "$400M+", properties: "2.5M+", avgClaim: "$160" }
  },
  {
    name: "Alaska",
    slug: "alaska",
    url: "https://unclaimedproperty.alaska.gov/",
    phone: "(907) 465-4633",
    description: "Search the Alaska state database for unclaimed property and missing money.",
    stats: { totalAmount: "$50M+", properties: "150K+", avgClaim: "$333" }
  },
  {
    name: "Arizona",
    slug: "arizona",
    url: "https://azunclaimed.gov/",
    phone: "(602) 542-2251",
    description: "Search the Arizona state database for unclaimed property and missing money.",
    stats: { totalAmount: "$900M+", properties: "3.2M+", avgClaim: "$281" }
  },
  {
    name: "Arkansas",
    slug: "arkansas",
    url: "https://claimitar.com/",
    phone: "(501) 682-6000",
    description: "Search the Arkansas state database for unclaimed property and missing money.",
    stats: { totalAmount: "$300M+", properties: "1.8M+", avgClaim: "$167" }
  },
  {
    name: "California",
    slug: "california",
    url: "https://ucpi.sco.ca.gov/",
    phone: "(916) 445-8318",
    email: "sco.unclaimedproperty@sco.ca.gov",
    address: "California State Controller's Office\nUnclaimed Property Division\nP.O. Box 942850\nSacramento, CA 94250-5872",
    description: "Search the California state database for unclaimed property and missing money.",
    stats: { totalAmount: "$10.2B+", properties: "49M+", avgClaim: "$289" }
  },
  {
    name: "Colorado",
    slug: "colorado",
    url: "https://colorado.findyourunclaimedproperty.com/",
    phone: "(303) 894-2842",
    description: "Search the Colorado state database for unclaimed property and missing money.",
    stats: { totalAmount: "$700M+", properties: "2.8M+", avgClaim: "$250" }
  },
  {
    name: "Connecticut",
    slug: "connecticut",
    url: "https://www.ctbiglist.com/",
    phone: "(860) 702-3050",
    description: "Search the Connecticut state database for unclaimed property and missing money.",
    stats: { totalAmount: "$650M+", properties: "2.1M+", avgClaim: "$310" }
  },
  {
    name: "Delaware",
    slug: "delaware",
    url: "https://revenue.delaware.gov/services/unclaimed-property/",
    phone: "(302) 577-8200",
    description: "Search the Delaware state database for unclaimed property and missing money.",
    stats: { totalAmount: "$120M+", properties: "400K+", avgClaim: "$300" }
  },
  {
    name: "District of Columbia",
    slug: "district-of-columbia",
    url: "https://cfo.dc.gov/service/unclaimed-property-search",
    phone: "(202) 727-6055",
    description: "Search the District of Columbia database for unclaimed property and missing money.",
    stats: { totalAmount: "$200M+", properties: "500K+", avgClaim: "$400" }
  },
  {
    name: "Florida",
    slug: "florida",
    url: "https://www.fltreasurehunt.org/",
    phone: "(850) 413-5555",
    description: "Search the Florida state database for unclaimed property and missing money.",
    stats: { totalAmount: "$2.3B+", properties: "12M+", avgClaim: "$192" }
  },
  {
    name: "Georgia",
    slug: "georgia",
    url: "https://etax.dor.ga.gov/incsrch_web/",
    phone: "(404) 724-0222",
    description: "Search the Georgia state database for unclaimed property and missing money.",
    stats: { totalAmount: "$1.1B+", properties: "5.2M+", avgClaim: "$212" }
  },
  {
    name: "Hawaii",
    slug: "hawaii",
    url: "https://unclaimedproperty.hawaii.gov/",
    phone: "(808) 586-1589",
    description: "Search the Hawaii state database for unclaimed property and missing money.",
    stats: { totalAmount: "$180M+", properties: "600K+", avgClaim: "$300" }
  },
  {
    name: "Idaho",
    slug: "idaho",
    url: "https://tax.idaho.gov/i-1036.cfm",
    phone: "(208) 334-7623",
    description: "Search the Idaho state database for unclaimed property and missing money.",
    stats: { totalAmount: "$90M+", properties: "400K+", avgClaim: "$225" }
  },
  {
    name: "Illinois",
    slug: "illinois",
    url: "https://icash.illinoistreasurer.gov/",
    phone: "(217) 785-6998",
    description: "Search the Illinois state database for unclaimed property and missing money.",
    stats: { totalAmount: "$3.5B+", properties: "15M+", avgClaim: "$233" }
  },
  {
    name: "Indiana",
    slug: "indiana",
    url: "https://indianaunclaimed.gov/",
    phone: "(317) 232-6348",
    description: "Search the Indiana state database for unclaimed property and missing money.",
    stats: { totalAmount: "$800M+", properties: "3.5M+", avgClaim: "$229" }
  },
  {
    name: "Iowa",
    slug: "iowa",
    url: "https://greatiowatreasurehunt.com/",
    phone: "(515) 281-5368",
    description: "Search the Iowa state database for unclaimed property and missing money.",
    stats: { totalAmount: "$350M+", properties: "1.5M+", avgClaim: "$233" }
  },
  {
    name: "Kansas",
    slug: "kansas",
    url: "https://www.kansascash.com/",
    phone: "(785) 296-4165",
    description: "Search the Kansas state database for unclaimed property and missing money.",
    stats: { totalAmount: "$400M+", properties: "1.8M+", avgClaim: "$222" }
  },
  {
    name: "Kentucky",
    slug: "kentucky",
    url: "https://treasury.ky.gov/UnclaimedProperty/",
    phone: "(502) 564-4722",
    description: "Search the Kentucky state database for unclaimed property and missing money.",
    stats: { totalAmount: "$450M+", properties: "2.1M+", avgClaim: "$214" }
  },
  {
    name: "Louisiana",
    slug: "louisiana",
    url: "https://www.treasury.state.la.us/unclaimed-property",
    phone: "(225) 219-9400",
    description: "Search the Louisiana state database for unclaimed property and missing money.",
    stats: { totalAmount: "$600M+", properties: "2.8M+", avgClaim: "$214" }
  },
  {
    name: "Maine",
    slug: "maine",
    url: "https://www.maine.gov/treasurer/unclaimed/",
    phone: "(207) 624-7470",
    description: "Search the Maine state database for unclaimed property and missing money.",
    stats: { totalAmount: "$180M+", properties: "700K+", avgClaim: "$257" }
  },
  {
    name: "Maryland",
    slug: "maryland",
    url: "https://interactive.marylandtaxes.gov/individuals/iFile/UCP/SearchPublic.aspx",
    phone: "(410) 767-1700",
    description: "Search the Maryland state database for unclaimed property and missing money.",
    stats: { totalAmount: "$800M+", properties: "3.2M+", avgClaim: "$250" }
  },
  {
    name: "Massachusetts",
    slug: "massachusetts",
    url: "https://www.findmassmoney.com/",
    phone: "(617) 367-0400",
    description: "Search the Massachusetts state database for unclaimed property and missing money.",
    stats: { totalAmount: "$2.8B+", properties: "8.5M+", avgClaim: "$329" }
  },
  {
    name: "Michigan",
    slug: "michigan",
    url: "https://unclaimedproperty.michigan.gov/",
    phone: "(517) 636-5320",
    description: "Search the Michigan state database for unclaimed property and missing money.",
    stats: { totalAmount: "$1.8B+", properties: "6.2M+", avgClaim: "$290" }
  },
  {
    name: "Minnesota",
    slug: "minnesota",
    url: "https://mn.gov/commerce/consumers/your-money/missing-money/",
    phone: "(651) 539-1600",
    description: "Search the Minnesota state database for unclaimed property and missing money.",
    stats: { totalAmount: "$800M+", properties: "2.8M+", avgClaim: "$286" }
  },
  {
    name: "Mississippi",
    slug: "mississippi",
    url: "https://www.treasury.ms.gov/for-citizens/unclaimed-property/",
    phone: "(601) 359-3600",
    description: "Search the Mississippi state database for unclaimed property and missing money.",
    stats: { totalAmount: "$250M+", properties: "1.2M+", avgClaim: "$208" }
  },
  {
    name: "Missouri",
    slug: "missouri",
    url: "https://showmemoney.com/",
    phone: "(573) 751-0123",
    description: "Search the Missouri state database for unclaimed property and missing money.",
    stats: { totalAmount: "$1B+", properties: "4.5M+", avgClaim: "$222" }
  },
  {
    name: "Montana",
    slug: "montana",
    url: "https://unclaimedproperty.mt.gov/",
    phone: "(406) 444-6900",
    description: "Search the Montana state database for unclaimed property and missing money.",
    stats: { totalAmount: "$70M+", properties: "350K+", avgClaim: "$200" }
  },
  {
    name: "Nebraska",
    slug: "nebraska",
    url: "https://treasurer.nebraska.gov/up",
    phone: "(402) 471-8497",
    description: "Search the Nebraska state database for unclaimed property and missing money.",
    stats: { totalAmount: "$200M+", properties: "900K+", avgClaim: "$222" }
  },
  {
    name: "Nevada",
    slug: "nevada",
    url: "https://nevadatreasurer.gov/UnclaimedProperty/Citizens/SearchForProperty/",
    phone: "(775) 684-5600",
    description: "Search the Nevada state database for unclaimed property and missing money.",
    stats: { totalAmount: "$500M+", properties: "2.1M+", avgClaim: "$238" }
  },
  {
    name: "New Hampshire",
    slug: "new-hampshire",
    url: "https://www.nh.gov/treasury/divisions/abandoned-property.htm",
    phone: "(603) 271-2621",
    description: "Search the New Hampshire state database for unclaimed property and missing money.",
    stats: { totalAmount: "$150M+", properties: "650K+", avgClaim: "$231" }
  },
  {
    name: "New Jersey",
    slug: "new-jersey",
    url: "https://www.state.nj.us/treasury/taxation/unclaimedproperty/",
    phone: "(609) 292-9200",
    description: "Search the New Jersey state database for unclaimed property and missing money.",
    stats: { totalAmount: "$2.2B+", properties: "7.8M+", avgClaim: "$282" }
  },
  {
    name: "New Mexico",
    slug: "new-mexico",
    url: "https://www.nmsto.gov/unclaimed-property/",
    phone: "(505) 955-1120",
    description: "Search the New Mexico state database for unclaimed property and missing money.",
    stats: { totalAmount: "$300M+", properties: "1.3M+", avgClaim: "$231" }
  },
  {
    name: "New York",
    slug: "new-york",
    url: "https://www.osc.state.ny.us/unclaimed-funds",
    phone: "(518) 270-2200",
    description: "Search the New York state database for unclaimed property and missing money.",
    stats: { totalAmount: "$15.1B+", properties: "42M+", avgClaim: "$360" }
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    url: "https://www.nctreasurer.com/inside-the-department/Unclaimed-Property/Pages/default.aspx",
    phone: "(919) 508-1000",
    description: "Search the North Carolina state database for unclaimed property and missing money.",
    stats: { totalAmount: "$900M+", properties: "4.2M+", avgClaim: "$214" }
  },
  {
    name: "North Dakota",
    slug: "north-dakota",
    url: "https://www.land.nd.gov/UnclaimedProperty",
    phone: "(701) 328-2800",
    description: "Search the North Dakota state database for unclaimed property and missing money.",
    stats: { totalAmount: "$60M+", properties: "280K+", avgClaim: "$214" }
  },
  {
    name: "Ohio",
    slug: "ohio",
    url: "https://ohiofindsmoney.com/",
    phone: "(614) 466-4433",
    description: "Search the Ohio state database for unclaimed property and missing money.",
    stats: { totalAmount: "$3.2B+", properties: "12M+", avgClaim: "$267" }
  },
  {
    name: "Oklahoma",
    slug: "oklahoma",
    url: "https://www.ok.gov/treasurer/Unclaimed_Property/",
    phone: "(405) 521-4273",
    description: "Search the Oklahoma state database for unclaimed property and missing money.",
    stats: { totalAmount: "$500M+", properties: "2.3M+", avgClaim: "$217" }
  },
  {
    name: "Oregon",
    slug: "oregon",
    url: "https://oregonfinds.gov/",
    phone: "(503) 378-3805",
    description: "Search the Oregon state database for unclaimed property and missing money.",
    stats: { totalAmount: "$700M+", properties: "2.9M+", avgClaim: "$241" }
  },
  {
    name: "Pennsylvania",
    slug: "pennsylvania",
    url: "https://www.patreasury.gov/unclaimed-property/",
    phone: "(717) 787-2465",
    description: "Search the Pennsylvania state database for unclaimed property and missing money.",
    stats: { totalAmount: "$3.8B+", properties: "14M+", avgClaim: "$271" }
  },
  {
    name: "Rhode Island",
    slug: "rhode-island",
    url: "https://treasury.ri.gov/unclaimed-property/",
    phone: "(401) 462-7674",
    description: "Search the Rhode Island state database for unclaimed property and missing money.",
    stats: { totalAmount: "$180M+", properties: "650K+", avgClaim: "$277" }
  },
  {
    name: "South Carolina",
    slug: "south-carolina",
    url: "https://palmetto.gov/",
    phone: "(803) 737-4771",
    description: "Search the South Carolina state database for unclaimed property and missing money.",
    stats: { totalAmount: "$550M+", properties: "2.4M+", avgClaim: "$229" }
  },
  {
    name: "South Dakota",
    slug: "south-dakota",
    url: "https://sdtreasurer.gov/services/unclaimed-property/",
    phone: "(605) 773-3378",
    description: "Search the South Dakota state database for unclaimed property and missing money.",
    stats: { totalAmount: "$50M+", properties: "220K+", avgClaim: "$227" }
  },
  {
    name: "Tennessee",
    slug: "tennessee",
    url: "https://treasury.tn.gov/Services/Unclaimed-Property",
    phone: "(615) 741-6499",
    description: "Search the Tennessee state database for unclaimed property and missing money.",
    stats: { totalAmount: "$800M+", properties: "3.5M+", avgClaim: "$229" }
  },
  {
    name: "Texas",
    slug: "texas",
    url: "https://claimittexas.org/",
    phone: "(800) 321-2274",
    description: "Search the Texas state database for unclaimed property and missing money.",
    stats: { totalAmount: "$6.5B+", properties: "25M+", avgClaim: "$260" }
  },
  {
    name: "Utah",
    slug: "utah",
    url: "https://mycash.utah.gov/",
    phone: "(801) 715-3300",
    description: "Search the Utah state database for unclaimed property and missing money.",
    stats: { totalAmount: "$400M+", properties: "1.6M+", avgClaim: "$250" }
  },
  {
    name: "Vermont",
    slug: "vermont",
    url: "https://www.vermonttreasurer.gov/content/unclaimed-property",
    phone: "(802) 828-2301",
    description: "Search the Vermont state database for unclaimed property and missing money.",
    stats: { totalAmount: "$90M+", properties: "350K+", avgClaim: "$257" }
  },
  {
    name: "Virginia",
    slug: "virginia",
    url: "https://www.trs.virginia.gov/unclaimed-property/",
    phone: "(804) 225-3131",
    description: "Search the Virginia state database for unclaimed property and missing money.",
    stats: { totalAmount: "$1.2B+", properties: "5.1M+", avgClaim: "$235" }
  },
  {
    name: "Washington",
    slug: "washington",
    url: "https://ucp.dor.wa.gov/",
    phone: "(360) 705-6706",
    description: "Search the Washington state database for unclaimed property and missing money.",
    stats: { totalAmount: "$1.1B+", properties: "4.2M+", avgClaim: "$262" }
  },
  {
    name: "West Virginia",
    slug: "west-virginia",
    url: "https://wvtreasury.com/unclaimed-property/",
    phone: "(304) 558-5000",
    description: "Search the West Virginia state database for unclaimed property and missing money.",
    stats: { totalAmount: "$250M+", properties: "1.1M+", avgClaim: "$227" }
  },
  {
    name: "Wisconsin",
    slug: "wisconsin",
    url: "https://www.wistatetreasury.org/unclaimed-property",
    phone: "(608) 267-7977",
    description: "Search the Wisconsin state database for unclaimed property and missing money.",
    stats: { totalAmount: "$700M+", properties: "3.1M+", avgClaim: "$226" }
  },
  {
    name: "Wyoming",
    slug: "wyoming",
    url: "https://wyomingunclaimed.gov/",
    phone: "(307) 777-5590",
    description: "Search the Wyoming state database for unclaimed property and missing money.",
    stats: { totalAmount: "$40M+", properties: "180K+", avgClaim: "$222" }
  }
];

export function getStateBySlug(slug: string): StateData | undefined {
  return statesData.find(state => state.slug === slug);
}

export function getPopularStates(): StateData[] {
  const popularSlugs = ["california", "new-york", "texas", "florida"];
  return statesData.filter(state => popularSlugs.includes(state.slug));
}
