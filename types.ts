export type SectionId = 'top' | 'concept' | 'organization' | 'venue' | 'schedule' | 'recruit' | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
  number: number;
}

export const SECTIONS: NavItem[] = [
  { id: 'top', label: 'トップ', number: 1 },
  { id: 'concept', label: 'コンセプト', number: 2 },
  { id: 'organization', label: '運営について', number: 3 },
  { id: 'venue', label: '会場案内', number: 4 },
  { id: 'schedule', label: '開催情報', number: 5 },
  { id: 'recruit', label: '募集', number: 6 },
  { id: 'contact', label: 'お問い合わせ', number: 7 },
];