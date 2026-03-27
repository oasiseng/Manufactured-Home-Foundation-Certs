import { useState } from "react";

const COLORS = {
  soil: "#8B7355",
  soilDark: "#6B5B45",
  concrete: "#B0B0B0",
  concreteDark: "#909090",
  steel: "#4A6A8A",
  steelDark: "#3A5A7A",
  wood: "#C4944A",
  woodDark: "#A47A3A",
  gravel: "#9A9A8A",
  skirting: "#D4C4A4",
  vapor: "#6AAAD4",
  ground: "#6B8E4A",
  groundDark: "#5A7D3A",
  air: "#E8F0F8",
  label: "#2D3748",
  labelBg: "#FFFFFF",
  accent: "#E53E3E",
  accentLight: "#FED7D7",
  pass: "#38A169",
  fail: "#E53E3E",
  warn: "#D69E2E",
  bg: "#F7FAFC",
  card: "#FFFFFF",
  border: "#E2E8F0",
  text: "#2D3748",
  textLight: "#718096",
};

// Reusable label component for diagrams
function DiagramLabel({ x, y, text, anchor = "middle", lineToX, lineToY, color = COLORS.label }) {
  return (
    <g>
      {lineToX !== undefined && lineToY !== undefined && (
        <line x1={x} y1={y} x2={lineToX} y2={lineToY} stroke={color} strokeWidth="1" strokeDasharray="3,2" />
      )}
      <text x={x} y={y} textAnchor={anchor} fill={color} fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="500">
        {text}
      </text>
    </g>
  );
}

// =============================================
// PIER AND ANCHOR DIAGRAM
// =============================================
function PierAndAnchorDiagram() {
  return (
    <svg viewBox="0 0 700 400" className="w-full" style={{ maxHeight: 420 }}>
      <defs>
        <pattern id="soilPattern" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill={COLORS.soil} />
          <circle cx="5" cy="5" r="1" fill={COLORS.soilDark} opacity="0.5" />
          <circle cx="15" cy="15" r="1.5" fill={COLORS.soilDark} opacity="0.4" />
          <circle cx="10" cy="8" r="0.8" fill={COLORS.soilDark} opacity="0.3" />
        </pattern>
        <pattern id="gravelPattern" patternUnits="userSpaceOnUse" width="12" height="12">
          <rect width="12" height="12" fill={COLORS.gravel} />
          <circle cx="3" cy="3" r="2" fill="#AAAAAA" />
          <circle cx="9" cy="8" r="2.5" fill="#999999" />
        </pattern>
      </defs>

      {/* Sky / air background */}
      <rect x="0" y="0" width="700" height="180" fill={COLORS.air} />

      {/* Ground surface */}
      <rect x="0" y="180" width="700" height="220" fill="url(#soilPattern)" />
      <rect x="0" y="178" width="700" height="6" fill={COLORS.ground} rx="1" />

      {/* Vapor barrier on ground under home */}
      <line x1="100" y1="182" x2="600" y2="182" stroke={COLORS.vapor} strokeWidth="3" strokeDasharray="8,3" />

      {/* === HOME STRUCTURE === */}
      {/* Floor/walls */}
      <rect x="80" y="80" width="540" height="30" fill="#DDD" stroke="#999" strokeWidth="1" rx="2" />
      <text x="350" y="99" textAnchor="middle" fill={COLORS.textLight} fontSize="11" fontFamily="system-ui">MANUFACTURED HOME FLOOR SYSTEM</text>

      {/* Skirting - left */}
      <rect x="82" y="110" width="4" height="70" fill={COLORS.skirting} stroke="#B0A080" strokeWidth="1" rx="1" />
      {/* Skirting - right */}
      <rect x="614" y="110" width="4" height="70" fill={COLORS.skirting} stroke="#B0A080" strokeWidth="1" rx="1" />
      {/* Skirting vent */}
      <rect x="84" y="140" width="2" height="15" fill={COLORS.air} />

      {/* === CHASSIS I-BEAMS === */}
      {/* Left I-beam */}
      <rect x="160" y="110" width="8" height="55" fill={COLORS.steel} />
      <rect x="155" y="108" width="18" height="4" fill={COLORS.steel} rx="1" />
      <rect x="155" y="163" width="18" height="4" fill={COLORS.steel} rx="1" />

      {/* Right I-beam */}
      <rect x="520" y="110" width="8" height="55" fill={COLORS.steel} />
      <rect x="515" y="108" width="18" height="4" fill={COLORS.steel} rx="1" />
      <rect x="515" y="163" width="18" height="4" fill={COLORS.steel} rx="1" />

      {/* Center I-beam (marriage line for double-wide) */}
      <rect x="345" y="110" width="8" height="55" fill={COLORS.steel} />
      <rect x="340" y="108" width="18" height="4" fill={COLORS.steel} rx="1" />
      <rect x="340" y="163" width="18" height="4" fill={COLORS.steel} rx="1" />

      {/* === PIERS === */}
      {/* Pier under left I-beam - CMU blocks */}
      {[0, 1, 2].map((i) => (
        <rect key={`lp${i}`} x="156" y={167 + i * 12} width="16" height="11" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="0.8" rx="1" />
      ))}
      {/* Footing pad */}
      <rect x="148" y="200" width="32" height="8" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1" rx="1" />

      {/* Pier under center I-beam */}
      {[0, 1, 2].map((i) => (
        <rect key={`cp${i}`} x="341" y={167 + i * 12} width="16" height="11" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="0.8" rx="1" />
      ))}
      <rect x="333" y="200" width="32" height="8" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1" rx="1" />

      {/* Pier under right I-beam */}
      {[0, 1, 2].map((i) => (
        <rect key={`rp${i}`} x="517" y={167 + i * 12} width="16" height="11" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="0.8" rx="1" />
      ))}
      <rect x="509" y="200" width="32" height="8" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1" rx="1" />

      {/* === GROUND ANCHORS AND STRAPS === */}
      {/* Left anchor */}
      <line x1="130" y1="195" x2="130" y2="260" stroke={COLORS.steel} strokeWidth="3" />
      <polygon points="122,260 138,260 130,280" fill={COLORS.steel} />
      {/* Strap from I-beam to anchor */}
      <line x1="160" y1="130" x2="130" y2="195" stroke={COLORS.accent} strokeWidth="2.5" />

      {/* Right anchor */}
      <line x1="570" y1="195" x2="570" y2="260" stroke={COLORS.steel} strokeWidth="3" />
      <polygon points="562,260 578,260 570,280" fill={COLORS.steel} />
      <line x1="530" y1="130" x2="570" y2="195" stroke={COLORS.accent} strokeWidth="2.5" />

      {/* Stabilizer plates */}
      <rect x="122" y="190" width="16" height="6" fill={COLORS.steelDark} rx="1" />
      <rect x="562" y="190" width="16" height="6" fill={COLORS.steelDark} rx="1" />

      {/* === LABELS === */}
      <DiagramLabel x={350} y={72} text="PIER AND ANCHOR SYSTEM — CROSS SECTION" color={COLORS.steel} />

      {/* I-beam label */}
      <DiagramLabel x={260} y={125} text="Steel I-beam (chassis)" anchor="start" lineToX={175} lineToY={135} />

      {/* CMU pier label */}
      <DiagramLabel x={215} y={185} text="CMU block pier" anchor="start" lineToX={174} lineToY={185} />

      {/* Footing pad label */}
      <DiagramLabel x={215} y={210} text="Concrete footing pad" anchor="start" lineToX={182} lineToY={206} />

      {/* Strap label */}
      <DiagramLabel x={105} y={145} text="Steel strap" anchor="end" lineToX={142} lineToY={160} color={COLORS.accent} />

      {/* Anchor label */}
      <DiagramLabel x={95} y={250} text="Auger anchor" anchor="end" lineToX={127} lineToY={250} />

      {/* Stabilizer plate */}
      <DiagramLabel x={95} y={198} text="Stabilizer plate" anchor="end" lineToX={120} lineToY={193} />

      {/* Skirting label */}
      <DiagramLabel x={60} y={145} text="Skirting" anchor="end" lineToX={80} lineToY={145} color={COLORS.textLight} />

      {/* Vapor barrier */}
      <DiagramLabel x={440} y={178} text="Vapor barrier (6-mil poly)" anchor="start" color={COLORS.vapor} />

      {/* Marriage line */}
      <DiagramLabel x={390} y={145} text="Marriage line pier" anchor="start" lineToX={360} lineToY={180} />

      {/* Ground surface */}
      <DiagramLabel x={650} y={175} text="Grade" anchor="end" color={COLORS.groundDark} />

      {/* NOT permanent foundation callout */}
      <rect x="180" y="320" width="340" height="28" fill={COLORS.accentLight} stroke={COLORS.accent} strokeWidth="1.5" rx="6" />
      <text x="350" y="339" textAnchor="middle" fill={COLORS.accent} fontSize="11" fontWeight="600" fontFamily="system-ui">
        Generally does NOT qualify as a permanent foundation (FHA)
      </text>
    </svg>
  );
}

// =============================================
// CRAWL SPACE DIAGRAM
// =============================================
function CrawlSpaceDiagram() {
  return (
    <svg viewBox="0 0 700 420" className="w-full" style={{ maxHeight: 440 }}>
      <defs>
        <pattern id="soilPattern2" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill={COLORS.soil} />
          <circle cx="5" cy="5" r="1" fill={COLORS.soilDark} opacity="0.5" />
          <circle cx="15" cy="15" r="1.5" fill={COLORS.soilDark} opacity="0.4" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="700" height="160" fill={COLORS.air} />
      <rect x="0" y="160" width="700" height="260" fill="url(#soilPattern2)" />
      <rect x="0" y="158" width="700" height="6" fill={COLORS.ground} rx="1" />

      {/* === FOOTING (below frost line) === */}
      <rect x="72" y="280" width="50" height="20" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1.5" rx="2" />
      <rect x="578" y="280" width="50" height="20" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1.5" rx="2" />
      {/* Rebar dots in footing */}
      <circle cx="85" cy="290" r="2.5" fill={COLORS.accent} />
      <circle cx="108" cy="290" r="2.5" fill={COLORS.accent} />
      <circle cx="591" cy="290" r="2.5" fill={COLORS.accent} />
      <circle cx="614" cy="290" r="2.5" fill={COLORS.accent} />

      {/* === PERIMETER WALLS === */}
      <rect x="82" y="130" width="30" height="150" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1.5" rx="1" />
      <rect x="588" y="130" width="30" height="150" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1.5" rx="1" />

      {/* Vent openings */}
      <rect x="86" y="155" width="22" height="10" fill={COLORS.air} stroke={COLORS.concreteDark} strokeWidth="0.8" rx="1" />
      <rect x="592" y="155" width="22" height="10" fill={COLORS.air} stroke={COLORS.concreteDark} strokeWidth="0.8" rx="1" />

      {/* === SILL PLATE AND ANCHOR BOLTS === */}
      <rect x="80" y="123" width="34" height="8" fill={COLORS.wood} stroke={COLORS.woodDark} strokeWidth="1" rx="1" />
      <rect x="586" y="123" width="34" height="8" fill={COLORS.wood} stroke={COLORS.woodDark} strokeWidth="1" rx="1" />
      {/* Anchor bolts */}
      <rect x="90" y="118" width="3" height="16" fill={COLORS.steelDark} rx="0.5" />
      <rect x="103" y="118" width="3" height="16" fill={COLORS.steelDark} rx="0.5" />
      <rect x="596" y="118" width="3" height="16" fill={COLORS.steelDark} rx="0.5" />
      <rect x="609" y="118" width="3" height="16" fill={COLORS.steelDark} rx="0.5" />

      {/* === CRAWL SPACE AIR === */}
      <rect x="112" y="135" width="476" height="135" fill={COLORS.air} opacity="0.6" />

      {/* Vapor barrier on crawlspace floor */}
      <line x1="112" y1="268" x2="588" y2="268" stroke={COLORS.vapor} strokeWidth="3" strokeDasharray="8,3" />

      {/* === HOME FLOOR SYSTEM === */}
      <rect x="78" y="90" width="544" height="34" fill="#DDD" stroke="#999" strokeWidth="1" rx="2" />
      <text x="350" y="112" textAnchor="middle" fill={COLORS.textLight} fontSize="11" fontFamily="system-ui">MANUFACTURED HOME FLOOR SYSTEM</text>

      {/* === INTERIOR PIERS === */}
      {/* I-beams */}
      <rect x="220" y="124" width="6" height="40" fill={COLORS.steel} />
      <rect x="216" y="122" width="14" height="4" fill={COLORS.steel} rx="1" />
      <rect x="216" y="162" width="14" height="3" fill={COLORS.steel} rx="1" />

      <rect x="474" y="124" width="6" height="40" fill={COLORS.steel} />
      <rect x="470" y="122" width="14" height="4" fill={COLORS.steel} rx="1" />
      <rect x="470" y="162" width="14" height="3" fill={COLORS.steel} rx="1" />

      {/* Interior wood posts */}
      <rect x="218" y="165" width="10" height="98" fill={COLORS.wood} stroke={COLORS.woodDark} strokeWidth="1" rx="1" />
      <rect x="472" y="165" width="10" height="98" fill={COLORS.wood} stroke={COLORS.woodDark} strokeWidth="1" rx="1" />

      {/* Interior footings */}
      <rect x="210" y="263" width="26" height="8" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1" rx="1" />
      <rect x="464" y="263" width="26" height="8" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1" rx="1" />

      {/* === LABELS === */}
      <DiagramLabel x={350} y={80} text="CRAWL SPACE FOUNDATION — CROSS SECTION" color={COLORS.steel} />

      {/* Perimeter wall */}
      <DiagramLabel x={45} y={200} text="Structural" anchor="end" />
      <DiagramLabel x={45} y={212} text="perimeter wall" anchor="end" />
      <line x1="48" y1="205" x2="80" y2="205" stroke={COLORS.label} strokeWidth="1" strokeDasharray="3,2" />

      {/* Footing */}
      <DiagramLabel x={35} y={290} text="Reinforced" anchor="end" />
      <DiagramLabel x={35} y={302} text="footing" anchor="end" />
      <line x1="38" y1="295" x2="72" y2="292" stroke={COLORS.label} strokeWidth="1" strokeDasharray="3,2" />

      {/* Anchor bolts */}
      <DiagramLabel x={135} y={115} text="Anchor bolts" anchor="start" lineToX={105} lineToY={122} color={COLORS.steelDark} />

      {/* Sill plate */}
      <DiagramLabel x={135} y={130} text="Sill plate" anchor="start" lineToX={116} lineToY={128} color={COLORS.woodDark} />

      {/* Interior pier */}
      <DiagramLabel x={260} y={220} text="Interior support" anchor="start" />
      <DiagramLabel x={260} y={232} text="post (treated wood)" anchor="start" />
      <line x1="258" y1="225" x2="230" y2="225" stroke={COLORS.label} strokeWidth="1" strokeDasharray="3,2" />

      {/* I-beam */}
      <DiagramLabel x={260} y={148} text="Chassis I-beam" anchor="start" lineToX={236} lineToY={145} />

      {/* Vent */}
      <DiagramLabel x={640} y={155} text="Vent" anchor="start" lineToX={622} lineToY={160} color={COLORS.textLight} />

      {/* Vapor barrier */}
      <DiagramLabel x={350} y={262} text="Vapor barrier" anchor="middle" color={COLORS.vapor} />

      {/* Frost depth indicator */}
      <line x1="650" y1="165" x2="650" y2="295" stroke={COLORS.warn} strokeWidth="1.5" strokeDasharray="4,3" />
      <text x="660" y="230" textAnchor="start" fill={COLORS.warn} fontSize="9" fontFamily="system-ui" transform="rotate(90, 660, 230)">
        Frost depth
      </text>

      {/* Qualifies callout */}
      <rect x="200" y="340" width="300" height="28" fill="#C6F6D5" stroke={COLORS.pass} strokeWidth="1.5" rx="6" />
      <text x="350" y="359" textAnchor="middle" fill={COLORS.pass} fontSize="11" fontWeight="600" fontFamily="system-ui">
        Generally qualifies as a permanent foundation (FHA)
      </text>
    </svg>
  );
}

// =============================================
// SLAB ON GRADE DIAGRAM
// =============================================
function SlabOnGradeDiagram() {
  return (
    <svg viewBox="0 0 700 360" className="w-full" style={{ maxHeight: 380 }}>
      <defs>
        <pattern id="soilPattern3" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill={COLORS.soil} />
          <circle cx="5" cy="5" r="1" fill={COLORS.soilDark} opacity="0.5" />
          <circle cx="15" cy="15" r="1.5" fill={COLORS.soilDark} opacity="0.4" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="700" height="160" fill={COLORS.air} />
      <rect x="0" y="160" width="700" height="200" fill="url(#soilPattern3)" />
      <rect x="0" y="158" width="700" height="6" fill={COLORS.ground} rx="1" />

      {/* === CONCRETE SLAB === */}
      <rect x="80" y="140" width="540" height="24" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1.5" rx="2" />

      {/* Thickened edges / turned-down footings */}
      <path d="M80,140 L80,164 L60,164 L60,220 L100,220 L100,164 L80,164" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1.5" />
      <path d="M620,140 L620,164 L600,164 L600,220 L640,220 L640,164 L620,164" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1.5" />

      {/* Rebar in slab */}
      <line x1="100" y1="152" x2="600" y2="152" stroke={COLORS.accent} strokeWidth="1.5" strokeDasharray="12,6" />
      {/* Rebar in footings */}
      <circle cx="75" cy="200" r="2.5" fill={COLORS.accent} />
      <circle cx="85" cy="200" r="2.5" fill={COLORS.accent} />
      <circle cx="615" cy="200" r="2.5" fill={COLORS.accent} />
      <circle cx="625" cy="200" r="2.5" fill={COLORS.accent} />

      {/* Vapor barrier under slab */}
      <line x1="60" y1="166" x2="640" y2="166" stroke={COLORS.vapor} strokeWidth="2.5" strokeDasharray="8,3" />

      {/* Gravel base */}
      <rect x="60" y="168" width="580" height="12" fill={COLORS.gravel} opacity="0.6" rx="1" />

      {/* === ANCHOR BOLTS === */}
      {[120, 240, 360, 480, 560].map((x) => (
        <g key={`ab${x}`}>
          <rect x={x - 1.5} y="130" width="3" height="18" fill={COLORS.steelDark} rx="0.5" />
          <rect x={x - 4} y="128" width="8" height="4" fill={COLORS.steelDark} rx="1" />
        </g>
      ))}

      {/* === HOME STRUCTURE === */}
      <rect x="78" y="95" width="544" height="34" fill="#DDD" stroke="#999" strokeWidth="1" rx="2" />
      <text x="350" y="117" textAnchor="middle" fill={COLORS.textLight} fontSize="11" fontFamily="system-ui">MANUFACTURED HOME FLOOR SYSTEM</text>

      {/* === GRADE SLOPES === */}
      <line x1="30" y1="161" x2="58" y2="155" stroke={COLORS.groundDark} strokeWidth="2" />
      <polygon points="30,158 30,164 38,161" fill={COLORS.groundDark} />
      <line x1="642" y1="155" x2="670" y2="161" stroke={COLORS.groundDark} strokeWidth="2" />
      <polygon points="670,158 670,164 662,161" fill={COLORS.groundDark} />

      {/* === LABELS === */}
      <DiagramLabel x={350} y={85} text="SLAB-ON-GRADE FOUNDATION — CROSS SECTION" color={COLORS.steel} />

      {/* Slab */}
      <DiagramLabel x={350} y={155} text="Concrete slab (4-6 in.)" anchor="middle" color={COLORS.concreteDark} />

      {/* Thickened edge */}
      <DiagramLabel x={30} y={200} text="Turned-down" anchor="end" />
      <DiagramLabel x={30} y={212} text="footing" anchor="end" />
      <line x1="33" y1="205" x2="58" y2="200" stroke={COLORS.label} strokeWidth="1" strokeDasharray="3,2" />

      {/* Anchor bolt */}
      <DiagramLabel x={155} y={125} text="Anchor bolts" anchor="start" lineToX={122} lineToY={130} color={COLORS.steelDark} />

      {/* Rebar */}
      <DiagramLabel x={450} y={148} text="Rebar" anchor="start" color={COLORS.accent} />

      {/* Vapor barrier */}
      <DiagramLabel x={350} y={178} text="Vapor barrier under slab" anchor="middle" color={COLORS.vapor} />

      {/* Gravel */}
      <DiagramLabel x={500} y={178} text="Gravel base" anchor="start" color={COLORS.textLight} />

      {/* Grade slope */}
      <DiagramLabel x={15} y={150} text="Grade slopes away" anchor="end" color={COLORS.groundDark} />

      {/* No underside access callout */}
      <rect x="150" y="240" width="400" height="24" fill="#FEFCBF" stroke={COLORS.warn} strokeWidth="1.5" rx="6" />
      <text x="350" y="257" textAnchor="middle" fill={COLORS.warn} fontSize="10" fontWeight="600" fontFamily="system-ui">
        No accessible underside — inspection limited to perimeter and edges
      </text>

      {/* Qualifies */}
      <rect x="200" y="280" width="300" height="28" fill="#C6F6D5" stroke={COLORS.pass} strokeWidth="1.5" rx="6" />
      <text x="350" y="299" textAnchor="middle" fill={COLORS.pass} fontSize="11" fontWeight="600" fontFamily="system-ui">
        Generally qualifies as a permanent foundation (FHA)
      </text>
    </svg>
  );
}

// =============================================
// BASEMENT DIAGRAM
// =============================================
function BasementDiagram() {
  return (
    <svg viewBox="0 0 700 440" className="w-full" style={{ maxHeight: 460 }}>
      <defs>
        <pattern id="soilPattern4" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill={COLORS.soil} />
          <circle cx="5" cy="5" r="1" fill={COLORS.soilDark} opacity="0.5" />
          <circle cx="15" cy="15" r="1.5" fill={COLORS.soilDark} opacity="0.4" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="700" height="120" fill={COLORS.air} />
      <rect x="0" y="120" width="700" height="320" fill="url(#soilPattern4)" />
      <rect x="0" y="118" width="700" height="6" fill={COLORS.ground} rx="1" />

      {/* === BASEMENT WALLS === */}
      <rect x="70" y="95" width="35" height="250" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1.5" rx="1" />
      <rect x="595" y="95" width="35" height="250" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1.5" rx="1" />

      {/* === FOOTING === */}
      <rect x="55" y="345" width="65" height="22" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1.5" rx="2" />
      <rect x="580" y="345" width="65" height="22" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1.5" rx="2" />
      {/* Rebar */}
      <circle cx="75" cy="356" r="2.5" fill={COLORS.accent} />
      <circle cx="100" cy="356" r="2.5" fill={COLORS.accent} />
      <circle cx="600" cy="356" r="2.5" fill={COLORS.accent} />
      <circle cx="625" cy="356" r="2.5" fill={COLORS.accent} />

      {/* === BASEMENT FLOOR SLAB === */}
      <rect x="105" y="335" width="490" height="12" fill={COLORS.concrete} stroke={COLORS.concreteDark} strokeWidth="1" rx="1" />

      {/* === BASEMENT AIR SPACE === */}
      <rect x="105" y="100" width="490" height="235" fill={COLORS.air} opacity="0.5" />

      {/* Headroom indicator */}
      <line x1="560" y1="100" x2="560" y2="335" stroke={COLORS.textLight} strokeWidth="1" strokeDasharray="4,3" />
      <line x1="555" y1="100" x2="565" y2="100" stroke={COLORS.textLight} strokeWidth="1" />
      <line x1="555" y1="335" x2="565" y2="335" stroke={COLORS.textLight} strokeWidth="1" />
      <text x="555" y="222" textAnchor="end" fill={COLORS.textLight} fontSize="9" fontFamily="system-ui" transform="rotate(-90, 555, 222)">
        7-8 ft headroom
      </text>

      {/* === HOME FLOOR SYSTEM === */}
      <rect x="68" y="65" width="564" height="32" fill="#DDD" stroke="#999" strokeWidth="1" rx="2" />
      <text x="350" y="86" textAnchor="middle" fill={COLORS.textLight} fontSize="11" fontFamily="system-ui">MANUFACTURED HOME FLOOR SYSTEM</text>

      {/* Anchor bolts at top of walls */}
      <rect x="82" y="90" width="3" height="12" fill={COLORS.steelDark} rx="0.5" />
      <rect x="95" y="90" width="3" height="12" fill={COLORS.steelDark} rx="0.5" />
      <rect x="602" y="90" width="3" height="12" fill={COLORS.steelDark} rx="0.5" />
      <rect x="615" y="90" width="3" height="12" fill={COLORS.steelDark} rx="0.5" />

      {/* === INTERIOR SUPPORT COLUMNS === */}
      {/* Lally column left */}
      <rect x="240" y="100" width="8" height="235" fill={COLORS.steel} stroke={COLORS.steelDark} strokeWidth="1" rx="2" />
      <rect x="234" y="97" width="20" height="6" fill={COLORS.steelDark} rx="1" />
      <rect x="234" y="332" width="20" height="6" fill={COLORS.steelDark} rx="1" />

      {/* Lally column right */}
      <rect x="452" y="100" width="8" height="235" fill={COLORS.steel} stroke={COLORS.steelDark} strokeWidth="1" rx="2" />
      <rect x="446" y="97" width="20" height="6" fill={COLORS.steelDark} rx="1" />
      <rect x="446" y="332" width="20" height="6" fill={COLORS.steelDark} rx="1" />

      {/* I-beams above columns */}
      <rect x="232" y="97" width="6" height="0" fill={COLORS.steel} />
      <rect x="448" y="97" width="6" height="0" fill={COLORS.steel} />

      {/* === WINDOW WELL (exterior) === */}
      <rect x="38" y="140" width="32" height="30" fill={COLORS.air} stroke={COLORS.concreteDark} strokeWidth="1" rx="2" />

      {/* Backfill against wall */}
      <rect x="35" y="125" width="35" height="15" fill={COLORS.soil} stroke={COLORS.soilDark} strokeWidth="0.8" opacity="0.8" />

      {/* === LABELS === */}
      <DiagramLabel x={350} y={55} text="BASEMENT FOUNDATION — CROSS SECTION" color={COLORS.steel} />

      {/* Wall */}
      <DiagramLabel x={35} y={250} text="Basement" anchor="end" />
      <DiagramLabel x={35} y={262} text="wall" anchor="end" />
      <line x1="38" y1="255" x2="68" y2="255" stroke={COLORS.label} strokeWidth="1" strokeDasharray="3,2" />

      {/* Footing */}
      <DiagramLabel x={35} y={355} text="Footing" anchor="end" lineToX={53} lineToY={355} />

      {/* Floor slab */}
      <DiagramLabel x={350} y={330} text="Basement floor slab" anchor="middle" color={COLORS.concreteDark} />

      {/* Anchor bolts */}
      <DiagramLabel x={125} y={93} text="Anchor bolts" anchor="start" lineToX={100} lineToY={95} color={COLORS.steelDark} />

      {/* Lally column */}
      <DiagramLabel x={275} y={220} text="Steel lally column" anchor="start" lineToX={250} lineToY={220} />

      {/* Window well */}
      <DiagramLabel x={15} y={150} text="Window well" anchor="end" lineToX={36} lineToY={155} color={COLORS.textLight} />

      {/* Grade */}
      <DiagramLabel x={650} y={115} text="Grade" anchor="end" color={COLORS.groundDark} />

      {/* Qualifies */}
      <rect x="200" y="385" width="300" height="28" fill="#C6F6D5" stroke={COLORS.pass} strokeWidth="1.5" rx="6" />
      <text x="350" y="404" textAnchor="middle" fill={COLORS.pass} fontSize="11" fontWeight="600" fontFamily="system-ui">
        Qualifies as a permanent foundation (FHA)
      </text>
    </svg>
  );
}

// =============================================
// DECISION FLOWCHART
// =============================================
function DecisionFlowchart() {
  const boxW = 200;
  const boxH = 50;

  function FlowBox({ x, y, text, color, textColor = "#FFF", w = boxW, h = boxH }) {
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} fill={color} rx="8" stroke={color === "#FFF" || color === COLORS.card ? COLORS.border : "none"} strokeWidth={color === "#FFF" || color === COLORS.card ? "1.5" : "0"} />
        <text x={x + w / 2} y={y + h / 2 + 1} textAnchor="middle" dominantBaseline="middle" fill={textColor} fontSize="11" fontWeight="600" fontFamily="system-ui">
          {typeof text === "string" ? text : text.map((line, i) => (
            <tspan key={i} x={x + w / 2} dy={i === 0 ? 0 : 14}>{line}</tspan>
          ))}
        </text>
      </g>
    );
  }

  function Arrow({ x1, y1, x2, y2, label, labelSide = "right" }) {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    return (
      <g>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={COLORS.textLight} strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        {label && (
          <text x={labelSide === "right" ? mx + 8 : mx - 8} y={my} textAnchor={labelSide === "right" ? "start" : "end"} fill={COLORS.textLight} fontSize="10" fontWeight="600" fontFamily="system-ui">
            {label}
          </text>
        )}
      </g>
    );
  }

  return (
    <svg viewBox="0 0 700 520" className="w-full" style={{ maxHeight: 540 }}>
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={COLORS.textLight} />
        </marker>
      </defs>

      <text x="350" y="25" textAnchor="middle" fill={COLORS.steel} fontSize="14" fontWeight="700" fontFamily="system-ui">
        HOW TO IDENTIFY THE FOUNDATION TYPE
      </text>

      {/* START */}
      <FlowBox x={250} y={40} text="Stand outside the home" color={COLORS.steel} w={200} h={36} />
      <Arrow x1={350} y1={76} x2={350} y2={95} />

      {/* Q1 */}
      <FlowBox x={200} y={95} text={["Can you see a gap between", "the home and the ground?"]} color={COLORS.card} textColor={COLORS.text} w={300} h={44} />

      {/* YES branch - gap visible */}
      <Arrow x1={350} y1={139} x2={200} y2={165} label="YES" labelSide="left" />
      {/* NO branch */}
      <Arrow x1={350} y1={139} x2={550} y2={165} label="NO" />

      {/* Q2 - Gap visible: what type? */}
      <FlowBox x={50} y={165} text={["Is the perimeter enclosure", "structural (concrete/masonry)?"]} color={COLORS.card} textColor={COLORS.text} w={300} h={44} />

      {/* YES = crawl space */}
      <Arrow x1={200} y1={209} x2={120} y2={240} label="YES" labelSide="left" />
      <FlowBox x={30} y={240} text="CRAWL SPACE" color={COLORS.pass} w={180} h={36} />

      {/* NO = pier */}
      <Arrow x1={200} y1={209} x2={280} y2={240} label="NO" />
      <FlowBox x={200} y={240} text="PIER AND ANCHOR" color={COLORS.accent} w={180} h={36} />

      {/* NO gap branch */}
      <FlowBox x={430} y={165} text={["Does the home sit directly", "on a concrete slab?"]} color={COLORS.card} textColor={COLORS.text} w={250} h={44} />

      {/* YES = slab */}
      <Arrow x1={555} y1={209} x2={490} y2={240} label="YES" labelSide="left" />
      <FlowBox x={410} y={240} text="SLAB-ON-GRADE" color={COLORS.pass} w={180} h={36} />

      {/* NO = check for basement */}
      <Arrow x1={555} y1={209} x2={620} y2={260} label="NO" />
      <FlowBox x={530} y={260} text={["Full-height space", "below the home?"]} color={COLORS.card} textColor={COLORS.text} w={160} h={44} />

      <Arrow x1={610} y1={304} x2={540} y2={330} label="YES" labelSide="left" />
      <FlowBox x={450} y={330} text="BASEMENT" color={COLORS.pass} w={180} h={36} />

      <Arrow x1={610} y1={304} x2={660} y2={330} label="NO" />
      <FlowBox x={590} y={330} text={["PROPRIETARY or", "UNCLEAR"]} color={COLORS.warn} textColor={COLORS.text} w={140} h={40} />

      {/* Verification reminder boxes */}
      <rect x="30" y="300" width="180" height="48" fill="#E8F4FD" stroke={COLORS.steel} strokeWidth="1" rx="6" />
      <text x="120" y="318" textAnchor="middle" fill={COLORS.steel} fontSize="9" fontFamily="system-ui" fontWeight="600">Verify: Home bolted to wall?</text>
      <text x="120" y="332" textAnchor="middle" fill={COLORS.steel} fontSize="9" fontFamily="system-ui">If no → actually Pier + Anchor</text>
      <line x1="120" y1="276" x2="120" y2="300" stroke={COLORS.steel} strokeWidth="1" strokeDasharray="3,2" />

      <rect x="200" y="300" width="180" height="48" fill="#FED7D7" stroke={COLORS.accent} strokeWidth="1" rx="6" />
      <text x="290" y="318" textAnchor="middle" fill={COLORS.accent} fontSize="9" fontFamily="system-ui" fontWeight="600">Verify: Screw-in anchors only?</text>
      <text x="290" y="332" textAnchor="middle" fill={COLORS.accent} fontSize="9" fontFamily="system-ui">NOT a permanent foundation</text>
      <line x1="290" y1="276" x2="290" y2="300" stroke={COLORS.accent} strokeWidth="1" strokeDasharray="3,2" />

      {/* Legend */}
      <rect x="50" y="420" width="600" height="80" fill={COLORS.bg} stroke={COLORS.border} strokeWidth="1" rx="8" />
      <text x="350" y="440" textAnchor="middle" fill={COLORS.text} fontSize="11" fontWeight="700" fontFamily="system-ui">FHA PERMANENT FOUNDATION STATUS</text>

      <rect x="80" y="455" width="14" height="14" fill={COLORS.pass} rx="3" />
      <text x="100" y="466" fill={COLORS.text} fontSize="10" fontFamily="system-ui">Generally qualifies</text>

      <rect x="260" y="455" width="14" height="14" fill={COLORS.accent} rx="3" />
      <text x="280" y="466" fill={COLORS.text} fontSize="10" fontFamily="system-ui">Generally does NOT qualify</text>

      <rect x="490" y="455" width="14" height="14" fill={COLORS.warn} rx="3" />
      <text x="510" y="466" fill={COLORS.text} fontSize="10" fontFamily="system-ui">Depends on system</text>

      <text x="350" y="490" textAnchor="middle" fill={COLORS.textLight} fontSize="9" fontFamily="system-ui">
        Pier and anchor may qualify if enhanced with structural perimeter wall and embedded anchorage
      </text>
    </svg>
  );
}

// =============================================
// MAIN APP
// =============================================
export default function FoundationVisualGuide() {
  const [activeTab, setActiveTab] = useState("flowchart");

  const tabs = [
    { id: "flowchart", label: "ID Flowchart" },
    { id: "pier", label: "Pier & Anchor" },
    { id: "crawl", label: "Crawl Space" },
    { id: "slab", label: "Slab-on-Grade" },
    { id: "basement", label: "Basement" },
  ];

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: COLORS.bg, minHeight: "100vh", padding: "16px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: COLORS.text, margin: "0 0 4px 0" }}>
            Manufactured Home Foundation Visual Guide
          </h1>
          <p style={{ fontSize: 13, color: COLORS.textLight, margin: 0 }}>
            Cross-section diagrams and identification flowchart for HUD foundation types
          </p>
        </div>

        {/* Tab navigation */}
        <div style={{ display: "flex", gap: 4, marginBottom: 16, flexWrap: "wrap", justifyContent: "center" }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: activeTab === tab.id ? `2px solid ${COLORS.steel}` : `1px solid ${COLORS.border}`,
                background: activeTab === tab.id ? COLORS.steel : COLORS.card,
                color: activeTab === tab.id ? "#FFF" : COLORS.text,
                fontSize: 13,
                fontWeight: activeTab === tab.id ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Diagram area */}
        <div style={{ background: COLORS.card, borderRadius: 12, border: `1px solid ${COLORS.border}`, padding: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
          {activeTab === "flowchart" && (
            <div>
              <DecisionFlowchart />
              <div style={{ marginTop: 12, padding: "10px 14px", background: "#F0FFF4", borderRadius: 8, border: `1px solid ${COLORS.pass}` }}>
                <p style={{ margin: 0, fontSize: 12, color: COLORS.text, lineHeight: 1.5 }}>
                  <strong>Key distinction:</strong> The most common mistake is confusing a pier-and-anchor system that has masonry skirting with a true crawl space foundation.
                  The test: look for anchor bolts or mechanical connections between the home and the top of the perimeter wall. If the home is bolted to the wall, it is a crawl space foundation.
                  If the home sits on piers with straps to ground anchors and the masonry is just enclosure, it is a pier-and-anchor system regardless of how finished the skirting looks.
                </p>
              </div>
            </div>
          )}
          {activeTab === "pier" && (
            <div>
              <PierAndAnchorDiagram />
              <div style={{ marginTop: 12, padding: "10px 14px", background: COLORS.accentLight, borderRadius: 8, fontSize: 12, lineHeight: 1.5, color: COLORS.text }}>
                <strong>Inspector focus:</strong> Check pier material and height (single-stack CMU ≤ 36 in., double-stack up to 80 in.). Confirm straps are tight and anchors are present at required spacing.
                Look for pads under every pier. Screw-in soil anchors alone do not meet the FHA permanent foundation definition.
              </div>
            </div>
          )}
          {activeTab === "crawl" && (
            <div>
              <CrawlSpaceDiagram />
              <div style={{ marginTop: 12, padding: "10px 14px", background: "#F0FFF4", borderRadius: 8, fontSize: 12, lineHeight: 1.5, color: COLORS.text }}>
                <strong>Inspector focus:</strong> Confirm the home is mechanically attached to the perimeter wall (anchor bolts, nailing strips).
                The footing must be reinforced concrete below frost depth. Check for moisture, cracking in walls, and adequate ventilation.
                Interior piers need footings too.
              </div>
            </div>
          )}
          {activeTab === "slab" && (
            <div>
              <SlabOnGradeDiagram />
              <div style={{ marginTop: 12, padding: "10px 14px", background: "#FEFCBF", borderRadius: 8, fontSize: 12, lineHeight: 1.5, color: COLORS.text }}>
                <strong>Inspector focus:</strong> No accessible underside — document this limitation. Verify anchor bolts at the perimeter and thickened slab edge.
                Check for cracking, settlement, and drainage. The home must be mechanically connected to the slab, not just resting on it.
              </div>
            </div>
          )}
          {activeTab === "basement" && (
            <div>
              <BasementDiagram />
              <div style={{ marginTop: 12, padding: "10px 14px", background: "#F0FFF4", borderRadius: 8, fontSize: 12, lineHeight: 1.5, color: COLORS.text }}>
                <strong>Inspector focus:</strong> Check for horizontal cracking in block walls (lateral soil pressure failure). Confirm anchor bolts at top of walls.
                Look for water intrusion. Basements are excluded from NFIP in flood hazard areas. If habitable, verify egress.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <p style={{ textAlign: "center", fontSize: 10, color: COLORS.textLight, marginTop: 12 }}>
          Educational reference only. Based on 24 CFR Part 3285 and the HUD PFGMH. Final determinations require licensed engineering judgment.
        </p>
      </div>
    </div>
  );
}
