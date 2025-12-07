(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/(Kambaz)/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KambazNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lia$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lia/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ListGroup.js [app-client] (ecmascript) <export default as ListGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/ListGroupItem.js [app-client] (ecmascript) <export default as ListGroupItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function KambazNavigation() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const links = [
        {
            label: "Dashboard",
            path: "/Dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineDashboard"]
        },
        {
            label: "Courses",
            path: "/Courses",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lia$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiaBookSolid"]
        },
        {
            label: "Calendar",
            path: "/Calendar",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCalendarOutline"]
        },
        {
            label: "Inbox",
            path: "/Inbox",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInbox"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroup$3e$__["ListGroup"], {
        className: "rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2",
        style: {
            width: 120
        },
        id: "wd-kambaz-navigation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
                id: "wd-neu-link",
                target: "_blank",
                href: "https://www.northeastern.edu/",
                action: true,
                className: "bg-black border-0 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/NEU.png",
                    width: "75px"
                }, void 0, false, {
                    fileName: "[project]/app/(Kambaz)/Navigation.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(Kambaz)/Navigation.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
                as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                href: "/Account",
                className: "text-center border-0 bg-black\n            ".concat(pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaRegCircleUser"], {
                        className: "fs-1 ".concat(pathname.includes("Account") ? "text-danger" : "text-white")
                    }, void 0, false, {
                        fileName: "[project]/app/(Kambaz)/Navigation.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/app/(Kambaz)/Navigation.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    "Account"
                ]
            }, void 0, true, {
                fileName: "[project]/app/(Kambaz)/Navigation.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$ListGroupItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListGroupItem$3e$__["ListGroupItem"], {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                    href: link.path,
                    className: "bg-black text-center border-0\n              ".concat(pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"),
                    children: [
                        link.icon({
                            className: "fs-1 text-danger"
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/app/(Kambaz)/Navigation.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        link.label
                    ]
                }, link.path, true, {
                    fileName: "[project]/app/(Kambaz)/Navigation.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(Kambaz)/Navigation.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(KambazNavigation, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = KambazNavigation;
var _c;
__turbopack_context__.k.register(_c, "KambazNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(Kambaz)/Database/courses.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"_id\":\"RS101\",\"name\":\"Rocket Propulsion\",\"number\":\"RS4550\",\"startDate\":\"2023-01-10\",\"endDate\":\"2023-05-15\",\"department\":\"D123\",\"credits\":4,\"description\":\"This course provides an in-depth study of the fundamentals of rocket propulsion, covering topics such as propulsion theory, engine types, fuel chemistry, and the practical applications of rocket technology. Designed for students with a strong background in physics and engineering, the course includes both theoretical instruction and hands-on laboratory work\"},{\"_id\":\"RS102\",\"name\":\"Aerodynamics\",\"number\":\"RS4560\",\"startDate\":\"2023-01-10\",\"endDate\":\"2023-05-15\",\"department\":\"D123\",\"credits\":3,\"description\":\"This course offers a comprehensive exploration of aerodynamics, focusing on the principles and applications of airflow and its effects on flying objects. Topics include fluid dynamics, airfoil design, lift and drag forces, and the aerodynamic considerations in aircraft design. The course blends theoretical learning with practical applications, suitable for students pursuing a career in aeronautics or astronautics engineering.\"},{\"_id\":\"RS103\",\"name\":\"Spacecraft Design\",\"number\":\"RS4570\",\"startDate\":\"2023-01-10\",\"endDate\":\"2023-05-15\",\"department\":\"D123\",\"credits\":4,\"description\":\"This course delves into the principles and practices of spacecraft design, offering students a detailed understanding of the engineering and technology behind spacecraft systems. Key topics include spacecraft structure, propulsion, power systems, thermal control, and payload integration. Emphasizing both theoretical concepts and practical skills, the course prepares students for careers in the space industry, with a focus on innovative design and problem-solving in the context of current and future space missions\"},{\"_id\":\"RS104\",\"name\":\"Organic Chemistry\",\"number\":\"CH1230\",\"startDate\":\"2023-01-10\",\"endDate\":\"2023-05-15\",\"department\":\"D134\",\"credits\":3,\"description\":\"Organic Chemistry is an in-depth course that explores the structure, properties, composition, and reactions of organic compounds and materials. The course covers various topics including hydrocarbons, functional groups, stereochemistry, and organic synthesis techniques. Students will learn about the mechanisms of organic reactions, spectroscopic methods for structure determination, and the role of organic chemistry in biological systems. Emphasis is placed on problem-solving and laboratory skills, preparing students for advanced studies in chemistry, medicine, and related fields.\"},{\"_id\":\"RS105\",\"name\":\"Inorganic Chemistry\",\"number\":\"CH1240\",\"startDate\":\"2023-01-10\",\"endDate\":\"2023-05-15\",\"department\":\"D134\",\"credits\":3,\"description\":\"Inorganic Chemistry focuses on the properties, structures, and behaviors of inorganic and organometallic compounds. This course covers a range of topics including coordination chemistry, metal complexes, bonding theories, symmetry, and crystal field theory. Students will also explore the role of inorganic chemistry in real-world applications such as catalysis, materials science, and bioinorganic processes. Laboratory work emphasizes synthesis and analysis of inorganic compounds, fostering a deeper understanding of theoretical concepts.\"},{\"_id\":\"RS106\",\"name\":\"Physical Chemistry\",\"number\":\"CH1250\",\"startDate\":\"2023-01-10\",\"endDate\":\"2023-05-15\",\"department\":\"D134\",\"credits\":3,\"description\":\"Physical Chemistry merges the principles of physics and chemistry to understand the physical properties of molecules, the forces that act upon them, and the chemical reactions they undergo. Key topics include thermodynamics, kinetics, quantum mechanics, and spectroscopy. The course provides a comprehensive understanding of molecular behavior, reaction dynamics, and the application of mathematical methods in solving chemical problems. Labs focus on experimental techniques and data analysis, equipping students with skills necessary for research and advanced study in chemistry and related fields.\"},{\"_id\":\"RS107\",\"name\":\"Ancient Languages and Scripts of Middle-earth\",\"number\":\"ME101\",\"startDate\":\"2023-01-10\",\"endDate\":\"2023-05-15\",\"department\":\"Languages\",\"credits\":3,\"description\":\"This course offers an exploration of the ancient languages and scripts found throughout Middle-earth, including Elvish (Sindarin and Quenya), Dwarvish (Khuzdul), and the Black Speech of Mordor. Students will learn the historical and cultural contexts of these languages, their linguistic structures, and their usage in various inscriptions and texts. Emphasis is on understanding the philological aspects and the role of language in shaping Middle-earth's history and lore.\",\"author\":\"654f9ec2ea7ead465908d1e3\"},{\"_id\":\"RS108\",\"name\":\"Wizards, Elves, and Men: Inter-species Diplomacy in Middle-earth\",\"number\":\"ME102\",\"startDate\":\"2023-01-10\",\"endDate\":\"2023-05-15\",\"department\":\"Political Studies\",\"credits\":4,\"description\":\"This course explores the complex relationships and diplomatic interactions among the different races of Middle-earth: Elves, Men, Dwarves, and Wizards. Topics include the study of historical alliances, conflicts, and the role of leadership and wisdom in maintaining peace. Students will engage in discussions and case studies on key events in Middle-earth's history, such as the Council of Elrond and the War of the Ring, to understand the principles of diplomacy and conflict resolution in a multi-species context.\",\"author\":\"654f9ec2ea7ead465908d1e3\"}]"));}),
"[project]/app/(Kambaz)/Database/modules.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"_id\":\"M101\",\"name\":\"Introduction to Rocket Propulsion\",\"description\":\"Basic principles of rocket propulsion and rocket engines.\",\"course\":\"RS101\",\"lessons\":[{\"_id\":\"L101\",\"name\":\"History of Rocketry\",\"description\":\"A brief history of rocketry and space exploration.\",\"module\":\"M101\"},{\"_id\":\"L102\",\"name\":\"Rocket Propulsion Fundamentals\",\"description\":\"Basic principles of rocket propulsion.\",\"module\":\"M101\"},{\"_id\":\"L103\",\"name\":\"Rocket Engine Types\",\"description\":\"Overview of different types of rocket engines.\",\"module\":\"M101\"}]},{\"_id\":\"M102\",\"name\":\"Fuel and Combustion\",\"description\":\"Understanding rocket fuel, combustion processes, and efficiency.\",\"course\":\"RS101\",\"lessons\":[{\"_id\":\"L201\",\"name\":\"Rocket Fuel\",\"description\":\"Overview of different types of rocket fuels.\",\"module\":\"M102\"},{\"_id\":\"L202\",\"name\":\"Combustion Processes\",\"description\":\"Understanding combustion processes and efficiency.\",\"module\":\"M102\"},{\"_id\":\"L203\",\"name\":\"Combustion Instability\",\"description\":\"Understanding combustion instability and mitigation.\",\"module\":\"M102\"}]},{\"_id\":\"M103\",\"name\":\"Nozzle Design\",\"description\":\"Principles of rocket nozzle design and performance optimization.\",\"course\":\"RS101\",\"lessons\":[{\"_id\":\"L301\",\"name\":\"Nozzle Design\",\"description\":\"Overview of different types of rocket nozzles.\",\"module\":\"M103\"},{\"_id\":\"L302\",\"name\":\"Nozzle Performance\",\"description\":\"Understanding nozzle performance and efficiency.\",\"module\":\"M103\"},{\"_id\":\"L303\",\"name\":\"Nozzle Optimization\",\"description\":\"Optimizing nozzle design for specific applications.\",\"module\":\"M103\"}]},{\"_id\":\"M201\",\"name\":\"Fundamentals of Aerodynamics\",\"description\":\"Basic aerodynamic concepts and fluid dynamics principles.\",\"course\":\"RS102\"},{\"_id\":\"M202\",\"name\":\"Subsonic and Supersonic Flow\",\"description\":\"Understanding subsonic and supersonic aerodynamic behaviors.\",\"course\":\"RS102\"},{\"_id\":\"M203\",\"name\":\"Aerodynamic Heating\",\"description\":\"Study of aerodynamic heating and thermal protection systems.\",\"course\":\"RS102\"},{\"_id\":\"M301\",\"name\":\"Spacecraft Structural Design\",\"description\":\"Fundamentals of designing spacecraft structures and materials selection.\",\"course\":\"RS103\"},{\"_id\":\"M302\",\"name\":\"Orbital Mechanics\",\"description\":\"Understanding orbital dynamics and mission planning.\",\"course\":\"RS103\"},{\"_id\":\"M303\",\"name\":\"Spacecraft Systems Engineering\",\"description\":\"Overview of spacecraft systems and subsystems engineering.\",\"course\":\"RS103\"}]"));}),
"[project]/app/(Kambaz)/Database/assignments.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"_id\":\"A101\",\"title\":\"Propulsion Assignment\",\"course\":\"RS101\",\"release\":\"May 6 at 12:00am\",\"due\":\"May 13 at 11:59pm\"},{\"_id\":\"A102\",\"title\":\"Combustion Analysis\",\"course\":\"RS101\",\"release\":\"May 13 at 12:00am\",\"due\":\"May 20 at 11:59pm\"},{\"_id\":\"A103\",\"title\":\"Nozzle Design Project\",\"course\":\"RS101\",\"release\":\"May 20 at 12:00am\",\"due\":\"May 27 at 11:59pm\"},{\"_id\":\"A201\",\"title\":\"Aerodynamics Quiz\",\"course\":\"RS102\",\"release\":\"May 6 at 12:00am\",\"due\":\"May 13 at 11:59pm\"},{\"_id\":\"A202\",\"title\":\"Flow Analysis\",\"course\":\"RS102\",\"release\":\"May 13 at 12:00am\",\"due\":\"May 20 at 11:59pm\"},{\"_id\":\"A203\",\"title\":\"Heating Analysis\",\"course\":\"RS102\",\"release\":\"May 20 at 12:00am\",\"due\":\"May 27 at 11:59pm\"},{\"_id\":\"A301\",\"title\":\"Structural Design Task\",\"course\":\"RS103\",\"release\":\"May 6 at 12:00am\",\"due\":\"May 13 at 11:59pm\"},{\"_id\":\"A302\",\"title\":\"Orbital Calculations\",\"course\":\"RS103\",\"release\":\"May 13 at 12:00am\",\"due\":\"May 20 at 11:59pm\"},{\"_id\":\"A303\",\"title\":\"Systems Engineering Exam\",\"course\":\"RS103\",\"release\":\"May 20 at 12:00am\",\"due\":\"May 27 at 11:59pm\"}]"));}),
"[project]/app/(Kambaz)/Database/users.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"_id\":\"123\",\"username\":\"iron_man\",\"password\":\"stark123\",\"firstName\":\"Tony\",\"lastName\":\"Stark\",\"email\":\"tony@stark.com\",\"dob\":\"1970-05-29T00:00:00.000Z\",\"role\":\"FACULTY\",\"loginId\":\"001234561S\",\"section\":\"S101\",\"lastActivity\":\"2020-10-01\",\"totalActivity\":\"10:21:32\"},{\"_id\":\"234\",\"username\":\"dark_knight\",\"password\":\"wayne123\",\"firstName\":\"Bruce\",\"lastName\":\"Wayne\",\"email\":\"bruce@wayne.com\",\"dob\":\"1972-02-19\",\"role\":\"STUDENT\",\"loginId\":\"001234562S\",\"section\":\"S101\",\"lastActivity\":\"2020-11-02\",\"totalActivity\":\"15:32:43\"},{\"_id\":\"345\",\"username\":\"black_widow\",\"password\":\"romanoff123\",\"firstName\":\"Natasha\",\"lastName\":\"Romanoff\",\"email\":\"natasha@avengers.com\",\"dob\":\"1984-11-22\",\"role\":\"TA\",\"loginId\":\"001234564S\",\"section\":\"S101\",\"lastActivity\":\"2020-11-05\",\"totalActivity\":\"13:23:34\"},{\"_id\":\"456\",\"username\":\"thor_odinson\",\"password\":\"mjolnir123\",\"firstName\":\"Thor\",\"lastName\":\"Odinson\",\"email\":\"thor@asgard.com\",\"dob\":\"982-05-25\",\"role\":\"STUDENT\",\"loginId\":\"001234565S\",\"section\":\"S101\",\"lastActivity\":\"2020-12-01\",\"totalActivity\":\"11:22:33\"},{\"_id\":\"567\",\"username\":\"hulk_smash\",\"password\":\"banner123\",\"firstName\":\"Bruce\",\"lastName\":\"Banner\",\"email\":\"bruce@avengers.com\",\"dob\":\"1969-12-18\",\"role\":\"STUDENT\",\"loginId\":\"001234566S\",\"section\":\"S101\",\"lastActivity\":\"2020-12-01\",\"totalActivity\":\"22:33:44\"},{\"_id\":\"678\",\"username\":\"ring_bearer\",\"password\":\"shire123\",\"firstName\":\"Frodo\",\"lastName\":\"Baggins\",\"email\":\"frodo@shire.com\",\"dob\":\"1368-09-22\",\"role\":\"FACULTY\",\"loginId\":\"001234567S\",\"section\":\"S101\",\"lastActivity\":\"2020-12-02\",\"totalActivity\":\"44:33:22\"},{\"_id\":\"789\",\"username\":\"strider\",\"password\":\"aragorn123\",\"firstName\":\"Aragorn\",\"lastName\":\"Elessar\",\"email\":\"aragorn@gondor.com\",\"dob\":\"2931-03-01\",\"role\":\"TA\",\"loginId\":\"001234568S\",\"section\":\"S101\",\"lastActivity\":\"2020-12-04\",\"totalActivity\":\"12:23:34\"},{\"_id\":\"890\",\"username\":\"elf_archer\",\"password\":\"legolas123\",\"firstName\":\"Legolas\",\"lastName\":\"Greenleaf\",\"email\":\"legolas@mirkwood.com\",\"dob\":\"2879-07-15\",\"role\":\"STUDENT\",\"loginId\":\"001234569S\",\"section\":\"S101\",\"lastActivity\":\"2020-11-11\",\"totalActivity\":\"21:32:43\"},{\"_id\":\"777\",\"username\":\"ada\",\"password\":\"123\",\"firstName\":\"Ada\",\"lastName\":\"Lovelace\",\"email\":\"ada@lovelace.com\",\"dob\":\"1815-12-15\",\"role\":\"ADMIN\",\"loginId\":\"002143650S\",\"section\":\"S101\",\"lastActivity\":\"1852-11-27\",\"totalActivity\":\"21:32:43\"}]"));}),
"[project]/app/(Kambaz)/Database/enrollments.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[{\"_id\":\"1\",\"user\":\"123\",\"course\":\"RS101\"},{\"_id\":\"2\",\"user\":\"234\",\"course\":\"RS101\"},{\"_id\":\"3\",\"user\":\"345\",\"course\":\"RS101\"},{\"_id\":\"4\",\"user\":\"456\",\"course\":\"RS101\"},{\"_id\":\"5\",\"user\":\"567\",\"course\":\"RS101\"},{\"_id\":\"6\",\"user\":\"234\",\"course\":\"RS102\"},{\"_id\":\"7\",\"user\":\"789\",\"course\":\"RS102\"},{\"_id\":\"8\",\"user\":\"890\",\"course\":\"RS102\"},{\"_id\":\"9\",\"user\":\"123\",\"course\":\"RS102\"}]"));}),
"[project]/app/(Kambaz)/Database/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Database$2f$courses$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Database/courses.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Database$2f$modules$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Database/modules.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Database$2f$assignments$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Database/assignments.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Database$2f$users$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Database/users.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Database$2f$enrollments$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Database/enrollments.json (json)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(Kambaz)/Database/courses.json (json) <export default as courses>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "courses",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Database$2f$courses$2e$json__$28$json$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Database$2f$courses$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Database/courses.json (json)");
}),
"[project]/app/(Kambaz)/Courses/reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "addNewCourse",
    ()=>addNewCourse,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteCourse",
    ()=>deleteCourse,
    "setCourses",
    ()=>setCourses,
    "updateCourse",
    ()=>updateCourse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Database$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Database/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Database$2f$courses$2e$json__$28$json$29$__$3c$export__default__as__courses$3e$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Database/courses.json (json) <export default as courses>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
;
;
;
const initialState = {
    courses: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Database$2f$courses$2e$json__$28$json$29$__$3c$export__default__as__courses$3e$__["courses"]
};
const coursesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "courses",
    initialState,
    reducers: {
        addNewCourse: (state, param)=>{
            let { payload: course } = param;
            const newCourse = {
                ...course,
                _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
            };
            state.courses = [
                ...state.courses,
                newCourse
            ];
        },
        deleteCourse: (state, param)=>{
            let { payload: courseId } = param;
            state.courses = state.courses.filter((course)=>course._id !== courseId);
        },
        updateCourse: (state, param)=>{
            let { payload: course } = param;
            state.courses = state.courses.map((c)=>c._id === course._id ? course : c);
        },
        setCourses: (state, param)=>{
            let { payload: courses } = param;
            state.courses = courses;
        }
    }
});
const { addNewCourse, deleteCourse, updateCourse, setCourses } = coursesSlice.actions;
const __TURBOPACK__default__export__ = coursesSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(Kambaz)/Courses/[cid]/Modules/reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "addModule",
    ()=>addModule,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteModule",
    ()=>deleteModule,
    "editModule",
    ()=>editModule,
    "setModules",
    ()=>setModules,
    "updateModule",
    ()=>updateModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
;
;
const initialState = {
    modules: []
};
const modulesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, action)=>{
            state.modules = action.payload;
        },
        addModule: (state, param)=>{
            let { payload: module } = param;
            const newModule = {
                _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                lessons: [],
                name: module.name,
                course: module.course
            };
            state.modules = [
                ...state.modules,
                newModule
            ];
        },
        deleteModule: (state, param)=>{
            let { payload: moduleId } = param;
            state.modules = state.modules.filter((m)=>m._id !== moduleId);
        },
        updateModule: (state, param)=>{
            let { payload: module } = param;
            state.modules = state.modules.map((m)=>m._id === module._id ? module : m);
        },
        editModule: (state, param)=>{
            let { payload: moduleId } = param;
            state.modules = state.modules.map((m)=>m._id === moduleId ? {
                    ...m,
                    editing: true
                } : m);
        }
    }
});
const { addModule, deleteModule, updateModule, editModule, setModules } = modulesSlice.actions;
const __TURBOPACK__default__export__ = modulesSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(Kambaz)/Account/reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setCurrentUser",
    ()=>setCurrentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    currentUser: null
};
const accountSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "account",
    initialState,
    reducers: {
        setCurrentUser: (state, action)=>{
            state.currentUser = action.payload;
        }
    }
});
const { setCurrentUser } = accountSlice.actions;
const __TURBOPACK__default__export__ = accountSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(Kambaz)/Courses/[cid]/Assignments/reducer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "addAssignment",
    ()=>addAssignment,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteAssignment",
    ()=>deleteAssignment,
    "editAssignment",
    ()=>editAssignment,
    "setAssignments",
    ()=>setAssignments,
    "updateAssignment",
    ()=>updateAssignment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/v4.js [app-client] (ecmascript) <export default as v4>");
;
;
const initialState = {
    assignments: []
};
const assignmentsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action)=>{
            state.assignments = action.payload;
        },
        addAssignment: (state, param)=>{
            let { payload: assignment } = param;
            const newAssignment = {
                _id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                due: assignment.due,
                release: assignment.release,
                course: assignment.course
            };
            state.assignments = [
                ...state.assignments,
                newAssignment
            ];
        },
        deleteAssignment: (state, param)=>{
            let { payload } = param;
            state.assignments = state.assignments.filter((m)=>m._id !== payload);
        },
        updateAssignment: (state, param)=>{
            let { payload: assignment } = param;
            state.assignments = state.assignments.map((m)=>m._id === assignment._id ? assignment : m);
        },
        editAssignment: (state, param)=>{
            let { payload: assignmentId } = param;
            state.assignments = state.assignments.map((m)=>m._id === assignmentId ? {
                    ...m,
                    editing: true
                } : m);
        }
    }
});
const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } = assignmentsSlice.actions;
const __TURBOPACK__default__export__ = assignmentsSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(Kambaz)/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Courses$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Courses/reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Modules$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Courses/[cid]/Modules/reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Account$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Account/reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Assignments$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Courses/[cid]/Assignments/reducer.ts [app-client] (ecmascript)");
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        coursesReducer: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Courses$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        modulesReducer: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Modules$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        accountReducer: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Account$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        assignmentsReducer: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Courses$2f5b$cid$5d2f$Assignments$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
const __TURBOPACK__default__export__ = store;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(Kambaz)/Account/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "HTTP_SERVER",
    ()=>HTTP_SERVER,
    "USERS_API",
    ()=>USERS_API,
    "createUser",
    ()=>createUser,
    "deleteUser",
    ()=>deleteUser,
    "findAllUsers",
    ()=>findAllUsers,
    "findUserById",
    ()=>findUserById,
    "findUsersByPartialName",
    ()=>findUsersByPartialName,
    "findUsersByRole",
    ()=>findUsersByRole,
    "profile",
    ()=>profile,
    "signin",
    ()=>signin,
    "signout",
    ()=>signout,
    "signup",
    ()=>signup,
    "updateUser",
    ()=>updateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const axiosWithCredentials = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    withCredentials: true
});
const HTTP_SERVER = ("TURBOPACK compile-time value", "http://localhost:4000");
const USERS_API = "".concat(HTTP_SERVER, "/api/users");
const findAllUsers = async ()=>{
    const response = await axiosWithCredentials.get(USERS_API);
    return response.data;
};
const findUsersByRole = async (role)=>{
    const response = await axiosWithCredentials.get("".concat(USERS_API, "?role=").concat(role));
    return response.data;
};
const findUsersByPartialName = async (name)=>{
    const response = await axiosWithCredentials.get("".concat(USERS_API, "?name=").concat(name));
    return response.data;
};
const findUserById = async (id)=>{
    const response = await axiosWithCredentials.get("".concat(USERS_API, "/").concat(id));
    return response.data;
};
const deleteUser = async (userId)=>{
    const response = await axiosWithCredentials.delete("".concat(USERS_API, "/").concat(userId));
    return response.data;
};
const createUser = async (user)=>{
    const response = await axiosWithCredentials.post("".concat(USERS_API), user);
    return response.data;
};
const signin = async (credentials)=>{
    const response = await axiosWithCredentials.post("".concat(USERS_API, "/signin"), credentials);
    return response.data;
};
const profile = async ()=>{
    const response = await axiosWithCredentials.post("".concat(USERS_API, "/profile"));
    return response.data;
};
const signup = async (user)=>{
    const response = await axiosWithCredentials.post("".concat(USERS_API, "/signup"), user);
    return response.data;
};
const updateUser = async (user)=>{
    const response = await axiosWithCredentials.put("".concat(USERS_API, "/").concat(user._id), user);
    return response.data;
};
const signout = async ()=>{
    const response = await axiosWithCredentials.post("".concat(USERS_API, "/signout"));
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(Kambaz)/Account/Session.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ /* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "default",
    ()=>Session
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Account$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Account/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Account$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Account/reducer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Session(param) {
    let { children } = param;
    _s();
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const fetchProfile = async ()=>{
        try {
            const currentUser = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Account$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"]();
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Account$2f$reducer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentUser"])(currentUser));
        } catch (err) {
            console.error(err);
        }
        setPending(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Session.useEffect": ()=>{
            fetchProfile();
        }
    }["Session.useEffect"], []);
    if (!pending) {
        return children;
    }
}
_s(Session, "lr14oJsRSszN2nOqT28aQpyYed8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = Session;
var _c;
__turbopack_context__.k.register(_c, "Session");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(Kambaz)/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KambazLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Account$2f$Session$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(Kambaz)/Account/Session.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function KambazLayout(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Account$2f$Session$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "wd-kambaz",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$Kambaz$292f$Navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/(Kambaz)/layout.tsx",
                                lineNumber: 15,
                                columnNumber: 10
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(Kambaz)/layout.tsx",
                            lineNumber: 14,
                            columnNumber: 8
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wd-main-content-offset p-3 flex-fill",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/app/(Kambaz)/layout.tsx",
                            lineNumber: 17,
                            columnNumber: 8
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(Kambaz)/layout.tsx",
                    lineNumber: 13,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(Kambaz)/layout.tsx",
                lineNumber: 12,
                columnNumber: 4
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(Kambaz)/layout.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(Kambaz)/layout.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this);
}
_c = KambazLayout;
var _c;
__turbopack_context__.k.register(_c, "KambazLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_%28Kambaz%29_a3086e50._.js.map