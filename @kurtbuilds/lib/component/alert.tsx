import React from "react"
import {Alert} from "@/alert"


export function Alerts({alerts}: {alerts: Alert[]}) {
    return <div>
        {alerts.map((alert, i) => <div key={i}>{alert.message}</div>)}
    </div>
}