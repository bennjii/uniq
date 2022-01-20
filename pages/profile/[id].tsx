
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from "../../styles/Home.module.css"
import Uniq from '../../public/components/uniq';
import { generateUnique, parseURI } from '../../public/uniq';
import { ListItem } from '../../public/components/list_item';
import { SiDiscord, SiGithub, SiInstagram, SiTwitter } from 'react-icons/si';

// http://localhost:3000/embed?uri=255,3,25,15,2,155,255,255,255,255,255,155,255,3,25,15,2,155,251,41,25,21,59,24,25,2&x=9&y=3  

const Profile = () => {
	const [ uniq, setUniq ] = useState(null);
    const router = useRouter()

	useEffect(() => {
        setUniq(generateUnique(3,9));
	}, [router.query])

	//	<Uniq uniq={uniq} /> 

	return (
        <div className={styles.profileParent}>
            <div>
                <div>
                    <Uniq uniq={uniq} /> 
                </div>
                <div>
                    <p>Just a little description about me!</p>

                    <ul className={styles.profGrid}
                    >
                        <ListItem icon={SiGithub} text="UnRealReincarlution" />
                        <ListItem icon={SiDiscord} text="unrealg#4406" />
                        <ListItem icon={SiTwitter} text="@unrealg3" />
                        <ListItem icon={SiInstagram} text="unrealg" />
                    </ul>
                </div> 
            </div>
        </div>
	)
}

export default Profile;