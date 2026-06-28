import { t as supabase } from "./client-Ca5S0WhP.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LanguageSelect-VRyeAIc7.js
var import_jsx_runtime = require_jsx_runtime();
var LANGUAGES = [
	{
		code: "ko",
		name: "한국어",
		flag: "🇰🇷"
	},
	{
		code: "en",
		name: "English",
		flag: "🇺🇸"
	},
	{
		code: "ja",
		name: "日本語",
		flag: "🇯🇵"
	},
	{
		code: "zh",
		name: "中文",
		flag: "🇨🇳"
	},
	{
		code: "es",
		name: "Español",
		flag: "🇪🇸"
	},
	{
		code: "fr",
		name: "Français",
		flag: "🇫🇷"
	},
	{
		code: "de",
		name: "Deutsch",
		flag: "🇩🇪"
	},
	{
		code: "ru",
		name: "Русский",
		flag: "🇷🇺"
	},
	{
		code: "pt",
		name: "Português",
		flag: "🇧🇷"
	},
	{
		code: "vi",
		name: "Tiếng Việt",
		flag: "🇻🇳"
	}
];
function langName(code) {
	return LANGUAGES.find((l) => l.code === code)?.name ?? code.toUpperCase();
}
function LanguageSelect({ persist = false }) {
	const { i18n } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		value: i18n.language?.slice(0, 2) ?? "en",
		onChange: async (e) => {
			const lang = e.target.value;
			await i18n.changeLanguage(lang);
			if (persist) {
				const { data } = await supabase.auth.getUser();
				if (data.user) await supabase.from("profiles").update({ preferred_lang: lang }).eq("id", data.user.id);
			}
		},
		className: "bg-surface-2 border border-border rounded-md px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring",
		children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
			value: l.code,
			children: [
				l.flag,
				" ",
				l.name
			]
		}, l.code))
	});
}
//#endregion
export { LanguageSelect as n, langName as r, LANGUAGES as t };
