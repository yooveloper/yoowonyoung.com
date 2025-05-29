import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import List from 'src/components/List/List';
import { getPostList, getYears } from 'src/lib/getStaticData';
import { PostI } from 'src/types/post';

interface Props {
  postList: PostI[];
}

const Year: NextPage<Props> = ({ postList }) => {
  const router = useRouter();
  return (
    <>
      <NextSeo title={String(router.query.year)} />
      <List posts={postList} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ year: string }> = async () => {
  const years = getYears();
  return {
    paths: years.map(year => ({
      params: { year: String(year) }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<Props, { year: string }> = async ({ params }) => {
  const postList = getPostList(params?.year);
  return {
    props: {
      postList,
      years: getYears()
    }
  };
};

export default Year;
