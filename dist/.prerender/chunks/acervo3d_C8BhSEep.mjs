import { n as createComponent, r as __exportAll, t as $$Footer } from "./Footer_DPQX6Eui.mjs";
import { a as renderComponent, f as renderHead, u as renderTemplate } from "./server_DQW2Az_P.mjs";
//#region src/pages/acervo3d.astro
var acervo3d_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Acervo3d,
	file: () => $$file,
	url: () => $$url
});
var $$Acervo3d = createComponent(($$result, $$props, $$slots) => {
	const titulo = "Acervo 3D";
	return renderTemplate`<html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${titulo}</title>${renderHead($$result)}</head><body><h1>${titulo}</h1><p>Minha primeira página em Astro.</p>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/sibel/museu_virtual/src/pages/acervo3d.astro", void 0);
var $$file = "C:/Users/sibel/museu_virtual/src/pages/acervo3d.astro";
var $$url = "/acervo3d";
//#endregion
//#region \0virtual:astro:page:src/pages/acervo3d@_@astro
var page = () => acervo3d_exports;
//#endregion
export { page };
