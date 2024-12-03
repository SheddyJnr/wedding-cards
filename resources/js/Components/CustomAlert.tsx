import React from "react";
import { Alert, AlertTitle, AlertDescription } from "./ui/alert";

interface CustomAlertProps {
    variant: "success" | "error" | "warning" | "info";
    title: string;
    description: string;
    className?: string;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
    variant,
    title,
    description,
    className,
}) => {
    const alertVariant = (variant: "success" | "error" | "warning" | "info"): "default" | "destructive" | undefined => {
        switch (variant) {
            case "success":
            case "info":
                return "default";
            case "error":
            case "warning":
                return "destructive";
            default:
                return undefined;
        }
    };

    return (
        <Alert variant={alertVariant(variant)} className={className}>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{description}</AlertDescription>
        </Alert>
    );
};

export default CustomAlert;
