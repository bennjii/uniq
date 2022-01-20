
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SiDiscord, SiGithub, SiTwitter } from 'react-icons/si'
import { IoBarcodeOutline } from 'react-icons/io5'
import styles from '../../styles/Home.module.css'
import { generateUnique } from '../uniq';

const Uniq: React.FC<{ uniq: number[][], color?: string, invert?: boolean, obfuscate?: boolean }> = ({ uniq, color, invert, obfuscate }) => {
	const [ uniq_, setUniq ] = useState(null);
    const [ clicked, setClicked ] = useState(false);
    const router = useRouter()

	useEffect(() => {
        let gen;
        if(obfuscate) {
            gen = setInterval(() => {
                if(uniq) setUniq(generateUnique(uniq.length,uniq[0].length))
            }, 150);
        }else {
            setUniq(uniq);
        }

        return () => {
            clearInterval(gen)
        }
	}, [uniq, obfuscate])

	return (
        <div className={styles.uniqGroup}>
            <div className={styles.uniq} onMouseOver={() => setClicked(true)} onMouseLeave={() => setClicked(false)}>
                <div className={styles.uniqParent}>
                    {
                        uniq_ ? 
                        uniq_.map((e, i) => {
                            return (
                                <div key={i}>
                                    {
                                        e.map((_e, i2) => {
                                            return <div key={`${i}-${i2}`} style={{ 
                                                "--opacity": invert ? (1 - (_e / 255))*(clicked ? 0.25 : 1) : (_e / 255)*(clicked ? 0.25 : 1),
                                                backgroundColor: color ? `#${color}` : "#ffffff" 
                                            } as React.CSSProperties} />
                                        })
                                    }
                                </div>
                            )
                        })
                        :
                        <></>
                    }

                    {
                        clicked ?
                        <div className={styles.expanded}>
                            <div>
                                {
                                    SiGithub({
                                        height: '20px',
                                        width: '20px',
                                        color: color
                                    })
                                }

                                {           
                                    SiDiscord({
                                        height: '20px',
                                        width: '20px',
                                        color: color
                                    })
                                }

                                {           
                                    SiTwitter({
                                        height: '1.5rem',
                                        width: '1.5rem',
                                        color: color
                                    })
                                }
                            </div>
                            
                            <div>
                                {/* <p style={{ color: `#${color}` }}>ה</p> */}
                                <p style={{ color: `#${color}` }}>א</p>
                            </div>
                        </div>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
	)
}

export default Uniq;