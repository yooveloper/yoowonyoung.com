import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import List from 'src/components/List/List';
import { BLOG_TITLE } from 'src/constant/meta';
import { getPostList, getYears } from 'src/lib/getStaticData';
import { PostI } from 'src/types/post';

interface Props {
  postList: PostI[];
}

const Home: NextPage<Props> = ({ postList }) => {
  return (
    <>
      <NextSeo
        title={`${BLOG_TITLE} blog`}
        description='프론트엔드 개발자 유원영 블로그'
        canonical='https://yooveloper.dev'
        openGraph={{
          type: 'website',
          url: 'https://yooveloper.dev/',
          title: `${BLOG_TITLE} blog`,
          description: '프론트엔드 개발자 유원영의 블로그입니다.',
          images: [
            {
              url: 'https://yooveloper.dev/og-image.png',
              width: 1200,
              height: 630,
              alt: '대표 이미지',
            },
          ],
          site_name: `${BLOG_TITLE} blog`,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <List posts={postList} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postList = getPostList();
  return {
    props: {
      postList,
      years: getYears(),
    },
  };
};

export default Home;
