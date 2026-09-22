import { G as AstroError, O as InvalidComponentArgs, d as maybeRenderHead, u as renderTemplate } from "./server_DQW2Az_P.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer data-astro-cid-jo6i4kqk><div class="container" data-astro-cid-jo6i4kqk><div class="footer-content" data-astro-cid-jo6i4kqk><h1 data-astro-cid-jo6i4kqk>Museu Virtual de Sertanópolis</h1><p data-astro-cid-jo6i4kqk>Preservando a memória, conectando pessoas e tecnologia.</p></div><div class="footer-content" data-astro-cid-jo6i4kqk><nav class="navegacao" data-astro-cid-jo6i4kqk><h3 data-astro-cid-jo6i4kqk>Navegação</h3><ul data-astro-cid-jo6i4kqk><li data-astro-cid-jo6i4kqk><a href="/" data-astro-cid-jo6i4kqk>Início</a></li><li data-astro-cid-jo6i4kqk><a href="/acervo3d" data-astro-cid-jo6i4kqk>Acervo 3D</a></li><li data-astro-cid-jo6i4kqk><a href="museuHistorico.html" data-astro-cid-jo6i4kqk>Museu histórico</a></li><li data-astro-cid-jo6i4kqk><a href="curiosidades.html" data-astro-cid-jo6i4kqk>Curiosidades</a></li><li data-astro-cid-jo6i4kqk><a href="" data-astro-cid-jo6i4kqk>Sobre o projeto</a></li></ul></nav></div><div class="footer-content" data-astro-cid-jo6i4kqk><h3 data-astro-cid-jo6i4kqk>Realizações e apoio</h3><ul class="apoio" data-astro-cid-jo6i4kqk><li class="apoio-item" data-astro-cid-jo6i4kqk>Grupo de Realidade Aumentada</li><li class="apoio-item" data-astro-cid-jo6i4kqk>UniFil</li></ul></div></div><hr data-astro-cid-jo6i4kqk><p data-astro-cid-jo6i4kqk>© 2026 Museu Virtual de Sertanópolis. Todos os direitos reservados.</p></footer>`;
}, "C:/Users/sibel/museu_virtual/src/components/Footer.astro", void 0);
//#endregion
export { createComponent as n, __exportAll as r, $$Footer as t };
