import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Ca5S0WhP.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { F as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { n as LanguageSelect, t as LANGUAGES } from "./LanguageSelect-VRyeAIc7.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DP80aMeo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function usernameToEmail(username) {
	return `${username.trim().toLowerCase()}@accounts.androiddev.local`;
}
var USERNAME_RE = /^[a-z0-9_]{3,24}$/i;
function AuthPage() {
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [username, setUsername] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [displayName, setDisplayName] = (0, import_react.useState)("");
	const [gmail, setGmail] = (0, import_react.useState)("");
	const [lang, setLang] = (0, import_react.useState)(i18n.language?.slice(0, 2) ?? "en");
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function submit(e) {
		e.preventDefault();
		if (!USERNAME_RE.test(username)) {
			toast.error("3–24 chars: a–z, 0–9, _");
			return;
		}
		if (password.length < 6) {
			toast.error("Password ≥ 6 chars");
			return;
		}
		setLoading(true);
		try {
			const email = usernameToEmail(username);
			if (mode === "signup") {
				if (!displayName.trim()) {
					toast.error(t("requiredField") + ": " + t("displayName"));
					return;
				}
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: { data: {
						display_name: displayName.trim(),
						preferred_lang: lang,
						gmail: gmail.trim() || null
					} }
				});
				if (error) throw error;
				toast.success(t("signupSuccess"));
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
			}
			navigate({ to: "/rooms" });
		} catch (err) {
			toast.error(err.message || (mode === "signup" ? t("signupFailed") : t("loginFailed")));
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex items-center justify-center px-4 py-12 bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-2xl font-extrabold tracking-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Android"
						}), "Dev"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: t("tagline")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelect, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border border-border rounded-xl p-6 shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-1 p-1 bg-surface-2 rounded-lg mb-6",
						children: ["signin", "signup"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMode(m),
							className: `flex-1 py-2 text-sm font-medium rounded-md transition ${mode === m ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
							children: m === "signin" ? t("signIn") : t("signUp")
						}, m))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t("username"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: username,
									onChange: (e) => setUsername(e.target.value),
									autoComplete: "username",
									className: "input",
									placeholder: "dev_alex",
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t("password"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									value: password,
									onChange: (e) => setPassword(e.target.value),
									autoComplete: mode === "signin" ? "current-password" : "new-password",
									className: "input",
									required: true
								})
							}),
							mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("displayName"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: displayName,
										onChange: (e) => setDisplayName(e.target.value),
										className: "input",
										placeholder: "Alex",
										required: true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("gmail"),
									hint: t("gmailHint"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "email",
										value: gmail,
										onChange: (e) => setGmail(e.target.value),
										className: "input",
										placeholder: "you@gmail.com"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("preferredLang"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: lang,
										onChange: (e) => setLang(e.target.value),
										className: "input",
										children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
											value: l.code,
											children: [
												l.flag,
												" ",
												l.name
											]
										}, l.code))
									})
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: "w-full bg-primary text-primary-foreground rounded-md py-2.5 font-semibold hover:opacity-90 disabled:opacity-50 transition",
								children: loading ? "..." : mode === "signin" ? t("signIn") : t("create")
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center text-xs text-muted-foreground mt-6",
					children: [
						mode === "signin" ? t("noAccount") : t("haveAccount"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
							className: "text-primary hover:underline",
							children: mode === "signin" ? t("signUp") : t("signIn")
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `.input{width:100%;background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:.55rem .75rem;font-size:14px;color:var(--foreground);outline:none}.input:focus{border-color:var(--primary)}` })]
	});
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium text-muted-foreground uppercase tracking-wider",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1.5",
				children
			}),
			hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] text-muted-foreground/80 mt-1 block",
				children: hint
			})
		]
	});
}
//#endregion
export { AuthPage as component };
