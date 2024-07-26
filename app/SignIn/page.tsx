'use client'
import Link from "next/link.js";
import { signIn } from "../appwrite.js";
import { useState } from "react";
export default function SignIn() {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const submit = async () => {
        try {
            if (formData.email && formData.password) {
                await signIn(formData.email, formData.password);
            } else {
                alert('Please fill all the fields')
            }
        } catch (error) {
            alert('Invalid email or password')
        }
    }
    return (
        <div className="flex items-center justify-center min-h-[90vh] p-5">
            <div className="flex flex-col items-center justify-center w-80 h-auto rounded-xl bg-black gap-10 p-5">
                <h1 className="text-white">-Sign Up-</h1>
                <div className="flex flex-col gap-5 px-3 justify-center items-center">
                    <input
                        type="email"
                        title="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email"
                        className="text-black p-3 rounded-xl focus:outline-none w-full"
                    />
                    <input
                        type="password"
                        title="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        placeholder="Password"
                        className="text-black p-3 rounded-xl focus:outline-none w-full"
                    />
                    <button
                        className="text-white p-3 w-full rounded-xl focus:outline-none bg-blue-500 hover:bg-blue-700"
                        onClick={submit}
                        type="submit"
                    >
                        Submit
                    </button>
                    <div className="flex p-3 justify-between items-center text-white text-xs w-full">
                        <h1>New account?</h1>
                        <Link href="/SignUp" className="text-blue-500">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
