import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
Form,
FormControl,
FormDescription,
FormField,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
fullName: z.string().min(2, {
message: "Full name must be at least 2 characters.",
}),
username: z.string().min(3, {
message: "Username must be at least 3 characters.",
}),
email: z.string().email({
message: "Please enter a valid email address.",
}),
phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
message: "Please enter a valid phone number.",
}),
password: z.string().min(8, {
message: "Password must be at least 8 characters.",
}),
})

export function SignUpForm() {
const { toast } = useToast()
const [isLoading, setIsLoading] = useState(false)

const form = useForm<z.infer<typeof formSchema>>({
resolver: zodResolver(formSchema),
defaultValues: {
fullName: "",
username: "",
email: "",
phoneNumber: "",
password: "",
},
})

function onSubmit(values: z.infer<typeof formSchema>) {
setIsLoading(true)
// Simulate API call
setTimeout(() => {
console.log(values)
setIsLoading(false)
toast({
title: "Account created successfully!",
description: "You can now log in with your new account.",
})
}, 2000)
}

return (
<div className="max-w-md w-full mx-auto space-y-6">
<div className="space-y-2 text-center">
<h1 className="text-3xl font-bold">Create an Account</h1>
<p className="text-gray-500 dark:text-gray-400">Enter your information to sign up</p>
</div>
<Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
<FormField
control={form.control}
name="fullName"
render={({ field }) => (
<FormItem>
<FormLabel>Full Name</FormLabel>
<FormControl>
<Input placeholder="John Doe" {...field} />
</FormControl>
<FormMessage />
</FormItem>
)}
/>
<FormField
control={form.control}
name="username"
render={({ field }) => (
<FormItem>
<FormLabel>Username</FormLabel>
<FormControl>
<Input placeholder="johndoe" {...field} />
</FormControl>
<FormMessage />
</FormItem>
)}
/>
<FormField
control={form.control}
name="email"
render={({ field }) => (
<FormItem>
<FormLabel>Email</FormLabel>
<FormControl>
<Input type="email" [placeholder="john.doe@example.com](mailto:placeholder=%22john.doe@example.com)" {...field} />
</FormControl>
<FormMessage />
</FormItem>
)}
/>
<FormField
control={form.control}
name="phoneNumber"
render={({ field }) => (
<FormItem>
<FormLabel>Phone Number</FormLabel>
<FormControl>
<Input type="tel" placeholder="+1234567890" {...field} />
</FormControl>
<FormMessage />
</FormItem>
)}
/>
<FormField
control={form.control}
name="password"
render={({ field }) => (
<FormItem>
<FormLabel>Password</FormLabel>
<FormControl>
<Input type="password" placeholder="********" {...field} />
</FormControl>
<FormDescription>
Must be at least 8 characters long and include a number and a special character.
</FormDescription>
<FormMessage />
</FormItem>
)}
/>
<Button type="submit" className="w-full" disabled={isLoading}>
{isLoading ? "Signing up..." : "Sign Up"}
</Button>
</form>
</Form>
<div className="text-center text-sm">
Already a member?{" "}
<Link href="/login" className="font-medium text-primary hover:underline">
Log in
</Link>
</div>
</div>
)
}