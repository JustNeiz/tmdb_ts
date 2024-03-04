import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ThemeState {
    theme: 'dark' | 'light';
    changeTheme: () => void;
}

export const useTheme = create<ThemeState>()(
    persist(
        (set, get) => ({
            theme: 'lite',
            changeTheme: () => {
                get().theme === 'light'
                    ? set({theme: 'dark'})
                    : set({theme: 'light'});
            },
        }),
        {
            name: 'theme-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);