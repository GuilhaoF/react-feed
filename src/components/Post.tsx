import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";


//em objetos no typescript colocar o tipo do objeto todo e nao so de uma caracteristica 

//posso fazer a destruturacao e usar so a propriedade 
// {author} => {author.name}

interface Author {
    name: string;
    role:string;
    avatarUrl:string;
}

interface Content{
    type : 'paragraph' | 'link';
    content: string;
}

interface PostProps{
    author: Author;
    publishedAt:Date;
    content: Content[];
}

export function Post({ author, content, publishedAt }:PostProps) {

    const [comments, setComments] = useState([
        'Post Bacana,Hein?!',
        'Gostei Demais Mano , Meu Favorito Tambem'
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    //event.target.comment.value 
    //basta acessar nome colocado no campo de input

    const isNewCommentEmpty = newCommentText.length === 0

    function handleCreateNewComment(event:FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('')


    }
    function handleNewComment(event:ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete:string) {

        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne)
    }
    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Este Campo e Obrigatorio!!')
    }




    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar hasBorder src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    }
                    else if (line.type === 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>


            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Comentario</strong>

                <textarea
                    required
                    value={newCommentText}
                    onChange={handleNewComment}
                    onInvalid={handleNewCommentInvalid}
                    placeholder="Deixe seu Comentario"
                />

                <footer>
                    <button disabled={isNewCommentEmpty} type="submit">Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>


        </article>
    )
}