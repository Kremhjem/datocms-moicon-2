import React from 'react';

interface LinkedinFollowCompanyProps {
    companyId: number;
    counter?: 'top' | 'right';
}

const LinkedinFollowCompany: React.FC<LinkedinFollowCompanyProps> = ({ companyId, counter = 'top' }) => (
    <iframe className="flex" src={`https://www.linkedin.com/pages-extensions/FollowCompany?id=${companyId}&counter=${counter}`} title='LinkedIn' />
);

export default LinkedinFollowCompany;
