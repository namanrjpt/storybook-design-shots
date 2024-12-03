const useTheme = () => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((prevTheme) =>
			prevTheme === 'light' ? 'dark' : 'light'
		);
	};

	return { theme, toggleTheme };
};
