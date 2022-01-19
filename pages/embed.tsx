
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Uniq } from '../public/components/uniq';
import { parseURI } from '../public/uniq';

// http://localhost:3000/embed?uri=255,3,25,15,2,155,255,255,255,255,255,155,255,3,25,15,2,155,251,41,25,21,59,24,25,2&x=9&y=3  

export default function Home() {
	const [ uniq, setUniq ] = useState(null);
    const router = useRouter()

	useEffect(() => {
        const { uri, x, y } = router.query;

        if(uri) setUniq(parseURI(uri as string, x as string, y as string));
	}, [router.query])

	return (
		<Uniq uniq={uniq} color={"#fff"} />
	)
}
