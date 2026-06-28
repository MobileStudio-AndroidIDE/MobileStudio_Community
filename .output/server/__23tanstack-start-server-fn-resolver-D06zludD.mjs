//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-D06zludD.js
var manifest = {
	"290131d2b542a74e48ac22bde44d2ca08d5de78f415fe4f4ef947a4f7831fc1f": {
		functionName: "detectLanguage_createServerFn_handler",
		importer: () => import("./_ssr/translate.functions-D1f1KE1a.mjs")
	},
	"923a5261ae4ef344d627d5738bf40c7cf9d0d2df09dff176b88978a9a856c370": {
		functionName: "translateText_createServerFn_handler",
		importer: () => import("./_ssr/translate.functions-D1f1KE1a.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
