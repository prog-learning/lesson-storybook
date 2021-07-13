import { StyledPostCard } from './PostCard.styled';

export const PostCard = ({ name, content, date, tags = [], dark = false }) => {
  const dateFormat = (date, format) => {
    let d = date;
    if (typeof d !== Date) {
      d = new Date(date);
    }
    format = format.replace(/YYYY/, d.getFullYear());
    format = format.replace(/MM/, d.getMonth() + 1);
    format = format.replace(/DD/, d.getDate());
    format = format.replace(/hh/, d.getHours());
    format = format.replace(/mm/, d.getMinutes());
    return format;
  };

  return (
    <StyledPostCard dark={dark}>
      <h2>{name}</h2>
      <p>{content}</p>
      <div className='tag-list'>
        {tags.map((tag) => (
          <div key={tag} className='tag'>
            #{tag}
          </div>
        ))}
      </div>
      <small>{dateFormat(date, 'YYYY/MM/DD hh:mm')}</small>
    </StyledPostCard>
  );
};
