import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export function PaymentStep({ onNext, onBack }) {
    return (
        <Card className="w-full border border-[#FF7700]">
            <CardHeader>
                <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456 " className='border-[#FF7700]'  />
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                            <Label>Expiry Month</Label>
                            <Select>
                                <SelectTrigger className='border-[#FF7700]'>
                                    <SelectValue placeholder="Month" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <SelectItem key={i + 1} value={String(i + 1).padStart(2, "0")}>
                                            {String(i + 1).padStart(2, "0")}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Expiry Year</Label>
                            <Select>
                                <SelectTrigger className='border-[#FF7700]'>
                                    <SelectValue placeholder="Year" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <SelectItem key={i} value={String(new Date().getFullYear() + i)}>
                                            {new Date().getFullYear() + i}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" maxLength={4} className='border-[#FF7700]' />
                        </div>
                    </div>
                </div>

                <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                        Your payment information is encrypted and secure. We never store your full card details.
                    </AlertDescription>
                </Alert>

                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">
                            I agree to the Terms & Conditions and Privacy Policy
                        </Label>
                    </div>
                </div>

                <div className="flex justify-between">
                    <Button variant="outline" onClick={onBack}>
                        Back
                    </Button>
                    <Button className='bg-[#FF7700]'  onClick={onNext}>Complete Payment</Button>
                </div>
            </CardContent>
        </Card>
    );
}
