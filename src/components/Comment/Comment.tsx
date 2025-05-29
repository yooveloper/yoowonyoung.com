import Giscus from '@giscus/react';
import { CommentSection } from './Comment.styles';

const Comment = () => {
  return (
    <CommentSection>
      <Giscus
        id='comments'
        repo='yooveloper/yoowonyoung.com'
        repoId='R_kgDOOydaVQ'
        category='Comments'
        categoryId='DIC_kwDOOydaVc4CquSN'
        mapping='pathname'
        strict='0'
        reactionsEnabled='1'
        emitMetadata='0'
        inputPosition='bottom'
        theme='light'
        lang='ko'
        loading='lazy'
      />
    </CommentSection>
  );
};

export default Comment;
