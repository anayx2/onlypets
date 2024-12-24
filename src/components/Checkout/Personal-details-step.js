import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export function PersonalDetailsStep({ onNext }) {
    return (
        <div className="space-y-6">
            {/* <Alert className="bg-yellow-50 border-yellow-200">
                <InfoIcon className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                    Your booking is on hold until Feb 14, 12:00 AM. If your reserve changes, we will get back to you.
                </AlertDescription>
            </Alert> */}

            <Card className="w-full border border-[#FF7700]">
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input id="fullName" placeholder="Enter your full name" className='border-[#FF7700]' />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" className='border-[#FF7700]' />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="Enter your phone number" className='border-[#FF7700]' />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button className='bg-[#FF7700]' onClick={onNext}>Continue to Payment</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
