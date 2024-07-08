"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TestComponent = () => {
    return (react_1.default.createElement("div", { style: styles.container },
        react_1.default.createElement("div", { style: styles.textContainer },
            react_1.default.createElement("h1", { style: styles.textTitle }, "Test Component"),
            react_1.default.createElement("p", { style: styles.text }, "This is a test component. We are wondering how difficult it is to inject a styled component via NPM."))));
};
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        backgroundColor: '#f9f'
    },
    textTitle: {
        fontSize: 36,
        color: '#000000'
    },
    text: {
        fontSize: 24,
        color: '#333',
    }
};
exports.default = TestComponent;
//# sourceMappingURL=TestComponent.js.map