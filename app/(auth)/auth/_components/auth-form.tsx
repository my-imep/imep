'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle, Loader2, Github } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useForm } from 'react-hook-form'
import { signIn, useSession } from 'next-auth/react'
import { toast } from 'sonner'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AuthForm() {
	const { data: session } = useSession();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [success, setSuccess] = useState(false)

	const form = useForm()

	useEffect(() => {
		if (session) {
			router.push('/app');
		}
	}, [session, router]);

	const handleSubmit = form.handleSubmit(async (data) => {
		setIsLoading(true)
		setError('')
		try {
			await signIn('email', {
				email: data.email,
				redirect: false,
			})
			setIsLoading(false)
			setSuccess(true)
			toast.success('Check your email for the login link!')
		} catch (error) {
			setIsLoading(false)
			setError('Failed to send magic link')
			setSuccess(false)
			toast.error('Something went wrong. Please try again.')
			console.error('Sign in error:', error)
		}
	})

	const handleProviderLogin = async (provider: string) => {
		setIsLoading(true)
		setError('')
		try {
			await signIn(provider, {
				callbackUrl: '/app',
				redirect: true,
			})
		} catch (error) {
			setIsLoading(false)
			setError(`Failed to sign in with ${provider}`)
			toast.error('Something went wrong. Please try again.')
			console.error(`${provider} sign in error:`, error)
		}
	}

	return (
		<main>
			<Card className='w-full h-screen flex flex-col items-center justify-center bg-blue-100	'>
				<div className=' flex flex-col items-center justify-center'>
					<CardHeader className='w-full flex flex-col items-center'>
						<Image src={'/logo.png'} alt="" width={100} height={100} className='mb-12' />
						<CardTitle className='text-2xl text-center'><h2>Entre em sua conta</h2></CardTitle>
						<CardDescription className='text-center pb-12'>
							Novo por aqui? <Link href={'/auth'} className='text-teal9 hover:underline'> Crie uma Conta</Link>
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div>
							<Button
								className="w-full mb-3 hoverteal"
								variant="outline"
								onClick={() => handleProviderLogin('github')}
								disabled={isLoading}
							>
								<Github className="mr-2 h-4 w-4" />
								Continue with GitHub
							</Button>
							<Button
								className="w-full hoverteal"
								variant="outline"
								onClick={() => handleProviderLogin('google')}
								disabled={isLoading}
							>
								<svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
									/>
									<path
										fill="currentColor"
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
									/>
									<path
										fill="currentColor"
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
									/>
									<path
										fill="currentColor"
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
									/>
								</svg>
								Continue with Google
							</Button>
						</div>
						<div className="relative my-5">
							<div className="absolute inset-0 flex items-center">
								<span className="bg-neutral-600 w-full border-t"></span>
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-blue-100 px-2 text-muted-foreground">Or continue with</span>
							</div>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="grid w-full items-center gap-4 mt-4">
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="Enter your email"
										{...form.register('email')}
										required
									/>
								</div>
							</div>
						</form>
					</CardContent>
					<CardFooter className="flex flex-col items-center w-full mt-7">
						<Button
							className="w-full bg-teal9 text-neutral-900 hover:text-white"
							onClick={handleSubmit}
							disabled={isLoading}
						>
							{isLoading ? (
								<>
									<Loader2 className="mr-2 h-4 w-4 animate-spin" />
									Sending Magic Link
								</>
							) : (
								'Send Magic Link'
							)}
						</Button>
						{error && (
							<Alert variant="destructive" className="mt-4">
								<AlertCircle className="h-4 w-4" />
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						)}
						{success && (
							<Alert className="mt-4">
								<AlertDescription>Magic link sent! Check your email.</AlertDescription>
							</Alert>
						)}
					</CardFooter>
				</div>
			</Card>
		</main>
	)
}