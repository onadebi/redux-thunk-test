import './posts.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { PostsType, ReactionsType, reactionAdded } from './PostsSlice';

export const reactionEmojis = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}
interface IProps{
    post: PostsType;
}

const ReactionButtons: React.FC<IProps> = ({post}) => {
    
    const dispatch  = useDispatch();
    const emojiObject=  Object.entries(reactionEmojis);

    const reactionButtons = emojiObject.map(([name, emojiValue], index)=>{
        const reactionType = name as ReactionsType;
        // const reactionTypeCount = ReactionsTypeCount[reactionType];
        return(
        <button
        key={name}
        type='button'
        className='reactionButton' onClick={()=> dispatch(reactionAdded({id: post.id, reaction: reactionType })) }>{emojiValue} {post.reactions[reactionType]} </button>
        )
});
  return <div>{reactionButtons}</div>;
}


export default ReactionButtons