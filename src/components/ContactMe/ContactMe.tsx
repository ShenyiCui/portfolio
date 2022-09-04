import React from 'react';

import Icon, { IconType } from '@components/Icon';

type Props = {
  className?: string;
  size?: number;
  sizeMd?: number;
};

const ContactMe = ({ className, size = 32, sizeMd = 32 }: Props) => {
  return (
    <div className={`flex space-x-5 ${className}`}>
      <Icon
        iconType={IconType.LinkedIn}
        vSpace='mt-0'
        size={size}
        sizeMd={sizeMd}
        link='https://www.linkedin.com/in/shenyi-cui-4b9b95211/'
      />
      <Icon iconType={IconType.Github} vSpace='mt-0' size={size} sizeMd={sizeMd} link='https://github.com/ShenyiCui' />
      <Icon iconType={IconType.Email} vSpace='mt-0' size={size} sizeMd={sizeMd} link='mailto:shenyicui@outlook.com' />
      <Icon iconType={IconType.Resume} vSpace='mt-0' size={size} sizeMd={sizeMd} link='mailto:shenyicui@outlook.com' />
    </div>
  );
};

export default ContactMe;
