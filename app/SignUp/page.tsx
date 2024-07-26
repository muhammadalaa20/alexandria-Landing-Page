'use client'
import Link from "next/link.js";
import { createUser } from "../appwrite.js";
import { useState } from "react";
import GlobalProvider from "../../components/GlobalProvider";
export default function SignUp() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' })
    const submit = async () => {
        if (formData.username && formData.email && formData.password) {
            const result = await createUser(formData.email, formData.password, formData.username);
        } else {
            alert('Please fill all the fields')
        }
    }
    return (
        <div className="flex items-center justify-center min-h-[90vh] p-5">
            <div className="flex flex-col items-center justify-center max-w-80 h-auto rounded-xl bg-black gap-10 p-5">
                <h1 className="text-white">-Sign Up-</h1>
                <div className="flex flex-col gap-5 px-3 justify-center items-center">
                    <input
                        type="text"
                        title="username"
                        name="username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        placeholder="username"
                        className="text-black p-3 rounded-xl focus:outline-none w-full"
                    />
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
                        <h1>have an account?</h1>
                        <Link href="/SignIn" className="text-blue-500">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
