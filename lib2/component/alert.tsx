import {Alert} from "@/type"
import React from "react"
import {classNames} from "@/util"


interface AlertsProps {
    alerts: Alert[]
    className?: string
}

export function Alerts({alerts, className}: AlertsProps) {
    return <div className={classNames(className)}>
        {alerts.map((alert, i) => <div key={i}>{alert.message}</div>)}
    </div>
}