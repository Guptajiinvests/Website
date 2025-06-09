import React from 'react';

interface ProfileCardProps {
  image: string;
  name: string;
  title: string;
  subtitle?: string;
  linkedinUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, title, subtitle, linkedinUrl }) => {
  const cardContent = (
    <div className="w-80 bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-full h-80 object-cover"
        loading="lazy"
      />
      <div className="w-full bg-white px-3 py-4">
        <div className="text-xl font-semibold text-gray-900">{name}</div>
        <div className="text-gray-600 text-base">{title}</div>
        {subtitle && <div className="text-gray-500 text-sm mt-1">{subtitle}</div>}
      </div>
    </div>
  );

  return linkedinUrl ? (
    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="block">{cardContent}</a>
  ) : (
    cardContent
  );
};

export default ProfileCard; 