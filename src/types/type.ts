export interface District {
  id: number;
  name: string;
  upazilas: string[];
}
export interface Divisions {
  id: number;
  name: string;
}

export interface Districts {
  [key: string]: District[];
}

export interface FormData {
  name: string;
  address: string;
  division: string;
  district: string;
  subDistrict: string;
  phone: string;
}
