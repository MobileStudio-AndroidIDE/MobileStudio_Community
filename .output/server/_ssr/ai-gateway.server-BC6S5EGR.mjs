import { t as createOpenAICompatible } from "../_libs/ai-sdk__openai-compatible.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-gateway.server-BC6S5EGR.js
function createLovableAiGatewayProvider(lovableApiKey) {
	return createOpenAICompatible({
		name: "lovable",
		baseURL: "https://ai.gateway.lovable.dev/v1",
		headers: {
			"Lovable-API-Key": lovableApiKey,
			"X-Lovable-AIG-SDK": "vercel-ai-sdk"
		}
	});
}
//#endregion
export { createLovableAiGatewayProvider };
