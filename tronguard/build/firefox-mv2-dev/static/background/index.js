(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9QtLS":[function(require,module,exports) {
var u = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var h = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), b = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var v = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/enriccogemha/Developer/VANguard/tronguard/.plasmo/static/background/index.ts",
    "bundleId": "d40ef941aeab42a0",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 60160
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function T(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function L(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", T), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", T), t.addEventListener("open", ()=>{
        b(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    v();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
L(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"iJkwT":[function(require,module,exports) {
var _background = require("../../../background");

},{"../../../background":"9kAbl"}],"9kAbl":[function(require,module,exports) {
let connectionsByTab = {};
let cookieDetailsByTab = {};
let localStorageByTab = {};
const servicePorts = {
    http: 80,
    https: 443
};
browser.webRequest.onBeforeRequest.addListener(function(details) {
    if (details.tabId !== -1 && details.originUrl && new URL(details.url).hostname !== new URL(details.originUrl).hostname) {
        if (!connectionsByTab[details.tabId]) connectionsByTab[details.tabId] = {};
        connectionsByTab[details.tabId][details.url] = (connectionsByTab[details.tabId][details.url] || 0) + 1;
    }
}, {
    urls: [
        "<all_urls>"
    ]
});
browser.webRequest.onHeadersReceived.addListener(function(details) {
    if (details.tabId !== -1) {
        const url = new URL(details.url);
        const isThirdParty = details.initiator && !details.initiator.endsWith(url.hostname);
        const cookieType = isThirdParty ? "thirdParty" : "firstParty";
        const cookieDetailType = isThirdParty ? "thirdPartyDetails" : "firstPartyDetails";
        if (!cookieDetailsByTab[details.tabId]) cookieDetailsByTab[details.tabId] = {
            firstParty: 0,
            thirdParty: 0,
            firstPartyDetails: {},
            thirdPartyDetails: {}
        };
        details.responseHeaders.forEach((header)=>{
            if (header.name.toLowerCase() === "set-cookie") {
                let cookieName = header.value.split("=")[0].trim();
                cookieDetailsByTab[details.tabId][cookieType]++;
                if (cookieDetailsByTab[details.tabId][cookieDetailType][cookieName]) cookieDetailsByTab[details.tabId][cookieDetailType][cookieName]++;
                else cookieDetailsByTab[details.tabId][cookieDetailType][cookieName] = 1;
            }
        });
    }
}, {
    urls: [
        "<all_urls>"
    ]
}, [
    "responseHeaders"
]);
browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let tabId = sender.tab ? sender.tab.id : request.tabId;
    switch(request.action){
        case "get_connections":
            let connections = connectionsByTab[tabId] ? connectionsByTab[tabId] : {};
            sendResponse({
                connections: connections
            });
            break;
        case "get_cookies":
            let cookies = getCookiesDetails(tabId);
            sendResponse({
                cookies: cookies
            });
            break;
        case "get_local_storage":
            getLocalStorage(tabId, sendResponse);
            return true; // Required to keep the message channel open for async response
        default:
            console.log("Unknown action:", request.action);
            break;
    }
    return true;
});
// Cleanup on tab removal
browser.tabs.onRemoved.addListener(function(tabId) {
    delete connectionsByTab[tabId];
    delete cookieDetailsByTab[tabId];
    delete localStorageByTab[tabId];
});
// Reset data on tab update (e.g., when the URL changes)
browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "loading") {
        connectionsByTab[tabId] = {};
        cookieDetailsByTab[tabId] = {
            firstParty: 0,
            thirdParty: 0,
            firstPartyDetails: {},
            thirdPartyDetails: {}
        };
        localStorageByTab[tabId] = {};
    }
});
// Helper functions to get cookie details and local storage data
function getCookiesDetails(tabId) {
    let details = cookieDetailsByTab[tabId];
    if (details) return {
        firstParty: details.firstParty,
        thirdParty: details.thirdParty,
        firstPartyDetails: details.firstPartyDetails,
        thirdPartyDetails: details.thirdPartyDetails
    };
    return {
        firstParty: 0,
        thirdParty: 0,
        firstPartyDetails: {},
        thirdPartyDetails: {}
    };
}
function getLocalStorage(tabId, sendResponse) {
    browser.tabs.executeScript(tabId, {
        code: `
      JSON.stringify({
        localStorageCount: Object.keys(localStorage).length,
        sessionStorageCount: Object.keys(sessionStorage).length,
        localStorage: Object.entries(localStorage).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {}),
        sessionStorage: Object.entries(sessionStorage).reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
      });
    `
    }).then((results)=>{
        if (results && results[0]) {
            const data = JSON.parse(results[0]);
            localStorageByTab[tabId] = data;
            sendResponse({
                data: data
            });
        } else sendResponse({
            error: "No data received"
        });
    }).catch((error)=>{
        console.error(`Error executing script in tab ${tabId}:`, error);
        sendResponse({
            error: error.message
        });
    });
}

},{}]},["9QtLS","iJkwT"], "iJkwT", "parcelRequire86da")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksSUFBRSxPQUFPLFdBQVcsVUFBUSxNQUFJLFdBQVcsUUFBUSxPQUFLLEVBQUU7QUFBQyxJQUFJLElBQUUsSUFBSSxPQUFPLFdBQVcsVUFBUSxNQUFJLFdBQVcsUUFBUSxNQUFJLENBQUM7QUFBRSxJQUFJLElBQUUsSUFBSSxJQUFJLElBQUcsSUFBRSxDQUFBLElBQUcsRUFBRSxJQUFJLElBQUcsSUFBRSxFQUFFLE9BQU8sQ0FBQSxJQUFHLEVBQUUsV0FBVyxTQUFPLEVBQUUsU0FBUyxNQUFNLElBQUksQ0FBQSxJQUFHLEVBQUUsTUFBTSxNQUFNLE9BQU8sQ0FBQyxHQUFFLENBQUMsR0FBRSxFQUFFLEdBQUksQ0FBQSxDQUFDLENBQUMsRUFBRSxHQUFDLEdBQUUsQ0FBQSxHQUFHLENBQUM7QUFBRyxJQUFJLElBQUUsRUFBRSxjQUFhLElBQUUsSUFBSSxFQUFFLGdCQUFjLElBQUksWUFBVSxRQUFPLElBQUU7QUFBSSxJQUFJLElBQUUsQ0FBQyxJQUFFLEVBQUUsRUFBQyxHQUFHLElBQUksUUFBUSxJQUFJLEVBQUUsT0FBTyxJQUFHLFFBQU87QUFBRyxJQUFJLElBQUUsQ0FBQyxHQUFHLElBQUksUUFBUSxNQUFNLHFCQUFrQixPQUFPLElBQUcsUUFBTyxJQUFHLElBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSx3QkFBb0IsSUFBRyxJQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsd0JBQW9CLElBQUcsSUFBRSxHQUFFLElBQUUsQ0FBQyxHQUFHLElBQUksT0FBSyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFJO0FBQUcsSUFBSSxJQUFFO0lBQUssSUFBSSxJQUFFLFdBQVcsU0FBUyxXQUFTLFdBQVcsUUFBUSxTQUFRLElBQUUsSUFBSSxZQUFZLEVBQUUsaUJBQWdCO0lBQU0sRUFBRSxVQUFVLFlBQVksSUFBRztBQUFHO0FBQUUsSUFBSSxJQUFFO0lBQUMsbUJBQWtCO0lBQU0sZ0JBQWU7SUFBSyxXQUFVO0lBQU0sWUFBVztRQUFDO0tBQTZCO0lBQUMsUUFBTztJQUFZLFFBQU87SUFBSyxpQkFBZ0I7SUFBc0YsWUFBVztJQUFtQixXQUFVO0lBQW1CLFdBQVU7SUFBUSxVQUFTO0lBQU0sY0FBYTtBQUFLO0FBQUUsT0FBTyxPQUFPLGdCQUFjLEVBQUU7QUFBUyxXQUFXLFVBQVE7SUFBQyxNQUFLLEVBQUU7SUFBQyxLQUFJO1FBQUMsU0FBUSxFQUFFO0lBQU87QUFBQztBQUFFLElBQUksSUFBRSxPQUFPLE9BQU87QUFBTyxTQUFTLEVBQUUsQ0FBQztJQUFFLEVBQUUsS0FBSyxJQUFJLEVBQUMsSUFBRyxJQUFJLENBQUMsTUFBSTtRQUFDLE1BQUssT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFO1FBQUMsa0JBQWlCLEVBQUU7UUFBQyxtQkFBa0IsRUFBRTtRQUFDLFFBQU8sU0FBUyxDQUFDO1lBQUUsSUFBSSxDQUFDLGlCQUFpQixLQUFLLEtBQUcsWUFBVztRQUFFO1FBQUUsU0FBUSxTQUFTLENBQUM7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUs7UUFBRTtJQUFDLEdBQUUsT0FBTyxPQUFPLE9BQU8sQ0FBQyxFQUFFLEdBQUMsS0FBSztBQUFDO0FBQUMsT0FBTyxPQUFPLFNBQU87QUFBRSxPQUFPLE9BQU8sVUFBUSxDQUFDO0FBQUUsSUFBSSxJQUFFLFdBQVcsV0FBUyxXQUFXLFVBQVE7QUFBSyxTQUFTO0lBQUksT0FBTSxDQUFDLEVBQUUsUUFBTSxFQUFFLFNBQU8sWUFBVSxTQUFTLFNBQVMsUUFBUSxZQUFVLElBQUUsU0FBUyxXQUFTLGNBQVksRUFBRTtBQUFJO0FBQUMsU0FBUztJQUFJLE9BQU0sQ0FBQyxFQUFFLFFBQU0sRUFBRSxTQUFPLFlBQVUsY0FBWSxFQUFFO0FBQUk7QUFBQyxTQUFTO0lBQUksT0FBTyxFQUFFLFFBQU0sU0FBUztBQUFJO0FBQUMsSUFBSSxJQUFFLDBCQUF5QixJQUFFO0FBQTJCLElBQUksSUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFPLFVBQVEsT0FBTyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFBQyxlQUFlLEVBQUUsSUFBRSxJQUFJO0lBQUUsT0FBTyxJQUFHO1FBQUMsTUFBTSxNQUFNO1FBQUc7SUFBSyxFQUFDLE9BQUs7UUFBQyxNQUFNLElBQUksUUFBUSxDQUFBLElBQUcsV0FBVyxHQUFFO0lBQUc7QUFBQztBQUFDLElBQUcsRUFBRSxRQUFRLGNBQWMscUJBQW1CLEdBQUU7SUFBQyxJQUFJLElBQUUsRUFBRSxRQUFRLE9BQU87SUFBOEIsV0FBVyxpQkFBaUIsU0FBUSxTQUFTLENBQUM7UUFBRSxJQUFJLElBQUUsRUFBRSxRQUFRO1FBQUksSUFBRyxFQUFFLFdBQVcsSUFBRztZQUFDLElBQUksSUFBRSxJQUFJLElBQUksbUJBQW1CLEVBQUUsTUFBTSxFQUFFO1lBQVUsRUFBRSxhQUFXLEVBQUUsUUFBTSxFQUFFLFNBQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUUsQ0FBQSxFQUFFLGFBQWEsSUFBSSxLQUFJLEtBQUssTUFBTSxhQUFZLEVBQUUsWUFBWSxNQUFNLEdBQUcsS0FBSyxDQUFBLElBQUcsSUFBSSxTQUFTLEVBQUUsTUFBSztvQkFBQyxTQUFRO3dCQUFDLGdCQUFlLEVBQUUsUUFBUSxJQUFJLG1CQUFpQjtvQkFBaUI7Z0JBQUMsSUFBRyxJQUFHLEVBQUUsWUFBWSxJQUFJLFNBQVMsY0FBYTtnQkFBQyxRQUFPO2dCQUFJLFlBQVc7WUFBUztRQUFHO0lBQUM7QUFBRTtBQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUFFLElBQUcsRUFBQyxTQUFRLENBQUMsRUFBQyxHQUFDO0lBQUUsT0FBTyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFDLENBQUM7QUFBQztBQUFDLFNBQVMsRUFBRSxJQUFFLEdBQUc7SUFBRSxJQUFJLElBQUU7SUFBSSxPQUFNLENBQUMsRUFBRSxFQUFFLFVBQVEsU0FBUyxhQUFXLFlBQVUsQ0FBQyw4QkFBOEIsS0FBSyxLQUFHLFFBQU0sS0FBSyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFBQTtBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsT0FBTyxFQUFFLFdBQVMsWUFBVSxFQUFFLDhCQUE0QixFQUFFO0FBQVE7QUFBQyxTQUFTLEVBQUUsQ0FBQztJQUFFLElBQUcsT0FBTyxXQUFXLFlBQVUsS0FBSTtJQUFPLElBQUksSUFBRSxJQUFJLFVBQVUsRUFBRSxPQUFPLE9BQUs7SUFBSSxPQUFPLEVBQUUsaUJBQWlCLFdBQVUsZUFBZSxDQUFDO1FBQUUsSUFBSSxJQUFFLEtBQUssTUFBTSxFQUFFO1FBQU0sTUFBTSxFQUFFO0lBQUUsSUFBRyxFQUFFLGlCQUFpQixTQUFRLElBQUc7QUFBQztBQUFDLFNBQVMsRUFBRSxDQUFDO0lBQUUsSUFBRyxPQUFPLFdBQVcsWUFBVSxLQUFJO0lBQU8sSUFBSSxJQUFFLElBQUksVUFBVTtJQUFLLE9BQU8sRUFBRSxpQkFBaUIsV0FBVSxlQUFlLENBQUM7UUFBRSxJQUFJLElBQUUsS0FBSyxNQUFNLEVBQUU7UUFBTSxJQUFHLEVBQUUsU0FBTyxZQUFVLE1BQU0sRUFBRSxFQUFFLFNBQVEsRUFBRSxTQUFPLFNBQVEsS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZLEtBQUs7WUFBQyxJQUFJLElBQUUsRUFBRSxhQUFXLEVBQUU7WUFBTSxFQUFFLDhCQUE0QixFQUFFLFVBQVEsQ0FBQztBQUNseEcsQ0FBQyxHQUFDLElBQUUsQ0FBQzs7QUFFTCxDQUFDLEdBQUMsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUNoQixDQUFDO1FBQUU7SUFBQyxJQUFHLEVBQUUsaUJBQWlCLFNBQVEsSUFBRyxFQUFFLGlCQUFpQixRQUFPO1FBQUssRUFBRSxDQUFDLHFEQUFxRCxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRyxFQUFFLGlCQUFpQixTQUFRO1FBQUssRUFBRSxDQUFDLG9FQUFvRSxFQUFFLEVBQUUsY0FBYyxDQUFDO0lBQUMsSUFBRztBQUFDO0FBQUMsSUFBSSxJQUFFLE9BQU8sT0FBTyxRQUFPLElBQUU7SUFBQyxZQUFXLENBQUM7SUFBRSxXQUFVLENBQUM7SUFBRSxXQUFVLENBQUM7SUFBRSxhQUFZLENBQUM7SUFBRSxhQUFZLElBQUk7SUFBSSxXQUFVLElBQUk7QUFBRztBQUFFLGVBQWUsRUFBRSxJQUFFLENBQUMsQ0FBQztJQUFFLElBQUcsS0FBRyxFQUFFLGNBQVksRUFBRSxhQUFZO1FBQUMsRUFBRTtRQUFpQyxLQUFJLElBQUksS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZO0lBQUs7SUFBQyxJQUFHLEtBQUcsRUFBRSxjQUFhLENBQUEsRUFBRSxhQUFXLEVBQUUsU0FBUSxHQUFHO1FBQUMsRUFBRTtRQUErQixJQUFJLElBQUUsTUFBTSxHQUFHLEtBQUssTUFBTTtZQUFDLFFBQU8sQ0FBQztRQUFDO1FBQUcsS0FBSSxJQUFJLEtBQUssRUFBRSxZQUFZO1lBQUMsSUFBSSxJQUFFLEVBQUUsS0FBSyxDQUFBLElBQUcsRUFBRSxPQUFLLEVBQUUsT0FBTyxLQUFLO1lBQUksRUFBRSxZQUFZO2dCQUFDLDBCQUF5QjtZQUFDO1FBQUU7UUFBQyxFQUFFLFFBQVE7SUFBUTtBQUFDO0FBQUMsSUFBRyxDQUFDLEtBQUcsQ0FBQyxFQUFFLGlCQUFnQjtJQUFDO0lBQUksSUFBSSxJQUFFLEVBQUUsT0FBTTtRQUFJLEVBQUUsaUNBQWdDLEVBQUUsY0FBWSxFQUFFLE9BQU8sQ0FBQSxJQUFHLEVBQUUsWUFBVSxFQUFFLFNBQVMsS0FBSyxDQUFBLElBQUcsRUFBRSxPQUFPLFFBQU8sRUFBRTtRQUFLLElBQUksSUFBRSxFQUFFLEtBQUssQ0FBQSxJQUFHLEVBQUUsU0FBTztRQUFRLElBQUcsR0FBRTtZQUFDLElBQUksSUFBRSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUEsSUFBRyxFQUFFLE1BQUssSUFBRSxPQUFPLE9BQU8sRUFBRSxjQUFjLElBQUksQ0FBQSxJQUFHLE9BQU8sT0FBTyxJQUFJO1lBQU8sRUFBRSxjQUFZLEVBQUUsTUFBTSxDQUFBLElBQUcsRUFBRSxJQUFJO1FBQUc7UUFBQztJQUFHO0lBQUcsRUFBRSxpQkFBaUIsUUFBTztRQUFLLElBQUksSUFBRSxZQUFZLElBQUksRUFBRSxLQUFLLFNBQVE7UUFBTSxFQUFFLGlCQUFpQixTQUFRLElBQUksY0FBYztJQUFHLElBQUcsRUFBRSxpQkFBaUIsU0FBUTtRQUFVLE1BQU0sS0FBSSxFQUFFLENBQUM7SUFBRTtBQUFFO0FBQUMsRUFBRSxPQUFNO0lBQUksT0FBTyxFQUFFLHVDQUFzQyxFQUFFO1FBQU0sS0FBSTtZQUFlLEVBQUUsZUFBYSxDQUFDLEdBQUU7WUFBSTtRQUFNLEtBQUk7WUFBYyxFQUFFLGNBQVksQ0FBQyxHQUFFO1lBQUk7SUFBTTtBQUFDO0FBQUcsRUFBRSxRQUFRLFVBQVUsWUFBWSxTQUFTLENBQUM7SUFBRSxJQUFJLElBQUUsRUFBRSxLQUFLLFdBQVcsSUFBRyxJQUFFLEVBQUUsS0FBSyxXQUFXO0lBQUcsSUFBRyxLQUFHLEdBQUU7UUFBQyxJQUFJLElBQUUsSUFBRSxFQUFFLFlBQVUsRUFBRTtRQUFZLEVBQUUsSUFBSSxJQUFHLEVBQUUsYUFBYSxZQUFZO1lBQUssRUFBRSxPQUFPO1FBQUUsSUFBRyxFQUFFLFVBQVUsWUFBWSxTQUFTLENBQUM7WUFBRSxFQUFFLG9DQUFtQyxJQUFHLEVBQUUseUJBQXdCLENBQUEsRUFBRSxjQUFZLENBQUMsQ0FBQSxHQUFHLEVBQUUsMkJBQTBCLENBQUEsRUFBRSxnQkFBYyxDQUFDLENBQUEsR0FBRztRQUFHO0lBQUU7QUFBQztBQUFHLEVBQUUsUUFBUSxVQUFVLFlBQVksU0FBUyxDQUFDO0lBQUUsT0FBTyxFQUFFLDBCQUF5QixDQUFBLEVBQUUsNkNBQTRDLEdBQUUsR0FBRyxDQUFDO0FBQUM7OztBQ0psN0Q7OztBQ0FBLElBQUksbUJBQW1CLENBQUM7QUFDeEIsSUFBSSxxQkFBcUIsQ0FBQztBQUMxQixJQUFJLG9CQUFvQixDQUFDO0FBRXpCLE1BQU0sZUFBZTtJQUNuQixNQUFNO0lBQ04sT0FBTztBQUNUO0FBRUEsUUFBUSxXQUFXLGdCQUFnQixZQUNqQyxTQUFVLE9BQU87SUFDZixJQUFJLFFBQVEsVUFBVSxNQUFNLFFBQVEsYUFBYSxJQUFJLElBQUksUUFBUSxLQUFLLGFBQWEsSUFBSSxJQUFJLFFBQVEsV0FBVyxVQUFVO1FBQ3RILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLE1BQU0sRUFDbEMsZ0JBQWdCLENBQUMsUUFBUSxNQUFNLEdBQUcsQ0FBQztRQUVyQyxnQkFBZ0IsQ0FBQyxRQUFRLE1BQU0sQ0FBQyxRQUFRLElBQUksR0FBRyxBQUFDLENBQUEsZ0JBQWdCLENBQUMsUUFBUSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQSxJQUFLO0lBQ3ZHO0FBQ0YsR0FDQTtJQUFFLE1BQU07UUFBQztLQUFhO0FBQUM7QUFHekIsUUFBUSxXQUFXLGtCQUFrQixZQUNuQyxTQUFVLE9BQU87SUFDZixJQUFJLFFBQVEsVUFBVSxJQUFJO1FBQ3hCLE1BQU0sTUFBTSxJQUFJLElBQUksUUFBUTtRQUM1QixNQUFNLGVBQWUsUUFBUSxhQUFhLENBQUMsUUFBUSxVQUFVLFNBQVMsSUFBSTtRQUMxRSxNQUFNLGFBQWEsZUFBZSxlQUFlO1FBQ2pELE1BQU0sbUJBQW1CLGVBQWUsc0JBQXNCO1FBRTlELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLE1BQU0sRUFDcEMsa0JBQWtCLENBQUMsUUFBUSxNQUFNLEdBQUc7WUFDbEMsWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUIsQ0FBQztZQUNwQixtQkFBbUIsQ0FBQztRQUN0QjtRQUdGLFFBQVEsZ0JBQWdCLFFBQVEsQ0FBQTtZQUM5QixJQUFJLE9BQU8sS0FBSyxrQkFBa0IsY0FBYztnQkFDOUMsSUFBSSxhQUFhLE9BQU8sTUFBTSxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzVDLGtCQUFrQixDQUFDLFFBQVEsTUFBTSxDQUFDLFdBQVc7Z0JBQzdDLElBQUksa0JBQWtCLENBQUMsUUFBUSxNQUFNLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUNqRSxrQkFBa0IsQ0FBQyxRQUFRLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXO3FCQUUvRCxrQkFBa0IsQ0FBQyxRQUFRLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEdBQUc7WUFFdEU7UUFDRjtJQUNGO0FBQ0YsR0FDQTtJQUFFLE1BQU07UUFBQztLQUFhO0FBQUMsR0FDdkI7SUFBQztDQUFrQjtBQUdyQixRQUFRLFFBQVEsVUFBVSxZQUFZLFNBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZO0lBQzNFLElBQUksUUFBUSxPQUFPLE1BQU0sT0FBTyxJQUFJLEtBQUssUUFBUTtJQUVqRCxPQUFRLFFBQVE7UUFDZCxLQUFLO1lBQ0gsSUFBSSxjQUFjLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN2RSxhQUFhO2dCQUFFLGFBQWE7WUFBWTtZQUN4QztRQUNGLEtBQUs7WUFDSCxJQUFJLFVBQVUsa0JBQWtCO1lBQ2hDLGFBQWE7Z0JBQUUsU0FBUztZQUFRO1lBQ2hDO1FBQ0YsS0FBSztZQUNILGdCQUFnQixPQUFPO1lBQ3ZCLE9BQU8sTUFBTSwrREFBK0Q7UUFDOUU7WUFDRSxRQUFRLElBQUksbUJBQW1CLFFBQVE7WUFDdkM7SUFDSjtJQUNBLE9BQU87QUFDVDtBQUVBLHlCQUF5QjtBQUN6QixRQUFRLEtBQUssVUFBVSxZQUFZLFNBQVUsS0FBSztJQUNoRCxPQUFPLGdCQUFnQixDQUFDLE1BQU07SUFDOUIsT0FBTyxrQkFBa0IsQ0FBQyxNQUFNO0lBQ2hDLE9BQU8saUJBQWlCLENBQUMsTUFBTTtBQUNqQztBQUVBLHdEQUF3RDtBQUN4RCxRQUFRLEtBQUssVUFBVSxZQUFZLFNBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHO0lBQ2pFLElBQUksV0FBVyxXQUFXLFdBQVc7UUFDbkMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDM0Isa0JBQWtCLENBQUMsTUFBTSxHQUFHO1lBQUUsWUFBWTtZQUFHLFlBQVk7WUFBRyxtQkFBbUIsQ0FBQztZQUFHLG1CQUFtQixDQUFDO1FBQUU7UUFDekcsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUM7SUFDOUI7QUFDRjtBQUVBLGdFQUFnRTtBQUNoRSxTQUFTLGtCQUFrQixLQUFLO0lBQzlCLElBQUksVUFBVSxrQkFBa0IsQ0FBQyxNQUFNO0lBQ3ZDLElBQUksU0FDRixPQUFPO1FBQ0wsWUFBWSxRQUFRO1FBQ3BCLFlBQVksUUFBUTtRQUNwQixtQkFBbUIsUUFBUTtRQUMzQixtQkFBbUIsUUFBUTtJQUM3QjtJQUVGLE9BQU87UUFDTCxZQUFZO1FBQ1osWUFBWTtRQUNaLG1CQUFtQixDQUFDO1FBQ3BCLG1CQUFtQixDQUFDO0lBQ3RCO0FBQ0Y7QUFFQSxTQUFTLGdCQUFnQixLQUFLLEVBQUUsWUFBWTtJQUMxQyxRQUFRLEtBQUssY0FBYyxPQUFPO1FBQ2hDLE1BQU0sQ0FBQzs7Ozs7OztJQU9QLENBQUM7SUFDSCxHQUFHLEtBQUssQ0FBQTtRQUNOLElBQUksV0FBVyxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ3pCLE1BQU0sT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDLEVBQUU7WUFDbEMsaUJBQWlCLENBQUMsTUFBTSxHQUFHO1lBQzNCLGFBQWE7Z0JBQUUsTUFBTTtZQUFLO1FBQzVCLE9BQ0UsYUFBYTtZQUFFLE9BQU87UUFBbUI7SUFFN0MsR0FBRyxNQUFNLENBQUE7UUFDUCxRQUFRLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFO1FBQ3pELGFBQWE7WUFBRSxPQUFPLE1BQU07UUFBUTtJQUN0QztBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS0wNjAyYzEyNTE3ZTU1NDJmLmpzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50cyIsImJhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHU9dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuYXJndjpbXTt2YXIgaD0oKT0+dHlwZW9mIGdsb2JhbFRoaXMucHJvY2VzczxcInVcIj9nbG9iYWxUaGlzLnByb2Nlc3MuZW52Ont9O3ZhciBCPW5ldyBTZXQodSksXz1lPT5CLmhhcyhlKSxHPXUuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgVT1fKFwiLS1kcnktcnVuXCIpLGc9KCk9Pl8oXCItLXZlcmJvc2VcIil8fGgoKS5WRVJCT1NFPT09XCJ0cnVlXCIsTj1nKCk7dmFyIG09KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHk9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSxiPSguLi5lKT0+bShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLGY9KC4uLmUpPT5tKFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksTT0wLGk9KC4uLmUpPT5nKCkmJm0oYFxcdXsxRjdFMX0gJHtNKyt9YCwuLi5lKTt2YXIgdj0oKT0+e2xldCBlPWdsb2JhbFRoaXMuYnJvd3Nlcj8ucnVudGltZXx8Z2xvYmFsVGhpcy5jaHJvbWU/LnJ1bnRpbWUsdD0oKT0+c2V0SW50ZXJ2YWwoZS5nZXRQbGF0Zm9ybUluZm8sMjRlMyk7ZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIodCksdCgpfTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjpmYWxzZSxcImlzQmFja2dyb3VuZFwiOnRydWUsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcImJhY2tncm91bmQtc2VydmljZS1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy9lbnJpY2NvZ2VtaGEvRGV2ZWxvcGVyL1ZBTmd1YXJkL3Ryb25ndWFyZC8ucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzXCIsXCJidW5kbGVJZFwiOlwiZDQwZWY5NDFhZWFiNDJhMFwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjYwMTYwfTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEgoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1IO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgYz1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIFIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9sb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKFwiaHR0cFwiKT09PTA/bG9jYXRpb24uaG9zdG5hbWU6XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24geCgpe3JldHVybiFuLmhvc3R8fG4uaG9zdD09PVwiMC4wLjAuMFwiP1wibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIGQoKXtyZXR1cm4gbi5wb3J0fHxsb2NhdGlvbi5wb3J0fXZhciBQPVwiX19wbGFzbW9fcnVudGltZV9wYWdlX1wiLFM9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjt2YXIgTz1gJHtuLnNlY3VyZT9cImh0dHBzXCI6XCJodHRwXCJ9Oi8vJHtSKCl9OiR7ZCgpfS9gO2FzeW5jIGZ1bmN0aW9uIGsoZT0xNDcwKXtmb3IoOzspdHJ5e2F3YWl0IGZldGNoKE8pO2JyZWFrfWNhdGNoe2F3YWl0IG5ldyBQcm9taXNlKG89PnNldFRpbWVvdXQobyxlKSl9fWlmKGMucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb249PT0zKXtsZXQgZT1jLnJ1bnRpbWUuZ2V0VVJMKFwiL19fcGxhc21vX2htcl9wcm94eV9fP3VybD1cIik7Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIixmdW5jdGlvbih0KXtsZXQgbz10LnJlcXVlc3QudXJsO2lmKG8uc3RhcnRzV2l0aChlKSl7bGV0IHM9bmV3IFVSTChkZWNvZGVVUklDb21wb25lbnQoby5zbGljZShlLmxlbmd0aCkpKTtzLmhvc3RuYW1lPT09bi5ob3N0JiZzLnBvcnQ9PT1gJHtuLnBvcnR9YD8ocy5zZWFyY2hQYXJhbXMuc2V0KFwidFwiLERhdGUubm93KCkudG9TdHJpbmcoKSksdC5yZXNwb25kV2l0aChmZXRjaChzKS50aGVuKHI9Pm5ldyBSZXNwb25zZShyLmJvZHkse2hlYWRlcnM6e1wiQ29udGVudC1UeXBlXCI6ci5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKT8/XCJ0ZXh0L2phdmFzY3JpcHRcIn19KSkpKTp0LnJlc3BvbmRXaXRoKG5ldyBSZXNwb25zZShcIlBsYXNtbyBITVJcIix7c3RhdHVzOjIwMCxzdGF0dXNUZXh0OlwiVGVzdGluZ1wifSkpfX0pfWZ1bmN0aW9uIEUoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBDKGU9ZCgpKXtsZXQgdD14KCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gVChlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ5KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gTChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQyhOdW1iZXIoZCgpKSsxKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcz1KU09OLnBhcnNlKG8uZGF0YSk7YXdhaXQgZShzKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsVCksdH1mdW5jdGlvbiBBKGUpe2lmKHR5cGVvZiBnbG9iYWxUaGlzLldlYlNvY2tldD5cInVcIilyZXR1cm47bGV0IHQ9bmV3IFdlYlNvY2tldChDKCkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2lmKHMudHlwZT09PVwidXBkYXRlXCImJmF3YWl0IGUocy5hc3NldHMpLHMudHlwZT09PVwiZXJyb3JcIilmb3IobGV0IHIgb2Ygcy5kaWFnbm9zdGljcy5hbnNpKXtsZXQgbD1yLmNvZGVmcmFtZXx8ci5zdGFjaztmKFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK3IubWVzc2FnZStgXG5gK2wrYFxuXG5gK3IuaGludHMuam9pbihgXG5gKSl9fSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixUKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJvcGVuXCIsKCk9PntiKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGVkIHRvIEhNUiBzZXJ2ZXIgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+e2YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIGlzIGNsb3NlZCBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0fXZhciB3PW1vZHVsZS5idW5kbGUucGFyZW50LGE9e2J1aWxkUmVhZHk6ITEsYmdDaGFuZ2VkOiExLGNzQ2hhbmdlZDohMSxwYWdlQ2hhbmdlZDohMSxzY3JpcHRQb3J0czpuZXcgU2V0LHBhZ2VQb3J0czpuZXcgU2V0fTthc3luYyBmdW5jdGlvbiBwKGU9ITEpe2lmKGV8fGEuYnVpbGRSZWFkeSYmYS5wYWdlQ2hhbmdlZCl7aShcIkJHU1cgUnVudGltZSAtIHJlbG9hZGluZyBQYWdlXCIpO2ZvcihsZXQgdCBvZiBhLnBhZ2VQb3J0cyl0LnBvc3RNZXNzYWdlKG51bGwpfWlmKGV8fGEuYnVpbGRSZWFkeSYmKGEuYmdDaGFuZ2VkfHxhLmNzQ2hhbmdlZCkpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgQ1NcIik7bGV0IHQ9YXdhaXQgYz8udGFicy5xdWVyeSh7YWN0aXZlOiEwfSk7Zm9yKGxldCBvIG9mIGEuc2NyaXB0UG9ydHMpe2xldCBzPXQuc29tZShyPT5yLmlkPT09by5zZW5kZXIudGFiPy5pZCk7by5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfYWN0aXZlX3RhYl9fOnN9KX1jLnJ1bnRpbWUucmVsb2FkKCl9fWlmKCF3fHwhdy5pc1BhcmNlbFJlcXVpcmUpe3YoKTtsZXQgZT1BKGFzeW5jIHQ9PntpKFwiQkdTVyBSdW50aW1lIC0gT24gSE1SIFVwZGF0ZVwiKSxhLmJnQ2hhbmdlZHx8PXQuZmlsdGVyKHM9PnMuZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShzPT5FKG1vZHVsZS5idW5kbGUscy5pZCkpO2xldCBvPXQuZmluZChzPT5zLnR5cGU9PT1cImpzb25cIik7aWYobyl7bGV0IHM9bmV3IFNldCh0Lm1hcChsPT5sLmlkKSkscj1PYmplY3QudmFsdWVzKG8uZGVwc0J5QnVuZGxlKS5tYXAobD0+T2JqZWN0LnZhbHVlcyhsKSkuZmxhdCgpO2EuYmdDaGFuZ2VkfHw9ci5ldmVyeShsPT5zLmhhcyhsKSl9cCgpfSk7ZS5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57bGV0IHQ9c2V0SW50ZXJ2YWwoKCk9PmUuc2VuZChcInBpbmdcIiksMjRlMyk7ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwoKT0+Y2xlYXJJbnRlcnZhbCh0KSl9KSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLGFzeW5jKCk9Pnthd2FpdCBrKCkscCghMCl9KX1MKGFzeW5jIGU9Pntzd2l0Y2goaShcIkJHU1cgUnVudGltZSAtIE9uIEJ1aWxkIFJlcGFja2FnZWRcIiksZS50eXBlKXtjYXNlXCJidWlsZF9yZWFkeVwiOnthLmJ1aWxkUmVhZHl8fD0hMCxwKCk7YnJlYWt9Y2FzZVwiY3NfY2hhbmdlZFwiOnthLmNzQ2hhbmdlZHx8PSEwLHAoKTticmVha319fSk7Yy5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbihlKXtsZXQgdD1lLm5hbWUuc3RhcnRzV2l0aChQKSxvPWUubmFtZS5zdGFydHNXaXRoKFMpO2lmKHR8fG8pe2xldCBzPXQ/YS5wYWdlUG9ydHM6YS5zY3JpcHRQb3J0cztzLmFkZChlKSxlLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e3MuZGVsZXRlKGUpfSksZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24ocil7aShcIkJHU1cgUnVudGltZSAtIE9uIHNvdXJjZSBjaGFuZ2VkXCIsciksci5fX3BsYXNtb19jc19jaGFuZ2VkX18mJihhLmNzQ2hhbmdlZHx8PSEwKSxyLl9fcGxhc21vX3BhZ2VfY2hhbmdlZF9fJiYoYS5wYWdlQ2hhbmdlZHx8PSEwKSxwKCl9KX19KTtjLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHQpe3JldHVybiB0Ll9fcGxhc21vX2Z1bGxfcmVsb2FkX18mJihpKFwiQkdTVyBSdW50aW1lIC0gT24gdG9wLWxldmVsIGNvZGUgY2hhbmdlZFwiKSxwKCkpLCEwfSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9iYWNrZ3JvdW5kXCIiLCJsZXQgY29ubmVjdGlvbnNCeVRhYiA9IHt9O1xubGV0IGNvb2tpZURldGFpbHNCeVRhYiA9IHt9O1xubGV0IGxvY2FsU3RvcmFnZUJ5VGFiID0ge307XG5cbmNvbnN0IHNlcnZpY2VQb3J0cyA9IHtcbiAgaHR0cDogODAsXG4gIGh0dHBzOiA0NDNcbn07XG5cbmJyb3dzZXIud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXG4gIGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gICAgaWYgKGRldGFpbHMudGFiSWQgIT09IC0xICYmIGRldGFpbHMub3JpZ2luVXJsICYmIG5ldyBVUkwoZGV0YWlscy51cmwpLmhvc3RuYW1lICE9PSBuZXcgVVJMKGRldGFpbHMub3JpZ2luVXJsKS5ob3N0bmFtZSkge1xuICAgICAgaWYgKCFjb25uZWN0aW9uc0J5VGFiW2RldGFpbHMudGFiSWRdKSB7XG4gICAgICAgIGNvbm5lY3Rpb25zQnlUYWJbZGV0YWlscy50YWJJZF0gPSB7fTtcbiAgICAgIH1cbiAgICAgIGNvbm5lY3Rpb25zQnlUYWJbZGV0YWlscy50YWJJZF1bZGV0YWlscy51cmxdID0gKGNvbm5lY3Rpb25zQnlUYWJbZGV0YWlscy50YWJJZF1bZGV0YWlscy51cmxdIHx8IDApICsgMTtcbiAgICB9XG4gIH0sXG4gIHsgdXJsczogW1wiPGFsbF91cmxzPlwiXSB9XG4pO1xuXG5icm93c2VyLndlYlJlcXVlc3Qub25IZWFkZXJzUmVjZWl2ZWQuYWRkTGlzdGVuZXIoXG4gIGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gICAgaWYgKGRldGFpbHMudGFiSWQgIT09IC0xKSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGRldGFpbHMudXJsKTtcbiAgICAgIGNvbnN0IGlzVGhpcmRQYXJ0eSA9IGRldGFpbHMuaW5pdGlhdG9yICYmICFkZXRhaWxzLmluaXRpYXRvci5lbmRzV2l0aCh1cmwuaG9zdG5hbWUpO1xuICAgICAgY29uc3QgY29va2llVHlwZSA9IGlzVGhpcmRQYXJ0eSA/ICd0aGlyZFBhcnR5JyA6ICdmaXJzdFBhcnR5JztcbiAgICAgIGNvbnN0IGNvb2tpZURldGFpbFR5cGUgPSBpc1RoaXJkUGFydHkgPyAndGhpcmRQYXJ0eURldGFpbHMnIDogJ2ZpcnN0UGFydHlEZXRhaWxzJztcblxuICAgICAgaWYgKCFjb29raWVEZXRhaWxzQnlUYWJbZGV0YWlscy50YWJJZF0pIHtcbiAgICAgICAgY29va2llRGV0YWlsc0J5VGFiW2RldGFpbHMudGFiSWRdID0ge1xuICAgICAgICAgIGZpcnN0UGFydHk6IDAsXG4gICAgICAgICAgdGhpcmRQYXJ0eTogMCxcbiAgICAgICAgICBmaXJzdFBhcnR5RGV0YWlsczoge30sXG4gICAgICAgICAgdGhpcmRQYXJ0eURldGFpbHM6IHt9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGRldGFpbHMucmVzcG9uc2VIZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgaWYgKGhlYWRlci5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICAgIGxldCBjb29raWVOYW1lID0gaGVhZGVyLnZhbHVlLnNwbGl0KCc9JylbMF0udHJpbSgpO1xuICAgICAgICAgIGNvb2tpZURldGFpbHNCeVRhYltkZXRhaWxzLnRhYklkXVtjb29raWVUeXBlXSsrO1xuICAgICAgICAgIGlmIChjb29raWVEZXRhaWxzQnlUYWJbZGV0YWlscy50YWJJZF1bY29va2llRGV0YWlsVHlwZV1bY29va2llTmFtZV0pIHtcbiAgICAgICAgICAgIGNvb2tpZURldGFpbHNCeVRhYltkZXRhaWxzLnRhYklkXVtjb29raWVEZXRhaWxUeXBlXVtjb29raWVOYW1lXSsrO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb29raWVEZXRhaWxzQnlUYWJbZGV0YWlscy50YWJJZF1bY29va2llRGV0YWlsVHlwZV1bY29va2llTmFtZV0gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICB7IHVybHM6IFtcIjxhbGxfdXJscz5cIl0gfSxcbiAgW1wicmVzcG9uc2VIZWFkZXJzXCJdXG4pO1xuXG5icm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICBsZXQgdGFiSWQgPSBzZW5kZXIudGFiID8gc2VuZGVyLnRhYi5pZCA6IHJlcXVlc3QudGFiSWQ7XG5cbiAgc3dpdGNoIChyZXF1ZXN0LmFjdGlvbikge1xuICAgIGNhc2UgXCJnZXRfY29ubmVjdGlvbnNcIjpcbiAgICAgIGxldCBjb25uZWN0aW9ucyA9IGNvbm5lY3Rpb25zQnlUYWJbdGFiSWRdID8gY29ubmVjdGlvbnNCeVRhYlt0YWJJZF0gOiB7fTtcbiAgICAgIHNlbmRSZXNwb25zZSh7IGNvbm5lY3Rpb25zOiBjb25uZWN0aW9ucyB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJnZXRfY29va2llc1wiOlxuICAgICAgbGV0IGNvb2tpZXMgPSBnZXRDb29raWVzRGV0YWlscyh0YWJJZCk7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBjb29raWVzOiBjb29raWVzIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImdldF9sb2NhbF9zdG9yYWdlXCI6XG4gICAgICBnZXRMb2NhbFN0b3JhZ2UodGFiSWQsIHNlbmRSZXNwb25zZSk7XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gUmVxdWlyZWQgdG8ga2VlcCB0aGUgbWVzc2FnZSBjaGFubmVsIG9wZW4gZm9yIGFzeW5jIHJlc3BvbnNlXG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUubG9nKFwiVW5rbm93biBhY3Rpb246XCIsIHJlcXVlc3QuYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB0cnVlOyBcbn0pO1xuXG4vLyBDbGVhbnVwIG9uIHRhYiByZW1vdmFsXG5icm93c2VyLnRhYnMub25SZW1vdmVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICh0YWJJZCkge1xuICBkZWxldGUgY29ubmVjdGlvbnNCeVRhYlt0YWJJZF07XG4gIGRlbGV0ZSBjb29raWVEZXRhaWxzQnlUYWJbdGFiSWRdO1xuICBkZWxldGUgbG9jYWxTdG9yYWdlQnlUYWJbdGFiSWRdO1xufSk7XG5cbi8vIFJlc2V0IGRhdGEgb24gdGFiIHVwZGF0ZSAoZS5nLiwgd2hlbiB0aGUgVVJMIGNoYW5nZXMpXG5icm93c2VyLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSB7XG4gIGlmIChjaGFuZ2VJbmZvLnN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICBjb25uZWN0aW9uc0J5VGFiW3RhYklkXSA9IHt9O1xuICAgIGNvb2tpZURldGFpbHNCeVRhYlt0YWJJZF0gPSB7IGZpcnN0UGFydHk6IDAsIHRoaXJkUGFydHk6IDAsIGZpcnN0UGFydHlEZXRhaWxzOiB7fSwgdGhpcmRQYXJ0eURldGFpbHM6IHt9IH07XG4gICAgbG9jYWxTdG9yYWdlQnlUYWJbdGFiSWRdID0ge307XG4gIH1cbn0pO1xuXG4vLyBIZWxwZXIgZnVuY3Rpb25zIHRvIGdldCBjb29raWUgZGV0YWlscyBhbmQgbG9jYWwgc3RvcmFnZSBkYXRhXG5mdW5jdGlvbiBnZXRDb29raWVzRGV0YWlscyh0YWJJZCkge1xuICBsZXQgZGV0YWlscyA9IGNvb2tpZURldGFpbHNCeVRhYlt0YWJJZF07XG4gIGlmIChkZXRhaWxzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0UGFydHk6IGRldGFpbHMuZmlyc3RQYXJ0eSxcbiAgICAgIHRoaXJkUGFydHk6IGRldGFpbHMudGhpcmRQYXJ0eSxcbiAgICAgIGZpcnN0UGFydHlEZXRhaWxzOiBkZXRhaWxzLmZpcnN0UGFydHlEZXRhaWxzLFxuICAgICAgdGhpcmRQYXJ0eURldGFpbHM6IGRldGFpbHMudGhpcmRQYXJ0eURldGFpbHNcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgZmlyc3RQYXJ0eTogMCxcbiAgICB0aGlyZFBhcnR5OiAwLFxuICAgIGZpcnN0UGFydHlEZXRhaWxzOiB7fSxcbiAgICB0aGlyZFBhcnR5RGV0YWlsczoge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKHRhYklkLCBzZW5kUmVzcG9uc2UpIHtcbiAgYnJvd3Nlci50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIHtcbiAgICBjb2RlOiBgXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGxvY2FsU3RvcmFnZUNvdW50OiBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmxlbmd0aCxcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2VDb3VudDogT2JqZWN0LmtleXMoc2Vzc2lvblN0b3JhZ2UpLmxlbmd0aCxcbiAgICAgICAgbG9jYWxTdG9yYWdlOiBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+ICh7IC4uLmFjYywgW2tleV06IHZhbHVlIH0pLCB7fSksXG4gICAgICAgIHNlc3Npb25TdG9yYWdlOiBPYmplY3QuZW50cmllcyhzZXNzaW9uU3RvcmFnZSkucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4gKHsgLi4uYWNjLCBba2V5XTogdmFsdWUgfSksIHt9KVxuICAgICAgfSk7XG4gICAgYFxuICB9KS50aGVuKHJlc3VsdHMgPT4ge1xuICAgIGlmIChyZXN1bHRzICYmIHJlc3VsdHNbMF0pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdHNbMF0pO1xuICAgICAgbG9jYWxTdG9yYWdlQnlUYWJbdGFiSWRdID0gZGF0YTtcbiAgICAgIHNlbmRSZXNwb25zZSh7IGRhdGE6IGRhdGEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbmRSZXNwb25zZSh7IGVycm9yOiBcIk5vIGRhdGEgcmVjZWl2ZWRcIiB9KTtcbiAgICB9XG4gIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvciBleGVjdXRpbmcgc2NyaXB0IGluIHRhYiAke3RhYklkfTpgLCBlcnJvcik7XG4gICAgc2VuZFJlc3BvbnNlKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImluZGV4LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);