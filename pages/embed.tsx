
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Uniq from '../public/components/uniq';
import { parseURI } from '../public/uniq';

// http://localhost:3000/embed?uri=255,3,25,15,2,155,255,255,255,255,255,155,255,3,25,15,2,155,251,41,25,21,59,24,25,2&x=9&y=3  

const Embed = () => {
	const [ uniq, setUniq ] = useState(null);
	const [ ucolor, setColor ] = useState("#fff");
    const router = useRouter()

	useEffect(() => {
        const { uri, x, y, color } = router.query;
		console.log(router.query);

        if(uri) setUniq(parseURI(uri as string, x as string, y as string));
		if(color) setColor(color as string);
	}, [router.query])

	return (
		<Uniq uniq={uniq} color={`${ucolor}`} />
	)
}

export default Embed;