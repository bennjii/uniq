
import React, { useEffect, useState } from 'react';
import Uniq from '../public/components/uniq';
import { generateUnique } from '../public/uniq';
import styles from '../styles/Home.module.css'

export default function Home() {
	const [ uniq, setUniq ] = useState(null);
	const [ obf, setObf ] = useState(true);

	useEffect(() => {
		setUniq(generateUnique(3, 9));

		setTimeout(() => {
			setObf(false);
		}, 5000);
	}, [])

	return (
		<Uniq uniq={uniq} obfuscate={obf}/>
	)
}
