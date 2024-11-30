import { z } from 'zod'


export const signUpObject = z.object({
    username : z.string().max(10, 'max 10 charcter is allowed'),
    email : z.string().email('Provide a valid email ID'),
    password : z.string()
                .min(4, "Password must be at least 4 characters")
                .max(25, "Password must be at most 25 characters")
                .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
                .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
                .regex(/[\W_]/, { message: 'Password must contain at least one special character (e.g., !@#$%^&*()_+).' })
                .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
})

export const signInObject = z.object({
    email : z.string().email('Provide a valid email ID'),
    password : z.string()
                .min(4, "Password must be at least 4 characters")
                .max(25, "Password must be at most 25 characters")
                .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
                .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
                .regex(/[\W_]/, { message: 'Password must contain at least one special character (e.g., !@#$%^&*()_+).' })
                .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
})

