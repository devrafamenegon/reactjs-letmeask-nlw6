import { ReactNode } from 'react';
import cx from 'classnames';

import { StyledQuestion } from './styles'

type QuestionProps = {
  content: string,
  author: {
    name: string,
    avatar: string,
  }

  children?: ReactNode,
  isAnswered?: boolean,
  isHighlighted?: boolean,
}

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) {
  return (
    <StyledQuestion 
      className={cx(
        { answered: isAnswered },
        {  highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </StyledQuestion>
  );
}