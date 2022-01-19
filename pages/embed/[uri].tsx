
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { parseURI } from '../../public/uniq';
import styles from '../../styles/Home.module.css'


export default function Home() {
	const [ uniq, setUniq ] = useState(null);
    const router = useRouter()

	useEffect(() => {
        const { uri, x, y } = router.query;
		setUniq(parseURI(uri as string, x as string, y as string));
	}, [router.query])

	return (
		<div className={styles.uniqParent}>
			{
				uniq ? 
				uniq.map((e, i) => {
					return (
						<div key={i}>
							{
								e.map((_e, i2) => {
									return <div key={`${i}-${i2}`} style={{ "--opacity": _e / 255 } as React.CSSProperties} />
								})
							}
						</div>
					)
				})
				:
				<></>
			}
		</div>
	)
}
