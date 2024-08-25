"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n// components/Card.js\n\n\n\n\n// This is the Card component\nconst Card = (param)=>{\n    let { title, description, price, rating, imageSrc, creatorName, profileImage } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[507px] bg-black border border-[#DDDDDD] border-opacity-35 rounded-[4px] relative transition-all duration-150 ease-out hover:shadow-[4px_4px_0px_rgba(221,221,221,1)] font-mabry mb-2.5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-image relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: imageSrc,\n                        alt: \"Product\",\n                        className: \"w-full h-[300px] object-cover rounded-t-[4px]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-0 w-full h-[1px] bg-white\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-[#DDDDDD] text-xl font-normal mb-2 tracking-wider line-clamp-2\",\n                        children: [\n                            \" \",\n                            title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center mb-4 absolute bottom-16 w-full\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: profileImage,\n                                alt: \"Profile\",\n                                className: \"w-6 h-6 rounded-full mr-1\" // Adjusted margin-right to 1px for 4px total gap\n                            }, void 0, false, {\n                                fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-[#DDDDDD] text-sm font-light underline ml-1.5\",\n                                children: creatorName\n                            }, void 0, false, {\n                                fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border-t border-[#DDDDDD] border-opacity-35 -mx-4 absolute bottom-16 w-full\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between absolute bottom-0 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1 pr-1 pt-4 pb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-[#DDDDDD] text-sm inline-flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faStar,\n                                            size: \"1x\",\n                                            style: {\n                                                width: \"14px\",\n                                                height: \"14px\",\n                                                marginRight: \"4px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        rating\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-l border-[#DDDDDD] border-opacity-35 h-16 mx-5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-none pr-1 pt-4 pb-4 style={{ width: '80px' }}\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"price-tag relative inline-block text-black text-sm p-2 flex items-center\",\n                                    style: {\n                                        backgroundColor: \"#ff90e8\",\n                                        clipPath: \"polygon(100% 0, 0 0, 0 0, 0 100%, 100% 100%, 78% 50%)\",\n                                        width: \"65px\",\n                                        height: \"30px\"\n                                    },\n                                    children: price\n                                }, void 0, false, {\n                                    fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emiitaylor/Desktop/Gumroad_Project/recently_viewed_section/components/Card.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxxQkFBcUI7O0FBQ0s7QUFDdUM7QUFDTjtBQUUzRCw2QkFBNkI7QUFDN0IsTUFBTUcsT0FBTztRQUFDLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRTtJQUN0RixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NDLEtBQUtOO3dCQUNMTyxLQUFJO3dCQUNKSCxXQUFVOzs7Ozs7a0NBRVosOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7MEJBSWpCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNJO3dCQUFHSixXQUFVOzs0QkFBc0U7NEJBQ2pGUjs7Ozs7OztrQ0FJSCw4REFBQ087d0JBQUlDLFdBQVU7OzRCQUFtRDswQ0FDaEUsOERBQUNDO2dDQUNDQyxLQUFLSjtnQ0FDTEssS0FBSTtnQ0FDSkgsV0FBVSw0QkFBNEIsaURBQWlEOzs7Ozs7MENBRXpGLDhEQUFDSztnQ0FBRUwsV0FBVTswQ0FBc0RIOzs7Ozs7NEJBQWdCOzs7Ozs7O2tDQUlyRiw4REFBQ0U7d0JBQUlDLFdBQVU7Ozs7OztrQ0FHZiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUViLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ007b0NBQUtOLFdBQVU7O3NEQUNkLDhEQUFDWCwyRUFBZUE7NENBQUNrQixNQUFNakIscUVBQU1BOzRDQUFFa0IsTUFBSzs0Q0FBS0MsT0FBTztnREFBRUMsT0FBTztnREFBUUMsUUFBUTtnREFBUUMsYUFBYTs0Q0FBTTs7Ozs7O3dDQUNuR2pCOzs7Ozs7Ozs7Ozs7MENBR0wsOERBQUNJO2dDQUFJQyxXQUFVOzs7Ozs7MENBRWYsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTtvQ0FBMkVTLE9BQU87d0NBQUVJLGlCQUFpQjt3Q0FBV0MsVUFBVTt3Q0FBeURKLE9BQU87d0NBQVFDLFFBQVE7b0NBQU87OENBQzdOakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Y7S0FyRE1IO0FBdUROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZC5qcz9kNjIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvQ2FyZC5qc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG4vLyBUaGlzIGlzIHRoZSBDYXJkIGNvbXBvbmVudFxuY29uc3QgQ2FyZCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpY2UsIHJhdGluZywgaW1hZ2VTcmMsIGNyZWF0b3JOYW1lLCBwcm9maWxlSW1hZ2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzUwN3B4XSBiZy1ibGFjayBib3JkZXIgYm9yZGVyLVsjREREREREXSBib3JkZXItb3BhY2l0eS0zNSByb3VuZGVkLVs0cHhdIHJlbGF0aXZlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MCBlYXNlLW91dCBob3ZlcjpzaGFkb3ctWzRweF80cHhfMHB4X3JnYmEoMjIxLDIyMSwyMjEsMSldIGZvbnQtbWFicnkgbWItMi41XCI+XG4gICAgICB7LyogSW1hZ2UgU2VjdGlvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZSByZWxhdGl2ZVwiPlxuICAgICAgICA8aW1nIFxuICAgICAgICAgIHNyYz17aW1hZ2VTcmN9IC8vIFVzZSB0aGUgaW1hZ2VTcmMgcHJvcFxuICAgICAgICAgIGFsdD1cIlByb2R1Y3RcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVszMDBweF0gb2JqZWN0LWNvdmVyIHJvdW5kZWQtdC1bNHB4XVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsIGgtWzFweF0gYmctd2hpdGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgey8qIENvbnRlbnQgU2VjdGlvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgIHsvKiBQcm9kdWN0IFRpdGxlICovfVxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0RERERERF0gdGV4dC14bCBmb250LW5vcm1hbCBtYi0yIHRyYWNraW5nLXdpZGVyIGxpbmUtY2xhbXAtMlwiPiB7LyogQWRkZWQgbGluZS1jbGFtcCBmb3IgdHJ1bmNhdGlvbiAqL31cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIFxuICAgICAgICB7LyogQ3JlYXRvciBJbmZvICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTQgYWJzb2x1dGUgYm90dG9tLTE2IHctZnVsbFwiPiB7LyogQWRqdXN0ZWQgdG8gcmVtb3ZlIGp1c3RpZnktYmV0d2VlbiBmb3IgYmV0dGVyIHNwYWNpbmcgY29udHJvbCAqL31cbiAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgc3JjPXtwcm9maWxlSW1hZ2V9IC8vIFVzZSB0aGUgcHJvZmlsZUltYWdlIHByb3BcbiAgICAgICAgICAgIGFsdD1cIlByb2ZpbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiByb3VuZGVkLWZ1bGwgbXItMVwiIC8vIEFkanVzdGVkIG1hcmdpbi1yaWdodCB0byAxcHggZm9yIDRweCB0b3RhbCBnYXBcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyNERERERERdIHRleHQtc20gZm9udC1saWdodCB1bmRlcmxpbmUgbWwtMS41XCI+e2NyZWF0b3JOYW1lfTwvcD4gey8qIFVzZSB0aGUgY3JlYXRvck5hbWUgcHJvcCAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICB7LyogSG9yaXpvbnRhbCBTZXBhcmF0b3IgTGluZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItWyNERERERERdIGJvcmRlci1vcGFjaXR5LTM1IC1teC00IGFic29sdXRlIGJvdHRvbS0xNiB3LWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBCb3R0b20gU2VjdGlvbiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYWJzb2x1dGUgYm90dG9tLTAgdy1mdWxsXCI+XG4gICAgICAgICAgey8qIFJhdGluZyBTZWN0aW9uICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHByLTEgcHQtNCBwYi00XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjREREREREXSB0ZXh0LXNtIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gc2l6ZT1cIjF4XCIgc3R5bGU9e3sgd2lkdGg6ICcxNHB4JywgaGVpZ2h0OiAnMTRweCcsIG1hcmdpblJpZ2h0OiAnNHB4JyB9fSAvPlxuICAgICAgICAgICAgICB7cmF0aW5nfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWwgYm9yZGVyLVsjREREREREXSBib3JkZXItb3BhY2l0eS0zNSBoLTE2IG14LTVcIj48L2Rpdj5cbiAgICAgICAgICB7LyogUHJpY2UgU2VjdGlvbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtbm9uZSBwci0xIHB0LTQgcGItNCBzdHlsZT17eyB3aWR0aDogJzgwcHgnIH19XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLXRhZyByZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1ibGFjayB0ZXh0LXNtIHAtMiBmbGV4IGl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmZjkwZTgnLCBjbGlwUGF0aDogJ3BvbHlnb24oMTAwJSAwLCAwIDAsIDAgMCwgMCAxMDAlLCAxMDAlIDEwMCUsIDc4JSA1MCUpJywgd2lkdGg6ICc2NXB4JywgaGVpZ2h0OiAnMzBweCcgfX0+XG4gICAgICAgICAgICAgIHtwcmljZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJGb250QXdlc29tZUljb24iLCJmYVN0YXIiLCJDYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicmF0aW5nIiwiaW1hZ2VTcmMiLCJjcmVhdG9yTmFtZSIsInByb2ZpbGVJbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCIsImgyIiwicCIsInNwYW4iLCJpY29uIiwic2l6ZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsImJhY2tncm91bmRDb2xvciIsImNsaXBQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Card.js\n"));

/***/ })

});