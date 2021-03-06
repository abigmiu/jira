import React, { FormEvent } from 'react'
import { useAuth } from '../../context/auth-context'
import { register } from '../../auth-provider'

const apiUrl = process.env.REACT_APP_API_URL
export const LoginScreen = () => {
	const { user, login } = useAuth()

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const username = (event.currentTarget.elements[0] as HTMLInputElement).value
		const password = (event.currentTarget.elements[1] as HTMLInputElement).value
		login({ username, password })
		// register({username, password})
	}


	return (
		<form onSubmit={handleSubmit}>
			{
				user ? user.name : 'no user'
			}
			<div>
				<label htmlFor='username'>
					username
				</label>
				<input type='text' id='username' />
			</div>
			<div>
				<label htmlFor='password'>password</label>
				<input type='password' id='password' />
			</div>
			<button type={'submit'}>login</button>
		</form>
	)
}
