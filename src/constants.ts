import { Project, Service, Category } from './types';

export const CATEGORIES: Category[] = ['TVC', 'FILM', 'MV', 'Fashion', 'REEL'];

export const PROJECTS: Project[] = [
  {
    id: 'film-new',
    title: { en: 'FILM: New Cinematic Project', vi: 'FILM: Dự án Điện ảnh Mới' },
    category: 'FILM',
    youtubeId: 'g5VKorCOaZc',
    thumbnail: 'https://img.youtube.com/vi/g5VKorCOaZc/maxresdefault.jpg',
  },
  // TVC
  {
    id: 'tvc-1',
    title: { en: 'TVC: Commercial 1', vi: 'TVC: Quảng cáo 1' },
    category: 'TVC',
    youtubeId: 'h9BE5vSl1jM',
    thumbnail: 'https://img.youtube.com/vi/h9BE5vSl1jM/maxresdefault.jpg',
  },
  {
    id: 'tvc-2',
    title: { en: 'TVC: Commercial 2', vi: 'TVC: Quảng cáo 2' },
    category: 'TVC',
    youtubeId: 'kO3Iy897Sxs',
    thumbnail: 'https://img.youtube.com/vi/kO3Iy897Sxs/maxresdefault.jpg',
  },
  {
    id: 'tvc-3',
    title: { en: 'TVC: Commercial 3', vi: 'TVC: Quảng cáo 3' },
    category: 'TVC',
    youtubeId: 'jIUEGr67yHM',
    thumbnail: 'https://img.youtube.com/vi/jIUEGr67yHM/maxresdefault.jpg',
  },
  {
    id: 'tvc-4',
    title: { en: 'TVC: Commercial 4', vi: 'TVC: Quảng cáo 4' },
    category: 'TVC',
    youtubeId: 'byv3DHcG1jQ',
    thumbnail: 'https://img.youtube.com/vi/byv3DHcG1jQ/maxresdefault.jpg',
  },
  {
    id: 'tvc-5',
    title: { en: 'TVC: Commercial 5', vi: 'TVC: Quảng cáo 5' },
    category: 'TVC',
    youtubeId: 'T8-5fh9vewY',
    thumbnail: 'https://img.youtube.com/vi/T8-5fh9vewY/maxresdefault.jpg',
  },
  {
    id: 'tvc-6',
    title: { en: 'TVC: Commercial 6', vi: 'TVC: Quảng cáo 6' },
    category: 'TVC',
    youtubeId: 'EdUgHz9jljI',
    thumbnail: 'https://img.youtube.com/vi/EdUgHz9jljI/maxresdefault.jpg',
  },
  // FILM (3 projects)
  {
    id: 'film-1',
    title: { en: 'FILM: Cinematic 1', vi: 'FILM: Điện ảnh 1' },
    category: 'FILM',
    youtubeId: 'MCFrqhZVM7w',
    thumbnail: 'https://img.youtube.com/vi/MCFrqhZVM7w/maxresdefault.jpg',
  },
  {
    id: 'film-2',
    title: { en: 'FILM: Cinematic 2', vi: 'FILM: Điện ảnh 2' },
    category: 'FILM',
    youtubeId: 'yp_yvrHB3zE',
    thumbnail: 'https://img.youtube.com/vi/yp_yvrHB3zE/maxresdefault.jpg',
  },
  {
    id: 'film-3',
    title: { en: 'FILM: Cinematic 3', vi: 'FILM: Điện ảnh 3' },
    category: 'FILM',
    youtubeId: 'VSHbtxS0IwU',
    thumbnail: 'https://img.youtube.com/vi/VSHbtxS0IwU/maxresdefault.jpg',
  },
  {
    id: 'film-4',
    title: { en: 'FILM: Cinematic 4', vi: 'FILM: Điện ảnh 4' },
    category: 'FILM',
    youtubeId: 'DX0XpBfKPU8',
    thumbnail: 'https://img.youtube.com/vi/DX0XpBfKPU8/maxresdefault.jpg',
  },
  {
    id: 'film-5',
    title: { en: 'FILM: Cinematic 5', vi: 'FILM: Điện ảnh 5' },
    category: 'FILM',
    youtubeId: 'iM0NQbacyAg',
    thumbnail: 'https://img.youtube.com/vi/iM0NQbacyAg/maxresdefault.jpg',
  },
  {
    id: 'film-6',
    title: { en: 'FILM: Cinematic 6', vi: 'FILM: Điện ảnh 6' },
    category: 'FILM',
    youtubeId: 'w-JriLA8fJk',
    thumbnail: 'https://img.youtube.com/vi/w-JriLA8fJk/maxresdefault.jpg',
  },
  // FASHION (3 projects)
  {
    id: 'fashion-1',
    title: { en: 'FASHION: Style 1', vi: 'FASHION: Phong cách 1' },
    category: 'Fashion',
    youtubeId: 'sTLEBJs-5yA',
    thumbnail: 'https://img.youtube.com/vi/sTLEBJs-5yA/maxresdefault.jpg',
  },
  {
    id: 'fashion-2',
    title: { en: 'FASHION: Style 2', vi: 'FASHION: Phong cách 2' },
    category: 'Fashion',
    youtubeId: 'i0wSHXsow7w',
    thumbnail: 'https://img.youtube.com/vi/i0wSHXsow7w/maxresdefault.jpg',
  },
  {
    id: 'fashion-3',
    title: { en: 'FASHION: Style 3', vi: 'FASHION: Phong cách 3' },
    category: 'Fashion',
    youtubeId: 'FdedOo46WBI',
    thumbnail: 'https://img.youtube.com/vi/FdedOo46WBI/maxresdefault.jpg',
  },
  // MV (1 project)
  {
    id: 'mv-1',
    title: { en: 'MV: Music Video 1', vi: 'MV: Video Âm nhạc 1' },
    category: 'MV',
    youtubeId: 'RANCCW9flY8',
    thumbnail: 'https://img.youtube.com/vi/RANCCW9flY8/maxresdefault.jpg',
  },
  // REEL (was BRAND)
  {
    id: 'reel-1',
    title: { en: 'REEL: Identity 1', vi: 'REEL: Nhận diện 1' },
    category: 'REEL',
    youtubeId: 'eZLotudAUyw',
    thumbnail: 'https://img.youtube.com/vi/eZLotudAUyw/maxresdefault.jpg',
  },
  {
    id: 'reel-2',
    title: { en: 'REEL: Identity 2', vi: 'REEL: Nhận diện 2' },
    category: 'REEL',
    youtubeId: 'l0kPTTU1HwM',
    thumbnail: 'https://img.youtube.com/vi/l0kPTTU1HwM/maxresdefault.jpg',
  },
  {
    id: 'reel-3',
    title: { en: 'REEL: Identity 3', vi: 'REEL: Nhận diện 3' },
    category: 'REEL',
    youtubeId: 'QFnQ75FXThU',
    thumbnail: 'https://img.youtube.com/vi/QFnQ75FXThU/maxresdefault.jpg',
  },
  {
    id: 'reel-4',
    title: { en: 'REEL: Identity 4', vi: 'REEL: Nhận diện 4' },
    category: 'REEL',
    youtubeId: 'e3huEWKzQyM',
    thumbnail: 'https://img.youtube.com/vi/e3huEWKzQyM/maxresdefault.jpg',
  },
  {
    id: 'reel-5',
    title: { en: 'REEL: Identity 5', vi: 'REEL: Nhận diện 5' },
    category: 'REEL',
    youtubeId: 'DRoglZj0_MI',
    thumbnail: 'https://img.youtube.com/vi/DRoglZj0_MI/maxresdefault.jpg',
  },
  {
    id: 'reel-6',
    title: { en: 'REEL: Identity 6', vi: 'REEL: Nhận diện 6' },
    category: 'REEL',
    youtubeId: '7U4qCD6Cgok',
    thumbnail: 'https://img.youtube.com/vi/7U4qCD6Cgok/maxresdefault.jpg',
  }
];

export const SERVICES: Service[] = [
  {
    title: { en: 'Commercial Videos & Ads', vi: 'Video thương mại và quảng cáo' },
    description: { 
      en: 'High-impact AI-driven commercials for brands and products.',
      vi: 'Quảng cáo AI tác động cao cho các thương hiệu và sản phẩm.'
    }
  },
  {
    title: { en: 'Comprehensive AI Filmmaking Training', vi: 'Đào tạo chuyên ngành làm phim AI trọn gói' },
    description: {
      en: 'Mastering AI tools for creative and professional excellence.',
      vi: 'Làm chủ các công cụ AI để đạt được sự xuất sắc trong sáng tạo và chuyên nghiệp.'
    }
  },
  {
    title: { en: 'End-to-End Production', vi: 'Sản xuất trọn gói' },
    description: {
      en: 'Full-service production from script to final AI render.',
      vi: 'Dịch vụ sản xuất đầy đủ từ kịch bản đến bản render AI cuối cùng.'
    }
  },
  {
    title: { en: 'Cinematic AI Film Workflows', vi: 'Xây dựng Ứng dụng Workflow làm phim điện ảnh' },
    description: {
      en: 'Building custom AI-driven pipelines for professional cinematic production.',
      vi: 'Xây dựng các quy trình AI tùy chỉnh cho sản xuất phim điện ảnh chuyên nghiệp.'
    }
  },
  {
    title: { en: 'AI Concept & Visual', vi: 'AI Concept & Visual' },
    description: {
      en: 'Creating unique concepts and visuals for branding projects.',
      vi: 'Sáng tạo các concept và visual cho các branding.'
    }
  },
  {
    title: { en: 'AI KOL/Influencer Affiliate', vi: 'AI KOL/Influencer Affiliate' },
    description: {
      en: 'Creating AI KOLs and content tailored for the digital marketing industry.',
      vi: 'Tạo các KOL và content cho ngành tiếp thị số.'
    }
  }
];

export const ABOUT_ME = {
  title: {
    en: "HI, I'M DINO — YOUR AI VIDEO STORYTELLER!",
    vi: "XIN CHÀO, TÔI LÀ DINO — NGƯỜI KỂ CHUYỆN QUA VIDEO AI!"
  },
  description: {
    en: "MY PASSION IS TURNING BOLD IDEAS INTO CAPTIVATING VISUAL STORIES THAT NOT ONLY LOOK STUNNING BUT FEEL AUTHENTICALLY, POWERFULLY HUMAN.",
    vi: "ĐAM MÊ CỦA TÔI LÀ BIẾN NHỮNG Ý TƯỞNG TÁO BẠO THÀNH NHỮNG CÂU CHUYỆN HÌNH ẢNH HẤP DẪN, KHÔNG CHỈ ĐẸP MẮT MÀ CÒN MANG LẠI CẢM GIÁC CHÂN THỰC."
  },
  subDescription: {
    en: "I create commercial products where technology serves creativity. My goal is to give your brand the opportunity to tell vivid stories.",
    vi: "Tôi tạo ra các sản phẩm thương mại nơi công nghệ phục vụ sự sáng tạo. Mục tiêu của tôi là mang đến cho thương hiệu của bạn cơ hội kể những câu chuyện sống động."
  }
};

export const UI_TEXT = {
  portfolio: { en: 'Portfolio', vi: 'Dự án' },
  about: { en: 'About', vi: 'Giới thiệu' },
  services: { en: 'Services', vi: 'Dịch vụ' },
  contact: { en: 'Contact', vi: 'Liên hệ' },
  work: { en: 'FEATURE', vi: 'NỔI BẬT' },
  all: { en: 'All', vi: 'Tất cả' },
  watchVideo: { en: 'Watch Video', vi: 'Xem Video' },
  scrollExplore: { en: 'Scroll to explore', vi: 'Cuộn để khám phá' },
  whatIDo: { en: 'What I do', vi: 'Tôi làm gì' },
  letsTell: { en: "LET'S TELL", vi: "HÃY KỂ" },
  yourStory: { en: 'your STORY', vi: 'CÂU CHUYỆN của bạn' },
  rights: { en: 'ALL RIGHTS RESERVED.', vi: 'MỌI QUYỀN ĐƯỢC BẢO LƯU.' }
};

export const HERO_VIDEO_URL = "https://drive.google.com/uc?export=download&id=1jg36_sPtPkfyNqY9BR2tqtWi7KuimFN7";
export const HERO_IMAGE_URL = "https://i.ibb.co/0y4K7cRL/upscale-the-phone-202604031105.jpg";
export const HERO_YOUTUBE_ID = "VSHbtxS0IwU";
export const ABOUT_IMAGE_URL = "https://i.ibb.co/zH51fmWQ/DINO.jpg";

