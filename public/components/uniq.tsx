
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SiGithub } from 'react-icons/si'
import styles from '../../styles/Home.module.css'

export const Uniq: React.FC<{ uniq: number[][], color?: string, invert?: boolean }> = ({ uniq, color, invert }) => {
	const [ uniq_, setUniq ] = useState(null);
    const [ clicked, setClicked ] = useState(false);
    const router = useRouter()

	useEffect(() => {
        setUniq(uniq);
	}, [uniq])

	return (
        <div>
            <div className={styles.uniq} onClick={() => setClicked(!clicked)}>
                <div className={styles.uniqParent}>
                    {
                        uniq_ ? 
                        uniq_.map((e, i) => {
                            return (
                                <div key={i}>
                                    {
                                        e.map((_e, i2) => {
                                            return <div key={`${i}-${i2}`} style={{ 
                                                "--opacity": invert ? 1 - (_e / 255) : _e / 255,
                                                backgroundColor: color ? color : "#ffffff" 
                                            } as React.CSSProperties} />
                                        })
                                    }
                                </div>
                            )
                        })
                        :
                        <></>
                    }
                </div>
            </div>

            {
                clicked ?
                <div className={styles.expanded}>
                    {
                        SiGithub({
                            height: '1.5rem',
                            width: '1.5rem'
                        })
                    }
                </div>
                :
                <></>
            }
        </div>
	)
}
