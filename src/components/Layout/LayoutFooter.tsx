import { LayoutFooterContainer } from './Layout.styled';

const LayoutFooter = () => {
  return (
    <LayoutFooterContainer>
      © {new Date().getFullYear()} yoowonyoung, Thanks to&nbsp;
      <a href='https://kimjeongwonn.com' target='_blank' rel='noopener noreferrer'>
        kimjeongwonn
      </a>
    </LayoutFooterContainer>
  );
};

export default LayoutFooter;
