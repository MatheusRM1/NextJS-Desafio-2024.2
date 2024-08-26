import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </html>
    );
}