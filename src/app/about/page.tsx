import React from 'react';
import Team from '../components/Team';
import AboutSec from '../components/about';
import CommentsSection from '../components/Commentsection';

const Page = () => {
  return (
    <div className="mx-auto max-w-screen-2xl overflow-x-hidden">
        <AboutSec />
        <Team />
        <CommentsSection />
    </div>
  );
};

export default Page;
