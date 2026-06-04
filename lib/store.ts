import { create } from 'zustand';
import { PersonalData } from './data';
import { fetchPersonalInfo } from './api';

interface PersonalDataStore {
  personalData: PersonalData | null;
  setPersonalData: () => Promise<void>;
}

export const usePersonalDataStore = create<PersonalDataStore>((set, get) => ({
  personalData: null,
  setPersonalData: async () => {
    if (get().personalData !== null) return;
    try {
      const data = await fetchPersonalInfo();
      set({ personalData: data });
    } catch (error) {
      console.error("Failed to fetch personal data", error);
    }
  },
}));
