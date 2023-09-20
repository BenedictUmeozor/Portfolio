import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";

type Context = {
  theme: string;
  _setTheme: Function;
};

type Props = {
  children: ReactNode;
};

const ThemeContext = createContext<Context>({
  theme: "light",
  _setTheme: () => {},
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.className = "light";
    } else {
      document.documentElement.className = "dark";
    }
  }, [theme]);

  const _setTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, _setTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
