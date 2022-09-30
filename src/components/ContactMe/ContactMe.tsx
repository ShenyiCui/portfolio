import React from 'react';

import Icon, { IconType } from '@components/Icon';

type Props = {
  className?: string;
  size?: string;
};

const ContactMe = ({ className, size }: Props) => {
  return (
    <div className={`flex space-x-5 ${className}`}>
      <Icon iconType={IconType.LinkedIn} size={size} link='https://www.linkedin.com/in/shenyi-cui-4b9b95211/' />
      <Icon iconType={IconType.Github} size={size} link='https://github.com/ShenyiCui' />
      <Icon iconType={IconType.Email} size={size} link='mailto:shenyicui@outlook.com' />
      <Icon
        iconType={IconType.Resume}
        size={size}
        link='https://github.com/ShenyiCui/portfolio/raw/main/public/Resume-Shen-Yi-Cui-USA%20CAA%20200922.pdf'
      />
    </div>
  );
};

export default ContactMe;
