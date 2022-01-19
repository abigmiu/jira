import React from 'react'
import { useState } from 'react'

export interface User {
	id: string;
	name: string;
	email: string;
	title: string;
	organization: string;
}

interface SearchPanelProps {
	users: User[],
	param: {
		name: string;
		personId: string;
	},
	setParam: (param: SearchPanelProps['param']) => void
}

export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
	return (<form>
		<div>
			<input type='text'
				   value={param.name} onChange={e => setParam({
				...param,
				name: e.target.value
			})}
			/>

			<select
				value={param.personId}
				onChange={e => {
					console.log('change')
					setParam({
						...param,
						personId: e.target.value
					})
				}}
			>
				<option value={''}>fuzeren</option>
				{
					users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
				}
			</select>
		</div>
	</form>)
}
