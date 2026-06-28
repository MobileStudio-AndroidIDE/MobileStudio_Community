globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/LanguageSelect-DqesCVdA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1333-ksZ/NrO7NzJnPtv/2DKDg1acT6c\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 4915,
		"path": "../public/assets/LanguageSelect-DqesCVdA.js"
	},
	"/assets/index-Dz_EWPZR.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"4ea1-SLwCZsyDf6eXCncG4KCKU7qfmKg\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 20129,
		"path": "../public/assets/index-Dz_EWPZR.css"
	},
	"/assets/inter-cyrillic-400-normal-HOLc17fK.woff": {
		"type": "font/woff",
		"etag": "\"2634-ivoNz55T3CYjsRGYVvI78V6Hg84\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 9780,
		"path": "../public/assets/inter-cyrillic-400-normal-HOLc17fK.woff"
	},
	"/assets/inter-cyrillic-400-normal-obahsSVq.woff2": {
		"type": "font/woff2",
		"etag": "\"1e20-2UATdNvSyhAwBTFW7JWXRnJeZyk\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 7712,
		"path": "../public/assets/inter-cyrillic-400-normal-obahsSVq.woff2"
	},
	"/assets/inter-cyrillic-500-normal-BasfLYem.woff2": {
		"type": "font/woff2",
		"etag": "\"1edc-4p+L4DlZmQVqry+RH9lMmJQ+P0U\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 7900,
		"path": "../public/assets/inter-cyrillic-500-normal-BasfLYem.woff2"
	},
	"/assets/inter-cyrillic-500-normal-CxZf_p3X.woff": {
		"type": "font/woff",
		"etag": "\"26d4-lAKYDJFVYDMKcLY/oR+ZyfOsllA\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 9940,
		"path": "../public/assets/inter-cyrillic-500-normal-CxZf_p3X.woff"
	},
	"/assets/inter-cyrillic-600-normal-4D_pXhcN.woff": {
		"type": "font/woff",
		"etag": "\"26d0-I2CCKTFIJy7UNImTmVTFMc8WGWM\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 9936,
		"path": "../public/assets/inter-cyrillic-600-normal-4D_pXhcN.woff"
	},
	"/assets/inter-cyrillic-600-normal-CWCymEST.woff2": {
		"type": "font/woff2",
		"etag": "\"1f24-tca4CMW+seK3RqmUMU0o0VZmyqg\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 7972,
		"path": "../public/assets/inter-cyrillic-600-normal-CWCymEST.woff2"
	},
	"/assets/inter-cyrillic-700-normal-CjBOestx.woff2": {
		"type": "font/woff2",
		"etag": "\"1ee0-D8f9uATzhIzndMrJ0Y11iQjPdds\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 7904,
		"path": "../public/assets/inter-cyrillic-700-normal-CjBOestx.woff2"
	},
	"/assets/inter-cyrillic-ext-400-normal-BQZuk6qB.woff2": {
		"type": "font/woff2",
		"etag": "\"27f8-vx2gCiZcZIS7BSyHWqEe1Lm5p8Y\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 10232,
		"path": "../public/assets/inter-cyrillic-ext-400-normal-BQZuk6qB.woff2"
	},
	"/assets/inter-cyrillic-700-normal-DrXBdSj3.woff": {
		"type": "font/woff",
		"etag": "\"26b8-AaxySEnVJ+M+6514gHrK4csJma0\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 9912,
		"path": "../public/assets/inter-cyrillic-700-normal-DrXBdSj3.woff"
	},
	"/assets/inter-cyrillic-ext-400-normal-DQukG94-.woff": {
		"type": "font/woff",
		"etag": "\"3418-0efK3fiFhInlHHjq0SFm+GVey2Y\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 13336,
		"path": "../public/assets/inter-cyrillic-ext-400-normal-DQukG94-.woff"
	},
	"/assets/inter-cyrillic-ext-500-normal-B0yAr1jD.woff2": {
		"type": "font/woff2",
		"etag": "\"28c0-a4jJ9g181ZteaPVR7IOs0hVwtQg\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 10432,
		"path": "../public/assets/inter-cyrillic-ext-500-normal-B0yAr1jD.woff2"
	},
	"/assets/inter-cyrillic-ext-500-normal-BmqWE9Dz.woff": {
		"type": "font/woff",
		"etag": "\"348c-1TbeWRwD3bVotPqIc3c/7sVxfo0\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 13452,
		"path": "../public/assets/inter-cyrillic-ext-500-normal-BmqWE9Dz.woff"
	},
	"/assets/inter-cyrillic-ext-600-normal-Bcila6Z-.woff": {
		"type": "font/woff",
		"etag": "\"3498-zNJjP5Amk16bEdqbbZNObDtX308\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 13464,
		"path": "../public/assets/inter-cyrillic-ext-600-normal-Bcila6Z-.woff"
	},
	"/assets/inter-cyrillic-ext-600-normal-Dfes3d0z.woff2": {
		"type": "font/woff2",
		"etag": "\"28f4-KdWYNIoSwUf7MLulzakpM8nepFc\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 10484,
		"path": "../public/assets/inter-cyrillic-ext-600-normal-Dfes3d0z.woff2"
	},
	"/assets/auth-DHqZK0uy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10fb-M9txgCpCjlWU3KYlrcaYPjh29co\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 4347,
		"path": "../public/assets/auth-DHqZK0uy.js"
	},
	"/assets/inter-cyrillic-ext-700-normal-BjwYoWNd.woff2": {
		"type": "font/woff2",
		"etag": "\"2900-0N8FIokKpqZhWi+D5DLndc4iUGY\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 10496,
		"path": "../public/assets/inter-cyrillic-ext-700-normal-BjwYoWNd.woff2"
	},
	"/assets/inter-greek-400-normal-B4URO6DV.woff2": {
		"type": "font/woff2",
		"etag": "\"1e60-ha06h5lB7nxuWvNKf61Dcnc1d1I\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 7776,
		"path": "../public/assets/inter-greek-400-normal-B4URO6DV.woff2"
	},
	"/assets/inter-cyrillic-ext-700-normal-LO58E6JB.woff": {
		"type": "font/woff",
		"etag": "\"3460-O0B5vyXV2ljXcmbQhvmTQJXWVuc\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 13408,
		"path": "../public/assets/inter-cyrillic-ext-700-normal-LO58E6JB.woff"
	},
	"/assets/inter-greek-500-normal-BIZE56-Y.woff2": {
		"type": "font/woff2",
		"etag": "\"1ef0-rzB1Hth7JnUPaEXqA8yr0SpwMxk\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 7920,
		"path": "../public/assets/inter-greek-500-normal-BIZE56-Y.woff2"
	},
	"/assets/inter-greek-400-normal-q2sYcFCs.woff": {
		"type": "font/woff",
		"etag": "\"26c4-bdX1N3nNMZxQdZJFiVUIvfgvPUk\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 9924,
		"path": "../public/assets/inter-greek-400-normal-q2sYcFCs.woff"
	},
	"/assets/inter-greek-500-normal-Xzm54t5V.woff": {
		"type": "font/woff",
		"etag": "\"26fc-aBzOXUzctfu1t0AWou6edVMARPA\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 9980,
		"path": "../public/assets/inter-greek-500-normal-Xzm54t5V.woff"
	},
	"/assets/inter-greek-600-normal-BZpKdvQh.woff": {
		"type": "font/woff",
		"etag": "\"2730-u0VEy1HjIfUMvAeVgiAlRXW3Gg0\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 10032,
		"path": "../public/assets/inter-greek-600-normal-BZpKdvQh.woff"
	},
	"/assets/index-HXZKSNBI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9844d-A9bz7lY2uWyza+xFeTjExf+XLV8\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 623693,
		"path": "../public/assets/index-HXZKSNBI.js"
	},
	"/assets/inter-greek-600-normal-plRanbMR.woff2": {
		"type": "font/woff2",
		"etag": "\"1f08-dL8q9T10oywr5Ie+w0fBRkD/K6s\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 7944,
		"path": "../public/assets/inter-greek-600-normal-plRanbMR.woff2"
	},
	"/assets/inter-greek-700-normal-C3JjAnD8.woff2": {
		"type": "font/woff2",
		"etag": "\"1ef0-LHrivJw+k04PRvScx047LwlyCQM\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 7920,
		"path": "../public/assets/inter-greek-700-normal-C3JjAnD8.woff2"
	},
	"/assets/inter-greek-700-normal-BUv2fZ6O.woff": {
		"type": "font/woff",
		"etag": "\"26fc-6VHcgzrZm5Dq3Ofg/SG0LimdBHI\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 9980,
		"path": "../public/assets/inter-greek-700-normal-BUv2fZ6O.woff"
	},
	"/assets/inter-greek-ext-400-normal-DGGRlc-M.woff2": {
		"type": "font/woff2",
		"etag": "\"1490-FueWPOzdNQpScjKjfRcVv5Yv1HM\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 5264,
		"path": "../public/assets/inter-greek-ext-400-normal-DGGRlc-M.woff2"
	},
	"/assets/inter-greek-ext-500-normal-2j5mBUwD.woff": {
		"type": "font/woff",
		"etag": "\"1c18-qcQk7wkL8ZD2jgfjekhd8K3qWn0\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 7192,
		"path": "../public/assets/inter-greek-ext-500-normal-2j5mBUwD.woff"
	},
	"/assets/inter-greek-ext-500-normal-C4iEst2y.woff2": {
		"type": "font/woff2",
		"etag": "\"1534-eUg1Jo5WjHY2xgQTOkilC7LKn3I\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 5428,
		"path": "../public/assets/inter-greek-ext-500-normal-C4iEst2y.woff2"
	},
	"/assets/inter-greek-ext-400-normal-KugGGMne.woff": {
		"type": "font/woff",
		"etag": "\"1b98-M0BooO/fFnrQlgRJzUMnDMWQ/Qo\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 7064,
		"path": "../public/assets/inter-greek-ext-400-normal-KugGGMne.woff"
	},
	"/assets/inter-greek-ext-600-normal-B8X0CLgF.woff": {
		"type": "font/woff",
		"etag": "\"1c2c-ceWCifetUVyF5uPKYdA318gl/j8\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 7212,
		"path": "../public/assets/inter-greek-ext-600-normal-B8X0CLgF.woff"
	},
	"/assets/inter-greek-ext-600-normal-DRtmH8MT.woff2": {
		"type": "font/woff2",
		"etag": "\"1538-GoE9+rMXdldLs0MUbnyI6GfidCU\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 5432,
		"path": "../public/assets/inter-greek-ext-600-normal-DRtmH8MT.woff2"
	},
	"/assets/inter-greek-ext-700-normal-BoQ6DsYi.woff": {
		"type": "font/woff",
		"etag": "\"1c30-9rBd06jWL1DufBIVe/ZeKo67yXU\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 7216,
		"path": "../public/assets/inter-greek-ext-700-normal-BoQ6DsYi.woff"
	},
	"/assets/inter-greek-ext-700-normal-qfdV9bQt.woff2": {
		"type": "font/woff2",
		"etag": "\"1544-Po0VSwP0X4mCd4Bi+vzYGFAlRtE\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 5444,
		"path": "../public/assets/inter-greek-ext-700-normal-qfdV9bQt.woff2"
	},
	"/assets/inter-latin-400-normal-C38fXH4l.woff2": {
		"type": "font/woff2",
		"etag": "\"5c70-aPZFxrb/EuJcVLE9TtEZ5jHcuyY\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 23664,
		"path": "../public/assets/inter-latin-400-normal-C38fXH4l.woff2"
	},
	"/assets/inter-latin-400-normal-CyCys3Eg.woff": {
		"type": "font/woff",
		"etag": "\"77e8-SbvLwKxssThdk7eEO6Aafq1EDIA\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 30696,
		"path": "../public/assets/inter-latin-400-normal-CyCys3Eg.woff"
	},
	"/assets/inter-latin-500-normal-BL9OpVg8.woff": {
		"type": "font/woff",
		"etag": "\"7a34-RiJoWDij89wbmUrQ9vApTdR9iMs\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 31284,
		"path": "../public/assets/inter-latin-500-normal-BL9OpVg8.woff"
	},
	"/assets/inter-latin-500-normal-Cerq10X2.woff2": {
		"type": "font/woff2",
		"etag": "\"5ed0-a2bHQb+Lw84kivBLIFGmSKODkdY\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 24272,
		"path": "../public/assets/inter-latin-500-normal-Cerq10X2.woff2"
	},
	"/assets/inter-latin-600-normal-CiBQ2DWP.woff": {
		"type": "font/woff",
		"etag": "\"7a1c-7yTNkhBBRpiqSdmpUeo8hP6GAv8\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 31260,
		"path": "../public/assets/inter-latin-600-normal-CiBQ2DWP.woff"
	},
	"/assets/inter-latin-600-normal-LgqL8muc.woff2": {
		"type": "font/woff2",
		"etag": "\"5f84-4NYfbcUR1koHKy9NyU4VXs8btvY\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 24452,
		"path": "../public/assets/inter-latin-600-normal-LgqL8muc.woff2"
	},
	"/assets/inter-latin-ext-400-normal-77YHD8bZ.woff": {
		"type": "font/woff",
		"etag": "\"b9c8-Bhja6T6VCwLwb1wadgBSy3MfJBM\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 47560,
		"path": "../public/assets/inter-latin-ext-400-normal-77YHD8bZ.woff"
	},
	"/assets/inter-latin-700-normal-Yt3aPRUw.woff2": {
		"type": "font/woff2",
		"etag": "\"5f24-UZenrrIkVBEKofPvPtTJjKfvG6E\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 24356,
		"path": "../public/assets/inter-latin-700-normal-Yt3aPRUw.woff2"
	},
	"/assets/inter-latin-700-normal-BLAVimhd.woff": {
		"type": "font/woff",
		"etag": "\"7a58-cQvU1F9kXU/ZpvVIy7T98mV4J+E\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 31320,
		"path": "../public/assets/inter-latin-700-normal-BLAVimhd.woff"
	},
	"/assets/inter-latin-ext-400-normal-C1nco2VV.woff2": {
		"type": "font/woff2",
		"etag": "\"88b8-G/H4NxekwCldh2+r75P8W7SzF98\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 35e3,
		"path": "../public/assets/inter-latin-ext-400-normal-C1nco2VV.woff2"
	},
	"/assets/inter-latin-ext-500-normal-BxGbmqWO.woff": {
		"type": "font/woff",
		"etag": "\"bd6c-QCyyMz9w4NbwgJiEMxZozI/r+Ds\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 48492,
		"path": "../public/assets/inter-latin-ext-500-normal-BxGbmqWO.woff"
	},
	"/assets/inter-latin-ext-500-normal-CV4jyFjo.woff2": {
		"type": "font/woff2",
		"etag": "\"8cb8-ncqRX/i2leXjDT1PI3s6qVpmf6g\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 36024,
		"path": "../public/assets/inter-latin-ext-500-normal-CV4jyFjo.woff2"
	},
	"/assets/inter-latin-ext-600-normal-CIVaiw4L.woff": {
		"type": "font/woff",
		"etag": "\"be1c-8cD1HFH6FU9hlLytWwPGGUY70n4\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 48668,
		"path": "../public/assets/inter-latin-ext-600-normal-CIVaiw4L.woff"
	},
	"/assets/inter-latin-ext-600-normal-D2bJ5OIk.woff2": {
		"type": "font/woff2",
		"etag": "\"8da4-7QGAEIYrxx26VfuVX2p4gRkHOKo\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 36260,
		"path": "../public/assets/inter-latin-ext-600-normal-D2bJ5OIk.woff2"
	},
	"/assets/inter-latin-ext-700-normal-Ca8adRJv.woff2": {
		"type": "font/woff2",
		"etag": "\"8d94-yNVVBni5SnCMi1iBd7oIoQ4VttA\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 36244,
		"path": "../public/assets/inter-latin-ext-700-normal-Ca8adRJv.woff2"
	},
	"/assets/inter-latin-ext-700-normal-TidjK2hL.woff": {
		"type": "font/woff",
		"etag": "\"bdf8-cQlr/tU/y6KwF0S0VxtHZkfIWHg\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 48632,
		"path": "../public/assets/inter-latin-ext-700-normal-TidjK2hL.woff"
	},
	"/assets/inter-vietnamese-400-normal-Bbgyi5SW.woff": {
		"type": "font/woff",
		"etag": "\"1964-Uz2qf+4P37GRYrj2tnfiNdz3cwc\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 6500,
		"path": "../public/assets/inter-vietnamese-400-normal-Bbgyi5SW.woff"
	},
	"/assets/inter-vietnamese-400-normal-DMkecbls.woff2": {
		"type": "font/woff2",
		"etag": "\"136c-x5LSIOvtcMpNpAaXtHsgRr9Y068\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 4972,
		"path": "../public/assets/inter-vietnamese-400-normal-DMkecbls.woff2"
	},
	"/assets/inter-vietnamese-500-normal-DOriooB6.woff2": {
		"type": "font/woff2",
		"etag": "\"13f8-CUM23jWJKM6nB7lsyh1fHy5MoZ4\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 5112,
		"path": "../public/assets/inter-vietnamese-500-normal-DOriooB6.woff2"
	},
	"/assets/inter-vietnamese-500-normal-mJboJaSs.woff": {
		"type": "font/woff",
		"etag": "\"19c4-GIi0pWixVrurGnEPzcWNPRmQHPA\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 6596,
		"path": "../public/assets/inter-vietnamese-500-normal-mJboJaSs.woff"
	},
	"/assets/inter-vietnamese-600-normal-BuLX-rYi.woff": {
		"type": "font/woff",
		"etag": "\"19f0-dZ/EhN2gqjVMAOO8T5PiEnOw62w\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 6640,
		"path": "../public/assets/inter-vietnamese-600-normal-BuLX-rYi.woff"
	},
	"/assets/inter-vietnamese-600-normal-Cc8MFFhd.woff2": {
		"type": "font/woff2",
		"etag": "\"13ec-+Z5aj32FhioUUaW+56MD6v89VjU\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 5100,
		"path": "../public/assets/inter-vietnamese-600-normal-Cc8MFFhd.woff2"
	},
	"/assets/inter-vietnamese-700-normal-BZaoP0fm.woff": {
		"type": "font/woff",
		"etag": "\"19e8-bdSpfj6ZS6+Lvz7ijFjLexeYSQ4\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 6632,
		"path": "../public/assets/inter-vietnamese-700-normal-BZaoP0fm.woff"
	},
	"/assets/inter-vietnamese-700-normal-DlLaEgI2.woff2": {
		"type": "font/woff2",
		"etag": "\"13f0-2+yadyA0heA/Lel/M8LdWlzEV1U\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 5104,
		"path": "../public/assets/inter-vietnamese-700-normal-DlLaEgI2.woff2"
	},
	"/assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2": {
		"type": "font/woff2",
		"etag": "\"14d0-wP6+M+HGdr9/ksFVSvTe+I0Y0rI\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 5328,
		"path": "../public/assets/jetbrains-mono-cyrillic-400-normal-BEIGL1Tu.woff2"
	},
	"/assets/jetbrains-mono-cyrillic-400-normal-ugxPyKxw.woff": {
		"type": "font/woff",
		"etag": "\"1b40-oGh4jaPe06qJnXZqmnfGfJQP4Ag\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 6976,
		"path": "../public/assets/jetbrains-mono-cyrillic-400-normal-ugxPyKxw.woff"
	},
	"/assets/jetbrains-mono-greek-400-normal-B9oWc5Lo.woff": {
		"type": "font/woff",
		"etag": "\"1620-uF5DPKyxthnzZIfm2hBQUEmcCDI\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 5664,
		"path": "../public/assets/jetbrains-mono-greek-400-normal-B9oWc5Lo.woff"
	},
	"/assets/jetbrains-mono-greek-400-normal-C190GLew.woff2": {
		"type": "font/woff2",
		"etag": "\"1084-bKcqPuNhRWWCQbsWLqSOoRkxv70\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 4228,
		"path": "../public/assets/jetbrains-mono-greek-400-normal-C190GLew.woff2"
	},
	"/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff": {
		"type": "font/woff",
		"etag": "\"6b68-PjVYVbMXaGEDnHrQQmycVNcGrEA\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 27496,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff"
	},
	"/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2": {
		"type": "font/woff2",
		"etag": "\"52b0-OuYhUYIQ5ljyzsko4MOu3m0M7+I\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 21168,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2"
	},
	"/assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2": {
		"type": "font/woff2",
		"etag": "\"1ca8-sBWBn421OuV4ZHOZxHJjafE1huU\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 7336,
		"path": "../public/assets/jetbrains-mono-latin-ext-400-normal-Bc8Ftmh3.woff2"
	},
	"/assets/jetbrains-mono-latin-ext-400-normal-fXTG6kC5.woff": {
		"type": "font/woff",
		"etag": "\"2790-MZORDuKd3VMoaYVXmW8yROWL9sY\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 10128,
		"path": "../public/assets/jetbrains-mono-latin-ext-400-normal-fXTG6kC5.woff"
	},
	"/assets/jetbrains-mono-vietnamese-400-normal-CqNFfHCs.woff": {
		"type": "font/woff",
		"etag": "\"14fc-wa8Pi/SxAFg9ve8x5GbO/sMJWEo\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 5372,
		"path": "../public/assets/jetbrains-mono-vietnamese-400-normal-CqNFfHCs.woff"
	},
	"/assets/rooms._roomId-BHOu931Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7bd2-Xq6K21n5uTiZ9CKdb/1VFg17nfU\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 31698,
		"path": "../public/assets/rooms._roomId-BHOu931Q.js"
	},
	"/assets/rooms.index-C3nJVP8a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1735-ZR8hUrmRWN72tN7q+GS2My1nV1Q\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 5941,
		"path": "../public/assets/rooms.index-C3nJVP8a.js"
	},
	"/assets/route-1lh7duJg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"86-JUWI6XmM3tHPEPxyeNTOu1KucyU\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 134,
		"path": "../public/assets/route-1lh7duJg.js"
	},
	"/assets/routes-DJ7LAi8J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26-SoFMfAHVJ5oqB5t+mpFRoQvFIoc\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 38,
		"path": "../public/assets/routes-DJ7LAi8J.js"
	},
	"/assets/shim-B6x9DQbW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2646-KSYL2xeYBG6j9OAQsqHheNKjx4o\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 9798,
		"path": "../public/assets/shim-B6x9DQbW.js"
	},
	"/assets/styles-HjnZbk6U.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12969-yQI6GRCbkrljuf14Up4BmeH6QLs\"",
		"mtime": "2026-06-28T03:52:59.200Z",
		"size": 76137,
		"path": "../public/assets/styles-HjnZbk6U.css"
	},
	"/assets/users-COH0zWHA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"648-z5LnsvzHQ3n/4lwKwMXoNzwP7fU\"",
		"mtime": "2026-06-28T03:52:59.196Z",
		"size": 1608,
		"path": "../public/assets/users-COH0zWHA.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_azkoIb = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_azkoIb
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
