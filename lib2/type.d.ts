export type AlertType = "danger" | "warning" | "info" | "success";
export interface Alert {
    message: string;
    type: AlertType;
}
