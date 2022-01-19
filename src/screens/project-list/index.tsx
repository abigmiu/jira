import React, { useEffect } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { useState } from 'react'
import * as qs from 'qs'
import { cleanObject, useDebounce, useMount } from '../../utils'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectList = () => {
	const [param, setParam] = useState({
		name: '',
		personId: ''
	})
	const debouncedParam = useDebounce(param, 20)
	const [list, setList] = useState([])
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`)
			.then(async response => {
				if (response.ok) {
					setList(await response.json())
				}
			})
	}, [param])

	// useEffect(() => {
	// 	fetch(`${apiUrl}/users`)
	// 		.then(async response => {
	// 			if (response.ok) {
	// 				setUsers(await response.json())
	// 			}
	// 		})
	// }, [])
	useMount(() => {
		fetch(`${apiUrl}/users`)
			.then(async response => {
				if (response.ok) {
					setUsers(await response.json())
				}
			})
	})
	return (
		<div>
			<SearchPanel
				users={users}
				param={param}
				setParam={setParam}
			></SearchPanel>
			<List
				users={users}
				list={list}
			></List>
		</div>
	)
}
