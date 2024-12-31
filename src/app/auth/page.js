'use client'

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import Image from "next/image"
import { login, register } from "@/components/auth"

export default function AuthForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [passwordError, setPasswordError] = useState('')

    const handleRegister = async () => {
        const password = formData.get('password')
        const confirmPassword = formData.get('confirmPassword')

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match')
            return
        }

        setPasswordError('')
        setIsLoading(true)
        await register(formData)
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen p-4 flex flex-col items-center justify-center bg-[#FF7700] shadow-lg">
            <div className="w-full max-w-sm space-y-6 border-[2px] rounded-lg p-5 bg-white">
                <div className="flex flex-col items-center  space-y-2">
                    <div className="w-24 h-24 rounded-full bg-[#e6f2ef] flex items-center justify-center">
                        <img
                            src="/cat_profile.gif"
                            alt="Cat"
                        />
                    </div>
                </div>

                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-4">
                        {/* <div className="text-center space-y-2">
                            <h2 className="text-xl font-semibold">
                                Welcome Back To
                            </h2>
                            <h2 className="text-2xl font-bold">Only Pets</h2>
                        </div> */}

                        <form
                            action={async (formData) => {
                                setIsLoading(true)
                                await login(formData)
                                setIsLoading(false)
                            }}
                            className="space-y-4"
                        >
                            <div className="space-y-2">
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="relative">
                                    <Input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        required
                                        className="h-12 pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    >
                                        {showPassword ? (
                                            <EyeOffIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                                <div className="flex justify-end">
                                    <Button
                                        variant="link"
                                        className="px-0 font-normal text-sm text-red-600"
                                    >
                                        Forgot Password?
                                    </Button>
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className="w-full h-12 text-lg font-bold bg-[#FF7700] hover:bg-[#FF7700]"
                                disabled={isLoading}
                            >
                                {isLoading ? "Please wait..." : "Log In"}
                            </Button>
                        </form>
                    </TabsContent>

                    <TabsContent value="register" className="space-y-4">
                        {/* <div className="text-center space-y-2">
                            <h1 className="text-xl font-semibold tracking-tight">
                                Create Account At
                            </h1>
                            <h2 className="text-2xl font-bold">Panda Express</h2>
                        </div> */}

                        <form
                            action={handleRegister}
                            className="space-y-4 mt-5"
                        >
                            <div className="space-y-2">
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    required
                                    className="h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Input
                                    id="city"
                                    name="city"
                                    type="text"
                                    placeholder="City"
                                    required
                                    className="h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Input
                                    id="register-email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="relative">
                                    <Input
                                        id="register-password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        required
                                        className="h-12 pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    >
                                        {showPassword ? (
                                            <EyeOffIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="relative">
                                    <Input
                                        id="confirm-password"
                                        name="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        required
                                        className="h-12 pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOffIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                                {passwordError && (
                                    <p className="text-sm text-red-500 mt-1">{passwordError}</p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                className="w-full h-12 text-base bg-[#FF7700] hover:bg-[#FF7700]"
                                disabled={isLoading}
                            >
                                {isLoading ? "Please wait..." : "Create Account"}
                            </Button>
                        </form>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

