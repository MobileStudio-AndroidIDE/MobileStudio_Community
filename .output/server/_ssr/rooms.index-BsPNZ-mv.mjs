import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Ca5S0WhP.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { F as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { n as LanguageSelect } from "./LanguageSelect-VRyeAIc7.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as MessageSquare, l as LogOut, n as Users, o as Plus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rooms.index-BsPNZ-mv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RoomsPage() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [rooms, setRooms] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [showNew, setShowNew] = (0, import_react.useState)(false);
	const [displayName, setDisplayName] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	async function load() {
		setLoading(true);
		const { data: userData } = await supabase.auth.getUser();
		const uid = userData.user?.id;
		if (!uid) return;
		const { data: profile } = await supabase.from("profiles").select("display_name, preferred_lang").eq("id", uid).maybeSingle();
		if (profile?.display_name) setDisplayName(profile.display_name);
		const { data: roomData } = await supabase.from("rooms").select("id,name,description,accent_color,owner_id").order("created_at", { ascending: false });
		const { data: memberData } = await supabase.from("room_members").select("room_id").eq("user_id", uid);
		const memberSet = new Set((memberData ?? []).map((m) => m.room_id));
		setRooms((roomData ?? []).map((r) => ({
			...r,
			is_member: memberSet.has(r.id)
		})));
		setLoading(false);
	}
	async function createRoom(name, description) {
		const { data: userData } = await supabase.auth.getUser();
		const uid = userData.user?.id;
		if (!uid) return;
		const { data, error } = await supabase.from("rooms").insert({
			name,
			description,
			owner_id: uid
		}).select("id").single();
		if (error) {
			toast.error(error.message);
			return;
		}
		setShowNew(false);
		navigate({
			to: "/rooms/$roomId",
			params: { roomId: data.id }
		});
	}
	async function joinRoom(room) {
		const { data: userData } = await supabase.auth.getUser();
		const uid = userData.user?.id;
		if (!uid) return;
		if (!room.is_member) {
			const { error } = await supabase.from("room_members").insert({
				room_id: room.id,
				user_id: uid
			});
			if (error) {
				toast.error(error.message);
				return;
			}
			await supabase.from("room_events").insert({
				room_id: room.id,
				user_id: uid,
				type: "join"
			});
		}
		navigate({
			to: "/rooms/$roomId",
			params: { roomId: room.id }
		});
	}
	async function signOut() {
		await supabase.auth.signOut();
		navigate({ to: "/auth" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border sticky top-0 bg-background/95 backdrop-blur z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-5xl mx-auto px-4 py-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-xl font-extrabold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Android"
							}), "Dev"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground hidden sm:inline",
							children: ["· ", t("tagline")]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							displayName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground hidden sm:inline",
								children: displayName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelect, { persist: true }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: signOut,
								className: "p-2 hover:bg-surface-2 rounded-md",
								title: t("signOut"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { size: 16 })
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "max-w-5xl mx-auto px-4 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: t("rooms")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowNew(true),
						className: "bg-primary text-primary-foreground rounded-md px-3 py-2 text-sm font-semibold flex items-center gap-1.5 hover:opacity-90",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 }),
							" ",
							t("newRoom")
						]
					})]
				}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm",
					children: t("loading")
				}) : rooms.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border border-border rounded-xl p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
							className: "mx-auto text-muted-foreground mb-3",
							size: 32
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm mb-4",
							children: "No rooms yet — create the first one."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowNew(true),
							className: "bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-semibold",
							children: t("newRoom")
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3",
					children: rooms.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => joinRoom(r),
						className: "text-left bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 mb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white",
								style: { background: r.accent_color },
								children: r.name.slice(0, 1).toUpperCase()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold truncate",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 11 }),
										" ",
										r.is_member ? "Joined" : t("join")
									]
								})]
							})]
						}), r.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground line-clamp-2",
							children: r.description
						})]
					}, r.id))
				})]
			}),
			showNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NewRoomDialog, {
				onClose: () => setShowNew(false),
				onCreate: createRoom
			})
		]
	});
}
function NewRoomDialog({ onClose, onCreate }) {
	const { t } = useTranslation();
	const [name, setName] = (0, import_react.useState)("");
	const [desc, setDesc] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-card border border-border rounded-xl p-6 w-full max-w-md",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-lg mb-4",
					children: t("newRoom")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					placeholder: t("roomName"),
					value: name,
					onChange: (e) => setName(e.target.value),
					className: "w-full bg-surface-2 border border-border rounded-md px-3 py-2 text-sm mb-3 focus:outline-none focus:border-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					placeholder: t("roomDesc"),
					value: desc,
					onChange: (e) => setDesc(e.target.value),
					rows: 3,
					className: "w-full bg-surface-2 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 mt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "px-3 py-2 text-sm hover:bg-surface-2 rounded-md",
						children: t("cancel")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: !name.trim(),
						onClick: () => onCreate(name.trim(), desc.trim()),
						className: "bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-semibold disabled:opacity-50",
						children: t("create")
					})]
				})
			]
		})
	});
}
//#endregion
export { RoomsPage as component };
