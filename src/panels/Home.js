import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Group from '@vkontakte/vkui/dist/components/Group/Group'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar'
import { createMap } from '../map/createMap'

const Home = ({ id, go, geoData }) => {
	console.log('Home', geoData)
	let mapContainerRef = useRef(null)

	useEffect(() => { createMap(mapContainerRef, geoData) })

	return (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		
			<div ref={el => mapContainerRef = el} className="map"></div>

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Click to see blabla
				</Button>
			</Div>
		</Group>
	</Panel>
)}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
}

export default Home
