export interface Modality {
  modalityId: string;
  modalityName: string;
  modalityDescription?: string;
  modalBanner?: string;
  aboutBanner?: string;
  icon?: string;
  color?: string;
  infos?: ModalityInfo[];
  achievements?: Achievement[];
}

export interface AchievementsSection {
  title: string;
  description: string;
  modalities: Modality[];
}

export interface Achievement {
  items: string[];
  subItems?: string[];
}

export interface ModalityInfo {
  infoId: string;
  title: string;
  description: string;
  coverImage: string;
}
