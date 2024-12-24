import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Summary({ bookingDetails }) {
    return (
        <Card className="w-full border bg-[#FF7700] text-white">
            <CardHeader>
                <CardTitle>Cart Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 ">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-white">Total Product</span>
                        <span className="font-medium">{bookingDetails.totalProducts} Vehicle</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-white">Expected Delivery</span>
                        <span className="font-medium">{bookingDetails.expectedDelivery}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-white">Discount</span>
                        <span className="font-medium">{bookingDetails.discount}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-white">Delivery Fee</span>
                        <span className="font-medium">{bookingDetails.deliveryFee}</span>
                    </div>
                </div>
                <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                        <span className="text-white">Tax</span>
                        <span className="font-medium">INR {bookingDetails.tax}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-white">Delivery fee</span>
                        <span className="font-medium">INR {bookingDetails.deliveryFee}</span>
                    </div>


                </div>
                <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>USD {bookingDetails.total.toFixed(2)}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
