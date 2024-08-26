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
})({"az991":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c617ccf86e3c048d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"7dAnV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// import { MainApplication } from './dom/index.js';
// namespace Lithium{
//   export const DOM = require('./dom/index.js');
//   export const Decorators = require('./decorators/index.js');
//   export const Directives = require('./directives/index.js');
//   export const Utils = require('./utils/index.js');
//   export const Component = require('./webComponent/index.js');
// };
// export default Lithium;
// (() => {
//   if(globalThis.window){
//     window['lithium'] = {
//     };
//   }
// })()
parcelHelpers.export(exports, "ViewExecutionContext", ()=>$ed2a677aa7485959$export$1053a9be1bcefef9);
parcelHelpers.export(exports, "render", ()=>$ed2a677aa7485959$export$b3890eb0ae9dca99);
parcelHelpers.export(exports, "attrState", ()=>$b1b98f19caab25c2$export$683a0e8baad8b9c3);
parcelHelpers.export(exports, "attr", ()=>(0, _fastElement.attr));
parcelHelpers.export(exports, "state", ()=>$a1f8df21dd3b8ee9$export$ca000e230c0caa3e);
parcelHelpers.export(exports, "when", ()=>(0, _fastElement.when));
parcelHelpers.export(exports, "repeat", ()=>(0, _fastElement.repeat));
parcelHelpers.export(exports, "children", ()=>(0, _fastElement.children));
parcelHelpers.export(exports, "elements", ()=>(0, _fastElement.elements));
parcelHelpers.export(exports, "slotted", ()=>(0, _fastElement.slotted));
parcelHelpers.export(exports, "AsyncAppendBindig", ()=>$21522158c10703ef$export$ca3487b83ec6860a);
parcelHelpers.export(exports, "AsyncAppendDirective", ()=>$21522158c10703ef$export$5761d9f85430a54b);
parcelHelpers.export(exports, "asyncAppend", ()=>$21522158c10703ef$export$eaa89ade56b7c0c1);
parcelHelpers.export(exports, "createRef", ()=>$f6651d38d609160e$export$7d1e3a5e95ceca43);
parcelHelpers.export(exports, "RefDirective", ()=>$f6651d38d609160e$export$1ef8aea9a6de98d);
parcelHelpers.export(exports, "ref", ()=>$f6651d38d609160e$export$eff4d24c3ff7876e);
parcelHelpers.export(exports, "StateBindig", ()=>$c66c6ea353620255$export$28205fa712822499);
parcelHelpers.export(exports, "StateDirective", ()=>$c66c6ea353620255$export$792c882b75ca2192);
parcelHelpers.export(exports, "useState", ()=>$c66c6ea353620255$export$60241385465d0a34);
parcelHelpers.export(exports, "StyleBindig", ()=>$6e530dd7df9f7fe5$export$81053cd05d55c9d8);
parcelHelpers.export(exports, "StyleDirective", ()=>$6e530dd7df9f7fe5$export$18211b6e76035cfa);
parcelHelpers.export(exports, "style", ()=>$6e530dd7df9f7fe5$export$1d567c320f4763bc);
parcelHelpers.export(exports, "UntilBindig", ()=>$15db1e855f042fe6$export$f36d8f10294685f8);
parcelHelpers.export(exports, "UntilDirective", ()=>$15db1e855f042fe6$export$51c6edf8ee19b71a);
parcelHelpers.export(exports, "until", ()=>$15db1e855f042fe6$export$a40009bd2c363351);
parcelHelpers.export(exports, "Observable", ()=>$fde9406d76ec24a9$re_export$Observable);
parcelHelpers.export(exports, "createObservableObject", ()=>$592e71a4a1bc8d5d$export$dcc5cf24d8fb3b41);
parcelHelpers.export(exports, "ObservableObject", ()=>$f0b90d4a5f4da766$export$b176171395436676);
parcelHelpers.export(exports, "State", ()=>(0, _state.State));
parcelHelpers.export(exports, "createState", ()=>(0, _state.createState));
parcelHelpers.export(exports, "createStorage", ()=>(0, _context.createStorage));
parcelHelpers.export(exports, "uuid", ()=>(0, _huid.uuid));
parcelHelpers.export(exports, "html", ()=>$c5a7ff2cef84a00c$export$c0bb0b647f701bb5);
parcelHelpers.export(exports, "customElement", ()=>(0, _fastElement.customElement));
parcelHelpers.export(exports, "css", ()=>(0, _fastElement.css));
parcelHelpers.export(exports, "ViewTemplate", ()=>(0, _fastElement.ViewTemplate));
parcelHelpers.export(exports, "HTMLView", ()=>(0, _fastElement.HTMLView));
parcelHelpers.export(exports, "volatile", ()=>(0, _fastElement.volatile));
parcelHelpers.export(exports, "WebComponent", ()=>$284c1ee70f828408$export$7f8b9f308979d41d);
var _esm = require("@microsoft/fast-element/dist/esm");
var _fastElement = require("@microsoft/fast-element");
var _state = require("@lithium-framework/state");
var _context = require("@lithium-framework/context");
var _huid = require("@lithium-framework/huid");
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
var $ed2a677aa7485959$exports = {};
$parcel$export($ed2a677aa7485959$exports, "ViewExecutionContext", ()=>$ed2a677aa7485959$export$1053a9be1bcefef9);
$parcel$export($ed2a677aa7485959$exports, "render", ()=>$ed2a677aa7485959$export$b3890eb0ae9dca99);
class $f0b90d4a5f4da766$export$b176171395436676 extends Object {
    static init(initialObject) {
        let observabe = new $f0b90d4a5f4da766$export$b176171395436676(initialObject);
        return observabe.createProxy();
    }
    constructor(initialObject){
        super();
        this.$data = {};
        this.set = (key, value)=>{
            this.$data[`_${key}`] = value;
            (0, _esm.Observable).defineProperty(this.$data, key);
            return this.$data[key];
        };
        Object.keys(initialObject).forEach((key)=>{
            this.set(key, initialObject[key]);
        });
    }
    createProxy() {
        return new Proxy(this.$data, {
            get (store, propKey) {
                let result = undefined;
                try {
                    result = store[propKey];
                } catch (error) {
                    console.error(error);
                } finally{
                    return result;
                }
            },
            set (store, propKey, value) {
                if (store[propKey]) store[propKey] = value;
                else {
                    store[`_${propKey}`] = value;
                    (0, _esm.Observable).defineProperty(store, propKey);
                }
                return true;
            }
        });
    }
}
function $592e71a4a1bc8d5d$export$dcc5cf24d8fb3b41(initialObject) {
    return $f0b90d4a5f4da766$export$b176171395436676.init(initialObject);
}
var $535bb7ac3b1a1d6d$exports = {};
var $b1b98f19caab25c2$exports = {};
$parcel$export($b1b98f19caab25c2$exports, "attrState", ()=>$b1b98f19caab25c2$export$683a0e8baad8b9c3);
$parcel$export($b1b98f19caab25c2$exports, "attr", ()=>(0, _fastElement.attr));
var $a1f8df21dd3b8ee9$exports = {};
$parcel$export($a1f8df21dd3b8ee9$exports, "state", ()=>$a1f8df21dd3b8ee9$export$ca000e230c0caa3e);
function $a1f8df21dd3b8ee9$export$ca000e230c0caa3e(target, propertyKey, value = null, constructible = false) {
    if (constructible) target.constructor.states = target.constructor.states || {};
    Object.defineProperty(target, propertyKey, {
        get () {
            return target.$states[propertyKey];
        },
        set (newValue) {
            target.$states[propertyKey] = newValue;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    (0, _fastElement.observable)(target, propertyKey);
    if (value) target[propertyKey] = value;
}
function $b1b98f19caab25c2$export$683a0e8baad8b9c3(options = {}) {
    return (target, propertyKey)=>{
        (0, _fastElement.attr)(options)(target, propertyKey);
        $a1f8df21dd3b8ee9$export$ca000e230c0caa3e(target, propertyKey);
    };
}
$parcel$exportWildcard($535bb7ac3b1a1d6d$exports, $b1b98f19caab25c2$exports);
$parcel$exportWildcard($535bb7ac3b1a1d6d$exports, $a1f8df21dd3b8ee9$exports);
function $ed2a677aa7485959$var$_classPrivateFieldLooseBase(e, t) {
    if (!({}).hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
    return e;
}
var $ed2a677aa7485959$var$id = 0;
function $ed2a677aa7485959$var$_classPrivateFieldLooseKey(e) {
    return "__private_" + $ed2a677aa7485959$var$id++ + "_" + e;
}
var $ed2a677aa7485959$var$_state_keys = /*#__PURE__*/ $ed2a677aa7485959$var$_classPrivateFieldLooseKey("_state_keys");
class $ed2a677aa7485959$export$1053a9be1bcefef9 {
    get states() {
        return this.$states;
    }
    constructor(data){
        this.$states = $f0b90d4a5f4da766$export$b176171395436676.init({});
        Object.defineProperty(this, $ed2a677aa7485959$var$_state_keys, {
            writable: true,
            value: []
        });
        this.createState = (key, value)=>{
            if ($ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys].includes(key)) return this.useState(key);
            Object.defineProperty(this, key, {
                get () {
                    return JSON.parse(this.states[key]);
                },
                set (value) {
                    if (!$ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys].includes(key)) {
                        $ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys].push(key);
                        this.$states = $f0b90d4a5f4da766$export$b176171395436676.init({
                            [key]: JSON.stringify(value),
                            ...Object.fromEntries(new Map(Array.from($ed2a677aa7485959$var$_classPrivateFieldLooseBase(this, $ed2a677aa7485959$var$_state_keys)[$ed2a677aa7485959$var$_state_keys], (key)=>{
                                return [
                                    key,
                                    this.$states[`${key}`]
                                ];
                            })))
                        });
                    }
                    this.$states[key] = JSON.stringify(value);
                }
            });
            this[key] = value;
            return this.useState(key);
        };
        this.useState = (key)=>{
            return [
                this[key],
                (newValue)=>{
                    console.log({
                        newValue: newValue
                    });
                    this[key] = newValue;
                }
            ];
        };
        this.createConsumable = (key, value)=>{
            $a1f8df21dd3b8ee9$export$ca000e230c0caa3e(this, key, value, false);
        };
        Object.assign(this, data);
    }
    static init(data) {
        return new $ed2a677aa7485959$export$1053a9be1bcefef9(data);
    }
}
function $ed2a677aa7485959$export$b3890eb0ae9dca99(template, container = document.body, data = {}) {
    let context = $ed2a677aa7485959$export$1053a9be1bcefef9.init(data);
    return template.render(context, container);
}
var $5193209399721411$exports = {};
$parcel$export($5193209399721411$exports, "when", ()=>(0, _fastElement.when));
$parcel$export($5193209399721411$exports, "repeat", ()=>(0, _fastElement.repeat));
$parcel$export($5193209399721411$exports, "children", ()=>(0, _fastElement.children));
$parcel$export($5193209399721411$exports, "elements", ()=>(0, _fastElement.elements));
$parcel$export($5193209399721411$exports, "slotted", ()=>(0, _fastElement.slotted));
var $21522158c10703ef$exports = {};
$parcel$export($21522158c10703ef$exports, "AsyncAppendBindig", ()=>$21522158c10703ef$export$ca3487b83ec6860a);
$parcel$export($21522158c10703ef$exports, "AsyncAppendDirective", ()=>$21522158c10703ef$export$5761d9f85430a54b);
$parcel$export($21522158c10703ef$exports, "asyncAppend", ()=>$21522158c10703ef$export$eaa89ade56b7c0c1);
class $21522158c10703ef$export$ca3487b83ec6860a extends (0, _fastElement.Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $21522158c10703ef$export$5761d9f85430a54b extends (0, _fastElement.HTMLBindingDirective) {
    constructor(fn, callback){
        super(new $21522158c10703ef$export$ca3487b83ec6860a((x)=>null));
        this.fn = null;
        this.callback = null;
        Object.assign(this, {
            fn: fn,
            callback: callback
        });
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                this.fn.then((result)=>{
                    this.callback(result).render(source, target instanceof HTMLElement ? target : target.parentElement);
                }).catch((error)=>{
                    console.error(error);
                    (0, _fastElement.html)`<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
                });
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(fn, callback) {
        return new $21522158c10703ef$export$5761d9f85430a54b(fn, callback);
    }
}
(0, _fastElement.HTMLDirective).define($21522158c10703ef$export$5761d9f85430a54b);
const $21522158c10703ef$export$eaa89ade56b7c0c1 = (fn, callback)=>$21522158c10703ef$export$5761d9f85430a54b.use(fn, callback);
var $f6651d38d609160e$exports = {};
$parcel$export($f6651d38d609160e$exports, "createRef", ()=>$f6651d38d609160e$export$7d1e3a5e95ceca43);
$parcel$export($f6651d38d609160e$exports, "RefDirective", ()=>$f6651d38d609160e$export$1ef8aea9a6de98d);
$parcel$export($f6651d38d609160e$exports, "ref", ()=>$f6651d38d609160e$export$eff4d24c3ff7876e);
function $f6651d38d609160e$export$7d1e3a5e95ceca43() {
    return {
        value: null
    };
}
class $f6651d38d609160e$export$1ef8aea9a6de98d extends (0, _fastElement.StatelessAttachedAttributeDirective) {
    constructor(options){
        super(options);
        this.options = null;
        Object.assign(this, {
            options: options
        });
    }
    bind(controller) {
        let { lastChild: target } = controller;
        this.options.value = target;
    }
    static use(options) {
        return new $f6651d38d609160e$export$1ef8aea9a6de98d(options);
    }
}
(0, _fastElement.HTMLDirective).define($f6651d38d609160e$export$1ef8aea9a6de98d);
const $f6651d38d609160e$export$eff4d24c3ff7876e = (options)=>$f6651d38d609160e$export$1ef8aea9a6de98d.use(options);
var $c66c6ea353620255$exports = {};
$parcel$export($c66c6ea353620255$exports, "StateBindig", ()=>$c66c6ea353620255$export$28205fa712822499);
$parcel$export($c66c6ea353620255$exports, "StateDirective", ()=>$c66c6ea353620255$export$792c882b75ca2192);
$parcel$export($c66c6ea353620255$exports, "useState", ()=>$c66c6ea353620255$export$60241385465d0a34);
// import { ViewTemplate, HTMLBindingDirective, ExecutionContext } from '@microsoft/fast-element';
class $c66c6ea353620255$export$28205fa712822499 extends (0, _fastElement.Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $c66c6ea353620255$export$792c882b75ca2192 extends (0, _fastElement.HTMLBindingDirective) {
    get state() {
        return this._state.mutator[0];
    }
    set state(value) {
        this._state.mutator[1](value);
    }
    constructor(state, callback){
        super(new $c66c6ea353620255$export$28205fa712822499((x)=>null));
        this._state = null;
        this._callback = null;
        this._state = state;
        this._callback = callback;
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        let view = null;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                if (this._callback) {
                    this._state.subscribe(()=>{
                        view.dispose();
                        view = this._callback(this.state).render(source, target.parentElement);
                    });
                    view = this._callback(this.state).render(source, target.parentElement);
                } else {
                    this._state.subscribe(()=>{
                        if ("textContent" in target) target.textContent = `${this.state}`;
                    });
                    if ("textContent" in target) target.textContent = `${this.state}`;
                }
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(state, callback) {
        return new $c66c6ea353620255$export$792c882b75ca2192(state, callback);
    }
}
(0, _fastElement.HTMLDirective).define($c66c6ea353620255$export$792c882b75ca2192);
const $c66c6ea353620255$export$60241385465d0a34 = (state, callback)=>$c66c6ea353620255$export$792c882b75ca2192.use(state, callback);
var $6e530dd7df9f7fe5$exports = {};
$parcel$export($6e530dd7df9f7fe5$exports, "StyleBindig", ()=>$6e530dd7df9f7fe5$export$81053cd05d55c9d8);
$parcel$export($6e530dd7df9f7fe5$exports, "StyleDirective", ()=>$6e530dd7df9f7fe5$export$18211b6e76035cfa);
$parcel$export($6e530dd7df9f7fe5$exports, "style", ()=>$6e530dd7df9f7fe5$export$1d567c320f4763bc);
class $6e530dd7df9f7fe5$export$81053cd05d55c9d8 extends (0, _fastElement.Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $6e530dd7df9f7fe5$export$18211b6e76035cfa extends (0, _fastElement.HTMLBindingDirective) {
    constructor(css){
        super(new $6e530dd7df9f7fe5$export$81053cd05d55c9d8((x)=>null));
        this.css = null;
        Object.assign(this, {
            css: css
        });
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        let view = null;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                if (target instanceof HTMLElement) Object.assign(target.style, this.css);
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(css) {
        return new $6e530dd7df9f7fe5$export$18211b6e76035cfa(css);
    }
}
(0, _fastElement.HTMLDirective).define($6e530dd7df9f7fe5$export$18211b6e76035cfa);
const $6e530dd7df9f7fe5$export$1d567c320f4763bc = (css)=>$6e530dd7df9f7fe5$export$18211b6e76035cfa.use(css);
var $15db1e855f042fe6$exports = {};
$parcel$export($15db1e855f042fe6$exports, "UntilBindig", ()=>$15db1e855f042fe6$export$f36d8f10294685f8);
$parcel$export($15db1e855f042fe6$exports, "UntilDirective", ()=>$15db1e855f042fe6$export$51c6edf8ee19b71a);
$parcel$export($15db1e855f042fe6$exports, "until", ()=>$15db1e855f042fe6$export$a40009bd2c363351);
class $15db1e855f042fe6$export$f36d8f10294685f8 extends (0, _fastElement.Binding) {
    createObserver(subscriber, directive) {
        console.log({
            subscriber: subscriber,
            directive: directive
        });
        return {
            bind (controller) {
                console.log({
                    controller: controller
                });
            }
        };
    }
}
class $15db1e855f042fe6$export$51c6edf8ee19b71a extends (0, _fastElement.HTMLBindingDirective) {
    constructor(fn, template){
        super(new $15db1e855f042fe6$export$f36d8f10294685f8((x)=>null));
        this.fn = null;
        this.template = null;
        Object.assign(this, {
            fn: fn,
            template: template
        });
    }
    createBehavior() {
        let { targetNodeId: targetNodeId } = this;
        return {
            bind: (source)=>{
                let target = source.targets[targetNodeId];
                let loading = this.template.render(source, target instanceof HTMLElement ? target : target.parentElement);
                this.fn.then((result)=>{
                    loading.dispose();
                    result.render(source, target instanceof HTMLElement ? target : target.parentElement);
                }).catch((error)=>{
                    console.error(error);
                    loading.dispose();
                    (0, _fastElement.html)`<span>Error: ${error}</span>`.render(source, target instanceof HTMLElement ? target : target.parentElement);
                });
            },
            unbind: ()=>{
            // Nettoyage si nécessaire
            }
        };
    }
    static use(fn, template) {
        return new $15db1e855f042fe6$export$51c6edf8ee19b71a(fn, template);
    }
}
(0, _fastElement.HTMLDirective).define($15db1e855f042fe6$export$51c6edf8ee19b71a);
const $15db1e855f042fe6$export$a40009bd2c363351 = (fn, template)=>$15db1e855f042fe6$export$51c6edf8ee19b71a.use(fn, template);
$parcel$exportWildcard($5193209399721411$exports, $21522158c10703ef$exports);
$parcel$exportWildcard($5193209399721411$exports, $f6651d38d609160e$exports);
$parcel$exportWildcard($5193209399721411$exports, $c66c6ea353620255$exports);
$parcel$exportWildcard($5193209399721411$exports, $6e530dd7df9f7fe5$exports);
$parcel$exportWildcard($5193209399721411$exports, $15db1e855f042fe6$exports);
var $fde9406d76ec24a9$exports = {};
$parcel$export($fde9406d76ec24a9$exports, "Observable", ()=>$fde9406d76ec24a9$re_export$Observable);
$parcel$export($fde9406d76ec24a9$exports, "createObservableObject", ()=>$592e71a4a1bc8d5d$export$dcc5cf24d8fb3b41);
$parcel$export($fde9406d76ec24a9$exports, "ObservableObject", ()=>$f0b90d4a5f4da766$export$b176171395436676);
$parcel$export($fde9406d76ec24a9$exports, "State", ()=>(0, _state.State));
$parcel$export($fde9406d76ec24a9$exports, "createState", ()=>(0, _state.createState));
$parcel$export($fde9406d76ec24a9$exports, "createStorage", ()=>(0, _context.createStorage));
$parcel$export($fde9406d76ec24a9$exports, "uuid", ()=>(0, _huid.uuid));
// export{
//   Observable,
//   volatile,
// State,
// createState,
// createStorage,
// Storage, 
// StorageKeys, 
// StorageValues, 
// StateValidator,
// ComponentId,
// Segment,
// ParentSegementId,
// CollectionId,
// HUID,
// HierarchicalUUIDOptions,
// uuid
// }
var $c5a7ff2cef84a00c$exports = {};
$parcel$export($c5a7ff2cef84a00c$exports, "html", ()=>$c5a7ff2cef84a00c$export$c0bb0b647f701bb5);
$parcel$export($c5a7ff2cef84a00c$exports, "customElement", ()=>(0, _fastElement.customElement));
$parcel$export($c5a7ff2cef84a00c$exports, "css", ()=>(0, _fastElement.css));
$parcel$export($c5a7ff2cef84a00c$exports, "ViewTemplate", ()=>(0, _fastElement.ViewTemplate));
$parcel$export($c5a7ff2cef84a00c$exports, "HTMLView", ()=>(0, _fastElement.HTMLView));
$parcel$export($c5a7ff2cef84a00c$exports, "volatile", ()=>(0, _fastElement.volatile));
$parcel$export($c5a7ff2cef84a00c$exports, "WebComponent", ()=>$284c1ee70f828408$export$7f8b9f308979d41d);
class $284c1ee70f828408$export$7f8b9f308979d41d extends (0, _fastElement.FASTElement) {
    constructor(){
        super();
        /* The line ` = ObservableObject.init( this.constructor["states"] );` is initializing an
    instance property named `` on the `WebComponent` class. This property is being set to the
    result of calling the `init` method of the `ObservableObject` class, passing in the initial state
    values defined in the `states` static property of the `WebComponent` class
    (`this.constructor["states"]`). */ this.$states = $f0b90d4a5f4da766$export$b176171395436676.init(this.constructor["states"]);
        Object.keys(this.constructor["states"]).forEach((key)=>{
            // delete this[key];
            Object.defineProperty(this, key, {
                get () {
                    return this.$states[key];
                },
                set (value) {
                    this.$states[key] = value;
                }
            });
        });
    }
    connectedCallback() {
        super.connectedCallback();
    }
}
/* The `static states = {};` line is declaring a static property named `states` on the `WebComponent`
class and initializing it as an empty object `{}`. This property is intended to hold the initial
state values for the component. By defining it as a static property, it is shared among all
instances of the `WebComponent` class rather than being specific to individual instances. This
allows all instances of the class to access and modify the same set of state values. */ $284c1ee70f828408$export$7f8b9f308979d41d.states = {};
$284c1ee70f828408$export$7f8b9f308979d41d.define = (0, _fastElement.FASTElement).define;
const $c5a7ff2cef84a00c$export$c0bb0b647f701bb5 = (0, _fastElement.html);

},{"@microsoft/fast-element/dist/esm":"laAVy","@microsoft/fast-element":"laAVy","@lithium-framework/state":"9pyA0","@lithium-framework/context":"dqI9g","@lithium-framework/huid":"71R6Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laAVy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FAST", ()=>(0, _platformJs.FAST));
parcelHelpers.export(exports, "emptyArray", ()=>(0, _platformJs.emptyArray));
// DOM
parcelHelpers.export(exports, "DOMAspect", ()=>(0, _domJs.DOMAspect));
parcelHelpers.export(exports, "DOM", ()=>(0, _domJs.DOM));
// Observation
parcelHelpers.export(exports, "ExecutionContext", ()=>(0, _observableJs.ExecutionContext));
parcelHelpers.export(exports, "Observable", ()=>(0, _observableJs.Observable));
parcelHelpers.export(exports, "observable", ()=>(0, _observableJs.observable));
parcelHelpers.export(exports, "SourceLifetime", ()=>(0, _observableJs.SourceLifetime));
parcelHelpers.export(exports, "volatile", ()=>(0, _observableJs.volatile));
parcelHelpers.export(exports, "PropertyChangeNotifier", ()=>(0, _notifierJs.PropertyChangeNotifier));
parcelHelpers.export(exports, "SubscriberSet", ()=>(0, _notifierJs.SubscriberSet));
parcelHelpers.export(exports, "ArrayObserver", ()=>(0, _arraysJs.ArrayObserver));
parcelHelpers.export(exports, "lengthOf", ()=>(0, _arraysJs.lengthOf));
parcelHelpers.export(exports, "Splice", ()=>(0, _arraysJs.Splice));
parcelHelpers.export(exports, "SpliceStrategy", ()=>(0, _arraysJs.SpliceStrategy));
parcelHelpers.export(exports, "SpliceStrategySupport", ()=>(0, _arraysJs.SpliceStrategySupport));
parcelHelpers.export(exports, "Updates", ()=>(0, _updateQueueJs.Updates));
// Binding
parcelHelpers.export(exports, "Binding", ()=>(0, _bindingJs.Binding));
parcelHelpers.export(exports, "listener", ()=>(0, _oneWayJs.listener));
parcelHelpers.export(exports, "oneWay", ()=>(0, _oneWayJs.oneWay));
parcelHelpers.export(exports, "oneTime", ()=>(0, _oneTimeJs.oneTime));
parcelHelpers.export(exports, "normalizeBinding", ()=>(0, _normalizeJs.normalizeBinding));
// Styles
parcelHelpers.export(exports, "ElementStyles", ()=>(0, _elementStylesJs.ElementStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssJs.css));
parcelHelpers.export(exports, "cssDirective", ()=>(0, _cssDirectiveJs.cssDirective));
parcelHelpers.export(exports, "CSSDirective", ()=>(0, _cssDirectiveJs.CSSDirective));
parcelHelpers.export(exports, "CSSBindingDirective", ()=>(0, _cssBindingDirectiveJs.CSSBindingDirective));
// Templating
parcelHelpers.export(exports, "html", ()=>(0, _templateJs.html));
parcelHelpers.export(exports, "InlineTemplateDirective", ()=>(0, _templateJs.InlineTemplateDirective));
parcelHelpers.export(exports, "ViewTemplate", ()=>(0, _templateJs.ViewTemplate));
parcelHelpers.export(exports, "Compiler", ()=>(0, _compilerJs.Compiler));
parcelHelpers.export(exports, "Markup", ()=>(0, _markupJs.Markup));
parcelHelpers.export(exports, "Parser", ()=>(0, _markupJs.Parser));
parcelHelpers.export(exports, "HTMLBindingDirective", ()=>(0, _htmlBindingDirectiveJs.HTMLBindingDirective));
parcelHelpers.export(exports, "htmlDirective", ()=>(0, _htmlDirectiveJs.htmlDirective));
parcelHelpers.export(exports, "HTMLDirective", ()=>(0, _htmlDirectiveJs.HTMLDirective));
parcelHelpers.export(exports, "StatelessAttachedAttributeDirective", ()=>(0, _htmlDirectiveJs.StatelessAttachedAttributeDirective));
parcelHelpers.export(exports, "ref", ()=>(0, _refJs.ref));
parcelHelpers.export(exports, "RefDirective", ()=>(0, _refJs.RefDirective));
parcelHelpers.export(exports, "when", ()=>(0, _whenJs.when));
parcelHelpers.export(exports, "repeat", ()=>(0, _repeatJs.repeat));
parcelHelpers.export(exports, "RepeatBehavior", ()=>(0, _repeatJs.RepeatBehavior));
parcelHelpers.export(exports, "RepeatDirective", ()=>(0, _repeatJs.RepeatDirective));
parcelHelpers.export(exports, "slotted", ()=>(0, _slottedJs.slotted));
parcelHelpers.export(exports, "SlottedDirective", ()=>(0, _slottedJs.SlottedDirective));
parcelHelpers.export(exports, "children", ()=>(0, _childrenJs.children));
parcelHelpers.export(exports, "ChildrenDirective", ()=>(0, _childrenJs.ChildrenDirective));
parcelHelpers.export(exports, "HTMLView", ()=>(0, _viewJs.HTMLView));
parcelHelpers.export(exports, "HydrationBindingError", ()=>(0, _viewJs.HydrationBindingError));
parcelHelpers.export(exports, "elements", ()=>(0, _nodeObservationJs.elements));
parcelHelpers.export(exports, "NodeObservationDirective", ()=>(0, _nodeObservationJs.NodeObservationDirective));
parcelHelpers.export(exports, "render", ()=>(0, _renderJs.render));
parcelHelpers.export(exports, "RenderBehavior", ()=>(0, _renderJs.RenderBehavior));
parcelHelpers.export(exports, "RenderDirective", ()=>(0, _renderJs.RenderDirective));
// Components
parcelHelpers.export(exports, "customElement", ()=>(0, _fastElementJs.customElement));
parcelHelpers.export(exports, "FASTElement", ()=>(0, _fastElementJs.FASTElement));
parcelHelpers.export(exports, "FASTElementDefinition", ()=>(0, _fastDefinitionsJs.FASTElementDefinition));
parcelHelpers.export(exports, "attr", ()=>(0, _attributesJs.attr));
parcelHelpers.export(exports, "AttributeConfiguration", ()=>(0, _attributesJs.AttributeConfiguration));
parcelHelpers.export(exports, "AttributeDefinition", ()=>(0, _attributesJs.AttributeDefinition));
parcelHelpers.export(exports, "booleanConverter", ()=>(0, _attributesJs.booleanConverter));
parcelHelpers.export(exports, "nullableBooleanConverter", ()=>(0, _attributesJs.nullableBooleanConverter));
parcelHelpers.export(exports, "nullableNumberConverter", ()=>(0, _attributesJs.nullableNumberConverter));
parcelHelpers.export(exports, "ElementController", ()=>(0, _elementControllerJs.ElementController));
parcelHelpers.export(exports, "HydratableElementController", ()=>(0, _elementControllerJs.HydratableElementController));
var _platformJs = require("./platform.js");
var _domJs = require("./dom.js");
var _observableJs = require("./observation/observable.js");
var _notifierJs = require("./observation/notifier.js");
var _arraysJs = require("./observation/arrays.js");
var _updateQueueJs = require("./observation/update-queue.js");
var _bindingJs = require("./binding/binding.js");
var _oneWayJs = require("./binding/one-way.js");
var _oneTimeJs = require("./binding/one-time.js");
var _normalizeJs = require("./binding/normalize.js");
var _elementStylesJs = require("./styles/element-styles.js");
var _cssJs = require("./styles/css.js");
var _cssDirectiveJs = require("./styles/css-directive.js");
var _hostJs = require("./styles/host.js");
var _styleStrategyJs = require("./styles/style-strategy.js");
var _cssBindingDirectiveJs = require("./styles/css-binding-directive.js");
var _templateJs = require("./templating/template.js");
var _compilerJs = require("./templating/compiler.js");
var _markupJs = require("./templating/markup.js");
var _htmlBindingDirectiveJs = require("./templating/html-binding-directive.js");
var _htmlDirectiveJs = require("./templating/html-directive.js");
var _refJs = require("./templating/ref.js");
var _whenJs = require("./templating/when.js");
var _repeatJs = require("./templating/repeat.js");
var _slottedJs = require("./templating/slotted.js");
var _childrenJs = require("./templating/children.js");
var _viewJs = require("./templating/view.js");
var _nodeObservationJs = require("./templating/node-observation.js");
var _renderJs = require("./templating/render.js");
var _fastElementJs = require("./components/fast-element.js");
var _fastDefinitionsJs = require("./components/fast-definitions.js");
var _attributesJs = require("./components/attributes.js");
var _elementControllerJs = require("./components/element-controller.js");

},{"./platform.js":false,"./dom.js":false,"./observation/observable.js":"5BRHB","./observation/notifier.js":false,"./observation/arrays.js":false,"./observation/update-queue.js":false,"./binding/binding.js":"aYiX0","./binding/one-way.js":false,"./binding/one-time.js":false,"./binding/normalize.js":false,"./styles/element-styles.js":false,"./styles/css.js":"grl4Q","./styles/css-directive.js":false,"./styles/host.js":"dVhnk","./styles/style-strategy.js":"3Qa4q","./styles/css-binding-directive.js":false,"./templating/template.js":"4UPZa","./templating/compiler.js":false,"./templating/markup.js":false,"./templating/html-binding-directive.js":"8CCiP","./templating/html-directive.js":"gFfpP","./templating/ref.js":false,"./templating/when.js":"c3sGM","./templating/repeat.js":"dzvmo","./templating/slotted.js":"lITBx","./templating/children.js":"99AyB","./templating/view.js":"3HWXi","./templating/node-observation.js":"hKuMP","./templating/render.js":false,"./components/fast-element.js":"j9ZUF","./components/fast-definitions.js":false,"./components/attributes.js":"lXzB0","./components/element-controller.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"54qbx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FAST", ()=>FAST);
parcelHelpers.export(exports, "emptyArray", ()=>emptyArray);
/**
 * Do not change. Part of shared kernel contract.
 * @internal
 */ parcelHelpers.export(exports, "createTypeRegistry", ()=>createTypeRegistry);
/**
 * Creates a function capable of locating metadata associated with a type.
 * @returns A metadata locator function.
 * @internal
 */ parcelHelpers.export(exports, "createMetadataLocator", ()=>createMetadataLocator);
/**
 * Makes a type noop for JSON serialization.
 * @param type - The type to make noop for JSON serialization.
 * @internal
 */ parcelHelpers.export(exports, "makeSerializationNoop", ()=>makeSerializationNoop);
var _interfacesJs = require("./interfaces.js");
var _polyfillsJs = require("./polyfills.js");
// ensure FAST global - duplicated debug.ts
const propConfig = {
    configurable: false,
    enumerable: false,
    writable: false
};
if (globalThis.FAST === void 0) Reflect.defineProperty(globalThis, "FAST", Object.assign({
    value: Object.create(null)
}, propConfig));
const FAST = globalThis.FAST;
if (FAST.getById === void 0) {
    const storage = Object.create(null);
    Reflect.defineProperty(FAST, "getById", Object.assign({
        value (id, initialize) {
            let found = storage[id];
            if (found === void 0) found = initialize ? storage[id] = initialize() : null;
            return found;
        }
    }, propConfig));
}
if (FAST.error === void 0) Object.assign(FAST, {
    warn () {},
    error (code) {
        return new Error(`Error ${code}`);
    },
    addMessages () {}
});
const emptyArray = Object.freeze([]);
function createTypeRegistry() {
    const typeToDefinition = new Map();
    return Object.freeze({
        register (definition) {
            if (typeToDefinition.has(definition.type)) return false;
            typeToDefinition.set(definition.type, definition);
            return true;
        },
        getByType (key) {
            return typeToDefinition.get(key);
        },
        getForInstance (object) {
            if (object === null || object === void 0) return void 0;
            return typeToDefinition.get(object.constructor);
        }
    });
}
function createMetadataLocator() {
    const metadataLookup = new WeakMap();
    return function(target) {
        let metadata = metadataLookup.get(target);
        if (metadata === void 0) {
            let currentTarget = Reflect.getPrototypeOf(target);
            while(metadata === void 0 && currentTarget !== null){
                metadata = metadataLookup.get(currentTarget);
                currentTarget = Reflect.getPrototypeOf(currentTarget);
            }
            metadata = metadata === void 0 ? [] : metadata.slice(0);
            metadataLookup.set(target, metadata);
        }
        return metadata;
    };
}
function makeSerializationNoop(type) {
    type.prototype.toJSON = (0, _interfacesJs.noop);
}

},{"./interfaces.js":"jk6ut","./polyfills.js":"h2pCy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jk6ut":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KernelServiceId", ()=>KernelServiceId);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "noop", ()=>noop);
let kernelMode;
const kernelAttr = "fast-kernel";
try {
    if (document.currentScript) kernelMode = document.currentScript.getAttribute(kernelAttr);
    else {
        const scripts = document.getElementsByTagName("script");
        const currentScript = scripts[scripts.length - 1];
        kernelMode = currentScript.getAttribute(kernelAttr);
    }
} catch (e) {
    kernelMode = "isolate";
}
let KernelServiceId;
switch(kernelMode){
    case "share":
        KernelServiceId = Object.freeze({
            updateQueue: 1,
            observable: 2,
            contextEvent: 3,
            elementRegistry: 4
        });
        break;
    case "share-v2":
        KernelServiceId = Object.freeze({
            updateQueue: 1.2,
            observable: 2.2,
            contextEvent: 3.2,
            elementRegistry: 4.2
        });
        break;
    default:
        // fully isolate the kernel from all other FAST instances
        const postfix = `-${Math.random().toString(36).substring(2, 8)}`;
        KernelServiceId = Object.freeze({
            updateQueue: `1.2${postfix}`,
            observable: `2.2${postfix}`,
            contextEvent: `3.2${postfix}`,
            elementRegistry: `4.2${postfix}`
        });
        break;
}
const isFunction = (object)=>typeof object === "function";
const isString = (object)=>typeof object === "string";
const noop = ()=>void 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h2pCy":[function(require,module,exports) {
var global = arguments[3];
/* eslint-disable @typescript-eslint/ban-ts-comment */ (function ensureGlobalThis() {
    if (typeof globalThis !== "undefined") // We're running in a modern environment.
    return;
    // @ts-ignore
    if (typeof global !== "undefined") // We're running in NodeJS
    // @ts-ignore
    global.globalThis = global;
    else if (typeof self !== "undefined") self.globalThis = self;
    else if (typeof window !== "undefined") // We're running in the browser's main thread.
    window.globalThis = window;
    else {
        // Hopefully we never get here...
        // Not all environments allow eval and Function. Use only as a last resort:
        // eslint-disable-next-line no-new-func
        const result = new Function("return this")();
        result.globalThis = result;
    }
})();

},{}],"hHZU0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMAspect", ()=>DOMAspect);
parcelHelpers.export(exports, "DOM", ()=>DOM);
var _interfacesJs = require("./interfaces.js");
var _platformJs = require("./platform.js");
const DOMAspect = Object.freeze({
    /**
     * Not aspected.
     */ none: 0,
    /**
     * An attribute.
     */ attribute: 1,
    /**
     * A boolean attribute.
     */ booleanAttribute: 2,
    /**
     * A property.
     */ property: 3,
    /**
     * Content
     */ content: 4,
    /**
     * A token list.
     */ tokenList: 5,
    /**
     * An event.
     */ event: 6
});
const createHTML = (html)=>html;
const fastTrustedType = globalThis.trustedTypes ? globalThis.trustedTypes.createPolicy("fast-html", {
    createHTML
}) : {
    createHTML
};
let defaultPolicy = Object.freeze({
    createHTML (value) {
        return fastTrustedType.createHTML(value);
    },
    protect (tagName, aspect, aspectName, sink) {
        return sink;
    }
});
const fastPolicy = defaultPolicy;
const DOM = Object.freeze({
    /**
     * Gets the dom policy used by the templating system.
     */ get policy () {
        return defaultPolicy;
    },
    /**
     * Sets the dom policy used by the templating system.
     * @param policy - The policy to set.
     * @remarks
     * This API can only be called once, for security reasons. It should be
     * called by the application developer at the start of their program.
     */ setPolicy (value) {
        if (defaultPolicy !== fastPolicy) throw (0, _platformJs.FAST).error(1201 /* Message.onlySetDOMPolicyOnce */ );
        defaultPolicy = value;
    },
    /**
     * Sets an attribute value on an element.
     * @param element - The element to set the attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is `null` or `undefined`, the attribute is removed, otherwise
     * it is set to the provided value using the standard `setAttribute` API.
     */ setAttribute (element, attributeName, value) {
        value === null || value === undefined ? element.removeAttribute(attributeName) : element.setAttribute(attributeName, value);
    },
    /**
     * Sets a boolean attribute value.
     * @param element - The element to set the boolean attribute value on.
     * @param attributeName - The attribute name to set.
     * @param value - The value of the attribute to set.
     * @remarks
     * If the value is true, the attribute is added; otherwise it is removed.
     */ setBooleanAttribute (element, attributeName, value) {
        value ? element.setAttribute(attributeName, "") : element.removeAttribute(attributeName);
    }
});

},{"./interfaces.js":"jk6ut","./platform.js":"54qbx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5BRHB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SourceLifetime", ()=>SourceLifetime);
parcelHelpers.export(exports, "Observable", ()=>Observable);
/**
 * Decorator: Defines an observable property on the target.
 * @param target - The target to define the observable on.
 * @param nameOrAccessor - The property name or accessor to define the observable as.
 * @public
 */ parcelHelpers.export(exports, "observable", ()=>observable);
/**
 * Decorator: Marks a property getter as having volatile observable dependencies.
 * @param target - The target that the property is defined on.
 * @param name - The property name.
 * @param name - The existing descriptor.
 * @public
 */ parcelHelpers.export(exports, "volatile", ()=>volatile);
parcelHelpers.export(exports, "ExecutionContext", ()=>ExecutionContext);
var _interfacesJs = require("../interfaces.js");
var _platformJs = require("../platform.js");
var _updateQueueJs = require("./update-queue.js");
var _notifierJs = require("./notifier.js");
const SourceLifetime = Object.freeze({
    /**
     * The source to controller lifetime relationship is unknown.
     */ unknown: void 0,
    /**
     * The source and controller lifetimes are coupled to one another.
     * They can/will be GC'd together.
     */ coupled: 1
});
const Observable = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).observable, ()=>{
    const queueUpdate = (0, _updateQueueJs.Updates).enqueue;
    const volatileRegex = /(:|&&|\|\||if|\?\.)/;
    const notifierLookup = new WeakMap();
    let watcher = void 0;
    let createArrayObserver = (array)=>{
        throw (0, _platformJs.FAST).error(1101 /* Message.needsArrayObservation */ );
    };
    function getNotifier(source) {
        var _a;
        let found = (_a = source.$fastController) !== null && _a !== void 0 ? _a : notifierLookup.get(source);
        if (found === void 0) Array.isArray(source) ? found = createArrayObserver(source) : notifierLookup.set(source, found = new (0, _notifierJs.PropertyChangeNotifier)(source));
        return found;
    }
    const getAccessors = (0, _platformJs.createMetadataLocator)();
    class DefaultObservableAccessor {
        constructor(name){
            this.name = name;
            this.field = `_${name}`;
            this.callback = `${name}Changed`;
        }
        getValue(source) {
            if (watcher !== void 0) watcher.watch(source, this.name);
            return source[this.field];
        }
        setValue(source, newValue) {
            const field = this.field;
            const oldValue = source[field];
            if (oldValue !== newValue) {
                source[field] = newValue;
                const callback = source[this.callback];
                if ((0, _interfacesJs.isFunction)(callback)) callback.call(source, oldValue, newValue);
                getNotifier(source).notify(this.name);
            }
        }
    }
    class ExpressionNotifierImplementation extends (0, _notifierJs.SubscriberSet) {
        constructor(expression, initialSubscriber, isVolatileBinding = false){
            super(expression, initialSubscriber);
            this.expression = expression;
            this.isVolatileBinding = isVolatileBinding;
            this.needsRefresh = true;
            this.needsQueue = true;
            this.isAsync = true;
            this.first = this;
            this.last = null;
            this.propertySource = void 0;
            this.propertyName = void 0;
            this.notifier = void 0;
            this.next = void 0;
        }
        setMode(isAsync) {
            this.isAsync = this.needsQueue = isAsync;
        }
        bind(controller) {
            this.controller = controller;
            const value = this.observe(controller.source, controller.context);
            if (!controller.isBound && this.requiresUnbind(controller)) controller.onUnbind(this);
            return value;
        }
        requiresUnbind(controller) {
            return controller.sourceLifetime !== SourceLifetime.coupled || this.first !== this.last || this.first.propertySource !== controller.source;
        }
        unbind(controller) {
            this.dispose();
        }
        observe(source, context) {
            if (this.needsRefresh && this.last !== null) this.dispose();
            const previousWatcher = watcher;
            watcher = this.needsRefresh ? this : void 0;
            this.needsRefresh = this.isVolatileBinding;
            let result;
            try {
                result = this.expression(source, context);
            } finally{
                watcher = previousWatcher;
            }
            return result;
        }
        // backwards compat with v1 kernel
        disconnect() {
            this.dispose();
        }
        dispose() {
            if (this.last !== null) {
                let current = this.first;
                while(current !== void 0){
                    current.notifier.unsubscribe(this, current.propertyName);
                    current = current.next;
                }
                this.last = null;
                this.needsRefresh = this.needsQueue = this.isAsync;
            }
        }
        watch(propertySource, propertyName) {
            const prev = this.last;
            const notifier = getNotifier(propertySource);
            const current = prev === null ? this.first : {};
            current.propertySource = propertySource;
            current.propertyName = propertyName;
            current.notifier = notifier;
            notifier.subscribe(this, propertyName);
            if (prev !== null) {
                if (!this.needsRefresh) {
                    // Declaring the variable prior to assignment below circumvents
                    // a bug in Angular's optimization process causing infinite recursion
                    // of this watch() method. Details https://github.com/microsoft/fast/issues/4969
                    let prevValue;
                    watcher = void 0;
                    /* eslint-disable-next-line */ prevValue = prev.propertySource[prev.propertyName];
                    /* eslint-disable-next-line */ watcher = this;
                    if (propertySource === prevValue) this.needsRefresh = true;
                }
                prev.next = current;
            }
            this.last = current;
        }
        handleChange() {
            if (this.needsQueue) {
                this.needsQueue = false;
                queueUpdate(this);
            } else if (!this.isAsync) this.call();
        }
        call() {
            if (this.last !== null) {
                this.needsQueue = this.isAsync;
                this.notify(this);
            }
        }
        *records() {
            let next = this.first;
            while(next !== void 0){
                yield next;
                next = next.next;
            }
        }
    }
    (0, _platformJs.makeSerializationNoop)(ExpressionNotifierImplementation);
    return Object.freeze({
        /**
         * @internal
         * @param factory - The factory used to create array observers.
         */ setArrayObserverFactory (factory) {
            createArrayObserver = factory;
        },
        /**
         * Gets a notifier for an object or Array.
         * @param source - The object or Array to get the notifier for.
         */ getNotifier,
        /**
         * Records a property change for a source object.
         * @param source - The object to record the change against.
         * @param propertyName - The property to track as changed.
         */ track (source, propertyName) {
            watcher && watcher.watch(source, propertyName);
        },
        /**
         * Notifies watchers that the currently executing property getter or function is volatile
         * with respect to its observable dependencies.
         */ trackVolatile () {
            watcher && (watcher.needsRefresh = true);
        },
        /**
         * Notifies subscribers of a source object of changes.
         * @param source - the object to notify of changes.
         * @param args - The change args to pass to subscribers.
         */ notify (source, args) {
            /* eslint-disable-next-line @typescript-eslint/no-use-before-define */ getNotifier(source).notify(args);
        },
        /**
         * Defines an observable property on an object or prototype.
         * @param target - The target object to define the observable on.
         * @param nameOrAccessor - The name of the property to define as observable;
         * or a custom accessor that specifies the property name and accessor implementation.
         */ defineProperty (target, nameOrAccessor) {
            if ((0, _interfacesJs.isString)(nameOrAccessor)) nameOrAccessor = new DefaultObservableAccessor(nameOrAccessor);
            getAccessors(target).push(nameOrAccessor);
            Reflect.defineProperty(target, nameOrAccessor.name, {
                enumerable: true,
                get () {
                    return nameOrAccessor.getValue(this);
                },
                set (newValue) {
                    nameOrAccessor.setValue(this, newValue);
                }
            });
        },
        /**
         * Finds all the observable accessors defined on the target,
         * including its prototype chain.
         * @param target - The target object to search for accessor on.
         */ getAccessors,
        /**
         * Creates a {@link ExpressionNotifier} that can watch the
         * provided {@link Expression} for changes.
         * @param expression - The binding to observe.
         * @param initialSubscriber - An initial subscriber to changes in the binding value.
         * @param isVolatileBinding - Indicates whether the binding's dependency list must be re-evaluated on every value evaluation.
         */ binding (expression, initialSubscriber, isVolatileBinding = this.isVolatileBinding(expression)) {
            return new ExpressionNotifierImplementation(expression, initialSubscriber, isVolatileBinding);
        },
        /**
         * Determines whether a binding expression is volatile and needs to have its dependency list re-evaluated
         * on every evaluation of the value.
         * @param expression - The binding to inspect.
         */ isVolatileBinding (expression) {
            return volatileRegex.test(expression.toString());
        }
    });
});
function observable(target, nameOrAccessor) {
    Observable.defineProperty(target, nameOrAccessor);
}
function volatile(target, name, descriptor) {
    return Object.assign({}, descriptor, {
        get () {
            Observable.trackVolatile();
            return descriptor.get.apply(this);
        }
    });
}
const contextEvent = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).contextEvent, ()=>{
    let current = null;
    return {
        get () {
            return current;
        },
        set (event) {
            current = event;
        }
    };
});
const ExecutionContext = Object.freeze({
    /**
     * A default execution context.
     */ default: {
        index: 0,
        length: 0,
        get event () {
            return ExecutionContext.getEvent();
        },
        eventDetail () {
            return this.event.detail;
        },
        eventTarget () {
            return this.event.target;
        }
    },
    /**
     * Gets the current event.
     * @returns An event object.
     */ getEvent () {
        return contextEvent.get();
    },
    /**
     * Sets the current event.
     * @param event - An event object.
     */ setEvent (event) {
        contextEvent.set(event);
    }
});

},{"../interfaces.js":"jk6ut","../platform.js":"54qbx","./update-queue.js":"kiEDG","./notifier.js":"A30Q1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kiEDG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Updates", ()=>Updates);
var _interfacesJs = require("../interfaces.js");
var _platformJs = require("../platform.js");
const Updates = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).updateQueue, ()=>{
    const tasks = [];
    const pendingErrors = [];
    const rAF = globalThis.requestAnimationFrame;
    let updateAsync = true;
    function throwFirstError() {
        if (pendingErrors.length) throw pendingErrors.shift();
    }
    function tryRunTask(task) {
        try {
            task.call();
        } catch (error) {
            if (updateAsync) {
                pendingErrors.push(error);
                setTimeout(throwFirstError, 0);
            } else {
                tasks.length = 0;
                throw error;
            }
        }
    }
    function process() {
        const capacity = 1024;
        let index = 0;
        while(index < tasks.length){
            tryRunTask(tasks[index]);
            index++;
            // Prevent leaking memory for long chains of recursive calls to `enqueue`.
            // If we call `enqueue` within a task scheduled by `enqueue`, the queue will
            // grow, but to avoid an O(n) walk for every task we execute, we don't
            // shift tasks off the queue after they have been executed.
            // Instead, we periodically shift 1024 tasks off the queue.
            if (index > capacity) {
                // Manually shift all values starting at the index back to the
                // beginning of the queue.
                for(let scan = 0, newLength = tasks.length - index; scan < newLength; scan++)tasks[scan] = tasks[scan + index];
                tasks.length -= index;
                index = 0;
            }
        }
        tasks.length = 0;
    }
    function enqueue(callable) {
        tasks.push(callable);
        if (tasks.length < 2) updateAsync ? rAF(process) : process();
    }
    return Object.freeze({
        enqueue,
        next: ()=>new Promise(enqueue),
        process,
        setMode: (isAsync)=>updateAsync = isAsync
    });
});

},{"../interfaces.js":"jk6ut","../platform.js":"54qbx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"A30Q1":[function(require,module,exports) {
/**
 * An implementation of {@link Notifier} that efficiently keeps track of
 * subscribers interested in a specific change notification on an
 * observable subject.
 *
 * @remarks
 * This set is optimized for the most common scenario of 1 or 2 subscribers.
 * With this in mind, it can store a subscriber in an internal field, allowing it to avoid Array#push operations.
 * If the set ever exceeds two subscribers, it upgrades to an array automatically.
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubscriberSet", ()=>SubscriberSet);
/**
 * An implementation of Notifier that allows subscribers to be notified
 * of individual property changes on an object.
 * @public
 */ parcelHelpers.export(exports, "PropertyChangeNotifier", ()=>PropertyChangeNotifier);
class SubscriberSet {
    /**
     * Creates an instance of SubscriberSet for the specified subject.
     * @param subject - The subject that subscribers will receive notifications from.
     * @param initialSubscriber - An initial subscriber to changes.
     */ constructor(subject, initialSubscriber){
        this.sub1 = void 0;
        this.sub2 = void 0;
        this.spillover = void 0;
        this.subject = subject;
        this.sub1 = initialSubscriber;
    }
    /**
     * Checks whether the provided subscriber has been added to this set.
     * @param subscriber - The subscriber to test for inclusion in this set.
     */ has(subscriber) {
        return this.spillover === void 0 ? this.sub1 === subscriber || this.sub2 === subscriber : this.spillover.indexOf(subscriber) !== -1;
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     */ subscribe(subscriber) {
        const spillover = this.spillover;
        if (spillover === void 0) {
            if (this.has(subscriber)) return;
            if (this.sub1 === void 0) {
                this.sub1 = subscriber;
                return;
            }
            if (this.sub2 === void 0) {
                this.sub2 = subscriber;
                return;
            }
            this.spillover = [
                this.sub1,
                this.sub2,
                subscriber
            ];
            this.sub1 = void 0;
            this.sub2 = void 0;
        } else {
            const index = spillover.indexOf(subscriber);
            if (index === -1) spillover.push(subscriber);
        }
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     */ unsubscribe(subscriber) {
        const spillover = this.spillover;
        if (spillover === void 0) {
            if (this.sub1 === subscriber) this.sub1 = void 0;
            else if (this.sub2 === subscriber) this.sub2 = void 0;
        } else {
            const index = spillover.indexOf(subscriber);
            if (index !== -1) spillover.splice(index, 1);
        }
    }
    /**
     * Notifies all subscribers.
     * @param args - Data passed along to subscribers during notification.
     */ notify(args) {
        const spillover = this.spillover;
        const subject = this.subject;
        if (spillover === void 0) {
            const sub1 = this.sub1;
            const sub2 = this.sub2;
            if (sub1 !== void 0) sub1.handleChange(subject, args);
            if (sub2 !== void 0) sub2.handleChange(subject, args);
        } else for(let i = 0, ii = spillover.length; i < ii; ++i)spillover[i].handleChange(subject, args);
    }
}
class PropertyChangeNotifier {
    /**
     * Creates an instance of PropertyChangeNotifier for the specified subject.
     * @param subject - The object that subscribers will receive notifications for.
     */ constructor(subject){
        this.subscribers = {};
        this.subjectSubscribers = null;
        this.subject = subject;
    }
    /**
     * Notifies all subscribers, based on the specified property.
     * @param propertyName - The property name, passed along to subscribers during notification.
     */ notify(propertyName) {
        var _a, _b;
        (_a = this.subscribers[propertyName]) === null || _a === void 0 || _a.notify(propertyName);
        (_b = this.subjectSubscribers) === null || _b === void 0 || _b.notify(propertyName);
    }
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
     */ subscribe(subscriber, propertyToWatch) {
        var _a, _b;
        let subscribers;
        if (propertyToWatch) subscribers = (_a = this.subscribers[propertyToWatch]) !== null && _a !== void 0 ? _a : this.subscribers[propertyToWatch] = new SubscriberSet(this.subject);
        else subscribers = (_b = this.subjectSubscribers) !== null && _b !== void 0 ? _b : this.subjectSubscribers = new SubscriberSet(this.subject);
        subscribers.subscribe(subscriber);
    }
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
     */ unsubscribe(subscriber, propertyToUnwatch) {
        var _a, _b;
        if (propertyToUnwatch) (_a = this.subscribers[propertyToUnwatch]) === null || _a === void 0 || _a.unsubscribe(subscriber);
        else (_b = this.subjectSubscribers) === null || _b === void 0 || _b.unsubscribe(subscriber);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hAkeQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A splice map is a representation of how a previous array of items
 * was transformed into a new array of items. Conceptually it is a list of
 * tuples of
 *
 *   (index, removed, addedCount)
 *
 * which are kept in ascending index order of. The tuple represents that at
 * the |index|, |removed| sequence of items were removed, and counting forward
 * from |index|, |addedCount| items were added.
 * @public
 */ parcelHelpers.export(exports, "Splice", ()=>Splice);
parcelHelpers.export(exports, "SpliceStrategySupport", ()=>SpliceStrategySupport);
parcelHelpers.export(exports, "SpliceStrategy", ()=>SpliceStrategy);
parcelHelpers.export(exports, "ArrayObserver", ()=>ArrayObserver);
/**
 * Enables observing the length of an array.
 * @param array - The array to observe the length of.
 * @returns The length of the array.
 * @public
 */ parcelHelpers.export(exports, "lengthOf", ()=>lengthOf);
var _platformJs = require("../platform.js");
var _notifierJs = require("./notifier.js");
var _observableJs = require("./observable.js");
var _updateQueueJs = require("./update-queue.js");
class Splice {
    /**
     * Creates a splice.
     * @param index - The index that the splice occurs at.
     * @param removed - The items that were removed.
     * @param addedCount - The  number of items that were added.
     */ constructor(index, removed, addedCount){
        this.index = index;
        this.removed = removed;
        this.addedCount = addedCount;
    }
    /**
     * Adjusts the splice index based on the provided array.
     * @param array - The array to adjust to.
     * @returns The same splice, mutated based on the reference array.
     */ adjustTo(array) {
        let index = this.index;
        const arrayLength = array.length;
        if (index > arrayLength) index = arrayLength - this.addedCount;
        else if (index < 0) index = arrayLength + this.removed.length + index - this.addedCount;
        this.index = index < 0 ? 0 : index;
        return this;
    }
}
const SpliceStrategySupport = Object.freeze({
    /**
     * Only supports resets.
     */ reset: 1,
    /**
     * Supports tracking splices and resets.
     */ splice: 2,
    /**
     * Supports tracking splices and resets, while applying some form
     * of optimization, such as merging, to the splices.
     */ optimized: 3
});
const reset = new Splice(0, (0, _platformJs.emptyArray), 0);
reset.reset = true;
const resetSplices = [
    reset
];
// Note: This function is *based* on the computation of the Levenshtein
// "edit" distance. The one change is that "updates" are treated as two
// edits - not one. With Array splices, an update is really a delete
// followed by an add. By retaining this, we optimize for "keeping" the
// maximum array items in the original array. For example:
//
//   'xxxx123' to '123yyyy'
//
// With 1-edit updates, the shortest path would be just to update all seven
// characters. With 2-edit updates, we delete 4, leave 3, and add 4. This
// leaves the substring '123' intact.
function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    // "Deletion" columns
    const rowCount = oldEnd - oldStart + 1;
    const columnCount = currentEnd - currentStart + 1;
    const distances = new Array(rowCount);
    let north;
    let west;
    // "Addition" rows. Initialize null column.
    for(let i = 0; i < rowCount; ++i){
        distances[i] = new Array(columnCount);
        distances[i][0] = i;
    }
    // Initialize null row
    for(let j = 0; j < columnCount; ++j)distances[0][j] = j;
    for(let i = 1; i < rowCount; ++i){
        for(let j = 1; j < columnCount; ++j)if (current[currentStart + j - 1] === old[oldStart + i - 1]) distances[i][j] = distances[i - 1][j - 1];
        else {
            north = distances[i - 1][j] + 1;
            west = distances[i][j - 1] + 1;
            distances[i][j] = north < west ? north : west;
        }
    }
    return distances;
}
// This starts at the final weight, and walks "backward" by finding
// the minimum previous weight recursively until the origin of the weight
// matrix.
function spliceOperationsFromEditDistances(distances) {
    let i = distances.length - 1;
    let j = distances[0].length - 1;
    let current = distances[i][j];
    const edits = [];
    while(i > 0 || j > 0){
        if (i === 0) {
            edits.push(2 /* Edit.add */ );
            j--;
            continue;
        }
        if (j === 0) {
            edits.push(3 /* Edit.delete */ );
            i--;
            continue;
        }
        const northWest = distances[i - 1][j - 1];
        const west = distances[i - 1][j];
        const north = distances[i][j - 1];
        let min;
        if (west < north) min = west < northWest ? west : northWest;
        else min = north < northWest ? north : northWest;
        if (min === northWest) {
            if (northWest === current) edits.push(0 /* Edit.leave */ );
            else {
                edits.push(1 /* Edit.update */ );
                current = northWest;
            }
            i--;
            j--;
        } else if (min === west) {
            edits.push(3 /* Edit.delete */ );
            i--;
            current = west;
        } else {
            edits.push(2 /* Edit.add */ );
            j--;
            current = north;
        }
    }
    return edits.reverse();
}
function sharedPrefix(current, old, searchLength) {
    for(let i = 0; i < searchLength; ++i){
        if (current[i] !== old[i]) return i;
    }
    return searchLength;
}
function sharedSuffix(current, old, searchLength) {
    let index1 = current.length;
    let index2 = old.length;
    let count = 0;
    while(count < searchLength && current[--index1] === old[--index2])count++;
    return count;
}
function intersect(start1, end1, start2, end2) {
    // Disjoint
    if (end1 < start2 || end2 < start1) return -1;
    // Adjacent
    if (end1 === start2 || end2 === start1) return 0;
    // Non-zero intersect, span1 first
    if (start1 < start2) {
        if (end1 < end2) return end1 - start2; // Overlap
        return end2 - start2; // Contained
    }
    // Non-zero intersect, span2 first
    if (end2 < end1) return end2 - start1; // Overlap
    return end1 - start1; // Contained
}
/**
 * @remarks
 * Lacking individual splice mutation information, the minimal set of
 * splices can be synthesized given the previous state and final state of an
 * array. The basic approach is to calculate the edit distance matrix and
 * choose the shortest path through it.
 *
 * Complexity: O(l * p)
 *   l: The length of the current array
 *   p: The length of the old array
 */ function calc(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    let prefixCount = 0;
    let suffixCount = 0;
    const minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
    if (currentStart === 0 && oldStart === 0) prefixCount = sharedPrefix(current, old, minLength);
    if (currentEnd === current.length && oldEnd === old.length) suffixCount = sharedSuffix(current, old, minLength - prefixCount);
    currentStart += prefixCount;
    oldStart += prefixCount;
    currentEnd -= suffixCount;
    oldEnd -= suffixCount;
    if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) return 0, _platformJs.emptyArray;
    if (currentStart === currentEnd) {
        const splice = new Splice(currentStart, [], 0);
        while(oldStart < oldEnd)splice.removed.push(old[oldStart++]);
        return [
            splice
        ];
    } else if (oldStart === oldEnd) return [
        new Splice(currentStart, [], currentEnd - currentStart)
    ];
    const ops = spliceOperationsFromEditDistances(calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));
    const splices = [];
    let splice = void 0;
    let index = currentStart;
    let oldIndex = oldStart;
    for(let i = 0; i < ops.length; ++i)switch(ops[i]){
        case 0 /* Edit.leave */ :
            if (splice !== void 0) {
                splices.push(splice);
                splice = void 0;
            }
            index++;
            oldIndex++;
            break;
        case 1 /* Edit.update */ :
            if (splice === void 0) splice = new Splice(index, [], 0);
            splice.addedCount++;
            index++;
            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;
        case 2 /* Edit.add */ :
            if (splice === void 0) splice = new Splice(index, [], 0);
            splice.addedCount++;
            index++;
            break;
        case 3 /* Edit.delete */ :
            if (splice === void 0) splice = new Splice(index, [], 0);
            splice.removed.push(old[oldIndex]);
            oldIndex++;
            break;
    }
    if (splice !== void 0) splices.push(splice);
    return splices;
}
function merge(splice, splices) {
    let inserted = false;
    let insertionOffset = 0;
    for(let i = 0; i < splices.length; i++){
        const current = splices[i];
        current.index += insertionOffset;
        if (inserted) continue;
        const intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);
        if (intersectCount >= 0) {
            // Merge the two splices
            splices.splice(i, 1);
            i--;
            insertionOffset -= current.addedCount - current.removed.length;
            splice.addedCount += current.addedCount - intersectCount;
            const deleteCount = splice.removed.length + current.removed.length - intersectCount;
            if (!splice.addedCount && !deleteCount) // merged splice is a noop. discard.
            inserted = true;
            else {
                let currentRemoved = current.removed;
                if (splice.index < current.index) {
                    // some prefix of splice.removed is prepended to current.removed.
                    const prepend = splice.removed.slice(0, current.index - splice.index);
                    prepend.push(...currentRemoved);
                    currentRemoved = prepend;
                }
                if (splice.index + splice.removed.length > current.index + current.addedCount) {
                    // some suffix of splice.removed is appended to current.removed.
                    const append = splice.removed.slice(current.index + current.addedCount - splice.index);
                    currentRemoved.push(...append);
                }
                splice.removed = currentRemoved;
                if (current.index < splice.index) splice.index = current.index;
            }
        } else if (splice.index < current.index) {
            // Insert splice here.
            inserted = true;
            splices.splice(i, 0, splice);
            i++;
            const offset = splice.addedCount - splice.removed.length;
            current.index += offset;
            insertionOffset += offset;
        }
    }
    if (!inserted) splices.push(splice);
}
function project(array, changes) {
    let splices = [];
    const initialSplices = [];
    for(let i = 0, ii = changes.length; i < ii; i++)merge(changes[i], initialSplices);
    for(let i = 0, ii = initialSplices.length; i < ii; ++i){
        const splice = initialSplices[i];
        if (splice.addedCount === 1 && splice.removed.length === 1) {
            if (splice.removed[0] !== array[splice.index]) splices.push(splice);
            continue;
        }
        splices = splices.concat(calc(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
    }
    return splices;
}
/**
 * A SpliceStrategy that attempts to merge all splices into the minimal set of
 * splices needed to represent the change from the old array to the new array.
 * @public
 */ let defaultSpliceStrategy = Object.freeze({
    support: SpliceStrategySupport.optimized,
    normalize (previous, current, changes) {
        if (previous === void 0) {
            if (changes === void 0) return 0, _platformJs.emptyArray;
            return project(current, changes);
        }
        return resetSplices;
    },
    pop (array, observer, pop, args) {
        const notEmpty = array.length > 0;
        const result = pop.apply(array, args);
        if (notEmpty) observer.addSplice(new Splice(array.length, [
            result
        ], 0));
        return result;
    },
    push (array, observer, push, args) {
        const result = push.apply(array, args);
        observer.addSplice(new Splice(array.length - args.length, [], args.length).adjustTo(array));
        return result;
    },
    reverse (array, observer, reverse, args) {
        const result = reverse.apply(array, args);
        observer.reset(array);
        return result;
    },
    shift (array, observer, shift, args) {
        const notEmpty = array.length > 0;
        const result = shift.apply(array, args);
        if (notEmpty) observer.addSplice(new Splice(0, [
            result
        ], 0));
        return result;
    },
    sort (array, observer, sort, args) {
        const result = sort.apply(array, args);
        observer.reset(array);
        return result;
    },
    splice (array, observer, splice, args) {
        const result = splice.apply(array, args);
        observer.addSplice(new Splice(+args[0], result, args.length > 2 ? args.length - 2 : 0).adjustTo(array));
        return result;
    },
    unshift (array, observer, unshift, args) {
        const result = unshift.apply(array, args);
        observer.addSplice(new Splice(0, [], args.length).adjustTo(array));
        return result;
    }
});
const SpliceStrategy = Object.freeze({
    /**
     * A set of changes that represent a full array reset.
     */ reset: resetSplices,
    /**
     * Sets the default strategy to use for array observers.
     * @param strategy - The splice strategy to use.
     */ setDefaultStrategy (strategy) {
        defaultSpliceStrategy = strategy;
    }
});
function setNonEnumerable(target, property, value) {
    Reflect.defineProperty(target, property, {
        value,
        enumerable: false
    });
}
class DefaultArrayObserver extends (0, _notifierJs.SubscriberSet) {
    constructor(subject){
        super(subject);
        this.oldCollection = void 0;
        this.splices = void 0;
        this.needsQueue = true;
        this._strategy = null;
        this._lengthObserver = void 0;
        this.call = this.flush;
        setNonEnumerable(subject, "$fastController", this);
    }
    get strategy() {
        return this._strategy;
    }
    set strategy(value) {
        this._strategy = value;
    }
    get lengthObserver() {
        let observer = this._lengthObserver;
        if (observer === void 0) {
            const array = this.subject;
            this._lengthObserver = observer = {
                length: array.length,
                handleChange () {
                    if (this.length !== array.length) {
                        this.length = array.length;
                        (0, _observableJs.Observable).notify(observer, "length");
                    }
                }
            };
            this.subscribe(observer);
        }
        return observer;
    }
    subscribe(subscriber) {
        this.flush();
        super.subscribe(subscriber);
    }
    addSplice(splice) {
        if (this.splices === void 0) this.splices = [
            splice
        ];
        else this.splices.push(splice);
        this.enqueue();
    }
    reset(oldCollection) {
        this.oldCollection = oldCollection;
        this.enqueue();
    }
    flush() {
        var _a;
        const splices = this.splices;
        const oldCollection = this.oldCollection;
        if (splices === void 0 && oldCollection === void 0) return;
        this.needsQueue = true;
        this.splices = void 0;
        this.oldCollection = void 0;
        this.notify(((_a = this._strategy) !== null && _a !== void 0 ? _a : defaultSpliceStrategy).normalize(oldCollection, this.subject, splices));
    }
    enqueue() {
        if (this.needsQueue) {
            this.needsQueue = false;
            (0, _updateQueueJs.Updates).enqueue(this);
        }
    }
}
let enabled = false;
const ArrayObserver = Object.freeze({
    /**
     * Enables the array observation mechanism.
     * @remarks
     * Array observation is enabled automatically when using the
     * {@link RepeatDirective}, so calling this API manually is
     * not typically necessary.
     */ enable () {
        if (enabled) return;
        enabled = true;
        (0, _observableJs.Observable).setArrayObserverFactory((collection)=>new DefaultArrayObserver(collection));
        const proto = Array.prototype;
        if (!proto.$fastPatch) {
            setNonEnumerable(proto, "$fastPatch", 1);
            [
                proto.pop,
                proto.push,
                proto.reverse,
                proto.shift,
                proto.sort,
                proto.splice,
                proto.unshift
            ].forEach((method)=>{
                proto[method.name] = function(...args) {
                    var _a;
                    const o = this.$fastController;
                    return o === void 0 ? method.apply(this, args) : ((_a = o.strategy) !== null && _a !== void 0 ? _a : defaultSpliceStrategy)[method.name](this, o, method, args);
                };
            });
        }
    }
});
function lengthOf(array) {
    if (!array) return 0;
    let arrayObserver = array.$fastController;
    if (arrayObserver === void 0) {
        ArrayObserver.enable();
        arrayObserver = (0, _observableJs.Observable).getNotifier(array);
    }
    (0, _observableJs.Observable).track(arrayObserver.lengthObserver, "length");
    return array.length;
}

},{"../platform.js":"54qbx","./notifier.js":"A30Q1","./observable.js":"5BRHB","./update-queue.js":"kiEDG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aYiX0":[function(require,module,exports) {
/**
 * Captures a binding expression along with related information and capabilities.
 *
 * @public
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Binding", ()=>Binding);
class Binding {
    /**
     * Creates a binding.
     * @param evaluate - Evaluates the binding.
     * @param policy - The security policy to associate with this binding.
     * @param isVolatile - Indicates whether the binding is volatile.
     */ constructor(evaluate, policy, isVolatile = false){
        this.evaluate = evaluate;
        this.policy = policy;
        this.isVolatile = isVolatile;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hUtUy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates an standard binding.
 * @param expression - The binding to refresh when changed.
 * @param policy - The security policy to associate with th binding.
 * @param isVolatile - Indicates whether the binding is volatile or not.
 * @returns A binding configuration.
 * @public
 */ parcelHelpers.export(exports, "oneWay", ()=>oneWay);
/**
 * Creates an event listener binding.
 * @param expression - The binding to invoke when the event is raised.
 * @param options - Event listener options.
 * @returns A binding configuration.
 * @public
 */ parcelHelpers.export(exports, "listener", ()=>listener);
var _observableJs = require("../observation/observable.js");
var _bindingJs = require("./binding.js");
class OneWayBinding extends (0, _bindingJs.Binding) {
    createObserver(subscriber) {
        return (0, _observableJs.Observable).binding(this.evaluate, subscriber, this.isVolatile);
    }
}
function oneWay(expression, policy, isVolatile = (0, _observableJs.Observable).isVolatileBinding(expression)) {
    return new OneWayBinding(expression, policy, isVolatile);
}
function listener(expression, options) {
    const config = new OneWayBinding(expression);
    config.options = options;
    return config;
}

},{"../observation/observable.js":"5BRHB","./binding.js":"aYiX0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2vKEx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates a one time binding
 * @param expression - The binding to refresh when signaled.
 * @param policy - The security policy to associate with th binding.
 * @returns A binding configuration.
 * @public
 */ parcelHelpers.export(exports, "oneTime", ()=>oneTime);
var _platformJs = require("../platform.js");
var _bindingJs = require("./binding.js");
class OneTimeBinding extends (0, _bindingJs.Binding) {
    createObserver() {
        return this;
    }
    bind(controller) {
        return this.evaluate(controller.source, controller.context);
    }
}
(0, _platformJs.makeSerializationNoop)(OneTimeBinding);
function oneTime(expression, policy) {
    return new OneTimeBinding(expression, policy);
}

},{"../platform.js":"54qbx","./binding.js":"aYiX0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jR8UI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Normalizes the input value into a binding.
 * @param value - The value to create the default binding for.
 * @returns A binding configuration for the provided value.
 * @public
 */ parcelHelpers.export(exports, "normalizeBinding", ()=>normalizeBinding);
var _interfacesJs = require("../interfaces.js");
var _bindingJs = require("./binding.js");
var _oneWayJs = require("./one-way.js");
var _oneTimeJs = require("./one-time.js");
function normalizeBinding(value) {
    return (0, _interfacesJs.isFunction)(value) ? (0, _oneWayJs.oneWay)(value) : value instanceof (0, _bindingJs.Binding) ? value : (0, _oneTimeJs.oneTime)(()=>value);
}

},{"../interfaces.js":"jk6ut","./binding.js":"aYiX0","./one-way.js":"hUtUy","./one-time.js":"2vKEx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyH9B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Represents styles that can be applied to a custom element.
 * @public
 */ parcelHelpers.export(exports, "ElementStyles", ()=>ElementStyles);
let DefaultStyleStrategy;
function reduceStyles(styles) {
    return styles.map((x)=>x instanceof ElementStyles ? reduceStyles(x.styles) : [
            x
        ]).reduce((prev, curr)=>prev.concat(curr), []);
}
class ElementStyles {
    /**
     * Creates an instance of ElementStyles.
     * @param styles - The styles that will be associated with elements.
     */ constructor(styles){
        this.styles = styles;
        this.targets = new WeakSet();
        this._strategy = null;
        this.behaviors = styles.map((x)=>x instanceof ElementStyles ? x.behaviors : null).reduce((prev, curr)=>curr === null ? prev : prev === null ? curr : prev.concat(curr), null);
    }
    /**
     * Gets the StyleStrategy associated with these element styles.
     */ get strategy() {
        if (this._strategy === null) this.withStrategy(DefaultStyleStrategy);
        return this._strategy;
    }
    /** @internal */ addStylesTo(target) {
        this.strategy.addStylesTo(target);
        this.targets.add(target);
    }
    /** @internal */ removeStylesFrom(target) {
        this.strategy.removeStylesFrom(target);
        this.targets.delete(target);
    }
    /** @internal */ isAttachedTo(target) {
        return this.targets.has(target);
    }
    /**
     * Associates behaviors with this set of styles.
     * @param behaviors - The behaviors to associate.
     */ withBehaviors(...behaviors) {
        this.behaviors = this.behaviors === null ? behaviors : this.behaviors.concat(behaviors);
        return this;
    }
    /**
     * Sets the strategy that handles adding/removing these styles for an element.
     * @param strategy - The strategy to use.
     */ withStrategy(Strategy) {
        this._strategy = new Strategy(reduceStyles(this.styles));
        return this;
    }
    /**
     * Sets the default strategy type to use when creating style strategies.
     * @param Strategy - The strategy type to construct.
     */ static setDefaultStrategy(Strategy) {
        DefaultStyleStrategy = Strategy;
    }
    /**
     * Normalizes a set of composable style options.
     * @param styles - The style options to normalize.
     * @returns A singular ElementStyles instance or undefined.
     */ static normalize(styles) {
        return styles === void 0 ? void 0 : Array.isArray(styles) ? new ElementStyles(styles) : styles instanceof ElementStyles ? styles : new ElementStyles([
            styles
        ]);
    }
}
/**
 * Indicates whether the DOM supports the adoptedStyleSheets feature.
 */ ElementStyles.supportsAdoptedStyleSheets = Array.isArray(document.adoptedStyleSheets) && "replace" in CSSStyleSheet.prototype;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"grl4Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "css", ()=>css);
var _interfacesJs = require("../interfaces.js");
var _bindingJs = require("../binding/binding.js");
var _oneWayJs = require("../binding/one-way.js");
var _cssDirectiveJs = require("./css-directive.js");
var _elementStylesJs = require("./element-styles.js");
var _cssBindingDirectiveJs = require("./css-binding-directive.js");
const marker = `${Math.random().toString(36).substring(2, 8)}`;
let varId = 0;
const nextCSSVariable = ()=>`--v${marker}${++varId}`;
function collectStyles(strings, values) {
    const styles = [];
    let cssString = "";
    const behaviors = [];
    const add = (behavior)=>{
        behaviors.push(behavior);
    };
    for(let i = 0, ii = strings.length - 1; i < ii; ++i){
        cssString += strings[i];
        let value = values[i];
        if ((0, _interfacesJs.isFunction)(value)) value = new (0, _cssBindingDirectiveJs.CSSBindingDirective)((0, _oneWayJs.oneWay)(value), nextCSSVariable()).createCSS(add);
        else if (value instanceof (0, _bindingJs.Binding)) value = new (0, _cssBindingDirectiveJs.CSSBindingDirective)(value, nextCSSVariable()).createCSS(add);
        else if ((0, _cssDirectiveJs.CSSDirective).getForInstance(value) !== void 0) value = value.createCSS(add);
        if (value instanceof (0, _elementStylesJs.ElementStyles) || value instanceof CSSStyleSheet) {
            if (cssString.trim() !== "") {
                styles.push(cssString);
                cssString = "";
            }
            styles.push(value);
        } else cssString += value;
    }
    cssString += strings[strings.length - 1];
    if (cssString.trim() !== "") styles.push(cssString);
    return {
        styles,
        behaviors
    };
}
const css = (strings, ...values)=>{
    const { styles, behaviors } = collectStyles(strings, values);
    const elementStyles = new (0, _elementStylesJs.ElementStyles)(styles);
    return behaviors.length ? elementStyles.withBehaviors(...behaviors) : elementStyles;
};
class CSSPartial {
    constructor(styles, behaviors){
        this.behaviors = behaviors;
        this.css = "";
        const stylesheets = styles.reduce((accumulated, current)=>{
            if ((0, _interfacesJs.isString)(current)) this.css += current;
            else accumulated.push(current);
            return accumulated;
        }, []);
        if (stylesheets.length) this.styles = new (0, _elementStylesJs.ElementStyles)(stylesheets);
    }
    createCSS(add) {
        this.behaviors.forEach(add);
        if (this.styles) add(this);
        return this.css;
    }
    addedCallback(controller) {
        controller.addStyles(this.styles);
    }
    removedCallback(controller) {
        controller.removeStyles(this.styles);
    }
}
(0, _cssDirectiveJs.CSSDirective).define(CSSPartial);
css.partial = (strings, ...values)=>{
    const { styles, behaviors } = collectStyles(strings, values);
    return new CSSPartial(styles, behaviors);
};

},{"../interfaces.js":"jk6ut","../binding/binding.js":"aYiX0","../binding/one-way.js":"hUtUy","./css-directive.js":"eJ66R","./element-styles.js":"eyH9B","./css-binding-directive.js":"6gndE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ66R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSDirective", ()=>CSSDirective);
/**
 * Decorator: Defines a CSSDirective.
 * @public
 */ parcelHelpers.export(exports, "cssDirective", ()=>cssDirective);
var _platformJs = require("../platform.js");
const registry = (0, _platformJs.createTypeRegistry)();
const CSSDirective = Object.freeze({
    /**
     * Gets the directive definition associated with the instance.
     * @param instance - The directive instance to retrieve the definition for.
     */ getForInstance: registry.getForInstance,
    /**
     * Gets the directive definition associated with the specified type.
     * @param type - The directive type to retrieve the definition for.
     */ getByType: registry.getByType,
    /**
     * Defines a CSSDirective.
     * @param type - The type to define as a directive.
     */ define (type) {
        registry.register({
            type
        });
        return type;
    }
});
function cssDirective() {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ return function(type) {
        CSSDirective.define(type);
    };
}

},{"../platform.js":"54qbx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6gndE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Enables bindings in CSS.
 *
 * @public
 */ parcelHelpers.export(exports, "CSSBindingDirective", ()=>CSSBindingDirective);
var _cssDirectiveJs = require("./css-directive.js");
function handleChange(directive, controller, observer) {
    controller.source.style.setProperty(directive.targetAspect, observer.bind(controller));
}
class CSSBindingDirective {
    /**
     * Creates an instance of CSSBindingDirective.
     * @param dataBinding - The binding to use in CSS.
     * @param targetAspect - The CSS property to target.
     */ constructor(dataBinding, targetAspect){
        this.dataBinding = dataBinding;
        this.targetAspect = targetAspect;
    }
    /**
     * Creates a CSS fragment to interpolate into the CSS document.
     * @returns - the string to interpolate into CSS
     */ createCSS(add) {
        add(this);
        return `var(${this.targetAspect})`;
    }
    /**
     * Executed when this behavior is attached to a controller.
     * @param controller - Controls the behavior lifecycle.
     */ addedCallback(controller) {
        var _a;
        const element = controller.source;
        if (!element.$cssBindings) {
            element.$cssBindings = new Map();
            const setAttribute = element.setAttribute;
            element.setAttribute = (attr, value)=>{
                setAttribute.call(element, attr, value);
                if (attr === "style") element.$cssBindings.forEach((v, k)=>handleChange(k, v.controller, v.observer));
            };
        }
        const observer = (_a = controller[this.targetAspect]) !== null && _a !== void 0 ? _a : controller[this.targetAspect] = this.dataBinding.createObserver(this, this);
        observer.controller = controller;
        controller.source.$cssBindings.set(this, {
            controller,
            observer
        });
    }
    /**
     * Executed when this behavior's host is connected.
     * @param controller - Controls the behavior lifecycle.
     */ connectedCallback(controller) {
        handleChange(this, controller, controller[this.targetAspect]);
    }
    /**
     * Executed when this behavior is detached from a controller.
     * @param controller - Controls the behavior lifecycle.
     */ removedCallback(controller) {
        if (controller.source.$cssBindings) controller.source.$cssBindings.delete(this);
    }
    /**
     * Called when a subject this instance has subscribed to changes.
     * @param subject - The subject of the change.
     * @param args - The event args detailing the change that occurred.
     *
     * @internal
     */ handleChange(_, observer) {
        handleChange(this, observer.controller, observer);
    }
}
(0, _cssDirectiveJs.CSSDirective).define(CSSBindingDirective);

},{"./css-directive.js":"eJ66R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVhnk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Qa4q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4UPZa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Inlines a template into another template.
 * @public
 */ parcelHelpers.export(exports, "InlineTemplateDirective", ()=>InlineTemplateDirective);
/**
 * A template capable of creating HTMLView instances or rendering directly to DOM.
 * @public
 */ parcelHelpers.export(exports, "ViewTemplate", ()=>ViewTemplate);
parcelHelpers.export(exports, "html", ()=>html);
var _interfacesJs = require("../interfaces.js");
var _bindingJs = require("../binding/binding.js");
var _platformJs = require("../platform.js");
var _oneWayJs = require("../binding/one-way.js");
var _oneTimeJs = require("../binding/one-time.js");
var _htmlBindingDirectiveJs = require("./html-binding-directive.js");
var _compilerJs = require("./compiler.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _markupJs = require("./markup.js");
// Much thanks to LitHTML for working this out!
const lastAttributeNameRegex = /* eslint-disable-next-line no-control-regex, max-len */ /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
const noFactories = Object.create(null);
class InlineTemplateDirective {
    /**
     * Creates an instance of InlineTemplateDirective.
     * @param template - The template to inline.
     */ constructor(html, factories = noFactories){
        this.html = html;
        this.factories = factories;
    }
    /**
     * Creates HTML to be used within a template.
     * @param add - Can be used to add  behavior factories to a template.
     */ createHTML(add) {
        const factories = this.factories;
        for(const key in factories)add(factories[key]);
        return this.html;
    }
}
/**
 * An empty template partial.
 */ InlineTemplateDirective.empty = new InlineTemplateDirective("");
(0, _htmlDirectiveJs.HTMLDirective).define(InlineTemplateDirective);
function createHTML(value, prevString, add, definition = (0, _htmlDirectiveJs.HTMLDirective).getForInstance(value)) {
    if (definition.aspected) {
        const match = lastAttributeNameRegex.exec(prevString);
        if (match !== null) (0, _htmlDirectiveJs.HTMLDirective).assignAspect(value, match[2]);
    }
    return value.createHTML(add);
}
class ViewTemplate {
    /**
     * Creates an instance of ViewTemplate.
     * @param html - The html representing what this template will instantiate, including placeholders for directives.
     * @param factories - The directives that will be connected to placeholders in the html.
     * @param policy - The security policy to use when compiling this template.
     */ constructor(html, factories = {}, policy){
        this.policy = policy;
        this.result = null;
        this.html = html;
        this.factories = factories;
    }
    /**
     * @internal
     */ compile() {
        if (this.result === null) this.result = (0, _compilerJs.Compiler).compile(this.html, this.factories, this.policy);
        return this.result;
    }
    /**
     * Creates an HTMLView instance based on this template definition.
     * @param hostBindingTarget - The element that host behaviors will be bound to.
     */ create(hostBindingTarget) {
        return this.compile().createView(hostBindingTarget);
    }
    /**
     * Returns a directive that can inline the template.
     */ inline() {
        return new InlineTemplateDirective((0, _interfacesJs.isString)(this.html) ? this.html : this.html.innerHTML, this.factories);
    }
    /**
     * Sets the DOMPolicy for this template.
     * @param policy - The policy to associated with this template.
     * @returns The modified template instance.
     * @remarks
     * The DOMPolicy can only be set once for a template and cannot be
     * set after the template is compiled.
     */ withPolicy(policy) {
        if (this.result) throw (0, _platformJs.FAST).error(1208 /* Message.cannotSetTemplatePolicyAfterCompilation */ );
        if (this.policy) throw (0, _platformJs.FAST).error(1207 /* Message.onlySetTemplatePolicyOnce */ );
        this.policy = policy;
        return this;
    }
    /**
     * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
     * @param source - The data source to bind the template to.
     * @param host - The Element where the template will be rendered.
     * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
     * host that the template is being attached to.
     */ render(source, host, hostBindingTarget) {
        const view = this.create(hostBindingTarget);
        view.bind(source);
        view.appendTo(host);
        return view;
    }
    /**
     * Creates a template based on a set of static strings and dynamic values.
     * @param strings - The static strings to create the template with.
     * @param values - The dynamic values to create the template with.
     * @param policy - The DOMPolicy to associated with the template.
     * @returns A ViewTemplate.
     * @remarks
     * This API should not be used directly under normal circumstances because constructing
     * a template in this way, if not done properly, can open up the application to XSS
     * attacks. When using this API, provide a strong DOMPolicy that can properly sanitize
     * and also be sure to manually sanitize all static strings particularly if they can
     * come from user input.
     */ static create(strings, values, policy) {
        let html = "";
        const factories = Object.create(null);
        const add = (factory)=>{
            var _a;
            const id = (_a = factory.id) !== null && _a !== void 0 ? _a : factory.id = (0, _markupJs.nextId)();
            factories[id] = factory;
            return id;
        };
        for(let i = 0, ii = strings.length - 1; i < ii; ++i){
            const currentString = strings[i];
            let currentValue = values[i];
            let definition;
            html += currentString;
            if ((0, _interfacesJs.isFunction)(currentValue)) currentValue = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)((0, _oneWayJs.oneWay)(currentValue));
            else if (currentValue instanceof (0, _bindingJs.Binding)) currentValue = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)(currentValue);
            else if (!(definition = (0, _htmlDirectiveJs.HTMLDirective).getForInstance(currentValue))) {
                const staticValue = currentValue;
                currentValue = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)((0, _oneTimeJs.oneTime)(()=>staticValue));
            }
            html += createHTML(currentValue, currentString, add, definition);
        }
        return new ViewTemplate(html + strings[strings.length - 1], factories, policy);
    }
}
(0, _platformJs.makeSerializationNoop)(ViewTemplate);
const html = (strings, ...values)=>{
    if (Array.isArray(strings) && Array.isArray(strings.raw)) return ViewTemplate.create(strings, values);
    throw (0, _platformJs.FAST).error(1206 /* Message.directCallToHTMLTagNotAllowed */ );
};
html.partial = (html)=>{
    return new InlineTemplateDirective(html);
};

},{"../interfaces.js":"jk6ut","../binding/binding.js":"aYiX0","../platform.js":"54qbx","../binding/one-way.js":"hUtUy","../binding/one-time.js":"2vKEx","./html-binding-directive.js":"8CCiP","./compiler.js":"c8RMN","./html-directive.js":"gFfpP","./markup.js":"Ash6w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CCiP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A directive that applies bindings.
 * @public
 */ parcelHelpers.export(exports, "HTMLBindingDirective", ()=>HTMLBindingDirective);
var _hydrationJs = require("../components/hydration.js");
var _domJs = require("../dom.js");
var _interfacesJs = require("../interfaces.js");
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _markupJs = require("./markup.js");
var _viewJs = require("./view.js");
function isContentTemplate(value) {
    return value.create !== undefined;
}
function updateContent(target, aspect, value, controller) {
    // If there's no actual value, then this equates to the
    // empty string for the purposes of content bindings.
    if (value === null || value === undefined) value = "";
    // If the value has a "create" method, then it's a ContentTemplate.
    if (isContentTemplate(value)) {
        target.textContent = "";
        let view = target.$fastView;
        // If there's no previous view that we might be able to
        // reuse then create a new view from the template.
        if (view === void 0) {
            if ((0, _hydrationJs.isHydratable)(controller) && (0, _hydrationJs.isHydratable)(value) && controller.bindingViewBoundaries[this.targetNodeId] !== undefined && controller.hydrationStage !== (0, _viewJs.HydrationStage).hydrated) {
                const viewNodes = controller.bindingViewBoundaries[this.targetNodeId];
                view = value.hydrate(viewNodes.first, viewNodes.last);
            } else view = value.create();
        } else // If there is a previous view, but it wasn't created
        // from the same template as the new value, then we
        // need to remove the old view if it's still in the DOM
        // and create a new view from the template.
        if (target.$fastTemplate !== value) {
            if (view.isComposed) {
                view.remove();
                view.unbind();
            }
            view = value.create();
        }
        // It's possible that the value is the same as the previous template
        // and that there's actually no need to compose it.
        if (!view.isComposed) {
            view.isComposed = true;
            view.bind(controller.source, controller.context);
            view.insertBefore(target);
            target.$fastView = view;
            target.$fastTemplate = value;
        } else if (view.needsBindOnly) {
            view.needsBindOnly = false;
            view.bind(controller.source, controller.context);
        }
    } else {
        const view = target.$fastView;
        // If there is a view and it's currently composed into
        // the DOM, then we need to remove it.
        if (view !== void 0 && view.isComposed) {
            view.isComposed = false;
            view.remove();
            if (view.needsBindOnly) view.needsBindOnly = false;
            else view.unbind();
        }
        target.textContent = value;
    }
}
function updateTokenList(target, aspect, value) {
    var _a;
    const lookup = `${this.id}-t`;
    const state = (_a = target[lookup]) !== null && _a !== void 0 ? _a : target[lookup] = {
        v: 0,
        cv: Object.create(null)
    };
    const classVersions = state.cv;
    let version = state.v;
    const tokenList = target[aspect];
    // Add the classes, tracking the version at which they were added.
    if (value !== null && value !== undefined && value.length) {
        const names = value.split(/\s+/);
        for(let i = 0, ii = names.length; i < ii; ++i){
            const currentName = names[i];
            if (currentName === "") continue;
            classVersions[currentName] = version;
            tokenList.add(currentName);
        }
    }
    state.v = version + 1;
    // If this is the first call to add classes, there's no need to remove old ones.
    if (version === 0) return;
    // Remove classes from the previous version.
    version -= 1;
    for(const name in classVersions)if (classVersions[name] === version) tokenList.remove(name);
}
const sinkLookup = {
    [(0, _domJs.DOMAspect).attribute]: (0, _domJs.DOM).setAttribute,
    [(0, _domJs.DOMAspect).booleanAttribute]: (0, _domJs.DOM).setBooleanAttribute,
    [(0, _domJs.DOMAspect).property]: (t, a, v)=>t[a] = v,
    [(0, _domJs.DOMAspect).content]: updateContent,
    [(0, _domJs.DOMAspect).tokenList]: updateTokenList,
    [(0, _domJs.DOMAspect).event]: ()=>void 0
};
class HTMLBindingDirective {
    /**
     * Creates an instance of HTMLBindingDirective.
     * @param dataBinding - The binding configuration to apply.
     */ constructor(dataBinding){
        this.dataBinding = dataBinding;
        this.updateTarget = null;
        /**
         * The type of aspect to target.
         */ this.aspectType = (0, _domJs.DOMAspect).content;
    }
    /**
     * Creates HTML to be used within a template.
     * @param add - Can be used to add  behavior factories to a template.
     */ createHTML(add) {
        return (0, _markupJs.Markup).interpolation(add(this));
    }
    /**
     * Creates a behavior.
     */ createBehavior() {
        var _a;
        if (this.updateTarget === null) {
            const sink = sinkLookup[this.aspectType];
            const policy = (_a = this.dataBinding.policy) !== null && _a !== void 0 ? _a : this.policy;
            if (!sink) throw (0, _platformJs.FAST).error(1205 /* Message.unsupportedBindingBehavior */ );
            this.data = `${this.id}-d`;
            this.updateTarget = policy.protect(this.targetTagName, this.aspectType, this.targetAspect, sink);
        }
        return this;
    }
    /** @internal */ bind(controller) {
        var _a;
        const target = controller.targets[this.targetNodeId];
        const isHydrating = (0, _hydrationJs.isHydratable)(controller) && controller.hydrationStage && controller.hydrationStage !== (0, _viewJs.HydrationStage).hydrated;
        switch(this.aspectType){
            case (0, _domJs.DOMAspect).event:
                target[this.data] = controller;
                target.addEventListener(this.targetAspect, this, this.dataBinding.options);
                break;
            case (0, _domJs.DOMAspect).content:
                controller.onUnbind(this);
            // intentional fall through
            default:
                const observer = (_a = target[this.data]) !== null && _a !== void 0 ? _a : target[this.data] = this.dataBinding.createObserver(this, this);
                observer.target = target;
                observer.controller = controller;
                if (isHydrating && (this.aspectType === (0, _domJs.DOMAspect).attribute || this.aspectType === (0, _domJs.DOMAspect).booleanAttribute)) {
                    observer.bind(controller);
                    break;
                }
                this.updateTarget(target, this.targetAspect, observer.bind(controller), controller);
                break;
        }
    }
    /** @internal */ unbind(controller) {
        const target = controller.targets[this.targetNodeId];
        const view = target.$fastView;
        if (view !== void 0 && view.isComposed) {
            view.unbind();
            view.needsBindOnly = true;
        }
    }
    /** @internal */ handleEvent(event) {
        const controller = event.currentTarget[this.data];
        if (controller.isBound) {
            (0, _observableJs.ExecutionContext).setEvent(event);
            const result = this.dataBinding.evaluate(controller.source, controller.context);
            (0, _observableJs.ExecutionContext).setEvent(null);
            if (result !== true) event.preventDefault();
        }
    }
    /** @internal */ handleChange(binding, observer) {
        const target = observer.target;
        const controller = observer.controller;
        this.updateTarget(target, this.targetAspect, observer.bind(controller), controller);
    }
}
(0, _htmlDirectiveJs.HTMLDirective).define(HTMLBindingDirective, {
    aspected: true
});

},{"../components/hydration.js":"aY5lR","../dom.js":"hHZU0","../interfaces.js":"jk6ut","../observation/observable.js":"5BRHB","../platform.js":"54qbx","./html-directive.js":"gFfpP","./markup.js":"Ash6w","./view.js":"3HWXi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aY5lR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HydrationMarkup", ()=>HydrationMarkup);
parcelHelpers.export(exports, "Hydratable", ()=>Hydratable);
parcelHelpers.export(exports, "isHydratable", ()=>isHydratable);
const bindingStartMarker = /fe-b\$\$start\$\$(\d+)\$\$(.+)\$\$fe-b/;
const bindingEndMarker = /fe-b\$\$end\$\$(\d+)\$\$(.+)\$\$fe-b/;
const repeatViewStartMarker = /fe-repeat\$\$start\$\$(\d+)\$\$fe-repeat/;
const repeatViewEndMarker = /fe-repeat\$\$end\$\$(\d+)\$\$fe-repeat/;
const elementBoundaryStartMarker = /^(?:.{0,1000})fe-eb\$\$start\$\$(.+?)\$\$fe-eb/;
const elementBoundaryEndMarker = /fe-eb\$\$end\$\$(.{0,1000})\$\$fe-eb(?:.{0,1000})$/;
function isComment(node) {
    return node && node.nodeType === Node.COMMENT_NODE;
}
const HydrationMarkup = Object.freeze({
    attributeMarkerName: "data-fe-b",
    attributeBindingSeparator: " ",
    contentBindingStartMarker (index, uniqueId) {
        return `fe-b$$start$$${index}$$${uniqueId}$$fe-b`;
    },
    contentBindingEndMarker (index, uniqueId) {
        return `fe-b$$end$$${index}$$${uniqueId}$$fe-b`;
    },
    repeatStartMarker (index) {
        return `fe-repeat$$start$$${index}$$fe-repeat`;
    },
    repeatEndMarker (index) {
        return `fe-repeat$$end$$${index}$$fe-repeat`;
    },
    isContentBindingStartMarker (content) {
        return bindingStartMarker.test(content);
    },
    isContentBindingEndMarker (content) {
        return bindingEndMarker.test(content);
    },
    isRepeatViewStartMarker (content) {
        return repeatViewStartMarker.test(content);
    },
    isRepeatViewEndMarker (content) {
        return repeatViewEndMarker.test(content);
    },
    isElementBoundaryStartMarker (node) {
        return isComment(node) && elementBoundaryStartMarker.test(node.data.trim());
    },
    isElementBoundaryEndMarker (node) {
        return isComment(node) && elementBoundaryEndMarker.test(node.data);
    },
    /**
     * Returns the indexes of the ViewBehaviorFactories affecting
     * attributes for the element, or null if no factories were found.
     */ parseAttributeBinding (node) {
        const attr = node.getAttribute(this.attributeMarkerName);
        return attr === null ? attr : attr.split(this.attributeBindingSeparator).map((i)=>parseInt(i));
    },
    /**
     * Parses the ViewBehaviorFactory index from string data. Returns
     * the binding index or null if the index cannot be retrieved.
     */ parseContentBindingStartMarker (content) {
        return parseIndexAndIdMarker(bindingStartMarker, content);
    },
    parseContentBindingEndMarker (content) {
        return parseIndexAndIdMarker(bindingEndMarker, content);
    },
    /**
     * Parses the index of a repeat directive from a content string.
     */ parseRepeatStartMarker (content) {
        return parseIntMarker(repeatViewStartMarker, content);
    },
    parseRepeatEndMarker (content) {
        return parseIntMarker(repeatViewEndMarker, content);
    },
    /**
     * Parses element Id from element boundary markers
     */ parseElementBoundaryStartMarker (content) {
        return parseStringMarker(elementBoundaryStartMarker, content.trim());
    },
    parseElementBoundaryEndMarker (content) {
        return parseStringMarker(elementBoundaryEndMarker, content);
    }
});
function parseIntMarker(regex, content) {
    const match = regex.exec(content);
    return match === null ? match : parseInt(match[1]);
}
function parseStringMarker(regex, content) {
    const match = regex.exec(content);
    return match === null ? match : match[1];
}
function parseIndexAndIdMarker(regex, content) {
    const match = regex.exec(content);
    return match === null ? match : [
        parseInt(match[1]),
        match[2]
    ];
}
const Hydratable = Symbol.for("fe-hydration");
function isHydratable(value) {
    return value[Hydratable] === Hydratable;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gFfpP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLDirective", ()=>HTMLDirective);
/**
 * Decorator: Defines an HTMLDirective.
 * @param options - Provides options that specify the directive's application.
 * @public
 */ parcelHelpers.export(exports, "htmlDirective", ()=>htmlDirective);
/**
 * A base class used for attribute directives that don't need internal state.
 * @public
 */ parcelHelpers.export(exports, "StatelessAttachedAttributeDirective", ()=>StatelessAttachedAttributeDirective);
var _domJs = require("../dom.js");
var _platformJs = require("../platform.js");
var _markupJs = require("./markup.js");
const registry = (0, _platformJs.createTypeRegistry)();
const HTMLDirective = Object.freeze({
    /**
     * Gets the directive definition associated with the instance.
     * @param instance - The directive instance to retrieve the definition for.
     */ getForInstance: registry.getForInstance,
    /**
     * Gets the directive definition associated with the specified type.
     * @param type - The directive type to retrieve the definition for.
     */ getByType: registry.getByType,
    /**
     * Defines an HTMLDirective based on the options.
     * @param type - The type to define as a directive.
     * @param options - Options that specify the directive's application.
     */ define (type, options) {
        options = options || {};
        options.type = type;
        registry.register(options);
        return type;
    },
    /**
     *
     * @param directive - The directive to assign the aspect to.
     * @param value - The value to base the aspect determination on.
     * @remarks
     * If a falsy value is provided, then the content aspect will be assigned.
     */ assignAspect (directive, value) {
        if (!value) {
            directive.aspectType = (0, _domJs.DOMAspect).content;
            return;
        }
        directive.sourceAspect = value;
        switch(value[0]){
            case ":":
                directive.targetAspect = value.substring(1);
                directive.aspectType = directive.targetAspect === "classList" ? (0, _domJs.DOMAspect).tokenList : (0, _domJs.DOMAspect).property;
                break;
            case "?":
                directive.targetAspect = value.substring(1);
                directive.aspectType = (0, _domJs.DOMAspect).booleanAttribute;
                break;
            case "@":
                directive.targetAspect = value.substring(1);
                directive.aspectType = (0, _domJs.DOMAspect).event;
                break;
            default:
                directive.targetAspect = value;
                directive.aspectType = (0, _domJs.DOMAspect).attribute;
                break;
        }
    }
});
function htmlDirective(options) {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ return function(type) {
        HTMLDirective.define(type, options);
    };
}
class StatelessAttachedAttributeDirective {
    /**
     * Creates an instance of RefDirective.
     * @param options - The options to use in configuring the directive.
     */ constructor(options){
        this.options = options;
    }
    /**
     * Creates a placeholder string based on the directive's index within the template.
     * @param index - The index of the directive within the template.
     * @remarks
     * Creates a custom attribute placeholder.
     */ createHTML(add) {
        return (0, _markupJs.Markup).attribute(add(this));
    }
    /**
     * Creates a behavior.
     * @param targets - The targets available for behaviors to be attached to.
     */ createBehavior() {
        return this;
    }
}
(0, _platformJs.makeSerializationNoop)(StatelessAttachedAttributeDirective);

},{"../dom.js":"hHZU0","../platform.js":"54qbx","./markup.js":"Ash6w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Ash6w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextId", ()=>nextId);
parcelHelpers.export(exports, "Markup", ()=>Markup);
parcelHelpers.export(exports, "Parser", ()=>Parser);
const marker = `fast-${Math.random().toString(36).substring(2, 8)}`;
const interpolationStart = `${marker}{`;
const interpolationEnd = `}${marker}`;
const interpolationEndLength = interpolationEnd.length;
let id = 0;
const nextId = ()=>`${marker}-${++id}`;
const Markup = Object.freeze({
    /**
     * Creates a placeholder string suitable for marking out a location *within*
     * an attribute value or HTML content.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by binding directives.
     */ interpolation: (id)=>`${interpolationStart}${id}${interpolationEnd}`,
    /**
     * Creates a placeholder that manifests itself as an attribute on an
     * element.
     * @param attributeName - The name of the custom attribute.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by attribute directives such as `ref`, `slotted`, and `children`.
     */ attribute: (id)=>`${nextId()}="${interpolationStart}${id}${interpolationEnd}"`,
    /**
     * Creates a placeholder that manifests itself as a marker within the DOM structure.
     * @param index - The directive index to create the placeholder for.
     * @remarks
     * Used internally by structural directives such as `repeat`.
     */ comment: (id)=>`<!--${interpolationStart}${id}${interpolationEnd}-->`
});
const Parser = Object.freeze({
    /**
     * Parses text content or HTML attribute content, separating out the static strings
     * from the directives.
     * @param value - The content or attribute string to parse.
     * @param factories - A list of directives to search for in the string.
     * @returns A heterogeneous array of static strings interspersed with
     * directives or null if no directives are found in the string.
     */ parse (value, factories) {
        const parts = value.split(interpolationStart);
        if (parts.length === 1) return null;
        const result = [];
        for(let i = 0, ii = parts.length; i < ii; ++i){
            const current = parts[i];
            const index = current.indexOf(interpolationEnd);
            let literal;
            if (index === -1) literal = current;
            else {
                const factoryId = current.substring(0, index);
                result.push(factories[factoryId]);
                literal = current.substring(index + interpolationEndLength);
            }
            if (literal !== "") result.push(literal);
        }
        return result;
    }
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3HWXi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The standard View implementation, which also implements ElementView and SyntheticView.
 * @public
 */ parcelHelpers.export(exports, "HTMLView", ()=>HTMLView);
parcelHelpers.export(exports, "HydrationStage", ()=>HydrationStage);
/** @public */ parcelHelpers.export(exports, "HydrationBindingError", ()=>HydrationBindingError);
parcelHelpers.export(exports, "HydrationView", ()=>HydrationView);
var _hydrationJs = require("../components/hydration.js");
var _targetBuilderJs = require("../hydration/target-builder.js");
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _a;
function removeNodeSequence(firstNode, lastNode) {
    const parent = firstNode.parentNode;
    let current = firstNode;
    let next;
    while(current !== lastNode){
        next = current.nextSibling;
        if (!next) throw new Error(`Unmatched first/last child inside "${lastNode.getRootNode().host.nodeName}".`);
        parent.removeChild(current);
        current = next;
    }
    parent.removeChild(lastNode);
}
class DefaultExecutionContext {
    constructor(){
        /**
         * The index of the current item within a repeat context.
         */ this.index = 0;
        /**
         * The length of the current collection within a repeat context.
         */ this.length = 0;
    }
    /**
     * The current event within an event handler.
     */ get event() {
        return (0, _observableJs.ExecutionContext).getEvent();
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an even index.
     */ get isEven() {
        return this.index % 2 === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * has an odd index.
     */ get isOdd() {
        return this.index % 2 !== 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the first item in the collection.
     */ get isFirst() {
        return this.index === 0;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is somewhere in the middle of the collection.
     */ get isInMiddle() {
        return !this.isFirst && !this.isLast;
    }
    /**
     * Indicates whether the current item within a repeat context
     * is the last item in the collection.
     */ get isLast() {
        return this.index === this.length - 1;
    }
    /**
     * Returns the typed event detail of a custom event.
     */ eventDetail() {
        return this.event.detail;
    }
    /**
     * Returns the typed event target of the event.
     */ eventTarget() {
        return this.event.target;
    }
}
class HTMLView extends DefaultExecutionContext {
    /**
     * Constructs an instance of HTMLView.
     * @param fragment - The html fragment that contains the nodes for this view.
     * @param behaviors - The behaviors to be applied to this view.
     */ constructor(fragment, factories, targets){
        super();
        this.fragment = fragment;
        this.factories = factories;
        this.targets = targets;
        this.behaviors = null;
        this.unbindables = [];
        /**
         * The data that the view is bound to.
         */ this.source = null;
        /**
         * Indicates whether the controller is bound.
         */ this.isBound = false;
        /**
         * Indicates how the source's lifetime relates to the controller's lifetime.
         */ this.sourceLifetime = (0, _observableJs.SourceLifetime).unknown;
        /**
         * The execution context the view is running within.
         */ this.context = this;
        this.firstChild = fragment.firstChild;
        this.lastChild = fragment.lastChild;
    }
    /**
     * Appends the view's DOM nodes to the referenced node.
     * @param node - The parent node to append the view's DOM nodes to.
     */ appendTo(node) {
        node.appendChild(this.fragment);
    }
    /**
     * Inserts the view's DOM nodes before the referenced node.
     * @param node - The node to insert the view's DOM before.
     */ insertBefore(node) {
        if (this.fragment.hasChildNodes()) node.parentNode.insertBefore(this.fragment, node);
        else {
            const end = this.lastChild;
            if (node.previousSibling === end) return;
            const parentNode = node.parentNode;
            let current = this.firstChild;
            let next;
            while(current !== end){
                next = current.nextSibling;
                parentNode.insertBefore(current, node);
                current = next;
            }
            parentNode.insertBefore(end, node);
        }
    }
    /**
     * Removes the view's DOM nodes.
     * The nodes are not disposed and the view can later be re-inserted.
     */ remove() {
        const fragment = this.fragment;
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while(current !== end){
            next = current.nextSibling;
            fragment.appendChild(current);
            current = next;
        }
        fragment.appendChild(end);
    }
    /**
     * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
     * Once a view has been disposed, it cannot be inserted or bound again.
     */ dispose() {
        removeNodeSequence(this.firstChild, this.lastChild);
        this.unbind();
    }
    onUnbind(behavior) {
        this.unbindables.push(behavior);
    }
    /**
     * Binds a view's behaviors to its binding source.
     * @param source - The binding source for the view's binding behaviors.
     * @param context - The execution context to run the behaviors within.
     */ bind(source, context = this) {
        if (this.source === source) return;
        let behaviors = this.behaviors;
        if (behaviors === null) {
            this.source = source;
            this.context = context;
            this.behaviors = behaviors = new Array(this.factories.length);
            const factories = this.factories;
            for(let i = 0, ii = factories.length; i < ii; ++i){
                const behavior = factories[i].createBehavior();
                behavior.bind(this);
                behaviors[i] = behavior;
            }
        } else {
            if (this.source !== null) this.evaluateUnbindables();
            this.isBound = false;
            this.source = source;
            this.context = context;
            for(let i = 0, ii = behaviors.length; i < ii; ++i)behaviors[i].bind(this);
        }
        this.isBound = true;
    }
    /**
     * Unbinds a view's behaviors from its binding source.
     */ unbind() {
        if (!this.isBound || this.source === null) return;
        this.evaluateUnbindables();
        this.source = null;
        this.context = this;
        this.isBound = false;
    }
    evaluateUnbindables() {
        const unbindables = this.unbindables;
        for(let i = 0, ii = unbindables.length; i < ii; ++i)unbindables[i].unbind(this);
        unbindables.length = 0;
    }
    /**
     * Efficiently disposes of a contiguous range of synthetic view instances.
     * @param views - A contiguous range of views to be disposed.
     */ static disposeContiguousBatch(views) {
        if (views.length === 0) return;
        removeNodeSequence(views[0].firstChild, views[views.length - 1].lastChild);
        for(let i = 0, ii = views.length; i < ii; ++i)views[i].unbind();
    }
}
(0, _platformJs.makeSerializationNoop)(HTMLView);
(0, _observableJs.Observable).defineProperty(HTMLView.prototype, "index");
(0, _observableJs.Observable).defineProperty(HTMLView.prototype, "length");
const HydrationStage = {
    unhydrated: "unhydrated",
    hydrating: "hydrating",
    hydrated: "hydrated"
};
class HydrationBindingError extends Error {
    constructor(/**
     * The error message
     */ message, /**
     * The factory that was unable to be bound
     */ factory, /**
     * A DocumentFragment containing a clone of the
     * view's Nodes.
     */ fragment, /**
     * String representation of the HTML in the template that
     * threw the binding error.
     */ templateString){
        super(message);
        this.factory = factory;
        this.fragment = fragment;
        this.templateString = templateString;
    }
}
class HydrationView extends DefaultExecutionContext {
    constructor(firstChild, lastChild, sourceTemplate, hostBindingTarget){
        super();
        this.firstChild = firstChild;
        this.lastChild = lastChild;
        this.sourceTemplate = sourceTemplate;
        this.hostBindingTarget = hostBindingTarget;
        this[_a] = (0, _hydrationJs.Hydratable);
        this.context = this;
        this.source = null;
        this.isBound = false;
        this.sourceLifetime = (0, _observableJs.SourceLifetime).unknown;
        this.unbindables = [];
        this.fragment = null;
        this.behaviors = null;
        this._hydrationStage = HydrationStage.unhydrated;
        this._bindingViewBoundaries = {};
        this._targets = {};
        this.factories = sourceTemplate.compile().factories;
    }
    get hydrationStage() {
        return this._hydrationStage;
    }
    get targets() {
        return this._targets;
    }
    get bindingViewBoundaries() {
        return this._bindingViewBoundaries;
    }
    /**
     * no-op. Hydrated views are don't need to be moved from a documentFragment
     * to the target node.
     */ insertBefore(node) {
        // No-op in cases where this is called before the view is removed,
        // because the nodes will already be in the document and just need hydrating.
        if (this.fragment === null) return;
        if (this.fragment.hasChildNodes()) node.parentNode.insertBefore(this.fragment, node);
        else {
            const end = this.lastChild;
            if (node.previousSibling === end) return;
            const parentNode = node.parentNode;
            let current = this.firstChild;
            let next;
            while(current !== end){
                next = current.nextSibling;
                parentNode.insertBefore(current, node);
                current = next;
            }
            parentNode.insertBefore(end, node);
        }
    }
    /**
     * Appends the view to a node. In cases where this is called before the
     * view has been removed, the method will no-op.
     * @param node - the node to append the view to.
     */ appendTo(node) {
        if (this.fragment !== null) node.appendChild(this.fragment);
    }
    remove() {
        const fragment = this.fragment || (this.fragment = document.createDocumentFragment());
        const end = this.lastChild;
        let current = this.firstChild;
        let next;
        while(current !== end){
            next = current.nextSibling;
            if (!next) throw new Error(`Unmatched first/last child inside "${end.getRootNode().host.nodeName}".`);
            fragment.appendChild(current);
            current = next;
        }
        fragment.appendChild(end);
    }
    bind(source, context = this) {
        var _b, _c;
        if (this.hydrationStage !== HydrationStage.hydrated) this._hydrationStage = HydrationStage.hydrating;
        if (this.source === source) return;
        let behaviors = this.behaviors;
        if (behaviors === null) {
            this.source = source;
            this.context = context;
            try {
                const { targets, boundaries } = (0, _targetBuilderJs.buildViewBindingTargets)(this.firstChild, this.lastChild, this.factories);
                this._targets = targets;
                this._bindingViewBoundaries = boundaries;
            } catch (error) {
                if (error instanceof (0, _targetBuilderJs.HydrationTargetElementError)) {
                    let templateString = this.sourceTemplate.html;
                    if (typeof templateString !== "string") templateString = templateString.innerHTML;
                    error.templateString = templateString;
                }
                throw error;
            }
            this.behaviors = behaviors = new Array(this.factories.length);
            const factories = this.factories;
            for(let i = 0, ii = factories.length; i < ii; ++i){
                const factory = factories[i];
                if (factory.targetNodeId === "h" && this.hostBindingTarget) (0, _targetBuilderJs.targetFactory)(factory, this.hostBindingTarget, this._targets);
                // If the binding has been targeted or it is a host binding and the view has a hostBindingTarget
                if (factory.targetNodeId in this.targets) {
                    const behavior = factory.createBehavior();
                    behavior.bind(this);
                    behaviors[i] = behavior;
                } else {
                    let templateString = this.sourceTemplate.html;
                    if (typeof templateString !== "string") templateString = templateString.innerHTML;
                    throw new HydrationBindingError(`HydrationView was unable to successfully target bindings inside "${(_c = ((_b = this.firstChild) === null || _b === void 0 ? void 0 : _b.getRootNode()).host) === null || _c === void 0 ? void 0 : _c.nodeName}".`, factory, (0, _targetBuilderJs.createRangeForNodes)(this.firstChild, this.lastChild).cloneContents(), templateString);
                }
            }
        } else {
            if (this.source !== null) this.evaluateUnbindables();
            this.isBound = false;
            this.source = source;
            this.context = context;
            for(let i = 0, ii = behaviors.length; i < ii; ++i)behaviors[i].bind(this);
        }
        this.isBound = true;
        this._hydrationStage = HydrationStage.hydrated;
    }
    unbind() {
        if (!this.isBound || this.source === null) return;
        this.evaluateUnbindables();
        this.source = null;
        this.context = this;
        this.isBound = false;
    }
    /**
     * Removes the view and unbinds its behaviors, disposing of DOM nodes afterward.
     * Once a view has been disposed, it cannot be inserted or bound again.
     */ dispose() {
        removeNodeSequence(this.firstChild, this.lastChild);
        this.unbind();
    }
    onUnbind(behavior) {
        this.unbindables.push(behavior);
    }
    evaluateUnbindables() {
        const unbindables = this.unbindables;
        for(let i = 0, ii = unbindables.length; i < ii; ++i)unbindables[i].unbind(this);
        unbindables.length = 0;
    }
}
_a = (0, _hydrationJs.Hydratable);
(0, _platformJs.makeSerializationNoop)(HydrationView);

},{"../components/hydration.js":"aY5lR","../hydration/target-builder.js":"8BgLd","../observation/observable.js":"5BRHB","../platform.js":"54qbx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8BgLd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HydrationTargetElementError", ()=>HydrationTargetElementError);
/**
 * Returns a range object inclusive of all nodes including and between the
 * provided first and last node.
 * @param first - The first node
 * @param last - This last node
 * @returns
 */ parcelHelpers.export(exports, "createRangeForNodes", ()=>createRangeForNodes);
/**
 * Maps {@link CompiledViewBehaviorFactory} ids to the corresponding node targets for the view.
 * @param firstNode - The first node of the view.
 * @param lastNode -  The last node of the view.
 * @param factories - The Compiled View Behavior Factories that belong to the view.
 * @returns - A {@link ViewBehaviorTargets } object for the factories in the view.
 */ parcelHelpers.export(exports, "buildViewBindingTargets", ()=>buildViewBindingTargets);
parcelHelpers.export(exports, "targetFactory", ()=>targetFactory);
var _hydrationJs = require("../components/hydration.js");
class HydrationTargetElementError extends Error {
    constructor(/**
     * The error message
     */ message, /**
     * The Compiled View Behavior Factories that belong to the view.
     */ factories, /**
     * The node to target factory.
     */ node){
        super(message);
        this.factories = factories;
        this.node = node;
    }
}
function isComment(node) {
    return node.nodeType === Node.COMMENT_NODE;
}
function isText(node) {
    return node.nodeType === Node.TEXT_NODE;
}
function createRangeForNodes(first, last) {
    const range = document.createRange();
    range.setStart(first, 0);
    // The lastIndex should be inclusive of the end of the lastChild. Obtain offset based
    // on usageNotes:  https://developer.mozilla.org/en-US/docs/Web/API/Range/setEnd#usage_notes
    range.setEnd(last, isComment(last) || isText(last) ? last.data.length : last.childNodes.length);
    return range;
}
function isShadowRoot(node) {
    return node instanceof DocumentFragment && "mode" in node;
}
function buildViewBindingTargets(firstNode, lastNode, factories) {
    const range = createRangeForNodes(firstNode, lastNode);
    const treeRoot = range.commonAncestorContainer;
    const walker = document.createTreeWalker(treeRoot, NodeFilter.SHOW_ELEMENT + NodeFilter.SHOW_COMMENT + NodeFilter.SHOW_TEXT, {
        acceptNode (node) {
            return range.comparePoint(node, 0) === 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
    });
    const targets = {};
    const boundaries = {};
    let node = walker.currentNode = firstNode;
    while(node !== null){
        switch(node.nodeType){
            case Node.ELEMENT_NODE:
                targetElement(node, factories, targets);
                break;
            case Node.COMMENT_NODE:
                targetComment(node, walker, factories, targets, boundaries);
                break;
        }
        node = walker.nextNode();
    }
    range.detach();
    return {
        targets,
        boundaries
    };
}
function targetElement(node, factories, targets) {
    // Check for attributes and map any factories.
    const attrFactoryIds = (0, _hydrationJs.HydrationMarkup).parseAttributeBinding(node);
    if (attrFactoryIds !== null) {
        for (const id of attrFactoryIds){
            if (!factories[id]) throw new HydrationTargetElementError(`HydrationView was unable to successfully target factory on ${node.nodeName} inside ${node.getRootNode().host.nodeName}. This likely indicates a template mismatch between SSR rendering and hydration.`, factories, node);
            targetFactory(factories[id], node, targets);
        }
        node.removeAttribute((0, _hydrationJs.HydrationMarkup).attributeMarkerName);
    }
}
function targetComment(node, walker, factories, targets, boundaries) {
    if ((0, _hydrationJs.HydrationMarkup).isElementBoundaryStartMarker(node)) {
        skipToElementBoundaryEndMarker(node, walker);
        return;
    }
    if ((0, _hydrationJs.HydrationMarkup).isContentBindingStartMarker(node.data)) {
        const parsed = (0, _hydrationJs.HydrationMarkup).parseContentBindingStartMarker(node.data);
        if (parsed === null) return;
        const [index, id] = parsed;
        const factory = factories[index];
        const nodes = [];
        let current = walker.nextSibling();
        node.data = "";
        const first = current;
        // Search for the binding end marker that closes the binding.
        while(current !== null){
            if (isComment(current)) {
                const parsed = (0, _hydrationJs.HydrationMarkup).parseContentBindingEndMarker(current.data);
                if (parsed && parsed[1] === id) break;
            }
            nodes.push(current);
            current = walker.nextSibling();
        }
        if (current === null) {
            const root = node.getRootNode();
            throw new Error(`Error hydrating Comment node inside "${isShadowRoot(root) ? root.host.nodeName : root.nodeName}".`);
        }
        current.data = "";
        if (nodes.length === 1 && isText(nodes[0])) targetFactory(factory, nodes[0], targets);
        else {
            // If current === first, it means there is no content in
            // the view. This happens when a `when` directive evaluates false,
            // or whenever a content binding returns null or undefined.
            // In that case, there will never be any content
            // to hydrate and Binding can simply create a HTMLView
            // whenever it needs to.
            if (current !== first && current.previousSibling !== null) boundaries[factory.targetNodeId] = {
                first,
                last: current.previousSibling
            };
            // Binding evaluates to null / undefined or a template.
            // If binding revaluates to string, it will replace content in target
            // So we always insert a text node to ensure that
            // text content binding will be written to this text node instead of comment
            const dummyTextNode = current.parentNode.insertBefore(document.createTextNode(""), current);
            targetFactory(factory, dummyTextNode, targets);
        }
    }
}
/**
 * Moves TreeWalker to element boundary end marker
 * @param node - element boundary start marker node
 * @param walker - tree walker
 */ function skipToElementBoundaryEndMarker(node, walker) {
    const id = (0, _hydrationJs.HydrationMarkup).parseElementBoundaryStartMarker(node.data);
    let current = walker.nextSibling();
    while(current !== null){
        if (isComment(current)) {
            const parsed = (0, _hydrationJs.HydrationMarkup).parseElementBoundaryEndMarker(current.data);
            if (parsed && parsed === id) break;
        }
        current = walker.nextSibling();
    }
}
function targetFactory(factory, node, targets) {
    if (factory.targetNodeId === undefined) // Dev error, this shouldn't ever be thrown
    throw new Error("Factory could not be target to the node");
    targets[factory.targetNodeId] = node;
}

},{"../components/hydration.js":"aY5lR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c8RMN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Compiler", ()=>Compiler);
var _interfacesJs = require("../interfaces.js");
var _platformJs = require("../platform.js");
var _domJs = require("../dom.js");
var _oneTimeJs = require("../binding/one-time.js");
var _oneWayJs = require("../binding/one-way.js");
var _markupJs = require("./markup.js");
var _htmlBindingDirectiveJs = require("./html-binding-directive.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _viewJs = require("./view.js");
const targetIdFrom = (parentId, nodeIndex)=>`${parentId}.${nodeIndex}`;
const descriptorCache = {};
// used to prevent creating lots of objects just to track node and index while compiling
const next = {
    index: 0,
    node: null
};
function tryWarn(name) {
    if (!name.startsWith("fast-")) (0, _platformJs.FAST).warn(1204 /* Message.hostBindingWithoutHost */ , {
        name
    });
}
const warningHost = new Proxy(document.createElement("div"), {
    get (target, property) {
        tryWarn(property);
        const value = Reflect.get(target, property);
        return (0, _interfacesJs.isFunction)(value) ? value.bind(target) : value;
    },
    set (target, property, value) {
        tryWarn(property);
        return Reflect.set(target, property, value);
    }
});
class CompilationContext {
    constructor(fragment, directives, policy){
        this.fragment = fragment;
        this.directives = directives;
        this.policy = policy;
        this.proto = null;
        this.nodeIds = new Set();
        this.descriptors = {};
        this.factories = [];
    }
    addFactory(factory, parentId, nodeId, targetIndex, tagName) {
        var _a, _b;
        if (!this.nodeIds.has(nodeId)) {
            this.nodeIds.add(nodeId);
            this.addTargetDescriptor(parentId, nodeId, targetIndex);
        }
        factory.id = (_a = factory.id) !== null && _a !== void 0 ? _a : (0, _markupJs.nextId)();
        factory.targetNodeId = nodeId;
        factory.targetTagName = tagName;
        factory.policy = (_b = factory.policy) !== null && _b !== void 0 ? _b : this.policy;
        this.factories.push(factory);
    }
    freeze() {
        this.proto = Object.create(null, this.descriptors);
        return this;
    }
    addTargetDescriptor(parentId, targetId, targetIndex) {
        const descriptors = this.descriptors;
        if (targetId === "r" || // root
        targetId === "h" || // host
        descriptors[targetId]) return;
        if (!descriptors[parentId]) {
            const index = parentId.lastIndexOf(".");
            const grandparentId = parentId.substring(0, index);
            const childIndex = parseInt(parentId.substring(index + 1));
            this.addTargetDescriptor(grandparentId, parentId, childIndex);
        }
        let descriptor = descriptorCache[targetId];
        if (!descriptor) {
            const field = `_${targetId}`;
            descriptorCache[targetId] = descriptor = {
                get () {
                    var _a;
                    return (_a = this[field]) !== null && _a !== void 0 ? _a : this[field] = this[parentId].childNodes[targetIndex];
                }
            };
        }
        descriptors[targetId] = descriptor;
    }
    createView(hostBindingTarget) {
        const fragment = this.fragment.cloneNode(true);
        const targets = Object.create(this.proto);
        targets.r = fragment;
        targets.h = hostBindingTarget !== null && hostBindingTarget !== void 0 ? hostBindingTarget : warningHost;
        for (const id of this.nodeIds)targets[id]; // trigger locator
        return new (0, _viewJs.HTMLView)(fragment, this.factories, targets);
    }
}
function compileAttributes(context, parentId, node, nodeId, nodeIndex, includeBasicValues = false) {
    const attributes = node.attributes;
    const directives = context.directives;
    for(let i = 0, ii = attributes.length; i < ii; ++i){
        const attr = attributes[i];
        const attrValue = attr.value;
        const parseResult = (0, _markupJs.Parser).parse(attrValue, directives);
        let result = null;
        if (parseResult === null) {
            if (includeBasicValues) {
                result = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)((0, _oneTimeJs.oneTime)(()=>attrValue, context.policy));
                (0, _htmlDirectiveJs.HTMLDirective).assignAspect(result, attr.name);
            }
        } else /* eslint-disable-next-line @typescript-eslint/no-use-before-define */ result = Compiler.aggregate(parseResult, context.policy);
        if (result !== null) {
            node.removeAttributeNode(attr);
            i--;
            ii--;
            context.addFactory(result, parentId, nodeId, nodeIndex, node.tagName);
        }
    }
}
function compileContent(context, node, parentId, nodeId, nodeIndex) {
    const parseResult = (0, _markupJs.Parser).parse(node.textContent, context.directives);
    if (parseResult === null) {
        next.node = node.nextSibling;
        next.index = nodeIndex + 1;
        return next;
    }
    let currentNode;
    let lastNode = currentNode = node;
    for(let i = 0, ii = parseResult.length; i < ii; ++i){
        const currentPart = parseResult[i];
        if (i !== 0) {
            nodeIndex++;
            nodeId = targetIdFrom(parentId, nodeIndex);
            currentNode = lastNode.parentNode.insertBefore(document.createTextNode(""), lastNode.nextSibling);
        }
        if ((0, _interfacesJs.isString)(currentPart)) currentNode.textContent = currentPart;
        else {
            currentNode.textContent = " ";
            (0, _htmlDirectiveJs.HTMLDirective).assignAspect(currentPart);
            context.addFactory(currentPart, parentId, nodeId, nodeIndex, null);
        }
        lastNode = currentNode;
    }
    next.index = nodeIndex + 1;
    next.node = lastNode.nextSibling;
    return next;
}
function compileChildren(context, parent, parentId) {
    let nodeIndex = 0;
    let childNode = parent.firstChild;
    while(childNode){
        /* eslint-disable-next-line @typescript-eslint/no-use-before-define */ const result = compileNode(context, parentId, childNode, nodeIndex);
        childNode = result.node;
        nodeIndex = result.index;
    }
}
function compileNode(context, parentId, node, nodeIndex) {
    const nodeId = targetIdFrom(parentId, nodeIndex);
    switch(node.nodeType){
        case 1:
            compileAttributes(context, parentId, node, nodeId, nodeIndex);
            compileChildren(context, node, nodeId);
            break;
        case 3:
            return compileContent(context, node, parentId, nodeId, nodeIndex);
        case 8:
            const parts = (0, _markupJs.Parser).parse(node.data, context.directives);
            if (parts !== null) context.addFactory(/* eslint-disable-next-line @typescript-eslint/no-use-before-define */ Compiler.aggregate(parts), parentId, nodeId, nodeIndex, null);
            break;
    }
    next.index = nodeIndex + 1;
    next.node = node.nextSibling;
    return next;
}
function isMarker(node, directives) {
    return node && node.nodeType == 8 && (0, _markupJs.Parser).parse(node.data, directives) !== null;
}
const templateTag = "TEMPLATE";
const Compiler = {
    /**
     * Compiles a template and associated directives into a compilation
     * result which can be used to create views.
     * @param html - The html string or template element to compile.
     * @param factories - The behavior factories referenced by the template.
     * @param policy - The security policy to compile the html with.
     * @remarks
     * The template that is provided for compilation is altered in-place
     * and cannot be compiled again. If the original template must be preserved,
     * it is recommended that you clone the original and pass the clone to this API.
     * @public
     */ compile (html, factories, policy = (0, _domJs.DOM).policy) {
        let template;
        if ((0, _interfacesJs.isString)(html)) {
            template = document.createElement(templateTag);
            template.innerHTML = policy.createHTML(html);
            const fec = template.content.firstElementChild;
            if (fec !== null && fec.tagName === templateTag) template = fec;
        } else template = html;
        if (!template.content.firstChild && !template.content.lastChild) template.content.appendChild(document.createComment(""));
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1111864
        const fragment = document.adoptNode(template.content);
        const context = new CompilationContext(fragment, factories, policy);
        compileAttributes(context, "", template, /* host */ "h", 0, true);
        if (// If the first node in a fragment is a marker, that means it's an unstable first node,
        // because something like a when, repeat, etc. could add nodes before the marker.
        // To mitigate this, we insert a stable first node. However, if we insert a node,
        // that will alter the result of the TreeWalker. So, we also need to offset the target index.
        isMarker(fragment.firstChild, factories) || // Or if there is only one node and a directive, it means the template's content
        // is *only* the directive. In that case, HTMLView.dispose() misses any nodes inserted by
        // the directive. Inserting a new node ensures proper disposal of nodes added by the directive.
        fragment.childNodes.length === 1 && Object.keys(factories).length > 0) fragment.insertBefore(document.createComment(""), fragment.firstChild);
        compileChildren(context, fragment, /* root */ "r");
        next.node = null; // prevent leaks
        return context.freeze();
    },
    /**
     * Sets the default compilation strategy that will be used by the ViewTemplate whenever
     * it needs to compile a view preprocessed with the html template function.
     * @param strategy - The compilation strategy to use when compiling templates.
     */ setDefaultStrategy (strategy) {
        this.compile = strategy;
    },
    /**
     * Aggregates an array of strings and directives into a single directive.
     * @param parts - A heterogeneous array of static strings interspersed with
     * directives.
     * @param policy - The security policy to use with the aggregated bindings.
     * @returns A single inline directive that aggregates the behavior of all the parts.
     */ aggregate (parts, policy = (0, _domJs.DOM).policy) {
        if (parts.length === 1) return parts[0];
        let sourceAspect;
        let isVolatile = false;
        let bindingPolicy = void 0;
        const partCount = parts.length;
        const finalParts = parts.map((x)=>{
            if ((0, _interfacesJs.isString)(x)) return ()=>x;
            sourceAspect = x.sourceAspect || sourceAspect;
            isVolatile = isVolatile || x.dataBinding.isVolatile;
            bindingPolicy = bindingPolicy || x.dataBinding.policy;
            return x.dataBinding.evaluate;
        });
        const expression = (scope, context)=>{
            let output = "";
            for(let i = 0; i < partCount; ++i)output += finalParts[i](scope, context);
            return output;
        };
        const directive = new (0, _htmlBindingDirectiveJs.HTMLBindingDirective)((0, _oneWayJs.oneWay)(expression, bindingPolicy !== null && bindingPolicy !== void 0 ? bindingPolicy : policy, isVolatile));
        (0, _htmlDirectiveJs.HTMLDirective).assignAspect(directive, sourceAspect);
        return directive;
    }
};

},{"../interfaces.js":"jk6ut","../platform.js":"54qbx","../dom.js":"hHZU0","../binding/one-time.js":"2vKEx","../binding/one-way.js":"hUtUy","./markup.js":"Ash6w","./html-binding-directive.js":"8CCiP","./html-directive.js":"gFfpP","./view.js":"3HWXi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c3sGM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * A directive that enables basic conditional rendering in a template.
 * @param condition - The condition to test for rendering.
 * @param templateOrTemplateBinding - The template or a binding that gets
 * the template to render when the condition is true.
 * @param elseTemplateOrTemplateBinding - Optional template or binding that that
 * gets the template to render when the conditional is false.
 * @public
 */ parcelHelpers.export(exports, "when", ()=>when);
var _interfacesJs = require("../interfaces.js");
const noTemplate = ()=>null;
function normalizeBinding(value) {
    return value === undefined ? noTemplate : (0, _interfacesJs.isFunction)(value) ? value : ()=>value;
}
function when(condition, templateOrTemplateBinding, elseTemplateOrTemplateBinding) {
    const dataBinding = (0, _interfacesJs.isFunction)(condition) ? condition : ()=>condition;
    const templateBinding = normalizeBinding(templateOrTemplateBinding);
    const elseBinding = normalizeBinding(elseTemplateOrTemplateBinding);
    return (source, context)=>dataBinding(source, context) ? templateBinding(source, context) : elseBinding(source, context);
}

},{"../interfaces.js":"jk6ut","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dzvmo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HydrationRepeatError", ()=>HydrationRepeatError);
/**
 * A behavior that renders a template for each item in an array.
 * @public
 */ parcelHelpers.export(exports, "RepeatBehavior", ()=>RepeatBehavior);
/**
 * A directive that configures list rendering.
 * @public
 */ parcelHelpers.export(exports, "RepeatDirective", ()=>RepeatDirective);
/**
 * A directive that enables list rendering.
 * @param items - The array to render.
 * @param template - The template or a template binding used obtain a template
 * to render for each item in the array.
 * @param options - Options used to turn on special repeat features.
 * @public
 */ parcelHelpers.export(exports, "repeat", ()=>repeat);
var _hydrationJs = require("../components/hydration.js");
var _arraysJs = require("../observation/arrays.js");
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _normalizeJs = require("../binding/normalize.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _markupJs = require("./markup.js");
var _viewJs = require("./view.js");
const defaultRepeatOptions = Object.freeze({
    positioning: false,
    recycle: true
});
function bindWithoutPositioning(view, items, index, controller) {
    view.context.parent = controller.source;
    view.context.parentContext = controller.context;
    view.bind(items[index]);
}
function bindWithPositioning(view, items, index, controller) {
    view.context.parent = controller.source;
    view.context.parentContext = controller.context;
    view.context.length = items.length;
    view.context.index = index;
    view.bind(items[index]);
}
function isCommentNode(node) {
    return node.nodeType === Node.COMMENT_NODE;
}
class HydrationRepeatError extends Error {
    constructor(/**
     * The error message
     */ message, propertyBag){
        super(message);
        this.propertyBag = propertyBag;
    }
}
class RepeatBehavior {
    /**
     * Creates an instance of RepeatBehavior.
     * @param location - The location in the DOM to render the repeat.
     * @param dataBinding - The array to render.
     * @param isItemsBindingVolatile - Indicates whether the items binding has volatile dependencies.
     * @param templateBinding - The template to render for each item.
     * @param isTemplateBindingVolatile - Indicates whether the template binding has volatile dependencies.
     * @param options - Options used to turn on special repeat features.
     */ constructor(directive){
        this.directive = directive;
        this.items = null;
        this.itemsObserver = null;
        this.bindView = bindWithoutPositioning;
        /** @internal */ this.views = [];
        this.itemsBindingObserver = directive.dataBinding.createObserver(this, directive);
        this.templateBindingObserver = directive.templateBinding.createObserver(this, directive);
        if (directive.options.positioning) this.bindView = bindWithPositioning;
    }
    /**
     * Bind this behavior.
     * @param controller - The view controller that manages the lifecycle of this behavior.
     */ bind(controller) {
        this.location = controller.targets[this.directive.targetNodeId];
        this.controller = controller;
        this.items = this.itemsBindingObserver.bind(controller);
        this.template = this.templateBindingObserver.bind(controller);
        this.observeItems(true);
        if ((0, _hydrationJs.isHydratable)(this.template) && (0, _hydrationJs.isHydratable)(controller) && controller.hydrationStage !== (0, _viewJs.HydrationStage).hydrated) this.hydrateViews(this.template);
        else this.refreshAllViews();
        controller.onUnbind(this);
    }
    /**
     * Unbinds this behavior.
     */ unbind() {
        if (this.itemsObserver !== null) this.itemsObserver.unsubscribe(this);
        this.unbindAllViews();
    }
    /**
     * Handles changes in the array, its items, and the repeat template.
     * @param source - The source of the change.
     * @param args - The details about what was changed.
     */ handleChange(source, args) {
        if (args === this.itemsBindingObserver) {
            this.items = this.itemsBindingObserver.bind(this.controller);
            this.observeItems();
            this.refreshAllViews();
        } else if (args === this.templateBindingObserver) {
            this.template = this.templateBindingObserver.bind(this.controller);
            this.refreshAllViews(true);
        } else if (!args[0]) return;
        else if (args[0].reset) this.refreshAllViews();
        else this.updateViews(args);
    }
    observeItems(force = false) {
        if (!this.items) {
            this.items = (0, _platformJs.emptyArray);
            return;
        }
        const oldObserver = this.itemsObserver;
        const newObserver = this.itemsObserver = (0, _observableJs.Observable).getNotifier(this.items);
        const hasNewObserver = oldObserver !== newObserver;
        if (hasNewObserver && oldObserver !== null) oldObserver.unsubscribe(this);
        if (hasNewObserver || force) newObserver.subscribe(this);
    }
    updateViews(splices) {
        const views = this.views;
        const bindView = this.bindView;
        const items = this.items;
        const template = this.template;
        const controller = this.controller;
        const recycle = this.directive.options.recycle;
        const leftoverViews = [];
        let leftoverIndex = 0;
        let availableViews = 0;
        for(let i = 0, ii = splices.length; i < ii; ++i){
            const splice = splices[i];
            const removed = splice.removed;
            let removeIndex = 0;
            let addIndex = splice.index;
            const end = addIndex + splice.addedCount;
            const removedViews = views.splice(splice.index, removed.length);
            const totalAvailableViews = availableViews = leftoverViews.length + removedViews.length;
            for(; addIndex < end; ++addIndex){
                const neighbor = views[addIndex];
                const location = neighbor ? neighbor.firstChild : this.location;
                let view;
                if (recycle && availableViews > 0) {
                    if (removeIndex <= totalAvailableViews && removedViews.length > 0) {
                        view = removedViews[removeIndex];
                        removeIndex++;
                    } else {
                        view = leftoverViews[leftoverIndex];
                        leftoverIndex++;
                    }
                    availableViews--;
                } else view = template.create();
                views.splice(addIndex, 0, view);
                bindView(view, items, addIndex, controller);
                view.insertBefore(location);
            }
            if (removedViews[removeIndex]) leftoverViews.push(...removedViews.slice(removeIndex));
        }
        for(let i = leftoverIndex, ii = leftoverViews.length; i < ii; ++i)leftoverViews[i].dispose();
        if (this.directive.options.positioning) for(let i = 0, viewsLength = views.length; i < viewsLength; ++i){
            const context = views[i].context;
            context.length = viewsLength;
            context.index = i;
        }
    }
    refreshAllViews(templateChanged = false) {
        const items = this.items;
        const template = this.template;
        const location = this.location;
        const bindView = this.bindView;
        const controller = this.controller;
        let itemsLength = items.length;
        let views = this.views;
        let viewsLength = views.length;
        if (itemsLength === 0 || templateChanged || !this.directive.options.recycle) {
            // all views need to be removed
            (0, _viewJs.HTMLView).disposeContiguousBatch(views);
            viewsLength = 0;
        }
        if (viewsLength === 0) {
            // all views need to be created
            this.views = views = new Array(itemsLength);
            for(let i = 0; i < itemsLength; ++i){
                const view = template.create();
                bindView(view, items, i, controller);
                views[i] = view;
                view.insertBefore(location);
            }
        } else {
            // attempt to reuse existing views with new data
            let i = 0;
            for(; i < itemsLength; ++i)if (i < viewsLength) {
                const view = views[i];
                if (!view) {
                    const serializer = new XMLSerializer();
                    throw new HydrationRepeatError(`View is null or undefined inside "${this.location.getRootNode().host.nodeName}".`, {
                        index: i,
                        hydrationStage: this.controller.hydrationStage,
                        itemsLength,
                        viewsState: views.map((v)=>v ? "hydrated" : "empty"),
                        viewTemplateString: serializer.serializeToString(template.create().fragment),
                        rootNodeContent: serializer.serializeToString(this.location.getRootNode())
                    });
                }
                bindView(view, items, i, controller);
            } else {
                const view = template.create();
                bindView(view, items, i, controller);
                views.push(view);
                view.insertBefore(location);
            }
            const removed = views.splice(i, viewsLength - i);
            for(i = 0, itemsLength = removed.length; i < itemsLength; ++i)removed[i].dispose();
        }
    }
    unbindAllViews() {
        const views = this.views;
        for(let i = 0, ii = views.length; i < ii; ++i){
            const view = views[i];
            if (!view) {
                const serializer = new XMLSerializer();
                throw new HydrationRepeatError(`View is null or undefined inside "${this.location.getRootNode().host.nodeName}".`, {
                    index: i,
                    hydrationStage: this.controller.hydrationStage,
                    viewsState: views.map((v)=>v ? "hydrated" : "empty"),
                    rootNodeContent: serializer.serializeToString(this.location.getRootNode())
                });
            }
            view.unbind();
        }
    }
    hydrateViews(template) {
        if (!this.items) return;
        this.views = new Array(this.items.length);
        let current = this.location.previousSibling;
        while(current !== null){
            if (!isCommentNode(current)) {
                current = current.previousSibling;
                continue;
            }
            const index = (0, _hydrationJs.HydrationMarkup).parseRepeatEndMarker(current.data);
            if (index === null) {
                current = current.previousSibling;
                continue;
            }
            current.data = "";
            // end of repeat is the previousSibling of end comment
            const end = current.previousSibling;
            if (!end) throw new Error(`Error when hydrating inside "${this.location.getRootNode().host.nodeName}": end should never be null.`);
            // find start marker
            let start = end;
            // How many unmatched end markers we've encountered
            let unmatchedEndMarkers = 0;
            while(start !== null){
                if (isCommentNode(start)) {
                    if ((0, _hydrationJs.HydrationMarkup).isRepeatViewEndMarker(start.data)) unmatchedEndMarkers++;
                    else if ((0, _hydrationJs.HydrationMarkup).isRepeatViewStartMarker(start.data)) {
                        if (unmatchedEndMarkers) unmatchedEndMarkers--;
                        else {
                            if ((0, _hydrationJs.HydrationMarkup).parseRepeatStartMarker(start.data) !== index) throw new Error(`Error when hydrating inside "${this.location.getRootNode().host.nodeName}": Mismatched start and end markers.`);
                            start.data = "";
                            current = start.previousSibling;
                            // start of repeat content is the nextSibling of start comment
                            start = start.nextSibling;
                            const view = template.hydrate(start, end);
                            this.views[index] = view;
                            this.bindView(view, this.items, index, this.controller);
                            break;
                        }
                    }
                }
                start = start.previousSibling;
            }
            if (!start) throw new Error(`Error when hydrating inside "${this.location.getRootNode().host.nodeName}": start should never be null.`);
        }
    }
}
class RepeatDirective {
    /**
     * Creates an instance of RepeatDirective.
     * @param dataBinding - The binding that provides the array to render.
     * @param templateBinding - The template binding used to obtain a template to render for each item in the array.
     * @param options - Options used to turn on special repeat features.
     */ constructor(dataBinding, templateBinding, options){
        this.dataBinding = dataBinding;
        this.templateBinding = templateBinding;
        this.options = options;
        (0, _arraysJs.ArrayObserver).enable();
    }
    /**
     * Creates a placeholder string based on the directive's index within the template.
     * @param index - The index of the directive within the template.
     */ createHTML(add) {
        return (0, _markupJs.Markup).comment(add(this));
    }
    /**
     * Creates a behavior for the provided target node.
     * @param target - The node instance to create the behavior for.
     */ createBehavior() {
        return new RepeatBehavior(this);
    }
}
(0, _htmlDirectiveJs.HTMLDirective).define(RepeatDirective);
function repeat(items, template, options = defaultRepeatOptions) {
    const dataBinding = (0, _normalizeJs.normalizeBinding)(items);
    const templateBinding = (0, _normalizeJs.normalizeBinding)(template);
    return new RepeatDirective(dataBinding, templateBinding, Object.assign(Object.assign({}, defaultRepeatOptions), options));
}

},{"../components/hydration.js":"aY5lR","../observation/arrays.js":"hAkeQ","../observation/observable.js":"5BRHB","../platform.js":"54qbx","../binding/normalize.js":"jR8UI","./html-directive.js":"gFfpP","./markup.js":"Ash6w","./view.js":"3HWXi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lITBx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The runtime behavior for slotted node observation.
 * @public
 */ parcelHelpers.export(exports, "SlottedDirective", ()=>SlottedDirective);
/**
 * A directive that observes the `assignedNodes()` of a slot and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure slotted node observation.
 * @public
 */ parcelHelpers.export(exports, "slotted", ()=>slotted);
var _interfacesJs = require("../interfaces.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _nodeObservationJs = require("./node-observation.js");
const slotEvent = "slotchange";
class SlottedDirective extends (0, _nodeObservationJs.NodeObservationDirective) {
    /**
     * Begins observation of the nodes.
     * @param target - The target to observe.
     */ observe(target) {
        target.addEventListener(slotEvent, this);
    }
    /**
     * Disconnects observation of the nodes.
     * @param target - The target to unobserve.
     */ disconnect(target) {
        target.removeEventListener(slotEvent, this);
    }
    /**
     * Retrieves the raw nodes that should be assigned to the source property.
     * @param target - The target to get the node to.
     */ getNodes(target) {
        return target.assignedNodes(this.options);
    }
    /** @internal */ handleEvent(event) {
        const target = event.currentTarget;
        this.updateTarget(this.getSource(target), this.computeNodes(target));
    }
}
(0, _htmlDirectiveJs.HTMLDirective).define(SlottedDirective);
function slotted(propertyOrOptions) {
    if ((0, _interfacesJs.isString)(propertyOrOptions)) propertyOrOptions = {
        property: propertyOrOptions
    };
    return new SlottedDirective(propertyOrOptions);
}

},{"../interfaces.js":"jk6ut","./html-directive.js":"gFfpP","./node-observation.js":"hKuMP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hKuMP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elements", ()=>elements);
/**
 * A base class for node observation.
 * @public
 * @remarks
 * Internally used by the SlottedDirective and the ChildrenDirective.
 */ parcelHelpers.export(exports, "NodeObservationDirective", ()=>NodeObservationDirective);
var _platformJs = require("../platform.js");
var _htmlDirectiveJs = require("./html-directive.js");
const selectElements = (value)=>value.nodeType === 1;
const elements = (selector)=>selector ? (value)=>value.nodeType === 1 && value.matches(selector) : selectElements;
class NodeObservationDirective extends (0, _htmlDirectiveJs.StatelessAttachedAttributeDirective) {
    /**
     * The unique id of the factory.
     */ get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
        this._controllerProperty = `${value}-c`;
    }
    /**
     * Bind this behavior to the source.
     * @param source - The source to bind to.
     * @param context - The execution context that the binding is operating within.
     * @param targets - The targets that behaviors in a view can attach to.
     */ bind(controller) {
        const target = controller.targets[this.targetNodeId];
        target[this._controllerProperty] = controller;
        this.updateTarget(controller.source, this.computeNodes(target));
        this.observe(target);
        controller.onUnbind(this);
    }
    /**
     * Unbinds this behavior from the source.
     * @param source - The source to unbind from.
     * @param context - The execution context that the binding is operating within.
     * @param targets - The targets that behaviors in a view can attach to.
     */ unbind(controller) {
        const target = controller.targets[this.targetNodeId];
        this.updateTarget(controller.source, (0, _platformJs.emptyArray));
        this.disconnect(target);
        target[this._controllerProperty] = null;
    }
    /**
     * Gets the data source for the target.
     * @param target - The target to get the source for.
     * @returns The source.
     */ getSource(target) {
        return target[this._controllerProperty].source;
    }
    /**
     * Updates the source property with the computed nodes.
     * @param source - The source object to assign the nodes property to.
     * @param value - The nodes to assign to the source object property.
     */ updateTarget(source, value) {
        source[this.options.property] = value;
    }
    /**
     * Computes the set of nodes that should be assigned to the source property.
     * @param target - The target to compute the nodes for.
     * @returns The computed nodes.
     * @remarks
     * Applies filters if provided.
     */ computeNodes(target) {
        let nodes = this.getNodes(target);
        if ("filter" in this.options) nodes = nodes.filter(this.options.filter);
        return nodes;
    }
}

},{"../platform.js":"54qbx","./html-directive.js":"gFfpP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"99AyB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The runtime behavior for child node observation.
 * @public
 */ parcelHelpers.export(exports, "ChildrenDirective", ()=>ChildrenDirective);
/**
 * A directive that observes the `childNodes` of an element and updates a property
 * whenever they change.
 * @param propertyOrOptions - The options used to configure child node observation.
 * @public
 */ parcelHelpers.export(exports, "children", ()=>children);
var _interfacesJs = require("../interfaces.js");
var _htmlDirectiveJs = require("./html-directive.js");
var _nodeObservationJs = require("./node-observation.js");
class ChildrenDirective extends (0, _nodeObservationJs.NodeObservationDirective) {
    /**
     * Creates an instance of ChildrenDirective.
     * @param options - The options to use in configuring the child observation behavior.
     */ constructor(options){
        super(options);
        this.observerProperty = Symbol();
        this.handleEvent = (mutations, observer)=>{
            const target = observer.target;
            this.updateTarget(this.getSource(target), this.computeNodes(target));
        };
        options.childList = true;
    }
    /**
     * Begins observation of the nodes.
     * @param target - The target to observe.
     */ observe(target) {
        let observer = target[this.observerProperty];
        if (!observer) {
            observer = new MutationObserver(this.handleEvent);
            observer.toJSON = (0, _interfacesJs.noop);
            target[this.observerProperty] = observer;
        }
        observer.target = target;
        observer.observe(target, this.options);
    }
    /**
     * Disconnects observation of the nodes.
     * @param target - The target to unobserve.
     */ disconnect(target) {
        const observer = target[this.observerProperty];
        observer.target = null;
        observer.disconnect();
    }
    /**
     * Retrieves the raw nodes that should be assigned to the source property.
     * @param target - The target to get the node to.
     */ getNodes(target) {
        if ("selector" in this.options) return Array.from(target.querySelectorAll(this.options.selector));
        return Array.from(target.childNodes);
    }
}
(0, _htmlDirectiveJs.HTMLDirective).define(ChildrenDirective);
function children(propertyOrOptions) {
    if ((0, _interfacesJs.isString)(propertyOrOptions)) propertyOrOptions = {
        property: propertyOrOptions
    };
    return new ChildrenDirective(propertyOrOptions);
}

},{"../interfaces.js":"jk6ut","./html-directive.js":"gFfpP","./node-observation.js":"hKuMP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j9ZUF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FASTElement", ()=>FASTElement);
/**
 * Decorator: Defines a platform custom element based on `FASTElement`.
 * @param nameOrDef - The name of the element to define or a definition object
 * that describes the element to define.
 * @public
 */ parcelHelpers.export(exports, "customElement", ()=>customElement);
var _interfacesJs = require("../interfaces.js");
var _elementControllerJs = require("./element-controller.js");
var _fastDefinitionsJs = require("./fast-definitions.js");
/* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ function createFASTElement(BaseType) {
    const type = class extends BaseType {
        constructor(){
            /* eslint-disable-next-line */ super();
            (0, _elementControllerJs.ElementController).forCustomElement(this);
        }
        $emit(type, detail, options) {
            return this.$fastController.emit(type, detail, options);
        }
        connectedCallback() {
            this.$fastController.connect();
        }
        disconnectedCallback() {
            this.$fastController.disconnect();
        }
        attributeChangedCallback(name, oldValue, newValue) {
            this.$fastController.onAttributeChangedCallback(name, oldValue, newValue);
        }
    };
    (0, _fastDefinitionsJs.FASTElementDefinition).registerBaseType(type);
    return type;
}
function compose(type, nameOrDef) {
    if ((0, _interfacesJs.isFunction)(type)) return (0, _fastDefinitionsJs.FASTElementDefinition).compose(type, nameOrDef);
    return (0, _fastDefinitionsJs.FASTElementDefinition).compose(this, type);
}
function define(type, nameOrDef) {
    if ((0, _interfacesJs.isFunction)(type)) return (0, _fastDefinitionsJs.FASTElementDefinition).compose(type, nameOrDef).define().type;
    return (0, _fastDefinitionsJs.FASTElementDefinition).compose(this, type).define().type;
}
function from(BaseType) {
    return createFASTElement(BaseType);
}
const FASTElement = Object.assign(createFASTElement(HTMLElement), {
    /**
     * Creates a new FASTElement base class inherited from the
     * provided base type.
     * @param BaseType - The base element type to inherit from.
     */ from,
    /**
     * Defines a platform custom element based on the provided type and definition.
     * @param type - The custom element type to define.
     * @param nameOrDef - The name of the element to define or a definition object
     * that describes the element to define.
     */ define,
    /**
     * Defines metadata for a FASTElement which can be used to later define the element.
     * @public
     */ compose
});
function customElement(nameOrDef) {
    /* eslint-disable-next-line @typescript-eslint/explicit-function-return-type */ return function(type) {
        define(type, nameOrDef);
    };
}

},{"../interfaces.js":"jk6ut","./element-controller.js":"1vLF4","./fast-definitions.js":"jBLkg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1vLF4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Controls the lifecycle and rendering of a `FASTElement`.
 * @public
 */ parcelHelpers.export(exports, "ElementController", ()=>ElementController);
// Default StyleStrategy implementations are defined in this module because they
// require access to element shadowRoots, and we don't want to leak shadowRoot
// objects out of this module.
/**
 * https://wicg.github.io/construct-stylesheets/
 * https://developers.google.com/web/updates/2019/02/constructable-stylesheets
 *
 * @internal
 */ parcelHelpers.export(exports, "AdoptedStyleSheetsStrategy", ()=>AdoptedStyleSheetsStrategy);
/**
 * @internal
 */ parcelHelpers.export(exports, "StyleElementStrategy", ()=>StyleElementStrategy);
/**
 * An ElementController capable of hydrating FAST elements from
 * Declarative Shadow DOM.
 *
 * @beta
 */ parcelHelpers.export(exports, "HydratableElementController", ()=>HydratableElementController);
var _interfacesJs = require("../interfaces.js");
var _notifierJs = require("../observation/notifier.js");
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _elementStylesJs = require("../styles/element-styles.js");
var _utilitiesJs = require("../utilities.js");
var _fastDefinitionsJs = require("./fast-definitions.js");
var _hydrationJs = require("./hydration.js");
const defaultEventOptions = {
    bubbles: true,
    composed: true,
    cancelable: true
};
const isConnectedPropertyName = "isConnected";
const shadowRoots = new WeakMap();
function getShadowRoot(element) {
    var _a, _b;
    return (_b = (_a = element.shadowRoot) !== null && _a !== void 0 ? _a : shadowRoots.get(element)) !== null && _b !== void 0 ? _b : null;
}
let elementControllerStrategy;
class ElementController extends (0, _notifierJs.PropertyChangeNotifier) {
    /**
     * Creates a Controller to control the specified element.
     * @param element - The element to be controlled by this controller.
     * @param definition - The element definition metadata that instructs this
     * controller in how to handle rendering and other platform integrations.
     * @internal
     */ constructor(element, definition){
        super(element);
        this.boundObservables = null;
        this.needsInitialization = true;
        this.hasExistingShadowRoot = false;
        this._template = null;
        this.stage = 3 /* Stages.disconnected */ ;
        /**
         * A guard against connecting behaviors multiple times
         * during connect in scenarios where a behavior adds
         * another behavior during it's connectedCallback
         */ this.guardBehaviorConnection = false;
        this.behaviors = null;
        /**
         * Tracks whether behaviors are connected so that
         * behaviors cant be connected multiple times
         */ this.behaviorsConnected = false;
        this._mainStyles = null;
        /**
         * This allows Observable.getNotifier(...) to return the Controller
         * when the notifier for the Controller itself is being requested. The
         * result is that the Observable system does not need to create a separate
         * instance of Notifier for observables on the Controller. The component and
         * the controller will now share the same notifier, removing one-object construct
         * per web component instance.
         */ this.$fastController = this;
        /**
         * The view associated with the custom element.
         * @remarks
         * If `null` then the element is managing its own rendering.
         */ this.view = null;
        this.source = element;
        this.definition = definition;
        const shadowOptions = definition.shadowOptions;
        if (shadowOptions !== void 0) {
            let shadowRoot = element.shadowRoot;
            if (shadowRoot) this.hasExistingShadowRoot = true;
            else {
                shadowRoot = element.attachShadow(shadowOptions);
                if (shadowOptions.mode === "closed") shadowRoots.set(element, shadowRoot);
            }
        }
        // Capture any observable values that were set by the binding engine before
        // the browser upgraded the element. Then delete the property since it will
        // shadow the getter/setter that is required to make the observable operate.
        // Later, in the connect callback, we'll re-apply the values.
        const accessors = (0, _observableJs.Observable).getAccessors(element);
        if (accessors.length > 0) {
            const boundObservables = this.boundObservables = Object.create(null);
            for(let i = 0, ii = accessors.length; i < ii; ++i){
                const propertyName = accessors[i].name;
                const value = element[propertyName];
                if (value !== void 0) {
                    delete element[propertyName];
                    boundObservables[propertyName] = value;
                }
            }
        }
    }
    /**
     * Indicates whether or not the custom element has been
     * connected to the document.
     */ get isConnected() {
        (0, _observableJs.Observable).track(this, isConnectedPropertyName);
        return this.stage === 1 /* Stages.connected */ ;
    }
    /**
     * The context the expression is evaluated against.
     */ get context() {
        var _a, _b;
        return (_b = (_a = this.view) === null || _a === void 0 ? void 0 : _a.context) !== null && _b !== void 0 ? _b : (0, _observableJs.ExecutionContext).default;
    }
    /**
     * Indicates whether the controller is bound.
     */ get isBound() {
        var _a, _b;
        return (_b = (_a = this.view) === null || _a === void 0 ? void 0 : _a.isBound) !== null && _b !== void 0 ? _b : false;
    }
    /**
     * Indicates how the source's lifetime relates to the controller's lifetime.
     */ get sourceLifetime() {
        var _a;
        return (_a = this.view) === null || _a === void 0 ? void 0 : _a.sourceLifetime;
    }
    /**
     * Gets/sets the template used to render the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */ get template() {
        var _a;
        // 1. Template overrides take top precedence.
        if (this._template === null) {
            const definition = this.definition;
            if (this.source.resolveTemplate) // 2. Allow for element instance overrides next.
            this._template = this.source.resolveTemplate();
            else if (definition.template) // 3. Default to the static definition.
            this._template = (_a = definition.template) !== null && _a !== void 0 ? _a : null;
        }
        return this._template;
    }
    set template(value) {
        if (this._template === value) return;
        this._template = value;
        if (!this.needsInitialization) this.renderTemplate(value);
    }
    /**
     * The main set of styles used for the component, independent
     * of any dynamically added styles.
     */ get mainStyles() {
        var _a;
        // 1. Styles overrides take top precedence.
        if (this._mainStyles === null) {
            const definition = this.definition;
            if (this.source.resolveStyles) // 2. Allow for element instance overrides next.
            this._mainStyles = this.source.resolveStyles();
            else if (definition.styles) // 3. Default to the static definition.
            this._mainStyles = (_a = definition.styles) !== null && _a !== void 0 ? _a : null;
        }
        return this._mainStyles;
    }
    set mainStyles(value) {
        if (this._mainStyles === value) return;
        if (this._mainStyles !== null) this.removeStyles(this._mainStyles);
        this._mainStyles = value;
        if (!this.needsInitialization) this.addStyles(value);
    }
    /**
     * Registers an unbind handler with the controller.
     * @param behavior - An object to call when the controller unbinds.
     */ onUnbind(behavior) {
        var _a;
        (_a = this.view) === null || _a === void 0 || _a.onUnbind(behavior);
    }
    /**
     * Adds the behavior to the component.
     * @param behavior - The behavior to add.
     */ addBehavior(behavior) {
        var _a, _b;
        const targetBehaviors = (_a = this.behaviors) !== null && _a !== void 0 ? _a : this.behaviors = new Map();
        const count = (_b = targetBehaviors.get(behavior)) !== null && _b !== void 0 ? _b : 0;
        if (count === 0) {
            targetBehaviors.set(behavior, 1);
            behavior.addedCallback && behavior.addedCallback(this);
            if (behavior.connectedCallback && !this.guardBehaviorConnection && (this.stage === 1 /* Stages.connected */  || this.stage === 0 /* Stages.connecting */ )) behavior.connectedCallback(this);
        } else targetBehaviors.set(behavior, count + 1);
    }
    /**
     * Removes the behavior from the component.
     * @param behavior - The behavior to remove.
     * @param force - Forces removal even if this behavior was added more than once.
     */ removeBehavior(behavior, force = false) {
        const targetBehaviors = this.behaviors;
        if (targetBehaviors === null) return;
        const count = targetBehaviors.get(behavior);
        if (count === void 0) return;
        if (count === 1 || force) {
            targetBehaviors.delete(behavior);
            if (behavior.disconnectedCallback && this.stage !== 3 /* Stages.disconnected */ ) behavior.disconnectedCallback(this);
            behavior.removedCallback && behavior.removedCallback(this);
        } else targetBehaviors.set(behavior, count - 1);
    }
    /**
     * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
     * @param styles - The styles to add.
     */ addStyles(styles) {
        var _a;
        if (!styles) return;
        const source = this.source;
        if (styles instanceof HTMLElement) {
            const target = (_a = getShadowRoot(source)) !== null && _a !== void 0 ? _a : this.source;
            target.append(styles);
        } else if (!styles.isAttachedTo(source)) {
            const sourceBehaviors = styles.behaviors;
            styles.addStylesTo(source);
            if (sourceBehaviors !== null) for(let i = 0, ii = sourceBehaviors.length; i < ii; ++i)this.addBehavior(sourceBehaviors[i]);
        }
    }
    /**
     * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
     * @param styles - the styles to remove.
     */ removeStyles(styles) {
        var _a;
        if (!styles) return;
        const source = this.source;
        if (styles instanceof HTMLElement) {
            const target = (_a = getShadowRoot(source)) !== null && _a !== void 0 ? _a : source;
            target.removeChild(styles);
        } else if (styles.isAttachedTo(source)) {
            const sourceBehaviors = styles.behaviors;
            styles.removeStylesFrom(source);
            if (sourceBehaviors !== null) for(let i = 0, ii = sourceBehaviors.length; i < ii; ++i)this.removeBehavior(sourceBehaviors[i]);
        }
    }
    /**
     * Runs connected lifecycle behavior on the associated element.
     */ connect() {
        if (this.stage !== 3 /* Stages.disconnected */ ) return;
        this.stage = 0 /* Stages.connecting */ ;
        this.bindObservables();
        this.connectBehaviors();
        if (this.needsInitialization) {
            this.renderTemplate(this.template);
            this.addStyles(this.mainStyles);
            this.needsInitialization = false;
        } else if (this.view !== null) this.view.bind(this.source);
        this.stage = 1 /* Stages.connected */ ;
        (0, _observableJs.Observable).notify(this, isConnectedPropertyName);
    }
    bindObservables() {
        if (this.boundObservables !== null) {
            const element = this.source;
            const boundObservables = this.boundObservables;
            const propertyNames = Object.keys(boundObservables);
            for(let i = 0, ii = propertyNames.length; i < ii; ++i){
                const propertyName = propertyNames[i];
                element[propertyName] = boundObservables[propertyName];
            }
            this.boundObservables = null;
        }
    }
    connectBehaviors() {
        if (this.behaviorsConnected === false) {
            const behaviors = this.behaviors;
            if (behaviors !== null) {
                this.guardBehaviorConnection = true;
                for (const key of behaviors.keys())key.connectedCallback && key.connectedCallback(this);
                this.guardBehaviorConnection = false;
            }
            this.behaviorsConnected = true;
        }
    }
    disconnectBehaviors() {
        if (this.behaviorsConnected === true) {
            const behaviors = this.behaviors;
            if (behaviors !== null) for (const key of behaviors.keys())key.disconnectedCallback && key.disconnectedCallback(this);
            this.behaviorsConnected = false;
        }
    }
    /**
     * Runs disconnected lifecycle behavior on the associated element.
     */ disconnect() {
        if (this.stage !== 1 /* Stages.connected */ ) return;
        this.stage = 2 /* Stages.disconnecting */ ;
        (0, _observableJs.Observable).notify(this, isConnectedPropertyName);
        if (this.view !== null) this.view.unbind();
        this.disconnectBehaviors();
        this.stage = 3 /* Stages.disconnected */ ;
    }
    /**
     * Runs the attribute changed callback for the associated element.
     * @param name - The name of the attribute that changed.
     * @param oldValue - The previous value of the attribute.
     * @param newValue - The new value of the attribute.
     */ onAttributeChangedCallback(name, oldValue, newValue) {
        const attrDef = this.definition.attributeLookup[name];
        if (attrDef !== void 0) attrDef.onAttributeChangedCallback(this.source, newValue);
    }
    /**
     * Emits a custom HTML event.
     * @param type - The type name of the event.
     * @param detail - The event detail object to send with the event.
     * @param options - The event options. By default bubbles and composed.
     * @remarks
     * Only emits events if connected.
     */ emit(type, detail, options) {
        if (this.stage === 1 /* Stages.connected */ ) return this.source.dispatchEvent(new CustomEvent(type, Object.assign(Object.assign({
            detail
        }, defaultEventOptions), options)));
        return false;
    }
    renderTemplate(template) {
        var _a;
        // When getting the host to render to, we start by looking
        // up the shadow root. If there isn't one, then that means
        // we're doing a Light DOM render to the element's direct children.
        const element = this.source;
        const host = (_a = getShadowRoot(element)) !== null && _a !== void 0 ? _a : element;
        if (this.view !== null) {
            // If there's already a view, we need to unbind and remove through dispose.
            this.view.dispose();
            this.view = null;
        } else if (!this.needsInitialization || this.hasExistingShadowRoot) {
            this.hasExistingShadowRoot = false;
            // If there was previous custom rendering, we need to clear out the host.
            for(let child = host.firstChild; child !== null; child = host.firstChild)host.removeChild(child);
        }
        if (template) {
            // If a new template was provided, render it.
            this.view = template.render(element, host, element);
            this.view.sourceLifetime = (0, _observableJs.SourceLifetime).coupled;
        }
    }
    /**
     * Locates or creates a controller for the specified element.
     * @param element - The element to return the controller for.
     * @remarks
     * The specified element must have a {@link FASTElementDefinition}
     * registered either through the use of the {@link customElement}
     * decorator or a call to `FASTElement.define`.
     */ static forCustomElement(element) {
        const controller = element.$fastController;
        if (controller !== void 0) return controller;
        const definition = (0, _fastDefinitionsJs.FASTElementDefinition).getForInstance(element);
        if (definition === void 0) throw (0, _platformJs.FAST).error(1401 /* Message.missingElementDefinition */ );
        return element.$fastController = new elementControllerStrategy(element, definition);
    }
    /**
     * Sets the strategy that ElementController.forCustomElement uses to construct
     * ElementController instances for an element.
     * @param strategy - The strategy to use.
     */ static setStrategy(strategy) {
        elementControllerStrategy = strategy;
    }
}
(0, _platformJs.makeSerializationNoop)(ElementController);
// Set default strategy for ElementController
ElementController.setStrategy(ElementController);
/**
 * Converts a styleTarget into the operative target. When the provided target is an Element
 * that is a FASTElement, the function will return the ShadowRoot for that element. Otherwise,
 * it will return the root node for the element.
 * @param target
 * @returns
 */ function normalizeStyleTarget(target) {
    var _a;
    if ("adoptedStyleSheets" in target) return target;
    else return (_a = getShadowRoot(target)) !== null && _a !== void 0 ? _a : target.getRootNode();
}
class AdoptedStyleSheetsStrategy {
    constructor(styles){
        const styleSheetCache = AdoptedStyleSheetsStrategy.styleSheetCache;
        this.sheets = styles.map((x)=>{
            if (x instanceof CSSStyleSheet) return x;
            let sheet = styleSheetCache.get(x);
            if (sheet === void 0) {
                sheet = new CSSStyleSheet();
                sheet.replaceSync(x);
                styleSheetCache.set(x, sheet);
            }
            return sheet;
        });
    }
    addStylesTo(target) {
        addAdoptedStyleSheets(normalizeStyleTarget(target), this.sheets);
    }
    removeStylesFrom(target) {
        removeAdoptedStyleSheets(normalizeStyleTarget(target), this.sheets);
    }
}
AdoptedStyleSheetsStrategy.styleSheetCache = new Map();
let id = 0;
const nextStyleId = ()=>`fast-${++id}`;
function usableStyleTarget(target) {
    return target === document ? document.body : target;
}
class StyleElementStrategy {
    constructor(styles){
        this.styles = styles;
        this.styleClass = nextStyleId();
    }
    addStylesTo(target) {
        target = usableStyleTarget(normalizeStyleTarget(target));
        const styles = this.styles;
        const styleClass = this.styleClass;
        for(let i = 0; i < styles.length; i++){
            const element = document.createElement("style");
            element.innerHTML = styles[i];
            element.className = styleClass;
            target.append(element);
        }
    }
    removeStylesFrom(target) {
        target = usableStyleTarget(normalizeStyleTarget(target));
        const styles = target.querySelectorAll(`.${this.styleClass}`);
        for(let i = 0, ii = styles.length; i < ii; ++i)target.removeChild(styles[i]);
    }
}
let addAdoptedStyleSheets = (target, sheets)=>{
    target.adoptedStyleSheets = [
        ...target.adoptedStyleSheets,
        ...sheets
    ];
};
let removeAdoptedStyleSheets = (target, sheets)=>{
    target.adoptedStyleSheets = target.adoptedStyleSheets.filter((x)=>sheets.indexOf(x) === -1);
};
if ((0, _elementStylesJs.ElementStyles).supportsAdoptedStyleSheets) {
    try {
        // Test if browser implementation uses FrozenArray.
        // If not, use push / splice to alter the stylesheets
        // in place. This circumvents a bug in Safari 16.4 where
        // periodically, assigning the array would previously
        // cause sheets to be removed.
        document.adoptedStyleSheets.push();
        document.adoptedStyleSheets.splice();
        addAdoptedStyleSheets = (target, sheets)=>{
            target.adoptedStyleSheets.push(...sheets);
        };
        removeAdoptedStyleSheets = (target, sheets)=>{
            for (const sheet of sheets){
                const index = target.adoptedStyleSheets.indexOf(sheet);
                if (index !== -1) target.adoptedStyleSheets.splice(index, 1);
            }
        };
    } catch (e) {
    // Do nothing if an error is thrown, the default
    // case handles FrozenArray.
    }
    (0, _elementStylesJs.ElementStyles).setDefaultStrategy(AdoptedStyleSheetsStrategy);
} else (0, _elementStylesJs.ElementStyles).setDefaultStrategy(StyleElementStrategy);
const deferHydrationAttribute = "defer-hydration";
const needsHydrationAttribute = "needs-hydration";
class HydratableElementController extends ElementController {
    static hydrationObserverHandler(records) {
        for (const record of records){
            HydratableElementController.hydrationObserver.unobserve(record.target);
            record.target.$fastController.connect();
        }
    }
    connect() {
        var _a, _b;
        // Initialize needsHydration on first connect
        if (this.needsHydration === undefined) this.needsHydration = this.source.getAttribute(needsHydrationAttribute) !== null;
        // If the `defer-hydration` attribute exists on the source,
        // wait for it to be removed before continuing connection behavior.
        if (this.source.hasAttribute(deferHydrationAttribute)) {
            HydratableElementController.hydrationObserver.observe(this.source, {
                attributeFilter: [
                    deferHydrationAttribute
                ]
            });
            return;
        }
        // If the controller does not need to be hydrated, defer connection behavior
        // to the base-class. This case handles element re-connection and initial connection
        // of elements that did not get declarative shadow-dom emitted, as well as if an extending
        // class
        if (!this.needsHydration) {
            super.connect();
            return;
        }
        if (this.stage !== 3 /* Stages.disconnected */ ) return;
        this.stage = 0 /* Stages.connecting */ ;
        this.bindObservables();
        this.connectBehaviors();
        const element = this.source;
        const host = (_a = getShadowRoot(element)) !== null && _a !== void 0 ? _a : element;
        if (this.template) {
            if ((0, _hydrationJs.isHydratable)(this.template)) {
                let firstChild = host.firstChild;
                let lastChild = host.lastChild;
                if (element.shadowRoot === null) {
                    // handle element boundary markers when shadowRoot is not present
                    if ((0, _hydrationJs.HydrationMarkup).isElementBoundaryStartMarker(firstChild)) {
                        firstChild.data = "";
                        firstChild = firstChild.nextSibling;
                    }
                    if ((0, _hydrationJs.HydrationMarkup).isElementBoundaryEndMarker(lastChild)) {
                        lastChild.data = "";
                        lastChild = lastChild.previousSibling;
                    }
                }
                this.view = this.template.hydrate(firstChild, lastChild, element);
                (_b = this.view) === null || _b === void 0 || _b.bind(this.source);
            } else this.renderTemplate(this.template);
        }
        this.addStyles(this.mainStyles);
        this.stage = 1 /* Stages.connected */ ;
        this.source.removeAttribute(needsHydrationAttribute);
        this.needsInitialization = this.needsHydration = false;
        (0, _observableJs.Observable).notify(this, isConnectedPropertyName);
    }
    disconnect() {
        super.disconnect();
        HydratableElementController.hydrationObserver.unobserve(this.source);
    }
    static install() {
        ElementController.setStrategy(HydratableElementController);
    }
}
HydratableElementController.hydrationObserver = new (0, _utilitiesJs.UnobservableMutationObserver)(HydratableElementController.hydrationObserverHandler);

},{"../interfaces.js":"jk6ut","../observation/notifier.js":"A30Q1","../observation/observable.js":"5BRHB","../platform.js":"54qbx","../styles/element-styles.js":"eyH9B","../utilities.js":"hchrb","./fast-definitions.js":"jBLkg","./hydration.js":"aY5lR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hchrb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Retrieves the "composed parent" element of a node, ignoring DOM tree boundaries.
 * When the parent of a node is a shadow-root, it will return the host
 * element of the shadow root. Otherwise it will return the parent node or null if
 * no parent node exists.
 * @param element - The element for which to retrieve the composed parent
 *
 * @public
 */ parcelHelpers.export(exports, "composedParent", ()=>composedParent);
/**
 * Determines if the reference element contains the test element in a "composed" DOM tree that
 * ignores shadow DOM boundaries.
 *
 * Returns true of the test element is a descendent of the reference, or exists in
 * a shadow DOM that is a logical descendent of the reference. Otherwise returns false.
 * @param reference - The element to test for containment against.
 * @param test - The element being tested for containment.
 *
 * @public
 */ parcelHelpers.export(exports, "composedContains", ()=>composedContains);
/**
 * An extension of MutationObserver that supports unobserving nodes.
 * @internal
 */ parcelHelpers.export(exports, "UnobservableMutationObserver", ()=>UnobservableMutationObserver);
parcelHelpers.export(exports, "ViewBehaviorOrchestrator", ()=>ViewBehaviorOrchestrator);
var _domJs = require("./dom.js");
var _observableJs = require("./observation/observable.js");
var _markupJs = require("./templating/markup.js");
function composedParent(element) {
    const parentNode = element.parentElement;
    if (parentNode) return parentNode;
    else {
        const rootNode = element.getRootNode();
        if (rootNode.host instanceof HTMLElement) // this is shadow-root
        return rootNode.host;
    }
    return null;
}
function composedContains(reference, test) {
    let current = test;
    while(current !== null){
        if (current === reference) return true;
        current = composedParent(current);
    }
    return false;
}
class UnobservableMutationObserver extends MutationObserver {
    /**
     * Creates an instance of UnobservableMutationObserver.
     * @param callback - The callback to invoke when observed nodes are changed.
     */ constructor(callback){
        function handler(mutations) {
            this.callback.call(null, mutations.filter((record)=>this.observedNodes.has(record.target)));
        }
        super(handler);
        this.callback = callback;
        this.observedNodes = new Set();
    }
    observe(target, options) {
        this.observedNodes.add(target);
        super.observe(target, options);
    }
    unobserve(target) {
        this.observedNodes.delete(target);
        if (this.observedNodes.size < 1) this.disconnect();
    }
}
const ViewBehaviorOrchestrator = Object.freeze({
    /**
     * Creates a ViewBehaviorOrchestrator.
     * @param source - The source to to associate behaviors with.
     * @returns A ViewBehaviorOrchestrator.
     */ create (source) {
        const behaviors = [];
        const targets = {};
        let unbindables = null;
        let isConnected = false;
        return {
            source,
            context: (0, _observableJs.ExecutionContext).default,
            targets,
            get isBound () {
                return isConnected;
            },
            addBehaviorFactory (factory, target) {
                var _a, _b, _c, _d;
                const compiled = factory;
                compiled.id = (_a = compiled.id) !== null && _a !== void 0 ? _a : (0, _markupJs.nextId)();
                compiled.targetNodeId = (_b = compiled.targetNodeId) !== null && _b !== void 0 ? _b : (0, _markupJs.nextId)();
                compiled.targetTagName = (_c = target.tagName) !== null && _c !== void 0 ? _c : null;
                compiled.policy = (_d = compiled.policy) !== null && _d !== void 0 ? _d : (0, _domJs.DOM).policy;
                this.addTarget(compiled.targetNodeId, target);
                this.addBehavior(compiled.createBehavior());
            },
            addTarget (nodeId, target) {
                targets[nodeId] = target;
            },
            addBehavior (behavior) {
                behaviors.push(behavior);
                if (isConnected) behavior.bind(this);
            },
            onUnbind (unbindable) {
                if (unbindables === null) unbindables = [];
                unbindables.push(unbindable);
            },
            connectedCallback (controller) {
                if (!isConnected) {
                    isConnected = true;
                    behaviors.forEach((x)=>x.bind(this));
                }
            },
            disconnectedCallback (controller) {
                if (isConnected) {
                    isConnected = false;
                    if (unbindables !== null) unbindables.forEach((x)=>x.unbind(this));
                }
            }
        };
    }
});

},{"./dom.js":"hHZU0","./observation/observable.js":"5BRHB","./templating/markup.js":"Ash6w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jBLkg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Defines metadata for a FASTElement.
 * @public
 */ parcelHelpers.export(exports, "FASTElementDefinition", ()=>FASTElementDefinition);
var _interfacesJs = require("../interfaces.js");
var _observableJs = require("../observation/observable.js");
var _platformJs = require("../platform.js");
var _elementStylesJs = require("../styles/element-styles.js");
var _attributesJs = require("./attributes.js");
const defaultShadowOptions = {
    mode: "open"
};
const defaultElementOptions = {};
const fastElementBaseTypes = new Set();
const fastElementRegistry = (0, _platformJs.FAST).getById((0, _interfacesJs.KernelServiceId).elementRegistry, ()=>(0, _platformJs.createTypeRegistry)());
class FASTElementDefinition {
    constructor(type, nameOrConfig = type.definition){
        var _a;
        this.platformDefined = false;
        if ((0, _interfacesJs.isString)(nameOrConfig)) nameOrConfig = {
            name: nameOrConfig
        };
        this.type = type;
        this.name = nameOrConfig.name;
        this.template = nameOrConfig.template;
        this.registry = (_a = nameOrConfig.registry) !== null && _a !== void 0 ? _a : customElements;
        const proto = type.prototype;
        const attributes = (0, _attributesJs.AttributeDefinition).collect(type, nameOrConfig.attributes);
        const observedAttributes = new Array(attributes.length);
        const propertyLookup = {};
        const attributeLookup = {};
        for(let i = 0, ii = attributes.length; i < ii; ++i){
            const current = attributes[i];
            observedAttributes[i] = current.attribute;
            propertyLookup[current.name] = current;
            attributeLookup[current.attribute] = current;
            (0, _observableJs.Observable).defineProperty(proto, current);
        }
        Reflect.defineProperty(type, "observedAttributes", {
            value: observedAttributes,
            enumerable: true
        });
        this.attributes = attributes;
        this.propertyLookup = propertyLookup;
        this.attributeLookup = attributeLookup;
        this.shadowOptions = nameOrConfig.shadowOptions === void 0 ? defaultShadowOptions : nameOrConfig.shadowOptions === null ? void 0 : Object.assign(Object.assign({}, defaultShadowOptions), nameOrConfig.shadowOptions);
        this.elementOptions = nameOrConfig.elementOptions === void 0 ? defaultElementOptions : Object.assign(Object.assign({}, defaultElementOptions), nameOrConfig.elementOptions);
        this.styles = (0, _elementStylesJs.ElementStyles).normalize(nameOrConfig.styles);
        fastElementRegistry.register(this);
    }
    /**
     * Indicates if this element has been defined in at least one registry.
     */ get isDefined() {
        return this.platformDefined;
    }
    /**
     * Defines a custom element based on this definition.
     * @param registry - The element registry to define the element in.
     * @remarks
     * This operation is idempotent per registry.
     */ define(registry = this.registry) {
        const type = this.type;
        if (!registry.get(this.name)) {
            this.platformDefined = true;
            registry.define(this.name, type, this.elementOptions);
        }
        return this;
    }
    /**
     * Creates an instance of FASTElementDefinition.
     * @param type - The type this definition is being created for.
     * @param nameOrDef - The name of the element to define or a config object
     * that describes the element to define.
     */ static compose(type, nameOrDef) {
        if (fastElementBaseTypes.has(type) || fastElementRegistry.getByType(type)) return new FASTElementDefinition(class extends type {
        }, nameOrDef);
        return new FASTElementDefinition(type, nameOrDef);
    }
    /**
     * Registers a FASTElement base type.
     * @param type - The type to register as a base type.
     * @internal
     */ static registerBaseType(type) {
        fastElementBaseTypes.add(type);
    }
}
/**
 * Gets the element definition associated with the specified type.
 * @param type - The custom element type to retrieve the definition for.
 */ FASTElementDefinition.getByType = fastElementRegistry.getByType;
/**
 * Gets the element definition associated with the instance.
 * @param instance - The custom element instance to retrieve the definition for.
 */ FASTElementDefinition.getForInstance = fastElementRegistry.getForInstance;

},{"../interfaces.js":"jk6ut","../observation/observable.js":"5BRHB","../platform.js":"54qbx","../styles/element-styles.js":"eyH9B","./attributes.js":"lXzB0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lXzB0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttributeConfiguration", ()=>AttributeConfiguration);
parcelHelpers.export(exports, "booleanConverter", ()=>booleanConverter);
parcelHelpers.export(exports, "nullableBooleanConverter", ()=>nullableBooleanConverter);
parcelHelpers.export(exports, "nullableNumberConverter", ()=>nullableNumberConverter);
/**
 * An implementation of {@link Accessor} that supports reactivity,
 * change callbacks, attribute reflection, and type conversion for
 * custom elements.
 * @public
 */ parcelHelpers.export(exports, "AttributeDefinition", ()=>AttributeDefinition);
parcelHelpers.export(exports, "attr", ()=>attr);
var _observableJs = require("../observation/observable.js");
var _interfacesJs = require("../interfaces.js");
var _updateQueueJs = require("../observation/update-queue.js");
var _domJs = require("../dom.js");
var _platformJs = require("../platform.js");
const booleanMode = "boolean";
const reflectMode = "reflect";
const AttributeConfiguration = Object.freeze({
    /**
     * Locates all attribute configurations associated with a type.
     */ locate: (0, _platformJs.createMetadataLocator)()
});
const booleanConverter = {
    toView (value) {
        return value ? "true" : "false";
    },
    fromView (value) {
        return value === null || value === void 0 || value === "false" || value === false || value === 0 ? false : true;
    }
};
const nullableBooleanConverter = {
    toView (value) {
        return typeof value === "boolean" ? value.toString() : "";
    },
    fromView (value) {
        return [
            null,
            undefined,
            void 0
        ].includes(value) ? null : booleanConverter.fromView(value);
    }
};
function toNumber(value) {
    if (value === null || value === undefined) return null;
    const number = value * 1;
    return isNaN(number) ? null : number;
}
const nullableNumberConverter = {
    toView (value) {
        const output = toNumber(value);
        return output ? output.toString() : output;
    },
    fromView: toNumber
};
class AttributeDefinition {
    /**
     * Creates an instance of AttributeDefinition.
     * @param Owner - The class constructor that owns this attribute.
     * @param name - The name of the property associated with the attribute.
     * @param attribute - The name of the attribute in HTML.
     * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
     * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
     * to convert values to and from a DOM string.
     */ constructor(Owner, name, attribute = name.toLowerCase(), mode = reflectMode, converter){
        this.guards = new Set();
        this.Owner = Owner;
        this.name = name;
        this.attribute = attribute;
        this.mode = mode;
        this.converter = converter;
        this.fieldName = `_${name}`;
        this.callbackName = `${name}Changed`;
        this.hasCallback = this.callbackName in Owner.prototype;
        if (mode === booleanMode && converter === void 0) this.converter = booleanConverter;
    }
    /**
     * Sets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     * @param value - The value to set the attribute/property to.
     */ setValue(source, newValue) {
        const oldValue = source[this.fieldName];
        const converter = this.converter;
        if (converter !== void 0) newValue = converter.fromView(newValue);
        if (oldValue !== newValue) {
            source[this.fieldName] = newValue;
            this.tryReflectToAttribute(source);
            if (this.hasCallback) source[this.callbackName](oldValue, newValue);
            source.$fastController.notify(this.name);
        }
    }
    /**
     * Gets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     */ getValue(source) {
        (0, _observableJs.Observable).track(source, this.name);
        return source[this.fieldName];
    }
    /** @internal */ onAttributeChangedCallback(element, value) {
        if (this.guards.has(element)) return;
        this.guards.add(element);
        this.setValue(element, value);
        this.guards.delete(element);
    }
    tryReflectToAttribute(element) {
        const mode = this.mode;
        const guards = this.guards;
        if (guards.has(element) || mode === "fromView") return;
        (0, _updateQueueJs.Updates).enqueue(()=>{
            guards.add(element);
            const latestValue = element[this.fieldName];
            switch(mode){
                case reflectMode:
                    const converter = this.converter;
                    (0, _domJs.DOM).setAttribute(element, this.attribute, converter !== void 0 ? converter.toView(latestValue) : latestValue);
                    break;
                case booleanMode:
                    (0, _domJs.DOM).setBooleanAttribute(element, this.attribute, latestValue);
                    break;
            }
            guards.delete(element);
        });
    }
    /**
     * Collects all attribute definitions associated with the owner.
     * @param Owner - The class constructor to collect attribute for.
     * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
     * @internal
     */ static collect(Owner, ...attributeLists) {
        const attributes = [];
        attributeLists.push(AttributeConfiguration.locate(Owner));
        for(let i = 0, ii = attributeLists.length; i < ii; ++i){
            const list = attributeLists[i];
            if (list === void 0) continue;
            for(let j = 0, jj = list.length; j < jj; ++j){
                const config = list[j];
                if ((0, _interfacesJs.isString)(config)) attributes.push(new AttributeDefinition(Owner, config));
                else attributes.push(new AttributeDefinition(Owner, config.property, config.attribute, config.mode, config.converter));
            }
        }
        return attributes;
    }
}
function attr(configOrTarget, prop) {
    let config;
    function decorator($target, $prop) {
        if (arguments.length > 1) // Non invocation:
        // - @attr
        // Invocation with or w/o opts:
        // - @attr()
        // - @attr({...opts})
        config.property = $prop;
        AttributeConfiguration.locate($target.constructor).push(config);
    }
    if (arguments.length > 1) {
        // Non invocation:
        // - @attr
        config = {};
        decorator(configOrTarget, prop);
        return;
    }
    // Invocation with or w/o opts:
    // - @attr()
    // - @attr({...opts})
    config = configOrTarget === void 0 ? {} : configOrTarget;
    return decorator;
}

},{"../observation/observable.js":"5BRHB","../interfaces.js":"jk6ut","../observation/update-queue.js":"kiEDG","../dom.js":"hHZU0","../platform.js":"54qbx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9pyA0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "State", ()=>$e23529bbb092cbf2$export$7254cc27399e90bd);
parcelHelpers.export(exports, "createState", ()=>$75bc972ccc621f94$export$e6a0daad8304de);
var _fastElement = require("@microsoft/fast-element");
class $e23529bbb092cbf2$export$7254cc27399e90bd {
    constructor(value = null){
        /** 
     * Propriété privée pour stocker l'historique des valeurs d'état, limitée aux 10 dernières entrées.
    */ this._history = [];
        /** 
     * Propriété privée pour stocker la valeur actuelle de l'état, initialisée à `null`.
    */ this._value = null;
        /** 
     * Propriété privée pour notifier les observateurs des changements d'état, initialisée avec `Observable.getNotifier`.
    */ this._notifier = (0, _fastElement.Observable).getNotifier(this);
        this._value = value;
    }
    /** 
   * Getter pour la valeur actuelle de l'état. Utilise `Observable.track` pour suivre les changements.
  */ get value() {
        (0, _fastElement.Observable).track(this, "value");
        return this._value;
    }
    /**
   * Setter pour mettre à jour la valeur de l'état. Ajoute la valeur actuelle à l'historique et notifie
   * les observateurs du changement.
   * @param {T} value - Nouvelle valeur de l'état.
  */ set value(value) {
        this._value = value;
        this._history = [
            this._value,
            ...this._history.reverse()
        ].reduce((results, value)=>{
            if (results.length > 10) results.push(value);
            return results;
        }, []).reverse();
        (0, _fastElement.Observable).notify(this, "value");
    }
    /**
   * Méthode statique pour initialiser un nouvel objet `State` avec une valeur initiale facultative.
   * @param {T} [value=null] - Valeur initiale de l'état.
   * @returns Une nouvelle instance de `State` avec la valeur spécifiée.
  */ static init(value = null) {
        return new $e23529bbb092cbf2$export$7254cc27399e90bd(value);
    }
    /**
   * Renvoie un tableau avec l'état actuel et une fonction pour mettre à jour l'état.
   * @returns Un tableau contenant l'état actuel et une fonction de mise à jour.
  */ get mutator() {
        return [
            this,
            (value)=>{
                this.value = value;
            }
        ];
    }
    /** 
   * Abonne une fonction de rappel qui sera appelée à chaque changement de valeur de l'état.
   * @param {function} callback - Fonction à appeler lors d'un changement de valeur.
  */ subscribe(callback) {
        this._notifier.subscribe({
            handleChange: (state, key)=>{
                callback(state[key]);
            }
        });
    }
    /**
   * Convertit l'état en une valeur primitive pour les objets, ou en Proxy pour les objets complexes.
   * @returns La valeur primitive ou un Proxy pour les objets complexes.
  */ [Symbol.toPrimitive]() {
        return typeof this.value != "object" ? this.value : new Proxy(this.value, {
            get (target, key) {
                return target[key] ? target[key] : undefined;
            }
        });
    }
}
function $75bc972ccc621f94$export$e6a0daad8304de(value = null) {
    return $e23529bbb092cbf2$export$7254cc27399e90bd.init(value).mutator;
}

},{"@microsoft/fast-element":"laAVy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqI9g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStorage", ()=>$0718d8712747089f$export$d184a47a971dd4b9);
var _state = require("@lithium-framework/state");
class $89fec59bbef2bb37$export$98c71376181af907 extends Map {
    /**
   * Initialise une nouvelle instance de la classe `_storage` avec des enregistrements initiaux facultatifs et un validateur optionnel.
   * @param {RECORD} [records] - Un objet contenant des paires clé-valeur représentant des enregistrements de données.
   * @param {StateValidator} [validator] - Une fonction de validation optionnelle appelée lors de la modification d'un état.
   * @returns {Storage<RECORD>} Une nouvelle instance de la classe `_storage` initialisée avec les enregistrements et le validateur fournis.
   * @example
   * ```typescript
   * const records = { count: 0, name: "John" };
   * const storage = _storage.init(records);
   * ```
   */ static init(records, validator) {
        return new $89fec59bbef2bb37$export$98c71376181af907(records, validator);
    }
    /**
   * Constructeur qui initialise la classe `_storage` avec des enregistrements optionnels et un validateur.
   * @param {RECORD} [records] - Un objet contenant des paires clé-valeur représentant des enregistrements de données.
   * @param {StateValidator} [validator] - Une fonction de validation optionnelle appelée lors de la modification d'un état.
   */ constructor(records, validator){
        super();
        this._validator = null;
        if (validator) this._validator = validator;
        // Si des enregistrements sont fournis, les ajouter au _storage
        if (records) Object.keys(records).forEach((key)=>{
            this.set(key, (0, _state.createState)(records[key]));
        });
    }
    /**
   * Récupère la valeur du stockage en fonction d'une clé spécifiée.
   * Si un validateur est défini, il valide la nouvelle valeur avant de l'appliquer.
   * @template T - Le type de la valeur de l'état.
   * @param {StorageKeys<RECORD>} key - La clé utilisée pour accéder à un enregistrement spécifique en stockage.
   * @returns {State<T>["mutator"]} La fonction `mutator` associée à la clé spécifiée de l'objet `State`.
   * @example
   * ```typescript
   * const storage = _storage.init({ count: 0 });
   * const [count, setCount] = storage.get("count");
   * setCount(10); // met à jour la valeur si la validation réussit
   * ```
   */ get(key) {
        if (!this._validator) return super.get(key);
        else {
            let [state, setter] = super.get(key);
            return [
                state,
                (newValue)=>{
                    let previousValue = state.value;
                    let result = this._validator(key, previousValue, newValue);
                    if (result instanceof Promise) result.then(()=>setter(newValue)).catch((error)=>console.error(error));
                    else if (result == true) setter(newValue);
                }
            ];
        }
    }
}
function $0718d8712747089f$export$d184a47a971dd4b9(records = {}, stateValidator) {
    // Création d'un proxy contenant le stockage
    return new Proxy($89fec59bbef2bb37$export$98c71376181af907.init(records, stateValidator), {
        /**
     * Intercepte les opérations d'accès aux propriétés du stockage.
     * @param {Storage<RECORD>} target - L'objet cible auquel les opérations sont appliquées.
     * @param {string} key - La clé de l'état ou de la méthode accédée.
     * @param {any} receiver - L'objet Proxy qui intercepte l'opération.
     * @returns {any} La méthode ou la valeur de l'état correspondant à la clé.
     * @example
     * ```typescript
     * const storage = createStorage({ count: 0 });
     * console.log(storage.count[0].value); // affiche 0
     * storage.count ; // met à jour la valeur de count à 5
     * ```
    */ get (target, key, receiver) {
            // Retourne les méthodes du stockage
            if (target[key]) {
                if (typeof target[key] == "function") return target[key].bind(target);
                else return target[key];
            } else if (target.has(key)) return target.get(key);
            else return undefined;
        },
        /**
     * Intercepte les opérations de mise à jour des propriétés du stockage.
     * @param {Storage<RECORD>} target - L'objet cible auquel les opérations sont appliquées.
     * @param {string} key - La clé de l'état à mettre à jour.
     * @param {any} newValue - La nouvelle valeur à assigner à l'état.
     * @param {any} receiver - L'objet Proxy qui intercepte l'opération.
     * @returns {boolean} Un indicateur de succès de la mise à jour.
     * @example
     * ```typescript
     * const storage = createStorage({ count: 0 });
     * storage.count ; // met à jour la valeur de count à 5
     * console.log(storage.count[0].value); // affiche 5
     * ```
    */ set (target, key, newValue, receiver) {
            if (target.has(key)) {
                // Mise à jour du state contenant la valeur
                target.get(key)[1](newValue);
                return true;
            } else return undefined;
        }
    });
}

},{"@lithium-framework/state":"9pyA0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71R6Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_HUID", ()=>$149c1bd638913645$export$74e446f6456d826d);
parcelHelpers.export(exports, "uuid", ()=>$149c1bd638913645$export$31b40729666a4ae0);
var _getRandomValues = require("get-random-values");
var _getRandomValuesDefault = parcelHelpers.interopDefault(_getRandomValues);
// ===============================================
// https://www.npmjs.com/package/get-random-values
// ===============================================
class $149c1bd638913645$export$74e446f6456d826d extends String {
    /**
   * Obtient l'identifiant de composant en extrayant la première partie de l'UUID.
   * @returns L'identifiant de composant.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.componentId); // '123456789012'
   * ```
  */ get componentId() {
        return this.split("-")[0];
    }
    /**
   * Obtient la première section de l'UUID après division par '-'.
   * @returns La première section de l'UUID.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.section1); // '1234'
   * ```
  */ get section1() {
        return this.split("-")[1];
    }
    /**
   * Obtient la deuxième section de l'UUID après division par '-'.
   * @returns La deuxième section de l'UUID.
   * @example
   * ```typescipt
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.section2); // '5678'
   * ```
  */ get section2() {
        return this.split("-")[2];
    }
    /**
   * Obtient la troisième section de l'UUID après division par '-'.
   * @returns La troisième section de l'UUID.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.section3); // '90ab'
   * ```
  */ get section3() {
        return this.split("-")[3];
    }
    /**
   * Obtient l'identifiant de collection en extrayant la cinquième partie de l'UUID.
   * @returns L'identifiant de collection.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.collectionId); // 'abcdefabcdef'
   * ```
  */ get collectionId() {
        return this.split("-")[4];
    }
    /**
   * Obtient l'identifiant parent en concaténant les sections 1, 2 et 3.
   * @returns L'identifiant parent.
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  console.log(uuid.parentId); // '1234567890ab'
   * ```
  */ get parentId() {
        return [
            this.section1,
            this.section2,
            this.section3
        ].join("");
    }
    /**
   * Étend l'UUID hiérarchique avec des options personnalisées.
   * @param {HierarchicalUUIDOptions} [options] - Options pour personnaliser l'UUID.
   * @returns Un nouvel UUID hiérarchique (_HUID).
   * @example
   * ```typescript
   *  const uuid = new _HUID('123456789012-1234-5678-90ab-abcdefabcdef');
   *  const extendedUUID = uuid.extend({ parentId: '098765432109', collectionId: 'abcdefabcdef' });
   *  console.log(extendedUUID); // Un nouvel _HUID avec les sections mises à jour.
   * ```
  */ extend(options) {
        return $149c1bd638913645$export$31b40729666a4ae0.hv1({
            parentId: this.componentId,
            collectionId: this.collectionId
        });
    }
}
class $149c1bd638913645$export$31b40729666a4ae0 {
    /**
   * Obtient une valeur par défaut pour l'identifiant de composant.
   * @returns '000000000000' en tant que ComponentId.
  */ static get componentId() {
        return "000000000000";
    }
    /**
   * Obtient une valeur par défaut pour la première section de l'UUID.
   * @returns '0000' en tant que Segment.
  */ static get segment1() {
        return "0000";
    }
    /**
   * Obtient une valeur par défaut pour la deuxième section de l'UUID.
   * @returns '0000' en tant que Segment.
  */ static get segment2() {
        return "0000";
    }
    /**
   * Obtient une valeur par défaut pour la troisième section de l'UUID.
   * @returns '0000' en tant que Segment.
  */ static get segment3() {
        return "0000";
    }
    /**
   * Obtient une valeur par défaut pour l'identifiant de collection.
   * @returns '000000000000' en tant que CollectionId.
  */ static get collectionId() {
        return "000000000000";
    }
    /**
   * Obtient un UUID NIL (null) par défaut.
   * @returns L'UUID NIL sous forme de chaîne.
  */ static get NIL() {
        return new $149c1bd638913645$export$74e446f6456d826d(`${$149c1bd638913645$export$31b40729666a4ae0.componentId}-${$149c1bd638913645$export$31b40729666a4ae0.segment1}-${$149c1bd638913645$export$31b40729666a4ae0.segment2}-${$149c1bd638913645$export$31b40729666a4ae0.segment3}-${$149c1bd638913645$export$31b40729666a4ae0.collectionId}`);
    }
    /**
   * Encode une chaîne de longueur fixe en remplaçant certains caractères par des valeurs hexadécimales aléatoires.
   * @param chaine - Une chaîne de longueur fixe.
   * @returns Une chaîne de longueur fixe avec des valeurs hexadécimales aléatoires.
   * @example
   * ```typescript
   *  const encoded = uuid.encode('123456789012');
   *  console.log(encoded); // '1a2b3c4d5e6f'
   * ```
  */ static encode(chaine) {
        return chaine.replace(/[018]/g, (c)=>{
            return (c ^ (0, _getRandomValuesDefault.default)(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
    }
    /**
   * Génère un UUID de version 4 en utilisant des valeurs aléatoires.
   * @returns Un UUID de version 4 sous forme de chaîne.
   * @example
   * ```typescript
   *  const uuidV4 = uuid.v4();
   *  console.log(uuidV4); // Un UUID de version 4.
   * ```
  */ static v4() {
        return $149c1bd638913645$export$31b40729666a4ae0.NIL.replace(/[018]/g, (c)=>{
            return (c ^ (0, _getRandomValuesDefault.default)(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
    }
    /**
   * Génère un UUID hiérarchique en fonction des options fournies.
   * @param {HierarchicalUUIDOptions} [options] - Options pour personnaliser l'UUID.
   * @returns Un nouvel UUID hiérarchique (_HUID).
   * @example
   * ```typescript
   *  const hierarchicalUUID = uuid.hv1({ parentId: '123456789012', collectionId: 'abcdefabcdef' });
   *  console.log(hierarchicalUUID); // Un nouvel UUID hiérarchique (_HUID).
   * ```
  */ static hv1(options) {
        if (!options) options = {
            parentId: null,
            collectionId: null
        };
        let componentId = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.componentId);
        let segment1 = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.segment1);
        let segment2 = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.segment2);
        let segment3 = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.segment3);
        let collectionId = $149c1bd638913645$export$31b40729666a4ae0.encode($149c1bd638913645$export$31b40729666a4ae0.collectionId);
        if (options.parentId && options.parentId.length == 12) {
            segment1 = options.parentId.slice(0, 4);
            segment2 = options.parentId.slice(4, 8);
            segment3 = options.parentId.slice(8, 12);
        } else console.error("parentId.length exeded 12 char length.");
        if (options.collectionId) collectionId = options.collectionId;
        return new $149c1bd638913645$export$74e446f6456d826d(`${componentId}-${segment1}-${segment2}-${segment3}-${collectionId}`);
    }
}

},{"get-random-values":"5UMra","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UMra":[function(require,module,exports) {
/* eslint-disable no-var, operator-linebreak */ var window = require("797e9f70f698617e");
var nodeCrypto = require("d073664cee743241");
/**
 * @template {ArrayBufferView | null} T
 * @param {T} buf
 * @returns {T}
 */ function getRandomValues(buf) {
    if (window.crypto && window.crypto.getRandomValues) return window.crypto.getRandomValues(buf);
    if (typeof window.msCrypto === "object" && typeof window.msCrypto.getRandomValues === "function") return window.msCrypto.getRandomValues(buf);
    if (nodeCrypto.randomBytes) {
        if (!(buf instanceof Uint8Array)) throw new TypeError("expected Uint8Array");
        if (buf.length > 65536) {
            var e = new Error();
            // @ts-expect-error
            e.code = 22;
            e.message = "Failed to execute 'getRandomValues' on 'Crypto': The ArrayBufferView's byte length (" + buf.length + ") exceeds the " + "number of bytes of entropy available via this API (65536).";
            e.name = "QuotaExceededError";
            throw e;
        }
        var bytes = nodeCrypto.randomBytes(buf.length);
        buf.set(bytes);
        return buf;
    } else throw new Error("No secure random number generator available.");
}
module.exports = getRandomValues;

},{"797e9f70f698617e":"bfRSv","d073664cee743241":"jhUEF"}],"bfRSv":[function(require,module,exports) {
var global = arguments[3];
var win;
if (typeof window !== "undefined") win = window;
else if (typeof global !== "undefined") win = global;
else if (typeof self !== "undefined") win = self;
else win = {};
module.exports = win;

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"5L8xT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Routes", ()=>$149c1bd638913645$export$3565eb3d00ca5a74);
parcelHelpers.export(exports, "LithiumRouterElement", ()=>$149c1bd638913645$export$3072e114a4c84017);
parcelHelpers.export(exports, "RouteRecognizer", ()=>(0, _routeRecognizerDefault.default));
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _core = require("@lithium-framework/core");
var _routeRecognizer = require("route-recognizer");
var _routeRecognizerDefault = parcelHelpers.interopDefault(_routeRecognizer);
var _urlpatternPolyfill = require("urlpattern-polyfill");
if ("URLPattern" in globalThis == false) $149c1bd638913645$importAsync$aa75108a0d222c11.then(({ URLPattern: URLPattern })=>{
    Object.defineProperty(window, "URLPattern", {
        get () {
            return URLPattern;
        }
    });
});
class $149c1bd638913645$export$3565eb3d00ca5a74 extends (0, _routeRecognizerDefault.default) {
    constructor(router, routeConfig){
        super();
        routeConfig.forEach((route)=>{
            this.add([
                {
                    path: route.path,
                    handler: (params)=>{
                        (0, _core.render)(route.render, router, params);
                    }
                }
            ], route.name ? {
                as: route.name
            } : null);
        });
    }
}
class $149c1bd638913645$export$3072e114a4c84017 extends (0, _core.WebComponent) {
    get routes() {
        return new Proxy(this._routes, {
            get () {
                return undefined;
            },
            set () {
                return false;
            }
        });
    }
    get config() {
        return this._config;
    }
    set config(newConfig) {
        this._config = newConfig;
        this._routes = new $149c1bd638913645$export$3565eb3d00ca5a74(this, newConfig || []);
    }
    constructor(config){
        super();
        /* The line `type : 'pathname-router' | 'hash-router' = 'hash-router';` is defining a property `type`
  in the `Router` class with a type of string literal union `'pathname-router' | 'hash-router'`.
  This means that the `type` property can only have one of two specific string values:
  `'pathname-router'` or `'hash-router'`. */ this.type = "hash-router";
        /* `private _config:RouteConfig[] = [];` is defining a private property `_config` in the `Router`
  class with an initial value of an empty array of `RouteConfig` objects. This property is used to
  store the route configuration provided to the `Router` instance. */ this._config = [];
        /* The line `private _routes = new Routes(this, this._config || []);` is initializing a private
  property `_routes` in the `Router` class with a new instance of the `Routes` class. The `Routes`
  class is responsible for constructing routes based on the provided `routeConfig` array. */ this._routes = new $149c1bd638913645$export$3565eb3d00ca5a74(this, this._config || []);
        this.config = config;
    }
    outlet() {
        this.clear();
        let url = this.type == "pathname-router" ? this.pathname : this.hash;
        let result = this._routes.recognize(url);
        if (result) Array.from({
            length: result.length
        }, (i, iterator)=>{
            let route = result[iterator];
            if (route) {
                let handler = route.handler;
                handler(route.params);
            }
        });
    }
    onHashChange(event) {
        this.outlet();
    }
    normalizeHashLocation(hash) {
        return hash.replace("#", "");
    }
    get pathname() {
        return window.location.pathname;
    }
    get hash() {
        return this.normalizeHashLocation(window.location.hash);
    }
    clear() {
        this.childNodes.forEach((element)=>{
            element.remove();
        });
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.type == "hash-router") window.addEventListener("hashchange", this.onHashChange.bind(this));
        this.outlet();
        if (!window.location.hash) window.location.hash = "/";
    }
}
$149c1bd638913645$export$3072e114a4c84017 = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "lithium-router",
        template: (0, _core.html)`<slot></slot>`
    })
], $149c1bd638913645$export$3072e114a4c84017);

},{"@swc/helpers/_/_ts_decorate":"2tUj3","@lithium-framework/core":"7dAnV","route-recognizer":"7jE0E","urlpattern-polyfill":"Y5KoR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2tUj3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", ()=>(0, _tslib.__decorate));
var _tslib = require("tslib");

},{"tslib":"1m8XD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1m8XD":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
exports.default = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jE0E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var createObject = Object.create;
function createMap() {
    var map = createObject(null);
    map["__"] = undefined;
    delete map["__"];
    return map;
}
var Target = function Target(path, matcher, delegate) {
    this.path = path;
    this.matcher = matcher;
    this.delegate = delegate;
};
Target.prototype.to = function to(target, callback) {
    var delegate = this.delegate;
    if (delegate && delegate.willAddRoute) target = delegate.willAddRoute(this.matcher.target, target);
    this.matcher.add(this.path, target);
    if (callback) {
        if (callback.length === 0) throw new Error("You must have an argument in the function passed to `to`");
        this.matcher.addChild(this.path, target, callback, this.delegate);
    }
};
var Matcher = function Matcher(target) {
    this.routes = createMap();
    this.children = createMap();
    this.target = target;
};
Matcher.prototype.add = function add(path, target) {
    this.routes[path] = target;
};
Matcher.prototype.addChild = function addChild(path, target, callback, delegate) {
    var matcher = new Matcher(target);
    this.children[path] = matcher;
    var match = generateMatch(path, matcher, delegate);
    if (delegate && delegate.contextEntered) delegate.contextEntered(target, match);
    callback(match);
};
function generateMatch(startingPath, matcher, delegate) {
    function match(path, callback) {
        var fullPath = startingPath + path;
        if (callback) callback(generateMatch(fullPath, matcher, delegate));
        else return new Target(fullPath, matcher, delegate);
    }
    return match;
}
function addRoute(routeArray, path, handler) {
    var len = 0;
    for(var i = 0; i < routeArray.length; i++)len += routeArray[i].path.length;
    path = path.substr(len);
    var route = {
        path: path,
        handler: handler
    };
    routeArray.push(route);
}
function eachRoute(baseRoute, matcher, callback, binding) {
    var routes = matcher.routes;
    var paths = Object.keys(routes);
    for(var i = 0; i < paths.length; i++){
        var path = paths[i];
        var routeArray = baseRoute.slice();
        addRoute(routeArray, path, routes[path]);
        var nested = matcher.children[path];
        if (nested) eachRoute(routeArray, nested, callback, binding);
        else callback.call(binding, routeArray);
    }
}
var map = function(callback, addRouteCallback) {
    var matcher = new Matcher();
    callback(generateMatch("", matcher, this.delegate));
    eachRoute([], matcher, function(routes) {
        if (addRouteCallback) addRouteCallback(this, routes);
        else this.add(routes);
    }, this);
};
// Normalizes percent-encoded values in `path` to upper-case and decodes percent-encoded
// values that are not reserved (i.e., unicode characters, emoji, etc). The reserved
// chars are "/" and "%".
// Safe to call multiple times on the same path.
// Normalizes percent-encoded values in `path` to upper-case and decodes percent-encoded
function normalizePath(path) {
    return path.split("/").map(normalizeSegment).join("/");
}
// We want to ensure the characters "%" and "/" remain in percent-encoded
// form when normalizing paths, so replace them with their encoded form after
// decoding the rest of the path
var SEGMENT_RESERVED_CHARS = /%|\//g;
function normalizeSegment(segment) {
    if (segment.length < 3 || segment.indexOf("%") === -1) return segment;
    return decodeURIComponent(segment).replace(SEGMENT_RESERVED_CHARS, encodeURIComponent);
}
// We do not want to encode these characters when generating dynamic path segments
// See https://tools.ietf.org/html/rfc3986#section-3.3
// sub-delims: "!", "$", "&", "'", "(", ")", "*", "+", ",", ";", "="
// others allowed by RFC 3986: ":", "@"
//
// First encode the entire path segment, then decode any of the encoded special chars.
//
// The chars "!", "'", "(", ")", "*" do not get changed by `encodeURIComponent`,
// so the possible encoded chars are:
// ['%24', '%26', '%2B', '%2C', '%3B', '%3D', '%3A', '%40'].
var PATH_SEGMENT_ENCODINGS = /%(?:2(?:4|6|B|C)|3(?:B|D|A)|40)/g;
function encodePathSegment(str) {
    return encodeURIComponent(str).replace(PATH_SEGMENT_ENCODINGS, decodeURIComponent);
}
var escapeRegex = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g;
var isArray = Array.isArray;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function getParam(params, key) {
    if (typeof params !== "object" || params === null) throw new Error("You must pass an object as the second argument to `generate`.");
    if (!hasOwnProperty.call(params, key)) throw new Error("You must provide param `" + key + "` to `generate`.");
    var value = params[key];
    var str = typeof value === "string" ? value : "" + value;
    if (str.length === 0) throw new Error("You must provide a param `" + key + "`.");
    return str;
}
var eachChar = [];
eachChar[0 /* Static */ ] = function(segment, currentState) {
    var state = currentState;
    var value = segment.value;
    for(var i = 0; i < value.length; i++){
        var ch = value.charCodeAt(i);
        state = state.put(ch, false, false);
    }
    return state;
};
eachChar[1 /* Dynamic */ ] = function(_, currentState) {
    return currentState.put(47 /* SLASH */ , true, true);
};
eachChar[2 /* Star */ ] = function(_, currentState) {
    return currentState.put(-1 /* ANY */ , false, true);
};
eachChar[4 /* Epsilon */ ] = function(_, currentState) {
    return currentState;
};
var regex = [];
regex[0 /* Static */ ] = function(segment) {
    return segment.value.replace(escapeRegex, "\\$1");
};
regex[1 /* Dynamic */ ] = function() {
    return "([^/]+)";
};
regex[2 /* Star */ ] = function() {
    return "(.+)";
};
regex[4 /* Epsilon */ ] = function() {
    return "";
};
var generate = [];
generate[0 /* Static */ ] = function(segment) {
    return segment.value;
};
generate[1 /* Dynamic */ ] = function(segment, params) {
    var value = getParam(params, segment.value);
    if (RouteRecognizer.ENCODE_AND_DECODE_PATH_SEGMENTS) return encodePathSegment(value);
    else return value;
};
generate[2 /* Star */ ] = function(segment, params) {
    return getParam(params, segment.value);
};
generate[4 /* Epsilon */ ] = function() {
    return "";
};
var EmptyObject = Object.freeze({});
var EmptyArray = Object.freeze([]);
// The `names` will be populated with the paramter name for each dynamic/star
// segment. `shouldDecodes` will be populated with a boolean for each dyanamic/star
// segment, indicating whether it should be decoded during recognition.
function parse(segments, route, types) {
    // normalize route as not starting with a "/". Recognition will
    // also normalize.
    if (route.length > 0 && route.charCodeAt(0) === 47 /* SLASH */ ) route = route.substr(1);
    var parts = route.split("/");
    var names = undefined;
    var shouldDecodes = undefined;
    for(var i = 0; i < parts.length; i++){
        var part = parts[i];
        var flags = 0;
        var type = 0;
        if (part === "") type = 4 /* Epsilon */ ;
        else if (part.charCodeAt(0) === 58 /* COLON */ ) type = 1 /* Dynamic */ ;
        else if (part.charCodeAt(0) === 42 /* STAR */ ) type = 2 /* Star */ ;
        else type = 0 /* Static */ ;
        flags = 2 << type;
        if (flags & 12 /* Named */ ) {
            part = part.slice(1);
            names = names || [];
            names.push(part);
            shouldDecodes = shouldDecodes || [];
            shouldDecodes.push((flags & 4 /* Decoded */ ) !== 0);
        }
        if (flags & 14 /* Counted */ ) types[type]++;
        segments.push({
            type: type,
            value: normalizeSegment(part)
        });
    }
    return {
        names: names || EmptyArray,
        shouldDecodes: shouldDecodes || EmptyArray
    };
}
function isEqualCharSpec(spec, char, negate) {
    return spec.char === char && spec.negate === negate;
}
// A State has a character specification and (`charSpec`) and a list of possible
// subsequent states (`nextStates`).
//
// If a State is an accepting state, it will also have several additional
// properties:
//
// * `regex`: A regular expression that is used to extract parameters from paths
//   that reached this accepting state.
// * `handlers`: Information on how to convert the list of captures into calls
//   to registered handlers with the specified parameters
// * `types`: How many static, dynamic or star segments in this route. Used to
//   decide which route to use if multiple registered routes match a path.
//
// Currently, State is implemented naively by looping over `nextStates` and
// comparing a character specification against a character. A more efficient
// implementation would use a hash of keys pointing at one or more next states.
var State = function State(states, id, char, negate, repeat) {
    this.states = states;
    this.id = id;
    this.char = char;
    this.negate = negate;
    this.nextStates = repeat ? id : null;
    this.pattern = "";
    this._regex = undefined;
    this.handlers = undefined;
    this.types = undefined;
};
State.prototype.regex = function regex$1() {
    if (!this._regex) this._regex = new RegExp(this.pattern);
    return this._regex;
};
State.prototype.get = function get(char, negate) {
    var this$1 = this;
    var nextStates = this.nextStates;
    if (nextStates === null) return;
    if (isArray(nextStates)) for(var i = 0; i < nextStates.length; i++){
        var child = this$1.states[nextStates[i]];
        if (isEqualCharSpec(child, char, negate)) return child;
    }
    else {
        var child$1 = this.states[nextStates];
        if (isEqualCharSpec(child$1, char, negate)) return child$1;
    }
};
State.prototype.put = function put(char, negate, repeat) {
    var state;
    // If the character specification already exists in a child of the current
    // state, just return that state.
    if (state = this.get(char, negate)) return state;
    // Make a new state for the character spec
    var states = this.states;
    state = new State(states, states.length, char, negate, repeat);
    states[states.length] = state;
    // Insert the new state as a child of the current state
    if (this.nextStates == null) this.nextStates = state.id;
    else if (isArray(this.nextStates)) this.nextStates.push(state.id);
    else this.nextStates = [
        this.nextStates,
        state.id
    ];
    // Return the new state
    return state;
};
// Find a list of child states matching the next character
State.prototype.match = function match(ch) {
    var this$1 = this;
    var nextStates = this.nextStates;
    if (!nextStates) return [];
    var returned = [];
    if (isArray(nextStates)) for(var i = 0; i < nextStates.length; i++){
        var child = this$1.states[nextStates[i]];
        if (isMatch(child, ch)) returned.push(child);
    }
    else {
        var child$1 = this.states[nextStates];
        if (isMatch(child$1, ch)) returned.push(child$1);
    }
    return returned;
};
function isMatch(spec, char) {
    return spec.negate ? spec.char !== char && spec.char !== -1 /* ANY */  : spec.char === char || spec.char === -1 /* ANY */ ;
}
// This is a somewhat naive strategy, but should work in a lot of cases
// A better strategy would properly resolve /posts/:id/new and /posts/edit/:id.
//
// This strategy generally prefers more static and less dynamic matching.
// Specifically, it
//
//  * prefers fewer stars to more, then
//  * prefers using stars for less of the match to more, then
//  * prefers fewer dynamic segments to more, then
//  * prefers more static segments to more
function sortSolutions(states) {
    return states.sort(function(a, b) {
        var ref = a.types || [
            0,
            0,
            0
        ];
        var astatics = ref[0];
        var adynamics = ref[1];
        var astars = ref[2];
        var ref$1 = b.types || [
            0,
            0,
            0
        ];
        var bstatics = ref$1[0];
        var bdynamics = ref$1[1];
        var bstars = ref$1[2];
        if (astars !== bstars) return astars - bstars;
        if (astars) {
            if (astatics !== bstatics) return bstatics - astatics;
            if (adynamics !== bdynamics) return bdynamics - adynamics;
        }
        if (adynamics !== bdynamics) return adynamics - bdynamics;
        if (astatics !== bstatics) return bstatics - astatics;
        return 0;
    });
}
function recognizeChar(states, ch) {
    var nextStates = [];
    for(var i = 0, l = states.length; i < l; i++){
        var state = states[i];
        nextStates = nextStates.concat(state.match(ch));
    }
    return nextStates;
}
var RecognizeResults = function RecognizeResults(queryParams) {
    this.length = 0;
    this.queryParams = queryParams || {};
};
RecognizeResults.prototype.splice = Array.prototype.splice;
RecognizeResults.prototype.slice = Array.prototype.slice;
RecognizeResults.prototype.push = Array.prototype.push;
function findHandler(state, originalPath, queryParams) {
    var handlers = state.handlers;
    var regex = state.regex();
    if (!regex || !handlers) throw new Error("state not initialized");
    var captures = originalPath.match(regex);
    var currentCapture = 1;
    var result = new RecognizeResults(queryParams);
    result.length = handlers.length;
    for(var i = 0; i < handlers.length; i++){
        var handler = handlers[i];
        var names = handler.names;
        var shouldDecodes = handler.shouldDecodes;
        var params = EmptyObject;
        var isDynamic = false;
        if (names !== EmptyArray && shouldDecodes !== EmptyArray) for(var j = 0; j < names.length; j++){
            isDynamic = true;
            var name = names[j];
            var capture = captures && captures[currentCapture++];
            if (params === EmptyObject) params = {};
            if (RouteRecognizer.ENCODE_AND_DECODE_PATH_SEGMENTS && shouldDecodes[j]) params[name] = capture && decodeURIComponent(capture);
            else params[name] = capture;
        }
        result[i] = {
            handler: handler.handler,
            params: params,
            isDynamic: isDynamic
        };
    }
    return result;
}
function decodeQueryParamPart(part) {
    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
    part = part.replace(/\+/gm, "%20");
    var result;
    try {
        result = decodeURIComponent(part);
    } catch (error) {
        result = "";
    }
    return result;
}
var RouteRecognizer = function RouteRecognizer() {
    this.names = createMap();
    var states = [];
    var state = new State(states, 0, -1 /* ANY */ , true, false);
    states[0] = state;
    this.states = states;
    this.rootState = state;
};
RouteRecognizer.prototype.add = function add(routes, options) {
    var currentState = this.rootState;
    var pattern = "^";
    var types = [
        0,
        0,
        0
    ];
    var handlers = new Array(routes.length);
    var allSegments = [];
    var isEmpty = true;
    var j = 0;
    for(var i = 0; i < routes.length; i++){
        var route = routes[i];
        var ref = parse(allSegments, route.path, types);
        var names = ref.names;
        var shouldDecodes = ref.shouldDecodes;
        // preserve j so it points to the start of newly added segments
        for(; j < allSegments.length; j++){
            var segment = allSegments[j];
            if (segment.type === 4 /* Epsilon */ ) continue;
            isEmpty = false;
            // Add a "/" for the new segment
            currentState = currentState.put(47 /* SLASH */ , false, false);
            pattern += "/";
            // Add a representation of the segment to the NFA and regex
            currentState = eachChar[segment.type](segment, currentState);
            pattern += regex[segment.type](segment);
        }
        handlers[i] = {
            handler: route.handler,
            names: names,
            shouldDecodes: shouldDecodes
        };
    }
    if (isEmpty) {
        currentState = currentState.put(47 /* SLASH */ , false, false);
        pattern += "/";
    }
    currentState.handlers = handlers;
    currentState.pattern = pattern + "$";
    currentState.types = types;
    var name;
    if (typeof options === "object" && options !== null && options.as) name = options.as;
    if (name) // if (this.names[name]) {
    //   throw new Error("You may not add a duplicate route named `" + name + "`.");
    // }
    this.names[name] = {
        segments: allSegments,
        handlers: handlers
    };
};
RouteRecognizer.prototype.handlersFor = function handlersFor(name) {
    var route = this.names[name];
    if (!route) throw new Error("There is no route named " + name);
    var result = new Array(route.handlers.length);
    for(var i = 0; i < route.handlers.length; i++){
        var handler = route.handlers[i];
        result[i] = handler;
    }
    return result;
};
RouteRecognizer.prototype.hasRoute = function hasRoute(name) {
    return !!this.names[name];
};
RouteRecognizer.prototype.generate = function generate$1(name, params) {
    var route = this.names[name];
    var output = "";
    if (!route) throw new Error("There is no route named " + name);
    var segments = route.segments;
    for(var i = 0; i < segments.length; i++){
        var segment = segments[i];
        if (segment.type === 4 /* Epsilon */ ) continue;
        output += "/";
        output += generate[segment.type](segment, params);
    }
    if (output.charAt(0) !== "/") output = "/" + output;
    if (params && params.queryParams) output += this.generateQueryString(params.queryParams);
    return output;
};
RouteRecognizer.prototype.generateQueryString = function generateQueryString(params) {
    var pairs = [];
    var keys = Object.keys(params);
    keys.sort();
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = params[key];
        if (value == null) continue;
        var pair = encodeURIComponent(key);
        if (isArray(value)) for(var j = 0; j < value.length; j++){
            var arrayPair = key + "[]" + "=" + encodeURIComponent(value[j]);
            pairs.push(arrayPair);
        }
        else {
            pair += "=" + encodeURIComponent(value);
            pairs.push(pair);
        }
    }
    if (pairs.length === 0) return "";
    return "?" + pairs.join("&");
};
RouteRecognizer.prototype.parseQueryString = function parseQueryString(queryString) {
    var pairs = queryString.split("&");
    var queryParams = {};
    for(var i = 0; i < pairs.length; i++){
        var pair = pairs[i].split("="), key = decodeQueryParamPart(pair[0]), keyLength = key.length, isArray = false, value = void 0;
        if (pair.length === 1) value = "true";
        else {
            // Handle arrays
            if (keyLength > 2 && key.slice(keyLength - 2) === "[]") {
                isArray = true;
                key = key.slice(0, keyLength - 2);
                if (!queryParams[key]) queryParams[key] = [];
            }
            value = pair[1] ? decodeQueryParamPart(pair[1]) : "";
        }
        if (isArray) queryParams[key].push(value);
        else queryParams[key] = value;
    }
    return queryParams;
};
RouteRecognizer.prototype.recognize = function recognize(path) {
    var results;
    var states = [
        this.rootState
    ];
    var queryParams = {};
    var isSlashDropped = false;
    var hashStart = path.indexOf("#");
    if (hashStart !== -1) path = path.substr(0, hashStart);
    var queryStart = path.indexOf("?");
    if (queryStart !== -1) {
        var queryString = path.substr(queryStart + 1, path.length);
        path = path.substr(0, queryStart);
        queryParams = this.parseQueryString(queryString);
    }
    if (path.charAt(0) !== "/") path = "/" + path;
    var originalPath = path;
    if (RouteRecognizer.ENCODE_AND_DECODE_PATH_SEGMENTS) path = normalizePath(path);
    else {
        path = decodeURI(path);
        originalPath = decodeURI(originalPath);
    }
    var pathLen = path.length;
    if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
        path = path.substr(0, pathLen - 1);
        originalPath = originalPath.substr(0, originalPath.length - 1);
        isSlashDropped = true;
    }
    for(var i = 0; i < path.length; i++){
        states = recognizeChar(states, path.charCodeAt(i));
        if (!states.length) break;
    }
    var solutions = [];
    for(var i$1 = 0; i$1 < states.length; i$1++)if (states[i$1].handlers) solutions.push(states[i$1]);
    states = sortSolutions(solutions);
    var state = solutions[0];
    if (state && state.handlers) {
        // if a trailing slash was dropped and a star segment is the last segment
        // specified, put the trailing slash back
        if (isSlashDropped && state.pattern && state.pattern.slice(-5) === "(.+)$") originalPath = originalPath + "/";
        results = findHandler(state, originalPath, queryParams);
    }
    return results;
};
RouteRecognizer.VERSION = "0.3.4";
// Set to false to opt-out of encoding and decoding path segments.
// See https://github.com/tildeio/route-recognizer/pull/55
RouteRecognizer.ENCODE_AND_DECODE_PATH_SEGMENTS = true;
RouteRecognizer.Normalizer = {
    normalizeSegment: normalizeSegment,
    normalizePath: normalizePath,
    encodePathSegment: encodePathSegment
};
RouteRecognizer.prototype.map = map;
exports.default = RouteRecognizer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y5KoR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "URLPattern", ()=>(0, _urlpatternJs.URLPattern));
var _urlpatternJs = require("./dist/urlpattern.js");
if (!globalThis.URLPattern) globalThis.URLPattern = (0, _urlpatternJs.URLPattern);

},{"./dist/urlpattern.js":"fMyQw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fMyQw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "URLPattern", ()=>me);
var R = class {
    type = 3;
    name = "";
    prefix = "";
    value = "";
    suffix = "";
    modifier = 3;
    constructor(t, r, n, o, c, l){
        this.type = t, this.name = r, this.prefix = n, this.value = o, this.suffix = c, this.modifier = l;
    }
    hasCustomName() {
        return this.name !== "" && typeof this.name != "number";
    }
}, be = /[$_\p{ID_Start}]/u, Pe = /[$_\u200C\u200D\p{ID_Continue}]/u, M = ".*";
function Re(e, t) {
    return (t ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(e);
}
function v(e, t = !1) {
    let r = [], n = 0;
    for(; n < e.length;){
        let o = e[n], c = function(l) {
            if (!t) throw new TypeError(l);
            r.push({
                type: "INVALID_CHAR",
                index: n,
                value: e[n++]
            });
        };
        if (o === "*") {
            r.push({
                type: "ASTERISK",
                index: n,
                value: e[n++]
            });
            continue;
        }
        if (o === "+" || o === "?") {
            r.push({
                type: "OTHER_MODIFIER",
                index: n,
                value: e[n++]
            });
            continue;
        }
        if (o === "\\") {
            r.push({
                type: "ESCAPED_CHAR",
                index: n++,
                value: e[n++]
            });
            continue;
        }
        if (o === "{") {
            r.push({
                type: "OPEN",
                index: n,
                value: e[n++]
            });
            continue;
        }
        if (o === "}") {
            r.push({
                type: "CLOSE",
                index: n,
                value: e[n++]
            });
            continue;
        }
        if (o === ":") {
            let l = "", s = n + 1;
            for(; s < e.length;){
                let i = e.substr(s, 1);
                if (s === n + 1 && be.test(i) || s !== n + 1 && Pe.test(i)) {
                    l += e[s++];
                    continue;
                }
                break;
            }
            if (!l) {
                c(`Missing parameter name at ${n}`);
                continue;
            }
            r.push({
                type: "NAME",
                index: n,
                value: l
            }), n = s;
            continue;
        }
        if (o === "(") {
            let l = 1, s = "", i = n + 1, a = !1;
            if (e[i] === "?") {
                c(`Pattern cannot start with "?" at ${i}`);
                continue;
            }
            for(; i < e.length;){
                if (!Re(e[i], !1)) {
                    c(`Invalid character '${e[i]}' at ${i}.`), a = !0;
                    break;
                }
                if (e[i] === "\\") {
                    s += e[i++] + e[i++];
                    continue;
                }
                if (e[i] === ")") {
                    if (l--, l === 0) {
                        i++;
                        break;
                    }
                } else if (e[i] === "(" && (l++, e[i + 1] !== "?")) {
                    c(`Capturing groups are not allowed at ${i}`), a = !0;
                    break;
                }
                s += e[i++];
            }
            if (a) continue;
            if (l) {
                c(`Unbalanced pattern at ${n}`);
                continue;
            }
            if (!s) {
                c(`Missing pattern at ${n}`);
                continue;
            }
            r.push({
                type: "REGEX",
                index: n,
                value: s
            }), n = i;
            continue;
        }
        r.push({
            type: "CHAR",
            index: n,
            value: e[n++]
        });
    }
    return r.push({
        type: "END",
        index: n,
        value: ""
    }), r;
}
function D(e, t = {}) {
    let r = v(e);
    t.delimiter ??= "/#?", t.prefixes ??= "./";
    let n = `[^${S(t.delimiter)}]+?`, o = [], c = 0, l = 0, s = "", i = new Set, a = (h)=>{
        if (l < r.length && r[l].type === h) return r[l++].value;
    }, f = ()=>a("OTHER_MODIFIER") ?? a("ASTERISK"), d = (h)=>{
        let u = a(h);
        if (u !== void 0) return u;
        let { type: p, index: A } = r[l];
        throw new TypeError(`Unexpected ${p} at ${A}, expected ${h}`);
    }, T = ()=>{
        let h = "", u;
        for(; u = a("CHAR") ?? a("ESCAPED_CHAR");)h += u;
        return h;
    }, Se = (h)=>h, L = t.encodePart || Se, I = "", U = (h)=>{
        I += h;
    }, $ = ()=>{
        I.length && (o.push(new R(3, "", "", L(I), "", 3)), I = "");
    }, V = (h, u, p, A, Y)=>{
        let g = 3;
        switch(Y){
            case "?":
                g = 1;
                break;
            case "*":
                g = 0;
                break;
            case "+":
                g = 2;
                break;
        }
        if (!u && !p && g === 3) {
            U(h);
            return;
        }
        if ($(), !u && !p) {
            if (!h) return;
            o.push(new R(3, "", "", L(h), "", g));
            return;
        }
        let m;
        p ? p === "*" ? m = M : m = p : m = n;
        let O = 2;
        m === n ? (O = 1, m = "") : m === M && (O = 0, m = "");
        let P;
        if (u ? P = u : p && (P = c++), i.has(P)) throw new TypeError(`Duplicate name '${P}'.`);
        i.add(P), o.push(new R(O, P, L(h), m, L(A), g));
    };
    for(; l < r.length;){
        let h = a("CHAR"), u = a("NAME"), p = a("REGEX");
        if (!u && !p && (p = a("ASTERISK")), u || p) {
            let g = h ?? "";
            t.prefixes.indexOf(g) === -1 && (U(g), g = ""), $();
            let m = f();
            V(g, u, p, "", m);
            continue;
        }
        let A = h ?? a("ESCAPED_CHAR");
        if (A) {
            U(A);
            continue;
        }
        if (a("OPEN")) {
            let g = T(), m = a("NAME"), O = a("REGEX");
            !m && !O && (O = a("ASTERISK"));
            let P = T();
            d("CLOSE");
            let xe = f();
            V(g, m, O, P, xe);
            continue;
        }
        $(), d("END");
    }
    return o;
}
function S(e) {
    return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
function X(e) {
    return e && e.ignoreCase ? "ui" : "u";
}
function Z(e, t, r) {
    return F(D(e, r), t, r);
}
function k(e) {
    switch(e){
        case 0:
            return "*";
        case 1:
            return "?";
        case 2:
            return "+";
        case 3:
            return "";
    }
}
function F(e, t, r = {}) {
    r.delimiter ??= "/#?", r.prefixes ??= "./", r.sensitive ??= !1, r.strict ??= !1, r.end ??= !0, r.start ??= !0, r.endsWith = "";
    let n = r.start ? "^" : "";
    for (let s of e){
        if (s.type === 3) {
            s.modifier === 3 ? n += S(s.value) : n += `(?:${S(s.value)})${k(s.modifier)}`;
            continue;
        }
        t && t.push(s.name);
        let i = `[^${S(r.delimiter)}]+?`, a = s.value;
        if (s.type === 1 ? a = i : s.type === 0 && (a = M), !s.prefix.length && !s.suffix.length) {
            s.modifier === 3 || s.modifier === 1 ? n += `(${a})${k(s.modifier)}` : n += `((?:${a})${k(s.modifier)})`;
            continue;
        }
        if (s.modifier === 3 || s.modifier === 1) {
            n += `(?:${S(s.prefix)}(${a})${S(s.suffix)})`, n += k(s.modifier);
            continue;
        }
        n += `(?:${S(s.prefix)}`, n += `((?:${a})(?:`, n += S(s.suffix), n += S(s.prefix), n += `(?:${a}))*)${S(s.suffix)})`, s.modifier === 0 && (n += "?");
    }
    let o = `[${S(r.endsWith)}]|$`, c = `[${S(r.delimiter)}]`;
    if (r.end) return r.strict || (n += `${c}?`), r.endsWith.length ? n += `(?=${o})` : n += "$", new RegExp(n, X(r));
    r.strict || (n += `(?:${c}(?=${o}))?`);
    let l = !1;
    if (e.length) {
        let s = e[e.length - 1];
        s.type === 3 && s.modifier === 3 && (l = r.delimiter.indexOf(s) > -1);
    }
    return l || (n += `(?=${c}|${o})`), new RegExp(n, X(r));
}
var x = {
    delimiter: "",
    prefixes: "",
    sensitive: !0,
    strict: !0
}, B = {
    delimiter: ".",
    prefixes: "",
    sensitive: !0,
    strict: !0
}, q = {
    delimiter: "/",
    prefixes: "/",
    sensitive: !0,
    strict: !0
};
function J(e, t) {
    return e.length ? e[0] === "/" ? !0 : !t || e.length < 2 ? !1 : (e[0] == "\\" || e[0] == "{") && e[1] == "/" : !1;
}
function Q(e, t) {
    return e.startsWith(t) ? e.substring(t.length, e.length) : e;
}
function Ee(e, t) {
    return e.endsWith(t) ? e.substr(0, e.length - t.length) : e;
}
function W(e) {
    return !e || e.length < 2 ? !1 : e[0] === "[" || (e[0] === "\\" || e[0] === "{") && e[1] === "[";
}
var ee = [
    "ftp",
    "file",
    "http",
    "https",
    "ws",
    "wss"
];
function N(e) {
    if (!e) return !0;
    for (let t of ee)if (e.test(t)) return !0;
    return !1;
}
function te(e, t) {
    if (e = Q(e, "#"), t || e === "") return e;
    let r = new URL("https://example.com");
    return r.hash = e, r.hash ? r.hash.substring(1, r.hash.length) : "";
}
function re(e, t) {
    if (e = Q(e, "?"), t || e === "") return e;
    let r = new URL("https://example.com");
    return r.search = e, r.search ? r.search.substring(1, r.search.length) : "";
}
function ne(e, t) {
    return t || e === "" ? e : W(e) ? j(e) : z(e);
}
function se(e, t) {
    if (t || e === "") return e;
    let r = new URL("https://example.com");
    return r.password = e, r.password;
}
function ie(e, t) {
    if (t || e === "") return e;
    let r = new URL("https://example.com");
    return r.username = e, r.username;
}
function ae(e, t, r) {
    if (r || e === "") return e;
    if (t && !ee.includes(t)) return new URL(`${t}:${e}`).pathname;
    let n = e[0] == "/";
    return e = new URL(n ? e : "/-" + e, "https://example.com").pathname, n || (e = e.substring(2, e.length)), e;
}
function oe(e, t, r) {
    return _(t) === e && (e = ""), r || e === "" ? e : K(e);
}
function ce(e, t) {
    return e = Ee(e, ":"), t || e === "" ? e : y(e);
}
function _(e) {
    switch(e){
        case "ws":
        case "http":
            return "80";
        case "wws":
        case "https":
            return "443";
        case "ftp":
            return "21";
        default:
            return "";
    }
}
function y(e) {
    if (e === "") return e;
    if (/^[-+.A-Za-z0-9]*$/.test(e)) return e.toLowerCase();
    throw new TypeError(`Invalid protocol '${e}'.`);
}
function le(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.username = e, t.username;
}
function fe(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.password = e, t.password;
}
function z(e) {
    if (e === "") return e;
    if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(e)) throw new TypeError(`Invalid hostname '${e}'`);
    let t = new URL("https://example.com");
    return t.hostname = e, t.hostname;
}
function j(e) {
    if (e === "") return e;
    if (/[^0-9a-fA-F[\]:]/g.test(e)) throw new TypeError(`Invalid IPv6 hostname '${e}'`);
    return e.toLowerCase();
}
function K(e) {
    if (e === "" || /^[0-9]*$/.test(e) && parseInt(e) <= 65535) return e;
    throw new TypeError(`Invalid port '${e}'.`);
}
function he(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.pathname = e[0] !== "/" ? "/-" + e : e, e[0] !== "/" ? t.pathname.substring(2, t.pathname.length) : t.pathname;
}
function ue(e) {
    return e === "" ? e : new URL(`data:${e}`).pathname;
}
function de(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.search = e, t.search.substring(1, t.search.length);
}
function pe(e) {
    if (e === "") return e;
    let t = new URL("https://example.com");
    return t.hash = e, t.hash.substring(1, t.hash.length);
}
var H = class {
    #i;
    #n = [];
    #t = {};
    #e = 0;
    #s = 1;
    #l = 0;
    #o = 0;
    #d = 0;
    #p = 0;
    #g = !1;
    constructor(t){
        this.#i = t;
    }
    get result() {
        return this.#t;
    }
    parse() {
        for(this.#n = v(this.#i, !0); this.#e < this.#n.length; this.#e += this.#s){
            if (this.#s = 1, this.#n[this.#e].type === "END") {
                if (this.#o === 0) {
                    this.#b(), this.#f() ? this.#r(9, 1) : this.#h() ? this.#r(8, 1) : this.#r(7, 0);
                    continue;
                } else if (this.#o === 2) {
                    this.#u(5);
                    continue;
                }
                this.#r(10, 0);
                break;
            }
            if (this.#d > 0) {
                if (this.#A()) this.#d -= 1;
                else continue;
            }
            if (this.#T()) {
                this.#d += 1;
                continue;
            }
            switch(this.#o){
                case 0:
                    this.#P() && this.#u(1);
                    break;
                case 1:
                    if (this.#P()) {
                        this.#C();
                        let t = 7, r = 1;
                        this.#E() ? (t = 2, r = 3) : this.#g && (t = 2), this.#r(t, r);
                    }
                    break;
                case 2:
                    this.#S() ? this.#u(3) : (this.#x() || this.#h() || this.#f()) && this.#u(5);
                    break;
                case 3:
                    this.#O() ? this.#r(4, 1) : this.#S() && this.#r(5, 1);
                    break;
                case 4:
                    this.#S() && this.#r(5, 1);
                    break;
                case 5:
                    this.#y() ? this.#p += 1 : this.#w() && (this.#p -= 1), this.#k() && !this.#p ? this.#r(6, 1) : this.#x() ? this.#r(7, 0) : this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
                    break;
                case 6:
                    this.#x() ? this.#r(7, 0) : this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
                    break;
                case 7:
                    this.#h() ? this.#r(8, 1) : this.#f() && this.#r(9, 1);
                    break;
                case 8:
                    this.#f() && this.#r(9, 1);
                    break;
                case 9:
                    break;
                case 10:
                    break;
            }
        }
        this.#t.hostname !== void 0 && this.#t.port === void 0 && (this.#t.port = "");
    }
    #r(t, r) {
        switch(this.#o){
            case 0:
                break;
            case 1:
                this.#t.protocol = this.#c();
                break;
            case 2:
                break;
            case 3:
                this.#t.username = this.#c();
                break;
            case 4:
                this.#t.password = this.#c();
                break;
            case 5:
                this.#t.hostname = this.#c();
                break;
            case 6:
                this.#t.port = this.#c();
                break;
            case 7:
                this.#t.pathname = this.#c();
                break;
            case 8:
                this.#t.search = this.#c();
                break;
            case 9:
                this.#t.hash = this.#c();
                break;
            case 10:
                break;
        }
        this.#o !== 0 && t !== 10 && ([
            1,
            2,
            3,
            4
        ].includes(this.#o) && [
            6,
            7,
            8,
            9
        ].includes(t) && (this.#t.hostname ??= ""), [
            1,
            2,
            3,
            4,
            5,
            6
        ].includes(this.#o) && [
            8,
            9
        ].includes(t) && (this.#t.pathname ??= this.#g ? "/" : ""), [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ].includes(this.#o) && t === 9 && (this.#t.search ??= "")), this.#R(t, r);
    }
    #R(t, r) {
        this.#o = t, this.#l = this.#e + r, this.#e += r, this.#s = 0;
    }
    #b() {
        this.#e = this.#l, this.#s = 0;
    }
    #u(t) {
        this.#b(), this.#o = t;
    }
    #m(t) {
        return t < 0 && (t = this.#n.length - t), t < this.#n.length ? this.#n[t] : this.#n[this.#n.length - 1];
    }
    #a(t, r) {
        let n = this.#m(t);
        return n.value === r && (n.type === "CHAR" || n.type === "ESCAPED_CHAR" || n.type === "INVALID_CHAR");
    }
    #P() {
        return this.#a(this.#e, ":");
    }
    #E() {
        return this.#a(this.#e + 1, "/") && this.#a(this.#e + 2, "/");
    }
    #S() {
        return this.#a(this.#e, "@");
    }
    #O() {
        return this.#a(this.#e, ":");
    }
    #k() {
        return this.#a(this.#e, ":");
    }
    #x() {
        return this.#a(this.#e, "/");
    }
    #h() {
        if (this.#a(this.#e, "?")) return !0;
        if (this.#n[this.#e].value !== "?") return !1;
        let t = this.#m(this.#e - 1);
        return t.type !== "NAME" && t.type !== "REGEX" && t.type !== "CLOSE" && t.type !== "ASTERISK";
    }
    #f() {
        return this.#a(this.#e, "#");
    }
    #T() {
        return this.#n[this.#e].type == "OPEN";
    }
    #A() {
        return this.#n[this.#e].type == "CLOSE";
    }
    #y() {
        return this.#a(this.#e, "[");
    }
    #w() {
        return this.#a(this.#e, "]");
    }
    #c() {
        let t = this.#n[this.#e], r = this.#m(this.#l).index;
        return this.#i.substring(r, t.index);
    }
    #C() {
        let t = {};
        Object.assign(t, x), t.encodePart = y;
        let r = Z(this.#c(), void 0, t);
        this.#g = N(r);
    }
};
var G = [
    "protocol",
    "username",
    "password",
    "hostname",
    "port",
    "pathname",
    "search",
    "hash"
], E = "*";
function ge(e, t) {
    if (typeof e != "string") throw new TypeError("parameter 1 is not of type 'string'.");
    let r = new URL(e, t);
    return {
        protocol: r.protocol.substring(0, r.protocol.length - 1),
        username: r.username,
        password: r.password,
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname,
        search: r.search !== "" ? r.search.substring(1, r.search.length) : void 0,
        hash: r.hash !== "" ? r.hash.substring(1, r.hash.length) : void 0
    };
}
function b(e, t) {
    return t ? C(e) : e;
}
function w(e, t, r) {
    let n;
    if (typeof t.baseURL == "string") try {
        n = new URL(t.baseURL), t.protocol === void 0 && (e.protocol = b(n.protocol.substring(0, n.protocol.length - 1), r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && (e.username = b(n.username, r)), !r && t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.username === void 0 && t.password === void 0 && (e.password = b(n.password, r)), t.protocol === void 0 && t.hostname === void 0 && (e.hostname = b(n.hostname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && (e.port = b(n.port, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && (e.pathname = b(n.pathname, r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && (e.search = b(n.search.substring(1, n.search.length), r)), t.protocol === void 0 && t.hostname === void 0 && t.port === void 0 && t.pathname === void 0 && t.search === void 0 && t.hash === void 0 && (e.hash = b(n.hash.substring(1, n.hash.length), r));
    } catch  {
        throw new TypeError(`invalid baseURL '${t.baseURL}'.`);
    }
    if (typeof t.protocol == "string" && (e.protocol = ce(t.protocol, r)), typeof t.username == "string" && (e.username = ie(t.username, r)), typeof t.password == "string" && (e.password = se(t.password, r)), typeof t.hostname == "string" && (e.hostname = ne(t.hostname, r)), typeof t.port == "string" && (e.port = oe(t.port, e.protocol, r)), typeof t.pathname == "string") {
        if (e.pathname = t.pathname, n && !J(e.pathname, r)) {
            let o = n.pathname.lastIndexOf("/");
            o >= 0 && (e.pathname = b(n.pathname.substring(0, o + 1), r) + e.pathname);
        }
        e.pathname = ae(e.pathname, e.protocol, r);
    }
    return typeof t.search == "string" && (e.search = re(t.search, r)), typeof t.hash == "string" && (e.hash = te(t.hash, r)), e;
}
function C(e) {
    return e.replace(/([+*?:{}()\\])/g, "\\$1");
}
function Oe(e) {
    return e.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
function ke(e, t) {
    t.delimiter ??= "/#?", t.prefixes ??= "./", t.sensitive ??= !1, t.strict ??= !1, t.end ??= !0, t.start ??= !0, t.endsWith = "";
    let r = ".*", n = `[^${Oe(t.delimiter)}]+?`, o = /[$_\u200C\u200D\p{ID_Continue}]/u, c = "";
    for(let l = 0; l < e.length; ++l){
        let s = e[l];
        if (s.type === 3) {
            if (s.modifier === 3) {
                c += C(s.value);
                continue;
            }
            c += `{${C(s.value)}}${k(s.modifier)}`;
            continue;
        }
        let i = s.hasCustomName(), a = !!s.suffix.length || !!s.prefix.length && (s.prefix.length !== 1 || !t.prefixes.includes(s.prefix)), f = l > 0 ? e[l - 1] : null, d = l < e.length - 1 ? e[l + 1] : null;
        if (!a && i && s.type === 1 && s.modifier === 3 && d && !d.prefix.length && !d.suffix.length) {
            if (d.type === 3) {
                let T = d.value.length > 0 ? d.value[0] : "";
                a = o.test(T);
            } else a = !d.hasCustomName();
        }
        if (!a && !s.prefix.length && f && f.type === 3) {
            let T = f.value[f.value.length - 1];
            a = t.prefixes.includes(T);
        }
        a && (c += "{"), c += C(s.prefix), i && (c += `:${s.name}`), s.type === 2 ? c += `(${s.value})` : s.type === 1 ? i || (c += `(${n})`) : s.type === 0 && (!i && (!f || f.type === 3 || f.modifier !== 3 || a || s.prefix !== "") ? c += "*" : c += `(${r})`), s.type === 1 && i && s.suffix.length && o.test(s.suffix[0]) && (c += "\\"), c += C(s.suffix), a && (c += "}"), s.modifier !== 3 && (c += k(s.modifier));
    }
    return c;
}
var me = class {
    #i;
    #n = {};
    #t = {};
    #e = {};
    #s = {};
    #l = !1;
    constructor(t = {}, r, n){
        try {
            let o;
            if (typeof r == "string" ? o = r : n = r, typeof t == "string") {
                let i = new H(t);
                if (i.parse(), t = i.result, o === void 0 && typeof t.protocol != "string") throw new TypeError("A base URL must be provided for a relative constructor string.");
                t.baseURL = o;
            } else {
                if (!t || typeof t != "object") throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");
                if (o) throw new TypeError("parameter 1 is not of type 'string'.");
            }
            typeof n > "u" && (n = {
                ignoreCase: !1
            });
            let c = {
                ignoreCase: n.ignoreCase === !0
            }, l = {
                pathname: E,
                protocol: E,
                username: E,
                password: E,
                hostname: E,
                port: E,
                search: E,
                hash: E
            };
            this.#i = w(l, t, !0), _(this.#i.protocol) === this.#i.port && (this.#i.port = "");
            let s;
            for (s of G){
                if (!(s in this.#i)) continue;
                let i = {}, a = this.#i[s];
                switch(this.#t[s] = [], s){
                    case "protocol":
                        Object.assign(i, x), i.encodePart = y;
                        break;
                    case "username":
                        Object.assign(i, x), i.encodePart = le;
                        break;
                    case "password":
                        Object.assign(i, x), i.encodePart = fe;
                        break;
                    case "hostname":
                        Object.assign(i, B), W(a) ? i.encodePart = j : i.encodePart = z;
                        break;
                    case "port":
                        Object.assign(i, x), i.encodePart = K;
                        break;
                    case "pathname":
                        N(this.#n.protocol) ? (Object.assign(i, q, c), i.encodePart = he) : (Object.assign(i, x, c), i.encodePart = ue);
                        break;
                    case "search":
                        Object.assign(i, x, c), i.encodePart = de;
                        break;
                    case "hash":
                        Object.assign(i, x, c), i.encodePart = pe;
                        break;
                }
                try {
                    this.#s[s] = D(a, i), this.#n[s] = F(this.#s[s], this.#t[s], i), this.#e[s] = ke(this.#s[s], i), this.#l = this.#l || this.#s[s].some((f)=>f.type === 2);
                } catch  {
                    throw new TypeError(`invalid ${s} pattern '${this.#i[s]}'.`);
                }
            }
        } catch (o) {
            throw new TypeError(`Failed to construct 'URLPattern': ${o.message}`);
        }
    }
    test(t = {}, r) {
        let n = {
            pathname: "",
            protocol: "",
            username: "",
            password: "",
            hostname: "",
            port: "",
            search: "",
            hash: ""
        };
        if (typeof t != "string" && r) throw new TypeError("parameter 1 is not of type 'string'.");
        if (typeof t > "u") return !1;
        try {
            typeof t == "object" ? n = w(n, t, !1) : n = w(n, ge(t, r), !1);
        } catch  {
            return !1;
        }
        let o;
        for (o of G)if (!this.#n[o].exec(n[o])) return !1;
        return !0;
    }
    exec(t = {}, r) {
        let n = {
            pathname: "",
            protocol: "",
            username: "",
            password: "",
            hostname: "",
            port: "",
            search: "",
            hash: ""
        };
        if (typeof t != "string" && r) throw new TypeError("parameter 1 is not of type 'string'.");
        if (typeof t > "u") return;
        try {
            typeof t == "object" ? n = w(n, t, !1) : n = w(n, ge(t, r), !1);
        } catch  {
            return null;
        }
        let o = {};
        r ? o.inputs = [
            t,
            r
        ] : o.inputs = [
            t
        ];
        let c;
        for (c of G){
            let l = this.#n[c].exec(n[c]);
            if (!l) return null;
            let s = {};
            for (let [i, a] of this.#t[c].entries())if (typeof a == "string" || typeof a == "number") {
                let f = l[i + 1];
                s[a] = f;
            }
            o[c] = {
                input: n[c] ?? "",
                groups: s
            };
        }
        return o;
    }
    static compareComponent(t, r, n) {
        let o = (i, a)=>{
            for (let f of [
                "type",
                "modifier",
                "prefix",
                "value",
                "suffix"
            ]){
                if (i[f] < a[f]) return -1;
                if (i[f] === a[f]) continue;
                return 1;
            }
            return 0;
        }, c = new R(3, "", "", "", "", 3), l = new R(0, "", "", "", "", 3), s = (i, a)=>{
            let f = 0;
            for(; f < Math.min(i.length, a.length); ++f){
                let d = o(i[f], a[f]);
                if (d) return d;
            }
            return i.length === a.length ? 0 : o(i[f] ?? c, a[f] ?? c);
        };
        return !r.#e[t] && !n.#e[t] ? 0 : r.#e[t] && !n.#e[t] ? s(r.#s[t], [
            l
        ]) : !r.#e[t] && n.#e[t] ? s([
            l
        ], n.#s[t]) : s(r.#s[t], n.#s[t]);
    }
    get protocol() {
        return this.#e.protocol;
    }
    get username() {
        return this.#e.username;
    }
    get password() {
        return this.#e.password;
    }
    get hostname() {
        return this.#e.hostname;
    }
    get port() {
        return this.#e.port;
    }
    get pathname() {
        return this.#e.pathname;
    }
    get search() {
        return this.#e.search;
    }
    get hash() {
        return this.#e.hash;
    }
    get hasRegExpGroups() {
        return this.#l;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["az991"], null, "parcelRequirec605")

//# sourceMappingURL=index.6e3c048d.js.map
