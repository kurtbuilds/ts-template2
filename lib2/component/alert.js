import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "../util";
export function Alerts({ alerts, className }) {
    return _jsx("div", { className: classNames(className), children: alerts.map((alert, i) => _jsx("div", { children: alert.message }, i)) });
}
//# sourceMappingURL=alert.js.map