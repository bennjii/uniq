
import React, { useEffect, useState } from 'react';
import { Uniq } from '../public/components/uniq';
import { generateUnique } from '../public/uniq';
import styles from '../styles/Home.module.css'

export default function Home() {
	const [ uniq, setUniq ] = useState(null);

	useEffect(() => {
		setUniq(generateUnique(3, 9))
	}, [])

	return (
		<Uniq uniq={uniq} />
	)
}
