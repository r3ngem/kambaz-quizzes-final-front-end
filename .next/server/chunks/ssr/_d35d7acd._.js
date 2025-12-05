module.exports = [
"[project]/app/(Kambaz)/Account/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Nav$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Nav.js [app-ssr] (ecmascript) <export default as Nav>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavItem$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/NavItem.js [app-ssr] (ecmascript) <export default as NavItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavLink$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/NavLink.js [app-ssr] (ecmascript) <export default as NavLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function AccountNavigation() {
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.accountReducer);
    const links = currentUser ? [
        "Profile"
    ] : [
        "Signin",
        "Signup"
    ];
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Nav$3e$__["Nav"], {
        variant: "pills",
        children: [
            links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavItem$3e$__["NavItem"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavLink$3e$__["NavLink"], {
                            as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                            href: link,
                            active: pathname.endsWith(link.toLowerCase()),
                            children: [
                                link,
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(Kambaz)/Account/Navigation.tsx",
                            lineNumber: 15,
                            columnNumber: 10
                        }, this),
                        " "
                    ]
                }, link, true, {
                    fileName: "[project]/app/(Kambaz)/Account/Navigation.tsx",
                    lineNumber: 14,
                    columnNumber: 8
                }, this)),
            currentUser && currentUser.role === "ADMIN" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__NavLink$3e$__["NavLink"], {
                as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                href: `/Account/Users`,
                active: pathname.endsWith('Users'),
                children: " Users "
            }, void 0, false, {
                fileName: "[project]/app/(Kambaz)/Account/Navigation.tsx",
                lineNumber: 19,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(Kambaz)/Account/Navigation.tsx",
        lineNumber: 12,
        columnNumber: 4
    }, this);
}
}),
"[project]/node_modules/react-bootstrap/esm/NavbarContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
// TODO: check
const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
context.displayName = 'NavbarContext';
const __TURBOPACK__default__export__ = context;
}),
"[project]/node_modules/react-bootstrap/esm/CardHeaderContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const context = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
context.displayName = 'CardHeaderContext';
const __TURBOPACK__default__export__ = context;
}),
"[project]/node_modules/react-bootstrap/esm/NavItem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const NavItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, bsPrefix, as: Component = 'div', ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'nav-item');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix),
        ...props
    });
});
NavItem.displayName = 'NavItem';
const __TURBOPACK__default__export__ = NavItem;
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useCallbackRef.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = useCallbackRef;
var _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */ function useCallbackRef() {
    return (0, _react.useState)(null);
}
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useEventListener.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = useEventListener;
var _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _useEventCallback = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useEventCallback.js [app-ssr] (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */ function useEventListener(eventTarget, event, listener, capture = false) {
    const handler = (0, _useEventCallback.default)(listener);
    (0, _react.useEffect)(()=>{
        const target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
        target.addEventListener(event, handler, capture);
        return ()=>target.removeEventListener(event, handler, capture);
    }, [
        eventTarget
    ]);
}
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useGlobalListener.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = useGlobalListener;
var _useEventListener = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useEventListener.js [app-ssr] (ecmascript)"));
var _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */ function useGlobalListener(event, handler, capture = false) {
    const documentTarget = (0, _react.useCallback)(()=>document, []);
    return (0, _useEventListener.default)(documentTarget, event, handler, capture);
}
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useInterval.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _useCommittedRef = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useCommittedRef.js [app-ssr] (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Creates a `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  function Timer() {
 *    const [timer, setTimer] = useState(0)
 *    useInterval(() => setTimer(i => i + 1), 1000)
 *
 *    return <span>{timer} seconds past</span>
 *  }
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 */ /**
 * Creates a pausable `setInterval` that is properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [paused, setPaused] = useState(false)
 *  const [timer, setTimer] = useState(0)
 *
 *  useInterval(() => setTimer(i => i + 1), 1000, paused)
 *
 *  return (
 *    <span>
 *      {timer} seconds past
 *
 *      <button onClick={() => setPaused(p => !p)}>{paused ? 'Play' : 'Pause' }</button>
 *    </span>
 * )
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 */ /**
 * Creates a pausable `setInterval` that _fires_ immediately and is
 * properly cleaned up when a component unmounted
 *
 * ```tsx
 *  const [timer, setTimer] = useState(-1)
 *  useInterval(() => setTimer(i => i + 1), 1000, false, true)
 *
 *  // will update to 0 on the first effect
 *  return <span>{timer} seconds past</span>
 * ```
 *
 * @param fn an function run on each interval
 * @param ms The milliseconds duration of the interval
 * @param paused Whether or not the interval is currently running
 * @param runImmediately Whether to run the function immediately on mount or unpause
 * rather than waiting for the first interval to elapse
 *

 */ function useInterval(fn, ms, paused = false, runImmediately = false) {
    let handle;
    const fnRef = (0, _useCommittedRef.default)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, _useCommittedRef.default)(paused);
    const tick = ()=>{
        if (pausedRef.current) return;
        fnRef.current();
        schedule(); // eslint-disable-line no-use-before-define
    };
    const schedule = ()=>{
        clearTimeout(handle);
        handle = setTimeout(tick, ms);
    };
    (0, _react.useEffect)(()=>{
        if (runImmediately) {
            tick();
        } else {
            schedule();
        }
        return ()=>clearTimeout(handle);
    }, [
        paused,
        runImmediately
    ]);
}
var _default = useInterval;
exports.default = _default;
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useRafInterval.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _useCommittedRef = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useCommittedRef.js [app-ssr] (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function useRafInterval(fn, ms, paused = false) {
    let handle;
    let start = new Date().getTime();
    const fnRef = (0, _useCommittedRef.default)(fn);
    // this ref is necessary b/c useEffect will sometimes miss a paused toggle
    // orphaning a setTimeout chain in the aether, so relying on it's refresh logic is not reliable.
    const pausedRef = (0, _useCommittedRef.default)(paused);
    function loop() {
        const current = new Date().getTime();
        const delta = current - start;
        if (pausedRef.current) return;
        if (delta >= ms && fnRef.current) {
            fnRef.current();
            start = new Date().getTime();
        }
        cancelAnimationFrame(handle);
        handle = requestAnimationFrame(loop);
    }
    (0, _react.useEffect)(()=>{
        handle = requestAnimationFrame(loop);
        return ()=>cancelAnimationFrame(handle);
    }, []);
}
var _default = useRafInterval;
exports.default = _default;
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useMergeState.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = useMergeState;
var _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/**
 * Updates state, partial updates are merged into existing state values
 */ /**
 * Mimics a React class component's state model, of having a single unified
 * `state` object and an updater that merges updates into the existing state, as
 * opposed to replacing it.
 *
 * ```js
 * const [state, setState] = useMergeState({ name: 'Betsy', age: 24 })
 *
 * setState({ name: 'Johan' }) // { name: 'Johan', age: 24 }
 *
 * setState(state => ({ age: state.age + 10 })) // { name: 'Johan', age: 34 }
 * ```
 *
 * @param initialState The initial state object
 */ function useMergeState(initialState) {
    const [state, setState] = (0, _react.useState)(initialState);
    const updater = (0, _react.useCallback)((update)=>{
        if (update === null) return;
        if (typeof update === 'function') {
            setState((state)=>{
                const nextState = update(state);
                return nextState == null ? state : Object.assign({}, state, nextState);
            });
        } else {
            setState((state)=>Object.assign({}, state, update));
        }
    }, [
        setState
    ]);
    return [
        state,
        updater
    ];
}
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useMergeStateFromProps.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = useMergeStateFromProps;
var _useMergeState = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useMergeState.js [app-ssr] (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function useMergeStateFromProps(props, gDSFP, initialState) {
    const [state, setState] = (0, _useMergeState.default)(initialState);
    const nextState = gDSFP(props, state);
    if (nextState !== null) setState(nextState);
    return [
        state,
        setState
    ];
}
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useMounted.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = useMounted;
var _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */ function useMounted() {
    const mounted = (0, _react.useRef)(true);
    const isMounted = (0, _react.useRef)(()=>mounted.current);
    (0, _react.useEffect)(()=>{
        mounted.current = true;
        return ()=>{
            mounted.current = false;
        };
    }, []);
    return isMounted.current;
}
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/usePrevious.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = usePrevious;
var _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */ function usePrevious(value) {
    const ref = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        ref.current = value;
    });
    return ref.current;
}
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useImage.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = useImage;
var _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
/**
 * Fetch and load an image for programatic use such as in a `<canvas>` element.
 *
 * @param imageOrUrl The `HtmlImageElement` or image url to load
 * @param crossOrigin The `crossorigin` attribute to set
 *
 * ```ts
 * const { image, error } = useImage('/static/kittens.png')
 * const ref = useRef<HTMLCanvasElement>()
 *
 * useEffect(() => {
 *   const ctx = ref.current.getContext('2d')
 *
 *   if (image) {
 *     ctx.drawImage(image, 0, 0)
 *   }
 * }, [ref, image])
 *
 * return (
 *   <>
 *     {error && "there was a problem loading the image"}
 *     <canvas ref={ref} />
 *   </>
 * ```
 */ function useImage(imageOrUrl, crossOrigin) {
    const [state, setState] = (0, _react.useState)({
        image: null,
        error: null
    });
    (0, _react.useEffect)(()=>{
        if (!imageOrUrl) return undefined;
        let image;
        if (typeof imageOrUrl === 'string') {
            image = new Image();
            if (crossOrigin) image.crossOrigin = crossOrigin;
            image.src = imageOrUrl;
        } else {
            image = imageOrUrl;
            if (image.complete && image.naturalHeight > 0) {
                setState({
                    image,
                    error: null
                });
                return;
            }
        }
        function onLoad() {
            setState({
                image,
                error: null
            });
        }
        function onError(error) {
            setState({
                image,
                error
            });
        }
        image.addEventListener('load', onLoad);
        image.addEventListener('error', onError);
        return ()=>{
            image.removeEventListener('load', onLoad);
            image.removeEventListener('error', onError);
        };
    }, [
        imageOrUrl,
        crossOrigin
    ]);
    return state;
}
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useIsomorphicEffect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const isReactNative = ("TURBOPACK compile-time value", "object") !== 'undefined' && // @ts-ignore
/*TURBOPACK member replacement*/ __turbopack_context__.g.navigator && // @ts-ignore
/*TURBOPACK member replacement*/ __turbopack_context__.g.navigator.product === 'ReactNative';
const isDOM = typeof document !== 'undefined';
/**
 * Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
 * Only useful to avoid the console warning.
 *
 * PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
 *
 * @category effects
 */ var _default = isDOM || isReactNative ? _react.useLayoutEffect : _react.useEffect;
exports.default = _default;
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useResizeObserver.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = useResizeObserver;
var _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var _useIsomorphicEffect = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useIsomorphicEffect.js [app-ssr] (ecmascript)"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const targetMap = new WeakMap();
let resizeObserver;
function getResizeObserver() {
    // eslint-disable-next-line no-return-assign
    return resizeObserver = resizeObserver || new window.ResizeObserver((entries)=>{
        entries.forEach((entry)=>{
            const handler = targetMap.get(entry.target);
            if (handler) handler(entry.contentRect);
        });
    });
}
/**
 * Efficiently observe size changes on an element. Depends on the `ResizeObserver` api,
 * and polyfills are needed in older browsers.
 *
 * ```ts
 * const [ref, attachRef] = useCallbackRef(null);
 *
 * const rect = useResizeObserver(ref);
 *
 * return (
 *  <div ref={attachRef}>
 *    {JSON.stringify(rect)}
 *  </div>
 * )
 * ```
 *
 * @param element The DOM element to observe
 */ function useResizeObserver(element) {
    const [rect, setRect] = (0, _react.useState)(null);
    (0, _useIsomorphicEffect.default)(()=>{
        if (!element) return;
        getResizeObserver().observe(element);
        setRect(element.getBoundingClientRect());
        targetMap.set(element, (rect)=>{
            setRect(rect);
        });
        return ()=>{
            targetMap.delete(element);
        };
    }, [
        element
    ]);
    return rect;
}
}),
"[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
var _useCallbackRef = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useCallbackRef.js [app-ssr] (ecmascript)"));
exports.useCallbackRef = _useCallbackRef.default;
var _useCommittedRef = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useCommittedRef.js [app-ssr] (ecmascript)"));
exports.useCommittedRef = _useCommittedRef.default;
var _useEventCallback = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useEventCallback.js [app-ssr] (ecmascript)"));
exports.useEventCallback = _useEventCallback.default;
var _useEventListener = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useEventListener.js [app-ssr] (ecmascript)"));
exports.useEventListener = _useEventListener.default;
var _useGlobalListener = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useGlobalListener.js [app-ssr] (ecmascript)"));
exports.useGlobalListener = _useGlobalListener.default;
var _useInterval = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useInterval.js [app-ssr] (ecmascript)"));
exports.useInterval = _useInterval.default;
var _useRafInterval = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useRafInterval.js [app-ssr] (ecmascript)"));
exports.useRafInterval = _useRafInterval.default;
var _useMergeState = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useMergeState.js [app-ssr] (ecmascript)"));
exports.useMergeState = _useMergeState.default;
var _useMergeStateFromProps = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useMergeStateFromProps.js [app-ssr] (ecmascript)"));
exports.useMergeStateFromProps = _useMergeStateFromProps.default;
var _useMounted = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useMounted.js [app-ssr] (ecmascript)"));
exports.useMounted = _useMounted.default;
var _usePrevious = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/usePrevious.js [app-ssr] (ecmascript)"));
exports.usePrevious = _usePrevious.default;
var _useImage = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useImage.js [app-ssr] (ecmascript)"));
exports.useImage = _useImage.default;
var _useResizeObserver = _interopRequireDefault(__turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/useResizeObserver.js [app-ssr] (ecmascript)"));
exports.useResizeObserver = _useResizeObserver.default;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
}),
"[project]/node_modules/@restart/ui/cjs/Anchor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.default = void 0;
exports.isTrivialHref = isTrivialHref;
var React = _interopRequireWildcard(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
var _hooks = __turbopack_context__.r("[project]/node_modules/@restart/ui/node_modules/@restart/hooks/cjs/index.js [app-ssr] (ecmascript)");
var _Button = __turbopack_context__.r("[project]/node_modules/@restart/ui/cjs/Button.js [app-ssr] (ecmascript)");
var _jsxRuntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _excluded = [
    "onKeyDown"
];
/* eslint-disable jsx-a11y/no-static-element-interactions */ /* eslint-disable jsx-a11y/anchor-has-content */ function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = new WeakMap(), t = new WeakMap();
    return (_getRequireWildcardCache = function(e) {
        return e ? t : r;
    })(e);
}
function _interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != typeof e && "function" != typeof e) return {
        default: e
    };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
        __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var u in e)if ("default" !== u && ({}).hasOwnProperty.call(e, u)) {
        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, t && t.set(e, n), n;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (e.indexOf(n) >= 0) continue;
        t[n] = r[n];
    }
    return t;
}
function isTrivialHref(href) {
    return !href || href.trim() === '#';
}
/**
 * An generic `<a>` component that covers a few A11y cases, ensuring that
 * cases where the `href` is missing or trivial like "#" are treated like buttons.
 */ const Anchor = /*#__PURE__*/ React.forwardRef((_ref, ref)=>{
    let { onKeyDown } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
    const [buttonProps] = (0, _Button.useButtonProps)(Object.assign({
        tagName: 'a'
    }, props));
    const handleKeyDown = (0, _hooks.useEventCallback)((e)=>{
        buttonProps.onKeyDown(e);
        onKeyDown == null ? void 0 : onKeyDown(e);
    });
    if (isTrivialHref(props.href) || props.role === 'button') {
        return /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", Object.assign({
            ref: ref
        }, props, buttonProps, {
            onKeyDown: handleKeyDown
        }));
    }
    return /*#__PURE__*/ (0, _jsxRuntime.jsx)("a", Object.assign({
        ref: ref
    }, props, {
        onKeyDown: onKeyDown
    }));
});
Anchor.displayName = 'Anchor';
var _default = exports.default = Anchor;
}),
"[project]/node_modules/react-bootstrap/esm/NavLink.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$ui$2f$cjs$2f$Anchor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@restart/ui/cjs/Anchor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$ui$2f$cjs$2f$NavItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@restart/ui/cjs/NavItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$ui$2f$cjs$2f$SelectableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@restart/ui/cjs/SelectableContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const NavLink = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ bsPrefix, className, as: Component = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$ui$2f$cjs$2f$Anchor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], active, eventKey, disabled = false, ...props }, ref)=>{
    bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(bsPrefix, 'nav-link');
    const [navItemProps, meta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$ui$2f$cjs$2f$NavItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavItem"])({
        key: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$ui$2f$cjs$2f$SelectableContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeEventKey"])(eventKey, props.href),
        active,
        disabled,
        ...props
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ...props,
        ...navItemProps,
        ref: ref,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, bsPrefix, disabled && 'disabled', meta.isActive && 'active')
    });
});
NavLink.displayName = 'NavLink';
const __TURBOPACK__default__export__ = NavLink;
}),
"[project]/node_modules/react-bootstrap/esm/Nav.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/uncontrollable/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__ = __turbopack_context__.i("[project]/node_modules/uncontrollable/lib/esm/hook.js [app-ssr] (ecmascript) <export default as useUncontrolled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$ui$2f$cjs$2f$Nav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@restart/ui/cjs/Nav.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ThemeProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/NavbarContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeaderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/CardHeaderContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/NavItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/NavLink.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const Nav = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((uncontrolledProps, ref)=>{
    const { as = 'div', bsPrefix: initialBsPrefix, variant, fill = false, justify = false, navbar, navbarScroll, className, activeKey, ...props } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uncontrollable$2f$lib$2f$esm$2f$hook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useUncontrolled$3e$__["useUncontrolled"])(uncontrolledProps, {
        activeKey: 'onSelect'
    });
    const bsPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ThemeProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBootstrapPrefix"])(initialBsPrefix, 'nav');
    let navbarBsPrefix;
    let cardHeaderBsPrefix;
    let isNavbar = false;
    const navbarContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavbarContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const cardHeaderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$CardHeaderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    if (navbarContext) {
        navbarBsPrefix = navbarContext.bsPrefix;
        isNavbar = navbar == null ? true : navbar;
    } else if (cardHeaderContext) {
        ({ cardHeaderBsPrefix } = cardHeaderContext);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$restart$2f$ui$2f$cjs$2f$Nav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        as: as,
        ref: ref,
        activeKey: activeKey,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, {
            [bsPrefix]: !isNavbar,
            [`${navbarBsPrefix}-nav`]: isNavbar,
            [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
            [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
            [`${bsPrefix}-${variant}`]: !!variant,
            [`${bsPrefix}-fill`]: fill,
            [`${bsPrefix}-justified`]: justify
        }),
        ...props
    });
});
Nav.displayName = 'Nav';
const __TURBOPACK__default__export__ = Object.assign(Nav, {
    Item: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    Link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
}),
"[project]/node_modules/react-bootstrap/esm/Nav.js [app-ssr] (ecmascript) <export default as Nav>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Nav$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Nav.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/react-bootstrap/esm/NavItem.js [app-ssr] (ecmascript) <export default as NavItem>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/NavItem.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/react-bootstrap/esm/NavLink.js [app-ssr] (ecmascript) <export default as NavLink>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavLink",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$NavLink$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/NavLink.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_d35d7acd._.js.map