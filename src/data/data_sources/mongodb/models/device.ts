interface LocalizedString {
  en: string;
  th: string;
}

interface LocalizedNumber {
  en: number;
  th: number;
}

interface LocalizedStringArray {
  en: string[];
  th: string[];
}

export interface Device {
  id: string;
  brand: string;
  type: string;
  name: LocalizedString;
  image_url: string;
  color: LocalizedStringArray;
  price: LocalizedNumber;
  capacity: string[];
  display: LocalizedStringArray;
  height: LocalizedString;
  width: LocalizedString;
  depth: LocalizedString;
  weight: LocalizedString;
  chip_ram: LocalizedStringArray;
  main_camera: LocalizedStringArray;
  video: LocalizedStringArray;
  front_camera: LocalizedStringArray;
  cellular_wireless: LocalizedStringArray;
  power_battery: LocalizedStringArray;
  sim_card: LocalizedStringArray;
  connector: string;
  official_website: LocalizedString;
}

export interface DeviceSearchCounting {
  id: string;
  brand: string;
  type: string;
  name: string;
  search_count: number;
}
