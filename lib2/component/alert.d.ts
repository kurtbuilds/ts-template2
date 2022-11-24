/// <reference types="react" />
import { Alert } from "@/type";
interface AlertsProps {
    alerts: Alert[];
    className?: string;
}
export declare function Alerts({ alerts, className }: AlertsProps): JSX.Element;
export {};
