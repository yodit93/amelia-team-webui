(() => { // webpackBootstrap
"use strict";
var __webpack_modules__ = ({
"./src/App.css?717d": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      // 1741696958295
      var cssReload = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@rspack/core/dist/builtin-plugin/css-extract/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, function(__WEBPACK_OUTDATED_DEPENDENCIES__) {
(cssReload)(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
    }
  

}),
"./src/features/gemini-chat/components/ChatWithGemini.module.css?9249": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// extracted by css-extract-rspack-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"src-features-gemini-chat-components-ChatWithGemini-module__container-tEvqyc","messages":"src-features-gemini-chat-components-ChatWithGemini-module__messages-CVOZ2k","messageInputContainer":"src-features-gemini-chat-components-ChatWithGemini-module__messageInputContainer-KbdaCb","textarea":"src-features-gemini-chat-components-ChatWithGemini-module__textarea-sLnamV","sendButton":"src-features-gemini-chat-components-ChatWithGemini-module__sendButton-ByC5e6","clearButton":"src-features-gemini-chat-components-ChatWithGemini-module__clearButton-WlGEW8","message":"src-features-gemini-chat-components-ChatWithGemini-module__message-CRQp78","userMessage":"src-features-gemini-chat-components-ChatWithGemini-module__userMessage-LVenYB","botMessage":"src-features-gemini-chat-components-ChatWithGemini-module__botMessage-Hllaos","loader":"src-features-gemini-chat-components-ChatWithGemini-module__loader-avC6HB","dot":"src-features-gemini-chat-components-ChatWithGemini-module__dot-LqkZQH","blink":"src-features-gemini-chat-components-ChatWithGemini-module__blink-B5bxSg","textRenderer":"src-features-gemini-chat-components-ChatWithGemini-module__textRenderer-Clqiyf"});
    if(true) {
      // 1741696958297
      var cssReload = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@rspack/core/dist/builtin-plugin/css-extract/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

}),
"./src/App.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* harmony import */var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/App.css?717d");
/* harmony import */var _features_gemini_chat_components_ChatWithGemini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/features/gemini-chat/components/ChatWithGemini.jsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



const App = ()=>{
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
            className: "chat",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_features_gemini_chat_components_ChatWithGemini__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
                fileName: "/home/yodit/frelance/amelia-team-webui/src/App.jsx",
                lineNumber: 8,
                columnNumber: 5
            }, undefined)
        }, void 0, false, {
            fileName: "/home/yodit/frelance/amelia-team-webui/src/App.jsx",
            lineNumber: 7,
            columnNumber: 4
        }, undefined)
    }, void 0, false, {
        fileName: "/home/yodit/frelance/amelia-team-webui/src/App.jsx",
        lineNumber: 6,
        columnNumber: 3
    }, undefined);
};
_c = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
$RefreshReg$(_c, "App");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/config.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  config: function() { return config; }
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
const config = {
    "API_KEY": "AIzaSyAmrbX783UEzM5A5uL-Xj5oL0VXIMinqFM",
    "AMELIA_PROMPT": "AmeliaAIchatbotAmeliaTeam:SpQtsFeatureSugChatProj:Spanish:WebPage,LandingPage,MobileApp,SDKWebview:HumanPricing:ProjSummaryValidation:StrictProjConvers"
};

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/features/gemini-chat/components/ChatWithGemini.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-markdown/lib/index.js");
/* harmony import */var _hooks_useGemini__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/features/gemini-chat/hooks/useGemini.jsx");
/* harmony import */var _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/features/gemini-chat/components/ChatWithGemini.module.css?9249");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();





const ChatWithGemini = ()=>{
    _s();
    var _s1 = $RefreshSig$();
    const { messages, loading, sendMessages, updateMessage } = (0,_hooks_useGemini__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const AlwaysScrollToBottom = ()=>{
        _s1();
        const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>elementRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            }));
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            ref: elementRef
        }, void 0, false, {
            fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
            lineNumber: 20,
            columnNumber: 10
        }, undefined);
    };
    _s1(AlwaysScrollToBottom, "CKe/C9l/PZDcdMrjDfTWxieUegY=");
    const handleSend = async ()=>{
        if (!input) return;
        setInput("");
        updateMessage([
            ...messages,
            {
                role: "user",
                parts: [
                    {
                        text: input
                    }
                ]
            }
        ]);
        sendMessages({
            message: input,
            history: messages
        });
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].container,
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].messages,
                    children: [
                        messages.length > 0 ? messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RenderMessage, {
                                loading: loading,
                                messageLength: messages.length,
                                message: message,
                                msgIndex: index
                            }, `chat-message-${index}-${message.role}`, false, {
                                fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                                lineNumber: 36,
                                columnNumber: 8
                            }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Introduction, {}, void 0, false, {
                            fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                            lineNumber: 45,
                            columnNumber: 7
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AlwaysScrollToBottom, {}, void 0, false, {
                            fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                            lineNumber: 47,
                            columnNumber: 6
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                    lineNumber: 33,
                    columnNumber: 5
                }, undefined)
            }, void 0, false, {
                fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                lineNumber: 32,
                columnNumber: 4
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].messageInputContainer,
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                        placeholder: "Type a message",
                        value: input || "",
                        rows: "3",
                        className: _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].textarea,
                        onChange: (e)=>setInput(e.target.value),
                        onKeyDown: (e)=>{
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }
                    }, void 0, false, {
                        fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                        lineNumber: 51,
                        columnNumber: 5
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                type: "button",
                                className: _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].sendButton,
                                onClick: handleSend,
                                children: "Send"
                            }, void 0, false, {
                                fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                                lineNumber: 65,
                                columnNumber: 6
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                type: "button",
                                className: _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].clearButton,
                                onClick: ()=>updateMessage([]),
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                                lineNumber: 72,
                                columnNumber: 6
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                        lineNumber: 64,
                        columnNumber: 5
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                lineNumber: 50,
                columnNumber: 4
            }, undefined)
        ]
    }, void 0, true);
};
_s(ChatWithGemini, "Ix4WoUV4wgRkSRI7o3H4TVBWMss=", false, function() {
    return [
        _hooks_useGemini__WEBPACK_IMPORTED_MODULE_2__["default"]
    ];
});
_c = ChatWithGemini;
const Introduction = ()=>{
    const TextRenderer = (param)=>{
        let { value = "", direction = "r", size = "large" } = param;
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].textRenderer,
            style: {
                fontSize: size,
                backgroundImage: `linear-gradient(to-${direction}, #63B3ED, #319795)`
            },
            children: value
        }, void 0, false, {
            fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
            lineNumber: 87,
            columnNumber: 3
        }, undefined);
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col items-center justify-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex flex-col items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextRenderer, {
                    value: "Amelia Chat",
                    size: "xxx-large"
                }, void 0, false, {
                    fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                    lineNumber: 101,
                    columnNumber: 5
                }, undefined)
            }, void 0, false, {
                fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                lineNumber: 100,
                columnNumber: 4
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex flex-col items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TextRenderer, {
                    value: "I am a virtual sales agent created by the Amelia team"
                }, void 0, false, {
                    fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                    lineNumber: 104,
                    columnNumber: 5
                }, undefined)
            }, void 0, false, {
                fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                lineNumber: 103,
                columnNumber: 4
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
        lineNumber: 99,
        columnNumber: 3
    }, undefined);
};
_c1 = Introduction;
const RenderMessage = (param)=>{
    let { message, msgIndex, loading, messageLength } = param;
    const { parts, role } = message;
    const Loader = ()=>msgIndex === messageLength - 1 && loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].loader,
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].dot
                }, void 0, false, {
                    fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                    lineNumber: 116,
                    columnNumber: 5
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].dot
                }, void 0, false, {
                    fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                    lineNumber: 117,
                    columnNumber: 5
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].dot
                }, void 0, false, {
                    fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                    lineNumber: 118,
                    columnNumber: 5
                }, undefined)
            ]
        }, `chat-message-${msgIndex}-loader`, true, {
            fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
            lineNumber: 115,
            columnNumber: 4
        }, undefined);
    return parts === null || parts === void 0 ? void 0 : parts.map((part, index)=>part.text ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                    className: `${_ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].message} ${role === "user" ? _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].userMessage : _ChatWithGemini_module_css__WEBPACK_IMPORTED_MODULE_3__["default"].botMessage}`,
                    initial: {
                        opacity: 0,
                        scale: 0.5,
                        y: 20,
                        x: role === "user" ? 20 : -20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        x: 0
                    },
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_5__.Markdown, {
                        components: {
                            p: (param)=>{
                                let { node, ...props } = param;
                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    ...props,
                                    className: "text-sm"
                                }, void 0, false, {
                                    fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                                    lineNumber: 139,
                                    columnNumber: 35
                                }, void 0);
                            },
                            code: (param)=>{
                                let { node, ...props } = param;
                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
                                    ...props,
                                    className: "text-sm font-mono text-white bg-slate-800 rounded-md p-2 overflow-auto m-2"
                                }, void 0, false, {
                                    fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                                    lineNumber: 141,
                                    columnNumber: 9
                                }, void 0);
                            }
                        },
                        children: part.text
                    }, `motion-message-part-${index}=${encodeURIComponent(part.text)}`, false, {
                        fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                        lineNumber: 136,
                        columnNumber: 6
                    }, undefined)
                }, `motion-message-part-${index}-${role}}`, false, {
                    fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                    lineNumber: 125,
                    columnNumber: 5
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loader, {}, `chat-message-${index}-${encodeURIComponent(part.text)}-loader`, false, {
                    fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
                    lineNumber: 151,
                    columnNumber: 5
                }, undefined)
            ]
        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loader, {}, `chat-message-${index}-${encodeURIComponent(part.text)}-loader`, false, {
            fileName: "/home/yodit/frelance/amelia-team-webui/src/features/gemini-chat/components/ChatWithGemini.jsx",
            lineNumber: 156,
            columnNumber: 4
        }, undefined));
};
_c2 = RenderMessage;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatWithGemini);
var _c, _c1, _c2;
$RefreshReg$(_c, "ChatWithGemini");
$RefreshReg$(_c1, "Introduction");
$RefreshReg$(_c2, "RenderMessage");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/features/gemini-chat/hooks/useGemini.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return useGemini; }
});
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _service_gemini_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/features/gemini-chat/service/gemini.service.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _s = $RefreshSig$();


function useGemini() {
    _s();
    const [messages, updateMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(checkForMessages());
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    function checkForMessages() {
        const savedMessages = localStorage.getItem("messages");
        return savedMessages ? JSON.parse(savedMessages) : [
            [
                {
                    role: "user",
                    parts: [
                        {
                            text: ""
                        }
                    ]
                },
                {
                    role: "model",
                    parts: [
                        {
                            text: "¡"
                        },
                        {
                            text: "Hola! Soy Amelia, un chatbot. Estoy aquí para ayudarte a crear una co"
                        },
                        {
                            text: "tización para tu chat bot. Por favor, dime más sobre tus necesidades y"
                        },
                        {
                            text: " requerimientos para que pueda ofrecerte una cotización adecuada. ¿Qué tipo de Chatbot te gustaría desarrollar? ¿Tienes alguna idea de las funcionalidades que debería tener? \n"
                        }
                    ]
                }
            ]
        ];
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const saveMessages = ()=>localStorage.setItem("messages", JSON.stringify(messages));
        window.addEventListener("beforeunload", saveMessages);
        return ()=>window.removeEventListener("beforeunload", saveMessages);
    }, [
        messages
    ]);
    const sendMessages = async (payload)=>{
        updateMessage((prevMessages)=>[
                ...prevMessages,
                {
                    role: "model",
                    parts: [
                        {
                            text: ""
                        }
                    ]
                }
            ]);
        setLoading(true);
        try {
            const stream = await _service_gemini_service__WEBPACK_IMPORTED_MODULE_1__["default"].sendMessages(payload.message, payload.history);
            setLoading(false);
            for await (const chunk of stream){
                const chuckText = chunk.text();
                updateMessage((prevMessages)=>{
                    const prevMessageClone = structuredClone(prevMessages);
                    prevMessageClone[prevMessages.length - 1].parts[0].text += chuckText;
                    return prevMessageClone;
                });
            }
        } catch (error) {
            updateMessage([
                ...messages,
                {
                    role: "model",
                    parts: [
                        {
                            text: "Parece que tengo problemas para conectarme a los servidores."
                        }
                    ]
                }
            ]);
            console.error("An error occurred:", error);
        } finally{
            setLoading(false);
        }
    };
    return {
        messages,
        loading,
        sendMessages,
        updateMessage
    };
}
_s(useGemini, "2RyPKlNW6s5p70ZtD7G2Xq6et+Q=");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/features/gemini-chat/service/gemini.service.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* harmony import */var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@google/generative-ai/dist/index.mjs");
/* harmony import */var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/config.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


const GeminiService = (()=>{
    const MODEL_NAME = "gemini-1.5-flash";
    const API_KEY = _config__WEBPACK_IMPORTED_MODULE_1__.config.API_KEY;
    const systemInstruction = _config__WEBPACK_IMPORTED_MODULE_1__.config.AMELIA_PROMPT || "AmeliaAIchatbotAmeliaTeam:SpQtsFeatureSugChatProj:Spanish:WebPage,LandingPage,MobileApp,SDKWebview:HumanPricing:ProjSummaryValidation:StrictProjConvers";
    const genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI(API_KEY);
    const service = {};
    service.sendMessages = async (message, prevChat)=>{
        const model = genAI.getGenerativeModel({
            model: MODEL_NAME,
            systemInstruction,
            safetySettings: [
                {
                    category: 'HARM_CATEGORY_HATE_SPEECH',
                    threshold: 'BLOCK_ONLY_HIGH'
                },
                {
                    category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                    threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                },
                {
                    category: 'HARM_CATEGORY_HARASSMENT',
                    threshold: 'BLOCK_ONLY_HIGH'
                },
                {
                    category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                    threshold: 'BLOCK_NONE'
                }
            ]
        });
        const chat = model.startChat({
            history: prevChat
        });
        const result = await chat.sendMessageStream(message);
        return result.stream;
    };
    return service;
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeminiService);

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),
"./src/index.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-dom/client.js");
/* harmony import */var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/App.jsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");




const root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), {
    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: "/home/yodit/frelance/amelia-team-webui/src/index.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, undefined)
}, void 0, false, {
    fileName: "/home/yodit/frelance/amelia-team-webui/src/index.jsx",
    lineNumber: 7,
    columnNumber: 3
}, undefined));

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
if (cachedModule.error !== undefined) throw cachedModule.error;
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
try {

var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
module = execOptions.module;
if (!execOptions.factory) {
  console.error("undefined factory", moduleId)
}
execOptions.factory.call(module.exports, module, module.exports, execOptions.require);

} catch (e) {
module.error = e;
throw e;
}
// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// expose the module cache
__webpack_require__.c = __webpack_module_cache__;

// expose the module execution interceptor
__webpack_require__.i = [];

/************************************************************************/
// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-harmony modules
__webpack_require__.n = function (module) {
	var getter = module && module.__esModule ?
		function () { return module['default']; } :
		function () { return module; };
	__webpack_require__.d(getter, { a: getter });
	return getter;
};




})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/get mini-css chunk filename
(() => {
// This function allow to reference chunks
        __webpack_require__.miniCssF = function (chunkId) {
          // return url for filenames not based on template
          
          // return url for filenames based on template
          return "" + chunkId + ".css";
        };
      
})();
// webpack/runtime/get_chunk_update_filename
(() => {
__webpack_require__.hu = function (chunkId) {
            return '' + chunkId + '.' + __webpack_require__.h() + '.hot-update.js';
         };
        
})();
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = function () {
	return "1e7b5cb95d5efc00";
};

})();
// webpack/runtime/get_main_filename/update manifest
(() => {
__webpack_require__.hmrF = function () {
            return "index." + __webpack_require__.h() + ".hot-update.json";
         };
        
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/hot_module_replacement
(() => {
var currentModuleData = {};
var installedModules = __webpack_require__.c;

// module and require creation
var currentChildModule;
var currentParents = [];

// status
var registeredStatusHandlers = [];
var currentStatus = "idle";

// while downloading
var blockingPromises = 0;
var blockingPromisesWaiting = [];

// The update info
var currentUpdateApplyHandlers;
var queuedInvalidatedModules;

__webpack_require__.hmrD = currentModuleData;
__webpack_require__.i.push(function (options) {
	var module = options.module;
	var require = createRequire(options.require, options.id);
	module.hot = createModuleHotObject(options.id, module);
	module.parents = currentParents;
	module.children = [];
	currentParents = [];
	options.require = require;
});

__webpack_require__.hmrC = {};
__webpack_require__.hmrI = {};

function createRequire(require, moduleId) {
	var me = installedModules[moduleId];
	if (!me) return require;
	var fn = function (request) {
		if (me.hot.active) {
			if (installedModules[request]) {
				var parents = installedModules[request].parents;
				if (parents.indexOf(moduleId) === -1) {
					parents.push(moduleId);
				}
			} else {
				currentParents = [moduleId];
				currentChildModule = request;
			}
			if (me.children.indexOf(request) === -1) {
				me.children.push(request);
			}
		} else {
			console.warn(
				"[HMR] unexpected require(" +
				request +
				") from disposed module " +
				moduleId
			);
			currentParents = [];
		}
		return require(request);
	};
	var createPropertyDescriptor = function (name) {
		return {
			configurable: true,
			enumerable: true,
			get: function () {
				return require[name];
			},
			set: function (value) {
				require[name] = value;
			}
		};
	};
	for (var name in require) {
		if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
			Object.defineProperty(fn, name, createPropertyDescriptor(name));
		}
	}

	fn.e = function (chunkId, fetchPriority) {
		return trackBlockingPromise(require.e(chunkId, fetchPriority));
	};

	return fn;
}

function createModuleHotObject(moduleId, me) {
	var _main = currentChildModule !== moduleId;
	var hot = {
		_acceptedDependencies: {},
		_acceptedErrorHandlers: {},
		_declinedDependencies: {},
		_selfAccepted: false,
		_selfDeclined: false,
		_selfInvalidated: false,
		_disposeHandlers: [],
		_main: _main,
		_requireSelf: function () {
			currentParents = me.parents.slice();
			currentChildModule = _main ? undefined : moduleId;
			__webpack_require__(moduleId);
		},
		active: true,
		accept: function (dep, callback, errorHandler) {
			if (dep === undefined) hot._selfAccepted = true;
			else if (typeof dep === "function") hot._selfAccepted = dep;
			else if (typeof dep === "object" && dep !== null) {
				for (var i = 0; i < dep.length; i++) {
					hot._acceptedDependencies[dep[i]] = callback || function () { };
					hot._acceptedErrorHandlers[dep[i]] = errorHandler;
				}
			} else {
				hot._acceptedDependencies[dep] = callback || function () { };
				hot._acceptedErrorHandlers[dep] = errorHandler;
			}
		},
		decline: function (dep) {
			if (dep === undefined) hot._selfDeclined = true;
			else if (typeof dep === "object" && dep !== null)
				for (var i = 0; i < dep.length; i++)
					hot._declinedDependencies[dep[i]] = true;
			else hot._declinedDependencies[dep] = true;
		},
		dispose: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		addDisposeHandler: function (callback) {
			hot._disposeHandlers.push(callback);
		},
		removeDisposeHandler: function (callback) {
			var idx = hot._disposeHandlers.indexOf(callback);
			if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
		},
		invalidate: function () {
			this._selfInvalidated = true;
			switch (currentStatus) {
				case "idle":
					currentUpdateApplyHandlers = [];
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					setStatus("ready");
					break;
				case "ready":
					Object.keys(__webpack_require__.hmrI).forEach(function (key) {
						__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
					});
					break;
				case "prepare":
				case "check":
				case "dispose":
				case "apply":
					(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
						moduleId
					);
					break;
				default:
					break;
			}
		},
		check: hotCheck,
		apply: hotApply,
		status: function (l) {
			if (!l) return currentStatus;
			registeredStatusHandlers.push(l);
		},
		addStatusHandler: function (l) {
			registeredStatusHandlers.push(l);
		},
		removeStatusHandler: function (l) {
			var idx = registeredStatusHandlers.indexOf(l);
			if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
		},
		data: currentModuleData[moduleId]
	};
	currentChildModule = undefined;
	return hot;
}

function setStatus(newStatus) {
	currentStatus = newStatus; 
	var results = [];
	for (var i = 0; i < registeredStatusHandlers.length; i++)
		results[i] = registeredStatusHandlers[i].call(null, newStatus);

	return Promise.all(results).then(function () { });
}

function unblock() {
	if (--blockingPromises === 0) {
		setStatus("ready").then(function () {
			if (blockingPromises === 0) {
				var list = blockingPromisesWaiting;
				blockingPromisesWaiting = [];
				for (var i = 0; i < list.length; i++) {
					list[i]();
				}
			}
		});
	}
}

function trackBlockingPromise(promise) {
	switch (currentStatus) {
		case "ready":
			setStatus("prepare");
		case "prepare":
			blockingPromises++;
			promise.then(unblock, unblock);
			return promise;
		default:
			return promise;
	}
}

function waitForBlockingPromises(fn) {
	if (blockingPromises === 0) return fn();
	return new Promise(function (resolve) {
		blockingPromisesWaiting.push(function () {
			resolve(fn());
		});
	});
}

function hotCheck(applyOnUpdate) {
	if (currentStatus !== "idle") {
		throw new Error("check() is only allowed in idle status");
	} 
	return setStatus("check")
		.then(__webpack_require__.hmrM)
		.then(function (update) {
			if (!update) {
				return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
					function () {
						return null;
					}
				);
			}

			return setStatus("prepare").then(function () {
				var updatedModules = [];
				currentUpdateApplyHandlers = [];

				return Promise.all(
					Object.keys(__webpack_require__.hmrC).reduce(function (
						promises,
						key
					) {
						__webpack_require__.hmrC[key](
							update.c,
							update.r,
							update.m,
							promises,
							currentUpdateApplyHandlers,
							updatedModules
						);
						return promises;
					},
						[])
				).then(function () {
					return waitForBlockingPromises(function () {
						if (applyOnUpdate) {
							return internalApply(applyOnUpdate);
						} else {
							return setStatus("ready").then(function () {
								return updatedModules;
							});
						}
					});
				});
			});
		});
}

function hotApply(options) {
	if (currentStatus !== "ready") {
		return Promise.resolve().then(function () {
			throw new Error(
				"apply() is only allowed in ready status (state: " + currentStatus + ")"
			);
		});
	}
	return internalApply(options);
}

function internalApply(options) {
	options = options || {};
	applyInvalidatedModules();
	var results = currentUpdateApplyHandlers.map(function (handler) {
		return handler(options);
	});
	currentUpdateApplyHandlers = undefined;
	var errors = results
		.map(function (r) {
			return r.error;
		})
		.filter(Boolean);

	if (errors.length > 0) {
		return setStatus("abort").then(function () {
			throw errors[0];
		});
	}

	var disposePromise = setStatus("dispose");

	results.forEach(function (result) {
		if (result.dispose) result.dispose();
	});

	var applyPromise = setStatus("apply");

	var error;
	var reportError = function (err) {
		if (!error) error = err;
	};

	var outdatedModules = [];
	results.forEach(function (result) {
		if (result.apply) {
			var modules = result.apply(reportError);
			if (modules) {
				for (var i = 0; i < modules.length; i++) {
					outdatedModules.push(modules[i]);
				}
			}
		}
	});

	return Promise.all([disposePromise, applyPromise]).then(function () {
		if (error) {
			return setStatus("fail").then(function () {
				throw error;
			});
		}

		if (queuedInvalidatedModules) {
			return internalApply(options).then(function (list) {
				outdatedModules.forEach(function (moduleId) {
					if (list.indexOf(moduleId) < 0) list.push(moduleId);
				});
				return list;
			});
		}

		return setStatus("idle").then(function () {
			return outdatedModules;
		});
	});
}

function applyInvalidatedModules() {
	if (queuedInvalidatedModules) {
		if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
		Object.keys(__webpack_require__.hmrI).forEach(function (key) {
			queuedInvalidatedModules.forEach(function (moduleId) {
				__webpack_require__.hmrI[key](moduleId, currentUpdateApplyHandlers);
			});
		});
		queuedInvalidatedModules = undefined;
		return true;
	}
}

})();
// webpack/runtime/load_script
(() => {
var inProgress = {};

var dataWebpackPrefix = "rsbuild-react-js:";
// loadScript function to load a script via script tag
__webpack_require__.l = function (url, done, key, chunkId) {
	if (inProgress[url]) {
		inProgress[url].push(done);
		return;
	}
	var script, needAttach;
	if (key !== undefined) {
		var scripts = document.getElementsByTagName("script");
		for (var i = 0; i < scripts.length; i++) {
			var s = scripts[i];
			if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
				script = s;
				break;
			}
		}
	}
	if (!script) {
		needAttach = true;
		script = document.createElement('script');
		
		script.charset = 'utf-8';
		script.timeout = 120;
		if (__webpack_require__.nc) {
			script.setAttribute("nonce", __webpack_require__.nc);
		}
		script.setAttribute("data-webpack", dataWebpackPrefix + key);
		
		script.src = url;

		
	}
	inProgress[url] = [done];
	var onScriptComplete = function (prev, event) {
		script.onerror = script.onload = null;
		clearTimeout(timeout);
		var doneFns = inProgress[url];
		delete inProgress[url];
		script.parentNode && script.parentNode.removeChild(script);
		doneFns &&
			doneFns.forEach(function (fn) {
				return fn(event);
			});
		if (prev) return prev(event);
	};
	var timeout = setTimeout(
		onScriptComplete.bind(null, undefined, {
			type: 'timeout',
			target: script
		}),
		120000
	);
	script.onerror = onScriptComplete.bind(null, script.onerror);
	script.onload = onScriptComplete.bind(null, script.onload);
	needAttach && document.head.appendChild(script);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
// webpack/runtime/node_module_decorator
(() => {
__webpack_require__.nmd = function (module) {
    module.paths = [];
    if (!module.children) module.children = [];
    return module;
};
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = function (result, chunkIds, fn, priority) {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var chunkIds = deferred[i][0],
			fn = deferred[i][1],
			priority = deferred[i][2];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every(function (key) {
					return __webpack_require__.O[key](chunkIds[j]);
				})
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/public_path
(() => {
__webpack_require__.p = "/";

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = function () {
	return "1.0.0-alpha.5";
};

})();
// webpack/runtime/css loading
(() => {
if (typeof document === "undefined") return;
var createStylesheet = function (
	chunkId, fullhref, oldTag, resolve, reject
) {
	var linkTag = document.createElement("link");
	
	linkTag.rel = "stylesheet";
	linkTag.type="text/css";
	if (__webpack_require__.nc) {
		linkTag.nonce = __webpack_require__.nc;
	}
	var onLinkComplete = function (event) {
		// avoid mem leaks.
		linkTag.onerror = linkTag.onload = null;
		if (event.type === 'load') {
			resolve();
		} else {
			var errorType = event && (event.type === 'load' ? 'missing' : event.type);
			var realHref = event && event.target && event.target.href || fullhref;
			var err = new Error("Loading CSS chunk " + chunkId + " failed.\\n(" + realHref + ")");
			err.code = "CSS_CHUNK_LOAD_FAILED";
			err.type = errorType;
			err.request = realHref;
			if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
			reject(err);
		}
	}

	linkTag.onerror = linkTag.onload = onLinkComplete;
	linkTag.href = fullhref;
	
	if (oldTag) {
  oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
} else {
  document.head.appendChild(linkTag);
}
	return linkTag;
}
var findStylesheet = function (href, fullhref) {
	var existingLinkTags = document.getElementsByTagName("link");
	for (var i = 0; i < existingLinkTags.length; i++) {
		var tag = existingLinkTags[i];
		var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
		if (tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
	}

	var existingStyleTags = document.getElementsByTagName("style");
	for (var i = 0; i < existingStyleTags.length; i++) {
		var tag = existingStyleTags[i];
		var dataHref = tag.getAttribute("data-href");
		if (dataHref === href || dataHref === fullhref) return tag;
	}
}

var loadStylesheet = function (chunkId) {
	return new Promise(function (resolve, reject) {
		var href = __webpack_require__.miniCssF(chunkId);
		var fullhref = __webpack_require__.p + href;
		if (findStylesheet(href, fullhref)) return resolve();
		createStylesheet(chunkId, fullhref, null, resolve, reject);
	})
}

// no chunk loading
var oldTags = [];
var newTags = [];
var applyHandler = function (options) {
	return {
		dispose: function () {
			for (var i = 0; i < oldTags.length; i++) {
				var oldTag = oldTags[i];
				if (oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
			}
			oldTags.length = 0;
		},
		apply: function () {
			for (var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
			newTags.length = 0;
		}
	}
}
__webpack_require__.hmrC.miniCss = function (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
	applyHandlers.push(applyHandler);
	chunkIds.forEach(function (chunkId) {
		var href = __webpack_require__.miniCssF(chunkId);
		var fullhref = __webpack_require__.p + href;
		var oldTag = findStylesheet(href, fullhref);
		if (!oldTag) return;
		promises.push(new Promise(function (resolve, reject) {
			var tag = createStylesheet(
				chunkId,
				fullhref,
				oldTag,
				function () {
					tag.as = "style";
					tag.rel = "preload";
					resolve();
				},
				reject
			);
			oldTags.push(oldTag);
			newTags.push(tag);
		}))
	});
}


})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {"index": 0,};
      var currentUpdatedModulesList;
var waitingUpdateResolves = {};
function loadUpdateChunk(chunkId, updatedModulesList) {
	currentUpdatedModulesList = updatedModulesList;
	return new Promise(function (resolve, reject) {
		waitingUpdateResolves[chunkId] = resolve;
		// start update chunk loading
		var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
		// create error before stack unwound to get useful stacktrace later
		var error = new Error();
		var loadingEnded = function (event) {
			if (waitingUpdateResolves[chunkId]) {
				waitingUpdateResolves[chunkId] = undefined;
				var errorType =
					event && (event.type === 'load' ? 'missing' : event.type);
				var realSrc = event && event.target && event.target.src;
				error.message =
					'Loading hot update chunk ' +
					chunkId +
					' failed.\n(' +
					errorType +
					': ' +
					realSrc +
					')';
				error.name = 'ChunkLoadError';
				error.type = errorType;
				error.request = realSrc;
				reject(error);
			}
		};
		__webpack_require__.l(url, loadingEnded);
	});
}

self["webpackHotUpdatersbuild_react_js"] = function (chunkId, moreModules, runtime) {
	for (var moduleId in moreModules) {
		if (__webpack_require__.o(moreModules, moduleId)) {
			currentUpdate[moduleId] = moreModules[moduleId];
			if (currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
		}
	}
	if (runtime) currentUpdateRuntime.push(runtime);
	if (waitingUpdateResolves[chunkId]) {
		waitingUpdateResolves[chunkId]();
		waitingUpdateResolves[chunkId] = undefined;
	}
};
var currentUpdateChunks;
var currentUpdate;
var currentUpdateRemovedChunks;
var currentUpdateRuntime;
function applyHandler(options) {
	if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
	currentUpdateChunks = undefined;
	function getAffectedModuleEffects(updateModuleId) {
		var outdatedModules = [updateModuleId];
		var outdatedDependencies = {};
		var queue = outdatedModules.map(function (id) {
			return {
				chain: [id],
				id: id
			};
		});
		while (queue.length > 0) {
			var queueItem = queue.pop();
			var moduleId = queueItem.id;
			var chain = queueItem.chain;
			var module = __webpack_require__.c[moduleId];
			if (
				!module ||
				(module.hot._selfAccepted && !module.hot._selfInvalidated)
			) {
				continue;
			}

			if (module.hot._selfDeclined) {
				return {
					type: "self-declined",
					chain: chain,
					moduleId: moduleId
				};
			}

			if (module.hot._main) {
				return {
					type: "unaccepted",
					chain: chain,
					moduleId: moduleId
				};
			}

			for (var i = 0; i < module.parents.length; i++) {
				var parentId = module.parents[i];
				var parent = __webpack_require__.c[parentId];
				if (!parent) {
					continue;
				}
				if (parent.hot._declinedDependencies[moduleId]) {
					return {
						type: "declined",
						chain: chain.concat([parentId]),
						moduleId: moduleId,
						parentId: parentId
					};
				}
				if (outdatedModules.indexOf(parentId) !== -1) {
					continue;
				}
				if (parent.hot._acceptedDependencies[moduleId]) {
					if (!outdatedDependencies[parentId]) {
						outdatedDependencies[parentId] = [];
					}
					addAllToSet(outdatedDependencies[parentId], [moduleId]);
					continue;
				}
				delete outdatedDependencies[parentId];
				outdatedModules.push(parentId);
				queue.push({
					chain: chain.concat([parentId]),
					id: parentId
				});
			}
		}

		return {
			type: "accepted",
			moduleId: updateModuleId,
			outdatedModules: outdatedModules,
			outdatedDependencies: outdatedDependencies
		};
	}

	function addAllToSet(a, b) {
		for (var i = 0; i < b.length; i++) {
			var item = b[i];
			if (a.indexOf(item) === -1) a.push(item);
		}
	}

	var outdatedDependencies = {};
	var outdatedModules = [];
	var appliedUpdate = {};

	var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
		console.warn(
			"[HMR] unexpected require(" + module.id + ") to disposed module"
		);
	};

	for (var moduleId in currentUpdate) {
		if (__webpack_require__.o(currentUpdate, moduleId)) {
			var newModuleFactory = currentUpdate[moduleId];
			var result;
			if (newModuleFactory) {
				result = getAffectedModuleEffects(moduleId);
			} else {
				result = {
					type: "disposed",
					moduleId: moduleId
				};
			}
			var abortError = false;
			var doApply = false;
			var doDispose = false;
			var chainInfo = "";
			if (result.chain) {
				chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
			}
			switch (result.type) {
				case "self-declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of self decline: " + result.moduleId + chainInfo
						);
					break;
				case "declined":
					if (options.onDeclined) options.onDeclined(result);
					if (!options.ignoreDeclined)
						abortError = new Error(
							"Aborted because of declined dependency: " +
								result.moduleId +
								" in " +
								result.parentId +
								chainInfo
						);
					break;
				case "unaccepted":
					if (options.onUnaccepted) options.onUnaccepted(result);
					if (!options.ignoreUnaccepted)
						abortError = new Error(
							"Aborted because " + moduleId + " is not accepted" + chainInfo
						);
					break;
				case "accepted":
					if (options.onAccepted) options.onAccepted(result);
					doApply = true;
					break;
				case "disposed":
					if (options.onDisposed) options.onDisposed(result);
					doDispose = true;
					break;
				default:
					throw new Error("Unexception type " + result.type);
			}
			if (abortError) {
				return {
					error: abortError
				};
			}
			if (doApply) {
				appliedUpdate[moduleId] = newModuleFactory;
				addAllToSet(outdatedModules, result.outdatedModules);
				for (moduleId in result.outdatedDependencies) {
					if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
						if (!outdatedDependencies[moduleId])
							outdatedDependencies[moduleId] = [];
						addAllToSet(
							outdatedDependencies[moduleId],
							result.outdatedDependencies[moduleId]
						);
					}
				}
			}
			if (doDispose) {
				addAllToSet(outdatedModules, [result.moduleId]);
				appliedUpdate[moduleId] = warnUnexpectedRequire;
			}
		}
	}
	currentUpdate = undefined;

	var outdatedSelfAcceptedModules = [];
	for (var j = 0; j < outdatedModules.length; j++) {
		var outdatedModuleId = outdatedModules[j];
		var module = __webpack_require__.c[outdatedModuleId];
		if (
			module &&
			(module.hot._selfAccepted || module.hot._main) &&
			// removed self-accepted modules should not be required
			appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
			// when called invalidate self-accepting is not possible
			!module.hot._selfInvalidated
		) {
			outdatedSelfAcceptedModules.push({
				module: outdatedModuleId,
				require: module.hot._requireSelf,
				errorHandler: module.hot._selfAccepted
			});
		}
	}

	var moduleOutdatedDependencies;
	return {
		dispose: function () {
			currentUpdateRemovedChunks.forEach(function (chunkId) {
				delete installedChunks[chunkId];
			});
			currentUpdateRemovedChunks = undefined;

			var idx;
			var queue = outdatedModules.slice();
			while (queue.length > 0) {
				var moduleId = queue.pop();
				var module = __webpack_require__.c[moduleId];
				if (!module) continue;

				var data = {};

				// Call dispose handlers
				var disposeHandlers = module.hot._disposeHandlers;
				for (j = 0; j < disposeHandlers.length; j++) {
					disposeHandlers[j].call(null, data);
				}
				__webpack_require__.hmrD[moduleId] = data;

				module.hot.active = false;

				delete __webpack_require__.c[moduleId];

				delete outdatedDependencies[moduleId];

				for (j = 0; j < module.children.length; j++) {
					var child = __webpack_require__.c[module.children[j]];
					if (!child) continue;
					idx = child.parents.indexOf(moduleId);
					if (idx >= 0) {
						child.parents.splice(idx, 1);
					}
				}
			}

			var dependency;
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						for (j = 0; j < moduleOutdatedDependencies.length; j++) {
							dependency = moduleOutdatedDependencies[j];
							idx = module.children.indexOf(dependency);
							if (idx >= 0) module.children.splice(idx, 1);
						}
					}
				}
			}
		},
		apply: function (reportError) {
			// insert new code
			for (var updateModuleId in appliedUpdate) {
				if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
					__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
				}
			}

			// run new runtime modules
			for (var i = 0; i < currentUpdateRuntime.length; i++) {
				currentUpdateRuntime[i](__webpack_require__);
			}

			// call accept handlers
			for (var outdatedModuleId in outdatedDependencies) {
				if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
					var module = __webpack_require__.c[outdatedModuleId];
					if (module) {
						moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId];
						var callbacks = [];
						var errorHandlers = [];
						var dependenciesForCallbacks = [];
						for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
							var dependency = moduleOutdatedDependencies[j];
							var acceptCallback = module.hot._acceptedDependencies[dependency];
							var errorHandler = module.hot._acceptedErrorHandlers[dependency];
							if (acceptCallback) {
								if (callbacks.indexOf(acceptCallback) !== -1) continue;
								callbacks.push(acceptCallback);
								errorHandlers.push(errorHandler);
								dependenciesForCallbacks.push(dependency);
							}
						}
						for (var k = 0; k < callbacks.length; k++) {
							try {
								callbacks[k].call(null, moduleOutdatedDependencies);
							} catch (err) {
								if (typeof errorHandlers[k] === "function") {
									try {
										errorHandlers[k](err, {
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k]
										});
									} catch (err2) {
										if (options.onErrored) {
											options.onErrored({
												type: "accept-error-handler-errored",
												moduleId: outdatedModuleId,
												dependencyId: dependenciesForCallbacks[k],
												error: err2,
												originalError: err
											});
										}
										if (!options.ignoreErrored) {
											reportError(err2);
											reportError(err);
										}
									}
								} else {
									if (options.onErrored) {
										options.onErrored({
											type: "accept-errored",
											moduleId: outdatedModuleId,
											dependencyId: dependenciesForCallbacks[k],
											error: err
										});
									}
									if (!options.ignoreErrored) {
										reportError(err);
									}
								}
							}
						}
					}
				}
			}

			// Load self accepted modules
			for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
				var item = outdatedSelfAcceptedModules[o];
				var moduleId = item.module;
				try {
					item.require(moduleId);
				} catch (err) {
					if (typeof item.errorHandler === "function") {
						try {
							item.errorHandler(err, {
								moduleId: moduleId,
								module: __webpack_require__.c[moduleId]
							});
						} catch (err2) {
							if (options.onErrored) {
								options.onErrored({
									type: "self-accept-error-handler-errored",
									moduleId: moduleId,
									error: err2,
									originalError: err
								});
							}
							if (!options.ignoreErrored) {
								reportError(err2);
								reportError(err);
							}
						}
					} else {
						if (options.onErrored) {
							options.onErrored({
								type: "self-accept-errored",
								moduleId: moduleId,
								error: err
							});
						}
						if (!options.ignoreErrored) {
							reportError(err);
						}
					}
				}
			}

			return outdatedModules;
		}
	};
}

__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
	if (!currentUpdate) {
		currentUpdate = {};
		currentUpdateRuntime = [];
		currentUpdateRemovedChunks = [];
		applyHandlers.push(applyHandler);
	}
	if (!__webpack_require__.o(currentUpdate, moduleId)) {
		currentUpdate[moduleId] = __webpack_require__.m[moduleId];
	}
};

__webpack_require__.hmrC.jsonp = function (
	chunkIds,
	removedChunks,
	removedModules,
	promises,
	applyHandlers,
	updatedModulesList
) {
	applyHandlers.push(applyHandler);
	currentUpdateChunks = {};
	currentUpdateRemovedChunks = removedChunks;
	currentUpdate = removedModules.reduce(function (obj, key) {
		obj[key] = false;
		return obj;
	}, {});
	currentUpdateRuntime = [];
	chunkIds.forEach(function (chunkId) {
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId] !== undefined
		) {
			promises.push(loadUpdateChunk(chunkId, updatedModulesList));
			currentUpdateChunks[chunkId] = true;
		} else {
			currentUpdateChunks[chunkId] = false;
		}
	});
	if (__webpack_require__.f) {
		__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
			if (
				currentUpdateChunks &&
				__webpack_require__.o(currentUpdateChunks, chunkId) &&
				!currentUpdateChunks[chunkId]
			) {
				promises.push(loadUpdateChunk(chunkId));
				currentUpdateChunks[chunkId] = true;
			}
		};
	}
};
__webpack_require__.hmrM = function () {
	if (typeof fetch === "undefined")
		throw new Error("No browser support: need fetch API");
	return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(
		function (response) {
			if (response.status === 404) return; // no update available
			if (!response.ok)
				throw new Error(
					"Failed to fetch update manifest " + response.statusText
				);
			return response.json();
		}
	);
};
__webpack_require__.O.j = function (chunkId) {
	return installedChunks[chunkId] === 0;
};
// install a JSONP callback for chunk loading
var webpackJsonpCallback = function (parentChunkLoadingFunction, data) {
	var chunkIds = data[0];
	var moreModules = data[1];
	var runtime = data[2];
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId,
		chunkId,
		i = 0;
	if (chunkIds.some(function (id) { return installedChunks[id] !== 0 })) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	return __webpack_require__.O(result);
};

var chunkLoadingGlobal = self["webpackChunkrsbuild_react_js"] = self["webpackChunkrsbuild_react_js"] || [];
chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
chunkLoadingGlobal.push = webpackJsonpCallback.bind(
	null,
	chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
);

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.0.0-alpha.5";

})();
/************************************************************************/
// module cache are used so entry inlining is disabled
// startup
// Load entry module and return exports
__webpack_require__.O(undefined, ["lib-react", "vendors-node_modules_rsbuild_core_node_modules_rspack_core_dist_builtin-plugin_css-extract_hm-a575b3"], function() { return __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefreshEntry.js") });
var __webpack_exports__ = __webpack_require__.O(undefined, ["lib-react", "vendors-node_modules_rsbuild_core_node_modules_rspack_core_dist_builtin-plugin_css-extract_hm-a575b3"], function() { return __webpack_require__("./src/index.jsx") });
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;
//# sourceMappingURL=index.js.map