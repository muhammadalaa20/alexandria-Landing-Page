'use client'
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { redirect, usePathname } from "next/navigation";
import Image from "next/image";

export default function Main({ user, isAuthenticated }: { user: any, isAuthenticated: boolean }) {
    const pathname = usePathname()
    return (
        <main className="flex min-h-screen items-center justify-center p-5">
            <div className="bg-white p-8 shadow-xl text-start z-50 rounded-tl-[60px] rounded-br-[60px] w-4/5 xl:w-1/2 lg:w-1/2">
                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row gap-5 items-center justify-start mb-5">
                    <Image src="/light.png" width={40} height={40} alt="logo" className="rounded-full" />
                    <h1 className="text-sm xl:text-lg lg:text-lg  font-bold">Welcome to Alexandria</h1>
                </div>
                <div className="flex flex-col text-start gap-5 items-center justify-center">
                    <p className="text-sm xl:text-md lg:text-md text-secondary">Alexandria is the best place to find your next adventure. The most popular adventure is waiting for you in the best city in the world.</p>
                    <div className="flex items-center justify-between border">
                    </div>
                </div>
                <div className="flex items-center justify-end gap-5">
                    <RegisterLink className="text-primary hover:scale-110 font-bold">Sign Up</RegisterLink>
                    <LoginLink className="text-primary hover:scale-110 font-bold">Sign in</LoginLink>
                </div>
            </div>
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-95 hover:grayscale-0"
            >
                <source src="/waves.mp4" type="video/mp4" />
            </video>
            {isAuthenticated && pathname === '/' && redirect('/home')}
        </main>
    )
}
