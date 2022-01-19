import React from 'react'
import { User } from './search-panel'

interface Project {
	id: string;
	name: string;
	personId: string;
	pin: boolean;
	organization: string;
}

interface ListProps {
	list: Project[];
	users: User[]
}

export const List = ({ list, users }: ListProps) => {
	return (
		<table>
			<thead>
				<tr>
					<th>project</th>
					<th>manager</th>
				</tr>
			</thead>
			<tbody>
			{
				list.map(project => {
					return (
						<tr key={project.id}>
							<td>{project.name}</td>
							<td>
								{users.find(user => project.personId === user.id)?.name || 'wwvi'}
							</td>
						</tr>
					)
				})
			}
			</tbody>
		</table>
	)
}
