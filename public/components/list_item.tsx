import {ReactNode} from 'react';
import type {IconType} from 'react-icons';
import { FiChevronRight } from 'react-icons/fi'

export function ListItem({text, icon}: {text: ReactNode; icon: IconType}) {
	return (
		<li>
            <div>
                <span>{icon({
                    style: {
                        width: '1.5rem',
                        height: '1.5rem'
                    }
                })}</span>
                <span>{text}</span>
            </div>
			
            <div>
                {
                    FiChevronRight({
                        style: {
                            height: '1rem',
                            width: '1rem',
                            marginLeft: '1px'
                        }
                    })
                }
            </div>
		</li>
	);
}   