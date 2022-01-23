import React, { useEffect } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { useState } from 'react'
import * as qs from 'qs'
import { cleanObject, useDebounce, useMount } from '../../utils'
import { useHttp } from '../../utils/http'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
	const [param, setParam] = useState({
		name: '',
		personId: ''
	})
	const debouncedParam = useDebounce(param, 20)
	const [list, setList] = useState([])
	const [users, setUsers] = useState([])

	const client = useHttp()

	useEffect(() => {
		// fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`)
		// 	.then(async response => {
		// 		if (response.ok) {
		// 			setList(await response.json())
		// 		}
		// 	})
		client('projects', { data: cleanObject(debouncedParam) }).then(setList)
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
		// fetch(`${apiUrl}/users`)
		// 	.then(async response => {
		// 		if (response.ok) {
		// 			setUsers(await response.json())
		// 		}
		// 	})
		client('user').then(setUsers)
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
