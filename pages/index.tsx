/* eslint-disable react/jsx-props-no-spreading */
import { Container } from 'reactstrap';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
// import { Footer } from '../component/footer';
import { Introduce } from '../component/introduce';

import { Profile } from '../component/profile';
import { Project } from '../component/project';
import { Award } from '../component/award';
import { Skill } from '../component/skill';
import { Style } from '../component/common/Style';
import Payload from '../payload';
import { Teach } from '../component/teach';

function Yosume() {
  return (
    <>
      <NextSeo {...Payload._global.seo} />
      <Head>
        <title>{Payload._global.headTitle}</title>
        <link rel="shortcut icon" href={Payload._global.favicon} />
      </Head>
      <Container style={Style.global}>
        <Profile.Component payload={Payload.profile} />
        <Introduce.Component payload={Payload.introduce} />
        <Skill.Component payload={Payload.skill} />
        <Project.Component payload={Payload.project} />
        <Award.Component payload={Payload.award} />
        <Education.Component payload={Payload.education} />
        <Teach.Component payload={Payload.teach} />
        <Etc.Component payload={Payload.etc} />
      </Container>
    </>
  );
}

export default Yosume;
