import { TitleIcon } from '@components/assets/main';
import Image from 'next/image';
import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

const ImageIcon = ({ src, alt, width, height, quality }) => {
  return (
    <Image
      src={src}
      alt={alt}
      layout='responsive'
      width={width}
      height={height}
      quality={quality}
    />
  );
};

export default function Icon({ name, width, height, className, color, bgColor, size }) {
  const props = {
    width,
    height,
    className,
    color,
    bgColor,
    size,
  };

  switch (name) {
    // Aboutus
    case 'lock':
      return <ImageIcon src='/assets/aboutus/icons/lock.png' alt='lock' width={108} height={109} />;

    // Home
    case 'shield':
      return <ImageIcon src='/assets/home/icons/shield.png' alt='shield' width={76} height={75} />;

    // Main
    case 'title':
      return <TitleIcon {...props} />;
    case 'facebook':
      return <BsFacebook {...props} />;
    case 'twitter':
      return <BsTwitter {...props} />;
    case 'instagram':
      return <BsInstagram {...props} />;
    case 'youtube':
      return <BsYoutube {...props} />;
    case 'linkedin':
      return <BsLinkedin {...props} />;

    case 'facebook_color':
      return (
        <ImageIcon
          src='/assets/main/icons/facebook.png'
          alt='facebook'
          width={47}
          height={45}
          quality={100}
        />
      );
    case 'twitter_color':
      return (
        <ImageIcon
          src='/assets/main/icons/twitter.png'
          alt='twitter'
          width={47}
          height={45}
          quality={100}
        />
      );
    case 'instagram_color':
      return (
        <ImageIcon
          src='/assets/main/icons/instagram.png'
          alt='instagram'
          width={47}
          height={45}
          quality={100}
        />
      );
    case 'youtube_color':
      return (
        <ImageIcon
          src='/assets/main/icons/youtube.png'
          alt='youtube'
          width={47}
          height={45}
          quality={100}
        />
      );
    case 'telegram_color':
      return (
        <ImageIcon
          src='/assets/main/icons/telegram.png'
          alt='telegram'
          width={47}
          height={45}
          quality={100}
        />
      );
    case 'call_color':
      return (
        <ImageIcon
          src='/assets/main/icons/call.png'
          alt='call'
          width={75}
          height={75}
          quality={100}
        />
      );
    case 'whatsapp_color':
      return (
        <ImageIcon
          src='/assets/main/icons/whatsapp.png'
          alt='whatsapp'
          width={75}
          height={75}
          quality={100}
        />
      );

    case 'offer':
      return <ImageIcon src='/assets/main/menu/offer.png' alt='offer' width={89} height={89} />;
    case 'service':
      return <ImageIcon src='/assets/main/menu/service.png' alt='service' width={89} height={89} />;
    case 'outlet':
      return <ImageIcon src='/assets/main/menu/outlet.png' alt='outlet' width={89} height={89} />;
    case 'line':
      return <ImageIcon src='/assets/main/menu/line.png' alt='line' width={145} height={8} />;
    default:
      return null;
  }
}
