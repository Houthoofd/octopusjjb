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
})({"5nziR":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "149ba30097219e0f";
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

},{}],"HH6XE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Login", ()=>(0, _login1.Login));
parcelHelpers.export(exports, "Inscription", ()=>(0, _inscription1.Inscription));
parcelHelpers.export(exports, "NewPassword", ()=>(0, _password1.NewPassword));
parcelHelpers.export(exports, "Notification", ()=>(0, _notification1.Notification));
parcelHelpers.export(exports, "Navigation", ()=>(0, _navigation1.Navigation));
var _login = require("./login");
var _inscription = require("./inscription");
var _password = require("./password");
var _notification = require("./notification");
var _navigation = require("./navigation");
var _login1 = require("./login/login");
var _inscription1 = require("./inscription/inscription");
var _password1 = require("./password/password");
var _notification1 = require("./notification/notification");
var _navigation1 = require("./navigation/navigation");

},{"./login":"5oa14","./inscription":"18JMv","./password":"3LFGP","./notification":"4uMQr","./navigation":"f8xTW","./login/login":"2p6U7","./inscription/inscription":"hpzNP","./password/password":"lVhP0","./notification/notification":"7Dep4","./navigation/navigation":"4Tsqr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5oa14":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _login = require("./login");
parcelHelpers.exportAll(_login, exports);

},{"./login":"2p6U7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2p6U7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Login", ()=>Login);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _core = require("@lithium-framework/core");
var _routerElement = require("@lithium-framework/router-element");
var _unofficialPfV5Wc = require("unofficial-pf-v5-wc");
var _unofficialPfV5WcIcons = require("unofficial-pf-v5-wc-icons");
class Login extends (0, _core.WebComponent) {
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    handleEmailInput(login) {
        const inputs = this.shadowRoot?.querySelectorAll("input");
        const emailValue = inputs?.[0].value || "";
        this.Mail = emailValue;
        this.validateForm();
    }
    handlePasswordInput(login) {
        const inputs = this.shadowRoot?.querySelectorAll("input");
        const password = inputs?.[1].value || "";
        console.log(password);
        this.Password = password;
        this.validateForm();
    }
    validateForm() {
        console.log(this.Mail, this.Password);
        this.isFormValid = this.Mail !== "" && this.Password !== "";
        this.errorMessage = this.isFormValid ? null : "Veuillez entrer \xe0 la fois un email et un mot de passe.";
    }
    async sendData() {
        if (this.isFormValid) {
            const data = {
                email: this.Mail,
                password: this.Password
            };
            console.log(data);
            try {
                const response = await fetch("http://localhost:3000/connexion", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                    body: JSON.stringify(data)
                });
                // Vérification de la réponse HTTP
                if (response.ok) {
                    const result = await response.json();
                    console.log("Connexion r\xe9ussie", result);
                    console.log(result);
                    const userData = {
                        last_name: result.userData.nom,
                        first_name: result.userData.prenom,
                        email: result.userData.email,
                        role: result.userData.role
                    };
                    // Stockage des informations utilisateur dans localStorage
                    localStorage.setItem("userData", JSON.stringify(userData));
                    if (result.token) {
                        console.log("Token JWT:", result.token);
                        localStorage.setItem("token", result.token); // Optionnel : stocker le token dans le localStorage
                    } else console.error("Erreur de connexion");
                    // Redirection vers la page des cours
                    window.location.href = "/pages/cours";
                } else {
                    // Gestion des erreurs de statut (par exemple, 401 Unauthorized)
                    console.error("Erreur lors de la connexion :", response.statusText);
                    this.errorMessage = "\xc9chec de la connexion. Veuillez v\xe9rifier vos informations.";
                }
            } catch (error) {
                console.error("Erreur lors de la requ\xeate :", error);
                this.errorMessage = "Une erreur est survenue. Veuillez r\xe9essayer plus tard.";
            }
        } else this.errorMessage = "Veuillez remplir tous les champs.";
    }
    // Gestion de la soumission du formulaire
    handleLogin() {
        this.validateForm();
        if (this.isFormValid) this.sendData();
    }
    toggleRememberMe() {
        this.rememberMe = !this.rememberMe;
    }
    constructor(...args){
        super(...args);
        this.email = "";
        this.password = "";
        this.rememberMe = false;
        this.isFormValid = false;
        this.errorMessage = null;
        this.isCustom = false;
        this.Mail = "";
        this.Password = "";
    }
}
(0, _tsDecorate._)([
    (0, _core.state)()
], Login.prototype, "email", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Login.prototype, "password", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Login.prototype, "rememberMe", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Login.prototype, "isFormValid", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Login.prototype, "errorMessage", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Login.prototype, "isCustom", void 0);
Login = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "login-page",
        template: (0, _core.html)`${(login)=>{
            return (0, _core.html)`
      <div class="login">
        <div class="header">
          <h1>Log in to your account</h1>
        </div>
        <div class="main-body">
          <div class="input-field">
            <pf-icons-envelope></pf-icons-envelope>
            <input 
              type="email" 
              placeholder="Email" 
              @input="${(login)=>login.handleEmailInput()}" 
              value="${login.email}"
            >
          </div>
          <div class="input-field">
            <pf-icons-lock></pf-icons-lock>
            <input 
              type="password" 
              placeholder="Password" 
              @input="${(login)=>login.handlePasswordInput()}" 
              value="${login.password}"
            >
          </div>
          <button 
            class="button-login" 
            ?disabled="${!login.isFormValid}"
            @click="${()=>login.handleLogin()}"
          >
            Log in
          </button>
        </div>
        <div class="remember-password">
          <div class="radio">
            <input 
              type="radio" 
              @change="${()=>login.toggleRememberMe()}" 
              ?checked="${login.rememberMe}"
            >
            <label for="remember me">Remember me</label>
          </div>
          <a href="../password">Forgot password?</a>
        </div>
        <div class="footer">
          <span>Don't have an account? <a href="../inscriptions">Create an account</a></span>
        </div>
        ${login.errorMessage ? (0, _core.html)`<div class="error-message">${login.errorMessage}</div>` : ""}
      </div>
    `;
        }}`,
        styles: [
            (0, _core.css)`
      .login{
        width: 500px;
        height: 500px;
        background-color: #ffffff;
        position: absolute;
        top: 25%;
        left: 15%;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 7%;
        border-radius: 5px;
      }
      .main-body {
        display: grid;
        gap: 5px;
        width: 65%;
      }
      .input-field {
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        background-color: #fafbfe;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      input[type="email"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="email"]::placeholder {
        color: #a2adbe;
      }
      input[type="password"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="password"]:placeholder{
        color: #a2adbe;
      }
      input[type="radio"] {
        appearance: none;
        width: 25px;
        height: 25px;
        border: 1px solid #eff3f8;
        border-radius: 3px;
        background-color: #fff;
        cursor: pointer;
        margin: 0;
      }

      input[type="radio"]:checked {
        background-color: #0066cc; 
        border: 1px solid #0066cc;
      }
      label{
        color: #a2adbe;
      }
      .button-login {
        background-color: #0066cc;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 10px;
        border-radius: 3px;
        cursor: pointer;
        border: none;
        font-size: 18px;
        color: #ffffff;
      }
      .button-login:hover{
        background-color: #004080;
      }
      .remember-password {
        display: flex;
        gap: 50px;
      }
      .radio {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      a{
        text-decoration: none;
        font-weight: bold;
      }
    `
        ],
        shadowOptions: {
            mode: "open"
        }
    })
], Login);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","@lithium-framework/core":"hmv1B","@lithium-framework/router-element":"cZ2Eg","unofficial-pf-v5-wc":"bU1uI","unofficial-pf-v5-wc-icons":"7gm82","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"18JMv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _inscription = require("./inscription");
parcelHelpers.exportAll(_inscription, exports);

},{"./inscription":"hpzNP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpzNP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Inscription", ()=>Inscription);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _core = require("@lithium-framework/core");
var _routerElement = require("@lithium-framework/router-element");
var _unofficialPfV5Wc = require("unofficial-pf-v5-wc");
var _unofficialPfV5WcIcons = require("unofficial-pf-v5-wc-icons");
class Inscription extends (0, _core.WebComponent) {
    handleDropDownValueTarif(plan) {
        // Sélectionner les éléments dans le Shadow DOM
        const dropdownButton = this.shadowRoot?.getElementById("dropdownButtonPrice");
        const dropdownMenu = this.shadowRoot?.getElementById("dropdownMenu");
        // Mettre à jour le texte du bouton avec la sélection
        dropdownButton.textContent = `${plan.nom_plan} - ${plan.prix} \u{20AC}`;
        this.tarif = plan.nom_plan;
        console.log(this.tarif);
        // Vérifier si le menu est déjà ouvert ou non et ajuster son état
        if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") // Ouvrir le menu si il est fermé (display: none ou initialement vide)
        dropdownMenu.style.display = "block";
        else // Fermer le menu si il est déjà ouvert
        dropdownMenu.style.display = "none";
    }
    handleDropDownValueGenre(info) {
        // Sélectionner les éléments dans le Shadow DOM
        const dropdownButton = this.shadowRoot?.getElementById("dropdownButtonGenre");
        const dropdownMenu = this.shadowRoot?.getElementById("dropdownMenu");
        // Mettre à jour le texte du bouton avec la sélection
        dropdownButton.textContent = `${info.genre}`;
        this.genre = info.genre;
        console.log(this.genre);
        // Vérifier si le menu est déjà ouvert ou non et ajuster son état
        if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") // Ouvrir le menu si il est fermé (display: none ou initialement vide)
        dropdownMenu.style.display = "block";
        else // Fermer le menu si il est déjà ouvert
        dropdownMenu.style.display = "none";
    }
    async preloadData(url) {
        console.log(url);
        try {
            // Faire la requête pour récupérer les plans tarifaires depuis l'URL
            const response = await fetch(url, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            // Vérifier si la réponse est correcte
            if (!response.ok) throw new Error("Erreur serveur lors de la r\xe9cup\xe9ration des plans tarifaires.");
            // Récupérer les données au format JSON
            const data = await response.json();
            console.log("Plans tarifaires re\xe7us:", data);
            // Retourner les données reçues, ou un tableau vide si aucun élément
            return data.length > 0 ? data : [];
        } catch (error) {
            console.error("Erreur lors de la requ\xeate fetch:", error);
            return [];
        }
    }
    handleEmailBlur() {
        const inputs = this.shadowRoot?.querySelectorAll("input");
        const emailInput = inputs?.[0];
        const email = emailInput.value || "";
        if (!email.includes("@")) {
            console.log('L\'email doit contenir le caract\xe8re "@"');
            this.isEmailValid = false;
        } else {
            console.log("Email valide");
            this.isEmailValid = true;
            this.email = email;
            console.log(this.email);
        }
    //this.checkFormValidity();
    }
    handlePasswordBlur() {
        const inputs = this.shadowRoot?.querySelectorAll("input");
        const passwordInput = inputs?.[1];
        const password = passwordInput.value || "";
        const errorMessage = this.CheckStrength(password);
        if (errorMessage) {
            console.log(errorMessage);
            this.isPasswordValid = false;
        } else {
            console.log("Mot de passe valide");
            this.isPasswordValid = true;
            this.password = password;
            console.log(this.password);
        }
    }
    CheckStrength(password) {
        const min = 6;
        const max = 20;
        if (password.length < min || password.length > max) return `Le mot de passe doit comporter entre ${min} et ${max} caract\xe8res.`;
        const specialCharacters = /[!@#\$%\^\&*\)\(+=._-]+/;
        if (!specialCharacters.test(password)) return "Le mot de passe doit contenir au moins un caract\xe8re sp\xe9cial.";
        const hasUpperCase = /[A-Z]/;
        if (!hasUpperCase.test(password)) return "Le mot de passe doit contenir au moins une majuscule.";
        const hasNumber = /[0-9]/;
        if (!hasNumber.test(password)) return "Le mot de passe doit contenir au moins un chiffre.";
        return null;
    }
    handleConfirmPasswordBlur() {
        const inputs = this.shadowRoot?.querySelectorAll("input");
        const confirmPasswordInput = inputs?.[2];
        const confPassword = confirmPasswordInput.value || "";
        console.log(this.password, confPassword);
        // Vérifie si les mots de passe sont égaux
        if (confPassword !== this.password) {
            console.log("Les mots de passe ne correspondent pas");
            this.isConfirmPasswordIsValid = false;
        } else {
            console.log("Les mots de passe correspondent");
            this.isConfirmPasswordIsValid = true;
            this.confPassword = confPassword;
        }
    }
    handleDateBlur() {
        const inputs = this.shadowRoot?.querySelectorAll("input");
        const dateInput = inputs?.[3];
        const date = dateInput.value || "";
        // Peut-être vérifié si le format est bien respecter //
        this.date = date;
    }
    handleFirstNameBlur() {
        const inputs = this.shadowRoot?.querySelectorAll("input");
        const firstNameInput = inputs?.[4];
        const firstName = firstNameInput.value || "";
        this.firstName = firstName;
    }
    handleLastNameBlur() {
        const inputs = this.shadowRoot?.querySelectorAll("input");
        const lastNameInput = inputs?.[5];
        const lastName = lastNameInput.value || "";
        this.lastName = lastName;
    }
    checkValidity() {
        const formData = {};
        if (this.email) formData.email = this.email;
        else {
            console.log("L'email est manquant.");
            return null;
        }
        if (this.password) formData.password = this.password;
        else {
            console.log("Le mot de passe est manquant.");
            return null;
        }
        if (this.date) formData.date = this.date;
        else {
            console.log("La date est manquante.");
            return null;
        }
        if (this.firstName) formData.firstName = this.firstName;
        else {
            console.log("Le pr\xe9nom est manquant.");
            return null;
        }
        if (this.lastName) formData.lastName = this.lastName;
        else {
            console.log("Le nom de famille est manquant.");
            return null;
        }
        if (this.tarif) formData.tarif = this.tarif;
        else {
            console.log("Le choix d'abonnement manquant.");
            return null;
        }
        if (this.genre) formData.genre = this.genre;
        else {
            console.log("Le sexe est manquant.");
            return null;
        }
        console.log("Donn\xe9es du formulaire valides:", formData);
        console.log(formData.genre, formData.tarif);
        return formData;
    }
    async sendData() {
        const formData = this.checkValidity();
        if (!formData) {
            console.log("Donn\xe9es invalides, la requ\xeate ne sera pas envoy\xe9e.");
            return;
        }
        console.log("Envoi des donn\xe9es:", formData);
        try {
            const response = await fetch("http://localhost:3000/inscriptions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const result = await response.text();
                alert("Utilisateur enregistr\xe9 avec succ\xe8s !");
                window.location.href = "/connexion";
            } else {
                console.error("Erreur lors de l'enregistrement :", response.statusText);
                alert("Une erreur s'est produite. Veuillez r\xe9essayer.");
            }
        } catch (error) {
            console.error("Erreur lors de la requ\xeate :", error);
            alert("Impossible d'enregistrer la r\xe9servation.");
        }
    }
    constructor(...args){
        super(...args);
        this.valid = null;
        this.invalid = null;
        this.isEmailValid = null;
        this.isPasswordValid = null;
        this.isStrongPassword = null;
        this.isConfirmPasswordIsValid = null;
        this.email = "";
        this.password = "";
        this.confPassword = "";
        this.date = "";
        this.firstName = "";
        this.lastName = "";
        this.genre = "";
        this.tarif = "";
    }
}
(0, _tsDecorate._)([
    (0, _core.state)()
], Inscription.prototype, "valid", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Inscription.prototype, "invalid", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)()
], Inscription.prototype, "isEmailValid", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)()
], Inscription.prototype, "isPasswordValid", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)()
], Inscription.prototype, "isStrongPassword", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)()
], Inscription.prototype, "isConfirmPasswordIsValid", void 0);
Inscription = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "inscription-page",
        template: (0, _core.html)`${(inscription)=>{
            return (0, _core.html)`
      <div class="register">
        <div class="header">
          <h1>Create a new account</h1>
        </div>
        <div class="main-body">
          
          <div class=${[
                "input-field",
                inscription.isEmailValid === null ? "" : inscription.isEmailValid ? "-valide" : "-invalide"
            ].join("")}>
            <input class=${[
                "input",
                inscription.isEmailValid === null ? "" : inscription.isEmailValid ? "-valide" : "-invalide"
            ].join("")}
              type="email" 
              placeholder="Email"
              @blur="${()=>inscription.handleEmailBlur()}" 
              required 
              value="${inscription.email || ""}">

            <div class="${[
                "info",
                inscription.isEmailValid === null ? "" : inscription.isEmailValid ? "-valide" : "-invalide"
            ].join("")}">
              ${inscription.isEmailValid === null ? "" : inscription.isEmailValid ? (0, _core.html)`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>` : (0, _core.html)`<span>Votre adresse email doit contenir le caractère '@'</span>`}
            </div>
          </div>





      
          <div class=${[
                "input-field",
                inscription.isPasswordValid === null ? "" : inscription.isPasswordValid ? "-valide" : "-invalide"
            ].join("")}>
            <input class=${[
                "input",
                inscription.isPasswordValid === null ? "" : inscription.isPasswordValid ? "-valide" : "-invalide"
            ].join("")}
              type="email" 
              placeholder="password"
              @blur="${()=>inscription.handlePasswordBlur()}" 
              required 
              value="${inscription.password || ""}">

            <div class="${[
                "info",
                inscription.isPasswordValid === null ? "" : inscription.isPasswordValid ? "-valide" : "-invalide"
            ].join("")}">
              ${inscription.isPasswordValid === null ? "" : inscription.isPasswordValid ? (0, _core.html)`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>` : (0, _core.html)`<span>Votre adresse mot de passe doit contenir le caractère</span>`}
            </div>
          </div>

        
          <div class=${[
                "input-field",
                inscription.isConfirmPasswordIsValid === null ? "" : inscription.isConfirmPasswordIsValid ? "-valide" : "-invalide"
            ].join("")}>
            <input class=${[
                "input",
                inscription.isConfirmPasswordIsValid === null ? "" : inscription.isConfirmPasswordIsValid ? "-valide" : "-invalide"
            ].join("")}
              type="email" 
              placeholder="password"
              @blur="${()=>inscription.handleConfirmPasswordBlur()}" 
              required 
              value="${inscription.confPassword || ""}">

            <div class="${[
                "info",
                inscription.isConfirmPasswordIsValid === null ? "" : inscription.isConfirmPasswordIsValid ? "-valide" : "-invalide"
            ].join("")}">
              ${inscription.isConfirmPasswordIsValid === null ? "" : inscription.isConfirmPasswordIsValid ? (0, _core.html)`<div class="valide"><pf-icons-check-circle></pf-icons-check-circle></div>` : (0, _core.html)`<span>Votre adresse email doit contenir le caractère '@'</span>`}
            </div>
          </div>

         
          <div class='input-field'>
            <input type="date" placeholder="Date of Birth" 
              @blur="${()=>{
                inscription.handleDateBlur();
            }}"
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Prénom" 
              @blur="${()=>{
                inscription.handleFirstNameBlur();
            }}" 
              required>
          </div>

          
          <div class='input-field'>
            <input type="text" placeholder="Nom" 
              @blur="${()=>{
                inscription.handleLastNameBlur();
            }}"
              required>
          </div>

          <div class="dropdown">
            <details>
            <summary id="dropdownButtonPrice">Choisir un plan</summary>
            <div class="dropdown-menu">
              <!-- Les éléments du menu seront ajoutés ici -->
              ${(0, _core.asyncAppend)(inscription.preloadData(`http://localhost:3000/informations/abonnement`), (result)=>{
                return (0, _core.html)`${(0, _core.repeat)(result, (0, _core.html)`${(plan)=>{
                    return (0, _core.html)`<div class="dropdown-item" data-plan="${plan.nom_plan}" data-prix="${plan.prix}" @click="${(plan)=>inscription.handleDropDownValueTarif(plan)}">
                      ${plan.nom_plan} - ${plan.prix} €
                    </div>`;
                }}`)}`;
            })}
            </div>
          </details>
        </div>

        <div class="dropdown">
            <details>
            <summary id="dropdownButtonGenre">Choisir un genre</summary>
            <div class="dropdown-menu">
              <!-- Les éléments du menu seront ajoutés ici -->
              ${(0, _core.asyncAppend)(inscription.preloadData(`http://localhost:3000/informations/gender`), (result)=>{
                return (0, _core.html)`${(0, _core.repeat)(result, (0, _core.html)`${(info)=>{
                    return (0, _core.html)`<div class="dropdown-item" data-plan="${info.genre}" @click="${(info)=>inscription.handleDropDownValueGenre(info)}">
                      ${info.genre}
                    </div>`;
                }}`)}`;
            })}
            </div>
          </details>
        </div>


          
          <button class="button-register"
            type="submit"
            @click="${()=>inscription.sendData()}">Inscription</button>
        </div>

        <div class="footer">
          <span>Already have an account? <a href="../connexion">Log in</a></span>
        </div>
      </div>
    `;
        }}`,
        styles: [
            (0, _core.css)`
      .register{
        width: 500px;
        height: 680px;
        background-color: #ffffff;
        position: absolute;
        top: 25%;
        left: 15%;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 7%;
        border-radius: 3px;
      }
      .main-body {
        display: grid;
        gap: 5px;
        width: 65%;
      }
      .input-field {
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        background-color: #fafbfe;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      input[type="email"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      /* Style quand l'email est valide */
      input[type="email"]:valid {
        background-color: #f1f8e9 !important;
      }

      input[type="email"]::placeholder {
        color: #a2adbe;
      }
      input[type="date"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="date"]::placeholder {
        color: #a2adbe;
      }
      input[type="text"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="text"]::placeholder {
        color: #a2adbe;
      }
      input[type="password"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="password"]:placeholder{
        color: #a2adbe;
      }
      input[type="radio"] {
        appearance: none;
        width: 25px;
        height: 25px;
        border: 1px solid #eff3f8;
        border-radius: 3px;
        background-color: #fff;
        cursor: pointer;
        margin: 0;
      }

      input[type="radio"]:checked {
        background-color: #0066cc; 
        border: 1px solid #0066cc;
      }
      label{
        color: #a2adbe;
      }
      .button-register {
        background-color: #0066cc;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 10px;
        border-radius: 3px;
        cursor: pointer;
        border: none;
        font-size: 18px;
        color: #ffffff;
      }
      .button-register:hover{
        background-color: #004080;
      }
      a{
        text-decoration: none;
        font-weight: bold;
      }
      .error {
        color: red;
        font-size: 12px;
      }
      .password-strength {
        height: 8px;
        background-color: #e0e0e0;
        margin-top: 5px;
        border-radius: 4px;
      }
      .strength-bar {
        height: 100%;
        background-color: #76c7c0;
        border-radius: 4px;
        transition: width 0.3s ease-in-out;
      }
      .valide{
        color: #3e8635;
      }
      .info{
        display: none;
      }
      .info.default .valide,
      .info.default span {
        display: none; /* Rien n'est affiché par défaut */
      }

      .info.valid .valide {
        display: block; /* Affiche l'icône de validation */
      }

      .info.invalid .valide {
        display: none; /* Masque l'icône en cas d'email invalide */
      }

      .info.invalid span {
        display: block; /* Affiche le message d'erreur */
      }
      .input-field-valide{
        background-color: #f1f8e9;
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      .input-field-invalide{
        background-color: #ffebee;
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      .input-valide{
        background-color: #f1f8e9; 
      }
      .input-invalide{
        background-color: #ffebee;
      }
      /* Conteneur du dropdown */
.dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}

/* Bouton du dropdown */
.dropdown-toggle {
      background-color: #fafbfe;
  color: #a2adcd;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
}

/* Liste cachée par défaut */
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
}

/* Eléments du dropdown */
.dropdown-item {
  padding: 12px 16px;
  text-align: left;
  color: black;
  text-decoration: none;
  display: block;
  font-size: 14px;
}

/* Changer la couleur au survol */
.dropdown-item:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}

/* Affichage du menu lorsque l'utilisateur clique sur le bouton */
.dropdown:hover .dropdown-menu {
  display: block;
}


    `
        ],
        shadowOptions: {
            mode: "open"
        }
    })
], Inscription);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","@lithium-framework/core":"hmv1B","@lithium-framework/router-element":"cZ2Eg","unofficial-pf-v5-wc":"bU1uI","unofficial-pf-v5-wc-icons":"7gm82","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3LFGP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _password = require("./password");
parcelHelpers.exportAll(_password, exports);

},{"./password":"lVhP0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVhP0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NewPassword", ()=>NewPassword);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _core = require("@lithium-framework/core");
var _routerElement = require("@lithium-framework/router-element");
var _unofficialPfV5Wc = require("unofficial-pf-v5-wc");
var _unofficialPfV5WcIcons = require("unofficial-pf-v5-wc-icons");
class NewPassword extends (0, _core.WebComponent) {
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    handleEmailInput(login) {
        const inputs = this.shadowRoot?.querySelectorAll("input");
        const emailValue = inputs?.[0].value || "";
        this.Mail = emailValue;
        this.validateForm();
    }
    handlePasswordInput(login) {
        const inputs = this.shadowRoot?.querySelectorAll("input");
        const password = inputs?.[1].value || "";
        console.log(password);
        this.Password = password;
        this.validateForm();
    }
    validateForm() {
        console.log(this.Mail, this.Password);
        this.isFormValid = this.Mail !== "" && this.Password !== "";
        this.errorMessage = this.isFormValid ? null : "Veuillez entrer \xe0 la fois un email et un mot de passe.";
    }
    async sendData() {
        if (this.isFormValid) {
            const data = {
                email: this.Mail,
                newpassword: this.Password
            };
            console.log(data);
            try {
                const response = await fetch("http://localhost:3000/password", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                // Vérification de la réponse HTTP
                if (response.ok) {
                    const result = await response.json();
                    console.log(result);
                    // Redirection vers la page des cours
                    window.location.href = "/pages/connexion";
                } else {
                    // Gestion des erreurs de statut (par exemple, 401 Unauthorized)
                    console.error("Erreur lors de la connexion :", response.statusText);
                    this.errorMessage = "\xc9chec de la connexion. Veuillez v\xe9rifier vos informations.";
                }
            } catch (error) {
                console.error("Erreur lors de la requ\xeate :", error);
                this.errorMessage = "Une erreur est survenue. Veuillez r\xe9essayer plus tard.";
            }
        } else this.errorMessage = "Veuillez remplir tous les champs.";
    }
    // Gestion de la soumission du formulaire
    handleLogin() {
        this.validateForm();
        if (this.isFormValid) this.sendData();
    }
    toggleRememberMe() {
        this.rememberMe = !this.rememberMe;
    }
    constructor(...args){
        super(...args);
        this.email = "";
        this.password = "";
        this.rememberMe = false;
        this.isFormValid = false;
        this.errorMessage = null;
        this.isCustom = false;
        this.Mail = "";
        this.Password = "";
    }
}
(0, _tsDecorate._)([
    (0, _core.state)()
], NewPassword.prototype, "email", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], NewPassword.prototype, "password", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], NewPassword.prototype, "rememberMe", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], NewPassword.prototype, "isFormValid", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], NewPassword.prototype, "errorMessage", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], NewPassword.prototype, "isCustom", void 0);
NewPassword = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "page-new-password",
        template: (0, _core.html)`${(newpassword)=>{
            return (0, _core.html)`
      <div class="login">
        <div class="header">
          <h1>Change your password</h1>
        </div>
        <div class="main-body">
          <div class="input-field">
            <pf-icons-envelope></pf-icons-envelope>
            <input 
              type="email" 
              placeholder="Email" 
              @input="${(login)=>login.handleEmailInput()}" 
              value="${newpassword.email}"
            >
          </div>
          <div class="input-field">
            <pf-icons-lock></pf-icons-lock>
            <input 
              type="password" 
              placeholder="Password" 
              @input="${(newpassword)=>newpassword.handlePasswordInput()}" 
              value="${newpassword.password}"
            >
          </div>
          <button 
            class="button-login" 
            ?disabled="${!newpassword.isFormValid}"
            @click="${()=>newpassword.handleLogin()}"
          >
            Save changes
          </button>
        </div>
        ${newpassword.errorMessage ? (0, _core.html)`<div class="error-message">${newpassword.errorMessage}</div>` : ""}
      </div>
    `;
        }}`,
        styles: [
            (0, _core.css)`
      .login{
        width: 500px;
        height: 500px;
        background-color: #ffffff;
        position: absolute;
        top: 25%;
        left: 15%;
        color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 7%;
        border-radius: 5px;
      }
      .main-body {
        display: grid;
        gap: 5px;
        width: 65%;
      }
      .input-field {
        border: 1px solid #eff3f8;
        padding: 10px 10px;
        border-radius: 3px;
        background-color: #fafbfe;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }
      input[type="email"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="email"]::placeholder {
        color: #a2adbe;
      }
      input[type="password"]{
        border: none;
        background-color: #fafbfe;
        width: 38ch;
        padding: 10px 10px;
      }
      input[type="password"]:placeholder{
        color: #a2adbe;
      }
      input[type="radio"] {
        appearance: none;
        width: 25px;
        height: 25px;
        border: 1px solid #eff3f8;
        border-radius: 3px;
        background-color: #fff;
        cursor: pointer;
        margin: 0;
      }

      input[type="radio"]:checked {
        background-color: #0066cc; 
        border: 1px solid #0066cc;
      }
      label{
        color: #a2adbe;
      }
      .button-login {
        background-color: #0066cc;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 10px;
        border-radius: 3px;
        cursor: pointer;
        border: none;
        font-size: 18px;
        color: #ffffff;
      }
      .button-login:hover{
        background-color: #004080;
      }
      .remember-password {
        display: flex;
        gap: 50px;
      }
      .radio {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      a{
        text-decoration: none;
        font-weight: bold;
      }
    `
        ],
        shadowOptions: {
            mode: "open"
        }
    })
], NewPassword);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","@lithium-framework/core":"hmv1B","@lithium-framework/router-element":"cZ2Eg","unofficial-pf-v5-wc":"bU1uI","unofficial-pf-v5-wc-icons":"7gm82","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4uMQr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _notification = require("./notification");
parcelHelpers.exportAll(_notification, exports);

},{"./notification":"7Dep4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Dep4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Notification", ()=>Notification);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _core = require("@lithium-framework/core");
var _routerElement = require("@lithium-framework/router-element");
var _unofficialPfV5Wc = require("unofficial-pf-v5-wc");
var _unofficialPfV5WcIcons = require("unofficial-pf-v5-wc-icons");
class Notification extends (0, _core.WebComponent) {
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "custom") this.isCustom = newValue === "true";
        if (name === "info") this.isInfo = newValue === "true";
        if (name === "success") this.isSuccess = newValue === "true";
        if (name === "warning") this.isWarning = newValue === "true";
        if (name === "danger") this.isDanger = newValue === "true";
        super.attributeChangedCallback(name, oldValue, newValue);
    }
    constructor(...args){
        super(...args);
        this.custom = null;
        this.info = null;
        this.success = null;
        this.warning = null;
        this.danger = null;
        this.isCustom = false;
        this.isInfo = false;
        this.isSuccess = false;
        this.isWarning = false;
        this.isDanger = false;
    }
}
(0, _tsDecorate._)([
    (0, _core.attr)()
], Notification.prototype, "custom", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)()
], Notification.prototype, "info", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)()
], Notification.prototype, "success", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)()
], Notification.prototype, "warning", void 0);
(0, _tsDecorate._)([
    (0, _core.attr)()
], Notification.prototype, "danger", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Notification.prototype, "isCustom", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Notification.prototype, "isInfo", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Notification.prototype, "isSuccess", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Notification.prototype, "isWarning", void 0);
(0, _tsDecorate._)([
    (0, _core.state)()
], Notification.prototype, "isDanger", void 0);
Notification = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "notification-box",
        template: (0, _core.html)`${(notification)=>{
            return (0, _core.html)`
      <div class="${[
                "notification",
                notification.isCustom ? "-custom" : "",
                notification.isInfo ? "-info" : "",
                notification.isSuccess ? "-success" : "",
                notification.isWarning ? "-warning" : "",
                notification.isDanger ? "-danger" : ""
            ].join("")}">
        <div class="icon">
          ${notification.isCustom ? (0, _core.html)`<pf-icons-bell></pf-icons-bell>` : ""}
          ${notification.isInfo ? (0, _core.html)`<pf-icons-info-circle></pf-icons-info-circle>` : ""}
          ${notification.isSuccess ? (0, _core.html)`<pf-icons-check-circle></pf-icons-check-circle>` : ""}
          ${notification.isWarning ? (0, _core.html)`<pf-icons-exclamation-triangle></pf-icons-exclamation-triangle>` : ""}
          ${notification.isDanger ? (0, _core.html)`<pf-icons-exclamation-circle></pf-icons-exclamation-circle>` : ""}
        </div>
        <div class="main-body">
          <div class="title">
            ${notification.isCustom ? (0, _core.html)`<pf-icons-bell></pf-icons-bell>` : ""}
            ${notification.isInfo ? (0, _core.html)`<h3>Information</h3>` : ""}
            ${notification.isSuccess ? (0, _core.html)`<h3>Success</h3>` : ""}
            ${notification.isWarning ? (0, _core.html)`<h3>Warning</h3>` : ""}
            ${notification.isDanger ? (0, _core.html)`<h3>Danger</h3>` : ""}
          </div>
          <span class="custom-text">
            <slot></slot>
          </span>
        </div>
        <div class="toggle-close">
          <pf-icons-times></pf-icons-times>
        </div>
      </div>
    `;
        }}`,
        styles: [
            (0, _core.css)`
      .notification-success{
        width: 300px;
        background-color: #ffffff;
        position: fixed;
        top: 0;
        right: 0;
        margin-top: 10px;
        margin-right: 10px;
        padding: 10px 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        color: #3e8635;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .layer-success {
        width: 5%;
        background-color: #4CAF50;
        border-radius: 3px;
      }
      .main-body{
        display: inline-flex;
        align-items: center;
        gap: 20px;
      }
      .toggle-close{
        color: #9E9E9E;
        cursor: pointer;
      }
      .icon {
        transform: translateY(2px);
      }
    `
        ],
        shadowOptions: {
            mode: "open"
        }
    })
], Notification);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","@lithium-framework/core":"hmv1B","@lithium-framework/router-element":"cZ2Eg","unofficial-pf-v5-wc":"bU1uI","unofficial-pf-v5-wc-icons":"7gm82","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8xTW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _navigation = require("./navigation");
parcelHelpers.exportAll(_navigation, exports);

},{"./navigation":"4Tsqr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Tsqr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Navigation", ()=>Navigation);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _core = require("@lithium-framework/core");
var _routerElement = require("@lithium-framework/router-element");
var _unofficialPfV5Wc = require("unofficial-pf-v5-wc");
var _unofficialPfV5WcIcons = require("unofficial-pf-v5-wc-icons");
class Navigation extends (0, _core.WebComponent) {
    connectedCallback() {
        super.connectedCallback();
        this.getRole();
    }
    getRole() {
        const userDataString = localStorage.getItem("userData");
        if (!userDataString) throw new Error("Utilisateur non connect\xe9. Aucune donn\xe9e dans localStorage.");
        const userData = JSON.parse(userDataString);
        console.log("Donn\xe9es utilisateur r\xe9cup\xe9r\xe9es:", userData);
        // Récupérer le rôle de l'utilisateur
        const userRole = userData.role;
        console.log("R\xf4le de l'utilisateur:", userRole);
        // Vérifier si le rôle est 'administrator' ou 'super-administrator' et mettre à jour isAdmin
        if (userRole === "administrator" || userRole === "super-administrator") this.isAdmin = true;
        else this.isAdmin = false;
        console.log("Est-ce un administrateur ? ", this.isAdmin);
    }
    logout() {
        localStorage.clear();
        window.location.href = "http://localhost:3000";
    }
    constructor(...args){
        super(...args);
        this.isAdmin = null;
    }
}
(0, _tsDecorate._)([
    (0, _core.state)()
], Navigation.prototype, "isAdmin", void 0);
Navigation = (0, _tsDecorate._)([
    (0, _core.customElement)({
        name: "navigation-panel",
        template: (0, _core.html)`${(navigation)=>{
            return (0, _core.html)`
    <div class="navigation">
      <div class="navigation-list">
        <div class="list"></div>
          <div class="item"><a href="/pages/cours">cours</a></div>
          <div class="item"><a href="/pages/informations">infos</a></div>
          <div class="item"><a href="/pages/compte">compte</a></div>
          <div class="item"><a href="/pages/profile">profile</a></div>
            ${navigation.isAdmin === true ? (0, _core.html)`<div class="item"><a href="/pages/dashboard">dashboard</a></div>` : (0, _core.html)``}
          </div>
          <div class="bottom-navigation">
            <pf-button @click="${()=>navigation.logout()}">Déconnexion</pf-button>
          </div>
      </div>
    </div>`;
        }}`,
        styles: [
            (0, _core.css)`
    .navigation{
        color: black;
        background-color: #ffffff;
        justify-content: space-between;
        flex-direction: column;
        display: flex;
      }
      .navigation-list{
        color: black;
        background-color: #ffffff;
        justify-content: space-between;
        flex-direction: column;
      }
      .list{
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .item{
        list-style: none;
        padding: 10px 10px;
        transition: 0.3s;
        cursor: pointer
      }
      .item:hover{
        background-color: lightgray
      }
      a{
        color: black;
        text-decoration: none;
      }
    `
        ]
    })
], Navigation);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","@lithium-framework/core":"hmv1B","@lithium-framework/router-element":"cZ2Eg","unofficial-pf-v5-wc":"bU1uI","unofficial-pf-v5-wc-icons":"7gm82","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["5nziR"], null, "parcelRequirec605")

//# sourceMappingURL=index.97219e0f.js.map
