// Regenerates src/data/al-county-map.json (Alabama county outlines, 67 counties).
// Source: US Census cartographic boundaries via the us-atlas npm package (public domain).
// Not part of the site build. Run from a scratch folder:
//   npm i us-atlas topojson-client d3-geo && node build-county-map.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { feature } from 'topojson-client';
import { geoConicConformal, geoPath } from 'd3-geo';
const topo = JSON.parse(readFileSync('node_modules/us-atlas/counties-10m.json','utf8'));
const all = feature(topo, topo.objects.counties).features.filter(f => String(f.id).startsWith('01'));
console.log('AL features', all.length);
const fc = { type: 'FeatureCollection', features: all };
const W = 560, H = 760;
// Alabama state plane west-ish conic; fit to box with small padding
const proj = geoConicConformal().parallels([30.5, 34.5]).rotate([87.5, 0]).fitExtent([[8, 8], [W - 8, H - 8]], fc);
const path = geoPath(proj).digits ? geoPath(proj).digits(1) : geoPath(proj);
const counties = {};
for (const f of all) {
  const name = f.properties.name;
  const d = path(f);
  const [cx, cy] = path.centroid(f);
  counties[name] = { d, cx: +cx.toFixed(1), cy: +cy.toFixed(1), fips: String(f.id) };
}
// bounds actually used
const b = path.bounds(fc);
writeFileSync('al-county-map.json', JSON.stringify({ width: W, height: H, bounds: b, counties }));
console.log(Object.keys(counties).length, Object.keys(counties).sort().slice(0,5), b);
