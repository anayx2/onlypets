import { cn } from "@/lib/utils";

export function CheckoutTimeline({ currentStep }) {
    const steps = [
        {
            step: 1,
            title: "Personal Details",
            isActive: currentStep === 1,
            isComplete: currentStep > 1,
        },
        {
            step: 2,
            title: "Payment",
            isActive: currentStep === 2,
            isComplete: currentStep > 2,
        },
        {
            step: 3,
            title: "Complete",
            isActive: currentStep === 3,
            isComplete: currentStep > 3,
        },
    ];

    return (
        <div className="w-full hidden md:block lg:block">
            <div className="flex items-center justify-center space-x-4">
                {steps.map((step, index) => (
                    <div key={step.step} className="flex items-center">
                        {index > 0 && (
                            <div
                                className={cn(
                                    "h-px w-12 mx-2",
                                    step.isActive || step.isComplete ? "bg-primary" : "bg-gray-200"
                                )}
                            />
                        )}
                        <div className="flex items-center space-x-2">
                            <div
                                className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                                    step.isActive
                                        ? "bg-primary text-primary-foreground"
                                        : step.isComplete
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-gray-200 text-gray-600"
                                )}
                            >
                                {step.isComplete ? "✓" : step.step}
                            </div>
                            <span
                                className={cn(
                                    "text-sm font-medium",
                                    step.isActive ? "text-primary" : "text-gray-600"
                                )}
                            >
                                {step.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
