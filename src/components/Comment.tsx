
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps{
    content: string;
    onDeleteComment:(comment:string) => void;
}


export function Comment({ content, onDeleteComment }:CommentProps) {

    const [like, setLike] = useState(0)




    function handleDeleteComment() {
        onDeleteComment(content)
    }

    //sempre que precisar fazer uma atualizacao que dpende do valor que ela tinha anteriormente
    /**
     * setLike((state)=> {return state + 1})
     */
    function handleLikeComment() {
        setLike((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/GuilhaoF.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luis Felipe</strong>
                            <time title="20 de Julho as 22:50" dateTime="2022-05-11 08:13">
                                Publicado ha 1h
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentario">
                            <Trash size={24} />
                        </button>

                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir
                        <span>
                            {like}
                        </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}