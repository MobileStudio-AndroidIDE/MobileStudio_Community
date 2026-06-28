import { i as __toESM } from "../_runtime.mjs";
import { $ as objectType, et as stringType } from "../_libs/@ai-sdk/gateway+[...].mjs";
import { t as supabase } from "./client-Ca5S0WhP.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as isRedirect, F as useNavigate, I as useRouter, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { n as LanguageSelect, r as langName } from "./LanguageSelect-VRyeAIc7.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-D06zludD.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as Route } from "./rooms._roomId-BkOBp3L0.mjs";
import { a as Send, d as Eye, f as Download, h as ArrowLeft, i as Settings, l as LogOut, m as BookOpen, n as Users, p as Copy, r as Smile, s as Paperclip, t as X, u as FileText } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rooms._roomId-kkyYbEAQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
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
var translateText = createServerFn({ method: "POST" }).inputValidator((d) => ReqSchema.parse(d)).handler(createSsrRpc("923a5261ae4ef344d627d5738bf40c7cf9d0d2df09dff176b88978a9a856c370"));
var DetectSchema = objectType({ text: stringType().min(1).max(2e3) });
var detectLanguage = createServerFn({ method: "POST" }).inputValidator((d) => DetectSchema.parse(d)).handler(createSsrRpc("290131d2b542a74e48ac22bde44d2ca08d5de78f415fe4f4ef947a4f7831fc1f"));
function formatTime(d) {
	const date = typeof d === "string" ? new Date(d) : d;
	return `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}
function formatDay(d) {
	const date = typeof d === "string" ? new Date(d) : d;
	const today = /* @__PURE__ */ new Date();
	const sameDay = date.toDateString() === today.toDateString();
	const yest = new Date(today);
	yest.setDate(yest.getDate() - 1);
	if (sameDay) return "";
	if (date.toDateString() === yest.toDateString()) return "Yesterday";
	return date.toLocaleDateString(void 0, {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
}
var EMOJIS = [
	"👍",
	"❤️",
	"😂",
	"😮",
	"😢",
	"🎉",
	"🔥",
	"👏"
];
function ReactionBar({ messageId, myId, reactions }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	async function toggle(emoji) {
		if (reactions[emoji]?.has(myId)) await supabase.from("message_reactions").delete().eq("message_id", messageId).eq("user_id", myId).eq("emoji", emoji);
		else await supabase.from("message_reactions").insert({
			message_id: messageId,
			user_id: myId,
			emoji
		});
		setOpen(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1 flex-wrap mt-0.5",
		children: [Object.entries(reactions).filter(([, s]) => s.size > 0).map(([emoji, users]) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => toggle(emoji),
				className: `text-xs rounded-full px-1.5 py-0.5 border ${users.has(myId) ? "bg-primary/15 border-primary/40" : "bg-surface-2 border-border"} hover:opacity-80`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: emoji }),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] text-muted-foreground",
						children: users.size
					})
				]
			}, emoji);
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setOpen((v) => !v),
				className: "text-muted-foreground hover:text-foreground p-0.5 rounded",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, { size: 13 })
			}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-10",
				onClick: () => setOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-full mb-1 left-0 bg-card border border-border rounded-lg shadow-lg p-1.5 flex gap-1 z-20",
				children: EMOJIS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => toggle(e),
					className: "text-lg hover:bg-surface-2 rounded w-7 h-7 flex items-center justify-center",
					children: e
				}, e))
			})] })]
		})]
	});
}
var BLOCKED_EXT = /* @__PURE__ */ new Set([
	"apk",
	"jar",
	"lock",
	"zip",
	"rar",
	"7z",
	"tar",
	"gz",
	"exe",
	"dll",
	"so",
	"bin"
]);
function isPreviewable(a) {
	const ext = a.name.split(".").pop()?.toLowerCase() ?? "";
	if (BLOCKED_EXT.has(ext)) return "none";
	if (a.mime.startsWith("image/")) return "image";
	if (a.mime.startsWith("text/") || [
		"json",
		"js",
		"ts",
		"tsx",
		"jsx",
		"md",
		"xml",
		"yml",
		"yaml",
		"kt",
		"java",
		"py",
		"css",
		"html",
		"gradle",
		"properties",
		"sh"
	].includes(ext)) return "text";
	return "none";
}
async function getSignedUrl(path) {
	const { data, error } = await supabase.storage.from("attachments").createSignedUrl(path, 3600);
	if (error || !data) throw error ?? /* @__PURE__ */ new Error("sign failed");
	return data.signedUrl;
}
function FilePreview({ attachment }) {
	const { t } = useTranslation();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [content, setContent] = (0, import_react.useState)(null);
	const [imageUrl, setImageUrl] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const kind = isPreviewable(attachment);
	async function download() {
		try {
			const url = await getSignedUrl(attachment.path);
			const a = document.createElement("a");
			a.href = url;
			a.download = attachment.name;
			a.click();
		} catch (e) {
			toast.error(e.message);
		}
	}
	async function view() {
		if (kind === "none") {
			toast.error(t("cannotPreview"));
			return;
		}
		setOpen(true);
		if (content || imageUrl) return;
		setLoading(true);
		try {
			const url = await getSignedUrl(attachment.path);
			if (kind === "image") setImageUrl(url);
			else setContent(await (await fetch(url)).text());
		} catch (e) {
			toast.error(e.message);
		} finally {
			setLoading(false);
		}
	}
	async function copy() {
		if (kind !== "text") {
			toast.error(t("cannotPreview"));
			return;
		}
		try {
			const url = await getSignedUrl(attachment.path);
			const txt = await (await fetch(url)).text();
			await navigator.clipboard.writeText(txt);
			toast.success(t("copy") + " ✓");
		} catch (e) {
			toast.error(e.message);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-surface-2 border border-border rounded-lg p-2.5 flex items-center gap-2 min-w-0 max-w-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
				size: 18,
				className: "text-muted-foreground shrink-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium truncate",
					children: attachment.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[10px] text-muted-foreground",
					children: [(attachment.size / 1024).toFixed(1), " KB"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-0.5 shrink-0",
				children: [
					kind !== "none" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: view,
						title: t("viewFile"),
						className: "p-1 hover:bg-card rounded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { size: 14 })
					}),
					kind === "text" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: copy,
						title: t("copy"),
						className: "p-1 hover:bg-card rounded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { size: 14 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: download,
						title: t("download"),
						className: "p-1 hover:bg-card rounded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 })
					})
				]
			})
		]
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50",
		onClick: () => setOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-xl max-w-3xl w-full max-h-[85vh] flex flex-col",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between p-3 border-b border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-sm truncate",
					children: attachment.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					className: "p-1 hover:bg-surface-2 rounded",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-auto p-3",
				children: [
					loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: t("loading")
					}),
					!loading && kind === "image" && imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: imageUrl,
						alt: attachment.name,
						className: "max-w-full mx-auto"
					}),
					!loading && kind === "text" && content !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "text-xs whitespace-pre-wrap break-words font-mono",
						children: content
					})
				]
			})]
		})
	})] });
}
function MessageItem({ message, isMine, authorName, viewerLang, readCount, reactions, myId }) {
	const { t } = useTranslation();
	const translateFn = useServerFn(translateText);
	const src = (message.source_lang ?? "").slice(0, 2);
	const target = viewerLang.slice(0, 2);
	const needsTranslate = src && src !== target && message.content.trim().length > 0;
	const [translated, setTranslated] = (0, import_react.useState)(null);
	const [translating, setTranslating] = (0, import_react.useState)(false);
	const [showOriginal, setShowOriginal] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!needsTranslate) return;
		let cancelled = false;
		(async () => {
			const { data: cached } = await supabase.from("message_translations").select("text").eq("message_id", message.id).eq("lang", target).maybeSingle();
			if (cancelled) return;
			if (cached?.text) {
				setTranslated(cached.text);
				return;
			}
			setTranslating(true);
			try {
				const out = await translateFn({ data: {
					text: message.content,
					targetLang: target,
					sourceLang: src
				} });
				if (cancelled) return;
				setTranslated(out.text);
				await supabase.from("message_translations").insert({
					message_id: message.id,
					lang: target,
					text: out.text
				});
			} catch (e) {
				console.error("translate fail", e);
			} finally {
				if (!cancelled) setTranslating(false);
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [
		message.id,
		needsTranslate,
		target,
		src
	]);
	const body = !needsTranslate || showOriginal || !translated ? message.content : translated;
	const atts = message.attachments ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex ${isMine ? "justify-end" : "justify-start"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `max-w-[78%] ${isMine ? "items-end" : "items-start"} flex flex-col gap-1`,
			children: [
				!isMine && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground px-1",
					children: authorName
				}),
				body.trim().length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `rounded-2xl px-3.5 py-2 ${isMine ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border rounded-bl-sm"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "whitespace-pre-wrap break-words text-[14px] leading-snug",
						children: body
					})
				}),
				atts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-1.5",
					children: atts.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilePreview, { attachment: a }, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactionBar, {
					messageId: message.id,
					myId,
					reactions
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-[11px] text-muted-foreground px-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatTime(message.created_at) }),
						isMine && typeof readCount === "number" && readCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-primary/80",
							children: [
								"· ",
								t("read"),
								" ",
								readCount
							]
						}),
						needsTranslate && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [translating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "translating…"
						}), translated && !translating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								langName(src),
								" → ",
								langName(target),
								" ",
								t("translatedFrom")
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setShowOriginal((v) => !v),
								className: "text-primary hover:underline",
								children: showOriginal ? t("translate") : t("showOriginal")
							})
						] })] })
					]
				})
			]
		})
	});
}
function EventRow({ kind, authorName, at }) {
	const { t } = useTranslation();
	const label = kind === "join" ? t("joined") : kind === "leave" ? t("left") : t("left");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-[11px] text-muted-foreground bg-surface-2/60 border border-border rounded-full px-3 py-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground/80",
					children: authorName
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "opacity-60",
					children: [" · ", formatTime(at)]
				})
			]
		})
	});
}
function DateDivider({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 my-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-px bg-border" })
		]
	});
}
function TypingIndicator({ names }) {
	const { t } = useTranslation();
	if (names.length === 0) return null;
	const text = names.length === 1 ? `${names[0]} ${t("typing")}…` : `${names.slice(0, 2).join(", ")}${names.length > 2 ? " +" + (names.length - 2) : ""} ${t("typing")}…`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 px-3 py-1 text-xs text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex gap-0.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce",
					style: { animationDelay: "0ms" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce",
					style: { animationDelay: "120ms" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-1.5 h-1.5 rounded-full bg-muted-foreground/60 animate-bounce",
					style: { animationDelay: "240ms" }
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text })]
	});
}
function RulesModal({ rules, rulesLang, viewerLang, onAccept, onClose, showAccept = true }) {
	const { t } = useTranslation();
	const translateFn = useServerFn(translateText);
	const src = (rulesLang ?? "").slice(0, 2);
	const tgt = viewerLang.slice(0, 2);
	const needs = src && src !== tgt;
	const [translated, setTranslated] = (0, import_react.useState)(null);
	const [showOriginal, setShowOriginal] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!needs) return;
		let cancelled = false;
		(async () => {
			setBusy(true);
			try {
				const out = await translateFn({ data: {
					text: rules,
					targetLang: tgt,
					sourceLang: src
				} });
				if (!cancelled) setTranslated(out.text);
			} catch (e) {
				console.error(e);
			} finally {
				if (!cancelled) setBusy(false);
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [
		rules,
		needs,
		tgt,
		src
	]);
	const body = !needs || showOriginal || !translated ? rules : translated;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-xl p-6 w-full max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-lg mb-3",
					children: t("rules")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "whitespace-pre-wrap text-sm text-foreground/90 max-h-[60vh] overflow-y-auto bg-surface-2 rounded-md p-3 border border-border",
					children: body
				}),
				needs && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[11px] text-muted-foreground mt-2 flex items-center gap-2",
					children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic",
						children: "translating…"
					}), translated && !busy && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						langName(src),
						" → ",
						langName(tgt),
						" ",
						t("translatedFrom")
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowOriginal((v) => !v),
						className: "text-primary hover:underline",
						children: showOriginal ? t("translate") : t("showOriginal")
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-5",
					children: [
						!showAccept && onClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							className: "px-3 py-2 text-sm hover:bg-surface-2 rounded-md",
							children: t("cancel")
						}),
						showAccept && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onAccept,
							className: "bg-primary text-primary-foreground rounded-md px-5 py-2 text-sm font-semibold",
							children: t("accept")
						}),
						!showAccept && onClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							className: "bg-primary text-primary-foreground rounded-md px-5 py-2 text-sm font-semibold",
							children: t("accept")
						})
					]
				})
			]
		})
	});
}
var COLORS = [
	"#3b82f6",
	"#10b981",
	"#f59e0b",
	"#ef4444",
	"#8b5cf6",
	"#ec4899",
	"#06b6d4",
	"#64748b"
];
function RoomSettingsDialog({ room, onClose, onSaved }) {
	const { t } = useTranslation();
	const detectFn = useServerFn(detectLanguage);
	const [name, setName] = (0, import_react.useState)(room.name);
	const [desc, setDesc] = (0, import_react.useState)(room.description ?? "");
	const [color, setColor] = (0, import_react.useState)(room.accent_color);
	const [announcement, setAnnouncement] = (0, import_react.useState)(room.announcement ?? "");
	const [rules, setRules] = (0, import_react.useState)(room.rules ?? "");
	const [saving, setSaving] = (0, import_react.useState)(false);
	async function save() {
		setSaving(true);
		try {
			let rulesLang = room.rules_lang;
			if (rules.trim() && rules !== (room.rules ?? "")) try {
				rulesLang = (await detectFn({ data: { text: rules.trim() } })).lang;
			} catch {}
			const { error } = await supabase.from("rooms").update({
				name: name.trim(),
				description: desc.trim() || null,
				accent_color: color,
				announcement: announcement.trim() || null,
				rules: rules.trim() || null,
				rules_lang: rules.trim() ? rulesLang : null
			}).eq("id", room.id);
			if (error) throw error;
			toast.success("✓");
			onSaved();
			onClose();
		} catch (e) {
			toast.error(e.message);
		} finally {
			setSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-lg",
						children: t("roomSettings")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-1 hover:bg-surface-2 rounded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("roomName"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								className: "w-full bg-surface-2 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("roomDesc"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: desc,
								onChange: (e) => setDesc(e.target.value),
								rows: 2,
								className: "w-full bg-surface-2 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("customize") + " — accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2 flex-wrap",
								children: COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setColor(c),
									className: `w-8 h-8 rounded-md border-2 ${color === c ? "border-foreground" : "border-transparent"}`,
									style: { background: c }
								}, c))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("announcement"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: announcement,
								onChange: (e) => setAnnouncement(e.target.value),
								rows: 2,
								className: "w-full bg-surface-2 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t("rules"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: rules,
								onChange: (e) => setRules(e.target.value),
								rows: 5,
								className: "w-full bg-surface-2 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "px-3 py-2 text-sm hover:bg-surface-2 rounded-md",
						children: t("cancel")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: save,
						disabled: saving || !name.trim(),
						className: "bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-semibold disabled:opacity-50",
						children: t("save")
					})]
				})
			]
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "block text-xs font-medium text-muted-foreground mb-1.5",
		children: label
	}), children] });
}
var MAX_FILE = 25 * 1024 * 1024;
function ackKey(roomId, rules) {
	let h = 0;
	for (let i = 0; i < rules.length; i++) h = (h << 5) - h + rules.charCodeAt(i) | 0;
	return `rules_ack:${roomId}:${h}`;
}
function RoomPage() {
	const { roomId } = Route.useParams();
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [room, setRoom] = (0, import_react.useState)(null);
	const [me, setMe] = (0, import_react.useState)(null);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [events, setEvents] = (0, import_react.useState)([]);
	const [profiles, setProfiles] = (0, import_react.useState)({});
	const [input, setInput] = (0, import_react.useState)("");
	const [sending, setSending] = (0, import_react.useState)(false);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [memberCount, setMemberCount] = (0, import_react.useState)(0);
	const [reads, setReads] = (0, import_react.useState)({});
	const [reactions, setReactions] = (0, import_react.useState)({});
	const [typingUsers, setTypingUsers] = (0, import_react.useState)({});
	const [showRules, setShowRules] = (0, import_react.useState)(false);
	const [rulesViewOnly, setRulesViewOnly] = (0, import_react.useState)(false);
	const [showSettings, setShowSettings] = (0, import_react.useState)(false);
	const listEndRef = (0, import_react.useRef)(null);
	const fileRef = (0, import_react.useRef)(null);
	const channelRef = (0, import_react.useRef)(null);
	const profilesRef = (0, import_react.useRef)(profiles);
	profilesRef.current = profiles;
	const detectFn = useServerFn(detectLanguage);
	const myId = me?.id ?? "";
	(0, import_react.useEffect)(() => {
		let mounted = true;
		(async () => {
			const { data: u } = await supabase.auth.getUser();
			if (!u.user) {
				navigate({ to: "/auth" });
				return;
			}
			const { data: prof } = await supabase.from("profiles").select("id,display_name,preferred_lang").eq("id", u.user.id).single();
			if (mounted && prof) setMe(prof);
			const { data: roomData, error: roomErr } = await supabase.from("rooms").select("id,name,description,accent_color,owner_id,announcement,rules,rules_lang").eq("id", roomId).single();
			if (roomErr || !roomData) {
				toast.error("Room not found");
				navigate({ to: "/rooms" });
				return;
			}
			if (mounted) setRoom(roomData);
			const { data: mem } = await supabase.from("room_members").select("user_id").eq("room_id", roomId).eq("user_id", u.user.id).maybeSingle();
			if (!mem) {
				await supabase.from("room_members").insert({
					room_id: roomId,
					user_id: u.user.id
				});
				await supabase.from("room_events").insert({
					room_id: roomId,
					user_id: u.user.id,
					type: "join"
				});
			}
			if (roomData.rules && typeof window !== "undefined") {
				if (!localStorage.getItem(ackKey(roomId, roomData.rules))) {
					setRulesViewOnly(false);
					setShowRules(true);
				}
			}
			const { count } = await supabase.from("room_members").select("user_id", {
				count: "exact",
				head: true
			}).eq("room_id", roomId);
			if (mounted) setMemberCount(count ?? 0);
			const [{ data: msgs }, { data: evs }] = await Promise.all([supabase.from("messages").select("id,room_id,user_id,content,source_lang,attachments,created_at,edited_at,deleted_at").eq("room_id", roomId).order("created_at", { ascending: true }).limit(300), supabase.from("room_events").select("id,room_id,user_id,type,created_at").eq("room_id", roomId).order("created_at", { ascending: true }).limit(300)]);
			const msgList = msgs ?? [];
			const evList = evs ?? [];
			await hydrateProfiles([...msgList.map((m) => m.user_id), ...evList.map((e) => e.user_id)]);
			if (!mounted) return;
			setMessages(msgList);
			setEvents(evList);
			const ids = msgList.map((m) => m.id);
			if (ids.length > 0) {
				const { data: rxs } = await supabase.from("message_reactions").select("message_id,user_id,emoji").in("message_id", ids);
				if (mounted && rxs) {
					const map = {};
					for (const r of rxs) {
						const m = map[r.message_id] ||= {};
						(m[r.emoji] ||= /* @__PURE__ */ new Set()).add(r.user_id);
					}
					setReactions(map);
				}
			}
			const myMsgIds = msgList.filter((m) => m.user_id === u.user.id).map((m) => m.id);
			if (myMsgIds.length > 0) {
				const { data: rds } = await supabase.from("message_reads").select("message_id,user_id").in("message_id", myMsgIds);
				if (mounted && rds) {
					const map = {};
					for (const r of rds) (map[r.message_id] ||= /* @__PURE__ */ new Set()).add(r.user_id);
					setReads(map);
				}
			}
			markRead(msgList, u.user.id);
			requestAnimationFrame(() => listEndRef.current?.scrollIntoView({ behavior: "auto" }));
		})();
		return () => {
			mounted = false;
		};
	}, [roomId]);
	(0, import_react.useEffect)(() => {
		if (!me) return;
		const channel = supabase.channel(`room:${roomId}`, { config: { presence: { key: me.id } } }).on("postgres_changes", {
			event: "INSERT",
			schema: "public",
			table: "messages",
			filter: `room_id=eq.${roomId}`
		}, async (payload) => {
			const m = payload.new;
			await hydrateProfiles([m.user_id]);
			setMessages((prev) => prev.some((x) => x.id === m.id) ? prev : [...prev, m]);
			if (m.user_id !== me.id) supabase.from("message_reads").upsert({
				message_id: m.id,
				user_id: me.id
			}, { onConflict: "message_id,user_id" }).then(() => {});
			requestAnimationFrame(() => listEndRef.current?.scrollIntoView({ behavior: "smooth" }));
		}).on("postgres_changes", {
			event: "INSERT",
			schema: "public",
			table: "room_events",
			filter: `room_id=eq.${roomId}`
		}, async (payload) => {
			const e = payload.new;
			await hydrateProfiles([e.user_id]);
			setEvents((prev) => prev.some((x) => x.id === e.id) ? prev : [...prev, e]);
			const { count } = await supabase.from("room_members").select("user_id", {
				count: "exact",
				head: true
			}).eq("room_id", roomId);
			setMemberCount(count ?? 0);
		}).on("postgres_changes", {
			event: "INSERT",
			schema: "public",
			table: "message_reads"
		}, (payload) => {
			const r = payload.new;
			setReads((prev) => {
				const next = { ...prev };
				const s = new Set(next[r.message_id] ?? []);
				s.add(r.user_id);
				next[r.message_id] = s;
				return next;
			});
		}).on("postgres_changes", {
			event: "INSERT",
			schema: "public",
			table: "message_reactions"
		}, (payload) => {
			const r = payload.new;
			setReactions((prev) => {
				const next = { ...prev };
				const m = { ...next[r.message_id] ?? {} };
				const s = new Set(m[r.emoji] ?? []);
				s.add(r.user_id);
				m[r.emoji] = s;
				next[r.message_id] = m;
				return next;
			});
		}).on("postgres_changes", {
			event: "DELETE",
			schema: "public",
			table: "message_reactions"
		}, (payload) => {
			const r = payload.old;
			setReactions((prev) => {
				const next = { ...prev };
				const m = { ...next[r.message_id] ?? {} };
				const s = new Set(m[r.emoji] ?? []);
				s.delete(r.user_id);
				if (s.size === 0) delete m[r.emoji];
				else m[r.emoji] = s;
				next[r.message_id] = m;
				return next;
			});
		}).on("postgres_changes", {
			event: "UPDATE",
			schema: "public",
			table: "rooms",
			filter: `id=eq.${roomId}`
		}, (payload) => {
			setRoom(payload.new);
		}).on("presence", { event: "sync" }, () => {
			const state = channel.presenceState();
			const tt = {};
			for (const [uid, metas] of Object.entries(state)) {
				if (uid === me.id) continue;
				const last = metas[metas.length - 1];
				if (last?.typing) tt[uid] = last.name ?? profilesRef.current[uid]?.display_name ?? "…";
			}
			setTypingUsers(tt);
		}).subscribe(async (status) => {
			if (status === "SUBSCRIBED") await channel.track({
				typing: false,
				name: me.display_name
			});
		});
		channelRef.current = channel;
		return () => {
			supabase.removeChannel(channel);
			channelRef.current = null;
		};
	}, [roomId, me?.id]);
	const typingTimeout = (0, import_react.useRef)(null);
	function emitTyping() {
		const ch = channelRef.current;
		if (!ch || !me) return;
		ch.track({
			typing: true,
			name: me.display_name
		});
		if (typingTimeout.current) clearTimeout(typingTimeout.current);
		typingTimeout.current = setTimeout(() => {
			ch.track({
				typing: false,
				name: me.display_name
			});
		}, 2500);
	}
	async function markRead(msgs, uid) {
		const toMark = msgs.filter((m) => m.user_id !== uid).map((m) => ({
			message_id: m.id,
			user_id: uid
		}));
		if (toMark.length === 0) return;
		await supabase.from("message_reads").upsert(toMark, { onConflict: "message_id,user_id" });
	}
	async function hydrateProfiles(ids) {
		const need = ids.filter((id) => !profilesRef.current[id]);
		if (need.length === 0) return;
		const { data } = await supabase.from("profiles").select("id,display_name,preferred_lang").in("id", need);
		if (data) setProfiles((p) => ({
			...p,
			...Object.fromEntries(data.map((x) => [x.id, x]))
		}));
	}
	async function send(attachments = []) {
		const text = input.trim();
		if (!text && attachments.length === 0) return;
		if (!me) return;
		setSending(true);
		try {
			let sourceLang;
			if (text) try {
				sourceLang = (await detectFn({ data: { text } })).lang;
			} catch {}
			const { error } = await supabase.from("messages").insert({
				room_id: roomId,
				user_id: me.id,
				content: text,
				source_lang: sourceLang ?? null,
				attachments
			});
			if (error) throw error;
			setInput("");
			channelRef.current?.track({
				typing: false,
				name: me.display_name
			});
		} catch (err) {
			toast.error(err.message);
		} finally {
			setSending(false);
		}
	}
	async function onPickFile(e) {
		const file = e.target.files?.[0];
		e.target.value = "";
		if (!file || !me) return;
		if (file.size > MAX_FILE) {
			toast.error(t("fileTooBig"));
			return;
		}
		setUploading(true);
		try {
			const path = `${me.id}/${Date.now()}-${file.name.replace(/[^\w.\-]/g, "_")}`;
			const { error: upErr } = await supabase.storage.from("attachments").upload(path, file, { contentType: file.type || "application/octet-stream" });
			if (upErr) throw upErr;
			await send([{
				path,
				name: file.name,
				size: file.size,
				mime: file.type || "application/octet-stream"
			}]);
		} catch (err) {
			toast.error(err.message);
		} finally {
			setUploading(false);
		}
	}
	async function leaveRoom() {
		if (!me) return;
		if (!confirm(t("leave") + "?")) return;
		await supabase.from("room_events").insert({
			room_id: roomId,
			user_id: me.id,
			type: "leave"
		});
		await supabase.from("room_members").delete().eq("room_id", roomId).eq("user_id", me.id);
		navigate({ to: "/rooms" });
	}
	function acceptRules() {
		if (room?.rules) localStorage.setItem(ackKey(roomId, room.rules), "1");
		setShowRules(false);
	}
	const timeline = (0, import_react.useMemo)(() => {
		const items = [...messages.map((m) => ({
			kind: "message",
			at: m.created_at,
			data: m
		})), ...events.map((e) => ({
			kind: "event",
			at: e.created_at,
			data: e
		}))];
		items.sort((a, b) => a.at.localeCompare(b.at));
		return items;
	}, [messages, events]);
	if (!room || !me) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen flex items-center justify-center text-muted-foreground",
		children: t("loading")
	});
	const typingNames = Object.values(typingUsers);
	const isOwner = room.owner_id === me.id;
	let prevDay = "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-screen flex flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-border bg-card/60 backdrop-blur px-4 py-3 flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rooms",
						className: "p-1.5 hover:bg-surface-2 rounded-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-sm",
						style: { background: room.accent_color },
						children: room.name.slice(0, 1).toUpperCase()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-semibold truncate",
							children: room.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 11 }),
								" ",
								memberCount,
								" ",
								t("members")
							]
						})]
					}),
					room.rules && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setRulesViewOnly(true);
							setShowRules(true);
						},
						className: "p-1.5 hover:bg-surface-2 rounded-md text-muted-foreground hover:text-foreground",
						title: t("viewRules"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { size: 16 })
					}),
					isOwner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setShowSettings(true),
						className: "p-1.5 hover:bg-surface-2 rounded-md text-muted-foreground hover:text-foreground",
						title: t("roomSettings"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { size: 16 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelect, { persist: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: leaveRoom,
						className: "p-1.5 hover:bg-surface-2 rounded-md text-muted-foreground hover:text-destructive",
						title: t("leave"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 })
					})
				]
			}),
			room.announcement && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border bg-primary/10 px-4 py-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-semibold text-primary",
					children: [t("announcement"), ": "]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground/90",
					children: room.announcement
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 overflow-y-auto px-3 sm:px-4 py-4",
				children: timeline.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-muted-foreground mt-12",
					children: t("empty")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 max-w-3xl mx-auto",
					children: [timeline.map((it) => {
						const dayLabel = formatDayLabel(it.at, t);
						const showDate = dayLabel !== prevDay;
						prevDay = dayLabel;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [showDate && dayLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DateDivider, { label: dayLabel }), it.kind === "message" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageItem, {
							message: it.data,
							isMine: it.data.user_id === myId,
							authorName: profiles[it.data.user_id]?.display_name ?? "…",
							viewerLang: me.preferred_lang,
							readCount: reads[it.data.id] ? Array.from(reads[it.data.id]).filter((u) => u !== myId).length : 0,
							reactions: reactions[it.data.id] ?? {},
							myId
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventRow, {
							kind: it.data.type,
							authorName: profiles[it.data.user_id]?.display_name ?? "…",
							at: it.data.created_at
						})] }, `${it.kind}:${it.data.id}`);
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: listEndRef })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingIndicator, { names: typingNames }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-card/60 backdrop-blur p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mx-auto flex gap-2 items-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: fileRef,
							type: "file",
							className: "hidden",
							onChange: onPickFile
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => fileRef.current?.click(),
							disabled: uploading,
							className: "p-2.5 hover:bg-surface-2 rounded-lg text-muted-foreground hover:text-foreground shrink-0 disabled:opacity-40",
							title: t("attach"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Paperclip, { size: 16 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: input,
							onChange: (e) => {
								setInput(e.target.value);
								emitTyping();
							},
							onKeyDown: (e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									send();
								}
							},
							placeholder: uploading ? t("uploading") : t("sendPlaceholder"),
							rows: 1,
							className: "flex-1 bg-surface-2 border border-border rounded-lg px-3 py-2.5 text-sm resize-none max-h-32 focus:outline-none focus:border-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => send(),
							disabled: !input.trim() || sending,
							className: "bg-primary text-primary-foreground rounded-lg w-10 h-10 flex items-center justify-center disabled:opacity-40 hover:opacity-90 shrink-0",
							title: t("send"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 })
						})
					]
				})
			}),
			showRules && room.rules && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RulesModal, {
				rules: room.rules,
				rulesLang: room.rules_lang,
				viewerLang: me.preferred_lang,
				showAccept: !rulesViewOnly,
				onAccept: acceptRules,
				onClose: () => setShowRules(false)
			}),
			showSettings && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomSettingsDialog, {
				room,
				onClose: () => setShowSettings(false),
				onSaved: async () => {
					const { data } = await supabase.from("rooms").select("id,name,description,accent_color,owner_id,announcement,rules,rules_lang").eq("id", roomId).single();
					if (data) setRoom(data);
				}
			})
		]
	});
}
function formatDayLabel(iso, t) {
	const d = new Date(iso);
	const today = /* @__PURE__ */ new Date();
	if (d.toDateString() === today.toDateString()) return t("today");
	const yest = new Date(today);
	yest.setDate(yest.getDate() - 1);
	if (d.toDateString() === yest.toDateString()) return t("yesterday");
	return formatDay(d);
}
//#endregion
export { RoomPage as component };
