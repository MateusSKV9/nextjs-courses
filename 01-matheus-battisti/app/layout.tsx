import "./globals.css";
import Footer from "./shared/components/Footer/Footer";
import Header from "./shared/components/Header/Header";
import Main from "./shared/components/Main/Main";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</body>
		</html>
	);
}
