import React from 'react';

import Icon, { IconType } from '@components/Icon';

type Props = {
  className?: string;
  size?: string;
};

const ContactMe = ({ className, size }: Props) => {
  return (
    <div className={`flex space-x-5 ${className}`}>
      <Icon iconType={IconType.LinkedIn} vSpace='mt-0' size={size} link='https://www.linkedin.com/in/shenyi-cui-4b9b95211/' />
      <Icon iconType={IconType.Github} vSpace='mt-0' size={size} link='https://github.com/ShenyiCui' />
      <Icon iconType={IconType.Email} vSpace='mt-0' size={size} link='mailto:shenyicui@outlook.com' />
      <Icon iconType={IconType.Resume} vSpace='mt-0' size={size} link='mailto:shenyicui@outlook.com' />
    </div>
  );
};

export default ContactMe;
