import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img className={styles.cover} src='https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=30' />

            <div className={styles.profile}>
                <Avatar src="https://github.com/GuilhaoF.png" />
                <strong>Luis Felipe</strong>
                <span> @Web Developer</span>
                <div className={styles.followers}>
                    <span>+900 Seguidores</span>
                    <span>+900 Seguindo</span>
                </div>

            </div>


            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu  Perfil
                </a>
            </footer>



        </aside>
    )
}