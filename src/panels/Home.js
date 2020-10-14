import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiN2V2ZW51cCIsImEiOiJja2c5OW50NmMwbGh2MnJsczBwb3BuMXVoIn0.s6TgfUXLti8tEHE_QRbljg'

const Home = ({ id, go, fetchedUser }) => {
	let mapContainerRef = useRef(null)

	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef,
			style: 'mapbox://styles/mapbox/streets-v11'
		})
	}, [])

	const onChange = (evt) => {
		setInputValue(evt.target.value);
	}

	return (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Bridge">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.last_name} ${fetchedUser.first_name}`}
			</Cell>
		</Group>}

			<div ref={el => mapContainerRef = el}></div>

		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Click to see blabla
				</Button>
			</Div>
		</Group>
		<input name="input" value={inputValue} onChange={onChange}/>
		{inputValue === '14' ? <b>Угадал!</b> : <i>Не угадал</i>}
	</Panel>
)};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
