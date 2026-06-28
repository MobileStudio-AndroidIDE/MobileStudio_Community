import { i as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-Ca5S0WhP.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { I as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, k as redirect, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as initReactI18next } from "../_libs/react-i18next.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$5 } from "./rooms._roomId-BkOBp3L0.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as instance } from "../_libs/i18next.mjs";
import { t as Browser } from "../_libs/i18next-browser-languagedetector+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-8uarTIdC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-HjnZbk6U.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var STRINGS = {
	ko: {
		appName: "AndroidDev",
		tagline: "개발자 커뮤니티",
		signIn: "로그인",
		signUp: "회원가입",
		signOut: "로그아웃",
		username: "사용자 이름",
		password: "비밀번호",
		displayName: "표시 이름",
		gmail: "Gmail (선택)",
		gmailHint: "같은 Gmail로 여러 계정을 만들 수 있습니다",
		preferredLang: "선호 언어",
		haveAccount: "이미 계정이 있나요?",
		noAccount: "계정이 없나요?",
		create: "생성",
		rooms: "채팅방",
		newRoom: "새 채팅방",
		roomName: "방 이름",
		roomDesc: "설명",
		join: "입장",
		leave: "나가기",
		members: "명",
		message: "메시지",
		send: "전송",
		sendPlaceholder: "메시지 입력...",
		typing: "님이 입력 중",
		joined: "님이 입장했습니다",
		left: "님이 나갔습니다",
		today: "오늘",
		yesterday: "어제",
		showOriginal: "원본 보기",
		translate: "번역하기",
		translatedFrom: "에서 번역됨",
		read: "읽음",
		rules: "규칙",
		viewRules: "규칙 보기",
		accept: "확인",
		announcement: "공지",
		roomSettings: "방 설정",
		customize: "꾸미기",
		save: "저장",
		cancel: "취소",
		delete: "삭제",
		edit: "편집",
		copy: "복사",
		download: "다운로드",
		viewFile: "내용 보기",
		cannotPreview: "이 파일 형식은 미리보기할 수 없습니다",
		react: "반응",
		reply: "답장",
		language: "언어",
		selectLanguage: "언어 선택",
		welcomeTitle: "환영합니다",
		welcomeBody: "왼쪽에서 채팅방을 선택하거나 새로 만들어 시작하세요",
		loading: "불러오는 중...",
		empty: "아직 메시지가 없습니다",
		requiredField: "필수 항목입니다",
		signupSuccess: "계정이 생성되었습니다",
		signupFailed: "회원가입 실패",
		loginFailed: "로그인 실패",
		attach: "파일 첨부",
		uploading: "업로드 중...",
		fileTooBig: "파일이 너무 큽니다 (최대 25MB)"
	},
	en: {
		appName: "AndroidDev",
		tagline: "Developer Community",
		signIn: "Sign in",
		signUp: "Sign up",
		signOut: "Sign out",
		username: "Username",
		password: "Password",
		displayName: "Display name",
		gmail: "Gmail (optional)",
		gmailHint: "You can create multiple accounts with the same Gmail",
		preferredLang: "Preferred language",
		haveAccount: "Already have an account?",
		noAccount: "No account yet?",
		create: "Create",
		rooms: "Rooms",
		newRoom: "New room",
		roomName: "Room name",
		roomDesc: "Description",
		join: "Join",
		leave: "Leave",
		members: "members",
		message: "Message",
		send: "Send",
		sendPlaceholder: "Type a message...",
		typing: "is typing",
		joined: "joined",
		left: "left",
		today: "Today",
		yesterday: "Yesterday",
		showOriginal: "Show original",
		translate: "Translate",
		translatedFrom: "translated from",
		read: "Read",
		rules: "Rules",
		viewRules: "View rules",
		accept: "OK",
		announcement: "Announcement",
		roomSettings: "Room settings",
		customize: "Customize",
		save: "Save",
		cancel: "Cancel",
		delete: "Delete",
		edit: "Edit",
		copy: "Copy",
		download: "Download",
		viewFile: "View",
		cannotPreview: "This file type can't be previewed",
		react: "React",
		reply: "Reply",
		language: "Language",
		selectLanguage: "Select language",
		welcomeTitle: "Welcome",
		welcomeBody: "Pick a room on the left or create a new one to start chatting",
		loading: "Loading...",
		empty: "No messages yet",
		requiredField: "Required",
		signupSuccess: "Account created",
		signupFailed: "Signup failed",
		loginFailed: "Sign-in failed",
		attach: "Attach file",
		uploading: "Uploading...",
		fileTooBig: "File too large (max 25MB)"
	}
};
for (const code of [
	"ja",
	"zh",
	"es",
	"fr",
	"de",
	"ru",
	"pt",
	"vi"
]) STRINGS[code] = { ...STRINGS.en };
var initialized = false;
function ensureI18n() {
	if (initialized || typeof window === "undefined") return;
	initialized = true;
	instance.use(Browser).use(initReactI18next).init({
		resources: Object.fromEntries(Object.entries(STRINGS).map(([k, v]) => [k, { translation: v }])),
		fallbackLng: "en",
		supportedLngs: Object.keys(STRINGS),
		interpolation: { escapeValue: false },
		detection: {
			order: ["localStorage", "navigator"],
			caches: ["localStorage"]
		}
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-6xl font-bold",
				children: "404"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Page not found"
			})]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: error.message
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
					children: "Try again"
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AndroidDev — Developer Community" },
			{
				name: "description",
				content: "Multilingual chat community for developers with automatic translation."
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		ensureI18n();
		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") {
				router.invalidate();
				if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
			}
		});
		return () => sub.subscription.unsubscribe();
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: "dark",
			position: "top-center"
		})]
	});
}
var $$splitComponentImporter$3 = () => import("./auth-DP80aMeo.mjs");
var Route$3 = createFileRoute("/auth")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./route-Di7iQBCH.mjs");
var Route$2 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-DTEZEvkE.mjs");
var Route$1 = createFileRoute("/")({
	beforeLoad: async () => {
		if (typeof window === "undefined") return;
		const { data } = await supabase.auth.getSession();
		throw redirect({ to: data.session ? "/rooms" : "/auth" });
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./rooms.index-BsPNZ-mv.mjs");
var Route = createFileRoute("/_authenticated/rooms/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var AuthRoute = Route$3.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$4
});
var AuthenticatedRouteRoute = Route$2.update({
	id: "/_authenticated",
	getParentRoute: () => Route$4
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$4
});
var AuthenticatedRoomsIndexRoute = Route.update({
	id: "/rooms/",
	path: "/rooms/",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedRoomsRoomIdRoute: Route$5.update({
		id: "/rooms/$roomId",
		path: "/rooms/$roomId",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedRoomsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AuthRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
