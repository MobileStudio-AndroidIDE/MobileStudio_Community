import { $ as objectType, et as stringType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import process from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/translate.functions-D1f1KE1a.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ReqSchema = objectType({
	text: stringType().min(1).max(4e3),
	targetLang: stringType().min(2).max(8),
	sourceLang: stringType().optional()
});
var translateText_createServerFn_handler = createServerRpc({
	id: "923a5261ae4ef344d627d5738bf40c7cf9d0d2df09dff176b88978a9a856c370",
	name: "translateText",
	filename: "src/lib/translate.functions.ts"
}, (opts) => translateText.__executeServer(opts));
var translateText = createServerFn({ method: "POST" }).inputValidator((d) => ReqSchema.parse(d)).handler(translateText_createServerFn_handler, async ({ data }) => {
	const key = process.env.LOVABLE_API_KEY;
	if (!key) throw new Error("Missing LOVABLE_API_KEY");
	const { createLovableAiGatewayProvider } = await import("./ai-gateway.server-BC6S5EGR.mjs");
	const { generateText } = await import("../_libs/ai.mjs").then((n) => n.t);
	const gateway = createLovableAiGatewayProvider(key);
	const system = "You are a professional translator. Translate the user's text to the target language. Output ONLY the translated text — no explanations, no quotes, no source-language echo. Preserve emoji, code blocks, URLs, and @mentions exactly.";
	const prompt = `Target language code: ${data.targetLang}\n${data.sourceLang ? `Source language code: ${data.sourceLang}\n` : ""}---\n${data.text}`;
	const { text } = await generateText({
		model: gateway("google/gemini-3-flash-preview"),
		system,
		prompt
	});
	return {
		text: text.trim(),
		sourceLang: data.sourceLang ?? null
	};
});
var DetectSchema = objectType({ text: stringType().min(1).max(2e3) });
var detectLanguage_createServerFn_handler = createServerRpc({
	id: "290131d2b542a74e48ac22bde44d2ca08d5de78f415fe4f4ef947a4f7831fc1f",
	name: "detectLanguage",
	filename: "src/lib/translate.functions.ts"
}, (opts) => detectLanguage.__executeServer(opts));
var detectLanguage = createServerFn({ method: "POST" }).inputValidator((d) => DetectSchema.parse(d)).handler(detectLanguage_createServerFn_handler, async ({ data }) => {
	const key = process.env.LOVABLE_API_KEY;
	if (!key) throw new Error("Missing LOVABLE_API_KEY");
	const { createLovableAiGatewayProvider } = await import("./ai-gateway.server-BC6S5EGR.mjs");
	const { generateText } = await import("../_libs/ai.mjs").then((n) => n.t);
	const { text } = await generateText({
		model: createLovableAiGatewayProvider(key)("google/gemini-3-flash-preview"),
		system: "Detect the language of the text. Reply with ONLY the ISO 639-1 two-letter lowercase code (e.g. en, ko, ja, zh, es, fr, de, ru, pt, vi). No punctuation.",
		prompt: data.text
	});
	const code = text.trim().toLowerCase().slice(0, 2);
	return { lang: /^[a-z]{2}$/.test(code) ? code : "en" };
});
//#endregion
export { detectLanguage_createServerFn_handler, translateText_createServerFn_handler };
